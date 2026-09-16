"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle, Sparkles } from "lucide-react";
import type { FAQItem } from "@/types";

const faqData: FAQItem[] = [
  {
    id: "faq-1",
    question: "Who teaches the Class 11 & 12 Maths sessions?",
    answer:
      "All sessions are taught directly by a 15-year experienced PhD Professor. Classes are never delegated to junior teachers, and sessions are live and interactive rather than pre-recorded videos.",
  },
  {
    id: "faq-2",
    question: "How many students are allowed in each batch?",
    answer:
      "We strictly limit each batch to a maximum of 30 students. This guarantees that your child is not lost in a 100+ student mega-batch and receives direct interaction and proper personal attention.",
  },
  {
    id: "faq-3",
    question: "Which educational boards does this coaching cover?",
    answer:
      "Our Class 11 & 12 Maths Board Exam Special is specifically tailored for CBSE, State Board, and ICSE curricula, aligned with their latest exam patterns and marking schemes.",
  },
  {
    id: "faq-4",
    question: "How does direct doubt support work?",
    answer:
      "Students can ask their doubts directly during live interactive classes as well as through dedicated doubt support channels, ensuring concepts are fully clarified before moving to subsequent chapters.",
  },
  {
    id: "faq-5",
    question: "Are weekly mock tests conducted?",
    answer:
      "Yes. We conduct weekly mock tests to transition students from passive understanding to active problem-solving, identify question types where they struggle, and build board-exam speed.",
  },
  {
    id: "faq-6",
    question: "What happens if my child misses a live session?",
    answer:
      "Class recordings are provided after every session so students can easily catch up on missed lessons and revise complex derivations before school unit tests and board exams.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-16 sm:py-24 bg-shine-cardDark border-b border-teal-900/30 text-white scroll-mt-10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <HelpCircle className="w-3.5 h-3.5 text-shine-gold" />
            Frequently Asked Questions
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Common Questions From Parents
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base max-w-xl mx-auto">
            Everything you need to know about our Class 11 &amp; 12 Maths coaching methodology and batch structure.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqData.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="rounded-2xl border border-teal-900/50 overflow-hidden bg-slate-900/80 transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(item.id)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${item.id}`}
                  className="w-full py-4 sm:py-5 px-6 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 hover:bg-slate-800/80 transition-colors"
                >
                  <span className="font-heading font-bold text-sm sm:text-base text-white">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-teal-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-shine-gold" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div
                    id={`faq-answer-${item.id}`}
                    className="px-6 pb-5 pt-1 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-teal-900/40 bg-slate-950/80"
                  >
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still have questions prompt */}
        <div className="mt-10 text-center p-6 rounded-3xl bg-slate-900/60 border border-teal-900/50">
          <p className="text-sm text-slate-200 font-bold mb-3">
            Have a specific question about your child&apos;s board preparation?
          </p>
          <a
            href="#enquiry"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-extrabold text-shine-gold hover:text-teal-300 underline underline-offset-4"
          >
            Check Available Batch &amp; Enquire On WhatsApp →
          </a>
        </div>
      </div>
    </section>
  );
}
