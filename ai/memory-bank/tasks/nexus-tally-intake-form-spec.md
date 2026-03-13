# NEXUS AI Automation Agency — Tally Intake Form Specification

**Agent Role**: Senior Project Manager
**Sprint Phase**: Intake System Build
**Date Created**: 2026-03-12
**Status**: Ready for Tally Build

---

## Overview

One Tally form handles all 16 packages. Question 1 is the package selector. All subsequent conditional blocks surface only when the relevant package is selected. The operator uses this form as the sole briefing document before beginning fulfillment.

**Form Name (exact)**: `NEXUS — Project Intake Form`
**Tally Form Slug**: `nexus-intake`

---

## Universal Questions
*Shown to every respondent regardless of package selected.*

---

**Q1 — Package Selection**
Question text: Which package did you purchase?
Field type: Dropdown (single select)
Required: Yes
Options (exact):
- 00. AI Content Brief Pack — $97
- 01. AI Bio + Brand Voice Kit — $147
- 02. AI Cold Outreach Kit — $147
- 03. AI FAQ + Objection Handler — $147
- 04. AI Email Sequence Builder — $197
- 05. AI Content Calendar (30 Days) — $197
- 06. AI Customer Onboarding Pack — $247
- 07. AI Product Description Pack — $197
- 08. AI YouTube Script Pack — $247
- 09. AI Job Description Kit — $197
- 10. AI SOP Builder — $197
- 11. AI Proposal Template Builder — $247
- 12. AI Newsletter System — $297
- 13. AI Lead Magnet Creator — $297
- 14. AI Course Outline + Module Descriptions — $297
- 15. AI Sales Page Copywriter — $497

Operator note: This drives all conditional logic. If this field is blank, no work begins. Verify the selected package matches the Stripe payment received before opening the brief.

---

**Q2 — Full Name**
Question text: Your full name
Field type: Short text
Required: Yes
Operator note: Used for document naming convention: [ClientName]-[PackageName]-[Date]. Do not begin work without this.

---

**Q3 — Email Address**
Question text: Your email address (where we send your deliverable)
Field type: Email
Required: Yes
Operator note: Delivery destination. Cross-check against Stripe payment email. If different, note the discrepancy before delivering.

---

**Q4 — Business Name**
Question text: What is your business name? (If you are a solopreneur, your personal brand name is fine)
Field type: Short text
Required: Yes
Operator note: Used in all document copy. Confirms the scope is for their business, not a client's.

---

**Q5 — Business Description**
Question text: Describe your business in 2–3 sentences. What do you do, who do you serve, and what outcome do you deliver?
Field type: Long text
Required: Yes
Operator note: This is the foundational context for every deliverable. If this answer is vague ("I help people"), send the follow-up clarification template before starting. Minimum useful answer: industry, audience, and core offer.

---

**Q6 — Target Audience**
Question text: Describe your ideal customer. Who are they — their role, industry, main goal, and biggest frustration?
Field type: Long text
Required: Yes
Operator note: Used in every package. A weak answer here degrades all AI output downstream. If the client writes one sentence, request more detail before proceeding.

---

**Q7 — Brand Voice**
Question text: How would you describe your brand voice or tone? Choose all that apply and add any notes.
Field type: Checkboxes (multi-select) + optional text field labeled "Additional tone notes"
Options:
- Direct and no-nonsense
- Warm and conversational
- Professional and formal
- Witty and light
- Educational and clear
- Bold and confident
- Calm and reassuring
Required: Yes (at least one checkbox)
Operator note: Sets the tone for all copy output. If "Additional tone notes" has content, weight it above the checkboxes — it is more specific. If nothing is selected and no notes provided, default to "clear and professional" and note this in the delivery email.

---

**Q8 — Existing Assets**
Question text: Do you have any existing brand materials, copy, or documents we should reference? (Optional — paste links or describe what you have)
Field type: Long text
Required: No
Operator note: If provided, review before prompting. Existing copy = voice samples. Website URL here is gold — run it through an AI summary before building any copy deliverable.

---

**Q9 — Deadline Sensitivity**
Question text: Is there anything time-sensitive about this project we should know? (Standard delivery is 48 hours)
Field type: Long text
Required: No
Operator note: Flag if client mentions a launch, meeting, or deadline under 48 hours. Do not accept rush fulfillment unless you have confirmed capacity. If a hard deadline conflict exists, email the client before starting.

---

