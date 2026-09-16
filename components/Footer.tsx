import React from "react";

export default function Footer() {
  return (
    <footer className="bg-teal-deep py-14 text-parchment">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-6 lg:flex-row lg:items-end lg:px-12">
        <div>
          <div className="font-display text-2xl font-semibold tracking-tight">
            Shine Tuition Academy
          </div>
          <p className="mt-2 max-w-sm text-sm text-parchment/70">
            Personalised coaching that builds marks, confidence and consistency for students from 2nd to 12th standard.
          </p>
        </div>
        <div className="flex flex-col gap-2 text-sm text-parchment/80 lg:items-end">
          <a href="tel:+919840970732" className="hover:text-gold">
            ☏ 98409 70732
          </a>
          <a
            href="https://www.shinetuitionacademy.in"
            target="_blank"
            rel="noreferrer"
            className="hover:text-gold"
          >
            www.shinetuitionacademy.in
          </a>
          <div className="mt-2 text-[10px] uppercase tracking-[0.24em] text-parchment/50">
            © 2026 Shine Tuition Academy
          </div>
        </div>
      </div>
    </footer>
  );
}
