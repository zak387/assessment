"use client";

const steps = [
  {
    number: "1",
    title: "Audit your pantry",
    description: "Flip over 3 products you use daily and check the oil. Seed oils (canola, soybean, vegetable) are the #1 culprit hiding in plain sight.",
  },
  {
    number: "2",
    title: "Make one simple swap",
    description: "Pick your lowest-scoring category and make a single product swap. One change at a time builds habits that actually stick.",
  },
  {
    number: "3",
    title: "Use the Clean Eating Playbook",
    description: "Stop guessing at the store. The Playbook lists 200+ vetted products by category and store so you can shop clean in minutes.",
  },
];

export default function NextSteps() {
  return (
    <div>
      <p className="text-xs font-bold uppercase tracking-[0.15em] text-sage mb-2">Next Steps</p>
      <h2 className="text-xl font-bold text-brown mb-1">Simple Actions That Get Real Results</h2>
      <p className="text-sm text-brown-light mb-6">Start here — exactly as written.</p>
      <div className="flex flex-col gap-5">
        {steps.map((step) => (
          <div key={step.number} className="flex gap-4 items-start">
            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-sage text-white font-extrabold text-base flex items-center justify-center shadow-sm">
              {step.number}
            </div>
            <div className="pt-1">
              <p className="font-bold text-brown text-base">{step.title}</p>
              <p className="text-sm text-brown-light leading-relaxed mt-1">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
