# NEXUS AI Automation Agency — Fulfillment Playbook

**Version**: 1.0
**Operator**: Solo
**Fulfillment method**: Claude or ChatGPT (manual prompt-based)
**Last updated**: 2026-03-12

---

## How to Use This Playbook

1. Receive intake form submission (via Tally or email).
2. Open the relevant package section below.
3. Follow Steps 1–4 in order.
4. Deliver via the specified format and channel.
5. Log the delivery in your project tracker.

If a client submits incomplete intake information, send a clarification request before starting work. Never begin a deliverable on assumptions alone.

---

## Global Variable Reference

Every prompt uses bracketed placeholders. Before pasting any prompt, replace all of the following:

| Placeholder | What to fill in |
|---|---|
| [BUSINESS NAME] | Client's business or brand name |
| [INDUSTRY] | Their industry or niche |
| [TARGET AUDIENCE] | Their ideal customer description |
| [TONE] | Tone from intake (professional, casual, bold, etc.) |
| [PRODUCT/SERVICE] | What they sell |
| [URL] | Their website or landing page |
| [UNIQUE VALUE PROP] | Their stated differentiator |
| [GOAL] | What they want the content to achieve |

---

---

## Package 00 — AI Content Brief Pack

**Price**: $97 | **Deliverable**: 10 content briefs | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Topic list or content pillars (minimum 3 pillars to work from)
- Target audience description (specific enough to infer search intent)
- Platform (blog, LinkedIn, YouTube — briefs differ by format)
- SEO keywords (optional but valuable; ask if missing and deadline allows)
- Existing content examples they like (used to calibrate style)

Red flags requiring clarification before starting:
- "Just make 10 topics" with no niche or audience info — too vague, produce nothing
- Industry they say is regulated (legal, medical, financial) — ask about compliance constraints
- No clarity on platform — briefs for blogs are structured differently from video briefs

---

### Step 2 — Master Prompt

```
You are a senior content strategist who creates detailed, actionable content briefs for B2B and B2C content teams.

Your task is to produce 10 complete content briefs for [BUSINESS NAME], a [INDUSTRY] business that serves [TARGET AUDIENCE].

Their content pillars are: [LIST PILLARS — e.g., "thought leadership, client education, industry news commentary"]
Their primary platform is: [PLATFORM — e.g., "company blog"]
Their brand tone is: [TONE]
Their core offer is: [PRODUCT/SERVICE]

For each of the 10 briefs, output the following fields in this exact order:

---
**Brief #[NUMBER]**
- **Working Title**: (compelling, specific, SEO-friendly where possible)
- **Content Angle**: (what makes this piece different from generic content on this topic)
- **Target Keyword or Search Intent**: (primary topic or phrase the reader is searching for)
- **Target Audience Segment**: (specific sub-segment of [TARGET AUDIENCE] this piece speaks to)
- **Goal**: (what action or belief shift this piece should create)
- **Recommended Format**: (listicle / how-to / case study / opinion / comparison / etc.)
- **Outline** (5–7 section headings with one sentence describing each section's purpose):
  - H2:
  - H2:
  - H2:
  - H2:
  - H2:
- **Word Count Target**: (recommended length based on format)
- **CTAs**: (1 primary CTA and 1 secondary CTA relevant to [PRODUCT/SERVICE])
- **Internal Link Opportunities**: (suggest 1–2 topic areas to link to if they exist)
- **Notes for Writer**: (any important caveats, angles to avoid, or brand considerations)
---

Produce all 10 briefs without truncating. Vary the formats and angles across the set so they are not repetitive. Do not reuse the same structure or angle twice.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 10 briefs are present and numbered — no truncation midway through.
2. Each brief has all listed fields filled in, none left blank or skipped.
3. Working titles are specific and non-generic ("5 Ways [INDUSTRY] Leaders Use AI to Cut Costs" beats "AI Tips for Business").
4. Formats are varied across the 10 — confirm at least 4 different format types appear.
5. CTAs are relevant to the client's actual offer, not a generic "Contact us."

---

### Step 4 — Delivery Format

- **File format**: Google Doc (preferred) or .docx
- **Naming convention**: `NEXUS_ContentBriefs_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Upload to Google Drive, share view link in delivery email; attach .docx as backup
- **Delivery email subject**: `Your AI Content Brief Pack is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions is included.
- If client wants to swap out topics: replace only the requested briefs, keep the rest intact.
- If client says "the tone is off": ask them to mark 2–3 specific lines, then adjust those briefs and explain what changed.
- If they want more depth on one brief: add an expanded outline for that brief only, do not redo all 10.

---

---

## Package 01 — AI Bio + Brand Voice Kit

**Price**: $147 | **Deliverable**: 3-format bio + brand voice guide | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Full name and title/role
- What they do and who they serve (1–2 sentences in their own words)
- Career highlights, credentials, or specific achievements (real numbers, real facts)
- Desired tone (personal, professional, bold, warm, etc.)
- Where each bio format will be used (LinkedIn, website About page, speaker intro, press kit)
- Any specific phrases they love or hate

Red flags requiring clarification before starting:
- No achievements listed — generic bios without specifics read as forgettable; ask for 3 facts
- "Just write something nice" — push for actual tone direction before proceeding
- Speaker or press bio requested without knowing their speaking topics

---

### Step 2 — Master Prompt

```
You are a professional copywriter who specializes in personal branding and executive communications. You write bios that are specific, credible, and magnetic — not generic corporate bios.

Your task is to write 3 versions of a professional bio for [FULL NAME], [TITLE/ROLE] at [BUSINESS NAME].

Background information:
- What they do: [WHAT THEY DO]
- Who they serve: [TARGET AUDIENCE]
- Key achievements and credentials: [LIST ACHIEVEMENTS — be specific: years, numbers, names]
- Desired tone: [TONE — e.g., "warm and approachable but credible"]
- Industries or areas of expertise: [INDUSTRY/EXPERTISE]

Write these 3 bio formats:

---
**BIO FORMAT 1: Short Bio (50–80 words)**
Purpose: Social media profiles, email signatures, speaker panels
Requirements: One punchy paragraph. Lead with value delivered, not job title. End with a human detail.

**BIO FORMAT 2: Medium Bio (150–200 words)**
Purpose: LinkedIn About section, website team page
Requirements: Two to three paragraphs. Paragraph 1 = who they help and how. Paragraph 2 = proof and credentials. Paragraph 3 = a human element or call to connection.

**BIO FORMAT 3: Long Bio (300–350 words)**
Purpose: Speaker intro, press kit, media page
Requirements: Full narrative. Opens with a hook. Covers professional journey, key turning points, specific results achieved, and current focus. Close with a single strong sentence about what drives them.

---

After the 3 bios, write a Brand Voice Guide section with these components:

**BRAND VOICE GUIDE — [FULL NAME] / [BUSINESS NAME]**

1. **Voice Archetype** (choose one: Expert, Guide, Challenger, Nurturer, Innovator — with a 2-sentence justification)
2. **Tone Descriptors** (exactly 5 adjectives that define the voice, each with a one-line explanation of what it means in practice)
3. **Vocabulary to Use** (10 words or phrases that feel on-brand)
4. **Vocabulary to Avoid** (8 words or phrases that feel off-brand, with a brief note why)
5. **Sentence Style** (describe average sentence length, use of rhetorical questions, use of first vs. third person, use of contractions)
6. **Sample Social Post** (write 1 LinkedIn post, 150–200 words, in this voice — on the topic of [PRODUCT/SERVICE] or their area of expertise)
7. **What This Voice Is NOT** (3 bullet points describing voices or styles to actively avoid — e.g., "Not corporate jargon-heavy", "Not overly casual or emoji-heavy")

Keep all language in [TONE]. Do not truncate any section.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 3 bio formats are present and hit their word count targets (count them).
2. No bio starts with the client's name or job title as the first word — leads must be punchy.
3. The voice guide has all 7 components — none skipped.
4. Vocabulary lists actually reflect the client's industry, not generic business language.
5. The sample social post sounds like a real post someone would publish, not a test example.

---

### Step 4 — Delivery Format

- **File format**: Google Doc with clear section headers
- **Naming convention**: `NEXUS_BioVoiceKit_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your Bio + Brand Voice Kit is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Bio tone adjustments: paste the bio back in with the instruction "Revise this bio to be [MORE/LESS] [adjective]. Keep all facts intact. Do not change the structure."
- Voice guide conflicts ("this doesn't sound like me"): ask them to highlight 2–3 sentences that feel wrong. Identify the pattern, then rerun only the voice guide section with corrected tone direction.

---

---

## Package 02 — AI Cold Outreach Kit

**Price**: $147 | **Deliverable**: 5 outreach templates + follow-up sequence | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Who they are reaching out to (ICP: job title, company size, industry)
- What they are offering (be specific — what problem does it solve, what outcome does it deliver)
- Outreach channel (email, LinkedIn DM, or both)
- Their current open/reply rate if known (context for tone calibration)
- Any angles they have tried that did not work
- Desired call to action (book a call, reply to email, download something)

Red flags requiring clarification before starting:
- Vague ICP — "small business owners" is not enough; need industry and pain point
- Offer with no clear outcome — "I offer consulting" needs to become "I help [X] achieve [Y] in [Z] timeframe"
- Spammy intent signals (e.g., "send to 10,000 contacts") — note ethical use only; proceed but keep templates non-spammy

---

### Step 2 — Master Prompt

```
You are an expert B2B sales copywriter specializing in cold outreach that generates replies without being pushy or spammy. You write messages that feel personal, specific, and valuable to the reader.

Your task is to write a complete cold outreach kit for [BUSINESS NAME] targeting [ICP — e.g., "Operations Managers at manufacturing companies with 50–200 employees"].

About the offer:
- What they sell: [PRODUCT/SERVICE]
- The core problem it solves: [PAIN POINT]
- The outcome the client gets: [DESIRED OUTCOME]
- Proof point or differentiator: [UNIQUE VALUE PROP]
- Desired CTA: [CTA — e.g., "book a 20-minute discovery call"]
- Tone: [TONE — e.g., "direct but not salesy, peer-to-peer"]
- Channel: [EMAIL / LINKEDIN DM / BOTH]

