"use client";

import React, { useState } from "react";
import Image from "next/image";

const navLinks = [
  { label: "Method", href: "#method" },
  { label: "Classroom", href: "#classroom" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Foundation", href: "#foundation" },
  { label: "Board Coaching", href: "#board-coaching" },
  { label: "FAQs", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-40 border-b border-border/60 bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-12">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5">
          <Image
            src="/assets/shine-logo-BS6jSxsV.jpg"
            alt="Shine Tuition Academy logo"
            width={40}
            height={40}
            className="size-10 rounded-md object-cover shadow-sm"
          />
          <div className="leading-tight">
            <div className="font-display text-lg font-semibold tracking-tight text-teal-deep">
              SHINE
            </div>
            <div className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gold-deep">
              Tuition Academy
            </div>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <div className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-teal"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right Action / Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden rounded-full bg-teal px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.16em] text-parchment transition-colors hover:bg-teal-deep sm:inline-flex"
          >
            Book Free Call
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex size-9 items-center justify-center rounded-md border border-border text-ink-soft transition-colors hover:border-teal hover:text-teal lg:hidden"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" className="size-5" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="border-t border-border/60 bg-background px-6 py-5 shadow-lg lg:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-sm font-medium uppercase tracking-[0.14em] text-ink-soft transition-colors hover:text-teal"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2">
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex w-full items-center justify-center rounded-full bg-teal px-5 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-parchment transition-colors hover:bg-teal-deep"
              >
                Book Free Call
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