**Q10 — Anything Else**
Question text: Is there anything else we should know before we begin? Any constraints, preferences, or context not covered above?
Field type: Long text
Required: No
Operator note: Read this carefully. Clients often bury scope-creep signals here ("I also need you to..." or "Can you also include..."). If the answer contains requests outside the package scope, reply before starting — do not silently absorb extra work.

---

## Conditional Question Blocks
*Each block is shown ONLY when the matching package is selected in Q1.*

---

### Package 00 — AI Content Brief Pack ($97)
*Condition: Q1 = "00. AI Content Brief Pack — $97"*

**P00-Q1**
Question text: What is your primary content goal right now — driving traffic, generating leads, or building brand awareness?
Field type: Single select (Traffic / Leads / Brand Awareness / All three)
Required: Yes
Why it matters: Changes the structure of each brief. Traffic briefs lead with SEO angles. Lead briefs end with conversion CTAs. Brand briefs prioritize authority and voice.

**P00-Q2**
Question text: What niche or topic should all 10 briefs cover? Be as specific as possible. (Example: "email marketing for e-commerce brands" not just "marketing")
Field type: Long text
Required: Yes
Why it matters: The narrower the niche, the stronger the briefs. Vague niche = generic output. If the answer is a single broad word, send the clarification template.

**P00-Q3**
Question text: Paste the URLs of 2–3 competitor or reference websites you admire or compete against.
Field type: Long text
Required: Yes
Why it matters: Competitor URLs reveal content patterns, tone, and keyword territory to build around or differentiate from.

**P00-Q4**
Question text: Are there any topics, angles, or content types you want us to avoid?
Field type: Long text
Required: No
Why it matters: Prevents wasted briefs. If they have already covered certain topics recently, knowing this avoids duplication.

---

### Package 01 — AI Bio + Brand Voice Kit ($147)
*Condition: Q1 = "01. AI Bio + Brand Voice Kit — $147"*

**P01-Q1**
Question text: List your top 3–5 professional credentials, achievements, or experiences that define your authority in your space.
Field type: Long text
Required: Yes
Why it matters: Bio copy cannot be fabricated. This is the raw material for all bio lengths (50/100/200 words). Without specifics, the output is generic and useless.

**P01-Q2**
Question text: Where will these bios be used? Select all that apply.
Field type: Checkboxes: LinkedIn / Website About Page / Speaker Profile / Social Media / Press Kit / Email Signature / Other
Required: Yes
Why it matters: LinkedIn bios have different character constraints and conventions than press kits. Platform context shapes formatting and tone.

**P01-Q3**
Question text: Paste 1–2 examples of bios or brand voices you admire — from other people, brands, or your own previous writing.
Field type: Long text
Required: No
Why it matters: A reference sample is worth 10 bullet points of tone description. Even a "not like this" example is useful.

**P01-Q4**
Question text: What is the single most important thing you want someone to feel or remember after reading your bio?
Field type: Short text
Required: Yes
Why it matters: This becomes the anchor sentence or closing hook. Without a clear intent, the bio will read as a resume rather than a positioning statement.

---

### Package 02 — AI Cold Outreach Kit ($147)
*Condition: Q1 = "02. AI Cold Outreach Kit — $147"*

**P02-Q1**
Question text: Who are you reaching out to? Describe the exact role, company type, and industry you are targeting. (Example: "Founders of B2B SaaS companies with 10–50 employees")
Field type: Long text
Required: Yes
Why it matters: Cold outreach copy must speak to a specific person. Generic ICP descriptions produce generic scripts that get deleted.

**P02-Q2**
Question text: What specific problem do you solve for this prospect? What are they likely struggling with right now that your offer addresses?
Field type: Long text
Required: Yes
Why it matters: The opening hook of every outreach message is built around this answer. If it is vague, all three touches (email, LinkedIn, follow-up) will lead with weak openers.

**P02-Q3**
Question text: What is your core offer or ask in this outreach — a demo, a discovery call, a free audit, or something else?
Field type: Short text
Required: Yes
Why it matters: Determines the CTA for every message. Without this, the call-to-action cannot be written.

**P02-Q4**
Question text: Have you run cold outreach before? If yes, what messaging or angles did NOT work?
Field type: Long text
Required: No
Why it matters: Prevents repeating failed approaches. Even one "we tried X and got no replies" saves significant revision cycles.

**P02-Q5**
Question text: What is the desired tone — direct and punchy, warm and conversational, or formal and polished?
Field type: Single select (Direct and punchy / Warm and conversational / Formal and polished)
Required: Yes
Why it matters: Cold outreach tone is channel and audience-dependent. A VC intro reads differently than an SMB owner pitch. This overrides Q7 for outreach copy specifically.

