"use client";

import { motion } from "framer-motion";
import { Sparkles, BrainCircuit, Heart, Flame, Code } from "lucide-react";

export default function About() {
  const exploringCards = [
    {
      icon: <BrainCircuit size={20} className="text-[#00f5d4]" />,
      title: "Machine Learning",
      description: "Building neural architectures, custom CNN classification models, predictive pipelines, and automated intelligence pipelines.",
      color: "border-[#00f5d4]"
    },
    {
      icon: <Code size={20} className="text-[#ff007f]" />,
      title: "Data Science and Analytics",
      description: "Exploring the intersection of machine learning, analytics, research, and modern digital experiences.",
      color: "border-[#ff007f]"
    },
    {
      icon: <Sparkles size={20} className="text-[#9d4edd]" />,
      title: "Open Source",
      description: "Contributing to community packages, building tooling integrations, and developing collaborative systems globally.",
      color: "border-[#9d4edd]"
    },
    {
      icon: <Flame size={20} className="text-[#ff7b00]" />,
      title: "Scientific Research",
      description: "Exploring algorithmic complexity, deep learning performance limits, and modern optimization architectures.",
      color: "border-[#ff7b00]"
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden bg-black/10">

      {/* Muted background accents */}
      <div className="absolute top-1/4 right-0 w-80 h-80 rounded-full bg-[#ff007f]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 rounded-full bg-[#00f5d4]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="font-mono text-xs font-bold tracking-widest text-[#00f5d4] uppercase text-neon-teal">
            // 01. CORE DIAGNOSTIC
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 flex items-center gap-3">
            ABOUT ME <span className="w-12 h-1 bg-[#ff007f] block rounded" />
          </h2>
        </div>

        {/* Top Grid: Journey & Mini 3D Illusion */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-20">

          {/* Bio Content */}
          <div className="lg:col-span-7 space-y-6 text-sm md:text-base text-muted/95 leading-relaxed">
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="font-sans"
            >
              I’m a third-year <strong className="text-[#00f5d4]">Computer Science Engineer</strong> and
              <strong className="text-[#ff007f]"> Data Scientist</strong> I'm constantly exploring how data can drive real impact from insightful visualizations to scalable solutions and I love collaborating on projects that challenge me to think outside the box.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-sans"
            >
              Beyond the code, I love to <span className="text-[#ff7b00] font-mono font-bold">travel and a curious soul who thrives on meeting new people, embracing different perspectives, and soaking up knowledge</span> wherever I go. I believe that tech isn’t just about algorithms, it’s about people, connections, and solving meaningful problems together
            </motion.p>

            {/* Learning Philosophy Callout Panel */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, delay: 0.2 }}
              className="glass-panel p-5 border-l-4 border-[#ff007f] bg-[#ff007f]/5"
            >
              <h3 className="font-mono text-xs font-bold text-[#ff007f] mb-1 tracking-widest uppercase flex items-center gap-1.5">
                <Heart size={12} className="animate-pulse" />
                LEARNING PHILOSOPHY
              </h3>
              <p className="font-mono text-xs text-muted/90 italic leading-relaxed">
                "Growth isn't comfortable. It occurs at the edge of failure. Always run toward complex problems, master them, and build tools to make the complex feel simple."
              </p>
            </motion.div>
          </div>

          {/* Right Column: Premium Glowing 3D Vector Isometric Shape (CSS & SVG) */}
          <div className="lg:col-span-5 flex justify-center items-center relative">
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotateY: [0, 360],
              }}
              transition={{
                y: { repeat: Infinity, duration: 6, ease: "easeInOut" },
                rotateY: { repeat: Infinity, duration: 25, ease: "linear" }
              }}
              className="w-64 h-64 relative flex items-center justify-center pointer-events-none"
              style={{ transformStyle: "preserve-3d", perspective: 600 }}
            >
              {/* Outer Cyber Rings */}
              <div className="absolute inset-0 rounded-full border-4 border-dashed border-[#ff007f]/30 animate-[spin_30s_linear_infinite]" />
              <div className="absolute inset-4 rounded-full border border-[#00f5d4]/40 animate-[spin_20s_linear_infinite_reverse]" />

              {/* Spinning Neon Cube Shell */}
              <svg className="w-40 h-40 drop-shadow-[0_0_15px_rgba(0,245,212,0.6)]" viewBox="0 0 100 100">
                <motion.polygon
                  points="50,10 90,30 90,70 50,90 10,70 10,30"
                  fill="none"
                  stroke="#00f5d4"
                  strokeWidth="2"
                  strokeDasharray="6 4"
                />
                <motion.polygon
                  points="50,10 50,90"
                  fill="none"
                  stroke="#9d4edd"
                  strokeWidth="1.5"
                />
                <motion.polygon
                  points="10,30 90,70"
                  fill="none"
                  stroke="#ff7b00"
                  strokeWidth="1.5"
                />
                <motion.polygon
                  points="90,30 10,70"
                  fill="none"
                  stroke="#ff007f"
                  strokeWidth="1.5"
                />
              </svg>
            </motion.div>
          </div>

        </div>

        {/* Lower Grid: Exploring Areas */}
        <div>
          <h3 className="font-mono text-xs font-bold text-muted uppercase tracking-widest mb-8 text-center md:text-left">
            // CURRENTLY EXPLORING AREAS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {exploringCards.map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={`glass-panel p-6 border-t-4 ${card.color} hover:translate-y-[-4px] transition-all duration-300 retro-shadow-dark`}
              >
                <div className="mb-4">{card.icon}</div>
                <h4 className="font-display font-bold text-base mb-2 tracking-wide">
                  {card.title}
                </h4>
                <p className="text-xs text-muted/80 leading-relaxed font-sans">
                  {card.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
