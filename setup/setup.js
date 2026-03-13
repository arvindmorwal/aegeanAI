#!/usr/bin/env node
/**
 * aegeanAI — One-time setup script
 * Run: node setup/setup.js
 *
 * What this does:
 *   1. Creates all 16 Stripe Payment Links
 *   2. Updates aegean-agency/assets/js/packages.js with real Stripe links
 *   3. Creates the NEXUS Orders database in Notion
 *   4. Creates the Tally intake form (if TALLY_API_KEY is set)
 *   5. Patches thank-you.html, contact.html, about.html with your details
 */

const fs   = require('fs');
const path = require('path');
const https = require('https');

// ─── Load .env ────────────────────────────────────────────────────
const envPath = path.join(__dirname, '.env');
if (!fs.existsSync(envPath)) {
  console.error('❌  No .env file found. Copy setup/.env.example to setup/.env and fill it in.');
  process.exit(1);
}
fs.readFileSync(envPath, 'utf8').split('\n').forEach(line => {
  const [key, ...rest] = line.split('=');
  if (key && rest.length) process.env[key.trim()] = rest.join('=').split('#')[0].trim();
});

const {
  STRIPE_SECRET_KEY,
  NOTION_API_KEY,
  NOTION_PARENT_PAGE_ID,
  TALLY_API_KEY,
  SITE_URL,
  FOUNDER_NAME,
  SUPPORT_EMAIL,
} = process.env;

const SITE_DIR = path.join(__dirname, '..', 'aegean-agency');
const PACKAGES_JS = path.join(SITE_DIR, 'assets', 'js', 'packages.js');

// ─── Helpers ──────────────────────────────────────────────────────
function apiRequest(options, body) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, res => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => {
        try { resolve({ status: res.statusCode, body: JSON.parse(data) }); }
        catch (e) { resolve({ status: res.statusCode, body: data }); }
      });
    });
    req.on('error', reject);
    if (body) req.write(typeof body === 'string' ? body : JSON.stringify(body));
    req.end();
  });
}

function stripePost(endpoint, params) {
  const body = Object.entries(params)
    .flatMap(([k, v]) => Array.isArray(v)
      ? v.map((item, i) => Object.entries(item).map(([ik, iv]) => `${k}[${i}][${ik}]=${encodeURIComponent(iv)}`)).flat()
      : [`${encodeURIComponent(k)}=${encodeURIComponent(v)}`])
    .join('&');
  return apiRequest({
    hostname: 'api.stripe.com',
    path: `/v1/${endpoint}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${STRIPE_SECRET_KEY}`,
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': Buffer.byteLength(body),
    },
  }, body);
}

function notionPost(endpoint, body) {
  const json = JSON.stringify(body);
  return apiRequest({
    hostname: 'api.notion.com',
    path: `/v1/${endpoint}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${NOTION_API_KEY}`,
      'Content-Type': 'application/json',
      'Notion-Version': '2022-06-28',
      'Content-Length': Buffer.byteLength(json),
    },
  }, json);
}

