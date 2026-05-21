"use client";

import { useEffect, useState } from "react";
import { useTheme } from "@/hooks/useTheme";
import AudioSynth from "./AudioSynth";
import { Moon, Sun, Monitor, Cpu, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

interface NavbarProps {
  onOpenTerminal: () => void;
}

export default function Navbar({ onOpenTerminal }: NavbarProps) {
  const { theme, toggleTheme, crtEnabled, toggleCrt } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const navItems = [
    { id: "about", label: "ABOUT" },
    { id: "skills", label: "SKILLS" },
    { id: "experience", label: "GROWTH" },
    { id: "projects", label: "WORKS" },
    { id: "contact", label: "CONTACT" }
  ];

  // Track window scroll for active indicators & navbar compression
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section tracker for active status
      const sections = ["hero", "about", "skills", "experience", "projects", "contact"];
      const currentScroll = window.scrollY + 120;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (currentScroll >= offsetTop && currentScroll < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
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
    <motion.header
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: 1.2, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled
        ? "py-3 glass-navbar shadow-md"
        : "py-6 bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">

        {/* Personalized Interactive Initials Logo */}
        <div
          onDoubleClick={onOpenTerminal}
          className="flex items-center gap-2 group cursor-pointer select-none"
          title="Double click to boot retro console"
        >
          <div className="relative flex items-center justify-center w-9 h-9 rounded bg-[#ff007f] font-display text-white font-extrabold text-lg border-2 border-current shadow-[2px_2px_0px_currentColor] group-hover:bg-[#00f5d4] group-hover:text-black transition-all">
            T
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-[#00f5d4] group-hover:bg-[#ff007f] rounded-full border border-black animate-ping" />
          </div>
          <div className="flex flex-col">
            <span className="font-display text-xs md:text-sm font-extrabold tracking-wider group-hover:text-[#ff007f] transition-colors">
              TANNISTHA
            </span>
            <span className="font-mono text-[9px] text-[#9d4edd] dark:text-[#00f5d4] tracking-widest leading-none">
            </span>
          </div>
        </div>

        {/* Desktop Main Navigation Menu */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs font-semibold">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`relative px-2 py-1 transition-all duration-300 hover:text-[#ff007f] interactive-cursor tracking-wider ${isActive ? "text-[#ff007f] font-bold" : "text-muted"
                  }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavLine"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#ff007f]"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </nav>

        {/* Action Panel: Toggles and Synth */}
        <div className="flex items-center gap-2 md:gap-3">

          {/* Web Audio Synthesizer */}
          <AudioSynth />

          {/* CRT Effect Switcher */}
          <button
            onClick={toggleCrt}
            aria-label="Toggle CRT screen overlay"
            className="p-2 rounded-full border border-current text-xs md:text-sm font-bold tracking-wider hover:bg-white/10 active:scale-95 transition-all text-muted interactive-cursor bg-black/20"
            title="Toggle CRT vintage filter"
            style={{ color: crtEnabled ? "#ff7b00" : "currentColor" }}
          >
            <Monitor size={14} className={crtEnabled ? "animate-pulse" : ""} />
          </button>


          {/* Quick Console Launcher button */}
          <button
            onClick={onOpenTerminal}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded border-2 border-current text-[10px] font-bold tracking-widest text-[#00f5d4] hover:bg-[#00f5d4] hover:text-[#100c18] active:scale-95 transition-all interactive-cursor bg-black/50"
          >
            <Cpu size={12} />
            <span>SYS_CON</span>
          </button>
        </div>

      </div>
    </motion.header>
  );
}
