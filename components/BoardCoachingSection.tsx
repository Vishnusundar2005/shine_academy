import React from "react";

export default function BoardCoachingSection() {
  return (
    <section id="board-coaching" className="border-t border-border/60 bg-parchment py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            Board Exam Focus
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-ink lg:text-5xl">
            Class 10 & 12 Coaching — Offline & Online
          </h2>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-ink-soft">
            Board-aligned coaching for CBSE, State Board, ICSE and IGCSE — taught by Ph.D. subject specialists with chapter-wise tests, previous-year papers and 24/7 AI doubt support.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-1 gap-8 lg:grid-cols-2">
          <article className="flex flex-col rounded-2xl border border-border bg-background p-8 shadow-sm lg:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-teal/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal">
              ● Offline Classroom
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold text-ink lg:text-3xl">
              In-Person Smart Classes
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft">
              Small-batch coaching in our 75″ smart-TV classrooms with comfortable study chairs and a focused study ambience.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-ink">
              <li>✓ Class 10 — Maths, Science, English, Social</li>
              <li>✓ Class 12 — PCM / PCB / Commerce streams</li>
              <li>✓ Weekly tests & chapter-wise revision</li>
              <li>✓ Personal mentor & parent updates</li>
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-teal px-5 py-3 text-sm font-semibold text-parchment transition hover:bg-teal-deep"
            >
              Book a Classroom Demo →
            </a>
          </article>
          <article className="flex flex-col rounded-2xl border border-border bg-ink p-8 text-parchment shadow-sm lg:p-10">
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-gold/20 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-gold">
              ● Online Live
            </span>
            <h3 className="mt-5 font-display text-2xl font-semibold lg:text-3xl">
              Live Online Coaching
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-parchment/80">
              Attend the same Ph.D.-led classes from anywhere — interactive live sessions, recorded playback and 24/7 AI doubt-solving.
            </p>
            <ul className="mt-6 space-y-3 text-sm text-parchment">
              <li>✓ Live two-way interactive sessions</li>
              <li>✓ Recordings + notes after every class</li>
              <li>✓ AI tutor for instant doubts, anytime</li>
              <li>✓ Mock board papers & performance reports</li>
            </ul>
            <a
              href="#contact"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-ink transition hover:bg-gold/90"
            >
              Join an Online Demo →
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
