"use client";

import type { Tier } from "@/data/results-copy";
import { tierContent } from "@/data/results-copy";

interface WhatThisMeansProps {
  tier: Tier;
}

export default function WhatThisMeans({ tier }: WhatThisMeansProps) {
  const content = tierContent[tier];

  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-2">Your Breakdown</p>
      <h2 className="text-xl font-bold text-brown mb-4">What This Means For You</h2>
      <div className="space-y-4">
        {content.doingWell.length > 0 && (
          <div className="bg-green-light rounded-2xl p-4 border border-sage/20">
            <p className="text-xs font-bold text-sage uppercase tracking-wider mb-2">✓ What you&apos;re doing well</p>
            <ul className="space-y-1.5">
              {content.doingWell.map((item) => (
                <li key={item} className="text-sm text-brown flex items-start gap-2">
                  <span className="text-sage mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.consuming.length > 0 && (
          <div className="bg-red-50 rounded-2xl p-4 border border-risk-high/20">
            <p className="text-xs font-bold text-risk-high uppercase tracking-wider mb-2">⚠ You&apos;re likely consuming</p>
            <ul className="space-y-1.5">
              {content.consuming.map((item) => (
                <li key={item} className="text-sm text-brown flex items-start gap-2">
                  <span className="text-risk-high mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {content.symptoms.length > 0 && (
          <div className="bg-amber-50 rounded-2xl p-4 border border-risk-moderate/20">
            <p className="text-xs font-bold text-risk-moderate uppercase tracking-wider mb-2">Common symptoms</p>
            <ul className="space-y-1.5">
              {content.symptoms.map((item) => (
                <li key={item} className="text-sm text-brown flex items-start gap-2">
                  <span className="text-risk-moderate mt-0.5 flex-shrink-0">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="bg-beige rounded-2xl p-4 border border-gray-border">
          <p className="text-sm text-brown leading-relaxed italic">&ldquo;{content.encouragement}&rdquo;</p>
        </div>
      </div>
    </div>
  );
}
