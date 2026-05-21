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

        {/* Right Side: Back to top and quick social badges */}
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/tannistha12"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Link"
              className="text-muted hover:text-white transition-colors p-1 interactive-cursor flex items-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Link"
              className="text-muted hover:text-white transition-colors p-1 interactive-cursor flex items-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-2.761 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
              </svg>
            </a>
            <a
              href="mailto:tannistha@example.com"
              aria-label="Email Link"
              className="text-muted hover:text-white transition-colors p-1 interactive-cursor flex items-center"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 3.937v-8.193l4.623 4.256zm1.441 1.326c-.556.513-1.425.514-1.981 0l-5.083-4.681h22.203l-5.139 4.681zm1.378-1.272l4.558-4.223 4.558 4.223-9.116 0zm4.558 1.488l3.39-3.131 4.623 4.257v-8.194l-8.013 7.068z"/>
              </svg>
            </a>
          </div>

          <button
            onClick={handleScrollToTop}
            aria-label="Back to Top"
            className="flex items-center justify-center w-8 h-8 rounded border border-white/10 hover:border-[#ff007f] hover:text-[#ff007f] bg-white/5 transition-all duration-300 interactive-cursor active:scale-90"
          >
            <ChevronUp size={14} />
          </button>
        </div>

      </div>
    </footer>
  );
}
