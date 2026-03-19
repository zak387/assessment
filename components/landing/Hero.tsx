"use client";

import { landingCopy } from "@/data/copy";

const { hero, badge } = landingCopy;

export default function Hero() {
  return (
    <section className="hero-gradient w-full text-white overflow-hidden">
      <div className="max-w-5xl mx-auto px-8 sm:px-12 lg:px-16">
        <div className="flex flex-col justify-center items-center sm:items-center pt-[4.5rem] pb-20 lg:pt-[6.3rem] lg:pb-28">

          {/* Badge */}
          <div className="flex justify-start sm:justify-center w-full mb-5">
            <div className="inline-flex items-center gap-2 bg-white/15 px-3.5 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-white/80 flex-shrink-0" />
              <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/80">
                {badge}
              </span>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-[1.9rem] sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-extrabold leading-[1.12] tracking-tight text-white mb-5 max-w-2xl text-left sm:text-center w-full">
            {hero.headline}
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-[1.05rem] text-white/85 max-w-md leading-relaxed mb-6 text-left sm:text-center w-full sm:mx-auto">
            {hero.subheadline}
          </p>

          {/* Intro line + bullets */}
          <div className="w-full max-w-md sm:mx-auto mb-8">
            <p className="text-sm text-white/80 mb-3 text-left">
              {hero.bulletsIntro}
            </p>
            <ul className="space-y-2.5">
              {hero.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm text-white/90">
                  <svg
                    className="w-4 h-4 flex-shrink-0 mt-0.5"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <circle cx="8" cy="8" r="8" fill="rgba(255,255,255,0.25)" />
                    <path
                      d="M4.5 8L6.8 10.3L11.5 5.7"
                      stroke="white"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA */}
          <div className="flex flex-col items-stretch sm:items-center gap-3 w-full sm:w-auto">
            <a
              href="#get-started"
              className="inline-flex items-center justify-center gap-2 bg-white text-sage font-bold px-10 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-base w-full sm:w-auto"
            >
              {hero.ctaButton}
            </a>
            <p className="text-xs text-white/55 text-center">
              {hero.ctaNote}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
