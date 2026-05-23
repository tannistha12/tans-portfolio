"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, Star, Sparkles, Code2 } from "lucide-react";

interface Project {
  title: string;
  category: string;
  image: string; // placeholder description or custom generated image path
  description: string;
  tags: string[];
  github: string;
  color: string;
  shadowClass: string;
}

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projectsList: Project[] = [
    {
      title: "Jarvis-AI",
      category: "ARTIFICIAL INTELLIGENCE",
      image: "linear-gradient(135deg, #00f5d4 0%, #00b4d8 100%)",
      description: "A voice-enabled artificial intelligence assistant designed to simplify daily tasks. (Work In Progress)",
      tags: ["Ollama", "Python", "Antigravity", "LangChain"],
      github: "https://github.com/tannistha12/jarvis-ai",
      color: "border-[#00f5d4] text-[#00f5d4]",
      shadowClass: "retro-shadow-teal"
    },
    {
      title: "Portfolio Website",
      category: "WEB DEVELOPMENT",
      image: "linear-gradient(135deg, #ff7b00 0%, #ff007f 100%)",
      description: "Personal portfolio website featuring projects, machine learning interests, technical skills, and interactive 3D UI experiences..",
      tags: ["Next.js", "Three.js", "Framer Motion", "Tailwind CSS", "TypeScript", "Github", "Deployed on Vercel"],
      github: "https://github.com/tannistha12/tans-portfolio",
      color: "border-[#ff7b00] text-[#ff7b00]",
      shadowClass: "retro-shadow-orange"
    },
    {
      title: "Data Warehouse and Analytics Project",
      category: "DATA SCIENCE & WAREHOUSING",
      image: "linear-gradient(135deg, #ff007f 0%, #9d4edd 100%)",
      description: "This project demonstrates a comprehensive data warehousing and analytics solution, from building a data warehouse to generating actionable insights. Designed as a portfolio project, it highlights industry best practices in data engineering and analytics.",
      tags: ["Python", "MySQL Server"],
      github: "https://github.com/tannistha12/sql-data-warehouse-project",
      color: "border-[#ff007f] text-[#ff007f]",
      shadowClass: "retro-shadow-pink"
    },
    {
      title: "Feedback Sentiment Analyzer",
      category: "NATURAL LANGUAGE PROCESSING",
      image: "linear-gradient(135deg, #00f5d4 0%, #00b4d8 100%)",
      description: "An end-to-end Sentiment Analysis & Feedback Insights project built during my internship at Ajinkya Creation Pvt. Ltd. This Streamlit-powered app lets users upload their own CSV files and instantly visualize customer sentiment — Positive, Negative, or Neutral — in a clean, interactive dashboard.",
      tags: ["Python", "Streamlit", "Pandas", "Matplotlib", "Seaborn"],
      github: "https://github.com/tannistha12/feedback-sentiment-analyzer",
      color: "border-[#00f5d4] text-[#00f5d4]",
      shadowClass: "retro-shadow-teal"
    }
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-black/5">

      {/* Background stars / details */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(157,78,221,0.02)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Header */}
        <div className="flex flex-col mb-16 items-center lg:items-start">
          <span className="font-mono text-xs font-bold tracking-widest text-[#00f5d4] uppercase text-neon-teal">
            // 05. CREATIVE ARCHIVE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 flex items-center gap-3">
            PORTFOLIO WORKS <span className="w-12 h-1 bg-[#ff007f] block rounded" />
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`glass-panel border-4 ${project.color} ${project.shadowClass} p-0 overflow-hidden flex flex-col hover:translate-y-[-6px] hover:translate-x-[-2px] transition-all duration-300 relative group`}
            >
              {/* Card visual mock/banner */}
              <div
                className="h-44 w-full relative flex items-center justify-center p-4 select-none"
                style={{ background: project.image }}
              >
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/0 transition-colors duration-300" />
                <Code2 size={44} className="text-white/80 animate-pulse drop-shadow-[0_0_8px_rgba(255,255,255,0.4)]" />
                <span className="absolute top-3 left-3 bg-[#100c18]/85 text-[9px] font-mono font-bold tracking-widest px-2.5 py-1 text-white border border-current rounded-sm">
                  {project.category}
                </span>
              </div>

              {/* Card content text */}
              <div className="p-6 flex-1 flex flex-col gap-4 bg-black/80">
                <h3 className="font-display font-extrabold text-lg text-white group-hover:text-[#00f5d4] transition-colors leading-snug">
                  {project.title}
                </h3>

                <p className="text-xs md:text-sm text-muted/80 leading-relaxed font-sans flex-1">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.slice(0, 3).map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2 py-0.5 rounded bg-white/5 border border-white/10 text-[9px] font-mono font-semibold tracking-wider text-muted/90"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-[9px] font-mono text-muted/70 flex items-center pl-1">
                      +{project.tags.length - 3} more
                    </span>
                  )}
                </div>

                {/* Action Footer */}
                <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="font-mono text-[10px] font-extrabold tracking-widest text-[#00f5d4] hover:text-white transition-colors interactive-cursor"
                  >
                    EXAMINE.EXE &gt;
                  </button>
                  <div className="flex items-center gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted hover:text-white transition-all interactive-cursor flex items-center"
                      aria-label="GitHub Repository"
                    >
                      <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Immersive Slide-Up Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4 bg-[#0b090f]/90 backdrop-blur-md crt-screen"
          >
            {/* Flicker visual overlay */}
            <div className="absolute inset-0 bg-black/10 animate-flicker pointer-events-none" />

            <motion.div
              initial={{ scale: 0.9, y: 40 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 40 }}
              transition={{ type: "spring", damping: 22 }}
              className={`w-full max-w-xl glass-panel p-0 border-4 bg-black relative overflow-hidden retro-shadow-dark ${selectedProject.color.split(" ")[0]}`}
            >

              {/* Top Banner visual block */}
              <div
                className="h-32 w-full relative flex items-center justify-center"
                style={{ background: selectedProject.image }}
              >
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-1.5 rounded-full bg-black/50 text-white hover:bg-red-500 hover:text-black border border-white/20 transition-all interactive-cursor"
                  aria-label="Close Modal"
                >
                  <X size={16} />
                </button>
                <div className="flex items-center gap-1.5 px-3 py-1 rounded bg-[#100c18] font-mono text-[9px] font-bold tracking-widest text-white border border-current">
                  <Sparkles size={10} className="animate-pulse" />
                  <span>PROJECT DETAIL DECODED</span>
                </div>
              </div>

              {/* Details Body */}
              <div className="p-6 space-y-6">
                <div>
                  <span className="font-mono text-[10px] tracking-widest font-extrabold text-[#9d4edd] block mb-1">
                    {selectedProject.category}
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-white tracking-wide">
                    {selectedProject.title}
                  </h3>
                </div>

                <p className="text-xs md:text-sm text-muted/95 leading-relaxed font-sans">
                  {selectedProject.longDescription}
                </p>

                {/* Tech tags */}
                <div className="space-y-2">
                  <span className="font-mono text-[10px] font-bold text-muted uppercase tracking-widest block">
                    // INTEGRATED TOOLKIT:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2.5 py-1 rounded bg-white/5 border border-white/10 text-[10px] font-mono tracking-wider text-[#00f5d4] border-[#00f5d4]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action controls */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-white/10">
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-white font-mono text-xs font-bold tracking-wider text-white hover:bg-white hover:text-black transition-all rounded-sm interactive-cursor"
                  >
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    GITHUB CODE
                  </a>
                  <a
                    href={selectedProject.demo}
                    className="flex-1 flex items-center justify-center gap-2 py-3 border-2 border-[#00f5d4] font-mono text-xs font-bold tracking-wider text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black transition-all rounded-sm interactive-cursor"
                  >
                    <ExternalLink size={14} />
                    LIVE DEPLOYMENT
                  </a>
                </div>

              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}