function tallyPost(endpoint, body) {
  const json = JSON.stringify(body);
  return apiRequest({
    hostname: 'api.tally.so',
    path: `/v1/${endpoint}`,
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${TALLY_API_KEY}`,
      'Content-Type': 'application/json',
      'Content-Length': Buffer.byteLength(json),
    },
  }, json);
}

// Load packages from packages.js
function loadPackages() {
  const src = fs.readFileSync(PACKAGES_JS, 'utf8');
  const match = src.match(/const packages\s*=\s*(\[[\s\S]*?\]);/);
  if (!match) throw new Error('Could not parse packages array from packages.js');
  // eslint-disable-next-line no-eval
  return eval(match[1]);
}

// ─── Step 1: Stripe Payment Links ────────────────────────────────
async function createStripeLinks(packages) {
  if (!STRIPE_SECRET_KEY) { console.log('⚠️  Skipping Stripe — no STRIPE_SECRET_KEY'); return {}; }
  console.log('\n📦  Creating Stripe Payment Links...');
  const linkMap = {};

  for (const pkg of packages) {
    process.stdout.write(`   ${pkg.id}. ${pkg.name} ($${pkg.price})... `);
    // Create product
    const product = await stripePost('products', { name: pkg.name, description: pkg.tagline });
    if (product.status !== 200) { console.log(`❌ product failed: ${product.body.error?.message}`); continue; }

    // Create price
    const price = await stripePost('prices', {
      product: product.body.id,
      unit_amount: pkg.price * 100,
      currency: 'usd',
    });
    if (price.status !== 200) { console.log(`❌ price failed: ${price.body.error?.message}`); continue; }

    // Create payment link
    const link = await stripePost('payment_links', {
      'line_items[0][price]': price.body.id,
      'line_items[0][quantity]': 1,
      'after_completion[type]': 'redirect',
      'after_completion[redirect][url]': `${SITE_URL}/thank-you`,
    });
    if (link.status !== 200) { console.log(`❌ link failed: ${link.body.error?.message}`); continue; }

    linkMap[pkg.id] = link.body.url;
    console.log(`✅ ${link.body.url}`);
  }
  return linkMap;
}

// ─── Step 2: Update packages.js ──────────────────────────────────
function updatePackagesJs(linkMap) {
  if (!Object.keys(linkMap).length) return;
  console.log('\n✏️   Updating packages.js with Stripe links...');
  let src = fs.readFileSync(PACKAGES_JS, 'utf8');
  for (const [id, url] of Object.entries(linkMap)) {
    // Match by id field, replace the stripeLink on the next stripeLink line
    src = src.replace(
      new RegExp(`(id:\\s*["']${id}["'][\\s\\S]*?stripeLink:\\s*)["']PASTE_STRIPE_LINK_HERE["']`),
      `$1"${url}"`
    );
  }
  fs.writeFileSync(PACKAGES_JS, src);
  console.log('   ✅  packages.js updated');
}

// ─── Step 3: Notion Database ──────────────────────────────────────
async function createNotionDatabase() {
  if (!NOTION_API_KEY || !NOTION_PARENT_PAGE_ID) {
    console.log('⚠️  Skipping Notion — NOTION_API_KEY or NOTION_PARENT_PAGE_ID missing');
    return null;
  }
  console.log('\n🗂   Creating Notion database...');
  const res = await notionPost('databases', {
    parent: { type: 'page_id', page_id: NOTION_PARENT_PAGE_ID },
    title: [{ type: 'text', text: { content: 'NEXUS Orders' } }],
    properties: {
      'Client Name':       { title: {} },
      'Email':             { email: {} },
      'Package':           { select: { options: [] } },
      'Price Paid':        { number: { format: 'dollar' } },
      'Order Date':        { date: {} },
      'Intake Submitted':  { checkbox: {} },
      'Deadline':          { date: {} },
      'Deliverable Link':  { url: {} },
      'Status': {
        select: {
          options: [
            { name: 'Order Received',      color: 'gray'   },
            { name: 'Intake Complete',     color: 'blue'   },
            { name: 'In Progress',         color: 'yellow' },
            { name: 'Review',              color: 'orange' },
            { name: 'Delivered',           color: 'green'  },
            { name: 'Revision Requested',  color: 'red'    },
            { name: 'Closed',              color: 'default'},
          ],
        },
      },
      'Notes': { rich_text: {} },
      'Stripe Payment ID': { rich_text: {} },
    },
  });

  if (res.status !== 200) {
    console.log(`   ❌  Notion failed: ${JSON.stringify(res.body?.message || res.body)}`);
    return null;
  }
  const dbUrl = `https://notion.so/${res.body.id.replace(/-/g, '')}`;
  console.log(`   ✅  Database created: ${dbUrl}`);
  return dbUrl;
}

// ─── Step 4: Tally Form ───────────────────────────────────────────
async function createTallyForm(packages) {
  if (!TALLY_API_KEY) { console.log('\n⚠️  Skipping Tally — no TALLY_API_KEY'); return null; }
  console.log('\n📋  Creating Tally intake form...');

  const packageOptions = packages.map(p => ({ label: `${p.id}. ${p.name} — $${p.price}` }));

  const res = await tallyPost('forms', {
    name: 'aegeanAI — Project Intake Form',
    blocks: [
      {
        type: 'DROPDOWN',
        uuid: 'q-package',
        groupUuid: 'q-package',
        payload: {
          html: 'Which package did you purchase?',
          options: packageOptions,
        },
      },
      { type: 'INPUT_TEXT',  uuid: 'q-name',    groupUuid: 'q-name',    payload: { html: 'Your full name' } },
      { type: 'INPUT_EMAIL', uuid: 'q-email',   groupUuid: 'q-email',   payload: { html: 'Your email address (same as used at checkout)' } },
      { type: 'INPUT_TEXT',  uuid: 'q-biz',     groupUuid: 'q-biz',     payload: { html: 'Business name' } },
      { type: 'TEXTAREA',    uuid: 'q-desc',    groupUuid: 'q-desc',    payload: { html: 'Describe your business in 2–3 sentences. What do you do, who do you serve, and what outcome do you deliver?' } },
      { type: 'TEXTAREA',    uuid: 'q-audience',groupUuid: 'q-audience',payload: { html: 'Describe your ideal customer — their role, industry, main goal, and biggest frustration.' } },
      { type: 'CHECKBOXES',  uuid: 'q-voice',   groupUuid: 'q-voice',   payload: { html: 'How would you describe your brand voice?', options: [
        { label: 'Direct and no-nonsense' }, { label: 'Warm and conversational' },
        { label: 'Professional and formal' }, { label: 'Witty and light' },
        { label: 'Educational and clear' },   { label: 'Bold and confident' },
        { label: 'Calm and reassuring' },
      ]}},
      { type: 'TEXTAREA', uuid: 'q-assets', groupUuid: 'q-assets', payload: { html: 'Any existing brand materials or copy we should reference? (Optional — paste links or describe)' } },
      { type: 'TEXTAREA', uuid: 'q-deadline', groupUuid: 'q-deadline', payload: { html: 'Is there anything time-sensitive about this project? (Optional)' } },
      { type: 'TEXTAREA', uuid: 'q-other', groupUuid: 'q-other', payload: { html: 'Anything else we should know? Constraints, preferences, or context not covered above? (Optional)' } },
    ],
  });

  if (res.status !== 200 && res.status !== 201) {
    console.log(`   ❌  Tally failed (${res.status}): ${JSON.stringify(res.body)}`);
    console.log('   ℹ️   Build the form manually at tally.so using ai/memory-bank/tasks/nexus-tally-intake-form-spec.md');
    return null;
  }

  const formUrl = res.body.url || `https://tally.so/r/${res.body.slug}`;
  console.log(`   ✅  Form created: ${formUrl}`);
  return formUrl;
}

// ─── Step 5: Patch HTML files ────────────────────────────────────
function patchHtmlFiles(tallyFormUrl) {
  console.log('\n🔧  Patching HTML files...');
  const files = ['thank-you.html', 'contact.html', 'about.html', 'index.html',
                 'services.html', 'how-it-works.html'];

  for (const file of files) {
    const filePath = path.join(SITE_DIR, file);
    if (!fs.existsSync(filePath)) continue;
    let html = fs.readFileSync(filePath, 'utf8');
    let changed = false;

    if (tallyFormUrl) {
      const next = html.replace(/TALLY_FORM_URL/g, tallyFormUrl);
      if (next !== html) { html = next; changed = true; }
    }
    if (FOUNDER_NAME) {
      const next = html.replace(/\[YOUR NAME\]/g, FOUNDER_NAME);
      if (next !== html) { html = next; changed = true; }
    }
    if (SUPPORT_EMAIL) {
      const next = html.replace(/\[YOUR SUPPORT EMAIL\]/g, SUPPORT_EMAIL)
                       .replace(/\[YOUR EMAIL\]/g, SUPPORT_EMAIL);
      if (next !== html) { html = next; changed = true; }
    }
    if (changed) {
      fs.writeFileSync(filePath, html);
      console.log(`   ✅  ${file}`);
    }
  }
}

// ─── Main ─────────────────────────────────────────────────────────
async function main() {
  console.log('🚀  aegeanAI setup script starting...');

  if (!SITE_URL) { console.error('❌  SITE_URL is required in .env'); process.exit(1); }

  const packages = loadPackages();
  console.log(`   Loaded ${packages.length} packages from packages.js`);

  const linkMap       = await createStripeLinks(packages);
  updatePackagesJs(linkMap);
  await createNotionDatabase();
  const tallyFormUrl  = await createTallyForm(packages);
  patchHtmlFiles(tallyFormUrl);

  console.log('\n─────────────────────────────────────────');
  console.log('✅  Setup complete.\n');
  console.log('Next steps:');
  console.log('  1. Review the changes: git diff');
  console.log('  2. Commit and push:    git add -A && git commit -m "chore: apply setup config" && git push');
  console.log('  3. Vercel auto-deploys from main — your site will be live in ~30 seconds.');
  if (!tallyFormUrl) {
    console.log('\n⚠️  Tally form was not created automatically.');
    console.log('   Build it manually using: ai/memory-bank/tasks/nexus-tally-intake-form-spec.md');
    console.log('   Then run: node setup/patch-tally.js YOUR_TALLY_URL');
  }
  console.log('─────────────────────────────────────────\n');
}

main().catch(err => { console.error('Fatal error:', err); process.exit(1); });
