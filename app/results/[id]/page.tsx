"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import type { AssessmentResult } from "@/lib/scoring";
import Container from "@/components/ui/Container";
import ScoreDisplay from "@/components/results/ScoreDisplay";
import RadarChart from "@/components/results/RadarChart";
import BlindSpots from "@/components/results/BlindSpots";
import WhatThisMeans from "@/components/results/WhatThisMeans";
import NextSteps from "@/components/results/NextSteps";
import CTASection from "@/components/results/CTASection";

const tierHeaderBg: Record<string, string> = {
  high_risk: "bg-red-500",
  moderate: "bg-amber-500",
  low_risk: "bg-sage",
};

export default function ResultsPage() {
  const params = useParams();
  const [result, setResult] = useState<AssessmentResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const stored = sessionStorage.getItem("assessmentResult");
    if (stored) {
      try { setResult(JSON.parse(stored)); } catch { /* ignore */ }
    }
    setLoading(false);
  }, [params.id]);

  if (loading) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-sage border-t-transparent rounded-full animate-spin mx-auto mb-3" />
          <p className="text-sm text-brown-light">Loading your results...</p>
        </div>
      </div>
    );
  }

  if (!result) {
    return (
      <div className="min-h-screen bg-cream flex items-center justify-center px-4">
        <div className="text-center max-w-sm">
          <p className="text-lg font-bold text-brown mb-2">Results not found</p>
          <p className="text-sm text-brown-light mb-4">
            This link may have expired or the assessment was not completed.
          </p>
          <a href="/" className="text-sage font-bold text-sm underline">
            Take the free assessment
          </a>
        </div>
      </div>
    );
  }

  const headerBg = tierHeaderBg[result.tier] ?? "bg-sage";

  return (
    <div className="min-h-screen bg-cream pb-16">
      {/* Hero header — color matches tier */}
      <div className={`${headerBg} w-full py-10 px-4 text-center`}>
        <Container>
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/70 mb-4">
              Your Non-Toxic Eating Score
            </p>
            <div className="flex justify-center mb-4">
              <ScoreDisplay score={result.totalScore} tier={result.tier} />
            </div>
            <p className="text-sm text-white/80 max-w-xs mx-auto leading-relaxed mt-3">
              Here&apos;s exactly what your score means — and the simple steps to improve it.
            </p>
          </motion.div>
        </Container>
      </div>

      {/* Body */}
      <Container>
        <div className="space-y-8 pt-8">

          {/* Score Breakdown — bar chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-border p-5 shadow-sm"
          >
            <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-2">Score Breakdown</p>
            <h2 className="text-xl font-bold text-brown mb-1">How You Did by Category</h2>
            <p className="text-sm text-brown-light mb-5">See exactly where your diet is clean — and where it isn&apos;t.</p>
            <RadarChart
              groupedScores={result.groupedScores}
              categoryScores={result.categoryScores}
            />
          </motion.div>

          {/* Blind Spots */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5 }}
          >
            <BlindSpots blindSpots={result.blindSpots} />
          </motion.div>

          {/* CTA — placed high for conversion */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <CTASection tier={result.tier} />
          </motion.div>

          {/* What This Means */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-border p-5 shadow-sm"
          >
            <WhatThisMeans tier={result.tier} />
          </motion.div>

          {/* Next Steps */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="bg-white rounded-2xl border border-gray-border p-5 shadow-sm"
          >
            <NextSteps />
          </motion.div>

          {/* Share */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="text-center pb-4"
          >
            <p className="text-xs text-brown-light">
              Want your family to take this?{" "}
              <button
                onClick={() => navigator.clipboard.writeText(window.location.origin)}
                className="text-sage font-bold underline"
              >
                Copy the link
              </button>
            </p>
            <p className="text-xs text-brown-light/50 mt-4">
              Clean Kitchen Nutrition · Powered by Sawa LLC
            </p>
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
