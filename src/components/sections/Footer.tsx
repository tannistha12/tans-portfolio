"use client";

import { ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="border-t border-white/5 bg-[#0b090f] py-12 relative overflow-hidden text-center md:text-left select-none">

      {/* Visual neon lines */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#ff007f] via-[#00f5d4] to-[#9d4edd] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">

        {/* Left Side: Logo & copyright */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <div className="w-6 h-6 rounded bg-[#ff007f] text-white flex items-center justify-center font-display font-extrabold text-sm border border-current">
              T
            </div>
            <span className="font-display font-extrabold text-xs tracking-widest text-white">
              TANNISTHA
            </span>
          </div>
          <span className="font-mono text-[9px] text-muted tracking-wide">
            © 2026 TANNISTHA. ALL CHANNELS SECURED.
          </span>
        </div>

        {/* Center: Built with tagline */}
        <div className="font-mono text-[10px] text-muted tracking-wider uppercase">
          Built with creativity and caffeine <span className="text-[#ff007f] animate-pulse">☕</span>
        </div>

        <div className="flex items-center">
        </div>
      </div>
    </footer>
  );
}
