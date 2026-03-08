"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateResults } from "@/lib/scoring";
import { supabase } from "@/lib/supabase";
import Container from "@/components/ui/Container";
import ProgressBar from "@/components/assessment/ProgressBar";
import QuestionCard from "@/components/assessment/QuestionCard";
import Button from "@/components/ui/Button";

export default function AssessmentPage() {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [direction, setDirection] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const currentQuestion = questions[currentIndex];
  const selectedAnswer = answers[String(currentQuestion.id)] ?? null;
  const isLast = currentIndex === questions.length - 1;

  useEffect(() => {
    const leadId = sessionStorage.getItem("leadId");
    if (!leadId) {
      router.replace("/");
    }
  }, [router]);

  function handleSelect(label: string) {
    setAnswers((prev) => ({ ...prev, [String(currentQuestion.id)]: label }));
  }

  function handleNext() {
    if (!selectedAnswer) return;
    setDirection(1);
    setCurrentIndex((i) => i + 1);
  }

  function handleBack() {
    if (currentIndex === 0) return;
    setDirection(-1);
    setCurrentIndex((i) => i - 1);
  }

  async function handleSubmit() {
    if (!selectedAnswer || isSubmitting) return;
    setIsSubmitting(true);

    const finalAnswers = { ...answers, [String(currentQuestion.id)]: selectedAnswer };
    const result = calculateResults(finalAnswers);
    const leadId = sessionStorage.getItem("leadId");

    try {
      const { data, error } = await supabase
        .from("assessments")
        .insert({
          lead_id: leadId,
          answers: finalAnswers,
          scores: result.scores,
          total_score: result.totalScore,
          tier: result.tier,
        })
        .select("id")
        .single();

      if (error) throw error;

      sessionStorage.setItem("assessmentId", data.id);
      sessionStorage.setItem("assessmentResult", JSON.stringify(result));
      router.push("/calculating");
    } catch (err) {
      console.error("Failed to save assessment:", err);
      sessionStorage.setItem("assessmentResult", JSON.stringify(result));
      router.push("/calculating");
    }
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col">
      {/* Sage header strip with progress */}
      <div className="bg-sage px-4 py-4 flex-shrink-0">
        <Container>
          <ProgressBar current={currentIndex + 1} total={questions.length} />
        </Container>
      </div>

      {/* Scrollable question area */}
      <div className="flex-1 py-6 px-4 overflow-y-auto">
        <Container>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-border p-6">
            <QuestionCard
              question={currentQuestion}
              selectedAnswer={selectedAnswer}
              onSelect={handleSelect}
              direction={direction}
            />
          </div>

          <p className="text-center text-xs text-brown-light mt-4">
            {questions.length - currentIndex - 1} question{questions.length - currentIndex - 1 !== 1 ? "s" : ""} remaining
          </p>
        </Container>
      </div>

      {/* Sticky button footer — always visible */}
      <div className="sticky bottom-0 bg-cream border-t border-gray-border px-4 py-4 flex-shrink-0 z-10">
        <Container>
          <div className="flex items-center justify-between gap-4">
            {currentIndex > 0 ? (
              <button
                onClick={handleBack}
                className="text-sm text-brown-light hover:text-brown transition-colors flex items-center gap-1 font-medium"
              >
                ← Back
              </button>
            ) : (
              <div />
            )}

            {isLast ? (
              <Button
                onClick={handleSubmit}
                disabled={!selectedAnswer || isSubmitting}
                size="lg"
              >
                {isSubmitting ? "Calculating..." : "See My Results →"}
              </Button>
            ) : (
              <Button
                onClick={handleNext}
                disabled={!selectedAnswer}
                size="lg"
              >
                Next →
              </Button>
            )}
          </div>
        </Container>
      </div>
    </div>
  );
}
