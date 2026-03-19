import { landingCopy } from "@/data/copy";

const { problem } = landingCopy;

export default function ProblemSection() {
  return (
    <section className="py-10 sm:py-14">
      {/* Fact callout */}
      <div className="bg-beige border border-gray-border rounded-2xl p-6 sm:p-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3">{problem.sectionLabel}</p>
        <p className="text-xl sm:text-2xl font-bold text-brown leading-snug">
          {problem.headline.split("which brands are actually clean.")[0]}
          <span className="text-risk-high">which brands are actually clean.</span>
        </p>
        <p className="text-sm text-brown-light mt-3 leading-relaxed">
          {problem.subtext}
        </p>
      </div>

      {/* Misconceptions */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3">{problem.misconceptionsLabel}</p>
        <h2 className="text-xl sm:text-2xl font-bold text-brown mb-5">
          {problem.misconceptionsHeadline}
        </h2>
        <ul className="space-y-3">
          {problem.misconceptions.map((item) => (
            <li key={item} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-beige border border-gray-border flex items-center justify-center mt-0.5 text-brown-light text-sm font-bold">
                ✕
              </span>
              <span className="text-brown-light text-base sm:text-lg">{item}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Truth reveal */}
      <div className="bg-sage rounded-2xl p-6 sm:p-8 text-white">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75 mb-3">{problem.truthLabel}</p>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          {problem.truthHeadline}
        </h2>
        <p className="text-base text-white/85 leading-relaxed">
          {problem.truthBody}
        </p>
      </div>
    </section>
  );
}
