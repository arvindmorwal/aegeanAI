#!/usr/bin/env node
/**
 * Run this if you built the Tally form manually and need to patch the URL into the site.
 * Usage: node setup/patch-tally.js https://tally.so/r/your-form-id
 */
const fs   = require('fs');
const path = require('path');

const tallyUrl = process.argv[2];
if (!tallyUrl || !tallyUrl.startsWith('http')) {
  console.error('Usage: node setup/patch-tally.js https://tally.so/r/YOUR_FORM_ID');
  process.exit(1);
}

const SITE_DIR = path.join(__dirname, '..', 'aegean-agency');
const files = ['thank-you.html', 'contact.html'];

for (const file of files) {
  const filePath = path.join(SITE_DIR, file);
  const html = fs.readFileSync(filePath, 'utf8');
  const updated = html.replace(/TALLY_FORM_URL/g, tallyUrl);
  if (updated !== html) {
    fs.writeFileSync(filePath, updated);
    console.log(`✅  Patched ${file}`);
  } else {
    console.log(`ℹ️   ${file} — TALLY_FORM_URL not found (may already be patched)`);
  }
}

console.log('\nDone. Commit and push to deploy:');
console.log('  git add -A && git commit -m "config: add Tally form URL" && git push');
