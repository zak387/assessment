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
