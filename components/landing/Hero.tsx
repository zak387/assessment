export default function Hero() {
  return (
    <section className="bg-sage w-full text-white min-h-dvh sm:min-h-0 flex flex-col items-center justify-center pt-16 pb-14 px-4 text-center">
      {/* Section label */}
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-white/75 mb-4">
        Free 2-Minute Assessment
      </p>

      <h1 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold leading-tight tracking-tight text-white mb-5 max-w-xl mx-auto">
        Are You and Your Family{" "}
        <span className="relative inline-block">
          Eating Non-Toxic?
          <span className="absolute -bottom-1 left-0 right-0 h-[3px] bg-white/40 rounded-full" />
        </span>
      </h1>

      <p className="text-base sm:text-lg text-white/85 max-w-md mx-auto leading-relaxed mb-8">
        Take this free 2-minute assessment to find out exactly where toxic ingredients are sneaking into your family&apos;s diet — and what to do about it.
      </p>

      <a
        href="#get-started"
        className="inline-flex items-center gap-2 bg-white text-sage font-bold px-8 py-4 rounded-full shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-base"
      >
        Get My Free Score →
      </a>

      <p className="text-xs text-white/60 mt-4">Takes 2 minutes · No credit card needed</p>
    </section>
  );
}
