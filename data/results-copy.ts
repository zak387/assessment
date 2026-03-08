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
