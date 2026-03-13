# NEXUS Phase 2 — Technical Specification

**Agent Role**: Senior Developer
**Sprint Phase**: Phase 2 of 5
**Date Created**: 2026-03-08
**Status**: Complete — Awaiting Reality Checker Approval

---

## 1. Stack Decision: Plain HTML/CSS/JS

**Decision: Plain HTML/CSS/JS. Not Framer.**

### Rationale

| Factor | Plain HTML/CSS/JS | Framer |
|---|---|---|
| Speed to launch | 2–3 days to build and deploy | 1–2 days, but lock-in risk |
| Copy editing post-launch | Direct file edit or GitHub UI — no account needed | Requires Framer account, UI navigation |
| Stripe integration | Link anywhere in HTML | Link anywhere, but Framer controls DOM |
| Tally integration | Embed via iframe or link — full control | Embed works but iframe constraints exist in Framer |
| Hosting cost | Free (Netlify/Vercel) | $5–$15/month for custom domain on Framer |
| Solo operator edits | Edit one HTML file — clear, traceable | Framer editor has learning curve for non-designers |
| Risk of platform change | Zero — you own the files | Framer pricing/policy changes affect your site |
| Version control | Git-native | No Git, no history |

**Why not Framer**: The operator is non-technical but needs to edit copy post-launch. Framer's visual editor feels easier until the first time a component breaks or a text block is nested inside a locked layer. At that point, with no developer support, the operator is stuck. Plain HTML with clearly labeled copy blocks is safer.

**Why HTML wins**: Netlify drag-and-drop deploy. Editing a paragraph in VS Code or even Notepad is always possible. No monthly platform fee. No account dependency. No risk of Framer changing their free tier.

**Hosting**: Netlify (free tier). Custom domain via Namecheap or Cloudflare — ~$10–15/year.

---

## 2. Site Architecture

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Hero, value prop, trust signals, 3 featured packages, CTA to Services |
| Services | `/services` | All 18 packages displayed as cards with price, delivery time, buy button |
| How It Works | `/how-it-works` | 3-step process: Pay → Fill Form → Receive Deliverable. Sets expectations. |
| About | `/about` | Founder credibility, agency positioning, trust signals |
| Contact | `/contact` | Tally contact form embedded. For pre-sale questions only. |
| Thank You | `/thank-you` | Post-payment redirect page. Directs client to Tally intake form. Dynamic param optional. |

### Page Logic Notes

- **Services page** is the commercial core. Every package card has one button: "Get This — $[price]" linking directly to its Stripe Payment Link.
- **Thank You page** is critical. Stripe redirects here after payment. This page must contain the Tally intake form link prominently — this is where clients submit their project inputs.
- **Contact page** is not a sales page. It handles pre-sale questions only. Keep friction low.
- No blog. No FAQ page (FAQ content lives on How It Works and package descriptions). No login. No portal.

---

## 3. File and Folder Structure

```
aegean-agency/                          ← root project folder
├── index.html                          ← Home page
├── services.html                       ← All packages / pricing
├── how-it-works.html                   ← 3-step process page
├── about.html                          ← About / founder page
├── contact.html                        ← Contact + Tally embed
├── thank-you.html                      ← Post-Stripe redirect + Tally intake link
│
├── assets/
│   ├── css/
│   │   ├── main.css                    ← Global styles, variables, typography
│   │   ├── components.css              ← Cards, buttons, nav, footer
│   │   └── pages.css                   ← Page-specific overrides
│   ├── js/
│   │   ├── main.js                     ← Nav mobile toggle, scroll behavior
│   │   └── packages.js                 ← Package card data array (edit this to update packages)
│   └── images/
│       ├── logo.svg
│       ├── founder.jpg                 ← About page photo
│       └── og-image.jpg               ← Open Graph image for social sharing
│
├── _redirects                          ← Netlify redirect rules (one line file)
├── netlify.toml                        ← Netlify config (optional, for headers)
└── README.md                           ← Operator guide: how to edit copy, update Stripe links
```

### Key Maintenance Principle

All 18 package cards are generated from a single data array in `assets/js/packages.js`. To add a package, change a price, or update a Stripe link, the operator edits **one file** — the packages array. No HTML duplication.