---

### Package 03 — AI FAQ + Objection Handler ($147)
*Condition: Q1 = "03. AI FAQ + Objection Handler — $147"*

**P03-Q1**
Question text: List the 10–15 most common questions your prospects or customers ask before or after buying. Bullet points are fine.
Field type: Long text
Required: Yes
Why it matters: The deliverable is built directly from this list. If fewer than 8 questions are provided, the output will be padded with generic questions the client may not need. Gate this strictly.

**P03-Q2**
Question text: What are the top 3–5 reasons prospects hesitate or say no to your offer?
Field type: Long text
Required: Yes
Why it matters: The objection handler section lives or dies on this answer. "It's too expensive" is not enough — push for specifics like "They say they need to talk to their partner first" or "They don't believe results are possible for their industry."

**P03-Q3**
Question text: Where will this FAQ + objection handler be used? (Sales page, chatbot, email sequence, customer support, sales calls, or other)
Field type: Checkboxes + short text "Other"
Required: Yes
Why it matters: Format and length differ by placement. A sales page FAQ is scannable. A sales call objection handler is scripted dialogue. The use case changes the output structure.

**P03-Q4**
Question text: What is the price of the offer these FAQs and objections relate to?
Field type: Short text
Required: No
Why it matters: Price context shapes how objections are framed and rebutted. A $97 product objection sounds different from a $5,000 retainer objection. Useful context even if not required.

---

### Package 04 — AI Email Sequence Builder ($197)
*Condition: Q1 = "04. AI Email Sequence Builder — $197"*

**P04-Q1**
Question text: What is the purpose of this email sequence? (Welcome new subscribers / Nurture cold leads / Promote a specific offer / Re-engage inactive contacts / Post-purchase follow-up / Other)
Field type: Single select + short text "Other"
Required: Yes
Why it matters: Sequence architecture changes entirely by purpose. A welcome sequence educates. A sales sequence pushes a decision. Without this, the sequence will lack direction.

**P04-Q2**
Question text: How many emails do you want in this sequence? (Standard is 5 — specify if you need more or fewer)
Field type: Short text
Required: Yes
Why it matters: Scope definition. The base package is 5 emails. If a client writes "10 emails," respond before starting to clarify scope and pricing.

**P04-Q3**
Question text: What is the primary offer or outcome this sequence leads toward?
Field type: Long text
Required: Yes
Why it matters: Every email in the sequence should move toward a single goal. Without knowing the destination, the sequence meanders.

**P04-Q4**
Question text: What email platform are you using? (Mailchimp, ConvertKit, ActiveCampaign, Klaviyo, HubSpot, Beehiiv, Other)
Field type: Single select + short text "Other"
Required: No
Why it matters: Formatting notes (plain text vs. HTML, subject line length limits) vary by platform. Useful for polishing the final doc.

**P04-Q5**
Question text: Paste a link to your website or any existing emails so we can match your voice.
Field type: Short text
Required: No
Why it matters: Voice matching from a live example is faster and more accurate than working from tone descriptors alone.

---

### Package 05 — AI Content Calendar (30 Days) ($197)
*Condition: Q1 = "05. AI Content Calendar (30 Days) — $197"*

**P05-Q1**
Question text: Which platform(s) is this content calendar for? Select all that apply.
Field type: Checkboxes: LinkedIn / Instagram / Twitter/X / Facebook / TikTok / YouTube (shorts) / Threads / Other
Required: Yes
Why it matters: Post format, length, and cadence differ significantly by platform. A LinkedIn post is not a TikTok caption.

**P05-Q2**
Question text: What are your 3–5 core content themes or pillars? (Example: "behind the scenes, client results, educational tips, personal story, industry news")
Field type: Long text
Required: Yes
Why it matters: Without content pillars, the 30 posts will lack variety and strategic intent. If the client says "just make them interesting," prompt for at least 3 themes before proceeding.

**P05-Q3**
Question text: Are there any upcoming events, launches, promotions, or dates we should build content around?
Field type: Long text
Required: No
Why it matters: Time-anchored content is far more useful than evergreen posts alone. Even knowing a webinar date or product launch window lets you sequence content intentionally.

**P05-Q4**
Question text: What is your preferred posting frequency per week?
Field type: Single select (1x/week / 3x/week / 5x/week / Daily / Flexible)
Required: Yes
Why it matters: Determines the total post count and how the 30 days are distributed. A daily calendar has 30 posts. A 3x/week calendar has ~13.

