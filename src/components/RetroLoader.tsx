"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface RetroLoaderProps {
  onComplete: () => void;
}

export default function RetroLoader({ onComplete }: RetroLoaderProps) {
  const [logs, setLogs] = useState<string[]>([]);
  const [percent, setPercent] = useState(0);
  const [visible, setVisible] = useState(true);

  const bootSequence = [
    "SYSTEM BASIC V4.6 (C) 2004-2026",
    "640K SYSTEM RAM - OK",
    "PROCESSOR: MOS 6502 @ 1.02 MHz - OK",
    "DETECTING WEB GL COMPATIBILITY... PASSED",
    "SEARCHING FOR PORTFOLIO MODULES... FOUND",
    "LOADING MEMORIES / CREATIVE CORE...",
    "LOADING 3D WEBGL MOTION SYSTEMS...",
    "ESTABLISHING SYNTH AUDIO INTERFACE...",
    "BOOT COMPLETE. RUN PORTFOLIO.EXE"
  ];

  // Print logs line by line
  useEffect(() => {
    let currentLine = 0;
    const interval = setInterval(() => {
      if (currentLine < bootSequence.length) {
        setLogs((prev) => [...prev, bootSequence[currentLine]]);
        currentLine++;
      } else {
        clearInterval(interval);
      }
    }, 350);

    return () => clearInterval(interval);
  }, []);

  // Loading progress percentage counter
  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            setVisible(false);
            setTimeout(onComplete, 500); // trigger final completion transition
          }, 600);
          return 100;
        }
        const step = Math.floor(Math.random() * 15) + 5;
        return Math.min(prev + step, 100);
      });
    }, 150);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="fixed inset-0 bg-[#0b090f] z-[99999] flex flex-col items-center justify-center p-6 font-mono text-[#00f5d4] select-none crt-screen"
        >
          {/* Subtle flicker overlay */}
          <div className="absolute inset-0 bg-black/10 animate-flicker pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none" />

          <div className="w-full max-w-2xl border-4 border-[#00f5d4] p-6 retro-shadow-teal bg-black/85 relative overflow-hidden">
            {/* Header */}
            <div className="flex justify-between border-b-2 border-[#00f5d4] pb-2 mb-4 text-xs tracking-widest text-[#ff007f]">
              <span>SYSTEM BOOT PROCESS</span>
              <span>v4.6.0-PROD</span>
            </div>

            {/* Simulated Boot Console Outputs */}
            <div className="space-y-2 text-xs md:text-sm h-64 overflow-y-auto mb-6 pr-2 scrollbar-none">
              {logs.map((log, index) => (
                <div key={index} className="flex items-start">
                  <span className="text-[#ff7b00] mr-2">&gt;</span>
                  <span>{log}</span>
                </div>
              ))}
              {logs.length < bootSequence.length && (
                <span className="inline-block w-2 h-4 bg-[#00f5d4] animate-pulse" />
              )}
            </div>

            {/* Bottom Progress Bar */}
            <div className="border-t-2 border-[#00f5d4] pt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex justify-between mb-1 text-xs">
                  <span>LOADING RESOURCES</span>
                  <span>{percent}%</span>
                </div>
                <div className="w-full bg-[#100c18] border border-[#00f5d4] h-4 p-0.5">
                  <div
                    className="bg-[#ff007f] h-full transition-all duration-150 ease-out"
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
              <div className="text-right text-xs md:w-28 text-[#9d4edd]">
                [ MEM SECURE ]
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
