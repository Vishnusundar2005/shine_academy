import React from "react";
import {
  Video,
  Users,
  GraduationCap,
  Sparkles,
  ListOrdered,
  MessageCircleQuestion,
  FileCheck2,
  Dumbbell,
  Target,
  Compass,
} from "lucide-react";

export default function BenefitsSection() {
  const benefits = [
    {
      icon: Video,
      title: "Live Online Maths Classes",
      description: "Interactive real-time sessions covering complete Class 11 & 12 syllabus with clarity.",
    },
    {
      icon: Users,
      title: "Small Batches Limited to 30 Students",
      description: "Never crowded. Every student receives personal focus, feedback, and classroom attention.",
    },
    {
      icon: GraduationCap,
      title: "Teaching by 15-Yr PhD Professor",
      description: "Direct mentorship and deep instruction by an experienced doctoral mathematics educator.",
    },
    {
      icon: Sparkles,
      title: "Concept-Focused Teaching",
      description: "Understand the 'why' and 'how' behind mathematical principles without formula memorisation.",
    },
    {
      icon: ListOrdered,
      title: "Step-by-Step Problem Solving",
      description: "Systematic step breakdown for complex calculus, algebra, trigonometry, and coordinate geometry.",
    },
    {
      icon: MessageCircleQuestion,
      title: "Direct Doubt Support",
      description: "Dedicated doubt sessions to clear roadblocks promptly before they affect subsequent topics.",
    },
    {
      icon: FileCheck2,
      title: "Weekly Mock Tests",
      description: "Board-pattern timed mock papers to test independent speed, accuracy, and preparation level.",
    },
    {
      icon: Dumbbell,
      title: "Regular Practice",
      description: "Curated problem sets reinforcing high-weightage questions from NCERT and board question banks.",
    },
    {
      icon: Target,
      title: "Board Exam-Focused Preparation",
      description: "Aligned with CBSE, State Board, and ICSE patterns, marking schemes, and presentation styles.",
    },
    {
      icon: Compass,
      title: "Structured Maths Learning",
      description: "A disciplined chapter roadmap that keeps the student ahead of school tests and final exams.",
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-shine-cardDark border-b border-teal-900/30 text-white relative">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/15 text-teal-300 text-xs font-bold uppercase tracking-wider mb-4 border border-teal-500/30">
            <Sparkles className="w-3.5 h-3.5 text-shine-gold" />
            Comprehensive Programme
          </div>
          <h2 className="font-heading text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight">
            What Your Child Will Get
          </h2>
          <p className="mt-4 text-slate-300 text-base sm:text-lg leading-relaxed">
            Everything required to build rock-solid mathematical confidence, independent solving skills, and high board exam scores.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
          {benefits.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="p-5 sm:p-6 rounded-3xl bg-slate-900/90 border border-teal-900/60 shadow-sm hover:shadow-glowTeal hover:border-teal-400 transition-all duration-200 flex items-start gap-4 group"
              >
                <div className="p-3 rounded-2xl bg-teal-500/20 text-teal-300 shrink-0 border border-teal-500/30 group-hover:bg-teal-500 group-hover:text-slate-950 transition-all">
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-heading text-sm sm:text-base font-bold text-white mb-1 group-hover:text-shine-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