**P05-Q5**
Question text: Are there any topics, formats, or content types you want to avoid?
Field type: Long text
Required: No
Why it matters: Prevents delivering posts the client will never use. "No motivational quotes" or "no promotional posts" are common constraints that should be known upfront.

---

### Package 06 — AI Customer Onboarding Pack ($247)
*Condition: Q1 = "06. AI Customer Onboarding Pack — $247"*

**P06-Q1**
Question text: Describe your service or product and what a client has just purchased when they receive this onboarding.
Field type: Long text
Required: Yes
Why it matters: The welcome email, checklist, and milestone doc must reflect the actual client journey. Generic onboarding copy is worse than no onboarding at all.

**P06-Q2**
Question text: What are the key milestones or steps in your client's first 30 days with you?
Field type: Long text
Required: Yes
Why it matters: This populates the 30-day milestone tracker. If the client cannot describe their own milestones, ask them to list what they expect from a new client in chronological order.

**P06-Q3**
Question text: What tools, platforms, or accounts does a new client need to set up or access during onboarding?
Field type: Long text
Required: No
Why it matters: The onboarding checklist should reflect real client actions, not placeholders. Tool list prevents generic "set up your account" steps.

**P06-Q4**
Question text: What is the most common point of confusion or friction in your current onboarding process?
Field type: Long text
Required: No
Why it matters: Designing around known friction points makes the deliverable immediately useful rather than theoretical.

---

### Package 07 — AI Product Description Pack ($197)
*Condition: Q1 = "07. AI Product Description Pack — $197"*

**P07-Q1**
Question text: List the products or services you need descriptions for. Include product name, key specs or features, and the price for each.
Field type: Long text
Required: Yes
Why it matters: This is the input manifest. Without a product list, no descriptions can be written. If the client provides more than 10 products, confirm scope before proceeding — the standard package covers up to 10.

**P07-Q2**
Question text: Where will these descriptions appear? (E-commerce product page, pitch deck, wholesale catalog, website services section, Amazon listing, other)
Field type: Checkboxes + short text "Other"
Required: Yes
Why it matters: Amazon listings have character limits and keyword-stuffing conventions. Pitch deck copy is brief and punchy. E-commerce copy is benefit-led. Format adapts by channel.

**P07-Q3**
Question text: What is the primary emotion or outcome you want the customer to feel or achieve after reading each description?
Field type: Short text
Required: Yes
Why it matters: All product copy should end with a feeling: confident, excited, relieved, curious. This answer sharpens every closing sentence.

**P07-Q4**
Question text: Who are your main competitors selling similar products? Paste 1–2 URLs if possible.
Field type: Long text
Required: No
Why it matters: Differentiation hooks are built from competitor positioning gaps. Even one competitor URL helps the AI write against the market rather than in a vacuum.

---

### Package 08 — AI YouTube Script Pack ($247)
*Condition: Q1 = "08. AI YouTube Script Pack — $247"*

**P08-Q1**
Question text: How many scripts are included in your package? And what are the video titles or topics for each script? (List them as a numbered bullet list)
Field type: Long text
Required: Yes
Why it matters: Scope clarity up front. Standard pack is 3 scripts. If the client lists 6 topics, clarify before starting.

**P08-Q2**
Question text: What is your target video length? (Under 5 minutes / 5–10 minutes / 10–15 minutes / 15+ minutes)
Field type: Single select
Required: Yes
Why it matters: Script word count is tied directly to video length. A 5-minute video needs roughly 700 words. A 15-minute video needs 2,100+. This scopes the work accurately.

**P08-Q3**
Question text: Who is the primary audience for these videos? Be specific about their awareness level — do they already know your brand, or are these for cold discovery?
Field type: Long text
Required: Yes
Why it matters: Cold audience scripts lead with hooks and context-setting. Warm audience scripts can skip to depth and detail. Wrong audience awareness level produces the wrong script structure.

**P08-Q4**
Question text: Do you have a preferred script structure? (Hook-story-offer / Educational how-to / Interview / Documentary style / Other)
Field type: Single select + short text "Other"
Required: No
Why it matters: Prevents delivering a wrong-format script that requires a full rewrite. If no preference, default to hook-story-offer and note this in the delivery email.

**P08-Q5**
Question text: Paste links to 1–2 YouTube videos (yours or others) that represent the style, pacing, or energy you want.
Field type: Long text
Required: No
Why it matters: Reference videos are the fastest way to calibrate pacing and tone. A link beats a paragraph of description every time.

