import React from "react";

const faqs = [
  {
    q: "I don't have time to study for hours every day. Will this still work?",
    a: "That's exactly why our programme is structured and time-efficient. We guide students with planned sessions, focused study methods and regular tests — so they don't waste hours studying without results. Most students save time and score better with the right guidance.",
  },
  {
    q: "I've tried other tuition centres and they didn't work. What makes you different?",
    a: "Most tuition centres focus only on completing the portion. We focus on understanding, testing and measurable improvement. With small batches, personal attention and weekly performance tracking, every student gets clarity and real progress — not just notes.",
  },
  {
    q: "Is this right for my child?",
    a: "Ideal for students from 2nd to 12th standard who are scoring average marks, struggling with concepts or lacking confidence — and want to improve step by step. Our 9th–10th and 11th–12th batches are especially built for board-exam success.",
  },
  {
    q: "What if it doesn't work for us?",
    a: "Start with a free discovery call and a complimentary demo session. You'll see exactly how we teach, meet the educator and decide for yourself — with zero risk and no commitment.",
  },
];

export default function FAQSection() {
  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-12 lg:px-12">
        <div className="lg:col-span-4">
          <span className="text-[11px] font-semibold uppercase tracking-[0.28em] text-teal">
            Common Questions
          </span>
          <h2 className="mt-4 font-display text-4xl font-semibold tracking-tight text-balance text-ink lg:text-5xl">
            Parents often ask us…
          </h2>
        </div>
        <div className="flex flex-col gap-10 lg:col-span-8">
          {faqs.map((faq) => (
            <div key={faq.q} className="border-t border-border pt-6">
              <h3 className="font-display text-2xl text-ink">{faq.q}</h3>
              <p className="mt-3 max-w-[68ch] text-sm leading-relaxed text-ink-soft">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
