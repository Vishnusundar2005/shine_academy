import React from "react";
import Image from "next/image";

const features = [
  "75″ Smart TV teaching",
  "Comfortable ergonomic chairs",
  "AC seniors classrooms",
  "PhD subject-expert faculty",
];

export default function ClassroomSection() {
  return (
    <section id="classroom" className="border-b border-border/60 py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-12 lg:px-12">
        <div className="order-2 lg:order-1 lg:col-span-6">
          <div className="overflow-hidden rounded-xl border border-border bg-parchment-2 p-2 shadow-lg">
            <Image
              src="/assets/classroom-interior-DCrYUc5Y.jpg"
              alt="Shine Tuition Academy classroom with ergonomic study chairs and a 75-inch smart TV"
              width={1280}
              height={1024}
              loading="lazy"
              className="aspect-[5/4] w-full rounded-lg object-cover"
            />
          </div>
        </div>
        <div className="order-1 flex flex-col gap-6 lg:order-2 lg:col-span-6">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            The Classroom
          </span>
          <h2 className="font-display text-4xl font-semibold tracking-tight text-balance text-ink lg:text-5xl">
            A place built to learn, grow and excel.
          </h2>
          <p className="max-w-[55ch] text-base leading-relaxed text-ink-soft">
            Ergonomic study chairs, calm air-conditioned rooms and a 75″ smart TV at the front of every senior batch. Students see derivations, diagrams and worked examples in full clarity — and stay comfortable through long study hours.
          </p>
          <ul className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-2">
            {features.map((feat) => (
              <li
                key={feat}
                className="flex items-center gap-3 rounded-lg border border-border bg-parchment-2 px-4 py-3 text-sm text-ink"
              >
                <span className="flex size-6 items-center justify-center rounded-full bg-teal text-[11px] font-bold text-parchment">
                  ✓
                </span>
                {feat}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