---

### Package 09 — AI Job Description Kit ($197)
*Condition: Q1 = "09. AI Job Description Kit — $197"*

**P09-Q1**
Question text: List the job titles you need descriptions for. For each role, provide: title, key responsibilities (bullet points), and whether it is full-time, part-time, or contract.
Field type: Long text
Required: Yes
Why it matters: Job descriptions cannot be written without at minimum the title and responsibilities. If the client provides only titles, send the clarification template before starting.

**P09-Q2**
Question text: How many roles are in this package? (Standard is 5 — specify if different)
Field type: Short text
Required: Yes
Why it matters: Scope gate. If the client says 8 roles, clarify price adjustment before proceeding.

**P09-Q3**
Question text: Describe your company culture in 3–5 sentences. What makes working here different?
Field type: Long text
Required: Yes
Why it matters: The culture fit section of each job description is what attracts the right candidates and repels the wrong ones. Generic culture copy ("we value hard work and teamwork") wastes this section.

**P09-Q4**
Question text: Are you open to including salary ranges in the descriptions?
Field type: Single select (Yes, include range / No, omit salary / List as "Competitive — based on experience")
Required: Yes
Why it matters: Salary transparency is a live hiring decision. The operator should not make this choice — the client must specify.

---

### Package 10 — AI SOP Builder ($197)
*Condition: Q1 = "10. AI SOP Builder — $197"*

**P10-Q1**
Question text: List the processes you need documented as SOPs. For each process, provide: process name and a brief description of what it involves. (Standard package: up to 5 SOPs)
Field type: Long text
Required: Yes
Why it matters: Without a process list, no SOPs can be written. This is the most scope-sensitive package. If descriptions are vague, output will require heavy revision.

**P10-Q2**
Question text: For each process listed above, describe the steps in sequence — even roughly. Voice notes, bullet points, or brain dumps are acceptable.
Field type: Long text
Required: Yes
Why it matters: The AI cannot invent accurate process steps. This input is non-negotiable. If the client says "you figure it out," decline until input is provided. This protects both the operator and the client.

**P10-Q3**
Question text: Who is the primary person responsible for executing each SOP? (Role title is sufficient)
Field type: Long text
Required: No
Why it matters: The "Owner" field in each SOP template requires this. If blank, output will have an empty owner field — acceptable but noted.

**P10-Q4**
Question text: What tools or software are used in each process? (Example: Notion, Slack, HubSpot, Google Drive)
Field type: Long text
Required: No
Why it matters: SOPs that reference actual tool names are immediately actionable. Generic "use your project management tool" steps are less useful.

---

### Package 11 — AI Proposal Template Builder ($247)
*Condition: Q1 = "11. AI Proposal Template Builder — $247"*

**P11-Q1**
Question text: What type of proposals do you typically send? (Project-based / Retainer / Partnership / Event / Other)
Field type: Single select + short text "Other"
Required: Yes
Why it matters: Proposal structure differs significantly by type. A retainer proposal has a different section order than a one-off project proposal.

**P11-Q2**
Question text: Describe your most common service offering that this proposal template should be built around. Include: what it is, who it is for, what is delivered, and your typical pricing structure.
Field type: Long text
Required: Yes
Why it matters: The deliverable is a reusable template. It needs a realistic service description to be pre-filled with useful placeholder copy rather than generic sections.

**P11-Q3**
Question text: What is your typical proposal length and format preference? (1 page brief / 3–5 page full proposal / Notion page / Google Doc / PDF)
Field type: Single select + short text "Other"
Required: Yes
Why it matters: Deliverable format must match client expectation. Mismatched format = revision request.

**P11-Q4**
Question text: What sections must be included? (Select all that apply)
Field type: Checkboxes: Executive Summary / Problem Statement / Proposed Solution / Scope of Work / Timeline / Pricing / Team Bios / Case Studies / Terms + Conditions / Next Steps
Required: Yes
Why it matters: Ensures no required section is missed. If the client selects "Terms + Conditions," note this will be a placeholder — legal review is outside the package scope.

---

### Package 12 — AI Newsletter System ($297)
*Condition: Q1 = "12. AI Newsletter System — $297"*

**P12-Q1**
Question text: Describe your newsletter — what is the topic, cadence (weekly, biweekly, monthly), and the primary goal (build audience, nurture leads, drive traffic, monetize)?
Field type: Long text
Required: Yes
Why it matters: Newsletter architecture (template structure, section types, CTA placement) depends entirely on the goal and cadence.

