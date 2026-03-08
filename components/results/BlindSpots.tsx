"use client";

import { motion } from "framer-motion";
import type { BlindSpotResult } from "@/lib/scoring";

interface BlindSpotsProps {
  blindSpots: BlindSpotResult[];
}

export default function BlindSpots({ blindSpots }: BlindSpotsProps) {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-2">Your Blind Spots</p>
      <h2 className="text-xl font-bold text-brown mb-1">Top 3 Areas Where Toxins Sneak In</h2>
      <p className="text-sm text-brown-light mb-5">
        These are the everyday habits letting the most harmful ingredients into your family&apos;s diet.
      </p>
      <div className="flex flex-col gap-4">
        {blindSpots.map((spot, i) => (
          <motion.div
            key={spot.categorySlug}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.4 }}
            className="bg-white rounded-2xl border border-gray-border p-5 shadow-sm"
          >
            <div className="flex items-start justify-between gap-3 mb-3">
              <div>
                <span className="text-xs font-bold uppercase tracking-[0.12em] text-sage">
                  Blind Spot #{i + 1}
                </span>
                <h3 className="font-bold text-brown text-base mt-0.5">{spot.feedback.title}</h3>
              </div>
              <div className="flex-shrink-0 text-right">
                <span className="text-2xl font-extrabold text-risk-high">{spot.score}</span>
                <span className="text-sm text-brown-light">/{spot.maxScore}</span>
              </div>
            </div>

            <div className="w-full h-1.5 bg-beige rounded-full mb-4">
              <div
                className="h-full rounded-full bg-risk-high transition-all"
                style={{ width: `${(spot.score / spot.maxScore) * 100}%` }}
              />
            </div>

            <div className="space-y-3">
              <div>
                <p className="text-xs font-bold text-brown-light uppercase tracking-wider mb-1">The Problem</p>
                <p className="text-sm text-brown leading-relaxed">{spot.feedback.problem}</p>
              </div>
              <div className="bg-green-light rounded-xl p-3 border-l-4 border-sage">
                <p className="text-xs font-bold text-sage uppercase tracking-wider mb-1">Simple Fix</p>
                <p className="text-sm text-brown leading-relaxed">{spot.feedback.quickFix}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
