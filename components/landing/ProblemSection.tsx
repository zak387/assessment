export default function ProblemSection() {
  const misconceptions = [
    "We buy organic sometimes",
    "We avoid obvious junk food",
    'We choose products with "healthy" claims on the front',
  ];

  return (
    <section className="py-10 sm:py-14">
      {/* Fact callout */}
      <div className="bg-beige border border-gray-border rounded-2xl p-6 sm:p-8 mb-8 text-center">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3">The Problem</p>
        <p className="text-xl sm:text-2xl font-bold text-brown leading-snug">
          People want to eat cleaner but don&apos;t know{" "}
          <span className="text-risk-high">which brands are actually clean.</span>
        </p>
        <p className="text-sm text-brown-light mt-3 leading-relaxed">
          Most brands make it confusing on purpose.
        </p>
      </div>

      {/* Misconceptions */}
      <div className="mb-8">
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3">Sound familiar?</p>
        <h2 className="text-xl sm:text-2xl font-bold text-brown mb-5">
          We think we&apos;re eating healthy because:
        </h2>
        <ul className="space-y-3">
          {misconceptions.map((item) => (
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
        <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75 mb-3">The truth</p>
        <h2 className="text-xl sm:text-2xl font-bold text-white mb-3">
          The front of the package is marketing. The ingredient list is reality.
        </h2>
        <p className="text-base text-white/85 leading-relaxed">
          Most families unknowingly consume inflammatory seed oils, hidden sugars, and chemical additives in products marketed as &ldquo;healthy.&rdquo; This assessment helps you see exactly where they&apos;re hiding.
        </p>
      </div>
    </section>
  );
}