```javascript
// assets/js/packages.js — sample structure
const packages = [
  {
    id: "01",
    name: "AI Content Brief Pack",
    tagline: "10 ready-to-publish content briefs built for your niche.",
    price: 97,
    delivery: "24 hours",
    tier: "entry",
    stripeLink: "https://buy.stripe.com/XXXXXX",
    features: [
      "10 briefs with keyword, outline, and CTA",
      "Formatted for any writer or AI tool",
      "Delivered as shareable Notion page"
    ]
  },
  // ... remaining 17 packages
];
```

---

## 4. Stripe Integration Spec

### Setup Steps

1. Create Stripe account at stripe.com (use business email)
2. Complete identity verification (required for payouts)
3. Navigate to: Dashboard → Payment Links → Create Link
4. For each of the 18 packages, create one Payment Link:
   - Product name: exact package name (e.g., "AI Content Brief Pack")
   - Price: one-time, exact amount
   - Currency: USD
   - Quantity: fixed at 1
5. Under "After payment" settings for every link:
   - Set redirect URL to: `https://yourdomain.com/thank-you`
6. Under "Checkout options":
   - Enable: "Collect customer email" (always on)
   - Enable: "Collect phone number" — OFF (unnecessary friction)
   - Enable: "Collect billing address" — OFF for US; ON if selling internationally
7. Copy each payment link URL and paste it into `packages.js` in the `stripeLink` field

### What to Collect at Stripe Checkout

Collect **only** what Stripe needs for payment. Do NOT collect project details at checkout. That happens in Tally after payment.

| Field | Collect? | Reason |
|---|---|---|
| Email | Yes (auto) | Receipt + client identification |
| Name | Yes (auto) | Basic identification |
| Billing address | No | Unnecessary for digital services unless international tax compliance required |
| Phone | No | Creates friction; not needed at payment stage |
| Custom fields | No | Use Tally instead — Stripe custom fields are limited and ugly |

### Post-Payment Redirect

Every Stripe Payment Link redirects to `/thank-you` after successful payment.

The thank-you page contains:
1. Confirmation message ("Your order is confirmed — here is what happens next")
2. A clearly labeled link/button to the Tally intake form
3. Instructions: "You must complete this form within 24 hours for us to begin work"
4. Estimated delivery reminder (48 hours from form submission, not from payment)

**Optional enhancement**: Append Stripe session data to the redirect URL so the thank-you page can display the package name dynamically. Use Stripe's `{CHECKOUT_SESSION_ID}` variable in the redirect URL. Not required for launch — add at Week 2.

### Stripe Dashboard for Order Tracking

In Stripe Dashboard, every completed payment appears with:
- Customer email
- Package purchased (product name)
- Amount
- Timestamp

Export as CSV weekly as backup. This is the financial source of truth.

---

## 5. Tally Integration Spec

### Architecture Decision

**One Tally form, not 18 forms.**

Use Tally's conditional logic to show package-specific questions based on the package selected in the first question. Easier to maintain, one link to send, one Tally workspace to manage.

### Universal Questions (Every Submission)

These appear for all packages, no conditions:

| # | Question | Type | Required |
|---|---|---|---|
| 1 | Which package did you purchase? | Dropdown (all 18 packages listed) | Yes |
| 2 | Your full name | Short text | Yes |
| 3 | Your email address (same as used at checkout) | Email | Yes |
| 4 | Business name (if applicable) | Short text | No |
| 5 | Business website URL (if you have one) | URL | No |
| 6 | In one sentence, describe what your business does and who it serves | Long text | Yes |
| 7 | Is there anything time-sensitive we should know before starting? | Long text | No |
| 8 | Preferred deliverable format if not specified in package (Notion / Google Doc / PDF — we will use the default if blank) | Short text | No |

### Package-Specific Conditional Questions

The following question blocks appear **only** when the relevant package is selected in Question 1.

---

**Package 01 — AI Content Brief Pack** (shown when Q1 = "AI Content Brief Pack")

| Question | Type |
|---|---|
| What is your content niche or primary topic area? | Short text |
| Paste 3 competitor URLs you want us to reference | Long text |
| Describe your target audience (age, role, pain points) | Long text |
| What is the goal of this content: traffic, leads, or brand authority? | Multiple choice |
| Any keywords you already rank for or want to target? | Long text |