Write the following:

---
**TEMPLATE 1: The Problem-Led Opener**
Subject line: (if email — write 3 subject line options)
Message body: (aim for 80–120 words; open with the problem the ICP has, hint at the solution, soft CTA)

**TEMPLATE 2: The Result-Led Opener**
Subject line: (3 options if email)
Message body: (open with a specific result or case study reference — real or hypothetical-but-plausible — soft CTA)

**TEMPLATE 3: The Insight-Led Opener**
Subject line: (3 options if email)
Message body: (share a counterintuitive insight relevant to their role, position the offer as the solution, soft CTA)

**TEMPLATE 4: The Referral or Social Proof Hook**
Subject line: (3 options if email)
Message body: (open by mentioning a mutual connection, shared community, or recognizable client name — then bridge to offer, soft CTA)

**TEMPLATE 5: The Ultra-Short Pattern Interrupt**
Subject line: (3 options if email)
Message body: (3–5 sentences maximum; deliberately short to stand out; conversational question-based CTA)

---

**FOLLOW-UP SEQUENCE (for use after no reply to Template 1, 2, 3, 4, or 5)**

Follow-Up 1 — Day 3 after initial send:
(Add value — share a tip, resource, or observation; do not re-pitch the same message)

Follow-Up 2 — Day 7 after initial send:
(Slight reframe of the offer from a different angle; gentle urgency if applicable)

Follow-Up 3 — Day 14 after initial send:
(The "break-up" message — short, gracious, leaves the door open; creates urgency through scarcity or timing)

---

For each template, add a line labeled "Best for:" that notes which scenario or ICP sub-segment this template works best for.

Keep all messages at [TONE]. Do not use jargon. Do not use the word "synergy", "leverage", "circle back", "touch base", or "paradigm".
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 5 templates are present with subject line options (3 per template if email).
2. All 3 follow-up messages are present with their send-day timing labeled.
3. Each template opens differently — no two should start with the same type of sentence.
4. CTA in every message is singular and clear — no two competing asks.
5. No banned words appear: synergy, leverage, circle back, touch base, paradigm — do a quick word search.

---

### Step 4 — Delivery Format

- **File format**: Google Doc with clear section breaks
- **Naming convention**: `NEXUS_OutreachKit_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your Cold Outreach Kit is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- If a specific template misses the tone: paste only that template back with "Rewrite this template to sound [ADJECTIVE]. Keep the same angle and CTA. Do not change the word count target."
- If subject lines are too salesy: ask for 5 more subject line options per template by running a quick follow-up prompt.
- If the CTA needs changing: find-and-replace across all templates — do not re-run the full prompt.

---

---

## Package 03 — AI FAQ + Objection Handler

**Price**: $147 | **Deliverable**: 15 FAQs + objection responses | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Their core product or service (must be specific)
- The sales stage where objections occur (ad comment, sales call, proposal stage, checkout)
- Common objections they already hear (invaluable — use verbatim if provided)
- Target audience (to calibrate the vocabulary and sophistication of responses)
- Where this content will live (FAQ page, sales page, chatbot script, sales team script)

Red flags requiring clarification before starting:
- "Just make up questions" — push for actual customer questions or sales call objections
- Very niche product with regulatory constraints — flag any claims that need legal review before publishing
- No clarity on where it will be used — the format differs significantly between a webpage FAQ and a sales call script

---

### Step 2 — Master Prompt

```
You are a conversion copywriter and sales consultant who specializes in objection handling and buyer psychology. You understand that FAQs are not just informational — they are a sales tool that reduces friction and builds trust.

Your task is to write a complete FAQ + Objection Handler document for [BUSINESS NAME], a [INDUSTRY] business offering [PRODUCT/SERVICE] to [TARGET AUDIENCE].

Context:
- Sales stage where objections occur: [SALES STAGE]
- Common objections already heard (use these verbatim): [LIST ANY KNOWN OBJECTIONS]
- Desired tone: [TONE]
- Where this will be used: [USE CASE — e.g., "website FAQ section and sales call reference"]
- Unique value proposition: [UNIQUE VALUE PROP]
- Price point (for context): [PRICE if shared]

---

PART 1: 15 Frequently Asked Questions

