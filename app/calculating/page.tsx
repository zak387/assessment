"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const steps = [
  "Analyzing your food choices...",
  "Identifying hidden toxins...",
  "Calculating your risk score...",
  "Finding your blind spots...",
  "Preparing your personal report...",
];

export default function CalculatingPage() {
  const router = useRouter();
  const hasNavigated = useRef(false);

  useEffect(() => {
    const result = sessionStorage.getItem("assessmentResult");
    if (!result) {
      router.replace("/");
      return;
    }

    const timer = setTimeout(() => {
      if (hasNavigated.current) return;
      hasNavigated.current = true;

      const assessmentId = sessionStorage.getItem("assessmentId") || "preview";
      router.push(`/results/${assessmentId}`);
    }, 3500);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen bg-sage flex flex-col items-center justify-center px-4">
      <div className="text-center max-w-sm">
        {/* Animated ring */}
        <div className="relative w-24 h-24 mx-auto mb-8">
          <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
            <circle cx="48" cy="48" r="40" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="8" />
            <motion.circle
              cx="48" cy="48" r="40"
              fill="none"
              stroke="#ffffff"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={251.2}
              initial={{ strokeDashoffset: 251.2 }}
              animate={{ strokeDashoffset: 0 }}
              transition={{ duration: 3.2, ease: "easeInOut" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.span
              className="text-2xl font-bold text-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              ✓
            </motion.span>
          </div>
        </div>

        <h2 className="text-xl font-bold text-white mb-2">Analyzing your results...</h2>
        <p className="text-sm text-white/70 mb-8">This will only take a moment.</p>

        <div className="space-y-3 text-left">
          {steps.map((step, i) => (
            <motion.div
              key={step}
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.6, duration: 0.4 }}
            >
              <motion.div
                className="w-5 h-5 rounded-full bg-white/20 border border-white/40 flex items-center justify-center flex-shrink-0"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.6 + 0.2, type: "spring", stiffness: 300 }}
              >
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </motion.div>
              <span className="text-sm text-white/85">{step}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
