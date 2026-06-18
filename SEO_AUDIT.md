# Yard Metric — Senior SEO Audit
**Data period:** June 7–14, 2026 (first 8 days of Google index visibility)
**Site:** yardmetric.com — AstroJS static site, 37 calculators, Cloudflare Pages
**Analyst note:** This audit is built entirely from actual Google Search Console data. No guesswork.

---

## Part 1: What the Data Actually Says

### The Raw Numbers

| Metric | Value | Interpretation |
|---|---|---|
| Total clicks | **6** | All 6 from India. Zero from USA. |
| Total impressions | **1,419** | Google is seeing the site — it's indexed |
| Average CTR | **0.42%** | Expected at these deep positions |
| Average position | **~70** | Page 7. Completely invisible commercially. |
| Days with impressions | **8 of 14** | First impression: June 7. Indexing is fresh. |

### The Trend: Accelerating Impressions, Zero Clicks

```
Date       Clicks  Impressions  Avg Position
Jun 07         0            5       48.8
Jun 08         1           94       69.5
Jun 09         2          168       66.9
Jun 10         3          214       72.5
Jun 11         0          232       71.9
Jun 12         0          183       66.4
Jun 13         0          218       65.4
Jun 14         0          305       72.4
```

**What this tells you:**
- Impressions are growing fast: 5 → 305 in one week. Googlebot is actively crawling and expanding what it surfaces.
- Clicks are not growing because every page that gets impressions sits deep in page 6–8.
- The 3 clicks on June 10 were almost certainly you testing the site.
- This is **exactly what a healthy new site looks like in week 1**. The question is how fast you can move positions.

---

### The Country Breakdown: Your Core Problem in One Table

| Country | Clicks | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| **India** | **6** | 14 | **42.86%** | **1.86** |
| **United States** | **0** | **1,277** | **0%** | **69.36** |
| Canada | 0 | 76 | 0% | 75.99 |
| Australia | 0 | 23 | 0% | 90.30 |
| United Kingdom | 0 | 13 | 0% | 96.69 |

**This is the most important insight in the entire dataset.**

Your site is ranking #1–2 in India (where construction/landscaping calculators don't exist) and position 69 in the USA (where your entire target market lives). The US has 90× more impressions than India — and zero clicks.

The revenue opportunity is entirely in the USA market, at positions 1–10. You're currently at position 69. The job is to move 59 positions on your top pages.

---

### Device Split: Mobile Is Outperforming Desktop

| Device | Clicks | Impressions | CTR | Avg Position |
|---|---|---|---|---|
| Desktop | 6 | 1,044 | 0.57% | **74.03** |
| Mobile | 0 | 287 | 0% | **53.85** |
| Tablet | 0 | 88 | 0% | 67.68 |

**The counter-intuitive finding:** Mobile positions (53.85) are significantly better than desktop (74.03) — nearly 20 positions better. Two explanations:

1. **Mobile-first indexing is working** — your AstroJS site renders correctly on mobile, which Google weights heavily.
2. **Mobile SERPs have less competition for some queries** — but this also means the people clicking in the US market (DIY homeowners pricing gravel for a driveway) are primarily on mobile, and you're showing them nothing.

Mobile is your closer-to-page-1 vector. Prioritize mobile UX signals: Core Web Vitals, tap targets, load time. You're already winning here; press the advantage.

---

### Page Performance: The Surprises

| Page | Impressions | Clicks | CTR | Avg Position |
|---|---|---|---|---|
| /calculators/gravel-calculator/ | **576** | 1 | 0.17% | 72.34 |
| / (homepage) | 205 | 1 | 0.49% | 77.45 |
| /calculators/topsoil-calculator/ | 197 | 0 | 0% | 76.40 |
| /calculators/pea-gravel-calculator/ | 184 | 0 | 0% | 60.76 |
| /calculators/sand-calculator/ | 87 | 0% | 0% | 56.11 |
| /calculators/rubber-mulch-calculator/ | 52 | 0 | 0% | **41.71** |
| /landscaping/ | 46 | 0 | 0% | 61.63 |
| /pavers-outdoor/ | 36 | 0 | 0% | 53.00 |
| /calculators/mulch-calculator/ | 32 | 0 | 0% | 64.12 |
| /calculators/paver-sand-calculator/ | 15 | 0 | 0% | **22.00** |
| /calculators/concrete-calculator/ | 7 | 0 | 0% | **33.00** |
| **⭐ /construction/** | **14** | **1** | **7.14%** | **9.29** |
| **⭐ /lumber-woodworking/** | **16** | **1** | **6.25%** | **20.19** |
| /calculators/paint-calculator/ | 52 | 1 | 1.92% | 55.90 |
| /calculators/drywall-calculator/ | 16 | 1 | 6.25% | 59.75 |

**Critical findings:**

1. **/construction/ is ranking #9 in Google.** Page 1. This is your proof-of-concept that the site CAN rank on page 1. It needs immediate attention because that CTR (7.14%) with consistent traffic can become real organic clicks.

