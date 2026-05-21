"use client";

import { useState, useEffect } from "react";
import { ThemeProvider, useTheme } from "@/hooks/useTheme";
import RetroLoader from "./RetroLoader";
import CustomCursor from "./CustomCursor";
import Terminal from "./Terminal";
import Navbar from "./Navbar";
import Footer from "./sections/Footer";

function InnerWrapper({ children }: { children: React.ReactNode }) {
  const [booting, setBooting] = useState(true);
  const [terminalOpen, setTerminalOpen] = useState(false);
  const { crtEnabled } = useTheme();

  // Listen to open-terminal events from nested components
  useEffect(() => {
    const handleOpen = () => setTerminalOpen(true);
    
    // Bind global keydown command palette easter egg: backtick (`) key
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "`") {
        e.preventDefault();
        setTerminalOpen((prev) => !prev);
      }
    };

    window.addEventListener("open-terminal", handleOpen);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("open-terminal", handleOpen);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      {/* 1. Retro Bootup Loader simulator */}
      <RetroLoader onComplete={() => setBooting(false)} />

      {!booting && (
        <div className="flex flex-col min-h-screen relative w-full overflow-x-hidden selection-glow">
          
          {/* 2. VHS Grain Noise Overlay */}
          <div className="vhs-grain" />

          {/* 3. Dynamic Interactive Custom Cursor */}
          <CustomCursor />

          {/* 4. Draggable Terminal Window easter egg */}
          <Terminal isOpen={terminalOpen} onClose={() => setTerminalOpen(false)} />

          {/* 5. Responsive Glassmorphism Navigation Bar */}
          <Navbar onOpenTerminal={() => setTerminalOpen(true)} />

          {/* 6. Main Portfolio Page Flow */}
          <main className="flex-grow w-full relative z-10">{children}</main>

          {/* 7. Retro Minimalist Footer */}
          <Footer />

          {/* 8. Conditional CRT Screen filters */}
          {crtEnabled && (
            <div className="crt-screen-container">
              <div className="crt-scanlines" />
              <div className="crt-flicker" />
              <div className="crt-curve" />
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default function ClientWrapper({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <InnerWrapper>{children}</InnerWrapper>
    </ThemeProvider>
  );
}
