// ============================================================
// LANDING PAGE
// ============================================================

export const landingCopy = {
  badge: "Free 2-Minute Assessment",

  hero: {
    headline: "Tired of thinking you're eating healthy, only to find out you're not?",
    subheadline:
      "Answer 10 questions to find out exactly where toxic ingredients are sneaking into your diet and what to do about it.",
    bulletsIntro: "Take the assessment to find out:",
    bullets: [
      "Your Non-Toxic Eating Score, most families are surprised by theirs",
      "Your top 3 blind spots, the habits letting the worst ingredients through",
      "What to swap first, based on your actual results",
    ],
    ctaButton: "Take the Free Assessment →",
    ctaNote: "Takes 2 minutes · No credit card needed",
  },

  problem: {
    sectionLabel: "The Problem",
    headline: "People want to eat cleaner but don't know which brands are actually clean.",
    subtext: "Most brands make it confusing on purpose.",
    misconceptionsLabel: "Sound familiar?",
    misconceptionsHeadline: "We think we're eating healthy because:",
    misconceptions: [
      "We buy organic sometimes",
      "We avoid obvious junk food",
      'We choose products with "healthy" claims on the front',
    ],
    truthLabel: "The truth",
    truthHeadline: "The front of the package is marketing. The ingredient list is reality.",
    truthBody:
      'Most families unknowingly consume inflammatory seed oils, hidden sugars, and chemical additives in products marketed as "healthy." This assessment helps you see exactly where they\'re hiding.',
  },

  reveal: {
    sectionLabel: "What you'll discover",
    headline: "In just 2 minutes, you'll know exactly:",
    items: [
      {
        title: "Your Non-Toxic Eating Score (0–100)",
        desc: "See exactly how clean your family's diet actually is. No guessing.",
      },
      {
        title: "Your Top 3 Blind Spots",
        desc: "Which everyday habits are letting the most toxic ingredients in.",
      },
      {
        title: "A Simple, Personalized Action Plan",
        desc: "Specific swaps based on your score, easy to act on this week.",
      },
    ],
  },

  leadCapture: {
    sectionLabel: "Get Your Free Score",
    headline: "Where should we send your results?",
    firstNameLabel: "First Name",
    firstNamePlaceholder: "Your first name",
    emailLabel: "Email Address",
    emailPlaceholder: "your@email.com",
    ctaButton: "Take the Assessment →",
    ctaButtonLoading: "Starting...",
    trustNote: "Your information is secure and will never be shared.",
    validationError: "Please fill in both fields.",
  },
};

// ============================================================
// QUIZ QUESTIONS
// ============================================================

export interface AnswerOption { label: string; text: string; points: number; }
export interface Question { id: number; category: string; categorySlug: string; question: string; options: AnswerOption[]; }

