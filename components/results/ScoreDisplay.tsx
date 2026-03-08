"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import type { Tier } from "@/data/results-copy";
import { tierContent } from "@/data/results-copy";

interface ScoreDisplayProps {
  score: number;
  tier: Tier;
}

const RADIUS = 52;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

export default function ScoreDisplay({ score, tier }: ScoreDisplayProps) {
  const content = tierContent[tier];
  const motionScore = useMotionValue(0);
  const strokeDashoffset = useTransform(motionScore, (v) => {
    return CIRCUMFERENCE * (1 - v / 100);
  });

  useEffect(() => {
    const controls = animate(motionScore, score, { duration: 1.8, ease: "easeOut", delay: 0.3 });
    return controls.stop;
  }, [score, motionScore]);

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-40 h-40">
        <svg className="w-40 h-40 -rotate-90" viewBox="0 0 128 128">
          <circle cx="64" cy="64" r={RADIUS} fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="10" />
          <motion.circle
            cx="64" cy="64" r={RADIUS}
            fill="none"
            stroke="#ffffff"
            strokeWidth="10"
            strokeLinecap="round"
            strokeDasharray={CIRCUMFERENCE}
            style={{ strokeDashoffset }}
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-extrabold text-white">
            <AnimatedNumber value={score} />
          </span>
          <span className="text-xs text-white/70 font-medium mt-0.5">out of 100</span>
        </div>
      </div>
      <div className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-white/75">
        {content.riskLabel}
      </div>
    </div>
  );
}

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const duration = 1800;
    const startTime = performance.now();
    function step(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      if (el) el.textContent = String(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(step);
    }
    const frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [value]);

  return <span ref={ref}>0</span>;
}
