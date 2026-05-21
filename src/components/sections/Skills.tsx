"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Code2, Brain, Database, Wrench, Cloud } from "lucide-react";

interface Skill {
  name: string;
  level: number;
}

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  color: string;
  shadowColor: string;
  skills: Skill[];
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<number>(0);

  const categories: SkillCategory[] = [
    {
      title: "ML / AI & Intelligence",
      icon: <Brain size={18} />,
      color: "text-[#00f5d4] border-[#00f5d4]",
      shadowColor: "rgba(0, 245, 212, 0.4)",
      skills: [
        { name: "PyTorch & TensorFlow", level: 65 },
        { name: "Scikit-Learn", level: 90 },
        { name: "FastAPI / Model Serving", level: 80 },
        { name: "Neural Networks & CNNs", level: 72 },
        { name: "Data Science (Pandas, NumPy)", level: 95 }
      ]
    },
    {
      title: "Backend & Databases",
      icon: <Database size={18} />,
      color: "text-[#9d4edd] border-[#9d4edd]",
      shadowColor: "rgba(157, 78, 221, 0.4)",
      skills: [
        { name: "Node.js / Express", level: 60 },
        { name: "Python / Scripting", level: 92 },
        { name: "PostgreSQL / SQL", level: 70 },
        { name: "MongoDB / Redis", level: 63 },
        { name: "REST APIs & WebSockets", level: 65 }
      ]
    },
    {
      title: "Cloud & Dev Tools",
      icon: <Cloud size={18} />,
      color: "text-[#ff7b00] border-[#ff7b00]",
      shadowColor: "rgba(255, 123, 0, 0.4)",
      skills: [
        { name: "Git / GitHub / CI-CD", level: 80 },
        { name: "Docker & Containerization", level: 50 },
        { name: "AWS (S3, EC2)", level: 50 },
        { name: "Vercel / Netlify Deployment", level: 70 },
        { name: "Linux / Shell Commands", level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 relative overflow-hidden">

      {/* Visual wire grid background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(157,78,221,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(157,78,221,0.03)_1px,transparent_1px)] bg-[size:30px_30px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-16 items-center lg:items-start">
          <span className="font-mono text-xs font-bold tracking-widest text-[#ff007f] uppercase text-neon-pink">
            // 02. KNOWLEDGE BASE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 flex items-center gap-3">
            TECHNICAL WEAPONRY <span className="w-12 h-1 bg-[#00f5d4] block rounded" />
          </h2>
        </div>

        {/* Dynamic Category Tabs */}
        <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-12">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(idx)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded font-mono text-xs font-bold border-2 transition-all duration-300 interactive-cursor ${activeTab === idx
                ? `bg-current bg-[#100c18] dark:bg-[#fdfaf2] text-[#ff007f] shadow-[4px_4px_0px_currentColor] translate-x-[-2px] translate-y-[-2px]`
                : "bg-transparent text-muted hover:border-muted hover:text-white"
                }`}
              style={{
                borderColor: activeTab === idx ? "inherit" : "rgba(255,255,255,0.12)"
              }}
            >
              {cat.icon}
              <span className="uppercase">{cat.title.split(" ")[0]}</span>
            </button>
          ))}
        </div>

        {/* Selected Skills Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* Detailed Skill Bars */}
          <div className="lg:col-span-8 space-y-6 w-full">
            {categories[activeTab].skills.map((skill, sIdx) => (
              <div
                key={sIdx}
                className="glass-panel p-5 border-2 border-current transition-all duration-300 retro-shadow-dark flex flex-col gap-2"
                style={{ color: categories[activeTab].color.split(" ")[1] }}
              >
                <div className="flex justify-between items-center font-mono text-sm">
                  <span className="font-bold tracking-wide uppercase text-white dark:text-[#fdfaf2]">{skill.name}</span>
                  <span className="font-extrabold">{skill.level}%</span>
                </div>

                {/* Vintage glowing neon progress slot */}
                <div className="w-full h-4 bg-black/40 border border-current p-0.5 relative overflow-hidden rounded-sm">
                  <motion.div
                    initial={{ width: "0%" }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, ease: "easeOut" }}
                    className="h-full bg-current rounded-sm shadow-lg"
                    style={{
                      boxShadow: `0 0 10px ${categories[activeTab].shadowColor}`
                    }}
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Quick Category Summary Card */}
          <div className="lg:col-span-4 w-full">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ type: "spring", stiffness: 120 }}
              className="glass-panel p-6 border-4 border-current retro-shadow-dark relative overflow-hidden text-center md:text-left"
              style={{ color: categories[activeTab].color.split(" ")[1] }}
            >
              <div className="absolute inset-0 bg-current opacity-2.5 pointer-events-none" />

              <h3 className="font-display font-extrabold text-xl mb-4 tracking-wide uppercase">
                {categories[activeTab].title}
              </h3>

              <div className="space-y-4 text-xs font-mono text-muted/90 leading-relaxed">
                <p className="font-sans">
                  Comprehensive theoretical and practical execution. Always building robust, clean codebases designed for high scalability and sub-100ms response timelines.
                </p>
                <div className="flex flex-wrap gap-2 pt-2 justify-center md:justify-start">
                  {categories[activeTab].skills.map((skill, badgeIdx) => (
                    <span
                      key={badgeIdx}
                      className="px-2 py-1 rounded bg-black/40 border border-current text-[10px] font-extrabold tracking-wider"
                    >
                      {skill.name.split(" ")[0]}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}
