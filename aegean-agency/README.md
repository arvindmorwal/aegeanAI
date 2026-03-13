# NEXUS Agency Site — Operator Guide

## The only file you need to edit for most updates: `assets/js/packages.js`

---

## How to Update a Package Price

1. Open `assets/js/packages.js`
2. Find the package by name
3. Change the `price` value (number only, no $ sign)
4. Save the file
5. Redeploy: go to [Vercel](https://vercel.com) → your project → Deployments → redeploy, or re-import the folder

---

## How to Update a Stripe Payment Link

1. Open `assets/js/packages.js`
2. Find the package by name
3. Replace the `stripeLink` value with the new URL
4. Save and redeploy (Vercel dashboard → redeploy)

---

## How to Update the Tally Intake Form URL

Search for `TALLY_FORM_URL` in `thank-you.html` and `contact.html` and replace with your new Tally link.

---

## How to Edit Page Copy

Open the relevant HTML file and edit the text directly. Files:
- `index.html` — Home page
- `services.html` — Full catalog (package cards are auto-generated from packages.js)
- `how-it-works.html` — Process + FAQ
- `about.html` — About / founder
- `contact.html` — Contact form
- `thank-you.html` — Post-purchase page

---

## How to Deploy

1. Make your edits
2. Go to [Netlify](https://app.netlify.com)
3. Open your site → Deploys tab
4. Drag and drop the entire `aegean-agency/` folder onto the deploy area
5. Wait ~30 seconds for the deploy to complete

---

## Order Processing Workflow

1. **Stripe payment received** → Create row in Notion "NEXUS Orders" database
2. **Tally intake form submitted** → Email notification arrives → Check intake answers → Set deadline (intake date + delivery window)
3. **Start fulfillment** → Use Claude or ChatGPT with intake answers as context
4. **Send deliverable** → Reply to client's order confirmation email with Google Doc link
5. **If revision requested** → Client replies to delivery email → Return revision within 24hrs → Mark Closed in Notion

---

## Revision Policy (reminder)

- 1 revision round per package, included
- Client must submit revision notes within 48 hours of delivery
- Additional rounds: $49 each (client emails you to request)
- Scope changes (extra pages, extra products, full rewrites): quote separately

---

## Emergency Contacts / Accounts

| Service | Login | Notes |
|---|---|---|
| Vercel | [YOUR EMAIL] | Free tier, import folder to deploy |
| Stripe | [YOUR EMAIL] | Check daily for new orders |
| Tally | [YOUR EMAIL] | Check Submissions tab weekly as backup |
| Notion | [YOUR EMAIL] | NEXUS Orders database |
| Domain | [YOUR REGISTRAR] | Renew annually |

---

## Before You Go Live Checklist

- [ ] Replace all `PASTE_STRIPE_LINK_HERE` in packages.js with real Stripe Payment Links
- [ ] Replace `TALLY_FORM_URL` in thank-you.html and contact.html with real Tally form URL
- [ ] Replace `[YOUR SUPPORT EMAIL]` throughout site with real email
- [ ] Replace `[AGENCY NAME]` throughout site with real business name
- [ ] Replace `[YOUR NAME]` and `[YOUR BACKGROUND]` on about.html
- [ ] Remove placeholder testimonials from index.html (do not launch with fake reviews)
- [ ] Test one Stripe payment end-to-end in live mode
- [ ] Confirm Tally form submission creates Notion row
- [ ] Check all pages on mobile (Chrome DevTools → iPhone 12)
