import React from "react";

export default function BannerSection() {
  return (
    <section className="bg-gold/30 py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 text-center lg:flex-row lg:text-left lg:px-12">
        <h3 className="font-display text-3xl font-semibold tracking-tight text-ink">
          Shine today, lead tomorrow.
        </h3>
        <a
          href="tel:+919840970732"
          className="rounded-full bg-teal-deep px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-parchment transition-colors hover:bg-teal"
        >
          Call Now · 98409 70732
        </a>
      </div>
    </section>
  );
}
