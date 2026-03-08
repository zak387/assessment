"use client";

import type { Tier } from "@/data/results-copy";
import { tierContent } from "@/data/results-copy";

interface CTASectionProps {
  tier: Tier;
}

export default function CTASection({ tier }: CTASectionProps) {
  const content = tierContent[tier];

  return (
    <div className="bg-sage rounded-2xl p-6 text-white">
      <div className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-[0.15em] px-3 py-1 rounded-full mb-4">
        {content.ctaHeadline}
      </div>

      <p className="text-sm text-white/85 leading-relaxed mb-5">{content.ctaBody}</p>

      <ul className="space-y-2.5 mb-6">
        {content.ctaBullets.map((bullet) => (
          <li key={bullet} className="flex items-start gap-2.5 text-sm text-white/90">
            <svg className="w-4 h-4 text-white mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            {bullet}
          </li>
        ))}
      </ul>

      <p className="text-xs text-white/65 leading-relaxed mb-5 italic">{content.ctaClosing}</p>

      <a
        href="https://cleaneatingplaybook.framer.website/?utm_source=assessment"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full bg-white text-sage font-bold py-4 px-6 rounded-full text-center transition-all duration-200 text-sm hover:shadow-lg hover:-translate-y-0.5"
      >
        {content.ctaButton}
      </a>

      <p className="text-center text-xs text-white/50 mt-3">
        Instant digital access · One-time purchase
      </p>
    </div>
  );
}
