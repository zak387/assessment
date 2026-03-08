"use client";

import type { Tier } from "@/data/results-copy";
import { tierContent } from "@/data/results-copy";

interface RiskBadgeProps {
  tier: Tier;
}

export default function RiskBadge({ tier }: RiskBadgeProps) {
  const content = tierContent[tier];
  return (
    <span
      className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest"
      style={{ color: content.riskColor, backgroundColor: content.riskBg }}
    >
      {content.riskLabel}
    </span>
  );
}