export const questions: Question[] = [
  { id: 1, category: "Cooking Oils", categorySlug: "cooking_oils", question: "What type of oil do you primarily cook with?",
    options: [
      { label: "A", text: "Canola, vegetable, or soybean oil", points: 0 },
      { label: "B", text: "Sunflower or corn oil", points: 0 },
      { label: "C", text: "Olive oil", points: 7 },
      { label: "D", text: "Avocado oil, coconut oil, butter, or ghee", points: 10 },
    ]},
  { id: 2, category: "Snacks", categorySlug: "snacks", question: "What do your family's snacks typically look like?",
    options: [
      { label: "A", text: "Chips, crackers, or packaged cookies (conventional brands like Lay's, Ritz, Oreos)", points: 0 },
      { label: "B", text: '"Healthier" packaged snacks (Baked Lay\'s, Wheat Thins, protein bars)', points: 3 },
      { label: "C", text: "Organic packaged snacks (Late July chips, Simple Mills crackers)", points: 7 },
      { label: "D", text: "Whole foods (nuts, fruit, veggies with hummus)", points: 10 },
    ]},
  { id: 3, category: "Bread & Grains", categorySlug: "bread_grains", question: "What type of bread or grains do you buy?",
    options: [
      { label: "A", text: "White bread or conventional wheat bread (Wonder Bread, store brand)", points: 0 },
      { label: "B", text: '"Whole wheat" or "whole grain" bread from mainstream brands', points: 3 },
      { label: "C", text: "Organic whole grain bread or sprouted bread", points: 7 },
      { label: "D", text: "Ezekiel bread, sourdough from clean ingredients, or we don't eat much bread", points: 10 },
    ]},
  { id: 4, category: "Condiments & Dressings", categorySlug: "condiments", question: "What condiments or salad dressings do you use?",
    options: [
      { label: "A", text: "Conventional brands (Hidden Valley Ranch, Kraft dressings, Hellmann's mayo)", points: 0 },
      { label: "B", text: '"Light" or "reduced fat" versions of conventional brands', points: 2 },
      { label: "C", text: "Organic versions but still contain seed oils", points: 5 },
      { label: "D", text: "Brands made with olive or avocado oil (Primal Kitchen, Tessamae's)", points: 10 },
      { label: "E", text: "I make my own", points: 10 },
    ]},
  { id: 5, category: "Breakfast", categorySlug: "breakfast", question: "What does breakfast typically look like in your household?",
    options: [
      { label: "A", text: "Whole foods like eggs with veggies, homemade smoothies, or avocado toast on clean bread", points: 10 },
      { label: "B", text: "Protein bars, flavored yogurt, or instant oatmeal packets", points: 3 },
      { label: "C", text: "Plain oats with toppings, eggs, or plain Greek yogurt with fruit", points: 8 },
      { label: "D", text: "Cereal (Cheerios, Special K, Frosted Flakes, etc.)", points: 0 },
    ]},
  { id: 6, category: "Beverages", categorySlug: "beverages", question: "What do you and your family drink most often?",
    options: [
      { label: "A", text: "Soda, juice boxes, sports drinks, or flavored waters (Gatorade, Vitaminwater)", points: 0 },
      { label: "B", text: "Water, herbal tea, or black coffee", points: 10 },
      { label: "C", text: "Kombucha, coconut water, or store-bought smoothies", points: 5 },
    ]},
  { id: 7, category: "Protein Sources", categorySlug: "protein", question: "Where do you get most of your protein?",
    options: [
      { label: "A", text: "Mostly plant-based protein (beans, lentils, tofu)", points: 8 },
      { label: "B", text: "Conventional meat but I trim the fat", points: 4 },
      { label: "C", text: "Consistently buy organic, grass-fed, or pasture-raised meat", points: 10 },
      { label: "D", text: "Conventional meat, deli meat, or frozen chicken nuggets/patties", points: 2 },
    ]},
  { id: 8, category: "Label Reading", categorySlug: "label_reading", question: "How often do you read ingredient labels before buying?",
    options: [
      { label: "A", text: "Never or rarely — I trust the front of the package", points: 0 },
      { label: "B", text: "Sometimes, but I don't really know what to look for", points: 3 },
      { label: "C", text: "Often, and I avoid obvious bad stuff like HFCS", points: 7 },
      { label: "D", text: "Always — I check for seed oils, artificial ingredients, and hidden sugars", points: 10 },
    ]},
  { id: 9, category: "Dining Out", categorySlug: "dining_out", question: "How often does your family eat restaurant food or takeout?",
    options: [
      { label: "A", text: "5+ times per week", points: 0 },
      { label: "B", text: "3–4 times per week", points: 3 },
      { label: "C", text: "1–2 times per week", points: 7 },
      { label: "D", text: "Rarely (a few times per month or less)", points: 10 },
    ]},
  { id: 10, category: "Packaged Foods", categorySlug: "packaged_foods", question: "How many ingredients are typically in the packaged foods you buy?",
    options: [
      { label: "A", text: "I don't check, or products usually have 15+ ingredients", points: 0 },
      { label: "B", text: "10–15 ingredients", points: 4 },
      { label: "C", text: "5–10 ingredients", points: 7 },
      { label: "D", text: "5 or fewer ingredients, or I mostly buy whole foods", points: 10 },
    ]},
];

