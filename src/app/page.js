"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import DotGrid from "@/components/DotGrid";
import ContactMe from "@/components/ContactMe";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <main className="relative min-h-screen text-white overflow-hidden">
      {/* ===== Global Background (applies everywhere) ===== */}
      <div className="absolute inset-0 -z-10 bg-[#070113]">
        <DotGrid
          dotSize={1.5}
          gap={40}
          baseColor="#7F5AF0"
          activeColor="#E0AAFF"
          proximity={150}
          shockRadius={900}
          shockStrength={3}
          resistance={1000}
          returnDuration={3}
        />
      </div>

      {/* ===== Foreground Components ===== */}
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <ContactMe />
      <Footer/>
    </main>
  );
}
