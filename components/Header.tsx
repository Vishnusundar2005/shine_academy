import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, ArrowRight, Sparkles } from "lucide-react";
import { academyConfig } from "@/config/academy";

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full glass-header border-b border-teal-900/40 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        {/* Logo using exact shine-logo.jpg */}
        <Link href="/" className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 rounded-xl">
          <div className="relative w-10 h-10 sm:w-12 sm:h-12 rounded-xl overflow-hidden bg-white p-0.5 shadow-glowTeal border border-teal-500/40 group-hover:scale-105 transition-transform">
            <Image
              src="/images/shine-logo.jpg"
              alt="Shine Tuition Academy Logo"
              width={48}
              height={48}
              priority
              className="w-full h-full object-contain rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-heading font-extrabold text-xl sm:text-2xl tracking-tight text-white leading-none group-hover:text-teal-300 transition-colors">
              SHINE
            </span>
            <span className="text-[10px] sm:text-[11px] font-bold tracking-widest text-shine-gold uppercase mt-0.5">
              TUITION ACADEMY
            </span>
          </div>
        </Link>

        {/* Minimal Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-300">
          <a href="#problem" className="hover:text-teal-300 transition-colors">
            The Problem
          </a>
          <a href="#method" className="hover:text-teal-300 transition-colors">
            How It Works
          </a>
          <a href="#demo-video" className="hover:text-shine-gold transition-colors flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-shine-gold" />
            Live Demo
          </a>
          <a href="#faculty" className="hover:text-teal-300 transition-colors">
            Faculty
          </a>
          <a href="#small-batch" className="hover:text-teal-300 transition-colors">
            Small Batch
          </a>
          <a href="#faq" className="hover:text-teal-300 transition-colors">
            FAQ
          </a>
        </nav>

        {/* Action CTAs */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${academyConfig.phoneRaw}`}
            className="hidden sm:inline-flex items-center gap-1.5 text-xs lg:text-sm font-bold text-slate-200 hover:text-teal-300 px-3 py-2 rounded-xl hover:bg-slate-900 border border-slate-800 transition-colors"
            title="Call Academy Directly"
          >
            <Phone className="w-4 h-4 text-teal-400" />
            <span>{academyConfig.displayPhone}</span>
          </a>

          <a
            href="#enquiry"
            className="shimmer-button inline-flex items-center justify-center gap-1.5 px-4 sm:px-5 py-2.5 rounded-xl bg-gradient-to-r from-teal-500 via-teal-400 to-shine-gold hover:from-teal-400 hover:to-shine-gold active:scale-95 text-slate-950 font-extrabold text-xs sm:text-sm shadow-glowTeal transition-all duration-200"
          >
            <span>CHECK AVAILABLE BATCH</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
}
