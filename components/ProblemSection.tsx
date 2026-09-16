import React from "react";

const problems = [
  {
    n: "01.",
    title: "Self-study isn't working",
    body: "You've tried self-study, tuition centres and YouTube videos — but results stay inconsistent.",
  },
  {
    n: "02.",
    title: "No time for trial-and-error",
    body: "You don't have time for unstructured methods that waste hours without producing real progress.",
  },
  {
    n: "03.",
    title: "Lost in large classrooms",
    body: "Big classes don't give personal attention, and quiet doubts go unanswered until exam day.",
  },
];

export default function ProblemSection() {
  return (
    <section className="border-b border-border/60 bg-parchment-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            The Problem
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-ink lg:text-5xl">
            Struggling to improve marks even after studying for hours?
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {problems.map((item) => (
            <div key={item.n} className="flex flex-col gap-4 border-t-2 border-teal/30 pt-6">
              <span className="font-display text-2xl italic text-teal-deep">{item.n}</span>
              <h3 className="text-lg font-semibold text-ink">{item.title}</h3>
              <p className="text-sm leading-relaxed text-ink-soft">{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
