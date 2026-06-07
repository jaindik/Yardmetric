// ── Types ──────────────────────────────────────────────────────────────────────

export type CalcMode =
  | 'volume'       // standard: L × W × D → cubic yards, tons, bags
  | 'board-feet'   // T(in) × W(in) × L(ft) / 12
  | 'rebar'        // grid of rebar in a slab
  | 'paver'        // area → paver count by size
  | 'retaining'    // face area → block count
  | 'paint'        // area / 400 → gallons
  | 'drywall'      // area / 32 → 4×8 sheets
  | 'roofing'      // area / 100 → squares
  | 'brick'        // area × 7.5 → bricks
  | 'block'        // area × 1.125 → CMU blocks
  | 'tile'         // area + tile size → tile count
  | 'fence'        // linear ft + height → posts, rails, pickets
  | 'flooring'     // area + waste → sq ft, boxes
  | 'decking';     // area + board width → board count

export interface Calculator {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  description: string;
  shortDesc: string;
  seoTitle: string;
  seoDescription: string;
  icon: string;
  calcMode: CalcMode;
  defaultDepth?: number;
  density?: number;   // lbs per cubic yard (volume calcs)
  bagWeight?: number; // lbs per bag (volume calcs)
  coverageRate?: number; // sq ft per output unit (paint: 400)
  piecesPerSqFt?: number; // pieces per sq ft (brick, tile, block)
  outputLabel?: string;  // primary output unit name
  related: string[];
  faqs: { q: string; a: string }[];
  formula: string;
  formulaNote: string;
  examples: { title: string; width: number; length: number; depth: number; unit: string }[];
}

export interface Category {
  slug: string;
  name: string;
  description: string;
  icon: string;
  intro: string;
  guide: string;
  faqs: { q: string; a: string }[];
}

// ── Categories ─────────────────────────────────────────────────────────────────

export const categories: Category[] = [
  {
    slug: 'landscaping',
    name: 'Landscaping',
    description: 'Calculate materials for garden beds, pathways, driveways, and outdoor projects.',
    icon: '🌿',
    intro: `Accurate material estimates are the foundation of every successful landscaping project. Whether you're filling a raised garden bed with topsoil, laying gravel across a driveway, spreading mulch around a tree line, or building a drainage swale with crushed stone, ordering the right quantity saves money, prevents project delays, and eliminates the hassle of emergency re-orders or leftover material disposal.

Our landscaping calculators use industry-standard formulas to convert your project dimensions into precise material quantities. Every calculator outputs results in cubic yards, cubic feet, tons, and number of bags (the units your supplier actually uses for quotes), with a configurable waste factor so you always have a comfortable buffer.

The most common mistake homeowners make is underestimating depth. A garden bed that looks small on paper often requires far more material than expected once depth is factored in. Our calculators handle this automatically: enter your dimensions, choose your depth (3–4 inches for mulch, 4–6 inches for gravel, 4–12 inches for topsoil in raised beds), and see exact quantities instantly.

Professional landscapers use the same formulas: Volume (cu yd) = Length (ft) × Width (ft) × Depth (in) ÷ 324. Our calculators add material-specific density values so you also get weight in tons, essential for scheduling deliveries, since most bulk suppliers price by the ton.`,
    guide: `How to use landscaping calculators: Measure your project area carefully. For irregular shapes, break the area into rectangles, calculate each separately, and add the results. Always measure depth at multiple points (ground is rarely perfectly level) and use the average. Add 5–10% overage for normal projects; 10–15% for first-time DIY projects where measuring errors are common. For delivery orders over 3 cubic yards, always verify the minimum order with your supplier.`,
    faqs: [
      { q: 'How many cubic yards of gravel do I need for a driveway?', a: 'A standard 12×50 ft driveway at 4 inches deep needs approximately 7.4 cubic yards of gravel. At 6 inches deep for heavy vehicles, that increases to about 11 cubic yards. Always order 5–10% extra to account for compaction and uneven ground.' },
      { q: 'How much mulch do I need for 100 square feet?', a: 'At the standard 3-inch depth, 100 square feet requires about 0.93 cubic yards of mulch (roughly one cubic yard). At 2 inches deep, you need 0.62 cubic yards. Most garden centers sell mulch in 2 cubic foot bags, so plan on 13–14 bags per cubic yard.' },
      { q: 'What is the difference between topsoil and fill dirt?', a: 'Topsoil is the nutrient-rich upper 6–12 inches of soil, the layer where plants grow. Fill dirt is subsoil material used to raise grades, fill holes, and provide structural support. Fill dirt lacks organic matter and nutrients. Use topsoil for planting areas; use fill dirt beneath topsoil when you need to raise elevation.' },
      { q: 'How deep should gravel be for a driveway?', a: 'Most residential driveways use a 3-layer system: 6 inches of compacted road base or crusher run, then 2–4 inches of crushed stone or gravel on top. For areas with light traffic, 4 inches of total gravel depth over stable native soil can work. For heavy vehicles like trucks, use at least 6 inches.' },
      { q: 'How many tons is a cubic yard of landscaping material?', a: 'It depends on the material: gravel is 1.4 tons/yd³, pea gravel is 1.3 tons/yd³, sand is 1.35 tons/yd³, topsoil is 1.0–1.1 tons/yd³, and mulch is only 0.2–0.4 tons/yd³. Our calculators use material-specific density values for accurate weight estimates.' },
      { q: 'How do I calculate how much material I need for an irregular shaped area?', a: 'Divide the area into simple rectangles or triangles. Calculate the volume of each section separately using our calculators, then add the results together. For curved garden beds, a good approximation is to measure the widest point, the narrowest point, average them, and use that as your width.' },
      { q: 'Can I mix topsoil and compost for raised garden beds?', a: 'Yes, a blend of 60% topsoil, 30% compost, and 10% perlite or coarse sand is ideal for most raised beds. Calculate the total volume of your bed, then use our topsoil and compost calculators separately for each component. Order each material and blend on-site.' },
    ],
  },
  {
    slug: 'construction',
    name: 'Construction',
    description: 'Estimate concrete, asphalt, rebar, and structural materials accurately.',
    icon: '🏗️',
    intro: `Construction material waste is one of the largest controllable costs on any project. Overordering concrete means paying to dispose of hardened waste; underordering means expensive rush deliveries, cold joints in poured concrete, and project delays. Getting the quantity right the first time is non-negotiable.

Our construction calculators are built around the formulas professional estimators use every day. The concrete calculator, for example, uses the standard formula: cubic yards = (length × width × thickness in feet) ÷ 27, then adds the industry-standard 5–10% overage factor for irregular forms, spillage, and slight over-excavation. The result: you order the right amount and have a buffer without wasting money.

Material costs in construction can easily reach $100–$400 per cubic yard for ready-mix concrete or $80–$160 per ton for asphalt. Even a modest 5% waste reduction on a mid-sized project saves hundreds of dollars. For larger commercial or multi-unit projects, the savings multiply quickly.

Our calculators cover the full scope of common construction materials: concrete (slabs, footings, columns), asphalt (driveways, parking lots, overlays), rebar reinforcement grids, drywall, paint, brick, CMU block, and roofing. Each calculator displays results in the units suppliers quote: cubic yards, tons, squares, sheets, and bags.`,
    guide: `How to use construction calculators accurately: Always measure twice. For concrete slabs, measure the actual pour area, not the form dimensions; the difference matters. For asphalt, remember that compaction typically reduces volume by 15–20%, so your loose tonnage delivery will be larger than the finished compacted depth suggests. For rebar, add 10% for overlaps and laps at splices. For brick and block, always add 10% waste for cuts and breakage.`,
    faqs: [
      { q: 'How much does a yard of concrete weigh?', a: 'A cubic yard of standard concrete weighs approximately 4,050 pounds (about 2 tons). Lightweight concrete can weigh as little as 3,000 lbs/yd³, while heavyweight concrete used for radiation shielding can exceed 6,000 lbs/yd³. Standard residential mixes are always in the 3,900–4,200 lbs/yd³ range.' },
      { q: 'How many bags of concrete do I need per cubic yard?', a: 'One cubic yard requires approximately 45 bags of 60-lb mix or 34 bags of 80-lb mix. For small pours under 0.5 cubic yards, bagged mix is practical. For larger pours, ready-mix concrete is significantly more cost-effective and produces a stronger, more consistent result.' },
      { q: 'How thick should a concrete driveway be?', a: 'Residential driveways that will carry standard passenger vehicles: 4 inches minimum. Driveways that will carry RVs, heavy trucks, or trailers: 5–6 inches. Commercial driveways and parking areas: 6 inches with rebar reinforcement. Thicker slabs on poorly drained or expansive soils should use 5 inches with rebar.' },
      { q: 'How much does a ton of asphalt cover?', a: 'One ton of hot-mix asphalt covers approximately 80 square feet at 2 inches thick, 55 square feet at 3 inches thick, or 40 square feet at 4 inches thick. For residential driveways, plan on about 1 ton per 80 sq ft at standard 2-inch overlay thickness.' },
      { q: 'How many bricks are in a square foot?', a: 'Standard modular bricks (3-5/8" × 2-1/4" × 7-5/8") laid in running bond use approximately 7.5 bricks per square foot including 3/8" mortar joints. Larger "queen" size bricks use about 5.76 per sq ft; smaller "closure" bricks use about 9 per sq ft. Always add 10% for waste and cuts.' },
      { q: 'How do I calculate how many sheets of drywall I need?', a: 'Calculate the total wall and ceiling area in square feet, subtract major openings (doors, windows) at 50% of their area (since you cut around them anyway), then divide by 32 (the area of a standard 4×8 sheet). Add 10% for waste and cuts. Our drywall calculator does this automatically.' },
      { q: 'How many gallons of paint do I need?', a: 'One gallon of quality paint covers approximately 350–400 square feet per coat. Calculate your wall area (perimeter × wall height), subtract doors and windows, then divide by 400 for one coat. Double for two coats. Our paint calculator uses 400 sq ft/gallon as the standard coverage rate.' },
    ],
  },
  {
    slug: 'pavers-outdoor',
    name: 'Pavers & Outdoor',
    description: 'Plan paver installations, base materials, and retaining walls.',
    icon: '🧱',
    intro: `A paver installation is only as good as its base. The most common reason pavers shift, settle, crack, or become uneven has nothing to do with the pavers themselves; it's an inadequate base. Professional installers know that the base preparation accounts for 80% of the work and nearly all of the long-term performance.

Our pavers and outdoor calculators cover every layer of a proper installation: the compacted aggregate base (4–6 inches of crushed stone), the bedding sand layer (exactly 1 inch of concrete sand), the pavers themselves, and the polymeric joint sand that locks them together. Calculate each layer separately using our individual calculators, then aggregate your material list for a single supplier order.

Beyond paver patios and driveways, this category includes retaining wall block calculators for landscape walls, tile calculations for outdoor kitchens and pool surrounds, and fence material estimators for perimeter fencing. Each calculator accounts for standard waste factors and outputs quantities in the units your local supplier uses.

Material quality matters enormously for outdoor installations. Use Class II road base or equivalent compactable aggregate (not round stone) for the base. Use coarse concrete sand (not play sand or mason sand) for the bedding layer. These are not aesthetic choices; they are structural requirements that determine whether your installation lasts 5 years or 25.`,
    guide: `Paver installation sequence: (1) Excavate to the correct depth: base depth + 1" sand + paver thickness + 1" below grade for finished height. (2) Compact native soil. (3) Lay and compact aggregate base in 2" lifts. (4) Screed 1" sand layer. (5) Lay pavers. (6) Compact pavers into sand. (7) Sweep polymeric joint sand. Each calculator in this category targets one of these steps.`,
    faqs: [
      { q: 'How thick should a paver base be?', a: 'Patios and walkways: 4 inches of compacted aggregate base. Driveways with vehicle traffic: 6–8 inches of compacted base. High-traffic commercial applications: 8–12 inches. Always add the compacted sand layer (1 inch) on top of the base before setting pavers.' },
      { q: 'What type of sand goes under pavers?', a: 'Use coarse concrete sand (also called all-purpose sand or manufactured sand) for the bedding layer. Do not use play sand, masonry sand, or limestone screenings; these are too fine and will allow pavers to sink and shift. The bedding layer should be exactly 1 inch deep after screeding.' },
      { q: 'How many pavers do I need per square foot?', a: 'It depends on paver size. 4×8" brick pavers: 4.5 per sq ft. 6×6" pavers: 4 per sq ft. 6×9" pavers: 2.67 per sq ft. 12×12" pavers: 1 per sq ft. 12×24" pavers: 0.5 per sq ft. Always add 5–10% for cuts and waste.' },
      { q: 'Do I need edge restraints for pavers?', a: 'Yes, edge restraints are required. Without them, pavers will spread laterally over time. Use plastic or aluminum paver edge restraint with 10" spikes driven at 12" intervals. For curves, use flexible edge restraint. Concrete curbing or existing structures can also serve as edge restraints.' },
      { q: 'How deep should a retaining wall be buried?', a: 'Bury the first course of retaining wall blocks at least 1 inch per foot of wall height above grade. For a 3-foot wall, bury 3 inches; for a 4-foot wall, bury 4 inches. This provides stability and prevents erosion from undermining the base course.' },
      { q: 'How many 12×12 tiles do I need for a 100 sq ft patio?', a: '12×12" tiles cover exactly 1 square foot each. For 100 square feet, buy 110 tiles (100 + 10% waste for cuts). For diagonal or herringbone patterns, increase waste to 15–20%.' },
      { q: 'How much does it cost to install pavers per square foot?', a: 'DIY material cost runs $2–8 per sq ft for concrete pavers, $6–15 for natural stone. Professional installation adds $8–20 per sq ft for labor. Total installed cost: $10–35 per sq ft. A 200 sq ft patio typically costs $2,000–7,000 professionally installed.' },
    ],
  },
  {
    slug: 'lumber-woodworking',
    name: 'Lumber & Woodworking',
    description: 'Calculate board feet, lumber quantities, and wood volumes.',
    icon: '🪵',
    intro: `Lumber purchasing requires a different kind of calculation than bulk materials like gravel or concrete. Instead of cubic yards, the lumber industry uses board feet, a unit of volume that accounts for a board's thickness, width, and length simultaneously. Understanding this unit is essential for accurate purchasing, especially for hardwoods where the price per board foot varies dramatically by species.

A board foot is defined as a piece of wood 1 inch thick × 12 inches wide × 12 inches long (144 cubic inches). This standard unit allows easy comparison across different board dimensions. A 2×6×16 ft board contains 16 board feet. A 4×4×8 ft post contains 10.67 board feet. Our board foot calculator handles all of these conversions instantly, including fractional dimensions common in hardwood purchasing (4/4, 5/4, 8/4 rough lumber).

Beyond hardwood purchasing, lumber calculations for construction and finish carpentry involve counting pieces: how many 2×10s for a deck frame, how many 5/4×6 decking boards to cover 400 square feet, how many pickets for 150 linear feet of fence. Our lumber, decking, and fence calculators handle these piece counts, adding appropriate waste factors for each application.

The key insight most beginners miss: nominal lumber dimensions are always larger than actual dimensions. A 2×4 actually measures 1.5" × 3.5". A 1×6 measures 0.75" × 5.5". Our calculators use actual dimensions for accuracy, which is why our piece counts are reliable when planning real projects.`,
    guide: `Lumber ordering tips: For framing lumber, add 15% waste. For decking boards, add 10% for standard patterns and 15–20% for diagonal or picture-frame layouts. For hardwood projects, add 30–35% for a combination of waste, defects, and grain matching. Always verify board lengths available at your supplier before calculating; not every length is stocked everywhere.`,
    faqs: [
      { q: 'What is a board foot of lumber?', a: 'A board foot (BF) is a unit of volume equal to 144 cubic inches, equivalent to a board 1 inch thick × 12 inches wide × 12 inches long. It is the standard unit for hardwood lumber pricing. Softwood framing lumber is sold by the linear foot or piece, not by the board foot.' },
      { q: 'How do I calculate board feet?', a: 'Use the formula: Board Feet = (Thickness in inches × Width in inches × Length in feet) ÷ 12. For example, a 2×6×16 ft board = (2 × 6 × 16) ÷ 12 = 16 board feet. Our board foot calculator handles this instantly for any dimensions.' },
      { q: 'What is the actual size of a 2×4?', a: 'A nominal 2×4 actually measures 1.5 inches × 3.5 inches. All dimensional lumber is smaller than its nominal name suggests due to drying and surfacing. Other common actual sizes: 2×6 = 1.5"×5.5", 2×8 = 1.5"×7.25", 2×10 = 1.5"×9.25", 4×4 = 3.5"×3.5".' },
      { q: 'How much lumber do I need for a deck?', a: 'A 12×16 ft deck (192 sq ft) using 5/4×6 decking boards with 1/4" gaps needs approximately 34 boards at 16 feet long. Add 10% waste for a total of 37–38 boards. For the framing below, you will also need rim joists, inner joists at 16" spacing, and posts.' },
      { q: 'What is the Doyle log rule?', a: 'The Doyle Rule is a formula for estimating the board foot yield of a log: BF = ((Small-end diameter - 4)² × Length) ÷ 16. It is the standard scale used in the eastern United States for hardwood timber sales. Note that it significantly underestimates yield for logs under 12 inches in diameter.' },
      { q: 'How many pickets do I need for a fence?', a: 'Standard 3.5"-wide pickets with 1.5" gaps use about 4.6 pickets per linear foot of fence. For 100 linear feet, that is approximately 460 pickets plus 10% waste. Our fence calculator determines picket count, post count, and rail count all at once.' },
      { q: 'What is the best wood for outdoor decking?', a: 'Pressure-treated (PT) lumber is the most common and affordable choice for deck framing and decking. Cedar and redwood are naturally rot-resistant and visually appealing but cost more. Composite decking requires no maintenance but costs significantly more upfront. Our decking calculator works for all board sizes regardless of species.' },
    ],
  },
];