---

**Package 05 — Email Welcome Sequence** (shown when Q1 = "Email Welcome Sequence")

| Question | Type |
|---|---|
| Describe your product or service in detail | Long text |
| Describe your ideal subscriber — who are they and what do they want? | Long text |
| What is the main offer you want the sequence to promote? | Long text |
| Share 3 words describing your brand voice (e.g., bold, warm, direct) | Short text |
| Paste a link or examples of your existing content or copy (optional) | Long text |

---

**Package 09 — Positioning Statement + ICP Profile** (shown when Q1 = "Positioning Statement + ICP Profile")

| Question | Type |
|---|---|
| Describe your business and what you sell | Long text |
| Describe 2–3 of your best current or past clients | Long text |
| Who do you NOT want to work with? (niches, company sizes, personality types) | Long text |
| Name your primary competitor | Short text |
| What do you do differently from that competitor? | Long text |

---

**Package 15 — AI Automation Opportunity Audit** (shown when Q1 = "AI Automation Opportunity Audit")

| Question | Type |
|---|---|
| What type of business do you run? | Short text |
| List all tools and software your team currently uses | Long text |
| Describe your top 5 recurring tasks or workflows (be specific) | Long text |
| What are your biggest operational bottlenecks right now? | Long text |
| How many hours per week do you estimate are lost to manual/repetitive work? | Short text |

---

**Package 03 — AI SOPs in a Day** (shown when Q1 = "AI SOPs in a Day")

| Question | Type |
|---|---|
| List the 5 processes you want documented (one per line) | Long text |
| For each process, who is responsible for running it? | Long text |
| Provide written descriptions OR Loom video links for each process (required — we cannot begin without this) | Long text |
| What tool or platform does each process live in? | Long text |
| Are these SOPs for internal team use, VA handoff, or client-facing? | Multiple choice |

---

### Tally Setup Instructions

1. Create account at tally.so (free tier supports this use case)
2. Create one form titled "Project Intake — [Agency Name]"
3. Build universal questions first (Q1–Q8)
4. For each package block: add a question group, set condition "Show if Q1 = [package name]"
5. Enable email notifications: Settings → Notifications → send to your business email on every submission
6. Do NOT embed Tally on the thank-you page via iframe — link to it as a button. Iframe embeds can have scroll/mobile issues. A full Tally page is a better experience.
7. Connect Tally to Notion via Tally's native Notion integration (Settings → Integrations → Notion). This auto-creates a new database row on every submission.

---

## 6. Notion Workflow

### Board Structure

**Database name**: `NEXUS Orders`
**View**: Board view (Kanban) by Status column

### Columns (Status Values)

| Column | Description |
|---|---|
| Order Received | Stripe payment confirmed, intake form not yet submitted |
| Intake Complete | Tally form submitted, ready to begin fulfillment |
| In Progress | Operator has started working on the deliverable |
| Review | Deliverable complete, operator reviewing before send |
| Delivered | Deliverable sent to client |
| Revision Requested | Client asked for changes (track separately) |
| Closed | Revision delivered or case resolved |

### Database Properties (Fields Per Order)

| Property | Type | Notes |
|---|---|---|
| Client Name | Text | From Tally submission |
| Email | Email | From Tally or Stripe |
| Package | Select | All 18 packages as options |
| Price Paid | Number | From Stripe |
| Order Date | Date | Stripe payment timestamp |
| Intake Submitted | Checkbox | Check when Tally form received |
| Deadline | Date | Intake date + 48 hours |
| Deliverable Link | URL | Link to Notion page, Google Doc, or PDF |
| Status | Select | The Kanban column |
| Notes | Text | Internal operator notes |
| Stripe Payment ID | Text | For cross-reference with Stripe |

### Workflow: Order to Delivery

```
1. Stripe payment confirmed
   → Manually create new Notion row (or auto via Tally-Notion integration)
   → Status: "Order Received"
   → Set Order Date

2. Client submits Tally intake form
   → Tally sends email notification to operator
   → Check "Intake Submitted" box in Notion
   → Calculate Deadline: intake date + 48 hours
   → Move to "Intake Complete"

3. Operator begins work
   → Move to "In Progress"
   → Work in Claude/ChatGPT using fulfillment playbook prompt

4. Deliverable complete
   → Move to "Review"
   → Operator reviews output line by line
   → Paste deliverable link in Notion row

5. Send deliverable to client
   → Email from business email with link
   → Move to "Delivered"

6. If revision requested
   → Move to "Revision Requested"
   → Handle within 24 hours
   → Move to "Closed" when resolved
```

