import { questions } from "@/data/questions";
import { getTier, type Tier } from "@/data/results-copy";
import type { BlindSpotFeedback } from "@/data/feedback";
import { categoryFeedback } from "@/data/feedback";

export interface AssessmentResult {
  answers: Record<string, string>;
  scores: Record<string, number>;
  totalScore: number;
  tier: Tier;
  blindSpots: BlindSpotResult[];
  groupedScores: Record<string, number>;
  categoryScores: Record<string, number>;
}

export interface BlindSpotResult {
  categorySlug: string; category: string; score: number; maxScore: number; feedback: BlindSpotFeedback;
}

function getScoreLevel(score: number): "low" | "mid" | "high" {
  if (score <= 3) return "low";
  if (score <= 7) return "mid";
  return "high";
}

export function calculateResults(answers: Record<string, string>): AssessmentResult {
  const scores: Record<string, number> = {};
  const categoryScores: Record<string, number> = {};

  for (const question of questions) {
    const selectedLabel = answers[String(question.id)];
    const option = question.options.find((o) => o.label === selectedLabel);
    const score = option ? option.points : 0;
    scores[question.categorySlug] = score;
    categoryScores[question.categorySlug] = score;
  }

  const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
  const tier = getTier(totalScore);

  const groupedScores: Record<string, number> = {
    "Kitchen Basics": Math.round(((scores.cooking_oils || 0) + (scores.condiments || 0)) / 2),
    "Food Choices": Math.round(((scores.snacks || 0) + (scores.bread_grains || 0) + (scores.breakfast || 0) + (scores.protein || 0)) / 4),
    "Beverages": scores.beverages || 0,
    "Shopping Habits": Math.round(((scores.label_reading || 0) + (scores.packaged_foods || 0)) / 2),
    "Eating Out": scores.dining_out || 0,
  };

  const sortedCategories = questions
    .map((q) => ({ categorySlug: q.categorySlug, category: q.category, score: scores[q.categorySlug] || 0 }))
    .sort((a, b) => a.score - b.score)
    .slice(0, 3);

  const blindSpots: BlindSpotResult[] = sortedCategories.map((cat) => {
    const level = getScoreLevel(cat.score);
    const feedback = categoryFeedback[cat.categorySlug]?.[level] || { title: cat.category, problem: "This area needs improvement.", quickFix: "Consider making changes in this category." };
    return { categorySlug: cat.categorySlug, category: cat.category, score: cat.score, maxScore: 10, feedback };
  });

  return { answers, scores, totalScore, tier, blindSpots, groupedScores, categoryScores };
}
