import React from "react";

const testimonials = [
  {
    name: "Harchitha Narayanan",
    role: "Std X",
    quote:
      "I had a great learning experience at Shine Tuition Academy. The teaching is very clear and concepts are explained in a simple way. The teachers are patient and always ready to clear doubts. Regular tests and practice sessions helped me improve my performance and confidence.",
    initials: "HN",
  },
  {
    name: "Madhukshara",
    role: "Std XII PCM",
    quote:
      "I had a wonderful experience here. Before this, I tried many other tuitions and didn't get good coaching. At Shine the teaching is structured and the doubt-clearing is excellent.",
    initials: "MK",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="bg-parchment-2 py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="mb-16 text-center">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            Social Proof
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-ink lg:text-5xl">
            The best of reviews from alumni batches.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col justify-between gap-8 rounded-xl border border-border bg-parchment p-10 shadow-sm"
            >
              <div className="font-display text-3xl text-gold-deep leading-none">“</div>
              <blockquote className="font-display text-xl italic leading-relaxed text-ink-soft -mt-6">
                {t.quote}
              </blockquote>
              <figcaption className="flex items-center gap-4 border-t border-border pt-6">
                <div className="flex size-12 items-center justify-center rounded-full bg-teal font-display text-lg font-semibold text-parchment">
                  {t.initials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{t.name}</div>
                  <div className="text-xs text-ink-soft">{t.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
