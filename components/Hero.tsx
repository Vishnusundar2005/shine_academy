import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <header className="relative overflow-hidden border-b border-border/60">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(60% 60% at 85% 20%, color-mix(in oklab, var(--gold) 18%, transparent), transparent 60%), radial-gradient(50% 50% at 10% 90%, color-mix(in oklab, var(--teal) 14%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 py-20 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-28">
        <div className="flex flex-col gap-7 lg:col-span-7">
          <span className="inline-flex w-max items-center gap-2 rounded-full border border-teal/30 bg-teal-soft px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-deep">
            <span className="size-1.5 rounded-full bg-teal" />
            Online + Offline · AI Doubt Support 24/7
          </span>
          <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-ink lg:text-7xl">
            Online <span className="italic text-teal">and</span> offline integrated learning — with{" "}
            <span className="italic text-teal">AI support</span> for 24/7 doubt-solving.
          </h1>
          <p className="max-w-[52ch] text-lg leading-relaxed text-pretty text-ink-soft">
            One seamless programme that blends our 75″ smart classrooms with live online sessions and an AI tutor that answers your child&apos;s doubts any time of day — built for students from 2nd to 12th standard.
          </p>
          <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center">
            <a
              href="#cta"
              className="inline-flex items-center justify-center rounded-full bg-teal px-8 py-4 text-sm font-semibold uppercase tracking-[0.14em] text-parchment shadow-[0_8px_24px_-8px_color-mix(in_oklab,var(--teal)_60%,transparent)] transition-colors hover:bg-teal-deep"
            >
              Book My Free Call & Demo Session
            </a>
            <span className="text-xs text-ink-soft">No payment · No commitment</span>
          </div>
          <div className="mt-2 flex flex-wrap gap-x-8 gap-y-3 text-xs font-medium uppercase tracking-[0.18em] text-ink-soft">
            <span>● Offline Smart Classrooms</span>
            <span>● Live Online Sessions</span>
            <span>● 24/7 AI Doubt-Solving</span>
          </div>
        </div>
        <div className="lg:col-span-5">
          <div className="relative">
            <div className="absolute -inset-3 -z-10 rounded-2xl bg-gold/30 rotate-[1.5deg]" />
            <div className="overflow-hidden rounded-xl border border-border bg-parchment-2 p-2 shadow-xl">
              <Image
                src="/assets/shine-cover-uBrbx8e_.png"
                alt="Mrs Shafia Sattar — Founder, Shine Tuition Academy"
                width={1600}
                height={1000}
                priority
                className="aspect-[16/10] w-full rounded-lg object-cover"
              />
            </div>
            <div className="absolute -bottom-5 left-6 hidden rounded-lg border border-border bg-parchment px-4 py-3 shadow-md sm:block">
              <div className="font-display text-xs uppercase tracking-[0.2em] text-gold-deep">
                Tagline
              </div>
              <div className="font-display text-base text-ink">
                Learning today, leading tomorrow.
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
