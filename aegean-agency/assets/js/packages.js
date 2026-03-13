// NEXUS Agency — Package Catalog
// Edit THIS FILE ONLY to: change prices, update Stripe links, add/remove packages
// Then redeploy by dragging the aegean-agency/ folder to Netlify

const packages = [
  // ─── STARTER TIER ($97) ───────────────────────────────────────
  {
    id: "00",
    tier: "starter",
    name: "AI Content Brief Pack",
    tagline: "10 ready-to-use content briefs built for your niche — topic, angle, hook, and outline included.",
    description: "Ten content briefs tailored to your niche and audience. Each brief includes a topic, target keyword, content angle, suggested hook, and a short outline. Hand them to a writer, feed them to an AI, or use them yourself. The fastest way to never stare at a blank page again.",
    price: 97,
    delivery: "24 hours",
    deliverable: "Google Doc or Notion page",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: true
  },

  // ─── ENTRY TIER ($147) ────────────────────────────────────────
  {
    id: "01",
    tier: "entry",
    name: "AI Bio + Brand Voice Kit",
    tagline: "Professional bio in 3 formats + a brand voice guide to stay consistent everywhere.",
    description: "A polished professional bio in three formats (short, medium, and full-length), plus a documented brand voice guide covering your tone, vocabulary, phrases to use, and phrases to avoid.",
    price: 147,
    delivery: "24 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: true
  },
  {
    id: "02",
    tier: "entry",
    name: "AI Cold Outreach Kit",
    tagline: "5 ready-to-send outreach templates + a follow-up sequence, built for your offer.",
    description: "Five ready-to-send cold outreach message templates across your chosen channel (email, LinkedIn, or DM), plus a follow-up sequence and a short guide on personalization variables.",
    price: 147,
    delivery: "24 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: true
  },
  {
    id: "03",
    tier: "entry",
    name: "AI FAQ + Objection Handler",
    tagline: "15 FAQs and objection-busting responses, ready to paste into your sales page or send to prospects.",
    description: "A complete FAQ document that answers your audience's most common questions and pre-handles the objections that kill conversions. Formatted for sales pages, service pages, or standalone use.",
    price: 147,
    delivery: "24 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: true
  },

  // ─── MID TIER ($197–$247) ─────────────────────────────────────
  {
    id: "04",
    tier: "mid",
    name: "AI Email Sequence Builder",
    tagline: "5–7 emails written, sequenced, and ready to load into your platform.",
    description: "A complete email sequence covering subject lines, preview text, body copy, and CTAs. Works for welcome sequences, nurture flows, post-purchase follow-up, or launch campaigns.",
    price: 197,
    delivery: "24 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "05",
    tier: "mid",
    name: "AI Content Calendar (30 Days)",
    tagline: "A full month of content mapped by platform, format, topic, and angle.",
    description: "30 days of content planned out with post hooks, content pillars, and brief descriptions for each piece. Built around your offer, your audience, and the platforms you actually use.",
    price: 197,
    delivery: "48 hours",
    deliverable: "Notion page or Google Sheet",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "06",
    tier: "mid",
    name: "AI Customer Onboarding Pack",
    tagline: "Welcome email + onboarding questionnaire + process overview — for new clients who just bought.",
    description: "Everything a new client receives after they buy from you. Makes your business look established, reduces back-and-forth, and sets clear expectations from day one.",
    price: 247,
    delivery: "48 hours",
    deliverable: "Google Doc bundle (3 documents)",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "07",
    tier: "mid",
    name: "AI Product Description Pack",
    tagline: "10 product or service descriptions written for your catalog.",
    description: "Ten product descriptions optimized for clarity, conversion, and your brand voice. Works for e-commerce products, digital products, service packages, or any offer where the description is doing selling work.",
    price: 197,
    delivery: "24 hours",
    deliverable: "Google Doc or CSV",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "08",
    tier: "mid",
    name: "AI YouTube Script Pack",
    tagline: "3 complete YouTube scripts with hooks, structured body, and strong CTAs.",
    description: "Three complete YouTube video scripts written for your channel topic, your speaking style, and the search intent or content goal you define in the intake form.",
    price: 247,
    delivery: "48 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "09",
    tier: "mid",
    name: "AI Job Description Kit",
    tagline: "3 role-specific job descriptions that attract the right candidates.",
    description: "Three complete job descriptions structured to attract qualified applicants and filter out poor fits. Covers role overview, responsibilities, requirements, and what makes your business worth joining.",
    price: 197,
    delivery: "24 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "10",
    tier: "mid",
    name: "AI SOP Builder",
    tagline: "3 recurring processes turned into clear, step-by-step SOPs anyone can follow.",
    description: "Three standard operating procedures written in clear format covering task overview, tools used, step-by-step instructions, and quality checkpoints. Designed to reduce your personal involvement in repeatable work.",
    price: 197,
    delivery: "48 hours",
    deliverable: "Notion page or Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "11",
    tier: "mid",
    name: "AI Proposal Template Builder",
    tagline: "A reusable proposal template customized to your service — with a closing statement that moves prospects to yes.",
    description: "Custom client proposal template including intro section, scope of work framework, pricing presentation, terms summary, and a strong closing statement. Built for your service and pricing structure.",
    price: 247,
    delivery: "48 hours",
    deliverable: "Google Doc template + instructions",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },

  // ─── PRO TIER ($297–$497) ─────────────────────────────────────
  {
    id: "12",
    tier: "pro",
    name: "AI Newsletter System",
    tagline: "Positioning + recurring template + 4 pre-written issues + a framework to produce more consistently.",
    description: "A complete newsletter system including positioning, content structure and template, four pre-written issues ready to send, a subject line formula guide, and a reusable framework for future issues. Scope: rough first drafts, not publish-ready without your review.",
    price: 297,
    delivery: "48 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "13",
    tier: "pro",
    name: "AI Lead Magnet Creator",
    tagline: "Concept, title, full written content, and opt-in page description — ready to publish.",
    description: "A complete, ready-to-publish lead magnet including concept, compelling title, structured outline, full written content for each section, and a short opt-in landing page description. Designed to attract your specific audience.",
    price: 297,
    delivery: "48 hours",
    deliverable: "Canva PDF + Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "14",
    tier: "pro",
    name: "AI Course Outline + Module Descriptions",
    tagline: "Full course architecture with modules, lessons, and a launch-ready overview paragraph.",
    description: "A complete course structure including title, learning outcomes, full module breakdown, lesson titles and descriptions for every module, and a launch-ready course overview. Built for narrow-topic courses with a clear audience.",
    price: 297,
    delivery: "48 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  },
  {
    id: "15",
    tier: "pro",
    name: "AI Sales Page Copywriter",
    tagline: "Complete sales page copy — up to 1,200 words, one product, one revision round included.",
    description: "A complete, conversion-focused sales page for one product or service. Up to 1,200 words including headline, subheadline, problem section, offer explanation, features and benefits, social proof placeholders, objection handling, and a strong CTA. One revision round included. One product only.",
    price: 497,
    delivery: "72 hours",
    deliverable: "Google Doc",
    stripeLink: "PASTE_STRIPE_LINK_HERE",
    launchPackage: false
  }
];

// ─── TIER LABELS ──────────────────────────────────────────────────
const tiers = {
  starter: { label: "Starter", priceRange: "$97",       description: "Low-risk first project. See exactly how this works." },
  entry:   { label: "Entry",   priceRange: "$147",       description: "Fast, focused deliverables. Ideal first projects." },
  mid:     { label: "Mid",     priceRange: "$197–$247",  description: "Deeper deliverables for businesses ready to systematize." },
  pro:     { label: "Pro",     priceRange: "$297–$497",  description: "High-leverage deliverables that pay for themselves fast." }
};
