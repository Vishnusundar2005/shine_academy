import React from "react";

export default function VideoSection() {
  return (
    <section id="video" className="border-t border-border/60 bg-ink py-24 text-parchment lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-12">
        <div className="max-w-3xl">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-gold">
            Watch Us In Action
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance lg:text-5xl">
            A glimpse inside Shine Tuition Academy
          </h2>
          <p className="mt-5 max-w-[60ch] text-base leading-relaxed text-parchment/80">
            Smart-TV classrooms, focused students and Ph.D. teachers — see how every session is run.
          </p>
        </div>
        <div className="mt-12 flex flex-col items-center">
          <div
            className="relative w-full max-w-[400px] overflow-hidden rounded-2xl border border-parchment/10 shadow-2xl"
            style={{ aspectRatio: "9 / 16" }}
          >
            <iframe
              src="https://www.youtube.com/embed/1GXy1uzhYkU"
              title="Shine Tuition Academy"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="absolute inset-0 h-full w-full"
            />
          </div>
          <p className="mt-5 max-w-[400px] text-center text-sm leading-relaxed text-parchment/70">
            A quick look inside our classrooms — Ph.D. teachers leading a live session on our 75″ Smart TV setup.
          </p>
        </div>
      </div>
    </section>
  );
}
