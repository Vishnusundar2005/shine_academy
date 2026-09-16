import React from "react";

const foundationFeatures = [
  {
    title: "Individual Attention",
    body: "Small batches of 9th–10th and 11th–12th, so every student's strengths and gaps are seen.",
  },
  {
    title: "Separate Senior Batches",
    body: "Class 9–10 and Class 11–12 (CBSE & State Board) taught at the right pace and depth.",
  },
  {
    title: "Highly Qualified Teachers",
    body: "All PhD scholars as teachers — highly qualified, subject-oriented experts who teach concepts deeply, not just for the next test.",
  },
  {
    title: "75″ Smart TV Classrooms",
    body: "Concept-based visual teaching on a big screen — diagrams, derivations and worked examples in full clarity.",
  },
  {
    title: "Comfortable Study Setup",
    body: "Ergonomic study chairs, calm AC classrooms and an ambience built for long focused study.",
  },
  {
    title: "Doubt-Solving On Demand",
    body: "WhatsApp doubt support 9 AM – 9 PM and dedicated in-class doubt sessions every week.",
  },
];

const bonuses = [
  "Monthly Parent Progress Report — marks, attendance and improvement tracking — included free",
  "Exam Writing Techniques and Time-Management training — included free",
  "Special revision classes before every major exam — included free",
];

export default function FoundationSection() {
  return (
    <section id="foundation" className="border-y border-border/60 bg-background py-24 lg:py-32 relative">
      <div id="cta" className="absolute -top-20" />
      <div className="mx-auto max-w-4xl px-6">
        <div className="relative rounded-2xl border-2 border-teal bg-parchment p-10 shadow-[0_20px_60px_-24px_color-mix(in_oklab,var(--teal)_50%,transparent)] lg:p-16">
          <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 rounded-full border-2 border-teal bg-parchment px-5 py-1 text-[10px] font-bold uppercase tracking-[0.28em] text-teal-deep">
            Academic Year 2025-26
          </div>
          <div className="text-center">
            <h2 className="font-display text-4xl font-semibold tracking-tight text-ink lg:text-5xl">
              The Foundation Programme
            </h2>
            <p className="mt-3 text-sm text-ink-soft">
              Comprehensive coaching for English, Mathematics and Sciences · Std IX – XII
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
            {foundationFeatures.map((item) => (
              <div key={item.title} className="flex gap-4">
                <span className="mt-1 flex size-7 shrink-0 items-center justify-center rounded-full bg-teal-soft text-xs font-bold text-teal-deep">
                  ✓
                </span>
                <div>
                  <div className="text-sm font-semibold text-ink">{item.title}</div>
                  <p className="mt-1 text-sm leading-relaxed text-ink-soft">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-10 rounded-lg border border-dashed border-gold-deep/50 bg-gold/10 p-5">
            <div className="text-[11px] font-bold uppercase tracking-[0.24em] text-gold-deep">
              Enrolment Bonuses
            </div>
            <ul className="mt-3 space-y-1.5 text-sm text-ink-soft">
              {bonuses.map((b) => (
                <li key={b}>+ {b}</li>
              ))}
            </ul>
          </div>
          <div className="mt-10 flex flex-col items-center gap-5 border-t border-border pt-10 text-center">
            <p className="text-xs uppercase tracking-[0.24em] text-ink-soft">
              Begin with a free discovery call
            </p>
            <a
              href="tel:+919840970732"
              className="w-full rounded-full bg-teal px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-parchment transition-colors hover:bg-teal-deep"
            >
              Book My Free Call & Demo Session
            </a>
            <p className="text-xs text-ink-soft">
              Risk-free · See exactly how we teach before you commit
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
