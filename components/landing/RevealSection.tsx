import { landingCopy } from "@/data/copy";

const { reveal } = landingCopy;

export default function RevealSection() {
  return (
    <section className="py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3 text-center">
        {reveal.sectionLabel}
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-center text-brown mb-8">
        {reveal.headline}
      </h2>
      <div className="space-y-4">
        {reveal.items.map((item, i) => (
          <div key={item.title} className="flex items-start gap-4 bg-white border border-gray-border rounded-2xl p-5 shadow-sm">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-sage flex items-center justify-center font-extrabold text-white text-base">
              {i + 1}
            </div>
            <div>
              <p className="font-bold text-brown text-base sm:text-lg">{item.title}</p>
              <p className="text-brown-light text-sm sm:text-base mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
