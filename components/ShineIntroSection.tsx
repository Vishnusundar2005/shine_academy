import React from "react";
import {
  GraduationCap,
  Users,
  MessageCircleQuestion,
  FileCheck2,
  Video,
  Check,
  Sparkles,
} from "lucide-react";

export default function ShineIntroSection() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "15-Year Experienced PhD Professor",
      description:
        "Taught directly by a senior doctoral educator who understands board exam scoring patterns and simplifies tough mathematical concepts.",
    },
    {
      icon: Users,
      title: "Maximum 30 Students",
      description:
        "Strict batch caps ensure a genuine learning environment where students can speak up, interact freely, and receive individual attention.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Direct Doubt Support",
      description:
        "No question is left unanswered. Students get direct doubt-clearing sessions so confusion never carries forward into subsequent chapters.",
    },
    {
      icon: FileCheck2,
      title: "Weekly Mock Tests",
      description:
        "Regular board-aligned chapter and cumulative tests to verify independent problem-solving skills under timed conditions.",
    },
    {
      icon: Video,
      title: "Class Recordings",
      description:
        "Access high-quality class video recordings after every session for seamless revision before unit tests and final board exams.",
    },
  ];

  return (
    <section id="why-shine" className="py-16 sm:py-24 bg-shine-cardDark text-white border-b border-teal-900/40 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-shine-gold/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5 text-shine-gold" />
            Why Shine
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            Your Child Doesn’t Need Just Another Online Maths Class.
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            They need the right environment to actually learn. A structured space where they can interact directly with the professor, ask doubts without hesitation, and receive the attention they deserve.
          </p>
        </div>

        {/* 5 Core Pillars Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                className="rounded-3xl p-6 sm:p-7 bg-slate-900/80 border border-teal-900/60 hover:border-teal-400 transition-all duration-300 flex flex-col group hover:-translate-y-1"
              >
                <div className="w-12 h-12 rounded-2xl bg-teal-500/20 text-teal-300 flex items-center justify-center border border-teal-500/30 mb-5 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-heading text-lg font-bold text-white mb-2 group-hover:text-shine-gold transition-colors">
                  {pillar.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            );
          })}

          {/* Value Summary Card */}
          <div className="rounded-3xl p-6 sm:p-7 bg-gradient-to-br from-teal-950/80 via-slate-900 to-shine-cardDark border-2 border-shine-gold/60 flex flex-col justify-between shadow-glowGold">
            <div>
              <div className="text-xs font-black uppercase tracking-wider text-shine-gold mb-2 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5" />
                The Shine Standard
              </div>
              <h3 className="font-heading text-lg font-bold text-white mb-3">
                Built For Real Understanding &amp; Higher Marks
              </h3>
              <ul className="space-y-2.5 text-xs sm:text-sm text-slate-200">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-shine-gold shrink-0" />
                  <span>No 100+ crowded mega-batches</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-shine-gold shrink-0" />
                  <span>Direct PhD professor engagement</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-shine-gold shrink-0" />
                  <span>Step-by-step board methodology</span>
                </li>
              </ul>
            </div>
            <a
              href="#enquiry"
              className="mt-6 inline-flex items-center justify-center py-3 px-4 rounded-xl bg-gradient-to-r from-teal-400 to-shine-gold text-slate-950 font-black text-xs uppercase tracking-wider shadow-md hover:brightness-110 active:scale-95 transition-all"
            >
              Check Batch Availability
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