// ── Calculators ────────────────────────────────────────────────────────────────

export const calculators: Calculator[] = [
  // ══ LANDSCAPING (17) ══════════════════════════════════════════════════════════
  {
    slug: 'gravel-calculator',
    name: 'Gravel Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate how much gravel you need for driveways, paths, and landscaping.',
    description: 'Accurately calculate the volume and weight of gravel needed for any project: driveways, garden paths, drainage beds, and more. Supports cubic yards, cubic feet, tons, and bags.',
    seoTitle: 'Gravel Calculator – Cubic Yards, Tons & Bags | Yard Metric',
    seoDescription: 'Free gravel calculator: enter length, width, and depth to get cubic yards, tons, and bag count instantly. Covers driveways, paths, drainage, and garden beds.',
    icon: '⬛',
    calcMode: 'volume',
    defaultDepth: 3,
    density: 2800,
    bagWeight: 50,
    related: ['crushed-stone-calculator', 'pea-gravel-calculator', 'sand-calculator', 'mulch-calculator', 'topsoil-calculator', 'fill-dirt-calculator', 'aggregate-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × Density ÷ 2000',
    formulaNote: 'Depth is in inches. Divide by 324 to convert sq ft × inches to cubic yards. Standard gravel density is ~2,800 lbs/yd³.',
    examples: [
      { title: 'Standard Driveway', width: 12, length: 50, depth: 4, unit: 'ft' },
      { title: 'Garden Path', width: 3, length: 20, depth: 2, unit: 'ft' },
      { title: 'Drainage Bed', width: 2, length: 10, depth: 6, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much gravel do I need?', a: 'Multiply length (ft) × width (ft) × depth (in) then divide by 324 to get cubic yards. For example, a 10×10 ft area at 3 inches deep needs 0.93 cubic yards (about 1.3 tons). Use our gravel calculator above to get instant results for any dimensions.' },
      { q: 'How much gravel do I need for a driveway?', a: 'A standard 12×50 ft driveway at 4 inches deep needs about 7.4 cubic yards or roughly 10 tons of gravel. At 6 inches deep for heavy vehicles, that increases to about 11 cubic yards. Always order 5–10% extra for compaction.' },
      { q: 'How do I calculate gravel in tons?', a: 'First calculate cubic yards (length × width × depth ÷ 324), then multiply by 1.4 for standard crushed gravel. For pea gravel use 1.3 tons/yd³. Our gravel calculator converts to tons automatically.' },
      { q: 'How do I calculate gravel by square feet?', a: 'Multiply your square footage by the depth in inches, then divide by 324 to get cubic yards. A 100 sq ft area at 3 inches deep needs 0.93 cubic yards. At 4 inches, you need 1.23 cubic yards.' },
      { q: 'How deep should gravel be for a driveway?', a: 'Most driveways use 4–6 inches of compacted gravel. For heavy vehicles or trucks, use 6 inches minimum over a stable sub-base. Light-traffic paths can use 2–3 inches.' },
      { q: 'How many tons is a cubic yard of gravel?', a: 'Standard crushed gravel weighs about 1.4 tons per cubic yard. Pea gravel is slightly lighter at ~1.3 tons/yd³. Our calculator applies accurate density values automatically.' },
      { q: 'How many 50-lb bags of gravel do I need?', a: 'One cubic yard weighs ~2,800 lbs, so you need about 56 bags of 50-lb gravel per cubic yard. For small areas, bags are convenient; for anything over half a cubic yard, bulk delivery is more cost-effective.' },
    ],
  },
  {
    slug: 'pea-gravel-calculator',
    name: 'Pea Gravel Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Find out how much pea gravel you need for playgrounds, paths, and gardens.',
    description: 'Calculate pea gravel quantities for playgrounds, garden beds, drainage areas, and decorative paths. Pea gravel is lighter than crushed stone; use our accurate density values.',
    seoTitle: 'Pea Gravel Calculator – Cubic Yards, Tons & Bags | Yard Metric',
    seoDescription: 'Free pea gravel calculator: enter length, width, and depth to get cubic yards, tons, and bags. Covers playgrounds, garden paths, drainage, and decorative areas.',
    icon: '🟡',
    calcMode: 'volume',
    defaultDepth: 2,
    density: 2600,
    bagWeight: 50,
    related: ['gravel-calculator', 'river-rock-calculator', 'sand-calculator', 'mulch-calculator', 'paver-base-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.3',
    formulaNote: 'Pea gravel has a density of approximately 2,600 lbs/yd³ (~1.3 tons/yd³), slightly less than crushed stone.',
    examples: [
      { title: 'Playground Area', width: 15, length: 15, depth: 3, unit: 'ft' },
      { title: 'Garden Border', width: 2, length: 30, depth: 2, unit: 'ft' },
      { title: 'Patio Surround', width: 8, length: 8, depth: 2, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much pea gravel do I need?', a: 'Multiply length (ft) × width (ft) × depth (in), then divide by 324 to get cubic yards. For example, a 10×10 ft area at 2 inches deep needs 0.62 cubic yards (about 0.8 tons). Use the pea gravel calculator above for any dimensions.' },
      { q: 'How many tons of pea gravel do I need?', a: 'Pea gravel weighs approximately 1.3 tons per cubic yard. Calculate cubic yards first (length × width × depth ÷ 324), then multiply by 1.3 for tons. Our calculator converts automatically.' },
      { q: 'How much pea gravel per square foot?', a: 'At 2 inches deep, you need 0.006 cubic yards per square foot (1 cubic yard covers about 162 sq ft). At 3 inches deep, 1 cubic yard covers 108 sq ft.' },
      { q: 'How deep should pea gravel be for a playground?', a: 'For fall protection under playground equipment, use at least 6 inches of pea gravel. ASTM standards recommend 9–12 inches for equipment over 7 ft tall. Our calculator lets you enter any depth to get exact quantities.' },
      { q: 'How much does a 50-lb bag of pea gravel cover?', a: 'A 50-lb bag of pea gravel covers about 3 square feet at 2 inches deep, or about 2 sq ft at 3 inches deep. For larger areas, bulk delivery by the ton is far more cost-effective.' },
      { q: 'Does pea gravel need to be compacted?', a: 'Unlike crushed stone, pea gravel does not compact well because the rounded edges prevent interlocking. This shifting is desirable for drainage and playgrounds but makes it unsuitable for driveways and structural bases.' },
    ],
  },
  {
    slug: 'sand-calculator',
    name: 'Sand Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate sand needed for paver bases, sandboxes, and leveling.',
    description: 'Calculate the amount of sand required for paver bases, sandboxes, beach volleyball courts, mortar mixes, and leveling applications. Supports multiple sand types and densities.',
    seoTitle: 'Sand Calculator – Cubic Yards, Tons & Bags | Yard Metric',
    seoDescription: 'Free sand calculator: enter length, width, and depth to get cubic yards, tons, and bags. Covers paver bases, sandboxes, volleyball courts, and leveling.',
    icon: '🟤',
    calcMode: 'volume',
    defaultDepth: 1,
    density: 2700,
    bagWeight: 50,
    related: ['paver-sand-calculator', 'gravel-calculator', 'paver-calculator', 'paver-base-calculator', 'soil-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.35',
    formulaNote: 'Dry sand weighs approximately 2,700 lbs/yd³. Wet or compacted sand can be up to 10% heavier.',
    examples: [
      { title: 'Sandbox', width: 6, length: 6, depth: 6, unit: 'ft' },
      { title: 'Paver Setting Bed', width: 10, length: 12, depth: 1, unit: 'ft' },
      { title: 'Volleyball Court Fill', width: 30, length: 60, depth: 12, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much sand do I need?', a: 'Multiply length (ft) × width (ft) × depth (in), then divide by 324 to get cubic yards. A 10×10 ft area at 2 inches deep needs 0.62 cubic yards. For a sandbox at 6 inches deep, that same 100 sq ft needs 1.85 cubic yards.' },
      { q: 'How much sand do I need in tons?', a: 'Sand weighs approximately 1.35 tons per cubic yard. Calculate cubic yards first, then multiply by 1.35 for tons. Our calculator converts automatically with accurate density values.' },
      { q: 'How much sand per square foot?', a: 'At 1 inch deep (standard paver setting bed), you need 0.003 cubic yards per square foot. At 6 inches deep (sandbox), you need 0.019 cubic yards per sq ft. Our calculator handles any depth.' },
      { q: 'How much sand do I need for a paver base?', a: 'A standard 1-inch bedding sand layer under pavers needs about 0.31 cubic yards per 100 square feet, or about 17 bags of 50-lb sand. Use coarse concrete sand, not play sand.' },
      { q: 'What type of sand should I use under pavers?', a: 'Use coarse concrete sand (also called all-purpose or manufactured sand) for the paver setting bed. Play sand is too fine and will shift over time. For joint sand, use polymeric sand after pavers are laid.' },
      { q: 'How many 50-lb bags of sand do I need?', a: 'A 50-lb bag of sand covers about 3–4 sq ft at 1 inch deep. One cubic yard equals about 54 bags of 50-lb sand. For any area larger than a small sandbox, bulk delivery is more economical.' },
    ],
  },
  {
    slug: 'paver-sand-calculator',
    name: 'Paver Sand Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate the exact sand needed for your paver installation setting bed.',
    description: 'Determine the precise amount of bedding sand required under pavers. Calculate by area with standard 1-inch depth, or enter a custom depth for unusual applications.',
    seoTitle: 'Paver Sand Calculator – Bedding Sand for Any Patio | Yard Metric',
    seoDescription: 'Calculate exactly how much bedding sand you need under pavers. Enter area dimensions and get cubic yards and bags for a standard 1-inch concrete sand setting bed.',
    icon: '🟫',
    calcMode: 'volume',
    defaultDepth: 1,
    density: 2700,
    bagWeight: 50,
    related: ['sand-calculator', 'paver-calculator', 'paver-base-calculator', 'gravel-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × 1 inch) ÷ 324\nBags = Volume × 54',
    formulaNote: 'Standard paver sand setting bed is exactly 1 inch (25mm) deep after compaction. Use concrete sand, not play sand.',
    examples: [
      { title: 'Patio (10×12)', width: 10, length: 12, depth: 1, unit: 'ft' },
      { title: 'Walkway (3×20)', width: 3, length: 20, depth: 1, unit: 'ft' },
      { title: 'Driveway (12×20)', width: 12, length: 20, depth: 1, unit: 'ft' },
    ],
    faqs: [
      { q: 'How thick should the sand layer be under pavers?', a: 'The sand setting bed should be exactly 1 inch (25mm) deep after compaction. More than 1.5 inches causes instability.' },
      { q: 'Can I use play sand under pavers?', a: 'No, use coarse concrete sand or manufactured sand. Play sand is too fine and will wash out or shift over time.' },
      { q: 'Do I need to compact the sand before laying pavers?', a: 'Screed (level) the sand with a screed board, but do not compact it before laying pavers. Compact only after the pavers are laid.' },
    ],
  },
  {
    slug: 'mulch-calculator',
    name: 'Mulch Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Find out how many cubic yards or bags of mulch you need.',
    description: 'Calculate mulch quantities for garden beds, tree rings, and landscaping borders. Get results in cubic yards, cubic feet, and number of bags. Covers bark mulch, wood chips, and shredded mulch.',
    seoTitle: 'Mulch Calculator – Cubic Yards & Bags | Yard Metric',
    seoDescription: 'Free mulch calculator: enter length, width, and depth to get cubic yards and bags instantly. Covers garden beds, tree rings, and landscaping borders at any depth.',
    icon: '🍂',
    calcMode: 'volume',
    defaultDepth: 3,
    density: 600,
    bagWeight: 2,
    related: ['rubber-mulch-calculator', 'topsoil-calculator', 'compost-calculator', 'gravel-calculator', 'fill-dirt-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nBags = Volume × 13.5 (2 cu ft bags)',
    formulaNote: 'Mulch weighs approximately 400–800 lbs/yd³ depending on type. A standard bag is 2 cubic feet.',
    examples: [
      { title: 'Garden Bed', width: 8, length: 12, depth: 3, unit: 'ft' },
      { title: 'Tree Ring', width: 6, length: 6, depth: 4, unit: 'ft' },
      { title: 'Large Border', width: 4, length: 50, depth: 3, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much mulch do I need?', a: 'Multiply length (ft) × width (ft) × depth (in), then divide by 324 to get cubic yards. A 100 sq ft garden bed at 3 inches deep needs 0.93 cubic yards. Use the mulch calculator above for any area.' },
      { q: 'How much mulch do I need in cubic yards?', a: 'To get cubic yards: multiply your square footage by the depth in inches, then divide by 324. A 200 sq ft bed at 3 inches deep needs 1.85 cubic yards. At 2 inches deep, that drops to 1.23 cubic yards.' },
      { q: 'How much mulch per square foot?', a: 'At 3 inches deep (standard), 1 cubic yard covers 108 square feet. At 2 inches, it covers 162 sq ft. At 4 inches, it covers 81 sq ft. Our calculator outputs this automatically.' },
      { q: 'How much mulch do I need for a garden bed?', a: 'An 8×12 ft garden bed at 3 inches deep needs about 0.9 cubic yards or 12 bags (2 cu ft each). A 10×20 ft bed at 3 inches needs 1.85 cubic yards or about 25 bags.' },
      { q: 'How many bags of mulch are in a cubic yard?', a: 'One cubic yard equals 27 cubic feet. Standard 2 cu ft bags: you need 13–14 bags per cubic yard. Standard 3 cu ft bags: 9 bags per cubic yard. Our calculator outputs both bag counts.' },
      { q: 'How deep should mulch be?', a: 'Apply 2–4 inches for most plants. Two inches works for established beds; 3–4 inches for new beds or areas with heavy weed pressure. Never apply more than 4 inches; excessive mulch can suffocate roots and cause stem rot.' },
      { q: 'How often should I replace mulch?', a: 'Organic mulch (wood chips, bark, shredded leaves) breaks down over 1–2 years. Top up in spring to maintain 2–4 inch depth rather than removing old mulch, which adds organic matter to the soil.' },
    ],
  },
  {
    slug: 'rubber-mulch-calculator',
    name: 'Rubber Mulch Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate rubber mulch for playgrounds and landscaping.',
    description: 'Calculate rubber mulch quantities for playground safety surfaces, garden paths, and low-maintenance landscaping. Rubber mulch is denser than wood mulch; use our accurate values.',
    seoTitle: 'Rubber Mulch Calculator – Cubic Yards & Bags | Yard Metric',
    seoDescription: 'Rubber mulch calculator for playgrounds and landscaping. Get cubic yards, weight, and bags. Includes ASTM-compliant depth guidance for playground safety surfaces.',
    icon: '⚫',
    calcMode: 'volume',
    defaultDepth: 6,
    density: 1600,
    bagWeight: 38,
    related: ['mulch-calculator', 'pea-gravel-calculator', 'sand-calculator', 'compost-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (lbs) = Volume × 1,600',
    formulaNote: 'Rubber mulch is approximately 1,600 lbs/yd³, about twice the weight of wood mulch.',
    examples: [
      { title: 'Playground (ASTM 6")', width: 15, length: 20, depth: 6, unit: 'ft' },
      { title: 'Garden Path', width: 3, length: 15, depth: 3, unit: 'ft' },
    ],
    faqs: [
      { q: 'How deep should rubber mulch be for a playground?', a: 'ASTM standards require at least 6 inches of rubber mulch under playground equipment up to 7 ft high. Use 9–12 inches for taller equipment.' },
      { q: 'How much does rubber mulch weigh vs wood mulch?', a: 'Rubber mulch weighs about 1,600 lbs/yd³ while wood mulch is only 400–800 lbs/yd³, making it roughly twice as heavy per volume.' },
      { q: 'Does rubber mulch last longer than wood mulch?', a: 'Yes, rubber mulch can last 10+ years without decomposing, compared to 1–2 years for wood mulch.' },
    ],
  },
  {
    slug: 'topsoil-calculator',
    name: 'Topsoil Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate cubic yards of topsoil needed for lawns and gardens.',
    description: 'Calculate how much topsoil you need to fill garden beds, level lawns, or establish new turf. Get results in cubic yards, tons, and number of bags.',
    seoTitle: 'Topsoil Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Free topsoil calculator: enter dimensions to get cubic yards, tons, and bags. Covers new lawns, raised garden beds, and lawn leveling at any depth.',
    icon: '🌱',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 2200,
    bagWeight: 40,
    related: ['fill-dirt-calculator', 'soil-calculator', 'compost-calculator', 'mulch-calculator', 'gravel-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.1',
    formulaNote: 'Screened topsoil weighs approximately 2,000–2,500 lbs/yd³ depending on moisture content.',
    examples: [
      { title: 'New Lawn (100 sq ft)', width: 10, length: 10, depth: 4, unit: 'ft' },
      { title: 'Raised Garden Bed', width: 4, length: 8, depth: 12, unit: 'ft' },
      { title: 'Lawn Leveling', width: 20, length: 30, depth: 2, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much topsoil covers 1000 square feet?', a: 'At 4 inches deep, 1,000 sq ft needs about 12.3 cubic yards of topsoil. At 6 inches deep, you need about 18.5 cubic yards.' },
      { q: 'How deep should topsoil be for a lawn?', a: 'New lawns need at least 4–6 inches of quality topsoil for healthy grass root development.' },
      { q: 'What is the difference between topsoil and fill dirt?', a: 'Topsoil is the nutrient-rich upper layer of soil used for growing plants. Fill dirt is subsoil used to raise grades and fill holes; it lacks nutrients.' },
    ],
  },
  {
    slug: 'fill-dirt-calculator',
    name: 'Fill Dirt Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Estimate fill dirt needed to level or raise ground elevation.',
    description: 'Calculate the volume of fill dirt needed to raise elevation, fill holes, or level uneven ground. Get results in cubic yards and tons for ordering from landscaping suppliers.',
    seoTitle: 'Fill Dirt Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Fill dirt calculator: enter length, width, and depth to get cubic yards and tons. Add 10–15% for compaction factor. Covers raised pads, low spots, and grading.',
    icon: '🏔️',
    calcMode: 'volume',
    defaultDepth: 6,
    density: 2100,
    bagWeight: 40,
    related: ['topsoil-calculator', 'soil-calculator', 'gravel-calculator', 'sand-calculator', 'mulch-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.05',
    formulaNote: 'Fill dirt weighs approximately 1,900–2,300 lbs/yd³. Add 10–15% for compaction factor.',
    examples: [
      { title: 'Raised Pad', width: 20, length: 30, depth: 12, unit: 'ft' },
      { title: 'Low Spot Fill', width: 8, length: 10, depth: 6, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many cubic yards of fill dirt do I need?', a: 'Divide the volume in cubic feet by 27 to convert to cubic yards. Our calculator does this automatically from your dimensions.' },
      { q: 'Does fill dirt compact after settling?', a: 'Yes, fill dirt typically settles 10–15% after compaction. Add this buffer to your order.' },
      { q: 'How much does a dump truck of fill dirt weigh?', a: 'A standard dump truck holds 10–14 cubic yards of fill dirt, which weighs approximately 10–15 tons.' },
    ],
  },
  // ── NEW: Landscaping ────────────────────────────────────────────────────────
  {
    slug: 'crushed-stone-calculator',
    name: 'Crushed Stone Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate crushed stone for driveways, drainage, and base layers.',
    description: 'Calculate the exact amount of crushed stone needed for driveways, drainage trenches, French drains, and compacted base layers. Crushed stone compacts better than gravel, making it ideal for structural applications.',
    seoTitle: 'Crushed Stone Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Crushed stone calculator: enter dimensions to get cubic yards and tons. Covers driveway bases, French drains, drainage trenches, and compacted structural layers.',
    icon: '🪨',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 2700,
    bagWeight: 50,
    related: ['gravel-calculator', 'aggregate-calculator', 'crusher-run-calculator', 'road-base-calculator', 'paver-base-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.35',
    formulaNote: 'Crushed stone (limestone, granite, trap rock) weighs approximately 2,700 lbs/yd³. Density varies by rock type.',
    examples: [
      { title: 'Driveway Base', width: 12, length: 50, depth: 4, unit: 'ft' },
      { title: 'French Drain', width: 1.5, length: 30, depth: 12, unit: 'ft' },
      { title: 'Patio Base', width: 12, length: 16, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is the difference between crushed stone and gravel?', a: 'Crushed stone is mechanically crushed rock with angular edges that interlock when compacted. Gravel is naturally rounded stone. Crushed stone compacts better and is preferred for structural base layers; gravel is preferred for drainage and decorative applications.' },
      { q: 'What size crushed stone should I use for a driveway?', a: '#57 stone (3/4") is the most common choice for driveways; it compacts well and allows drainage. #21A (3/4" minus) is better if you need a tighter, harder surface.' },
      { q: 'How many tons of crushed stone per cubic yard?', a: 'Crushed stone weighs approximately 1.35 tons per cubic yard, depending on the rock type. Limestone is slightly lighter; trap rock is denser.' },
    ],
  },
  {
    slug: 'river-rock-calculator',
    name: 'River Rock Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate river rock for landscaping, dry creek beds, and water features.',
    description: 'Calculate river rock quantities for dry creek beds, water features, rain gardens, landscape borders, and decorative ground cover. River rocks are rounded natural stones used for drainage and decoration.',
    seoTitle: 'River Rock Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'River rock calculator: get cubic yards and tons for dry creek beds, water features, and landscape borders. Enter area and depth for instant delivery quantities.',
    icon: '🌊',
    calcMode: 'volume',
    defaultDepth: 3,
    density: 2800,
    bagWeight: 50,
    related: ['landscape-rock-calculator', 'pea-gravel-calculator', 'stone-calculator', 'gravel-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.4',
    formulaNote: 'River rock weighs approximately 2,800 lbs/yd³ (1.4 tons/yd³). Larger rocks have slightly lower bulk density than small river pebbles.',
    examples: [
      { title: 'Dry Creek Bed', width: 3, length: 25, depth: 4, unit: 'ft' },
      { title: 'Landscape Border', width: 2, length: 40, depth: 3, unit: 'ft' },
      { title: 'Water Feature Surround', width: 6, length: 8, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'How deep should river rock be for landscaping?', a: 'For decorative ground cover: 2–3 inches. For dry creek beds: 4–6 inches. For areas with erosion risk or heavy rain flow: 4–8 inches depending on the water velocity.' },
      { q: 'What size river rock is best for a dry creek bed?', a: 'Use a mix of sizes for a natural appearance: 1.5–3" cobbles for the main bed, 4–8" stepping stones as focal points, and 3/4" pea gravel at the edges.' },
      { q: 'How much does river rock cost per ton?', a: 'River rock typically costs $35–75 per ton for standard sizes, or $100–300+ per ton for specialty cobbles and boulders, depending on your region and source.' },
    ],
  },
  {
    slug: 'landscape-rock-calculator',
    name: 'Landscape Rock Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate landscape rocks and decorative stone for garden areas.',
    description: 'Calculate the amount of landscape rock, decorative stone, and ornamental gravel needed for garden areas, foundation plantings, and slope stabilization.',
    seoTitle: 'Landscape Rock Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Calculate decorative landscape rock and ornamental stone in cubic yards and tons. Covers foundation plantings, slope stabilization, and garden features.',
    icon: '💎',
    calcMode: 'volume',
    defaultDepth: 2,
    density: 2600,
    bagWeight: 50,
    related: ['river-rock-calculator', 'crushed-stone-calculator', 'stone-calculator', 'gravel-calculator', 'mulch-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.3',
    formulaNote: 'Decorative landscape rock bulk density is approximately 2,600 lbs/yd³ for smaller angular stone.',
    examples: [
      { title: 'Foundation Planting', width: 3, length: 40, depth: 2, unit: 'ft' },
      { title: 'Slope Cover', width: 8, length: 20, depth: 3, unit: 'ft' },
      { title: 'Garden Feature', width: 6, length: 6, depth: 3, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much landscape rock do I need per square foot?', a: 'At 2 inches deep, you need 0.006 cubic yards per square foot (about 1 cubic yard covers 162 sq ft). At 3 inches deep, 1 cubic yard covers 108 sq ft.' },
      { q: 'Does landscape rock need a weed barrier?', a: 'Yes, always install a permeable landscape fabric under decorative rock. Without it, soil will work up through the rock over time, creating a weeding nightmare.' },
      { q: 'What is the best landscape rock to keep weeds away?', a: '3/4" angular crushed stone or pea gravel works well with landscape fabric beneath. Avoid fine gravel or sand, as it allows weed seeds to germinate more easily.' },
    ],
  },
  {
    slug: 'soil-calculator',
    name: 'Soil Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate soil volume for garden beds, raised beds, and lawn repair.',
    description: 'Calculate the volume of soil needed for garden beds, raised planters, lawn topdressing, and general earthwork projects. Covers standard, premium, and blended soil mixes.',
    seoTitle: 'Soil Calculator – Cubic Yards for Raised Beds & Gardens | Yard Metric',
    seoDescription: 'Soil calculator: enter raised bed or garden dimensions to get cubic yards and bags. Covers raised planters, garden plots, and lawn topdressing at any depth.',
    icon: '🌍',
    calcMode: 'volume',
    defaultDepth: 6,
    density: 2000,
    bagWeight: 40,
    related: ['topsoil-calculator', 'fill-dirt-calculator', 'compost-calculator', 'mulch-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.0',
    formulaNote: 'General-purpose garden soil weighs approximately 1,800–2,200 lbs/yd³ depending on composition and moisture.',
    examples: [
      { title: 'Raised Bed (4×8)', width: 4, length: 8, depth: 12, unit: 'ft' },
      { title: 'Garden Plot', width: 10, length: 20, depth: 6, unit: 'ft' },
      { title: 'Lawn Top Dress', width: 20, length: 30, depth: 0.5, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much soil do I need for a raised garden bed?', a: 'A 4×8 ft raised bed at 12 inches deep needs about 1.2 cubic yards of soil. A 4×8 at 6 inches deep needs 0.6 cubic yards.' },
      { q: 'What is the best soil mix for a raised garden bed?', a: 'The "Mel\'s Mix" formula is popular: 1/3 compost, 1/3 peat moss or coconut coir, 1/3 coarse perlite or vermiculite. For simpler beds, a blend of 60% topsoil and 40% compost works well.' },
      { q: 'How many bags of soil do I need?', a: 'A 1.5 cubic foot bag of potting soil covers about 1.5 sq ft at 12 inches deep, or 3 sq ft at 6 inches. A 40-lb bag covers roughly the same volume. Use our calculator for exact quantities.' },
    ],
  },
  {
    slug: 'compost-calculator',
    name: 'Compost Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate how much compost you need for garden beds and lawns.',
    description: 'Calculate compost quantities for amending garden soil, lawn topdressing, and raised bed mixes. Compost is much lighter than mineral soil; use our accurate bulk density values.',
    seoTitle: 'Compost Calculator – Cubic Yards & Bags | Yard Metric',
    seoDescription: 'Compost calculator: enter area and depth to get cubic yards and bags. Covers garden bed amendments, lawn topdressing, and raised bed mixes at accurate density.',
    icon: '♻️',
    calcMode: 'volume',
    defaultDepth: 2,
    density: 800,
    bagWeight: 40,
    related: ['soil-calculator', 'topsoil-calculator', 'mulch-calculator', 'fill-dirt-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (lbs) = Volume × 800',
    formulaNote: 'Compost weighs approximately 700–1,000 lbs/yd³, far lighter than mineral soil. A 40-lb bag is about 1–1.5 cubic feet.',
    examples: [
      { title: 'Lawn Topdressing', width: 20, length: 30, depth: 0.5, unit: 'ft' },
      { title: 'Garden Bed Amendment', width: 10, length: 15, depth: 2, unit: 'ft' },
      { title: 'Raised Bed Mix (⅓)', width: 4, length: 8, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much compost do I need to add to my garden?', a: 'For new beds: apply 2–4 inches of compost and till 6 inches deep. For established beds: 1–2 inches as an annual top dressing is enough.' },
      { q: 'How many bags of compost per cubic yard?', a: 'A standard 40-lb bag of compost is about 1–1.5 cubic feet. One cubic yard (27 cubic feet) requires approximately 18–27 bags.' },
      { q: 'Can I use too much compost?', a: 'Yes, more than 30–40% compost in a soil mix can cause nutrient imbalances (especially excess phosphorus) and may actually reduce plant growth. Use compost as an amendment, not as a standalone growing medium.' },
    ],
  },
  {
    slug: 'stone-calculator',
    name: 'Stone Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate stone quantities for landscaping and hardscaping projects.',
    description: 'General-purpose stone calculator for landscaping, hardscaping, and drainage applications. Covers limestone, granite, sandstone, and other common stone types with accurate density values.',
    seoTitle: 'Stone Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Stone calculator for limestone, granite, sandstone, and all common types. Get cubic yards and tons for pathways, garden features, and drainage applications.',
    icon: '🪶',
    calcMode: 'volume',
    defaultDepth: 3,
    density: 2700,
    bagWeight: 50,
    related: ['crushed-stone-calculator', 'landscape-rock-calculator', 'river-rock-calculator', 'aggregate-calculator', 'gravel-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.35',
    formulaNote: 'Common stone (limestone, granite) has a bulk density of approximately 2,700 lbs/yd³. Denser stones like trap rock weigh more.',
    examples: [
      { title: 'Pathway (2×20)', width: 2, length: 20, depth: 3, unit: 'ft' },
      { title: 'Garden Feature', width: 6, length: 6, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much does a yard of stone weigh?', a: 'Most common stones (limestone, granite) weigh 1.3–1.4 tons per cubic yard. Dense trap rock can reach 1.5 tons/yd³.' },
      { q: 'What type of stone is best for landscaping?', a: 'Pea gravel and river rock for drainage and decorative beds; crushed limestone or granite for compacted base layers; flagstone for stepping paths; slate or decomposed granite for patios.' },
    ],
  },
  {
    slug: 'road-base-calculator',
    name: 'Road Base Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate road base material for driveways and compacted sub-bases.',
    description: 'Calculate the volume of road base (also called road mix, compactable base, or Class II base) needed for driveways, parking areas, and structural sub-bases. Road base compacts to a solid surface.',
    seoTitle: 'Road Base Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Road base calculator: enter driveway or parking area dimensions to get cubic yards and tons. Covers compactable base, road mix, and Class II aggregate sub-base.',
    icon: '🛤️',
    calcMode: 'volume',
    defaultDepth: 6,
    density: 3100,
    bagWeight: 50,
    related: ['crusher-run-calculator', 'crushed-stone-calculator', 'gravel-calculator', 'aggregate-calculator', 'asphalt-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.55',
    formulaNote: 'Compacted road base weighs approximately 3,100 lbs/yd³. Loose material is ~2,700 lbs/yd³ before compaction.',
    examples: [
      { title: 'Gravel Driveway Base', width: 12, length: 50, depth: 6, unit: 'ft' },
      { title: 'Parking Area Base', width: 20, length: 30, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is road base material?', a: 'Road base (also called crusher run, road mix, or compactable base) is a blend of crushed stone, rock dust, and fines that compacts into a solid, stable surface. It is the standard base material for driveways, roads, and parking areas.' },
      { q: 'How thick should road base be for a driveway?', a: 'Minimum 4 inches for light vehicles; 6 inches for standard passenger cars and SUVs; 8–12 inches for heavy trucks, RVs, or commercial vehicles.' },
      { q: 'Do I need to compact road base?', a: 'Yes, road base must be mechanically compacted with a plate compactor or roller to achieve its design strength. Loose road base will rut and shift under traffic.' },
    ],
  },
  {
    slug: 'crusher-run-calculator',
    name: 'Crusher Run Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate crusher run for driveways, bases, and compacted surfaces.',
    description: 'Calculate crusher run (also called crush and run, QP, or crusher fines) for driveway bases, paver sub-bases, and compacted utility paths. Crusher run is the most versatile compactable base material.',
    seoTitle: 'Crusher Run Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Crusher run calculator (crush and run, QP, crusher fines): enter dimensions to get cubic yards and tons. Covers driveway bases, paver sub-bases, and utility paths.',
    icon: '🔨',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 2700,
    bagWeight: 50,
    related: ['road-base-calculator', 'crushed-stone-calculator', 'gravel-calculator', 'aggregate-calculator', 'paver-base-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.35',
    formulaNote: 'Crusher run weighs approximately 2,700 lbs/yd³ loose. After compaction it achieves densities of 3,000–3,200 lbs/yd³.',
    examples: [
      { title: 'Driveway Base', width: 12, length: 40, depth: 4, unit: 'ft' },
      { title: 'Paver Sub-base', width: 12, length: 16, depth: 6, unit: 'ft' },
      { title: 'Utility Path', width: 4, length: 30, depth: 3, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is crusher run?', a: 'Crusher run is crushed stone combined with stone dust and fines, specifically the fraction that passes through a 3/4" screen after crushing. The mix of sizes allows it to compact tightly, unlike clean crushed stone.' },
      { q: 'Is crusher run the same as road base?', a: 'They are similar but not identical. Crusher run refers specifically to the mixed product from a crusher; road base can include crusher run but also other engineered blends. Both compact well.' },
      { q: 'How many tons of crusher run do I need per cubic yard?', a: 'Loose crusher run weighs approximately 1.35 tons per cubic yard. After compaction, the density increases to about 1.5–1.6 tons per compacted cubic yard.' },
    ],
  },
  {
    slug: 'aggregate-calculator',
    name: 'Aggregate Calculator',
    category: 'Landscaping',
    categorySlug: 'landscaping',
    shortDesc: 'Calculate aggregate for drainage, base layers, and concrete mixes.',
    description: 'Calculate aggregate (crushed stone, gravel, sand, or mixed aggregate) for drainage fields, structural base layers, and concrete/asphalt mixes. The most general-purpose stone volume calculator.',
    seoTitle: 'Aggregate Calculator – Cubic Yards & Tons | Yard Metric',
    seoDescription: 'Aggregate calculator for drainage fields, structural sub-bases, and concrete mixes. Get cubic yards and tons for any crushed stone, mixed aggregate, or sand.',
    icon: '🫙',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 2700,
    bagWeight: 50,
    related: ['crushed-stone-calculator', 'gravel-calculator', 'road-base-calculator', 'crusher-run-calculator', 'stone-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nWeight (tons) = Volume × 1.35',
    formulaNote: 'Standard aggregate (3/4" crushed stone) weighs approximately 2,700 lbs/yd³. Fine aggregate (sand) is ~2,700; coarse (gravel) is ~2,800.',
    examples: [
      { title: 'Drainage Field', width: 5, length: 20, depth: 12, unit: 'ft' },
      { title: 'Concrete Sub-base', width: 12, length: 24, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is the difference between aggregate and gravel?', a: 'Gravel is a type of aggregate: loose, naturally rounded stone. Aggregate is the broader category that includes gravel, crushed stone, sand, and other particulate materials used in construction.' },
      { q: 'What size aggregate for concrete?', a: 'Standard concrete uses 3/4" (#57) aggregate. Thin pours under 2 inches use 3/8" aggregate. Exposed-aggregate decorative concrete uses 1/2–3/4" rounded river gravel.' },
    ],
  },

  // ══ CONSTRUCTION (11) ═════════════════════════════════════════════════════════
  {
    slug: 'concrete-calculator',
    name: 'Concrete Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate concrete yardage for any pour: slabs, footings, and columns.',
    description: 'Calculate the amount of concrete needed for slabs, footings, columns, walls, and steps. Get results in cubic yards, cubic feet, and number of pre-mix bags.',
    seoTitle: 'Concrete Calculator – Cubic Yards & Bags | Yard Metric',
    seoDescription: 'Free concrete calculator: enter dimensions to get cubic yards, 60-lb and 80-lb bag counts. Covers slabs, footings, columns, walls, and steps. Add 5–10% overage.',
    icon: '🏛️',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 4050,
    bagWeight: 60,
    related: ['concrete-slab-calculator', 'rebar-calculator', 'asphalt-calculator', 'brick-calculator', 'block-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nBags (60 lb) = Volume × 45\nBags (80 lb) = Volume × 34',
    formulaNote: 'Concrete weighs approximately 4,050 lbs/yd³. Add 5–10% for waste and overflow.',
    examples: [
      { title: 'Garage Slab', width: 20, length: 24, depth: 4, unit: 'ft' },
      { title: 'Sidewalk', width: 4, length: 30, depth: 4, unit: 'ft' },
      { title: 'Footing', width: 1.5, length: 20, depth: 12, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much does a yard of concrete weigh?', a: 'A cubic yard of concrete weighs approximately 4,050 lbs (about 2 tons).' },
      { q: 'How many bags of concrete do I need?', a: 'One cubic yard requires approximately 45 bags of 60-lb mix or 34 bags of 80-lb mix.' },
      { q: 'How thick should a concrete slab be?', a: 'Residential slabs are typically 4 inches. Garage slabs with heavy vehicles need 5–6 inches. Driveways: 4–5 inches minimum.' },
    ],
  },
  {
    slug: 'concrete-slab-calculator',
    name: 'Concrete Slab Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate concrete for a flat slab: floors, patios, driveways.',
    description: 'Specialized calculator for concrete slab projects. Calculate volume, bags, and estimated cost for flat slabs including garage floors, patios, basement floors, and driveway replacements.',
    seoTitle: 'Concrete Slab Calculator – Cubic Yards & Bags | Yard Metric',
    seoDescription: 'Concrete slab calculator for garage floors, patios, and driveways. Enter slab dimensions to get cubic yards, 60-lb and 80-lb bag counts, and cost estimate.',
    icon: '⬜',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 4050,
    bagWeight: 60,
    related: ['concrete-calculator', 'rebar-calculator', 'asphalt-calculator', 'drywall-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Thickness) ÷ 324',
    formulaNote: 'Minimum slab thickness is 3.5 inches. Most residential applications use 4 inches. Always add 5–10% overage.',
    examples: [
      { title: 'Patio Slab', width: 12, length: 16, depth: 4, unit: 'ft' },
      { title: 'Garage Floor', width: 20, length: 20, depth: 4, unit: 'ft' },
      { title: 'Driveway Slab', width: 12, length: 40, depth: 5, unit: 'ft' },
    ],
    faqs: [
      { q: 'How do I calculate concrete for a slab?', a: 'Multiply length × width × thickness (all in feet) then divide by 27 to get cubic yards. Our calculator handles this automatically.' },
      { q: 'How long does a concrete slab take to cure?', a: 'Concrete reaches 70% strength in 7 days and full cure in 28 days. Light foot traffic is okay after 24–48 hours.' },
      { q: 'Do I need rebar in a concrete slab?', a: 'Rebar or wire mesh is recommended for most slabs. Use rebar for driveways and garage floors; wire mesh for patios and sidewalks.' },
    ],
  },
  {
    slug: 'asphalt-calculator',
    name: 'Asphalt Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate asphalt tonnage for driveways and parking lots.',
    description: 'Calculate the amount of asphalt (hot mix) needed for driveways, parking lots, and road surfaces. Get results in tons and cubic yards.',
    seoTitle: 'Asphalt Calculator – Tons & Cubic Yards | Yard Metric',
    seoDescription: 'Asphalt calculator: enter length, width, and depth to get tons and cubic yards for driveways and parking lots. Uses 145 lbs/cu ft standard hot-mix density.',
    icon: '🛣️',
    calcMode: 'volume',
    defaultDepth: 2,
    density: 4050,
    bagWeight: 50,
    related: ['asphalt-tonnage-calculator', 'concrete-calculator', 'road-base-calculator', 'crusher-run-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Depth) ÷ 324\nTons = Volume × 2.025',
    formulaNote: 'Asphalt weighs approximately 145 lbs/cu ft or 3,915–4,050 lbs/yd³.',
    examples: [
      { title: 'Residential Driveway', width: 12, length: 40, depth: 2, unit: 'ft' },
      { title: 'Parking Lot (small)', width: 50, length: 100, depth: 3, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many tons of asphalt do I need?', a: 'A 12×40 ft driveway at 2 inches deep needs about 3.5 tons of asphalt.' },
      { q: 'How thick should asphalt be for a driveway?', a: 'Residential driveways: 2–3 inches over a 6-inch compacted gravel base. Commercial: 3–4 inches.' },
      { q: 'How much does a ton of asphalt cover?', a: 'One ton of asphalt covers approximately 80 square feet at 2 inches thick.' },
    ],
  },
  {
    slug: 'asphalt-tonnage-calculator',
    name: 'Asphalt Tonnage Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Convert asphalt volume to tons for ordering hot mix.',
    description: 'Convert asphalt area and thickness directly to tons for ordering hot-mix asphalt. Essential for contractor bidding and material ordering.',
    seoTitle: 'Asphalt Tonnage Calculator – Area to Tons | Yard Metric',
    seoDescription: 'Convert asphalt area and thickness to short tons for ordering hot-mix. Enter square footage and depth to get exact tonnage for contractor bids and material orders.',
    icon: '⚖️',
    calcMode: 'volume',
    defaultDepth: 2,
    density: 4050,
    bagWeight: 50,
    related: ['asphalt-calculator', 'concrete-calculator', 'road-base-calculator'],
    formula: 'Tons = (Length × Width × Depth ÷ 12) × 145 ÷ 2000\nOr: Area (sq ft) × Thickness (in) × 0.0605 = Tons',
    formulaNote: 'Standard hot-mix asphalt density is 145 lbs/cu ft. Divide by 2,000 for short tons.',
    examples: [
      { title: 'Driveway Overlay', width: 12, length: 50, depth: 2, unit: 'ft' },
      { title: 'Road Patch', width: 12, length: 20, depth: 3, unit: 'ft' },
    ],
    faqs: [
      { q: 'How do I calculate asphalt tonnage?', a: 'Multiply area (sq ft) × thickness (inches) × 0.0605 to get short tons. Our calculator does this instantly.' },
      { q: 'What is the density of asphalt?', a: 'Hot-mix asphalt is approximately 145 lbs per cubic foot, or about 3,915–4,050 lbs per cubic yard.' },
    ],
  },
  {
    slug: 'rebar-calculator',
    name: 'Rebar Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate rebar quantity and spacing for concrete slabs.',
    description: 'Calculate the total linear feet and number of rebar pieces needed for concrete slabs and footings. Supports standard rebar spacing patterns.',
    seoTitle: 'Rebar Calculator – Linear Feet & Pieces for Concrete | Yard Metric',
    seoDescription: 'Rebar calculator: enter slab dimensions and spacing to get total linear feet and piece count. Covers concrete slabs, footings, and standard on-center rebar spacing.',
    icon: '🔩',
    calcMode: 'rebar',
    defaultDepth: 4,
    related: ['concrete-slab-calculator', 'concrete-calculator', 'drywall-calculator'],
    formula: 'Bars per direction = (Length ÷ Spacing) + 1\nTotal linear ft = (Bars in Length + Bars in Width) × respective dimension',
    formulaNote: 'Standard residential rebar spacing is 12–18 inches on center. Use #4 (1/2") rebar for most slabs.',
    examples: [
      { title: 'Garage Slab (12" OC)', width: 20, length: 24, depth: 4, unit: 'ft' },
      { title: 'Patio (18" OC)', width: 12, length: 16, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'What size rebar for a concrete driveway?', a: '#3 (3/8") rebar works for light residential use. #4 (1/2") is standard for driveways and garage floors.' },
      { q: 'How far apart should rebar be in a slab?', a: 'Residential slabs typically use 12–18 inch spacing on center. High-load areas like driveways use 12 inch spacing.' },
      { q: 'Do I need rebar in a 4-inch slab?', a: 'Yes, at minimum, use wire mesh (6×6 W1.4×W1.4) or #3 rebar at 18-inch spacing for any slab 4 inches or thicker.' },
    ],
  },
  // ── NEW: Construction ───────────────────────────────────────────────────────
  {
    slug: 'drywall-calculator',
    name: 'Drywall Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate how many sheets of drywall you need for a room.',
    description: 'Calculate the exact number of 4×8 drywall sheets needed for walls and ceilings. Enter room dimensions and the calculator determines sheet count, accounting for openings and standard 10% waste.',
    seoTitle: 'Drywall Calculator – Sheets for Walls & Ceilings | Yard Metric',
    seoDescription: 'Drywall calculator: enter room dimensions to get the exact number of 4×8 sheets for walls and ceilings. Accounts for door and window openings plus 10% waste.',
    icon: '🏠',
    calcMode: 'drywall',
    coverageRate: 32,
    outputLabel: 'Sheets',
    related: ['paint-calculator', 'concrete-slab-calculator', 'brick-calculator', 'block-calculator', 'roofing-calculator'],
    formula: 'Area (sq ft) = (Perimeter × Height) + Ceiling Area\nSheets = Area ÷ 32 × Waste Factor',
    formulaNote: 'A standard 4×8 sheet covers 32 sq ft. Subtract 50% of door/window area (you cut around them). Add 10% waste.',
    examples: [
      { title: 'Bedroom (12×14)', width: 12, length: 14, depth: 9, unit: 'ft' },
      { title: 'Living Room (16×20)', width: 16, length: 20, depth: 9, unit: 'ft' },
      { title: 'Garage (20×24)', width: 20, length: 24, depth: 9, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many sheets of drywall do I need for a 12×12 room?', a: 'A 12×12 room with 9-foot ceilings has approximately 432 sq ft of wall area plus 144 sq ft of ceiling = 576 sq ft total. That requires 18 sheets of 4×8 drywall (576 ÷ 32), plus 2 extra for waste = 20 sheets.' },
      { q: 'How much does a sheet of drywall weigh?', a: 'Standard 1/2" drywall (4×8) weighs approximately 51 lbs. 5/8" fire-rated drywall weighs about 68 lbs. Lightweight 1/2" drywall weighs around 44 lbs per sheet.' },
      { q: 'What thickness of drywall should I use?', a: '1/2" for most interior walls and ceilings. 5/8" Type X for garages, furnace rooms, and fire-rated assemblies. 1/4" for curved walls or covering existing surfaces.' },
    ],
  },
  {
    slug: 'paint-calculator',
    name: 'Paint Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate how many gallons of paint you need for any room or surface.',
    description: 'Calculate the number of gallons of paint needed for walls, ceilings, and exterior surfaces. Results account for standard 400 sq ft/gallon coverage with options for one or two coats.',
    seoTitle: 'Paint Calculator – Gallons for Any Room or Surface | Yard Metric',
    seoDescription: 'Paint calculator: enter room dimensions to get gallons needed for one or two coats. Covers interior walls, ceilings, and exterior at 400 sq ft per gallon coverage.',
    icon: '🎨',
    calcMode: 'paint',
    coverageRate: 400,
    outputLabel: 'Gallons',
    related: ['drywall-calculator', 'roofing-calculator', 'brick-calculator', 'concrete-slab-calculator'],
    formula: 'Area (sq ft) = (Perimeter × Wall Height)\nGallons = Area ÷ 400 per coat',
    formulaNote: 'Standard paint coverage is 350–400 sq ft per gallon. Premium paints with better hide may cover 350; flat paints may cover 400+.',
    examples: [
      { title: 'Bedroom (12×14)', width: 12, length: 14, depth: 9, unit: 'ft' },
      { title: 'Living Room (16×20)', width: 16, length: 20, depth: 9, unit: 'ft' },
      { title: 'Exterior House', width: 30, length: 40, depth: 12, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much paint do I need for a 12×12 room?', a: 'A 12×12 room with 9-foot ceilings has about 432 sq ft of wall area. That requires about 1.1 gallons per coat, or 2.2 gallons for two coats. Buy 2 gallons for one coat or 3 gallons for two coats to have a buffer.' },
      { q: 'Should I use one coat or two coats of paint?', a: 'Two coats are always recommended for a professional finish. Dark colors covering light walls, or vice versa, often require three coats. If painting bare drywall, always prime first; unpainted drywall will absorb much more paint.' },
      { q: 'How much does a gallon of paint cover?', a: 'Quality interior paint covers 350–400 sq ft per gallon. Exterior paint: 250–400 sq ft/gal depending on surface texture. Rough or porous surfaces require significantly more paint.' },
    ],
  },
  {
    slug: 'brick-calculator',
    name: 'Brick Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate how many bricks you need for walls, patios, and projects.',
    description: 'Calculate the number of bricks needed for walls, garden borders, patio surfaces, and fire pits. Supports standard modular and queen-size bricks with mortar joints.',
    seoTitle: 'Brick Calculator – How Many Bricks Do You Need? | Yard Metric',
    seoDescription: 'Brick calculator: enter wall or patio area to get brick count with waste. Uses 7.5 bricks per sq ft for standard modular brick in running bond with 3/8-inch joints.',
    icon: '🧱',
    calcMode: 'brick',
    piecesPerSqFt: 7.5,
    outputLabel: 'Bricks',
    related: ['block-calculator', 'retaining-wall-calculator', 'concrete-calculator', 'mortar-calculator'],
    formula: 'Bricks = Area (sq ft) × 7.5 × Waste Factor\nFor running bond with 3/8" mortar joint',
    formulaNote: 'Standard modular brick (3-5/8" × 2-1/4" × 7-5/8") uses 7.5 bricks per sq ft in running bond with 3/8" mortar joints. Add 10% for waste.',
    examples: [
      { title: 'Garden Wall (20×3 ft)', width: 20, length: 3, depth: 0, unit: 'ft' },
      { title: 'Brick Patio (12×16)', width: 12, length: 16, depth: 0, unit: 'ft' },
      { title: 'Fire Pit (8×8)', width: 8, length: 8, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many bricks are in a square foot?', a: 'Standard modular bricks use 7.5 bricks per square foot in running bond with 3/8" mortar joints. Larger "queen" bricks use about 5.8 per sq ft. Always add 10% for waste and cuts.' },
      { q: 'How many bricks do I need for a 10×10 patio?', a: 'A 100 sq ft patio using standard modular brick needs 100 × 7.5 = 750 bricks, plus 10% waste = 825 bricks. Order 850 to be safe.' },
      { q: 'How much mortar do I need for bricks?', a: 'You need approximately one 60-lb bag of mortar mix per 40–50 bricks, or about 10 bags per 100 sq ft of brick surface.' },
    ],
  },
  {
    slug: 'block-calculator',
    name: 'Block Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate CMU concrete block for walls, foundations, and retaining structures.',
    description: 'Calculate the number of concrete masonry units (CMU) needed for block walls, foundations, and retaining structures. Supports standard 8×8×16" and other block sizes.',
    seoTitle: 'Block Calculator – CMU Concrete Blocks for Walls | Yard Metric',
    seoDescription: 'CMU block calculator: enter wall dimensions to get the number of 8×8×16 concrete masonry units needed. Covers foundations, block walls, and retaining structures.',
    icon: '🟦',
    calcMode: 'block',
    piecesPerSqFt: 1.125,
    outputLabel: 'Blocks',
    related: ['brick-calculator', 'retaining-wall-calculator', 'concrete-calculator', 'rebar-calculator'],
    formula: 'Blocks = Wall Area (sq ft) × 1.125 × Waste Factor\nFor standard 8×16" face CMU with 3/8" mortar joint',
    formulaNote: 'Standard 8×8×16" CMU has a face area of 8×16" = 128 sq in, so 1.125 blocks per sq ft face area. Add 5–10% for waste.',
    examples: [
      { title: 'Foundation Wall (40×4 ft)', width: 40, length: 4, depth: 0, unit: 'ft' },
      { title: 'Garage Block Wall (20×8 ft)', width: 20, length: 8, depth: 0, unit: 'ft' },
      { title: 'Retaining Wall (30×3 ft)', width: 30, length: 3, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many CMU blocks per square foot?', a: 'Standard 8×8×16" CMU blocks cover 0.889 sq ft of face area each, so you need 1.125 blocks per square foot of wall face area. Add 5–10% for waste and cuts.' },
      { q: 'How many blocks do I need for a 10×10 room?', a: 'A 10×10 room has 40 linear feet of wall. At 8 feet tall, that is 320 sq ft of wall. You need 320 × 1.125 = 360 blocks, plus 10% waste = 396 blocks. Order 400.' },
      { q: 'Do CMU block walls need to be reinforced?', a: 'Yes, building codes require CMU walls to be reinforced with rebar and filled cells, especially for load-bearing walls, retaining walls, and walls over 4 feet tall.' },
    ],
  },
  {
    slug: 'roofing-calculator',
    name: 'Roofing Calculator',
    category: 'Construction',
    categorySlug: 'construction',
    shortDesc: 'Calculate roofing squares and shingles for any roof.',
    description: 'Calculate the number of roofing squares (100 sq ft each) and shingle bundles needed for any roof. Enter the roof footprint dimensions and pitch, and get exact material quantities.',
    seoTitle: 'Roofing Calculator – Squares & Shingle Bundles | Yard Metric',
    seoDescription: 'Roofing calculator: enter roof footprint and pitch to get squares and shingle bundles. Covers 3-tab and architectural shingles for gable and hip roofs.',
    icon: '🏠',
    calcMode: 'roofing',
    coverageRate: 100,
    outputLabel: 'Squares',
    related: ['drywall-calculator', 'paint-calculator', 'concrete-slab-calculator'],
    formula: 'Roof Area = Footprint Area × Pitch Multiplier\nSquares = Roof Area ÷ 100\nBundles = Squares × 3',
    formulaNote: 'One roofing square = 100 sq ft. Standard 3-tab or architectural shingles: 3 bundles per square. Ridge cap and waste add 10–15%.',
    examples: [
      { title: 'Ranch House (30×50)', width: 30, length: 50, depth: 4, unit: 'ft' },
      { title: 'Garage Roof (20×24)', width: 20, length: 24, depth: 4, unit: 'ft' },
      { title: 'Addition (12×20)', width: 12, length: 20, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is a roofing square?', a: 'A roofing square is 100 square feet. It is the standard unit for measuring and pricing roofing materials. A typical 2,000 sq ft house with a gable roof has approximately 22–25 squares of roof area.' },
      { q: 'How many bundles of shingles do I need per square?', a: 'Standard 3-tab shingles: 3 bundles per square. Architectural (laminate) shingles: typically 3 bundles per square, though some styles are 4 bundles. Always check the manufacturer\'s coverage for the specific product.' },
      { q: 'How do I account for roof pitch in my calculation?', a: 'Roof pitch increases the actual roof area beyond the footprint. Our calculator uses depth/12 as the rise per foot of run to compute the pitch multiplier automatically.' },
    ],
  },

  // ══ PAVERS & OUTDOOR (5) ══════════════════════════════════════════════════════
  {
    slug: 'paver-calculator',
    name: 'Paver Calculator',
    category: 'Pavers & Outdoor',
    categorySlug: 'pavers-outdoor',
    shortDesc: 'Calculate how many pavers you need for any project.',
    description: 'Calculate the exact number of pavers, base material, and sand needed for patios, walkways, and driveways. Supports standard paver sizes with waste factor.',
    seoTitle: 'Paver Calculator – How Many Pavers Do You Need? | Yard Metric',
    seoDescription: 'Paver calculator: enter patio or walkway dimensions to get paver count with waste. Covers 4×8, 6×9, and 12×12 paver sizes plus base material and sand quantities.',
    icon: '🔲',
    calcMode: 'paver',
    related: ['paver-base-calculator', 'paver-sand-calculator', 'sand-calculator', 'tile-calculator', 'fence-calculator'],
    formula: 'Area (sq ft) = Length × Width\nPavers = Area ÷ (Paver Width × Paver Length) × 1.05',
    formulaNote: 'Add 5–10% waste factor for cuts and breakage. Standard paver sizes: 4×8", 6×9", 12×12".',
    examples: [
      { title: 'Patio (12×16)', width: 12, length: 16, depth: 4, unit: 'ft' },
      { title: 'Walkway (3×20)', width: 3, length: 20, depth: 4, unit: 'ft' },
      { title: 'Driveway (12×40)', width: 12, length: 40, depth: 4, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many pavers do I need per square foot?', a: 'It depends on paver size. 4×8" pavers need 4.5 per sq ft, 6×6" need 4 per sq ft, and 12×12" need 1 per sq ft.' },
      { q: 'How much does it cost to install pavers?', a: 'Professional installation typically costs $8–25 per sq ft depending on material and labor rates.' },
      { q: 'Do pavers need a border?', a: 'Yes, edge restraints are required to prevent pavers from spreading. Use plastic edge restraint or concrete curbing.' },
    ],
  },
  {
    slug: 'paver-base-calculator',
    name: 'Paver Base Calculator',
    category: 'Pavers & Outdoor',
    categorySlug: 'pavers-outdoor',
    shortDesc: 'Calculate gravel base material for paver installations.',
    description: 'Calculate the crushed stone or compacted gravel base needed for paver installations. A proper base is critical to prevent settling and shifting.',
    seoTitle: 'Paver Base Calculator – Crushed Stone Quantity | Yard Metric',
    seoDescription: 'Calculate crushed stone paver base in cubic yards and tons. Enter patio or driveway area and depth for the exact aggregate quantity needed under any paver installation.',
    icon: '🪨',
    calcMode: 'volume',
    defaultDepth: 4,
    density: 2800,
    bagWeight: 50,
    related: ['paver-calculator', 'paver-sand-calculator', 'crushed-stone-calculator', 'crusher-run-calculator'],
    formula: 'Volume (cu yd) = (Length × Width × Base Depth) ÷ 324',
    formulaNote: 'Standard paver base: 4" for patios and walkways, 6" for driveways. Use compactable crushed stone (3/4" minus).',
    examples: [
      { title: 'Patio Base (4")', width: 12, length: 16, depth: 4, unit: 'ft' },
      { title: 'Driveway Base (6")', width: 12, length: 40, depth: 6, unit: 'ft' },
    ],
    faqs: [
      { q: 'How thick should paver base be?', a: 'Patios and walkways: 4 inches minimum. Driveways with vehicle traffic: 6–8 inches of compacted base.' },
      { q: 'What material should I use for paver base?', a: 'Use compactable crushed stone (QP, crusher run, or 3/4" minus). Avoid round stone, as it does not compact properly.' },
      { q: 'Does the base material need to be compacted?', a: 'Yes, compact in 2-inch lifts with a plate compactor. Uncompacted base leads to settling and unlevel pavers.' },
    ],
  },
  {
    slug: 'retaining-wall-calculator',
    name: 'Retaining Wall Calculator',
    category: 'Pavers & Outdoor',
    categorySlug: 'pavers-outdoor',
    shortDesc: 'Calculate blocks and material for a retaining wall project.',
    description: 'Calculate the number of retaining wall blocks, gravel backfill, and base aggregate needed for your retaining wall. Supports standard block sizes.',
    seoTitle: 'Retaining Wall Calculator – Block Count & Materials | Yard Metric',
    seoDescription: 'Retaining wall calculator: enter wall length and height to get block count and drainage aggregate. Covers Allan Block, Versa-Lok, and standard block styles.',
    icon: '🧱',
    calcMode: 'retaining',
    related: ['paver-base-calculator', 'crushed-stone-calculator', 'fill-dirt-calculator', 'block-calculator'],
    formula: 'Wall Area (sq ft) = Length × Height\nBlocks = Wall Area ÷ (Block Width × Block Height)',
    formulaNote: 'Standard Allan Block / Versa-Lok: 12"W × 6"H face. Add 10% for cuts and extras.',
    examples: [
      { title: 'Garden Wall (20×2 ft)', width: 20, length: 2, depth: 0, unit: 'ft' },
      { title: 'Landscape Wall (30×3 ft)', width: 30, length: 3, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many retaining wall blocks do I need?', a: 'Divide the wall face area (length × height) by the face area of one block. Add 10% for waste.' },
      { q: 'How deep should a retaining wall base be?', a: 'Bury the bottom course at least 1 inch per foot of wall height. A 3-foot wall needs 3 inches below grade.' },
      { q: 'Do retaining walls need drainage?', a: 'Yes, install a perforated drain pipe and drainage aggregate behind all retaining walls to prevent water pressure buildup.' },
    ],
  },
  {
    slug: 'tile-calculator',
    name: 'Tile Calculator',
    category: 'Pavers & Outdoor',
    categorySlug: 'pavers-outdoor',
    shortDesc: 'Calculate how many tiles you need for floors, walls, or patios.',
    description: 'Calculate the number of tiles needed for floor, wall, or outdoor patio installations. Supports any tile size with automatic waste factor for straight-lay and diagonal patterns.',
    seoTitle: 'Tile Calculator – How Many Tiles Do You Need? | Yard Metric',
    seoDescription: 'Tile calculator: enter room or patio dimensions to get tile count with waste. Supports any tile size with 10% waste for straight-lay or 15% for diagonal patterns.',
    icon: '🔳',
    calcMode: 'tile',
    piecesPerSqFt: 1,
    outputLabel: 'Tiles',
    related: ['paver-calculator', 'flooring-calculator', 'paver-base-calculator', 'grout-calculator'],
    formula: 'Tiles = Area (sq ft) ÷ (Tile Width × Tile Length) × Waste Factor\nStraight lay: +10% waste; Diagonal: +15% waste',
    formulaNote: 'Tile size in inches; divide by 144 to get sq ft per tile. Diagonal installation wastes significantly more material.',
    examples: [
      { title: 'Bathroom (8×10)', width: 8, length: 10, depth: 0, unit: 'ft' },
      { title: 'Kitchen Floor (12×16)', width: 12, length: 16, depth: 0, unit: 'ft' },
      { title: 'Outdoor Patio (14×20)', width: 14, length: 20, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many 12×12 tiles do I need for 100 square feet?', a: 'A 12×12" tile covers exactly 1 sq ft. For 100 sq ft, buy 110 tiles (100 + 10% waste). For a diagonal pattern, buy 115–120 tiles.' },
      { q: 'How much tile should I order extra for waste?', a: 'Straight-lay pattern: 10% extra. Diagonal (45°) pattern: 15% extra. Herringbone or complex patterns: 15–20% extra. Always buy all tile from the same dye lot.' },
      { q: 'Do I need a special adhesive for outdoor tiles?', a: 'Yes, outdoor tiles require frost-resistant mortar and tiles rated for outdoor use. Use TCNA-approved setting materials and grout rated for exterior applications.' },
    ],
  },
  {
    slug: 'fence-calculator',
    name: 'Fence Calculator',
    category: 'Pavers & Outdoor',
    categorySlug: 'pavers-outdoor',
    shortDesc: 'Calculate fence posts, rails, and pickets for any fence project.',
    description: 'Calculate the number of fence posts, rails, and pickets needed for wood privacy fences, split-rail fences, and picket fences. Enter total fence length and height.',
    seoTitle: 'Fence Calculator – Posts, Rails & Pickets | Yard Metric',
    seoDescription: 'Fence calculator: enter fence length and height to get post count, rail count, and picket count for wood privacy fences at standard 8-foot post spacing.',
    icon: '🏕️',
    calcMode: 'fence',
    outputLabel: 'Posts',
    related: ['lumber-calculator', 'decking-calculator', 'paver-calculator', 'retaining-wall-calculator'],
    formula: 'Posts = (Length ÷ Span) + 1\nRails = (Posts - 1) × Rails per span\nPickets = Length × Pickets per foot',
    formulaNote: 'Standard span: 8 ft between posts. Privacy fence (3.5" pickets, 0.5" gap): ~3.4 pickets per foot. Add 10% waste.',
    examples: [
      { title: 'Backyard (100 LF)', width: 100, length: 6, depth: 0, unit: 'ft' },
      { title: 'Side Yard (50 LF)', width: 50, length: 4, depth: 0, unit: 'ft' },
      { title: 'Large Property (200 LF)', width: 200, length: 6, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many posts do I need for a 100 ft fence?', a: 'At standard 8-foot post spacing, a 100-foot fence needs 14 posts (100 ÷ 8 = 12.5, rounded up to 13 spans + 1 = 14 posts).' },
      { q: 'How many pickets do I need per linear foot?', a: 'Standard 3.5" dog-ear pickets with 1/2" gaps: 3.43 pickets per foot. For a 100 ft fence, that is about 343 pickets plus 10% waste = 377. Buy 380.' },
      { q: 'How deep should fence posts be set?', a: 'Posts should be set to a depth of at least 1/3 of the total post length. For a 6-foot fence using 8-foot posts: set 2 feet deep. In frost-prone areas, posts must extend below the frost line.' },
    ],
  },

  // ══ LUMBER & WOODWORKING (5) ══════════════════════════════════════════════════
  {
    slug: 'board-foot-calculator',
    name: 'Board Foot Calculator',
    category: 'Lumber & Woodworking',
    categorySlug: 'lumber-woodworking',
    shortDesc: 'Calculate board feet for hardwood and dimensional lumber.',
    description: 'Calculate board feet (BF) for lumber purchasing. Essential for hardwood orders, woodworking projects, and estimating lumber costs. Supports fractional dimensions.',
    seoTitle: 'Board Foot Calculator – BF for Lumber & Hardwood | Yard Metric',
    seoDescription: 'Board foot calculator: enter thickness, width, and length to get board feet instantly. Essential for hardwood purchasing, woodworking projects, and lumber cost estimates.',
    icon: '📏',
    calcMode: 'board-feet',
    related: ['log-board-foot-calculator', 'lumber-calculator', 'decking-calculator', 'flooring-calculator'],
    formula: 'Board Feet = (Thickness × Width × Length) ÷ 144\n(all dimensions in inches)',
    formulaNote: 'A board foot is 1 inch thick × 12 inches wide × 12 inches long. Nominal lumber dimensions differ from actual.',
    examples: [
      { title: '1×6×8 Board', width: 6, length: 8, depth: 1, unit: 'ft' },
      { title: '2×8×12 Board', width: 8, length: 12, depth: 2, unit: 'ft' },
      { title: '4/4 Hardwood (12" wide)', width: 12, length: 10, depth: 1, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is a board foot?', a: 'A board foot is a unit of volume equal to 144 cubic inches, equivalent to a board 1" thick × 12" wide × 12" long.' },
      { q: 'How do I calculate board feet?', a: 'Multiply thickness (inches) × width (inches) × length (feet) then divide by 12. Our calculator does this instantly.' },
      { q: 'What is the difference between board feet and linear feet?', a: 'Board feet measure volume; linear feet measure length only. Board feet account for both thickness and width.' },
    ],
  },
  {
    slug: 'log-board-foot-calculator',
    name: 'Log Board Foot Calculator',
    category: 'Lumber & Woodworking',
    categorySlug: 'lumber-woodworking',
    shortDesc: 'Estimate lumber yield from a log using Doyle or Scribner scale.',
    description: 'Calculate the board foot yield of logs using the Doyle Log Rule or Scribner scale. Used by loggers, sawyers, and timber buyers to estimate lumber value.',
    seoTitle: 'Log Board Foot Calculator – Doyle & Scribner Scale | Yard Metric',
    seoDescription: 'Log board foot calculator using the Doyle Rule or Scribner scale. Enter log diameter and length to estimate lumber yield for timber sales and sawmill orders.',
    icon: '🪵',
    calcMode: 'board-feet',
    related: ['board-foot-calculator', 'lumber-calculator'],
    formula: 'Doyle Rule: BF = ((D - 4)² × L) ÷ 16\nD = Small-end diameter (inches), L = Log length (feet)',
    formulaNote: 'The Doyle Rule is standard in the US South and East. Scribner tables are used in the West. Both underestimate yield for small logs.',
    examples: [
      { title: '12" × 16 ft Log', width: 12, length: 16, depth: 0, unit: 'ft' },
      { title: '16" × 12 ft Log', width: 16, length: 12, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'What is the Doyle log rule?', a: 'The Doyle Rule estimates lumber yield: BF = ((Diameter - 4)² × Length) ÷ 16. It is standard in eastern US timber markets.' },
      { q: 'How accurate is the Doyle rule for small logs?', a: 'The Doyle Rule significantly underestimates yield for logs under 12 inches. The International 1/4 Rule is more accurate for small logs.' },
    ],
  },
  {
    slug: 'lumber-calculator',
    name: 'Lumber Calculator',
    category: 'Lumber & Woodworking',
    categorySlug: 'lumber-woodworking',
    shortDesc: 'Calculate how many pieces of lumber you need for a project.',
    description: 'Calculate the number of lumber pieces needed for framing, decking, fencing, or any construction project. Supports standard dimensional lumber sizes.',
    seoTitle: 'Lumber Calculator – Pieces & Board Feet for Any Project | Yard Metric',
    seoDescription: 'Lumber calculator: enter project dimensions to get piece count and board feet for framing, decking, and fencing. Covers all standard dimensional lumber sizes.',
    icon: '🔧',
    calcMode: 'board-feet',
    related: ['board-foot-calculator', 'log-board-foot-calculator', 'decking-calculator', 'fence-calculator'],
    formula: 'Pieces = Total Linear Feet ÷ Board Length\nTotal BF = Pieces × (Thickness × Width × Length) ÷ 144',
    formulaNote: 'Account for standard lumber lengths (8, 10, 12, 14, 16 ft). Add 10–15% waste for cuts.',
    examples: [
      { title: 'Deck (12×16, 2×6)', width: 12, length: 16, depth: 0, unit: 'ft' },
      { title: 'Fence (100 LF, 1×6)', width: 1, length: 100, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much lumber do I need for a deck?', a: 'A 12×16 ft deck using 2×6 decking (1.5 inch gaps) needs about 34 boards at 16 feet, or 272 linear feet.' },
      { q: 'What is the actual size of a 2×4?', a: 'A nominal 2×4 actually measures 1.5" × 3.5". All dimensional lumber is smaller than its nominal name.' },
      { q: 'How much waste should I add to lumber orders?', a: 'Add 10% for straight boards, 15% for angled cuts, and 20% for complex patterns like herringbone decking.' },
    ],
  },
  // ── NEW: Lumber ──────────────────────────────────────────────────────────────
  {
    slug: 'decking-calculator',
    name: 'Decking Calculator',
    category: 'Lumber & Woodworking',
    categorySlug: 'lumber-woodworking',
    shortDesc: 'Calculate how many deck boards you need for any deck size.',
    description: 'Calculate the exact number of decking boards needed for any deck area. Supports 5/4×6, 2×6, 2×4, and composite decking with standard or custom gap spacing.',
    seoTitle: 'Decking Calculator – How Many Deck Boards Do You Need? | Yard Metric',
    seoDescription: 'Deck board calculator: enter deck dimensions to get board count for 5/4×6, 2×6, or composite decking. Supports standard and custom gap spacing with 10–15% waste.',
    icon: '🏡',
    calcMode: 'decking',
    outputLabel: 'Boards',
    related: ['lumber-calculator', 'board-foot-calculator', 'flooring-calculator', 'fence-calculator'],
    formula: 'Boards = Width of Deck ÷ (Board Width + Gap)\nTotal boards = Boards per row × (Length ÷ Board Length)',
    formulaNote: 'Standard 5/4×6 decking actual width is 5.5". Standard gap: 1/8–1/4". Add 10–15% for waste.',
    examples: [
      { title: 'Small Deck (10×12)', width: 10, length: 12, depth: 0, unit: 'ft' },
      { title: 'Medium Deck (16×20)', width: 16, length: 20, depth: 0, unit: 'ft' },
      { title: 'Large Deck (20×30)', width: 20, length: 30, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How many deck boards do I need for a 12×16 deck?', a: 'A 12×16 ft deck (192 sq ft) using 5/4×6 boards (5.5" actual width, 1/8" gap) running the 16 ft direction needs about 25 boards. Add 10% for waste = 28 boards.' },
      { q: 'What is the gap between deck boards?', a: 'Standard gap is 1/8" for pressure-treated wood (it will shrink slightly as it dries) or 3/16–1/4" for dry kiln-dried lumber or composites.' },
      { q: 'What type of wood is best for decking?', a: 'Pressure-treated southern yellow pine is the most affordable. Cedar and redwood are naturally rot-resistant. Ipe, tigerwood, and other tropical hardwoods are extremely durable but expensive. Composite decking requires no maintenance but costs more upfront.' },
    ],
  },
  {
    slug: 'flooring-calculator',
    name: 'Flooring Calculator',
    category: 'Lumber & Woodworking',
    categorySlug: 'lumber-woodworking',
    shortDesc: 'Calculate square footage and boxes of flooring needed for any room.',
    description: 'Calculate the total square footage of flooring needed and the number of boxes (cartons) to purchase. Works for hardwood, laminate, LVP, engineered wood, and any plank flooring.',
    seoTitle: 'Flooring Calculator – Square Feet & Boxes | Yard Metric',
    seoDescription: 'Flooring calculator: enter room dimensions to get square footage and carton count for hardwood, laminate, LVP, or engineered wood. Includes 10–15% waste factor.',
    icon: '🪵',
    calcMode: 'flooring',
    outputLabel: 'Sq Ft',
    related: ['tile-calculator', 'decking-calculator', 'board-foot-calculator', 'lumber-calculator'],
    formula: 'Area = Length × Width\nWith waste: Area × (1 + Waste%)\nBoxes = Area with waste ÷ Coverage per box',
    formulaNote: 'Standard boxes cover 20–30 sq ft. Add 10% waste for straight-lay; 15% for diagonal; 10–20% for hardwood depending on grade.',
    examples: [
      { title: 'Living Room (14×18)', width: 14, length: 18, depth: 0, unit: 'ft' },
      { title: 'Master Bedroom (14×16)', width: 14, length: 16, depth: 0, unit: 'ft' },
      { title: 'Open Floor Plan (20×30)', width: 20, length: 30, depth: 0, unit: 'ft' },
    ],
    faqs: [
      { q: 'How much flooring should I order for waste?', a: 'Add 10% for straight-lay parallel to walls. Add 15% for diagonal installation. Add 15% for hardwood solid strip flooring (grade variation and end matching). Always buy all material from the same batch.' },
      { q: 'How many square feet are in a box of laminate or LVP flooring?', a: 'Most laminate and LVP boxes cover 20–30 sq ft per carton. Check the specific product, as it varies by plank size. Our calculator lets you enter your box coverage.' },
      { q: 'Do I need underlayment under laminate flooring?', a: 'Yes, laminate and most floating floors require a foam or cork underlayment for cushion, sound dampening, and moisture protection. Underlayment is sold separately and must cover the same square footage as your flooring.' },
    ],
  },
];

// ── Utility functions ──────────────────────────────────────────────────────────

export function getCalculator(slug: string): Calculator | undefined {
  return calculators.find((c) => c.slug === slug);
}

export function getCalculatorsByCategory(categorySlug: string): Calculator[] {
  return calculators.filter((c) => c.categorySlug === categorySlug);
}

export function getRelatedCalculators(slug: string): Calculator[] {
  const calc = getCalculator(slug);
  if (!calc) return [];
  return calc.related
    .map((s) => getCalculator(s))
    .filter((c): c is Calculator => c !== undefined)
    .slice(0, 6);
}

export function getPopularCalculators(count = 8): Calculator[] {
  const popularSlugs = [
    'gravel-calculator', 'concrete-calculator', 'mulch-calculator',
    'topsoil-calculator', 'sand-calculator', 'crushed-stone-calculator',
    'asphalt-calculator', 'paver-calculator', 'drywall-calculator',
    'paint-calculator', 'decking-calculator', 'tile-calculator',
  ];
  return popularSlugs
    .map((s) => getCalculator(s))
    .filter((c): c is Calculator => c !== undefined)
    .slice(0, count);
}