**P12-Q2**
Question text: Who is your newsletter audience? What are they interested in, what is their expertise level, and why do they subscribe?
Field type: Long text
Required: Yes
Why it matters: Audience context determines depth, tone, and content complexity. A newsletter for beginners reads differently from one for industry veterans.

**P12-Q3**
Question text: What newsletter platform do you use or plan to use? (Beehiiv, ConvertKit, Substack, Mailchimp, Kit, Other)
Field type: Single select + short text "Other"
Required: Yes
Why it matters: Template structure adapts by platform. Substack has limited formatting. Beehiiv supports rich sections. Knowing the platform prevents building templates the platform cannot render.

**P12-Q4**
Question text: How many newsletter issues should be included in the system? (Standard: 4 issues as templates)
Field type: Short text
Required: Yes
Why it matters: Scope gate. If client expects 12 issues, clarify before starting.

**P12-Q5**
Question text: Do you have a signature content format or section structure you already use or want to use? (Example: "Intro story, 3 tips, one tool recommendation, CTA")
Field type: Long text
Required: No
Why it matters: Pre-existing formats should be honored. Building a conflicting template structure wastes both parties' time.

---

### Package 13 — AI Lead Magnet Creator ($297)
*Condition: Q1 = "13. AI Lead Magnet Creator — $297"*

**P13-Q1**
Question text: What type of lead magnet do you want? (Checklist / Mini guide / Email course / Swipe file / Template / Quiz / Cheat sheet / Other)
Field type: Single select + short text "Other"
Required: Yes
Why it matters: Different formats have different scopes. A 5-page mini guide takes 3x longer to produce than a 1-page checklist. If the client selects "Email course," clarify how many emails before starting.

**P13-Q2**
Question text: What is the core problem or desired outcome this lead magnet addresses? Be specific. (Example: "Help a solopreneur set up their first Notion CRM in under an hour")
Field type: Long text
Required: Yes
Why it matters: The sharper the problem statement, the more targeted the lead magnet. Vague problems produce vague lead magnets that convert poorly.

**P13-Q3**
Question text: What is the main offer or next step you want a new subscriber to take after consuming this lead magnet?
Field type: Long text
Required: Yes
Why it matters: The CTA at the end of every lead magnet must connect to the next step. Without this, the deliverable ends without direction.

**P13-Q4**
Question text: Do you need the lead magnet copy only, or copy plus a basic layout/structure guide for a designer?
Field type: Single select (Copy only / Copy + layout structure guide)
Required: Yes
Why it matters: This distinguishes the deliverable scope. Copy only is faster. Layout structure guide adds a wireframe-level document that a designer can follow.

---

### Package 14 — AI Course Outline + Module Descriptions ($297)
*Condition: Q1 = "14. AI Course Outline + Module Descriptions — $297"*

**P14-Q1**
Question text: What is the name and core promise of this course? (Example: "The 5-Day Cold Email Sprint — Go from zero to 10 qualified replies in 5 days")
Field type: Long text
Required: Yes
Why it matters: The course title and promise anchor every module description. Without it, the outline will lack narrative flow and transformation arc.

**P14-Q2**
Question text: What level of student is this course for — beginner, intermediate, or advanced? And what does the student know and what can they do before starting vs. after finishing?
Field type: Long text
Required: Yes
Why it matters: Before/after transformation drives module sequencing. A beginner course starts from zero context. An advanced course skips foundations. Getting this wrong makes the outline feel mismatched to the audience.

**P14-Q3**
Question text: How many modules and lessons are you aiming for? (Example: 5 modules, 3–4 lessons each)
Field type: Short text
Required: Yes
Why it matters: Scope definition. Standard package delivers up to 6 modules with descriptions. More modules require scope clarification.

**P14-Q4**
Question text: What is the primary delivery format — video, text, live cohort, self-paced, or a hybrid?
Field type: Single select (Video / Text + PDF / Live cohort / Self-paced hybrid / Other)
Required: Yes
Why it matters: Module descriptions are written differently for video scripts vs. written lessons vs. live workshop formats.

**P14-Q5**
Question text: What platform will this course be hosted on? (Kajabi, Teachable, Skool, Podia, Notion, Google Docs, Other)
Field type: Single select + short text "Other"
Required: No
Why it matters: Formatting context. Notion and Google Docs need clean text hierarchy. Kajabi and Teachable allow richer multimedia descriptions.

