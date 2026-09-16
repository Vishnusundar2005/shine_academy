import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import MethodSection from "@/components/MethodSection";
import ClassroomSection from "@/components/ClassroomSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FoundationSection from "@/components/FoundationSection";
import BoardCoachingSection from "@/components/BoardCoachingSection";
import VideoSection from "@/components/VideoSection";
import FAQSection from "@/components/FAQSection";
import ContactSection from "@/components/ContactSection";
import BannerSection from "@/components/BannerSection";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <div className="min-h-dvh bg-background text-foreground antialiased selection:bg-teal-soft selection:text-ink">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <MethodSection />
        <ClassroomSection />
        <TestimonialsSection />
        <FoundationSection />
        <BoardCoachingSection />
        <VideoSection />
        <FAQSection />
        <ContactSection />
        <BannerSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