### Notion Setup Steps

1. Create a new Notion workspace (or use personal, keep it dedicated)
2. Create a new page: "NEXUS Orders"
3. Add a database (full-page database)
4. Add all properties listed above
5. Create a Board view grouped by Status
6. Create all 7 status options in the Status select field
7. Enable Tally → Notion integration from Tally settings

---

## 7. Launch Checklist

Ordered from zero to live. Complete in sequence.

### Step 1 — Domain and Hosting (Day 1, ~1 hour)

- [ ] Register domain at Namecheap or Cloudflare Registrar (~$10–12/year)
- [ ] Create Netlify account at netlify.com (free)
- [ ] Connect domain to Netlify (add Netlify nameservers to Namecheap DNS settings)
- [ ] Confirm SSL certificate auto-provisioned in Netlify (takes ~15 minutes)

### Step 2 — Stripe Setup (Day 1, ~1 hour)

- [ ] Create Stripe account at stripe.com with business email
- [ ] Complete identity verification (required for payouts — have ID ready)
- [ ] Add bank account for payouts (Settings → Bank Accounts)
- [ ] Create 18 Payment Links (one per package):
  - Dashboard → Payment Links → + New
  - Product name = exact package name
  - Price = one-time, correct amount
  - After payment redirect = `https://yourdomain.com/thank-you`
- [ ] Copy all 18 Stripe links into a reference doc (you will paste these into `packages.js`)
- [ ] Test one payment link with Stripe test mode and a test card (4242 4242 4242 4242)

### Step 3 — Tally Setup (Day 1, ~1.5 hours)

- [ ] Create Tally account at tally.so
- [ ] Build intake form with universal questions (Q1–Q8)
- [ ] Add conditional question blocks for all 18 packages
- [ ] Enable email notifications on form submission (your business email)
- [ ] Test form submission end-to-end
- [ ] Copy Tally form URL — you will embed this link on the thank-you page

### Step 4 — Notion Setup (Day 1, ~30 minutes)

- [ ] Create "NEXUS Orders" database in Notion
- [ ] Add all properties (see Section 6)
- [ ] Create Board view grouped by Status
- [ ] Add all 7 status columns
- [ ] Connect Tally to Notion via Tally integration settings
- [ ] Test: submit a Tally form and confirm a Notion row is created automatically

### Step 5 — Site Build (Day 2–3, ~6–8 hours)

- [ ] Create project folder `aegean-agency/` with structure from Section 3
- [ ] Build `main.css` — design tokens, typography, colors, spacing scale
- [ ] Build `components.css` — nav, buttons, cards, footer
- [ ] Build `packages.js` — data array with all 18 packages and Stripe links
- [ ] Build `index.html` — home page
- [ ] Build `services.html` — pulls from `packages.js`, renders all 18 cards
- [ ] Build `how-it-works.html` — 3-step process
- [ ] Build `about.html` — founder section
- [ ] Build `contact.html` — Tally contact embed or link
- [ ] Build `thank-you.html` — confirmation + Tally intake link + next steps
- [ ] Test all 18 "Get This" buttons open correct Stripe payment links
- [ ] Test mobile responsiveness on all 6 pages (use Chrome DevTools)
- [ ] Test navigation between all pages
- [ ] Add favicon (use a simple SVG — free at realfavicongenerator.net)
- [ ] Add Open Graph meta tags to all pages (title, description, og-image.jpg)

### Step 6 — Deploy (Day 3, ~30 minutes)

- [ ] Drag-and-drop project folder into Netlify dashboard
- [ ] Confirm site is live at Netlify subdomain (e.g., `aegean-agency.netlify.app`)
- [ ] Set custom domain in Netlify → Domain Management → Add custom domain
- [ ] Confirm SSL is active (padlock in browser)
- [ ] Test live site: click a buy button → complete Stripe test payment → land on thank-you page → click Tally link → submit form → confirm Notion row created

