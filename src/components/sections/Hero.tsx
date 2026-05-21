"use client";

import { motion } from "framer-motion";
import Canvas3D from "../Canvas3D";
import { ChevronDown, FileText, Send, Layers } from "lucide-react";

interface HeroProps {
  onOpenTerminal: () => void;
}

export default function Hero({ onOpenTerminal }: HeroProps) {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth"
      });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* 3D WebGL Centerpiece Canvas */}
      <Canvas3D />

      {/* Cyberperspective Background scrolling grid */}
      <div className="cyber-grid-bg" />

      {/* Atmospheric lighting backdrop */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0b090f]/10 via-transparent to-[#0b090f] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-center py-12">

        {/* Left Hand: Neon Headline Content */}
        <div className="lg:col-span-7 flex flex-col items-start text-left">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#00f5d4] bg-[#00f5d4]/10 text-xs font-mono text-[#00f5d4] mb-6 tracking-widest text-neon-teal"
          >
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
            SYSTEM ONLINE: v4.6-LIVE
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-extrabold tracking-tight leading-tight mb-4"
          >
            <span className="text-[#ff007f] text-neon-pink">Tannistha</span>
            <br />
            <span className="text-[#5f1cf1ff] text-neon-blue">Chattapadhyay</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="text-lg md:text-2xl font-mono text-muted mb-6 tracking-wide"
          >
            Computer Science Engineer <span className="text-[#ff7b00]">|</span> Data Scientist <span className="text-[#00f5d4]">|</span></motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
            className="text-sm md:text-base text-muted/80 max-w-xl mb-8 leading-relaxed font-sans"
          >
            Transforming raw data into meaningful intelligence through machine learning, research, and thoughtful engineering.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
            className="flex flex-wrap items-center gap-4"
          >
            <button
              onClick={() => handleScrollTo("projects")}
              className="px-6 py-3 border-2 border-[#ff007f] font-mono text-xs font-bold tracking-widest text-[#ff007f] hover:bg-[#ff007f] hover:text-white transition-all duration-300 retro-shadow-pink hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none interactive-cursor bg-black/45"
            >
              VIEW WORKS
            </button>

            <a
              href="#cv"
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo("contact");
              }}
              className="px-5 py-3 font-mono text-xs font-bold tracking-widest flex items-center gap-2 hover:text-[#ff7b00] transition-all interactive-cursor"
            >
              <FileText size={14} />
              DOWNLOAD CV
            </a>
          </motion.div>
        </div>

        {/* Right Hand: Floating Glass Cyber Panel */}
        <div className="lg:col-span-5 hidden lg:flex items-center justify-center relative">
          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: 5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ type: "spring", damping: 15, delay: 2.2 }}
            className="w-full max-w-sm glass-panel p-6 border-2 border-[#9d4edd] shadow-2xl relative overflow-hidden group select-none retro-shadow-purple"
          >
            <div className="absolute inset-0 bg-[#9d4edd]/5 pointer-events-none" />
            <div className="flex items-center justify-between border-b border-[#9d4edd]/20 pb-3 mb-4 text-xs font-mono text-[#9d4edd]">
              <span>DIAGNOSTICS</span>
              <span className="animate-pulse">● STABLE</span>
            </div>

            <div className="space-y-4 font-mono text-xs text-muted/90">
              <div className="flex justify-between">
                <span>CPU LOADING:</span>
                <span className="text-[#00f5d4]">8.5% (STABLE)</span>
              </div>
              <div className="flex justify-between">
                <span>MEM TOTAL:</span>
                <span className="text-[#ff007f]">64.0 GB LPDDR5</span>
              </div>
              <div className="flex justify-between">
                <span>LOC:</span>
                <span className="text-[#ff7b00]">Pune, India</span>
              </div>
              <div className="border-t border-[#9d4edd]/10 pt-4 flex flex-col gap-2">
                <span className="text-[10px] text-[#9d4edd] uppercase tracking-wider">CREATOR QUOTE:</span>
                <p className="italic text-xs text-[#00f5d4]/90 font-sans leading-relaxed">
                  "The most effective way to predict the future is to build it with clean components."
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Floating Scroll Indicator arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center gap-1 font-mono text-[9px] text-muted tracking-widest">
        <span>SCROLL DOWN</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          onClick={() => handleScrollTo("about")}
          className="cursor-pointer interactive-cursor"
        >
          <ChevronDown size={14} className="text-[#ff007f]" />
        </motion.div>
      </div>

    </section>
  );
}
