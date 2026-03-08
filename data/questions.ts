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