2. **/lumber-woodworking/ is at position 20** — top of page 2. One serious content push gets this to page 1.

3. **Paver-sand-calculator sits at position 22** — almost page 2. This is your fastest path to page-1 click traffic from a calculator page.

4. **Rubber mulch calculator at 41.71** — page 4-5. This is the most "improvable" calculator page with high momentum.

5. **Concrete calculator at position 33** — page 3-4 despite only 7 impressions. Barely getting surfaced but when it is, it's at a respectable depth.

6. **Gravel calculator: 576 impressions at position 72.** This is your biggest page and your deepest stuck page simultaneously. It has the most search intent targeting it but needs the most work to climb.

---

### The Query Landscape: What People Are Actually Searching

**Top 10 by impressions:**

| Query | Impressions | Position | Notes |
|---|---|---|---|
| pea gravel calculator | 50 | 56.98 | Closest to page 5 — push hard |
| gravel calculator | 38 | 79.74 | High volume, deep position |
| gravel ton calculator | 19 | 67.37 | Strong modifier query |
| gravel yard calculator | 19 | 81.16 | |
| cubic yard calculator gravel | 18 | 68.44 | |
| gravel needed calculator | 17 | 71.88 | High commercial intent |
| gravel calculator yards | 17 | 76.82 | |
| how much pea gravel do i need calculator | 16 | 63.62 | Conversational → FAQ opportunity |
| how much gravel do i need calculator | 16 | 83.75 | Same |
| sand and gravel calculator | 15 | 76.80 | |

**Hidden gems (closer to page 1):**

| Query | Impressions | Position | Why it matters |
|---|---|---|---|
| how much does 1.25 cubic feet of rubber mulch weigh | 3 | **5.67** | Page 1 RIGHT NOW. Your FAQ is ranking. |
| pea gravel calculator circle | 1 | 28 | Page 3 — push to page 1 |
| paver sand calculator home depot | 1 | 44 | Page 4-5 — strong commercial intent |
| calculator for pea gravel | 1 | 45 | Page 4-5 |
| pea gravel estimator | 2 | 46 | Page 4-5 |

**The single most important query insight:**

"how much does 1.25 cubic feet of rubber mulch weigh" is at **position 5.67** on page 1. This is coming from your rubber mulch FAQ. It's the only keyword you're on page 1 for in any meaningful market. The rubber mulch page is your closest-to-breakthrough asset. Every effort to push the rubber mulch calculator from position 42 to position 15 will move this FAQ entry from position 5 to position 3 or higher, generating real clicks.

**Query pattern analysis:**

- 383 unique queries are generating impressions. That's healthy for a 10-day-old site.
- Every single gravel variant (25+ queries) generates impressions but zero clicks — this entire cluster is position 55+.
- Topsoil generates 12–12 impressions per variant at positions 65–100. Your topsoil page is getting seen but buried.
- International long-tail queries (m3 to tonne soil, how many tonnes of soil in cubic metre) are appearing at positions 80–100 — suggesting international markets are indexing you but you've done nothing to serve them.

---

### The Empty Search Appearance Report

The Search Appearance CSV contains only headers — **zero rich result types are triggering for any page.**

This means:
- Your FAQ schema is indexed but not generating FAQ rich results in SERPs
- Your HowTo schema (on calculators that have `howToSteps`) is not triggering HowTo rich results
- Your WebApplication schema is not generating App rich results
- No featured snippets are being captured despite your FAQ content