### Step 7 — Pre-Launch Checks (Day 3–4, ~1 hour)

- [ ] Switch Stripe from test mode to live mode
- [ ] Make one real $1 test purchase on the cheapest package to confirm full flow works live
- [ ] Check Stripe dashboard shows the payment
- [ ] Confirm thank-you page redirect works from real Stripe payment
- [ ] Check Tally notification email arrives in your inbox
- [ ] Check Notion row was created
- [ ] Write `README.md` with operator instructions: how to edit package copy, how to update Stripe links, how to process an order

### Step 8 — Launch (Day 4–5)

- [ ] Remove any "coming soon" or draft content
- [ ] Share site URL on relevant channels
- [ ] Monitor Stripe dashboard for first orders
- [ ] Fulfill first orders manually within 48 hours

---

## 8. Top 3 Technical Risks for Solo Non-Technical Operator

### Risk 1 — Stripe Payment Link → Thank-You Redirect Breaks

**What happens**: Client pays, Stripe does not redirect to your thank-you page, client does not know where to submit their intake form. Order is paid but intake never submitted. Operator does not know the order exists.

**Why it happens**: Incorrect redirect URL typed during Payment Link setup, or Stripe setting not saved correctly.

**Mitigation**:
1. During setup, test every payment link in Stripe test mode before going live
2. Always include the Tally form link in the Stripe receipt email — add it to the payment link's "custom message to buyer" field as a fallback
3. Add this note to the confirmation email: "If you did not reach our intake form, click here: [Tally link]"
4. Check your Stripe Dashboard daily for paid orders with no corresponding Tally submission in Notion — that gap = a client who did not get the redirect

---

### Risk 2 — Operator Cannot Edit the Site Post-Launch

**What happens**: A package price changes, a Stripe link needs updating, or copy needs fixing. Operator opens the HTML file, is confused by the structure, edits the wrong line, breaks the layout.

**Why it happens**: Without developer support, even small HTML edits can go wrong if the file structure is not clearly labeled.

**Mitigation**:
1. All package data lives in ONE file: `packages.js` — operator only ever edits this file for package/price/link changes
2. `README.md` in the project folder contains step-by-step instructions with screenshots for the three most common edits: change a price, update a Stripe link, change the Tally form URL
3. Use Netlify's drag-and-drop deploy — no command line required. Edit files locally, drag folder to Netlify, done.
4. Keep a backup copy of the working site folder on Google Drive before every edit

---

### Risk 3 — Tally → Notion Integration Fails Silently

**What happens**: Client submits intake form. Tally sends the notification email. But the Notion integration stops syncing (API key expired, Notion page moved, integration disconnected). Operator checks Notion, sees no new row, assumes no form was submitted. Order is delayed or missed.

**Why it happens**: Third-party integrations break. Tally and Notion can disconnect when OAuth tokens expire or when the Notion database structure changes.

**Mitigation**:
1. Treat the Tally email notification as the primary signal — not Notion. Set up a Gmail filter to label all Tally notification emails as "ORDERS" so they are never missed
2. Tally stores all submissions in its own dashboard (Submissions tab) — check this weekly as a backup source of truth
3. Create a manual Notion row creation routine: even if automation fails, the email has all the intake data. Operator can paste it into Notion manually in under 2 minutes
4. Test the Tally → Notion integration weekly by submitting a test form and confirming the Notion row appears

---

## File Outputs Required from This Phase

The following files need to be created before handoff to Site Copy agent (Phase 3):

- [ ] `aegean-agency/assets/js/packages.js` — complete data array, all 18 packages, placeholder Stripe links
- [ ] `aegean-agency/README.md` — operator maintenance guide
- [ ] `aegean-agency/_redirects` — Netlify redirect rules

---

## Next Phase Handoff

Phase 2 complete when:
- [ ] This spec reviewed and approved by Reality Checker
- [ ] Stack decision confirmed (HTML/CSS/JS)
- [ ] File structure created in project directory
- [ ] Operator has read and understood the Stripe setup steps

Next: Phase 3 — Site Copy (5 pages: Home, Services, How It Works, About, Contact)
Handoff file: `ai/memory-bank/tasks/phase-3-site-copy.md`
