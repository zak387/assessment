"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ExitIntentPopup
 * Shows when the user:
 *  — Desktop: moves the mouse toward the top of the viewport (exit intent)
 *  — Mobile: has been idle for 25 seconds without submitting
 *
 * Dismissed via ✕ or clicking outside. Only shows once per session.
 */
export default function ExitIntentPopup() {
  const [visible, setVisible] = useState(false);
  const shown = useRef(false);

  function show() {
    if (shown.current) return;
    shown.current = true;
    setVisible(true);
  }

  function dismiss() {
    setVisible(false);
  }

  useEffect(() => {
    // ── Desktop: mouse leaves toward top of viewport ──
    function onMouseLeave(e: MouseEvent) {
      if (e.clientY <= 20) show();
    }
    document.addEventListener("mouseleave", onMouseLeave);

    // ── Mobile / slow visitors: idle timer (25s) ──
    const idleTimer = setTimeout(show, 25_000);

    return () => {
      document.removeEventListener("mouseleave", onMouseLeave);
      clearTimeout(idleTimer);
    };
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="exit-popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown/60 backdrop-blur-sm"
        onClick={dismiss}
        aria-hidden
      />

      {/* Panel */}
      <div className="relative bg-cream rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-in fade-in zoom-in-95 duration-300">
        {/* Gradient header bar */}
        <div
          className="h-2 w-full"
          style={{
            background:
              "linear-gradient(90deg, #4e7551 0%, #7A9B7D 50%, #8fb392 100%)",
          }}
        />

        {/* Close button */}
        <button
          onClick={dismiss}
          aria-label="Close"
          className="absolute top-4 right-4 text-brown-light hover:text-brown transition-colors"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M5 5l10 10M15 5L5 15"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <div className="px-7 pt-6 pb-8">
          {/* Eyebrow */}
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage mb-3">
            Wait — It Takes 2 Minutes
          </p>

          {/* Headline */}
          <h2
            id="exit-popup-title"
            className="text-[1.45rem] font-extrabold text-brown leading-snug mb-3"
          >
            Get Your Score Before You Go
          </h2>

          {/* Body */}
          <p className="text-sm text-brown-light leading-relaxed mb-6">
            You&apos;ll walk away knowing exactly where your family stands —
            and the one swap that matters most. Free, instant, no fluff.
          </p>

          {/* Bullets */}
          <ul className="space-y-2 mb-7">
            {[
              "A real score, not a generic tip",
              "Your specific blind spots, ranked by impact",
              "One clear action to take today",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5 text-sm text-brown">
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-sage/15 flex items-center justify-center">
                  <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                    <path
                      d="M1.5 4.5L3.5 6.5L7.5 2.5"
                      stroke="#7A9B7D"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#get-started"
            onClick={dismiss}
            className="block w-full text-center bg-sage hover:bg-sage-dark text-white font-bold px-6 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-[15px]"
          >
            Take the Free Assessment →
          </a>

          {/* Dismiss link */}
          <button
            onClick={dismiss}
            className="block w-full text-center text-xs text-brown-light/70 hover:text-brown-light mt-4 transition-colors"
          >
            No thanks, I already know what&apos;s in my food
          </button>
        </div>
      </div>
    </div>
  );
}
