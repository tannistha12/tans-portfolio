"use client";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Strengths from "@/components/sections/Strengths";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";

export default function Home() {
  const handleOpenTerminal = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("open-terminal"));
    }
  };

  return (
    <div className="relative w-full">
      {/* 1. Fullscreen Immersive Hero Area with 3D Canvas centerpiece */}
      <Hero onOpenTerminal={handleOpenTerminal} />

      {/* 2. Professional Journey and exploration bio */}
      <About />

      {/* 3. Skill progression Neon Progress indicators */}
      <Skills />

      {/* 4. Timeline growth resume terminal indicators */}
      <Experience />

      {/* 5. Honesty strengths and disclosures cards */}
      <Strengths />

      {/* 6. High-end Works archive with modal details overlay */}
      <Projects />

      {/* 7. Fully validated retro contact pipeline */}
      <Contact />
    </div>
  );
}