For each FAQ, write:
- **Q**: (the question, written in the customer's own voice — natural, not formal)
- **A**: (answer in 50–100 words; be specific and honest; end each answer with a confidence-building statement or micro-CTA where appropriate)

Distribute the 15 questions across these categories:
- 3 questions about HOW IT WORKS (process, timeline, what to expect)
- 3 questions about RESULTS AND PROOF (what outcomes, evidence, guarantees)
- 3 questions about PRICE AND VALUE (is it worth it, what's included, payment)
- 3 questions about FIT (is this for me, do I qualify, what if my situation is different)
- 3 questions about RISK (what if it doesn't work, what's the refund policy, what are my obligations)

---

PART 2: Objection Handler Script (7 Objections)

For each objection, write:
- **OBJECTION**: (the exact words or paraphrase a prospect uses)
- **WHAT'S REALLY BEHIND THIS OBJECTION**: (1 sentence identifying the real fear or unmet need)
- **RESPONSE**: (3–5 sentences; acknowledge, reframe, provide evidence or logic, soft close)
- **FOLLOW-UP QUESTION TO ASK**: (one question that moves the conversation forward)

Include these objection types:
1. "It's too expensive / I can't afford it right now"
2. "I need to think about it"
3. "I need to talk to my [partner/boss/team] first"
4. "I've tried something like this before and it didn't work"
5. "I don't have time for this right now"
6. "I'm not sure it will work for my specific situation"
7. [Use the most common real objection from intake if provided, or create one specific to the offer]

Keep all language at [TONE]. Responses must feel human and empathetic, not scripted or defensive.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 15 FAQs are present and distributed across the 5 categories (3 each — count them).
2. Questions are written in natural customer voice, not as formal corporate questions.
3. All 7 objection handler entries have all 4 components (Objection, What's Behind It, Response, Follow-Up Question).
4. None of the answers make unverifiable claims (check for "guaranteed", "always", "100%" unless the client confirmed a real guarantee).
5. Tone is consistent throughout — read the first FAQ answer and the last objection response back-to-back to check for drift.

---

### Step 4 — Delivery Format

- **File format**: Google Doc with two clearly labeled parts
- **Naming convention**: `NEXUS_FAQObjectionHandler_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your FAQ + Objection Handler is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- If they want to add real objections they forgot to mention in intake: run a focused prompt for 1–3 additional objection handlers only.
- If FAQ answers feel too long or too short: use a follow-up prompt — paste the specific answers and say "Rewrite these to be [50 words / 80 words]. Keep all factual content. Do not change the question."
- If the tone is off in Part 2: objection handlers in particular can over-shoot the empathy. Ask which specific response felt wrong, then adjust only that one.

---

---

## Package 04 — AI Email Sequence Builder

**Price**: $197 | **Deliverable**: 5–7 email sequence | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Sequence type (welcome, nurture, sales, post-purchase, re-engagement, abandoned cart)
- Number of emails requested (5 or 7 — confirm at intake)
- The triggering event (what causes someone to enter this sequence)
- The end goal of the sequence (purchase, booking, upgrade, retention)
- Email platform (some have character limits for subject lines or preheader text)
- Their existing brand voice or sample emails if available

Red flags requiring clarification before starting:
- No clear end goal — "just nurture them" is not enough; push for a specific desired action
- Mixed sequence types in one request (a welcome sequence and a sales sequence are different jobs — do not conflate)
- No information on the audience's awareness level (cold, warm, or existing customers changes everything)

---

### Step 2 — Master Prompt

```
You are an email marketing strategist and direct response copywriter who specializes in behavioral email sequences that convert subscribers into customers without burning the list.

Your task is to write a complete [NUMBER]-email [SEQUENCE TYPE] sequence for [BUSINESS NAME].

Context:
- Business: [BUSINESS NAME], a [INDUSTRY] company
- Product/service: [PRODUCT/SERVICE]
- Target audience: [TARGET AUDIENCE]
- Audience awareness level: [COLD / WARM / EXISTING CUSTOMER]
- Triggering event (what starts this sequence): [TRIGGER — e.g., "someone signs up for the free checklist lead magnet"]
- End goal of sequence: [GOAL — e.g., "book a discovery call" or "purchase the $197 course"]
- Brand tone: [TONE]
- Email platform: [PLATFORM — e.g., "Klaviyo" / "ConvertKit" / "generic"]

For each email, write:

---
**EMAIL [#]: [STRATEGIC LABEL — e.g., "The Welcome", "The Problem", "The Proof"]**
- **Send timing**: (e.g., Immediately / Day 1 / Day 3 / Day 5)
- **Subject line**: (3 options — A/B/C test variants with different angles)
- **Preview text / Preheader**: (1 option, 40–90 characters)
- **Email body**: (complete copy, 200–400 words unless noted; include [FIRST NAME] merge tag at appropriate points; natural paragraph breaks; no bullet-point-heavy walls of text)
- **Primary CTA**: (the exact button or link text, plus a brief instruction on where it should link)
- **Strategic purpose**: (1 sentence — what this email accomplishes in the sequence arc)

---

Sequence arc to follow for [SEQUENCE TYPE]:

If WELCOME sequence: Email 1 = Welcome + what to expect. Email 2 = Your story / credibility. Email 3 = Biggest insight or teaching. Email 4 = Social proof. Email 5 = Soft sell. [Email 6 = Address top objection. Email 7 = Hard sell with deadline if applicable.]

If SALES sequence: Email 1 = Problem agitation. Email 2 = Solution introduction. Email 3 = Proof and case study. Email 4 = Objection handling. Email 5 = Urgency and close. [Email 6 = FAQ / "Still on the fence?" Email 7 = Final call + deadline.]

If NURTURE sequence: Email 1 = High-value insight. Email 2 = Story + lesson. Email 3 = Tactical tip. Email 4 = Case study or result. Email 5 = Soft introduction of offer. [Email 6 = Resource or tool. Email 7 = Check-in + invite to take next step.]

If POST-PURCHASE sequence: Email 1 = Confirmation + what happens next. Email 2 = Quick win or first step. Email 3 = Deeper value tip. Email 4 = Community or support resources. Email 5 = Request for review or testimonial. [Email 6 = Upsell or cross-sell. Email 7 = Re-engagement check-in.]

Use the appropriate arc for [SEQUENCE TYPE]. Maintain consistent tone and voice throughout. Do not truncate any email. Write all [NUMBER] emails in full.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All emails (5 or 7) are present and fully written — no placeholder or "Email 6 continues here" truncations.
2. Each email has: send timing, 3 subject line options, preheader text, full body copy, and CTA.
3. No two emails open with the same sentence structure or the same type of hook.
4. The sequence arc is logical — each email moves the reader forward; confirm the strategic purpose labels make a coherent story.
5. CTA consistency — the primary action requested in each email aligns with the sequence goal (don't ask for a purchase in Email 2 of a welcome sequence).

---

### Step 4 — Delivery Format

- **File format**: Google Doc with one email per page break for easy copying into the client's email platform
- **Naming convention**: `NEXUS_EmailSequence_[BUSINESSNAME]_[SEQUENCETYPE]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your [SEQUENCE TYPE] Email Sequence is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- If a specific email's tone is off: paste that email back with the instruction "Rewrite email [#] to feel [ADJECTIVE]. Keep the strategic purpose, subject lines, and CTA. Only change the body copy."
- If they want to add or remove an email from the sequence: treat that as scope — adding an 8th email is a paid add-on. Removing one is fine, no prompt needed.
- If subject lines are weak: run a dedicated subject line prompt — "Write 10 subject line options for an email with this body: [paste body]. Tone: [TONE]. Goal: [GOAL]. Avoid clickbait."

---

---

## Package 05 — AI Content Calendar (30 Days)

**Price**: $197 | **Deliverable**: 30-day social media content calendar | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Platform(s) (LinkedIn, Instagram, Twitter/X, Facebook, TikTok — each has different content formats)
- Posting frequency (daily, 5x/week, 3x/week — this determines how many posts to plan)
- Content pillars or topic categories (ask for 3–5 pillars if not provided)
- Start date for the calendar
- Any campaigns, launches, or events in the 30-day window
- Repurposing needs (do they want the same post adapted for multiple platforms)

Red flags requiring clarification before starting:
- More than 2 platforms without specifying if they want platform-specific copy — clarify now
- No posting frequency given — default to 5x/week and confirm
- Upcoming launch or event not mentioned but discovered later — always ask "any launches or promotions in the next 30 days?"

---

### Step 2 — Master Prompt

```
You are a social media strategist and content creator who builds 30-day content calendars that grow engaged audiences and drive business outcomes.

Your task is to create a complete 30-day social content calendar for [BUSINESS NAME], a [INDUSTRY] business targeting [TARGET AUDIENCE].

Details:
- Platform(s): [PLATFORMS]
- Posting frequency: [FREQUENCY — e.g., "5x per week, Monday through Friday"]
- Content pillars: [PILLARS — e.g., "Thought leadership, Client results, Behind the scenes, Educational tips, Personal story"]
- Brand tone: [TONE]
- Core offer: [PRODUCT/SERVICE]
- Start date: [START DATE]
- Any events, campaigns, or launches to include: [EVENTS OR "None"]

Output the calendar in this format for each post:

---
**[DAY #] — [DATE] — [DAY OF WEEK]**
- **Pillar**: [Which content pillar this falls under]
- **Format**: [Post type — e.g., Text post, Carousel, Short video script, Poll, Quote graphic, Story]
- **Hook / Opening Line**: (the first sentence or line — must be strong enough to stop the scroll)
- **Post Body**: (full post copy, written to publish as-is; include line breaks for readability; [PLATFORM]-appropriate length)
- **CTA**: (clear, specific; not just "Follow for more")
- **Hashtags**: (5–10 relevant hashtags if applicable to platform)
- **Visual Direction**: (1 sentence describing what the image, graphic, or video should show)

---

Calendar structure guidance:
- Week 1: Establish value and credibility
- Week 2: Educate and build trust
- Week 3: Social proof and community
- Week 4: Offer awareness and conversion nudge

Distribute pillars evenly across the 30 posts. Do not cluster all sales-oriented content in one week. Include at least:
- 6 posts that are purely educational with no sales angle
- 4 posts that reference a client result, case study, or testimonial
- 3 posts that are conversational (ask a question, run a poll, invite replies)
- 2 posts that show behind-the-scenes or the human side of [BUSINESS NAME]

Write all [NUMBER OF POSTS] posts in full. Do not use placeholder text like "[write full post here]". Each post must be complete and ready to publish after light editing.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. The correct number of posts is present (e.g., 5x/week x 4 weeks = 20 posts; if daily = 30).
2. No two consecutive posts share the same pillar — variety prevents the feed from feeling repetitive.
3. Every post has a hook — read the first line of each post and ask: would this stop a scroll?
4. CTAs vary — "Save this post", "Comment below", "DM me", "Click the link in bio" should all appear across the calendar.
5. Any client-specified events or launches appear on the correct dates.

---

### Step 4 — Delivery Format

- **File format**: Google Doc OR Google Sheets (Sheets preferred — one row per post, columns for each field)
- **Naming convention**: `NEXUS_ContentCalendar30_[BUSINESSNAME]_[STARTDATE]_[YYYYMMDD].docx` or `.xlsx`
- **How to share**: Google Drive link
- **Delivery email subject**: `Your 30-Day Content Calendar is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- If they want to swap specific posts: replace only the requested days without re-running the full calendar.
- If a pillar is over- or under-represented: use a targeted prompt to generate 3–5 replacement posts for that pillar only.
- If tone is off across the board: regenerate only Week 1 with corrected tone guidance, use it as the reference, then adjust remaining weeks post by post.

---

---

## Package 06 — AI Customer Onboarding Pack

**Price**: $247 | **Deliverable**: Welcome email + questionnaire + overview doc | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- What the client offers (product or service, delivery model)
- The onboarding stage this covers (immediate post-purchase? Post-kickoff call? Post-contract signing?)
- What information they need from new customers (for questionnaire)
- What the new customer needs to know to get started (for overview doc)
- Any tools, portals, or platforms the client uses (links to include)
- Brand tone

Red flags requiring clarification before starting:
- Service-based businesses: need to know if the onboarding is for 1:1 service, group program, or software
- "Make it look professional" without tone guidance — ask for 2–3 brands they admire
- No clarity on what the questionnaire is for — push for a list of actual questions they need answered before they can start the work

---

### Step 2 — Master Prompt

```
You are a customer success strategist and copywriter who specializes in onboarding experiences that reduce churn, set clear expectations, and make new clients feel confident in their decision to work with you.

Your task is to create a complete customer onboarding pack for [BUSINESS NAME], a [INDUSTRY] business offering [PRODUCT/SERVICE].

Context:
- New client description: [TARGET AUDIENCE]
- Onboarding trigger (when this pack is sent): [TRIGGER — e.g., "immediately after purchase", "after contract is signed"]
- Brand tone: [TONE]
- Tools or platforms the client uses: [TOOLS — e.g., "Notion for project management, Loom for video updates, Slack for communication"]
- Portal or dashboard link: [URL or "N/A"]

---

DELIVERABLE 1: WELCOME EMAIL

Write a warm, confident welcome email with:
- Subject line: (3 options)
- Preview text: (1 option, under 90 characters)
- Body copy: (300–400 words)
  - Open with congratulation + excitement (genuine, not over the top)
  - Confirm what they just purchased / signed up for
  - Set clear expectations for what happens next (numbered steps if helpful)
  - Introduce the questionnaire or next action required from them
  - Provide support contact and response time commitment
  - Close with a statement that reinforces their decision was the right one
- Signature block placeholder: [NAME], [TITLE], [BUSINESS NAME]

---

DELIVERABLE 2: CLIENT ONBOARDING QUESTIONNAIRE

Write a professional onboarding questionnaire with 12–15 questions that gathers everything [BUSINESS NAME] needs to begin delivering [PRODUCT/SERVICE].

Format each question as:
**Q[#]: [Question text]**
Type: [Short answer / Long answer / Multiple choice / Scale 1–10 / Yes/No]
Why we ask: (one sentence explaining the purpose — helps clients answer more thoughtfully)

Include questions across these categories:
- Background and current situation (3–4 questions)
- Goals and desired outcomes (2–3 questions)
- Existing resources, tools, or prior work (2–3 questions)
- Working preferences and communication style (2 questions)
- Timeline and constraints (1–2 questions)
- Anything else they want us to know (1 open-ended question)

---

DELIVERABLE 3: CLIENT OVERVIEW DOCUMENT

Write a professional "Welcome & How We Work" document (400–500 words) that covers:
1. Who [BUSINESS NAME] is and the philosophy behind the work
2. What the client can expect during the engagement (process overview, milestones)
3. How to communicate (channels, response times, meeting cadence)
4. What we need from the client to do our best work
5. How to escalate issues or share feedback
6. A "what success looks like" statement for this engagement

Write this in [TONE]. Use headers for each section. Keep it warm but professional.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 3 deliverables are present: welcome email (with 3 subject line options), questionnaire (12–15 questions), and overview doc.
2. Welcome email sets clear next steps — a new client should know exactly what to do after reading it.
3. Questionnaire questions have the "Why we ask" field completed for each — this is important for client completion rates.
4. Overview doc has all 6 sections with headers — none missing.
5. Brand tone is consistent across all 3 documents — they should feel like they came from the same person.

---

### Step 4 — Delivery Format

- **File format**: Google Doc (all 3 in one doc with clear dividers, OR 3 separate docs in a shared folder)
- **Naming convention**: `NEXUS_OnboardingPack_[BUSINESSNAME]_[YYYYMMDD]/`
  - `01_WelcomeEmail.docx`
  - `02_OnboardingQuestionnaire.docx`
  - `03_ClientOverviewDoc.docx`
- **How to share**: Shared Google Drive folder link
- **Delivery email subject**: `Your Customer Onboarding Pack is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Welcome email revisions: usually tone-related. Reprompt only the email body with corrected tone instructions.
- Questionnaire additions: if they want extra questions, generate those individually and indicate where to insert them.
- Overview doc: if it feels too long, ask which sections to condense and trim to 300 words.

---

---

## Package 07 — AI Product Description Pack

**Price**: $197 | **Deliverable**: 10 product descriptions | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- List of 10 products with names and basic specs (must have all 10 before starting)
- Platform where descriptions will live (Shopify, Amazon, Etsy, website, catalog — format differs)
- Target buyer and what they care about most (features vs. feelings vs. price)
- Desired length per description (short: 50–100 words / medium: 150–200 words / long: 300+ words)
- Brand tone (luxury, playful, technical, minimalist, etc.)
- Any competitor descriptions they want to avoid sounding like

Red flags requiring clarification before starting:
- Fewer than 10 products listed — do not start; wait for the complete list
- Products with technical specs that need accuracy — ask client to provide specs in writing; do not invent specs
- "Just make them sound better" — ask what "better" means (more persuasive? Shorter? Different tone?)

---

### Step 2 — Master Prompt

```
You are a product copywriter who specializes in e-commerce and DTC brand storytelling. You write product descriptions that sell by connecting features to the feelings and outcomes buyers actually want.

Your task is to write 10 product descriptions for [BUSINESS NAME], a [INDUSTRY] brand.

Context:
- Target buyer: [TARGET AUDIENCE]
- Platform: [PLATFORM — e.g., "Shopify product pages"]
- Desired length: [LENGTH — e.g., "150–200 words per description"]
- Brand tone: [TONE — e.g., "premium but approachable, never clinical"]
- What buyers care most about: [PRIORITIES — e.g., "durability, eco-friendly materials, aesthetics"]

Product list:
[PASTE PRODUCT LIST HERE — include: product name, key specs, materials, any unique features, price if relevant]

For each product, write:

---
**[PRODUCT NAME]**
- **Headline**: (one punchy line, 6–12 words — leads with the benefit, not the feature)
- **Opening paragraph**: (2–3 sentences that create desire — describe the feeling or outcome before the product)
- **Feature-Benefit block**: (3–5 bullet points, each formatted as: [Feature] — [What it means for the buyer])
- **Closing sentence**: (a confident, forward-looking line that nudges the buyer toward action)
- **Meta description** (if for a website): (1 sentence, 120–155 characters, includes primary keyword)

---

Rules:
- Never open with the product name
- Every bullet point must translate a feature into a buyer benefit — no raw specs without context
- Each description must feel unique — do not use a template sentence that appears in multiple descriptions
- Maintain [TONE] throughout all 10
- Do not include pricing or shipping info (the platform handles that)

Write all 10 in full without truncating.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 10 product descriptions are present and complete.
2. No description opens with the product name (it is a hard rule — check all 10 openings).
3. Every bullet point has both a feature AND a stated benefit — scan for any bullet that is just a spec.
4. The tone is consistent across all 10 — premium should not slip into clinical on description 8.
5. Headlines are varied — no two headlines use the same structure or opening word.

---

### Step 4 — Delivery Format

- **File format**: Google Doc with each product as a separate section with a divider
- **Naming convention**: `NEXUS_ProductDescriptions_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your Product Description Pack is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- If specific descriptions need adjustment: paste only those back with the note "Rewrite [PRODUCT NAME] description. Keep the same format. Change: [specific issue]."
- If all descriptions are too long: run a follow-up prompt "Condense each of these descriptions to under [WORD COUNT]. Keep all key benefits. Remove any filler language."
- If a client provides corrected specs: update only the feature-benefit bullets for that product — do not re-run the full prompt.

---

---

## Package 08 — AI YouTube Script Pack

**Price**: $247 | **Deliverable**: 3 video scripts | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- 3 video topics (get confirmation on all 3 before starting)
- Target video length (5 min = ~750 words of spoken script; 10 min = ~1,500 words)
- Channel style (educational, entertainment, documentary, talking head, tutorial)
- The channel's audience and their awareness level
- Whether they use B-roll (visual cues should be included in the script if yes)
- Call to action for each video (subscribe, link in description, comment, etc.)

Red flags requiring clarification before starting:
- Topics that are too broad ("talk about marketing") — push for a specific angle or thesis for each video
- Client who wants "viral content" without specifics — reframe to "high-retention educational content" which is achievable
- No knowledge of target length — default to 8-minute script and confirm

---

### Step 2 — Master Prompt

```
You are a YouTube scriptwriter who specializes in high-retention educational and personality-driven content. You understand pacing, the YouTube algorithm, and how to hook viewers in the first 30 seconds.

Your task is to write 3 complete YouTube scripts for [CHANNEL NAME / BUSINESS NAME].

Channel context:
- Channel topic area: [INDUSTRY / NICHE]
- Target audience: [TARGET AUDIENCE]
- Channel style: [STYLE — e.g., "talking head, educational, slightly opinionated"]
- Presenter's voice / tone: [TONE — e.g., "direct, data-driven, conversational — like a smart friend, not a professor"]
- Includes B-roll: [YES / NO]
- CTA at end of each video: [CTA — e.g., "subscribe and download the free guide linked below"]

VIDEO TOPICS:
1. [TOPIC 1 — include a specific angle or thesis if provided]
2. [TOPIC 2]
3. [TOPIC 3]

For each script, use this structure:

---
**SCRIPT [#]: [VIDEO TITLE — SEO-optimized, includes primary keyword, 50–60 characters]**
**Target length**: [LENGTH]
**Thumbnail concept**: (describe the visual — text overlay + visual element that creates curiosity)

[HOOK — 0:00 to 0:30]
(This is the most important 30 seconds. Open with a bold claim, a relatable problem, a surprising stat, or a question. Do NOT start with "Hey guys welcome back to my channel." Tell the viewer exactly what they will get from watching. Create a pattern interrupt.)

[INTRO — 0:30 to 1:00]
(Brief context-setting. Who is this for. Why should they keep watching. Tease 2–3 things they will learn. Fast. No fluff.)

[MAIN CONTENT — 1:00 to end minus 1:30]
(Structure as clearly labeled sections or steps. Each section should have:)
- Section header (e.g., "Step 1:", "Mistake #1:", "Here's the thing about X:")
- Main teaching point (2–3 paragraphs of spoken dialogue)
- [B-ROLL CUE: describe visual] (include if B-roll = YES)
- A transition line that connects to the next section

[OUTRO — last 90 seconds]
- Summary of key points (3 bullet-style spoken lines)
- Callback to the hook (answer the question or resolve the tension from the opening)
- CTA (spoken naturally, not read robotically): [CTA]
- Suggested next video teaser: "If you want to go deeper on [RELATED TOPIC], I made a video on that — I'll link it in the description."

---

Write the full script in spoken dialogue format. Use natural sentence length — short punchy sentences for key points, longer sentences for explanation. Include natural pauses marked as [PAUSE] where the presenter should let a point land. Mark [EMPHASIS] on key phrases that should be stressed.

Write all 3 scripts in full.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 3 scripts are present with all structural sections: hook, intro, main content, outro.
2. No script opens with a greeting ("Hey guys" / "Welcome back") — confirm all 3 hooks are genuine pattern interrupts.
3. B-roll cues are included on each script if the client uses B-roll.
4. Each script has a thumbnail concept written.
5. Read the first 30 seconds of each script aloud — it must sound natural when spoken, not like written prose.

---

### Step 4 — Delivery Format

- **File format**: Google Doc — one script per page with scene labels in bold
- **Naming convention**: `NEXUS_YouTubeScripts_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your YouTube Script Pack is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Hook rewrites are the most common request — reprompt: "Rewrite only the hook for Script [#]. The topic is [TOPIC]. Current hook is: [PASTE]. Make it more [URGENT / CURIOSITY-DRIVEN / CONVERSATIONAL]. Keep under 150 words."
- If the main content needs more depth: ask which section, then expand only that section with a targeted prompt.
- If the length is off: for shorter scripts, use a compression prompt; for longer, expand the main content sections only.

---

---

## Package 09 — AI Job Description Kit

**Price**: $197 | **Deliverable**: 3 job descriptions | **Turnaround**: 24 hours

---

### Step 1 — Review Intake

Check the intake form for:
- The 3 roles they need JDs for (titles, seniority level, full-time/part-time/contract)
- Company overview (size, culture, stage — startup vs. established)
- Role responsibilities (must have at least 5 real responsibilities per role; do not invent these)
- Required vs. preferred qualifications
- Compensation range (if they are willing to share — visible pay improves application quality)
- Where the JD will be posted (LinkedIn, Indeed, company website — length conventions differ)

Red flags requiring clarification before starting:
- No responsibility list provided — do not fabricate responsibilities; send a clarification request
- "Just make it sound exciting" — push for actual culture attributes and real benefits
- Exclusionary language in their notes ("must be energetic and young") — flag and suggest compliant alternatives

---

### Step 2 — Master Prompt

```
You are an HR consultant and talent acquisition copywriter who writes job descriptions that attract qualified candidates and reflect company culture authentically. You understand what job seekers scan for and what causes them to apply or scroll past.

Your task is to write 3 complete job descriptions for [BUSINESS NAME], a [INDUSTRY] company.

Company context:
- Company size: [SIZE]
- Company stage / culture: [CULTURE — e.g., "Series A startup, fast-moving, remote-first, mission-driven"]
- Tone for all JDs: [TONE — e.g., "professional but human, not stiff corporate language"]
- Post location: [WHERE POSTING — e.g., "LinkedIn and company careers page"]

ROLES TO WRITE:
1. [ROLE 1 TITLE] — [FULL-TIME / PART-TIME / CONTRACT] — [LOCATION / REMOTE]
   Responsibilities: [LIST]
   Required qualifications: [LIST]
   Preferred qualifications: [LIST]
   Compensation: [RANGE or "Competitive, DOE"]

2. [ROLE 2 TITLE] — [EMPLOYMENT TYPE] — [LOCATION]
   Responsibilities: [LIST]
   Required qualifications: [LIST]
   Preferred qualifications: [LIST]
   Compensation: [RANGE or "Competitive, DOE"]

3. [ROLE 3 TITLE] — [EMPLOYMENT TYPE] — [LOCATION]
   Responsibilities: [LIST]
   Required qualifications: [LIST]
   Preferred qualifications: [LIST]
   Compensation: [RANGE or "Competitive, DOE"]

For each job description, write:

---
**[ROLE TITLE]**
**[Employment Type] | [Location] | [Department if applicable]**

**About [BUSINESS NAME]** (60–80 words — write once and note it can be reused across all 3 JDs with minor adjustments)
[Company mission, what they do, who they serve, culture highlights]

**About the Role** (80–120 words)
[What this person will own, why this role matters to the business, who they will work with]

**What You'll Do** (6–9 bullet points)
[Responsibilities — written as outcomes, not just tasks; use action verbs; ordered from most to least important]

**What We're Looking For**
Required:
[4–6 bullet points — non-negotiable qualifications]
Preferred (Nice to Have):
[3–4 bullet points — additional qualifications that strengthen the application]

**What We Offer** (4–6 bullet points)
[Compensation, benefits, PTO, remote/flexible work, growth opportunities, culture perks]

**How to Apply** (2–3 sentences)
[Application instructions, what to include, where to send or link]

---

Rules:
- Use inclusive language throughout — no age, gender, or nationality bias
- Every "What You'll Do" bullet starts with an action verb
- Avoid jargon specific to one company's internal processes
- Each JD should feel like a distinct role with distinct voice — do not copy-paste the structure word for word

Write all 3 job descriptions in full.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 3 JDs are present with all 6 sections each.
2. Every "What You'll Do" bullet point starts with an action verb — check all bullets in all 3 JDs.
3. No inclusive language violations — no age indicators, no gendered language, no physical requirement claims that are not job-relevant.
4. "What We Offer" section actually reflects what the client told you they offer — no invented benefits.
5. "How to Apply" section has a clear next step — not just "send your resume."

---

### Step 4 — Delivery Format

- **File format**: Google Doc (one JD per page)
- **Naming convention**: `NEXUS_JobDescriptions_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your Job Description Kit is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Qualification changes: find-and-replace in the document — no reprompting needed for small edits.
- Full tone overhaul on one JD: reprompt that JD only with corrected tone guidance.
- Inclusive language flags: edit manually — do not reprompt for a single word or phrase change.

---

---

## Package 10 — AI SOP Builder

**Price**: $197 | **Deliverable**: 3 SOPs | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- The 3 processes to document (must be specific — "onboarding a new client" not "operations")
- Who will use these SOPs (employees, contractors, virtual assistants — affects terminology and assumed knowledge level)
- The tools and software involved in each process (step-by-step SOPs must reference actual tools)
- Current documented version or brain dump (if they have notes, ask them to share)
- Format preference (numbered steps, flowchart-style, checklist, or combination)

Red flags requiring clarification before starting:
- "Document everything we do" — scope this down to exactly 3 processes
- No tool information provided — SOPs that say "open the project management software" are useless; push for specific tool names
- Complex processes that should be split (e.g., "entire sales process" is 5 SOPs, not 1 — set scope before starting)

---

### Step 2 — Master Prompt

```
You are a business operations consultant who specializes in creating Standard Operating Procedures that are clear, actionable, and actually get followed. You write SOPs that a new team member could execute on day one without asking questions.

Your task is to write 3 SOPs for [BUSINESS NAME], a [INDUSTRY] business.

Context:
- Who will use these SOPs: [USER — e.g., "virtual assistants and new contractors"]
- Assumed knowledge level: [LEVEL — e.g., "familiar with basic computer use but not with our specific tools"]
- Tools used across processes: [TOOLS — e.g., "Notion, Slack, Google Drive, Stripe, Calendly"]
- Format preference: [FORMAT — e.g., "numbered steps with decision branches where needed"]

PROCESSES TO DOCUMENT:
1. [PROCESS 1 NAME]: [Brief description of what this process covers]
   Key steps or notes from client: [ANY PROVIDED NOTES OR LEAVE BLANK]
   Tools involved: [TOOLS FOR THIS PROCESS]

2. [PROCESS 2 NAME]: [Brief description]
   Key steps or notes: [NOTES]
   Tools involved: [TOOLS]

3. [PROCESS 3 NAME]: [Brief description]
   Key steps or notes: [NOTES]
   Tools involved: [TOOLS]

For each SOP, write the following sections:

---
**SOP: [PROCESS NAME]**
**SOP ID**: [e.g., OPS-001] (use sequential numbering)
**Version**: 1.0
**Last Updated**: [DATE]
**Owner**: [ROLE responsible for this process]
**Applies To**: [WHO uses this SOP]

---

**PURPOSE**
(2–3 sentences: Why does this process exist? What problem does it solve or what outcome does it ensure?)

**SCOPE**
(1–2 sentences: Where does this process start and end? What is in and out of scope?)

**TOOLS REQUIRED**
(Bulleted list of all tools, software, and access credentials needed before starting)

**BEFORE YOU BEGIN — PREREQUISITES**
(Checklist of conditions that must be true before starting this process — e.g., client has signed contract, payment received, etc.)

**STEP-BY-STEP PROCESS**
(Number each step. For steps that involve a decision or condition, use:
  - IF [CONDITION] → THEN [ACTION]
  - IF NOT → THEN [ALTERNATIVE ACTION]
Each step should be one action. No compound steps. Use tool names specifically — e.g., "Open [TOOL], navigate to [SECTION], click [BUTTON]")

**QUALITY CHECKS**
(3–5 checkpoints built into the process to catch errors before they become problems)

**WHAT TO DO IF SOMETHING GOES WRONG**
(3–4 common failure points with the resolution step for each)

**COMPLETION CRITERIA**
(How does the person executing this SOP know it is complete? What is the final deliverable or state?)

**RELATED SOPS**
(List any other SOPs that link to or follow this one)

---

Write all 3 SOPs in full. Do not use placeholder steps like "[Continue with remaining steps]". Every step must be written out.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 3 SOPs are present with all 9 sections each.
2. No step is a compound step — each step number should contain exactly one action.
3. Tool names are specific (not "the CRM" but "HubSpot") — verify tool names match what client provided.
4. Decision branches (IF/THEN) are present in at least one place per SOP where a decision is clearly required.
5. "What to Do If Something Goes Wrong" section has at least 3 real failure scenarios with resolutions.

---

### Step 4 — Delivery Format

- **File format**: Google Doc (one SOP per page; each SOP should be ready to copy into Notion, Confluence, or their system)
- **Naming convention**: `NEXUS_SOPs_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your SOP Pack is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- If steps are missing a decision branch: insert the IF/THEN logic at the correct step number manually or via targeted reprompt.
- If tool names are wrong: find-and-replace in the document — no reprompting needed.
- If client wants to add a 4th SOP: this is out of scope. Quote an add-on fee or upsell to the next package tier.

---

---

## Package 11 — AI Proposal Template Builder

**Price**: $247 | **Deliverable**: Reusable proposal template | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Their service offerings (the proposal must be built around what they actually sell)
- Their typical deal size and client type (affects formality level and complexity of the template)
- Their current proposal process (do they currently send Word docs, PDFs, PandaDoc, Proposify, etc.)
- Sections they want included (or use the standard list below)
- Brand colors and logo (for visual formatting notes, not actual design work)
- Anything their current proposals are missing that costs them deals

Red flags requiring clarification before starting:
- "Make it look designed" — this is a copy/structure deliverable, not a design deliverable; set expectation clearly
- Proposals for very niche high-ticket industries (law, finance, construction) — confirm no regulatory requirements around proposal format
- Multiple very different service types — one template may not serve all; flag this and scope to their primary service

---

### Step 2 — Master Prompt

```
You are a business development consultant and proposal copywriter who helps service businesses close more deals with professional, persuasive proposal documents. You understand that a great proposal is a sales document first and a scope document second.

Your task is to write a complete, reusable proposal template for [BUSINESS NAME], a [INDUSTRY] service business.

Context:
- Services offered: [SERVICES]
- Typical client type: [CLIENT TYPE — e.g., "mid-sized e-commerce brands, $5M–$50M revenue"]
- Typical deal size: [DEAL SIZE — e.g., "$5,000–$25,000 engagements"]
- Document format they will use: [FORMAT — e.g., "Google Docs, exported to PDF"]
- Brand tone: [TONE]
- Biggest gaps in their current proposals: [GAPS — e.g., "no social proof, no clear ROI framing"]

Write the complete proposal template using [VARIABLE] placeholders wherever client-specific information will be filled in for each prospect. Every section must be written in full — no "add your content here" placeholders.

---

**PROPOSAL TEMPLATE STRUCTURE:**

**COVER PAGE BLOCK**
[CLIENT COMPANY NAME]
Prepared for: [CLIENT CONTACT NAME], [TITLE]
Prepared by: [BUSINESS NAME]
Date: [DATE]
Proposal Reference: [PROPOSAL ID]

---

**SECTION 1: EXECUTIVE SUMMARY (150–200 words)**
Write this as a narrative overview of what the proposal covers. It should:
- Reference the client's situation and goals
- State what [BUSINESS NAME] is proposing to do
- Name the primary business outcome the client will achieve
- Include a one-line statement of why [BUSINESS NAME] is the right partner for this
Use [CLIENT COMPANY NAME], [CLIENT GOAL], and [PRIMARY OUTCOME] as placeholders.

**SECTION 2: YOUR SITUATION (100–150 words)**
This section demonstrates that [BUSINESS NAME] listened. Write it as a reflection of the client's current situation, challenges, and goals. Use [CLIENT SITUATION SUMMARY] and [CLIENT CHALLENGES] as placeholders. Instruct the operator (in a comment or aside) to personalize this section before every send.

**SECTION 3: OUR PROPOSED SOLUTION (200–250 words)**
Describe the engagement at a high level. What is being proposed? Why this approach? What makes this the right fit for [CLIENT COMPANY NAME]'s specific situation? Write in [TONE]. Include [SERVICE DESCRIPTION], [METHODOLOGY/APPROACH], and [SPECIFIC OUTCOMES] as placeholders.

**SECTION 4: SCOPE OF WORK**
List the deliverables and workstreams in a structured format:
Phase 1 — [PHASE NAME]: [What is included]
Phase 2 — [PHASE NAME]: [What is included]
Phase 3 — [PHASE NAME]: [What is included]
(Write out the structure; use placeholder text for phase names and inclusions)
What is NOT included: (write 4–5 typical exclusions relevant to [SERVICES])

**SECTION 5: INVESTMENT + PACKAGES**
Write this section as if presenting 2–3 tiers:
- Option A: [TIER NAME] — [PRICE] — [What's included, 3–5 bullet points]
- Option B: [TIER NAME] — [PRICE] — [What's included, 3–5 bullet points]
- Option C: [TIER NAME] — [PRICE] — [What's included, 3–5 bullet points]
Payment terms section: [PAYMENT TERMS placeholder]
Write a 2-sentence framing paragraph before the tiers that positions the investment as ROI, not cost.

**SECTION 6: TIMELINE**
Write a milestone-based timeline template with [WEEK #] placeholders for each milestone. Include 5–7 milestones from kickoff to delivery.

**SECTION 7: WHY [BUSINESS NAME]**
Write a 150–200 word "why us" section that covers: experience, approach differentiators, and client results. Use [CREDENTIAL], [RESULT], and [CLIENT NAME] placeholders for proof points.

**SECTION 8: TESTIMONIALS / SOCIAL PROOF**
Write 2–3 testimonial placeholder blocks formatted as:
"[TESTIMONIAL QUOTE]" — [CLIENT NAME], [TITLE], [COMPANY]
Add a note: "Replace these with real testimonials before sending."

**SECTION 9: NEXT STEPS**
Write a clear, confident 3-step closing section:
Step 1: Review this proposal
Step 2: [SCHEDULE CALL / SIGN + RETURN / REPLY WITH QUESTIONS] — link placeholder
Step 3: We begin on [PROPOSED START DATE]
End with a 2-sentence closing statement that reinforces confidence in the partnership.

**SECTION 10: TERMS AND CONDITIONS**
Write a brief, plain-language T&C block (200 words) covering: agreement validity period, payment terms, revision policy, confidentiality, IP ownership, and cancellation. Mark clearly that a lawyer should review before use.

---

After the template, write a one-page PROPOSAL COMPLETION CHECKLIST with 15 checkboxes for the operator to verify before sending each proposal.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. All 10 sections are present and fully written — no section left with "add your content here."
2. Every section uses [VARIABLE] placeholders correctly — a real human could fill these in quickly before sending.
3. The investment section has the ROI framing paragraph and all 3 tier structures.
4. The T&C block includes the lawyer review disclaimer.
5. The proposal completion checklist is present at the end with 15 items.

---

### Step 4 — Delivery Format

- **File format**: Google Doc formatted cleanly (use Heading styles for sections so it looks professional)
- **Naming convention**: `NEXUS_ProposalTemplate_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your Proposal Template is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Section rewrites: reprompt only the specific section with adjusted guidance.
- Adding a new section (e.g., "Case Study" section): run a targeted prompt for that section and instruct where to insert it.
- T&C edits: do not rework T&C based on client preference alone — flag that these require legal review and make only the requested structural changes.

---

---

## Package 12 — AI Newsletter System

**Price**: $297 | **Deliverable**: Newsletter framework + 4 draft issues | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Newsletter topic / niche
- Target reader (job title, interests, pain points)
- Desired send frequency (weekly, biweekly, monthly)
- Desired newsletter length (short: 300–500 words / medium: 600–900 words / long: 1,000+ words)
- The business goal of the newsletter (list growth, authority, sales, community)
- Any newsletters they admire as style references
- Monetization intent (ads, affiliate, product promotion, none)

Red flags requiring clarification before starting:
- No clear niche — "general business newsletter" will produce weak output; push for a specific angle
- Newsletter that is purely promotional — flag that newsletters without standalone value have low open rates; recommend a value-first model
- No reader description — a newsletter for "everyone" is a newsletter for no one

---

### Step 2 — Three Sequential Prompts

**Prompt 1 — Build the Newsletter Framework**

```
You are a newsletter strategist and media consultant who helps creators and businesses build newsletters that readers actually look forward to.

Your task is to design the complete framework for a newsletter for [BUSINESS NAME / CREATOR NAME].

Context:
- Newsletter topic / niche: [NICHE]
- Target reader: [TARGET AUDIENCE]
- Send frequency: [FREQUENCY]
- Desired length per issue: [LENGTH]
- Business goal: [GOAL]
- Monetization intent: [MONETIZATION]
- Tone: [TONE]

Produce the following framework document:

---
**NEWSLETTER FRAMEWORK: [NEWSLETTER NAME — suggest 3 name options]**

1. **MISSION STATEMENT** (2 sentences: what this newsletter exists to do and for whom)

2. **READER PROMISE** (the one-sentence value proposition — what readers get every issue)

3. **CONTENT PILLARS** (4–5 recurring themes or topic categories with a 2-line description of each)

4. **ISSUE STRUCTURE** (the repeating format every issue follows):
   - Section 1: [NAME] — [PURPOSE] — [Typical length]
   - Section 2: [NAME] — [PURPOSE] — [Typical length]
   - Section 3: [NAME] — [PURPOSE] — [Typical length]
   - Section 4: [NAME] — [PURPOSE] — [Typical length]
   (Design 4–6 sections that make each issue feel familiar yet fresh)

5. **VOICE AND TONE GUIDE** (5 characteristics of this newsletter's unique voice with examples)

6. **SUBJECT LINE FORMULA** (a repeatable format or set of 3 formats for subject lines that work for this newsletter's style)

7. **GROWTH STRATEGY** (3 organic and 1 paid tactic to grow subscribers — specific and actionable)

8. **MONETIZATION ROADMAP** (if applicable — 3 monetization methods in order of when to implement them, with milestones required before each)

9. **LAUNCH TIMELINE** (a 4-week launch plan: what to do in Week 1, 2, 3, and 4)

10. **SAMPLE READER PERSONA** (name, job title, biggest struggle, what they want from this newsletter — one paragraph)

---

Write this framework in full. It should be a reference document the operator returns to regularly.
```

**Prompt 2 — Write Issues 1 and 2**

```
You are writing the first two issues of [NEWSLETTER NAME], a newsletter for [TARGET AUDIENCE] about [NICHE]. You are the writer, and the voice is [TONE].

Use this issue structure for both issues:
[PASTE ISSUE STRUCTURE FROM PROMPT 1 OUTPUT]

Issue themes:
- Issue 1 theme: [THEME — e.g., "The biggest mistake [TARGET AUDIENCE] makes in [NICHE]"]
- Issue 2 theme: [THEME — e.g., "The framework we use to [SOLVE CORE PROBLEM]"]

For each issue, write every section in full, including:
- Subject line (3 options)
- Preview text (1 option)
- Full body copy for all sections
- Any CTAs within the issue
- Closing sign-off

Issue 1 should feel like a strong introduction — establish the voice, make the reader feel understood, and deliver genuine value immediately.
Issue 2 should go deeper — assume the reader is now committed and wants substance.

Write both issues in full without truncating.
```

**Prompt 3 — Write Issues 3 and 4**

```
You are continuing the [NEWSLETTER NAME] newsletter series. Issues 1 and 2 have been written. Now write Issues 3 and 4.

Use the same issue structure:
[PASTE ISSUE STRUCTURE]

Issue themes:
- Issue 3 theme: [THEME — e.g., "A real case study or example of [RESULT IN NICHE]"]
- Issue 4 theme: [THEME — e.g., "Tools, resources, or recommendations your reader can use this week"]

Issue 3 should include social proof, a real or illustrative case study, and a soft nudge toward [BUSINESS GOAL].
Issue 4 should be a high-value resource issue — the kind readers screenshot and share. Close with a teaser for the next issue to build habit.

Write both issues in full without truncating.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. Framework has all 10 components — none missing.
2. All 4 issues are present and fully written — count the sections in each.
3. Subject lines vary across the 4 issues — no two use the same formula.
4. Issue 1 delivers standalone value even to someone who never reads Issue 2.
5. The voice is consistent across all 4 issues — read the opening paragraph of Issue 1 and Issue 4 back-to-back.

---

### Step 4 — Delivery Format

- **File format**: Two Google Docs — (1) Newsletter Framework, (2) All 4 Draft Issues
- **Naming convention**:
  - `NEXUS_NewsletterFramework_[BUSINESSNAME]_[YYYYMMDD].docx`
  - `NEXUS_NewsletterIssues1to4_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Shared Google Drive folder
- **Delivery email subject**: `Your Newsletter System is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Framework revisions (name, structure, pillars): reprompt only the specific framework component.
- Issue revisions: paste the specific issue or section with the change request. Do not re-run all 4 issues.
- If they want 2 more issues: this is an out-of-scope add-on. Quote at $50–$75 per additional issue.

---

---

## Package 13 — AI Lead Magnet Creator

**Price**: $297 | **Deliverable**: Full lead magnet written | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Lead magnet type (checklist, guide, mini-course, swipe file, template, report, quiz result page)
- Topic and target reader
- What problem the lead magnet solves
- What the upsell or next step is after they receive it (this determines the closing CTA)
- Desired length (short: 1–3 pages / medium: 5–10 pages / long: 10–20 pages)
- Brand tone

Red flags requiring clarification before starting:
- "Just make something people will want to download" — push for a specific problem and format
- Lead magnet that has nothing to do with their paid offer — flag the disconnect before building
- Very long "guide" that is essentially a full course — scope to a reasonable length or redirect to Package 14

---

### Step 2 — Three Sequential Prompts

**Prompt 1 — Plan the Lead Magnet**

```
You are a lead generation strategist who specializes in creating high-converting lead magnets that attract qualified leads and pre-sell the next step in the funnel.

Your task is to plan a lead magnet for [BUSINESS NAME] targeting [TARGET AUDIENCE].

Context:
- Lead magnet type: [TYPE]
- Topic: [TOPIC]
- Core problem it solves: [PROBLEM]
- What comes after this lead magnet (the upsell or next step): [NEXT STEP]
- Desired length: [LENGTH]
- Tone: [TONE]

Produce a complete content plan:

**LEAD MAGNET TITLE** (write 5 title options — use power words, include a specific outcome or number)

**SUBTITLE** (2 options — clarifies who it's for and what they get)

**TRANSFORMATION STATEMENT** (one sentence: "By the end of this [TYPE], you will be able to [OUTCOME].")

**TABLE OF CONTENTS** (all sections and subsections with an estimated word count per section)

**LEAD MAGNET LOGIC FLOW** (a paragraph explaining the narrative arc — why is Section 1 first? How does each section build on the last? Where is the transition to the paid offer?)

**CTA PLACEMENT PLAN** (where in the document the CTA for [NEXT STEP] will appear, and what form it will take — soft mention, dedicated section, sidebar callout, etc.)

Confirm the plan before writing begins.
```

**Prompt 2 — Write the Lead Magnet Body**

```
Using the plan below, write the complete lead magnet for [BUSINESS NAME].

[PASTE CONTENT PLAN FROM PROMPT 1]

Write every section in full. For each section:
- Open with a short framing sentence that tells the reader why this section matters
- Deliver the content clearly and actionably — no filler, no vague advice
- Close each major section with one key takeaway or action item
- Use [TONE] throughout

Format guidance:
- Use H2 for major sections, H3 for subsections
- Use bullet points or numbered lists where steps or items are listed
- Bold key terms or takeaways
- Every page of content should include at least one specific, actionable tip

Write the complete lead magnet in one output. Do not truncate. Do not use placeholder text.
```

**Prompt 3 — Write the Lead Magnet Wrapper Copy**

```
The lead magnet body is written. Now write all the surrounding copy needed to deploy it.

Lead magnet title: [TITLE]
Target audience: [TARGET AUDIENCE]
Next step / upsell: [NEXT STEP]

Write:

1. **OPT-IN PAGE COPY** (for the landing page where someone enters their email to receive the lead magnet)
   - Headline (3 options)
   - Subheadline (2 options)
   - 3–5 bullet points describing what they will learn or get
   - CTA button text (3 options)
   - Social proof line (e.g., "Join 2,000+ [TARGET AUDIENCE] who..." — use [NUMBER] placeholder)

2. **THANK YOU PAGE COPY** (the page they see immediately after opting in)
   - Headline (confirms delivery + creates anticipation)
   - Body copy (100–150 words: what to expect, where to find the lead magnet, what to do next)
   - Soft bridge to [NEXT STEP] (2–3 sentences introducing the paid offer without hard-selling)

3. **DELIVERY EMAIL** (the email that sends the lead magnet link)
   - Subject line (3 options)
   - Preview text
   - Body copy (150–200 words: warm confirmation, value reminder, delivery link placeholder, soft next step mention)

4. **COVER PAGE COPY** (the first page of the PDF or Google Doc itself)
   - Title
   - Subtitle
   - Author name / brand name
   - One-sentence reader promise

Write all 4 assets in full.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. The body of the lead magnet is complete — count the sections against the Table of Contents from Prompt 1.
2. The lead magnet delivers a standalone transformation — someone who reads it should feel they received genuine value, not just a teaser.
3. The CTA appears at the planned locations — verify it is not absent or buried.
4. All 4 wrapper copy assets are present from Prompt 3.
5. The tone is consistent between the lead magnet body and the opt-in page copy.

---

### Step 4 — Delivery Format

- **File format**: Two Google Docs:
  - (1) The lead magnet body (formatted and ready to export as PDF)
  - (2) All wrapper copy (opt-in page, thank you page, delivery email, cover copy)
- **Naming convention**:
  - `NEXUS_LeadMagnet_[BUSINESSNAME]_[TITLE]_[YYYYMMDD].docx`
  - `NEXUS_LeadMagnetWrapperCopy_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Shared Google Drive folder
- **Delivery email subject**: `Your Lead Magnet is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Body revisions: targeted reprompt for the specific section that needs adjustment.
- Opt-in page headline: run a quick "give me 10 more headline options" prompt if none of the 3 land.
- Delivery email: easiest to edit manually — do not reprompt unless the full tone direction has changed.

---

---

## Package 14 — AI Course Outline + Module Descriptions

**Price**: $297 | **Deliverable**: Full course architecture | **Turnaround**: 48 hours

---

### Step 1 — Review Intake

Check the intake form for:
- Course topic and working title
- Target student and their starting point (what they know before taking the course)
- Desired course outcome (what students can do or have after completing the course)
- Approximate course length (number of modules, hours of content if known)
- Delivery format (video, text, audio, live, self-paced)
- Platform (Teachable, Kajabi, Thinkific, Gumroad, own website)
- Existing curriculum notes or brain dump (extremely valuable if available)

Red flags requiring clarification before starting:
- No clear student transformation — "learn about marketing" is not enough; push for a specific outcome
- Unrealistic scope for the budget ("I want a 20-module MBA-level course") — set scope at 5–8 modules for this package
- Topic that requires accurate expert knowledge (medical, legal, financial) — flag that content must be reviewed by a qualified expert before publishing

---

### Step 2 — Three Sequential Prompts

**Prompt 1 — Build the Course Architecture**

```
You are an instructional designer and online course strategist who has helped creators build courses that get completed, get results, and generate strong student reviews.

Your task is to design the complete architecture for an online course for [BUSINESS NAME / CREATOR NAME].

Context:
- Course topic: [TOPIC]
- Target student: [TARGET AUDIENCE]
- Student starting point: [BASELINE KNOWLEDGE]
- Course outcome (transformation): [DESIRED OUTCOME]
- Approximate number of modules: [NUMBER — e.g., "6 modules"]
- Delivery format: [FORMAT]
- Platform: [PLATFORM]
- Tone: [TONE]
- Existing content notes: [PASTE OR "None provided"]

Produce:

**COURSE TITLE** (3 options — outcome-focused, specific, and marketable)

**COURSE SUBTITLE** (2 options — who it's for and what they achieve)

**TRANSFORMATION STATEMENT** ("By the end of this course, [TARGET STUDENT] will be able to [SPECIFIC OUTCOME].")

**COURSE PROMISE** (a 2–3 sentence marketing-facing description of what students get)

**MODULE MAP** (list all [NUMBER] modules in order with:)
- Module number and title
- Core learning objective (what students will be able to do after this module)
- Why this module is here (its role in the transformation arc)
- Estimated content length (e.g., "3 video lessons, ~20 minutes")

**STUDENT JOURNEY ARC** (a paragraph describing the emotional and knowledge progression from Module 1 to the final module — what does the student feel and know at each stage?)

**PRE-COURSE WINS** (1–2 quick wins students can achieve before Module 1 even starts — to build commitment and momentum)

**COURSE COMPLETION MECHANISM** (what keeps students moving through — assignments, community, checkpoints, live calls?)
```

**Prompt 2 — Write Module Descriptions**

```
Using the course architecture below, write the complete module descriptions for all [NUMBER] modules.

[PASTE MODULE MAP FROM PROMPT 1]

For each module, write:

---
**MODULE [#]: [TITLE]**
**Learning Objective**: [From architecture]

**Module Overview** (150–200 words):
Describe what this module covers, why it matters to the student at this point in their journey, and what they will be able to do or understand by the end. Write in [TONE], addressing the student directly as "you."

**Lesson Breakdown**:
List all lessons within this module:
- Lesson [#.#]: [Lesson Title] — [1-sentence description of what this lesson covers and the key takeaway]
(Include 3–5 lessons per module)

**Module Assignment or Exercise** (if applicable):
Describe the action the student takes to cement the learning — be specific about what they produce or practice.

**Resources Included** (placeholder list):
[Worksheet, template, checklist, swipe file — list what type of resource would accompany this module]

**Module Completion Milestone**:
A one-sentence statement of what "done" looks like for this module.

---

Write all [NUMBER] module descriptions in full.
```

**Prompt 3 — Write the Course Sales Copy Block**

```
The course architecture and module descriptions are complete. Now write the sales-facing copy for [COURSE TITLE].

Use the course details:
[PASTE KEY DETAILS: title, outcome, target student, module overview]

Write:

1. **COURSE SALES PAGE INTRO BLOCK** (300–400 words):
   - Opening hook (for the target student — pain-point or aspiration led)
   - "Imagine if..." bridge to the transformed state
   - Introduction of the course as the vehicle
   - Bullet list of 5–7 "you will" outcomes

2. **FOR WHOM IS THIS COURSE** (a "This is for you if..." section with 5 bullets and a "This is NOT for you if..." section with 3 bullets)

3. **MODULE-BY-MODULE BREAKDOWN BLURB** (1 sentence per module, sales-facing — what the student gets, not just what it covers)

4. **INSTRUCTOR BIO PLACEHOLDER** (write a template bio block with [NAME], [CREDENTIAL], [RESULT] placeholders)

5. **FAQ BLOCK** (6 FAQs specific to this course type — covering completion time, prerequisites, access duration, refund policy placeholder, platform access, and one course-specific question)

Write all 5 assets in full.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. Module map has all modules with objectives, estimated length, and role in the arc.
2. Every module description has all 6 components (overview, lesson breakdown, assignment, resources, milestone).
3. Lessons within each module have titles and one-sentence descriptions — none left as "[Lesson title TBD]."
4. The sales copy intro block addresses a specific pain point, not a generic one.
5. The "For Whom" section is honest and not just an excuse to list every possible student.

---

### Step 4 — Delivery Format

- **File format**: Two Google Docs:
  - (1) Course Architecture + Full Module Descriptions
  - (2) Course Sales Copy Block
- **Naming convention**:
  - `NEXUS_CourseArchitecture_[BUSINESSNAME]_[COURSETITLE]_[YYYYMMDD].docx`
  - `NEXUS_CourseSalesCopy_[BUSINESSNAME]_[YYYYMMDD].docx`
- **How to share**: Shared Google Drive folder
- **Delivery email subject**: `Your Course Architecture is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Module sequence changes: reorder in the document; check that the student journey arc still makes sense after reordering.
- Adding a module: each additional module description is a paid add-on — quote accordingly.
- Sales copy rewrites: reprompt only the specific asset that needs adjustment using Prompt 3 structure.

---

---

## Package 15 — AI Sales Page Copywriter

**Price**: $497 | **Deliverable**: Full sales page up to 1,200 words | **Turnaround**: 72 hours

---

### Step 1 — Review Intake

Check the intake form for (this package requires the most thorough intake of all 16):
- Product or service name and price point
- Target customer: job title, pain points, desires, awareness level (cold / warm / hot)
- Core transformation / promise of the offer
- 3–5 specific features of the offer with their corresponding benefits
- Social proof available: testimonials, case studies, notable clients, awards (get real quotes and names)
- Guarantee offered (if any)
- Objections the ideal buyer has before purchasing
- CTA: what happens when they click (buy now, book a call, apply, download)
- Any legal or compliance constraints on claims
- Competitor sales pages that are strong in this space (for context)
- Brand tone

Red flags requiring clarification before starting:
- No testimonials or proof — flag that the page will have weaker conversion without it; proceed but note the gap
- Unverifiable superlative claims ("best in the world", "guaranteed results in 24 hours") — ask for substantiation or remove
- Price point not shared — you need this to calibrate the objection handling and value framing
- Sales page for a product in a regulated industry — flag compliance review requirement explicitly

---

### Step 2 — Three Sequential Prompts

**Prompt 1 — Research and Strategy Brief**

```
You are a senior direct response copywriter preparing to write a high-converting sales page. Before writing a single word of copy, you do a complete strategy analysis.

Analyze the following offer and produce a strategy brief:

OFFER DETAILS:
- Product/service name: [NAME]
- Price: [PRICE]
- What it is: [DESCRIPTION]
- Who it's for: [TARGET AUDIENCE]
- Their awareness level: [COLD / WARM / HOT]
- Core transformation: [TRANSFORMATION]
- Features and benefits: [LIST]
- Social proof available: [TESTIMONIALS / CASE STUDIES]
- Guarantee: [GUARANTEE OR "None"]
- Top 3 objections: [OBJECTIONS]
- CTA: [CTA]
- Competitors or reference pages: [REFERENCES OR "None"]
- Brand tone: [TONE]

Produce:

1. **HEADLINE STRATEGY** (what angle will the headline lead with and why — choose from: transformation, curiosity, specificity, fear, social proof, or contrarian)

2. **PAGE ARC OUTLINE** (section-by-section structure with the purpose of each section and the emotional state you want the reader in at the end of each section)

3. **5 HEADLINE OPTIONS** (full headline + subheadline pairs — varied angles, all specific and benefit-led)

4. **VOICE OF CUSTOMER LANGUAGE** (based on the target audience and offer, list 10 phrases the ideal buyer might use to describe their problem or desired outcome — these will be woven into the copy)

5. **PROOF STRATEGY** (how and where to use the available testimonials and case studies for maximum impact)

6. **OBJECTION MAP** (for each of the 3 objections, note where in the page arc to address it and how)

Produce this strategy brief in full before any copy is written.
```

**Prompt 2 — Write the Sales Page (Top Half)**

```
You are writing the sales page for [PRODUCT/SERVICE NAME] priced at [PRICE], targeting [TARGET AUDIENCE].

Use this strategy brief:
[PASTE STRATEGY BRIEF FROM PROMPT 1]

Write the TOP HALF of the sales page — from the headline through to the end of the "what you get" section. This should be approximately 600 words.

Structure:
1. **HEADLINE + SUBHEADLINE** (use the strongest option from the strategy brief)
2. **ABOVE-THE-FOLD HOOK** (2–3 sentences after the headline that speak directly to the reader's pain or desire; do not mention the product yet)
3. **THE PROBLEM SECTION** (100–120 words; agitate the pain the reader is experiencing; use voice of customer language; create recognition — "yes, that's me")
4. **THE BRIDGE** (50–70 words; transition from problem to solution; introduce the offer by name for the first time)
5. **THE SOLUTION SECTION** (100–120 words; describe what this product/service does and how it works at a high level; focus on mechanism and transformation, not a full feature list yet)
6. **WHAT YOU GET** (the features and benefits section; write each item as:
   [FEATURE NAME]: [Benefit-led description in 2–3 sentences — what this gives the reader and what that means for their life or business])
   Write one entry per feature. Include all [NUMBER] features.

Write all 6 sections in full. Use [TONE]. Write in second person ("you").
```

**Prompt 3 — Write the Sales Page (Bottom Half)**

```
Continue the sales page for [PRODUCT/SERVICE NAME]. The top half is written. Now write the BOTTOM HALF — from social proof through to the final CTA. This should be approximately 600 words, bringing the total page to approximately 1,200 words.

Structure:
7. **SOCIAL PROOF SECTION** (introduce 2–3 testimonials using the proof strategy from the brief; write transitional copy before and after the testimonial blocks — do not just drop quotes with no context)
8. **WHO THIS IS FOR** (5 bullet points starting with "You are the right fit if..." — specific and resonant)
9. **OBJECTION HANDLING SECTION** (address the top 2–3 objections; write as a natural conversational block, not a FAQ; 100–150 words total)
10. **GUARANTEE BLOCK** (write the guarantee in [GUARANTEE DETAILS] in a confident, warm tone; if no guarantee, write a risk-reversal statement instead)
11. **PRICING + CTA BLOCK**:
    - Restate the offer name and price
    - Write a 40–60 word value summary ("Everything you get" recap)
    - Primary CTA button text (3 options)
    - One urgency or scarcity statement (honest — use [DEADLINE / QUANTITY] placeholder if applicable)
12. **CLOSING SECTION** (75–100 words; a direct, human close that speaks to where the reader will be if they act vs. if they don't; end with the CTA again)

Write all 6 sections in full. Maintain [TONE] throughout. Do not truncate.
```

---

### Step 3 — Quality Check

Before sending, verify:
1. Total page word count is at or near 1,200 words — count it.
2. The headline is specific and benefit-led — not generic ("Transform Your Business" fails; "Cut Your Client Acquisition Cost in Half in 60 Days" passes).
3. The problem section uses real language the target buyer would recognize, not generic marketing speak.
4. Social proof appears with context — not dropped in as a cold quote block.
5. The final CTA appears at least twice (once after "What You Get" and once at the close) and both times has the same destination action.
6. No unverifiable claims remain in the final copy — scan for "guaranteed," "always," "100%," and confirm each is backed by an actual guarantee stated in intake.

---

### Step 4 — Delivery Format

- **File format**: Google Doc — formatted to visually approximate a sales page layout (headline in H1, sections in H2, bullet points formatted, CTA areas marked in bold)
- Include a second page: "COPY NOTES FOR DESIGNER" — brief instructions on where to add imagery, testimonial styling, button placement
- **Naming convention**: `NEXUS_SalesPage_[BUSINESSNAME]_[PRODUCTNAME]_[YYYYMMDD].docx`
- **How to share**: Google Drive link + .docx attachment
- **Delivery email subject**: `Your Sales Page Copy is Ready — [BUSINESS NAME]`

---

### Revision Handling

- One round of revisions included.
- Headline revisions: run a dedicated headline prompt — "Write 10 more headline options for [OFFER] targeting [AUDIENCE]. Angles to try: [LIST]. Do not repeat angles from the original 5."
- Section rewrites: paste the specific section back and reprompt it with the change instruction — never re-run all 3 prompts.
- If the client says "the whole page feels off": before rewriting, ask them to mark 3 specific sentences they dislike and describe what they would prefer. Identify the pattern first. This saves a full rewrite 80% of the time.
- Additions over 1,200 words: flag that additional copy (e.g., a second testimonials section, a full FAQ block) is scope expansion — quote an add-on fee.

---

---

## Appendix A — Delivery Email Template

Use this as your base delivery email for every package. Customize the body paragraph.

```
Subject: Your [PACKAGE NAME] is Ready — [BUSINESS NAME]

Hi [CLIENT NAME],

Your [PACKAGE NAME] is complete and ready for your review.

[1–2 sentences specific to what was delivered and any notable decisions made during fulfillment.]

Access your files here: [GOOGLE DRIVE LINK]

Files included:
- [FILE 1 NAME]
- [FILE 2 NAME]

If you have revisions, please reply to this email with:
1. The specific section or item to revise
2. What you'd like changed and why

One round of revisions is included. I'll have revisions back to you within 24 hours of receiving your feedback.

Thank you for working with NEXUS AI.

[YOUR NAME]
NEXUS AI Automation Agency
```

---

## Appendix B — Revision Request Response Template

When a client requests revisions, reply with this before starting:

```
Hi [CLIENT NAME],

Thank you for your feedback. To make sure I get this right, let me confirm what you need:

[RESTATE THEIR REQUEST IN YOUR OWN WORDS]

Is that correct? Once you confirm, I'll have the revised [DELIVERABLE] back to you within 24 hours.

[YOUR NAME]
```

---

## Appendix C — Scope Escalation Script

When a client requests work outside the package scope:

```
Hi [CLIENT NAME],

I'd be happy to help with [REQUESTED ADDITION]. That falls outside the scope of your current package, but I can add it on.

[DESCRIBE ADD-ON WORK] would be an additional [QUOTE PRICE — suggest $50–$150 depending on scope].

Let me know if you'd like to proceed and I'll invoice you separately.

[YOUR NAME]
```

---

## Appendix D — Intake Clarification Request Template

When intake is insufficient to begin:

```
Hi [CLIENT NAME],

Thank you for submitting your intake form. Before I begin work on your [PACKAGE NAME], I need a few additional details:

1. [SPECIFIC QUESTION 1]
2. [SPECIFIC QUESTION 2]
3. [SPECIFIC QUESTION 3]

Once I have these, I'll get started and deliver your [DELIVERABLE] within [TURNAROUND].

[YOUR NAME]
```

---

*End of NEXUS AI Fulfillment Playbook — Version 1.0*