// ============================================================
// RESULTS — TIER COPY
// ============================================================

export type Tier = "high_risk" | "moderate" | "low_risk";

export interface TierContent {
  riskLabel: string; riskColor: string; riskBg: string; summary: string;
  doingWell: string[]; consuming: string[]; symptoms: string[]; encouragement: string;
  ctaHeadline: string; ctaBody: string; ctaBullets: string[]; ctaClosing: string; ctaButton: string;
}

export function getTier(score: number): Tier {
  if (score <= 40) return "high_risk";
  if (score <= 69) return "moderate";
  return "low_risk";
}

export const tierContent: Record<Tier, TierContent> = {
  high_risk: {
    riskLabel: "HIGH RISK", riskColor: "#EF4444", riskBg: "#FEF2F2",
    summary: "You and your family are potentially consuming a significant amount of toxic ingredients daily.",
    doingWell: [],
    consuming: ["Inflammatory seed oils (canola, soybean, vegetable oil)", "Artificial sweeteners and colors", "Hidden MSG and flavor enhancers", "Preservatives and processed ingredients", "High amounts of added sugars"],
    symptoms: ["Afternoon energy crashes", "Brain fog", "Bloating and digestive issues", "Skin problems", "Difficulty losing weight", "Mood swings or hyperactivity (especially in kids)"],
    encouragement: "You're not alone. Over 80% of American families score in this range because food companies design products to look healthy while hiding toxic ingredients. Once you know what to look for, this is fixable.",
    ctaHeadline: "The Complete Solution",
    ctaBody: "You now know WHAT to avoid. But standing in the store trying to remember all of this while comparing 10 different brands? That's overwhelming. That's why I created the Clean Eating Playbook.",
    ctaBullets: ["200+ vetted products organized by store (Costco, Walmart, Target)", "Every category covered — oils, snacks, condiments, bread, dairy, meat, breakfast, beverages, and more", "Bad → Better → Best options — so you can choose based on your budget", "The exact brands that pass the non-toxic test", "Why each product was chosen — so you learn the framework"],
    ctaClosing: "No more guessing. No more reading labels for 20 minutes. Just open it, find your category, and grab what's listed. Over 200 families use this to shop smarter, reduce their toxic load, and actually feel good.",
    ctaButton: "Get The Clean Eating Playbook Now",
  },
  moderate: {
    riskLabel: "MODERATE RISK", riskColor: "#F59E0B", riskBg: "#FFFBEB",
    summary: "You're doing better than most, but there are still blind spots costing your family's health.",
    doingWell: ["You're reading labels (at least sometimes)", "You're avoiding the most obvious junk food", "You're making an effort to buy better options"],
    consuming: ['Some inflammatory seed oils (hidden in "healthy" products)', 'Products with "natural flavors" (which can hide 50+ chemicals)', '"Health halo" foods that look clean but aren\'t'],
    symptoms: ["Occasional bloating or digestive discomfort", "Inconsistent energy levels", "Cravings that come out of nowhere", "Skin issues that come and go"],
    encouragement: 'The gap between "good" and "great" is smaller than you think. A few strategic swaps can take you from moderate risk to low risk.',
    ctaHeadline: "The Complete Solution",
    ctaBody: "You're close to eating fully non-toxic. But here's the problem: You're spending 20-30 minutes every shopping trip trying to figure out which products are truly clean. What if someone already did that work for you? That's what the Clean Eating Playbook does.",
    ctaBullets: ["200+ vetted products organized by store (Costco, Walmart, Target)", "Every category covered — oils, snacks, condiments, bread, dairy, meat, breakfast, beverages, and more", "Bad → Better → Best options — so you can optimize based on budget", "Hidden ingredient alerts — products that look clean but aren't", "Why each product was chosen — so you learn the framework"],
    ctaClosing: "You're already doing the work. This just makes it faster and more accurate. Over 200 families use this to close their blind spots and reach low-risk status.",
    ctaButton: "Get The Clean Eating Playbook Now",
  },
  low_risk: {
    riskLabel: "LOW RISK", riskColor: "#22C55E", riskBg: "#F0FDF4",
    summary: "Impressive! You're ahead of 90% of families. Your focus now is optimization and efficiency.",
    doingWell: ["Reading ingredient labels consistently", "Avoiding seed oils, artificial sweeteners, and artificial colors", "Buying high-quality proteins (organic, grass-fed, pasture-raised)", "Choosing whole foods over packaged products", "Cooking at home most of the time"],
    consuming: [], symptoms: [],
    encouragement: "Your family is eating significantly cleaner than the average American household. But here's what I know about families who score in this range: You're spending 20-40 minutes every shopping trip because you're checking everything. Sound familiar?",
    ctaHeadline: "The Complete Solution",
    ctaBody: "You don't NEED the Clean Eating Playbook. You're already doing great. But do you really want to spend 20-40 minutes every shopping trip re-evaluating products? The Playbook gives you back your time.",
    ctaBullets: ["800+ vetted products organized by store (Costco, Walmart, Target)", "Every category covered — so you have backup options when your go-to product is out of stock", "New product discovery — find clean brands you didn't know existed", "Time-saving — cut your shopping time in half"],
    ctaClosing: "Think of it as your external brain. You don't need to remember which brand of almond milk is clean at Target vs Costco. You just look it up. Over 200 families use this system.",
    ctaButton: "Get The Clean Eating Playbook Now",
  },
};