---

### Package 15 — AI Sales Page Copywriter ($497)
*Condition: Q1 = "15. AI Sales Page Copywriter — $497"*

**P15-Q1**
Question text: What is the offer this sales page is selling? Include: name, price, what is delivered, delivery timeline, and who it is for.
Field type: Long text
Required: Yes
Why it matters: This is the most complex package. A sales page cannot be written without a complete offer brief. If any of the four elements (name, price, deliverable, audience) are missing, request clarification before starting.

**P15-Q2**
Question text: What is the primary transformation or result the buyer achieves? State it as specifically as possible — with numbers or timeframes if available.
Field type: Long text
Required: Yes
Why it matters: The headline, hero section, and close are all built around this transformation. Vague outcomes produce vague headlines. "More leads" is weak. "10 qualified discovery calls in 30 days" is a headline.

**P15-Q3**
Question text: List the top 3–5 objections a prospect has before buying this offer.
Field type: Long text
Required: Yes
Why it matters: Objection handling is built into the sales page structure (FAQ, risk reversal, proof sections). Without knowing the real objections, these sections will be generic.

**P15-Q4**
Question text: What proof do you have? (Paste testimonials, case study summaries, results data, screenshots descriptions, or "none yet")
Field type: Long text
Required: Yes
Why it matters: Social proof sections require actual proof. If the answer is "none yet," note this in the deliverable with placeholder copy and flag that proof blocks will need to be filled in post-launch.

**P15-Q5**
Question text: What is the primary CTA — book a call, buy now, join waitlist, or other? And what happens immediately after someone clicks?
Field type: Long text
Required: Yes
Why it matters: Every CTA on the page must match the conversion mechanism. A "book a call" CTA leads to a Calendly. A "buy now" CTA leads to Stripe. Mismatched CTAs break conversion flow.

**P15-Q6**
Question text: Are there any competitor sales pages you admire — for tone, structure, or copy style? Paste URLs.
Field type: Long text
Required: No
Why it matters: Reference pages accelerate alignment. One good reference is worth a 500-word creative brief.

---

## Tally Setup Instructions

### Step 1 — Create the Form

1. Log in to Tally.so and click "Create new form."
2. Name the form exactly: `NEXUS — Project Intake Form`
3. Set the form URL slug to: `nexus-intake`
4. Set form type to "Standard form" (not survey or quiz mode).

### Step 2 — Add Universal Questions

Add questions Q1 through Q10 in order. For Q1 (package selector), use a "Dropdown" block. For all short text fields, use "Input" blocks. For long text fields, use "Textarea" blocks. For checkbox fields, use "Multi-select" blocks.

Mark Q1 through Q7 as required by clicking the three-dot menu on each question and toggling "Required."

### Step 3 — Add Conditional Logic Blocks

For each of the 16 packages, you will create a "Conditional Block" or use Tally's Logic feature as follows:

1. After Q10, click the "+" to add a new block.
2. Select "Add logic" or "Conditional section."
3. Set the condition: "Show this section IF Q1 equals [Package Name]."
4. Inside that conditional section, add the package-specific questions (P00-Q1 through P15-Q6 as applicable).
5. Repeat this for all 16 packages.

Note: Tally Free tier has limited logic. Confirm you are on Tally Pro before building conditional blocks. Logic requires the Pro plan.

### Step 4 — Add a Thank-You Page

1. Click "Ending" or "Thank you page" in the form settings.
2. Set the message to:

   "Thank you — your intake form has been submitted. We have received your brief and will begin work within 24 hours. Expect your deliverable within 48 hours of submission. If you have questions, reply to your payment confirmation email."

3. Do not add redirect links to external sites unless a client portal is live.

### Step 5 — Connect to Notion

1. In the form settings, click "Integrations."
2. Select "Notion."
3. Authenticate your Notion account.
4. Select the database: "NEXUS — Client Intakes" (create this database in Notion first with the following properties: Client Name, Email, Package, Submission Date, Status [Not Started / In Progress / Delivered], Notes).
5. Map Tally fields to Notion properties:
   - Q2 Full Name → Client Name
   - Q3 Email → Email
   - Q1 Package → Package
   - Submission timestamp → Submission Date
   - Status default → "Not Started"
6. Save and test with a dummy submission.

### Step 6 — Enable Email Notifications

