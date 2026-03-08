export default function RevealSection() {
  const items = [
    {
      title: "Your Non-Toxic Eating Score (0–100)",
      desc: "See exactly how clean your family's diet actually is — no guessing.",
    },
    {
      title: "Your Top 3 Blind Spots",
      desc: "Which everyday habits are letting the most toxic ingredients in.",
    },
    {
      title: "A Simple, Personalized Action Plan",
      desc: "Specific swaps based on your score — easy to act on this week.",
    },
  ];

  return (
    <section className="py-10 sm:py-14">
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-3 text-center">
        What you&apos;ll discover
      </p>
      <h2 className="text-xl sm:text-2xl font-bold text-center text-brown mb-8">
        In just 2 minutes, you&apos;ll know exactly:
      </h2>
      <div className="space-y-4">
        {items.map((item, i) => (
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