// ============================================================
// RESULTS — BLIND SPOT FEEDBACK
// ============================================================

export interface BlindSpotFeedback { title: string; problem: string; quickFix: string; }
type ScoreLevel = "low" | "mid" | "high";

export const categoryFeedback: Record<string, Record<ScoreLevel, BlindSpotFeedback>> = {
  cooking_oils: {
    low: { title: "Cooking Oils", problem: "You're using inflammatory seed oils that are chemically extracted and heated to extreme temperatures. These promote chronic inflammation throughout your body.", quickFix: "Switch to avocado oil (high heat), coconut oil (medium heat), butter, or ghee. This single swap eliminates one of the biggest sources of daily toxins." },
    mid: { title: "Cooking Oils", problem: "Olive oil is a better choice, but it has a lower smoke point and can oxidize at high heat. You may still be getting inflammatory compounds when cooking at high temperatures.", quickFix: "Use olive oil for low-heat cooking and dressings. Switch to avocado oil or ghee for high-heat cooking like frying and sautéing." },
    high: { title: "Cooking Oils", problem: "Great choice! You're already using clean cooking oils. Just make sure to check that your avocado oil is pure — some brands cut it with seed oils.", quickFix: "Verify your brand is pure. Chosen Foods and Primal Kitchen are trusted options." },
  },
  snacks: {
    low: { title: "Snacks", problem: "The snacks you're buying contain seed oils, artificial flavors, and hidden sugars. These are some of the most toxin-dense products in your pantry.", quickFix: "Switch to Simple Mills crackers, Kettle Brand chips (cooked in avocado oil), or whole food snacks like nuts, fruit, and veggies with hummus." },
    mid: { title: "Snacks", problem: 'Your "healthier" snacks still contain seed oils and processed ingredients. Products like Baked Lay\'s and Wheat Thins use the same inflammatory oils as their regular versions.', quickFix: "Look for snacks with 5 or fewer ingredients and no seed oils. Simple Mills, Siete, and Jackson's Honest are cleaner brands." },
    high: { title: "Snacks", problem: "You're choosing good snack options. Organic packaged snacks are better, but some still contain seed oils — always check the ingredient list.", quickFix: "Keep prioritizing whole food snacks. When buying packaged, verify the oil used is avocado, coconut, or olive oil." },
  },
  bread_grains: {
    low: { title: "Bread & Grains", problem: "Conventional bread contains preservatives, dough conditioners, high fructose corn syrup, and seed oils. These ingredients cause inflammation and blood sugar spikes.", quickFix: "Switch to Ezekiel bread (found in the freezer aisle) or authentic sourdough made with just flour, water, and salt." },
    mid: { title: "Bread & Grains", problem: '"Whole wheat" bread from mainstream brands often contains the same additives as white bread — just with added caramel color to look healthier.', quickFix: "Look for bread with 5 or fewer ingredients: flour, water, salt, yeast, and maybe olive oil." },
    high: { title: "Bread & Grains", problem: "Organic and sprouted breads are much cleaner. Sprouted grains are easier to digest and have more bioavailable nutrients.", quickFix: "Consider trying Ezekiel bread if you haven't — it's sprouted and has no flour, sugar, or preservatives." },
  },
  condiments: {
    low: { title: "Condiments & Dressings", problem: "Conventional condiments are loaded with seed oils, hidden MSG, and artificial preservatives. A single tablespoon of conventional ranch can contain soybean oil, maltodextrin, and artificial flavors.", quickFix: "Switch to Primal Kitchen or Tessamae's — made with avocado oil or olive oil and clean ingredient lists." },
    mid: { title: "Condiments & Dressings", problem: '"Light" or "reduced fat" versions often replace fat with sugar and artificial thickeners. Organic versions are better but many still contain seed oils.', quickFix: "Always flip the bottle and check the oil used. If it says soybean, canola, or vegetable oil — even in an organic product — put it back." },
    high: { title: "Condiments & Dressings", problem: "You're already making good condiment choices. Making your own or buying avocado/olive oil-based brands is the cleanest approach.", quickFix: "Keep it up! A simple homemade dressing is just olive oil, lemon juice, salt, and your favorite herbs." },
  },
  breakfast: {
    low: { title: "Breakfast", problem: "Cereal is one of the most processed foods in American homes. Most contain refined grains, added sugar, artificial vitamins, and preservatives like BHT.", quickFix: "Switch to eggs with veggies, plain oatmeal with fresh fruit, or a smoothie with real ingredients." },
    mid: { title: "Breakfast", problem: "Protein bars, flavored yogurt, and instant oatmeal packets contain added sugars, seed oils, and artificial flavors disguised as healthy options.", quickFix: "Switch to plain Greek yogurt with fresh berries, or plain oats you prepare yourself. Add honey or maple syrup if you need sweetness — at least it's real." },
    high: { title: "Breakfast", problem: "You're making solid breakfast choices. Plain oats and eggs are great whole food options that give you clean energy.", quickFix: "For an upgrade, try pasture-raised eggs and organic oats. Small quality improvements add up over time." },
  },
  beverages: {
    low: { title: "Beverages", problem: "Soda, juice boxes, sports drinks, and flavored waters are loaded with sugar, artificial sweeteners, artificial colors, and chemical preservatives.", quickFix: "Switch to water, herbal tea, or black coffee. If you need flavor, add fresh lemon, cucumber, or berries to your water." },
    mid: { title: "Beverages", problem: "Kombucha and coconut water are better choices, but store-bought smoothies often contain added sugars and preservatives. Watch the sugar content in kombucha too.", quickFix: "Prioritize water and herbal tea. If buying kombucha, choose brands with under 5g sugar. Make smoothies at home for full control." },
    high: { title: "Beverages", problem: "Water, herbal tea, and black coffee are the cleanest beverage choices. You're avoiding one of the biggest sources of hidden sugar and chemicals.", quickFix: "Great job! Consider filtering your water if you don't already — a simple carbon filter removes chlorine and other contaminants." },
  },
  protein: {
    low: { title: "Protein Sources", problem: "Conventional meat, deli meat, and frozen patties contain antibiotics, hormones, nitrates, and fillers. Deli meat is classified as a Group 1 carcinogen by the WHO.", quickFix: "Start by switching your most-consumed protein to organic or pasture-raised. Even one upgrade — like switching to organic chicken — makes a significant difference." },
    mid: { title: "Protein Sources", problem: "Trimming fat from conventional meat doesn't remove the antibiotics and hormones stored in the animal's tissue. The quality of the source matters more than trimming.", quickFix: "Prioritize organic or grass-fed for the proteins you eat most. If budget is a concern, buy conventional for lean cuts and organic for fattier cuts." },
    high: { title: "Protein Sources", problem: "You're making good protein choices. Plant-based proteins and organic/grass-fed meats are among the cleanest options available.", quickFix: "If buying plant-based, make sure tofu and tempeh are organic (to avoid GMO soy). For meat, look for the 'pasture-raised' label." },
  },
  label_reading: {
    low: { title: "Label Reading Habits", problem: "Without reading labels, you're relying on front-of-package marketing — which is designed to mislead. Claims like 'natural,' 'wholesome,' and 'made with real ingredients' are unregulated.", quickFix: "Start with one rule: flip the package and read the first 5 ingredients. If you see seed oils, artificial sweeteners, or words you can't pronounce — put it back." },
    mid: { title: "Label Reading Habits", problem: "You're reading labels sometimes, which is great. But without knowing what to look for, toxic ingredients like 'natural flavors,' yeast extract, and maltodextrin slip through.", quickFix: "Learn the top 5 ingredients to avoid: seed oils, high fructose corn syrup, artificial colors (Red 40, Yellow 5), artificial sweeteners, and 'natural flavors.'" },
    high: { title: "Label Reading Habits", problem: "You're reading labels and catching the obvious offenders. You're ahead of most families already.", quickFix: "Level up by watching for hidden names: 'yeast extract' (hidden MSG), 'maltodextrin' (blood sugar spiker), and 'natural flavors' (can hide 50+ undisclosed chemicals)." },
  },
  dining_out: {
    low: { title: "Dining Out / Takeout", problem: "Restaurants cook with the cheapest oils available — almost always soybean or canola oil. Even high-end restaurants use seed oils. Eating out 5+ times per week means consistent toxic exposure.", quickFix: "Reduce dining out to 3-4 times per week as a first step. When you do eat out, ask what oil they cook with, or choose grilled options over fried." },
    mid: { title: "Dining Out / Takeout", problem: "At 3-4 times per week, restaurant food is still a significant source of seed oil exposure. Even 'healthy' restaurant options are typically cooked in inflammatory oils.", quickFix: "Try to reduce to 1-2 times per week. When eating out, request food cooked in butter or olive oil, and stick to grilled proteins with simple sides." },
    high: { title: "Dining Out / Takeout", problem: "You're keeping dining out minimal, which means most of your food is prepared at home where you control the ingredients.", quickFix: "When you do eat out, ask specifically about cooking oils. Some restaurants will accommodate requests to cook in butter or olive oil." },
  },
  packaged_foods: {
    low: { title: "Packaged / Processed Foods", problem: "Products with 15+ ingredients are highly processed and almost always contain multiple toxic additives — seed oils, preservatives, artificial colors, and hidden sugars.", quickFix: "Aim for products with 5 or fewer recognizable ingredients. If the ingredient list is longer than 2 lines, it's probably too processed." },
    mid: { title: "Packaged / Processed Foods", problem: "Products with 10-15 ingredients are still fairly processed. Even at this level, there's room for seed oils, natural flavors, and preservatives to hide.", quickFix: "Work toward the 5-ingredient rule. The fewer ingredients, the cleaner the product. Whole foods have just one ingredient — themselves." },
    high: { title: "Packaged / Processed Foods", problem: "You're choosing minimally processed foods with short ingredient lists. This is one of the most effective strategies for reducing toxic exposure.", quickFix: "Keep prioritizing whole foods and short ingredient lists. When you do buy packaged, verify the specific ingredients are clean — not just the count." },
  },
};
