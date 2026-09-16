import React from "react";

const outcomes = [
  {
    num: "OUTCOME 01",
    title: "Marks that improve, month after month",
    body: "Improve marks consistently across all subjects with guided learning, planned revision and weekly tests.",
  },
  {
    num: "OUTCOME 02",
    title: "No more confusion",
    body: "Clear understanding of every concept — students leave each session knowing exactly what they've learned.",
  },
  {
    num: "OUTCOME 03",
    title: "Confidence to write any exam",
    body: "Walk into the exam hall calm, prepared and aiming for top ranks.",
  },
];

export default function MethodSection() {
  return (
    <section id="method" className="bg-teal-deep py-24 text-parchment lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-5">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            The Shine Method
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold leading-tight tracking-tight text-balance lg:text-5xl">
            A calm, structured way to learn — built around your child.
          </h2>
          <p className="mt-6 max-w-[45ch] leading-relaxed text-parchment/80">
            We replace cramming with comprehension. Every student is mapped, mentored and measured week-on-week so progress is steady, visible and undeniable.
          </p>
        </div>
        <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
          {outcomes.map((item) => (
            <div key={item.num} className="border-l-2 border-gold/60 pl-7">
              <div className="font-display text-xs font-semibold tracking-[0.24em] text-gold">
                {item.num}
              </div>
              <h3 className="mt-2 font-display text-2xl">{item.title}</h3>
              <p className="mt-3 max-w-[52ch] text-sm leading-relaxed text-parchment/80">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