1. In form settings, click "Notifications."
2. Enable "Email notification on new submission."
3. Set recipient to your primary operator email address.
4. Subject line: `New NEXUS Intake: [Q1 value] — [Q2 value]`
5. Include all form fields in the notification body.
6. Optional: Enable respondent confirmation email — send to Q3 (Email) with the thank-you message text from Step 4.

### Step 7 — Embed or Share the Form

1. Copy the public form link: `https://tally.so/r/nexus-intake`
2. Add this link to:
   - Stripe payment confirmation email (as "Complete your project brief here")
   - NEXUS website confirmation page (post-checkout redirect)
   - Your email signature for new client emails
3. Do not publish the direct form link in public listings — only send post-payment.

### Step 8 — Test the Form End-to-End

1. Submit a test entry selecting each of the 16 packages in Q1 and confirm the correct conditional block appears.
2. Verify the Notion database receives the entry.
3. Verify the email notification arrives at the operator email.
4. Check that required fields block submission when empty.
5. Clear all test entries from the Notion database before going live.

---

## Intake Completeness Gate

### Minimum Requirements to Begin Work

Before opening Claude or ChatGPT to begin fulfillment, confirm ALL of the following are true:

**Universal minimums — non-negotiable:**
- [ ] Q1 Package is selected and matches the Stripe payment received
- [ ] Q2 Full Name is present
- [ ] Q3 Email matches the Stripe payment email (or discrepancy is noted)
- [ ] Q4 Business Name is present
- [ ] Q5 Business Description is at least 2 sentences and includes an industry, an audience, and an offer
- [ ] Q6 Target Audience describes a person — not just "businesses" or "everyone"
- [ ] Q7 Brand Voice has at least one selection

**Package-specific minimums:**
- At least the Required fields in the relevant conditional block are answered
- Specifically: every field marked Required: Yes in the conditional block section above must have a substantive answer — not a placeholder like "TBD" or "you decide"

### What "Substantive" Means

- Short text: At least 5 words
- Long text: At least 2 sentences or 5 bullet points
- Single select: A selection is made
- Checkboxes: At least one option is checked

### What to Do If a Required Field is Blank or Insufficient

1. Do not start work.
2. Reply to the client within 2 hours of receiving the incomplete intake using the following template:

---

Subject: Quick question before we start your [Package Name]

Hi [Name],

Thank you for submitting your intake form — we are ready to get started.

Before we begin, we need one clarification:

[Paste the specific question and explain why it is needed. Be direct and brief.]

Reply to this email with your answer and we will begin immediately.

— NEXUS Team

---

3. Log the intake status in Notion as "Pending Client Input" until the answer is received.
4. Only one clarification email should be needed. If you find yourself needing to ask more than two follow-up questions on a single package, the intake form questions for that package need revision — note this in the form changelog.

### Packages with Elevated Input Requirements

The following packages should be held to a stricter completeness standard before work begins — one missing key input can cause a full restart:

| Package | Critical Input | Risk if Missing |
|---|---|---|
| 10 — AI SOP Builder | P10-Q2 (process steps) | SOPs will be fabricated, not documented |
| 15 — AI Sales Page Copywriter | P15-Q2 (transformation) and P15-Q3 (objections) | Headline and proof sections will be generic |
| 14 — AI Course Outline | P14-Q2 (before/after transformation) | Module sequencing will lack narrative arc |
| 08 — AI YouTube Script Pack | P08-Q2 (video length) | Word count will be wrong for scope |
| 02 — AI Cold Outreach Kit | P02-Q1 (exact ICP) | Every script will open with a weak hook |

### Completeness Score (Optional Operator Tool)

Assign a score before starting. Count how many required fields (universal + package-specific) are answered substantively. Divide by total required fields. Express as a percentage.

- 100%: Begin immediately.
- 80–99%: Begin if missing fields are not in the elevated-risk list above. Send one clarification email in parallel.
- Below 80%: Hold work. Send clarification email. Do not begin until score reaches 90% or above.

---

## Operator Notes — Standing Rules

- Deliverable naming convention: `[ClientFirstName]-[PackageSlug]-[YYYY-MM-DD]`
  Example: `Sarah-ContentBriefs-2026-03-15`
- Always review AI output before delivering. Never send raw prompt output.
- If a client's business description makes the package inappropriate (e.g., they bought a Content Calendar but have no content strategy at all), flag this in the reply email before starting — do not silently fulfill a package that will fail for the client.
- One revision is included in all packages. State this in the delivery email. Second revision requests are a $47 add-on.
- If a client submits an intake form but no matching Stripe payment exists, do not begin work. Reply with a payment verification note.