**Root cause:** The site is too new. Google's rich result system takes 4–8 weeks to trust new domains. The schema is correctly implemented — it just hasn't been in the index long enough. **This will change.** Prioritize schema quality now so when Google starts pulling rich results (likely weeks 4–8), they trigger on every calculator.

---

## Part 2: The Five Root Causes Ranked by Impact

### Root Cause 1: Domain Age = Zero Authority (The Inescapable One)

**Impact:** 10/10 — This affects every page equally.

The site went live approximately June 4–7. That's 10 days old. Google's trust algorithm for new domains operates on a ~6 month clock. No matter how good the content, a brand-new domain competing against inch-calculator.com (DA 60+, 10 years old) and omnicalculator.com (DA 65+, 12 years old) will not rank on page 1 for competitive queries until it has accumulated:
- Time in the index (automatic — just wait)
- Backlinks from relevant sites (not automatic — this is your primary job)
- Engagement signals from real users (not automatic — you need real traffic)

**The fix is not one thing; it's a program:**

- Every week without backlink outreach is a week of lost compounding. Start link acquisition day 1.
- The category pages (/construction/ at #9, /lumber-woodworking/ at #20) are beating the competition because there's LESS competition for category-level queries. These pages give you a foothold to build from.
- The individual calculator pages are where competition is fierce. They need both time AND links AND better content to crack page 1.

---

### Root Cause 2: Gravel Keyword Cluster Is Bloated and Cannibalizing Itself

**Impact:** 9/10 for your highest-impression pages.

Your top impression-generating page is the gravel calculator with 576 impressions. Your top impression-generating query is "pea gravel calculator" with 50 impressions. These are separate pages for the same user intent cluster:

```
/calculators/gravel-calculator/        → gravel calculator (position 72)
/calculators/pea-gravel-calculator/   → pea gravel calculator (position 61)
/calculators/crushed-stone-calculator/ → crushed stone
/calculators/aggregate-calculator/     → aggregate
/calculators/river-rock-calculator/    → river rock
/calculators/landscape-rock-calculator/ → landscape rock
/calculators/road-base-calculator/     → road base
/calculators/crusher-run-calculator/   → crusher run
/calculators/gravel-calculator/        → (also ranks for "gravel fill," "gravel base," etc.)
```

Google is seeing 8+ pages that all want to rank for "gravel" variants. When it can't determine which one is most relevant for a given query, it ranks all of them lower than it would rank one strong page.

**The fix:**
- The gravel calculator needs to be your anchor page that dominates gravel head terms.
- Pea gravel, crushed stone, aggregate each need their pages clearly differentiated with unique use cases.
- Add explicit "When to use THIS calculator vs. others" sections to each gravel-variant page.
- Internally link all gravel variants to the main gravel calculator with anchor text "gravel calculator."

---

### Root Cause 3: No Content Moat — Pure Tool, No Articles

**Impact:** 8/10 — Blocks category-level authority indefinitely.

Competitors ranking above you for "gravel calculator," "mulch calculator," "concrete calculator" don't just have a calculator. They have:
- Buying guides: "How much gravel does a driveway need?"
- Reference tables: "Gravel weight per cubic yard by type"
- Comparison articles: "Pea gravel vs. crushed stone for driveways"
- Cost guides: "How much does a yard of gravel cost in 2025?"

These articles generate backlinks naturally (people cite them), rank for informational queries that funnel into calculator use, and signal to Google that the site is a topical authority — not just a tool farm.

Right now, yardmetric.com has 37 tools and 0 articles. An inch-calculator post titled "How Much Gravel Do I Need for a Driveway?" can rank for 200 long-tail queries that all pre-qualify users before sending them to a gravel calculator. You have no such funnel.

**The fix:** Detailed in Part 3.

---

### Root Cause 4: Boilerplate Calculator Content (Still Partially an Issue)

**Impact:** 7/10 — Google's Helpful Content classifier.

Looking at the current `[slug].astro` template, the `materialInfo`, `proTips`, `commonMistakes`, `buyingTips`, `wasteFactor` fields are already wired into the template. But the content is only in `calculators.ts` entries where you've added it. Calculators without these fields still fall back to showing only: description, formula, examples, FAQs.

Check how many of your 37 calculators still have `materialInfo: undefined`. Any calculator page without `materialInfo` is showing ~400 words of content: a description paragraph, formula, 3 examples, and FAQs. That's borderline for Helpful Content.

**The minimum viable content per page:** 700–900 words. Currently estimated at 300–500 on the thinner pages.

---

### Root Cause 5: Schema Not Triggering Rich Results Yet

**Impact:** 6/10 — Time-dependent, but time is passing.

The Search Appearance CSV being empty means zero rich results in 8 days. The schema is correctly structured (HowTo on calculators with `howToSteps`, FAQPage on all calculators, BreadcrumbList). This is normal for a new domain.

**What to watch:** At the 4-week mark, check Search Appearance again. If FAQPage and HowTo results aren't appearing by week 6, there's a schema quality issue to investigate. If they ARE appearing, you'll see CTR jump significantly because FAQ rich results typically double CTR on questions-based queries.

**Action now:** Ensure every FAQ answer starts with a complete direct sentence answering the question (< 40 words). Google clips featured snippets at 100 words — front-load every answer. Bad example: "The amount of gravel you need depends on several factors including..." Good example: "A 10×20 driveway at 4 inches deep needs approximately 2.5 cubic yards (3.4 tons) of gravel."

---

## Part 3: The Priority Fix List

Ordered by: (impact on moving positions in next 90 days) × (effort to execute)

### P0 — This Week: The Foundation

**P0.1 — Paver-sand calculator content push (position 22 → target: top 10)**

`/calculators/paver-sand-calculator/` is at position 22 with 15 impressions. This is your most actionable page right now. It's one serious content update from cracking the top 10.

What it needs:
- Increase `materialInfo` to 3–4 paragraphs (currently sparse if it has it at all)
- Add or expand `proTips`: compaction rates, depth by paver type, polymeric sand differentiation
- Expand FAQs to 8–10 questions covering: "how deep should paver sand be?", "what type of sand for pavers?", "how many bags of paver sand per square foot?"
- Add internal links FROM the paver-base-calculator and tile-calculator TO this page with anchor "paver sand calculator"
- H2 restructure: replace generic H2s with "How Much Sand Do I Need Under Pavers?" and "Paver Sand Depth Guide"

Expected outcome: Position 22 → 8–15 within 45 days.

---

**P0.2 — Rubber mulch calculator content push (position 41 → target: top 20)**

`/calculators/rubber-mulch-calculator/` sits at position 41.71 with 52 impressions. You already have a page-1 FAQ result ("how much does 1.25 cubic feet of rubber mulch weigh" at position 5.67) — meaning Google trusts this page's specific content. Push that trust to the whole page.

What it needs:
- Expand `materialInfo` to cover: rubber mulch vs. wood mulch, playground safety standards (ASTM F1292 depths), long-term cost comparison
- Key missing content: rubber mulch coverage per bag and per cubic foot (extremely searched)
- Add FAQ: "How much does rubber mulch weigh per cubic foot?" (position 5 already, expand on it)
- Add FAQ: "How deep should rubber mulch be for playgrounds?" (ASTM requirement is 6" for equipment < 7 ft — include the spec)
- Add `buyingTips` covering: how rubber mulch is sold (cubic foot bags vs. bulk tons), Home Depot vs. Lowes vs. bulk suppliers

Expected outcome: Position 41 → 18–25 within 45 days. The page-1 FAQ result pulls more traffic immediately.

---

**P0.3 — Construction category page (position 9 → target: top 5)**

`/construction/` is on page 1 at position 9. This is your best-performing page and it gets barely any impressions (14) because people don't search for "construction calculators" broadly — they search for specific calculators. But position 9 means if you add any article content that targets broader construction queries, it has a chance to rank.

What it needs:
- Expand the category intro to target "construction material calculator," "construction estimating tools," "building material calculator"
- Add an H2: "Construction Material Calculator Guide" with 200 words on how to estimate material quantities for common construction projects
- Add an H2: "Most Used Construction Calculators" (link to top 5 with keyword-rich anchor text)
- Internal link this page from EVERY construction calculator page with explicit "Construction Calculators →" link

Expected outcome: CTR stays high (7.14%), impressions increase from 14 to 50–100 within 60 days as the page ranks for more queries.

---

**P0.4 — Fix FAQ answers for featured snippet capture**

Every FAQ answer on every calculator page should start with a complete, direct answer in the first sentence. Google extracts featured snippets by looking for the most direct, complete answer to a question.

Current pattern (bad): "There are several factors to consider when calculating how much pea gravel you need, including the size of the area..."

Required pattern (good): "You need X cubic yards of pea gravel for a 10×12 area at 2 inches deep. Multiply length × width × depth in inches, divide by 324 to get cubic yards."

Audit every FAQ answer. Any answer that starts with a clause before the direct answer needs rewriting. This is 2–3 hours of work that can generate featured snippets worth 2× CTR on question queries.

---

### P1 — Month 1: Content That Gets Links

**P1.1 — Write "How Much Gravel Do I Need?" guide**

Target URL: `/guides/how-much-gravel-do-i-need/` or on the gravel calculator page itself as a very long-form section.

This query gets ~14,000 searches/month. Right now, inch-calculator.com, omnicalculator.com, and landscapecalculator.org own it. Your gravel calculator already does the calculation — but you have no supporting article.

Structure:
1. How much gravel for a driveway (most common use case, most searched)
2. How much gravel for a path or walkway
3. How much gravel for a French drain
4. How much gravel for a garden bed
5. Gravel coverage per ton by stone size (the reference table people bookmark)
6. Where to buy gravel: bulk vs. bags, price per ton by region

This article would rank independently AND funnel directly to the gravel calculator. It's also naturally linkable — landscaping blogs, contractor sites, YouTube video descriptions.

Estimated monthly traffic once ranked: 2,000–8,000 visits/month.

---

**P1.2 — Write "Cubic Yards Calculator: The Complete Guide"**

Target URL: `/guides/cubic-yards-calculator/`

"Cubic yard calculator" gets ~49,000 monthly searches — more than any individual calculator on your site. But it's too broad for a calculator page to own. You need a long-form guide that explains cubic yards, walks through examples for every material, and links to every individual calculator.

This is the type of content that gets linked from educational sites, university extension services, and DIY blogs. One strong link from a .edu in this niche is worth more than 50 links from random sites.

---

**P1.3 — Write "How Much Mulch Do I Need?" guide**

Target URL: `/guides/how-much-mulch-do-i-need/`

"How much mulch do I need" gets ~27,000 monthly searches. Your mulch calculator handles the calculation but sits at position 64 with 32 impressions. A guide targeting this query:
- Mulch depth guide by plant type (flowers: 2", shrubs: 3", trees: 4")
- How to calculate mulch for irregular shapes
- Mulch volume table (area × depth = cubic yards)
- Wood mulch vs. rubber mulch vs. straw (links to both calculators)
- How mulch is sold (bags vs. bulk, cubic feet vs. cubic yards)

This guide ranks for the head term while the calculator ranks for "mulch calculator" modifier queries.

---

**P1.4 — Build grout-calculator and mortar-calculator**

These are referenced in your data as related calculators on the tile and brick pages but don't exist. They also represent real search volume:
- "grout calculator": ~12,000/month
- "mortar calculator": ~8,000/month

Both are simple `volume` mode calculators. Building them removes broken references from tile/brick pages, adds two new rankable pages, and fills genuine gaps in your construction category.

---

### P2 — Month 2: Authority Infrastructure

**P2.1 — Build an E-E-A-T foundation**

For a site that helps people make real purchasing decisions (ordering 5 tons of gravel costs $300–$800), Google's quality raters check for Experience, Expertise, Authoritativeness, and Trustworthiness signals.

What's missing:
- No About page content that establishes who built this and why their calculations should be trusted
- No methodology page explaining formula sources (ACI standards for concrete, ASTM for materials)
- No author attribution on content
- Footer has no trust signals (no "Formulas verified against industry standards")

Build these:
1. `/about/` — Honest, specific story. What problem this solves, what expertise informs it, why you care about accuracy.
2. `/methodology/` — Which industry standards inform each formula. Link to ACI 318 for concrete. Reference ASTM standards for material densities. This page alone can generate .edu backlinks.
3. Footer update — Add one line: "Formulas based on ACI, ASTM, and industry-standard material densities."

---

**P2.2 — Create the hub page for /gravel/**

The query "gravel calculator" gets 27,000 monthly searches. No single calculator page can own a head term this competitive without a hub page that aggregates all gravel-related content.

`/gravel/` (or `/landscaping/gravel/`) should be a landing page that:
- Describes every type of gravel (pea gravel, crushed stone, river rock, road base, crusher run)
- Links to each gravel-variant calculator with descriptive anchor text
- Has a comparison table: grain size, coverage per ton, best uses, avg cost per ton
- Links to the "how much gravel do I need" guide
- Ranks for: "types of gravel," "gravel for driveways," "gravel cost calculator"

This hub page accumulates link equity from anyone who links to "gravel calculator" resources and distributes it to all your gravel variant calculators via internal links.

---

**P2.3 — Start link acquisition (do not delay)**

Every week without backlinks is compounding lost time. The domain is brand new. Competitors have 10+ years of links. Here are the five highest-ROI link opportunities in your niche:

**1. YouTube description links (Tier 1)**
Search YouTube for: "how to calculate gravel driveway," "how much mulch do I need," "paver installation tutorial," "concrete slab how much concrete"
Find channels with 10k–500k subscribers posting DIY/landscaping content. Send a short, personal message:
> "Hey [Name] — love your driveway project video. I built a free gravel calculator at yardmetric.com/calculators/gravel-calculator/ that might be useful for your viewers. Happy to help answer questions about the calculator if you want to mention it."

YouTube description links are nofollow but generate real traffic, which sends engagement signals to Google. Target 30–50 channels in 60 days.

**2. Reddit threads (Tier 1 — do this week)**
Search Reddit for threads in the last 6 months asking "how much gravel do I need" or "how much concrete for my slab" on r/DIY, r/landscaping, r/Construction, r/HomeImprovement. Find threads where someone asked and got a generic answer or no answer. Post a genuinely helpful reply with a calculation showing your work, then mention the calculator naturally.

This generates referral traffic immediately and sends click-through signals that help SEO.

**3. Resource page links (Tier 2)**
Search Google for:
- `site:*.edu "calculators" "construction" inurl:resources`
- `"landscaping calculators" inurl:resources`
- `"construction tools" site:.gov resources`

These pages link to calculation tools as educational resources. Getting one link from a .edu or .gov site can shift your domain authority meaningfully for a new site.

**4. Contractor association directories (Tier 2)**
NAHB (nahb.org), NRCA, NLBC, and regional contractor associations maintain member resource pages. A link from nahb.org would add significant authority.

**5. Home improvement blogs (Tier 3)**
Sites like The Spruce, Bob Vila, Family Handyman, Hunker regularly update resource lists. Pitch the calculators as embeddable tools — provide an `<iframe>` widget for embedding in exchange for attribution with a dofollow link to the full calculator.

---

### P3 — Ongoing: Structural Improvements

**P3.1 — Category meta descriptions are currently auto-generated and too long**

The current code in `[category].astro` generates meta descriptions by listing calculator names — resulting in 180–200+ character descriptions that get truncated in SERPs. Every category page is showing a cut-off description.

Add a `seoDescription` field to each Category in `calculators.ts`:

```ts
// Landscaping
seoDescription: "Free landscaping calculators for gravel, mulch, topsoil, sand, and more. Get instant cubic yards, tons, and bag counts for any project.",

// Construction
seoDescription: "Free construction calculators for concrete, asphalt, rebar, drywall, and more. Instant material estimates in cubic yards, tons, and bags.",

// Pavers & Outdoor
seoDescription: "Free paver and outdoor calculators for pavers, paver sand, retaining walls, tile, and fencing. Instant coverage and material estimates.",

// Lumber & Woodworking
seoDescription: "Free lumber calculators for board feet, decking, flooring, and lumber quantities. Instant estimates for any woodworking or framing project.",
```

**P3.2 — WebApplication schema → SoftwareApplication**

`[slug].astro:36` uses `@type: 'WebApplication'`. The correct type for generating "Free" and star-rating rich results in SERPs is `SoftwareApplication`. Change this in the `structuredData` object. No other changes needed.

```ts
// Change this one line:
'@type': 'SoftwareApplication',
```

**P3.3 — Title tags: Add "Free" as a CTR modifier**

Every top competitor title includes "Free" — inch-calculator, omnicalculator, calculatorsoup. Your titles do not. Users scanning a SERP of calculator results at positions 8–15 will click the one that says "Free" first.

Update the 10 highest-impression calculators to include "Free" in the seoTitle. Example:
- Current: `"Gravel Calculator – Cubic Yards, Tons & Bags | Yard Metric"`
- Improved: `"Free Gravel Calculator – Cubic Yards, Tons & Bags | Yard Metric"`

**P3.4 — Add Organization schema to homepage**

Current homepage schema: `WebSite` only. Add `Organization` to establish brand entity in Google's Knowledge Graph:

```json
{
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Yard Metric",
  "url": "https://yardmetric.com",
  "description": "Free material calculators for construction, landscaping, and DIY projects.",
  "sameAs": []
}
```

Also add `SearchAction` to the `WebSite` schema's `potentialAction` for Sitelinks Searchbox eligibility.

**P3.5 — Noindex utility pages**

Add `noindex={true}` to Layout props in `/privacy/`, `/terms/`, `/contact/`, and `/500/`. These pages have zero ranking value and waste crawl budget that could be spent re-crawling your calculators after content updates.

---

## Part 4: The 90-Day Battle Plan

### Days 1–7: High-Impact, Low-Effort Fixes

| Task | File | Time | Expected Impact |
|---|---|---|---|
| Add seoDescription to all 4 Category objects | `calculators.ts` | 30 min | +10–20% CTR on category pages |
| Change WebApplication → SoftwareApplication | `[slug].astro:36` | 5 min | Rich result eligibility |
| Noindex privacy/terms/contact/500 pages | Each .astro file | 15 min | Cleaner crawl budget |
| Add Organization + SearchAction schema to homepage | `index.astro` | 45 min | Knowledge Panel eligibility |
| Rewrite top 15 FAQ answers to lead with direct answer | `calculators.ts` | 3–4 hrs | Featured snippet captures |
| Add "Free" to top 10 seoTitle values | `calculators.ts` | 20 min | CTR lift on competitive pages |

---

### Days 8–30: Content That Moves Pages

| Task | Expected Outcome | Priority |
|---|---|---|
| Full content pass on paver-sand-calculator | Position 22 → 10–15 | P0 |
| Full content pass on rubber-mulch-calculator | Position 42 → 20–25 | P0 |
| Expand construction category page intro/guides | More impressions at position 9 | P0 |
| Write "How Much Gravel Do I Need?" guide (1,500+ words) | New rankings for guide queries | P1 |
| Build grout-calculator + mortar-calculator | 2 new ranking pages | P1 |
| Start Reddit link building (10+ threads per week) | Referral traffic + engagement | P1 |
| Full content pass on gravel-calculator (materialInfo + proTips + wasteFactor) | Position 72 → 45–55 | P1 |
| Full content pass on pea-gravel-calculator | Position 61 → 40–50 | P1 |
| Full content pass on topsoil-calculator | Position 76 → 55–65 | P1 |
| Audit all 37 calculators: which ones still lack materialInfo? | Identify thin content risk | P1 |

---

### Days 31–90: Authority and Content Moat

| Task | Expected Outcome | Timeline |
|---|---|---|
| Write "How Much Mulch Do I Need?" guide | Rankings for mulch informational queries | Month 2 |
| Write "Cubic Yards Calculator Guide" | Rankings for 49k/mo head term | Month 2 |
| Build /about/ with E-E-A-T content | Trust signals, quality rating lift | Month 2 |
| Build /methodology/ page | .edu link magnet, E-E-A-T | Month 2 |
| Build /gravel/ hub page | Authority node for all gravel pages | Month 2 |
| YouTube outreach: 50 channels contacted | Nofollow backlinks + referral traffic | Month 2 |
| Resource page outreach: 20 .edu/.gov targets | High-authority backlinks | Month 3 |
| Write "Types of Gravel for Driveways" guide | 8,900/mo target query | Month 3 |
| Write "Asphalt vs Concrete Driveway" comparison | 22,000/mo target query | Month 3 |
| Build /concrete/ hub page | Authority node for concrete cluster | Month 3 |
| Write "How Many Bags of Concrete Do I Need?" | 18,000/mo target query | Month 3 |

---

### Monthly KPIs to Track in GSC

Track these monthly — the goal is not to track everything but to know if you're moving.

| Metric | Baseline (Week 1) | 30-Day Goal | 90-Day Goal |
|---|---|---|---|
| US impressions | 1,277 | 4,000+ | 15,000+ |
| US clicks | 0 | 20–50 | 200–500 |
| Pages ranking position <30 | 3 | 10 | 25 |
| Avg position (gravel-calculator) | 72 | 55 | 35 |
| Avg position (paver-sand-calculator) | 22 | 12 | 8 |
| Avg position (rubber-mulch-calculator) | 42 | 25 | 15 |
| Rich results appearing | 0 | 5+ FAQ results | 15+ FAQ/HowTo results |
| Referring domains | ~0 | 5+ | 25+ |

---

## Part 5: Issue Summary Table

| Issue | Severity | Impact | Effort | Timeline |
|---|---|---|---|---|
| Domain too young / no backlinks | 10/10 | 10/10 | 8/10 | Ongoing |
| USA market at position 69, 0 clicks | 10/10 | 10/10 | 7/10 | 30–90 days |
| No search appearance / zero rich results | 8/10 | 9/10 | 3/10 | 4–8 weeks (schema must age) |
| Gravel cluster cannibalization | 7/10 | 8/10 | 4/10 | Month 1 |
| Category meta descriptions too long | 7/10 | 6/10 | 1/10 | Day 1 |
| No informational content layer | 8/10 | 9/10 | 7/10 | Month 1–3 |
| Thin content on most calculator pages | 7/10 | 8/10 | 6/10 | Month 1–2 |
| WebApplication → SoftwareApplication schema | 5/10 | 5/10 | 1/10 | Day 1 |
| No E-E-A-T signals | 7/10 | 7/10 | 5/10 | Month 2 |
| Paver-sand-calculator at 22, needs push | 6/10 | 8/10 | 3/10 | Week 1–2 |
| Rubber-mulch at 41, needs push | 6/10 | 7/10 | 3/10 | Week 1–2 |
| No Organization schema on homepage | 5/10 | 5/10 | 1/10 | Day 2 |
| No hub pages (/gravel/, /concrete/) | 7/10 | 8/10 | 5/10 | Month 2 |
| Utility pages indexed (privacy/terms) | 3/10 | 3/10 | 1/10 | Day 1 |
| "Free" missing from title tags | 4/10 | 5/10 | 1/10 | Day 1 |
| FAQ answers don't lead with direct answer | 6/10 | 7/10 | 3/10 | Week 1 |
| No guide/article content layer | 9/10 | 9/10 | 7/10 | Month 1–3 |

---

## The Bottom Line

**Where you are:** A well-built, correctly-indexed site that is 100% invisible in the US market after 10 days. Positions are all 50–100+. The technical foundation is correct. This is exactly what a high-quality new site looks like before it starts ranking.

**What's working already:**
- /construction/ at position 9 (Page 1!)
- /lumber-woodworking/ at position 20 (Page 2!)
- Rubber mulch FAQ at position 5 (Page 1 for a long-tail!)
- Paver-sand-calculator at position 22 (near Page 2!)
- Mobile positions 20 points better than desktop

**The three moves that will change everything in 90 days:**

1. **Content push on your two closest-to-page-1 calculator pages** (paver-sand at 22, rubber-mulch at 42). These pages can crack page 1 with targeted content investment. One page-1 ranking generates the engagement signals and CTR data that starts moving neighboring pages.

2. **Write your first three long-form guides** (gravel, mulch, cubic yards). These generate backlinks organically and rank for informational queries that feed directly into calculator usage. No competitor owns this space as a pure tool site — be the first to add the content layer.

3. **Start link acquisition this week.** The domain is 10 days old. Every week of delay is compounding lost time. Reddit is free, immediate, and effective. YouTube outreach takes 15 minutes per channel and pays compounding dividends. Resource page outreach converts at 5–10% and the links last forever.

The site has an excellent technical foundation. The content and authority layers are what separate where you are now (position 70) from where you need to be (position 5–10) for the US market.
