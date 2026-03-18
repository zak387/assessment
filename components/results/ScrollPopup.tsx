"use client";

import { useEffect, useRef, useState } from "react";

/**
 * ScrollPopup — results page
 * Appears once when the user has scrolled past the solution/CTA section
 * (the element marked with data-section="cta").
 */
export default function ScrollPopup() {
  const [visible, setVisible] = useState(false);
  const shown = useRef(false);

  useEffect(() => {
    const target = document.querySelector("[data-section='cta']");

    if (!target) {
      // Fallback: fire at 60% scroll depth if the element isn't found
      function onScroll() {
        if (shown.current) return;
        const scrolled = window.scrollY + window.innerHeight;
        const total = document.documentElement.scrollHeight;
        if (scrolled / total >= 0.6) {
          shown.current = true;
          setVisible(true);
          window.removeEventListener("scroll", onScroll);
        }
      }
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }

    // Fire once the bottom edge of the CTA section leaves the viewport (scrolled past)
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (!entry.isIntersecting && entry.boundingClientRect.top < 0 && !shown.current) {
          shown.current = true;
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 }
    );

    observer.observe(target);
    return () => observer.disconnect();
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end sm:items-center justify-center px-4 pb-4 sm:pb-0"
      role="dialog"
      aria-modal="true"
      aria-labelledby="scroll-popup-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-brown/50 backdrop-blur-sm"
        onClick={() => setVisible(false)}
        aria-hidden
      />

      {/* Panel — slides up from bottom on mobile, center on desktop */}
      <div className="relative bg-cream rounded-2xl shadow-2xl w-full max-w-sm overflow-hidden animate-in slide-in-from-bottom-4 sm:zoom-in-95 duration-300">
        {/* Gradient accent bar */}
        <div
          className="h-2 w-full"
          style={{
            background:
              "linear-gradient(90deg, #4e7551 0%, #7A9B7D 50%, #8fb392 100%)",
          }}
        />

        {/* Close */}
        <button
          onClick={() => setVisible(false)}
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

        <div className="px-6 pt-6 pb-7">
          {/* Envelope icon */}
          <div className="w-12 h-12 rounded-full bg-sage/12 flex items-center justify-center mb-4 mx-auto">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                stroke="#7A9B7D"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Eyebrow */}
          <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-sage text-center mb-2">
            One More Thing
          </p>

          {/* Headline */}
          <h2
            id="scroll-popup-title"
            className="text-[1.25rem] font-extrabold text-brown text-center leading-snug mb-3"
          >
            Your Full Report Is Waiting in Your Inbox
          </h2>

          {/* Body */}
          <p className="text-sm text-brown-light text-center leading-relaxed mb-5">
            We emailed you a deeper breakdown — plus a{" "}
            <span className="font-semibold text-brown">free bonus</span> to help
            you act on your results today. Don&apos;t let it sit unread.
          </p>

          {/* What to expect */}
          <div className="bg-beige rounded-xl p-4 mb-5 space-y-2">
            {[
              "Your full non-toxic score breakdown",
              "Your top 3 blind spots + what to swap",
              "A free resource to help you shop cleaner",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2.5 text-sm text-brown">
                <span className="flex-shrink-0 mt-0.5 w-4 h-4 rounded-full bg-sage/20 flex items-center justify-center">
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
              </div>
            ))}
          </div>

          <p className="text-[11px] text-brown-light/60 text-center">
            Can&apos;t find it? Check your spam folder.
          </p>
        </div>
      </div>
    </div>
  );
}
