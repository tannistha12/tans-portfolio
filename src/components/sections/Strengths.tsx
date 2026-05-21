"use client";

import { motion } from "framer-motion";
import { ShieldAlert, ShieldCheck, Flame, Compass, RefreshCw, Layers } from "lucide-react";

export default function Strengths() {
  const strengths = [
    { title: "Analytical thinking" },
    { title: "Curiosity-driven learning" },
    { title: "Adaptability" },
    { title: "Logical Consistency" },
    { title: "Quick learner" },
    { title: "Resilience" },
    { title: "Strong work ethic" },
    { title: "Problem-solving" }
  ];

  const weaknesses = [
    { title: "Perfectionism" },
    { title: "Overthinking small details" },
    { title: "Hesitant to ask for help" },
    { title: "Difficulty saying no" },
    { title: "Self-critical" }
  ];

  return (
    <section id="strengths" className="py-24 relative overflow-hidden">

      {/* Dynamic background wire lines */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(rgba(255,0,127,0.02)_1px,transparent_1px)] bg-[size:20px_20px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col mb-16 items-center">
          <span className="font-mono text-xs font-bold tracking-widest text-[#ff7b00] uppercase text-neon-orange">
            // 04. HUMAN COMPOSITION
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 flex items-center gap-3">
            STRENGTHS & DISCLOSURES <span className="w-12 h-1 bg-[#ff007f] block rounded" />
          </h2>
        </div>

        {/* Core Side-by-Side Panels Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          {/* Strengths Card */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-6 border-2 border-[#00f5d4] retro-shadow-teal bg-black/60 relative overflow-hidden flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-[#00f5d4]/20 pb-4 text-[#00f5d4]">
              <ShieldCheck size={24} className="animate-pulse" />
              <h3 className="font-display font-extrabold text-xl tracking-wider uppercase">
                CORE STRENGTHS
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {strengths.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#00f5d4]/10 text-[#00f5d4] border border-[#00f5d4]/20">
                    S_{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm md:text-base text-white dark:text-[#fdfaf2] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs md:text-sm text-muted/80 leading-relaxed font-sans">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Weaknesses / Honest Disclosures Card */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="glass-panel p-6 border-2 border-[#ff007f] retro-shadow-pink bg-black/60 relative overflow-hidden flex flex-col gap-6"
          >
            <div className="flex items-center gap-3 border-b border-[#ff007f]/20 pb-4 text-[#ff007f]">
              <ShieldAlert size={24} className="animate-pulse" />
              <h3 className="font-display font-extrabold text-xl tracking-wider uppercase">
                HONEST DISCLOSURES
              </h3>
            </div>

            <div className="space-y-6 flex-1">
              {weaknesses.map((item, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <span className="font-mono text-xs font-bold px-2 py-1 rounded bg-[#ff007f]/10 text-[#ff007f] border border-[#ff007f]/20">
                    W_{idx + 1}
                  </span>
                  <div>
                    <h4 className="font-display font-bold text-sm md:text-base text-white dark:text-[#fdfaf2] mb-1">
                      {item.title}
                    </h4>

                  </div>
                </div>
              ))}
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
