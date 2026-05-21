"use client";

import { motion } from "framer-motion";
import { Award, Terminal as TermIcon, Briefcase, Rocket, BookOpen } from "lucide-react";

interface TimelineItem {
  icon: React.ReactNode;
  date: string;
  role: string;
  company: string;
  color: string;
  textColor: string;
  shadowColor: string;
  details: string[];
}

export default function Experience() {
  const timeline: TimelineItem[] = [
    {
      icon: <Briefcase size={16} />,
      date: "JUNE 2024 - JULY 2024",
      role: "Summer Intern",
      company: "Indian Red Cross Society",
      color: "border-[#00f5d4]",
      textColor: "text-[#00f5d4]",
      shadowColor: "rgba(0, 245, 212, 0.3)",
      details: [
        "Assisted visually impaired and deaf-mute individuals in customized learning and rehabilitation programs.",
        "Developed an understanding of adaptive education strategies for disabled individuals.",
      ]
    },
    {
      icon: <Briefcase size={16} />,
      date: "JUNE 2025 - JULY 2025",
      role: "Web Developer Intern",
      company: "Anjinkya Creatiion Private Limited",
      color: "border-[#9d4edd]",
      textColor: "text-[#9d4edd]",
      shadowColor: "rgba(157, 78, 221, 0.3)",
      details: [
        "Developed a digital payment app PayKro (test mode) integrating Razorpay API.",
        "Built a feedback sentiment analyzer using Python (Pandas, Matplotlib) for customer insights.",
      ]
    },
    {
      icon: <BookOpen size={16} />,
      date: "May 2026 - PRESENT",
      role: "Research Intern",
      company: "Indian Meteorological Department",
      color: "border-[#ff7b00]",
      textColor: "text-[#ff7b00]",
      shadowColor: "rgba(255, 123, 0, 0.3)",
      details: [
        "Will Be Shared Soon !"
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden bg-black/15">

      {/* Absolute Glow spots */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-[#9d4edd]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">

        {/* Section Header */}
        <div className="flex flex-col mb-20 items-center">
          <span className="font-mono text-xs font-bold tracking-widest text-[#9d4edd] uppercase text-neon-purple">
            // 03. HISTORICAL TIMELINE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 flex items-center gap-3 text-center">
            GROWTH JOURNEY <span className="w-12 h-1 bg-[#ff7b00] block rounded" />
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="relative border-l-2 border-dashed border-[#9d4edd]/40 ml-4 md:ml-32 space-y-12 pb-8">

          {timeline.map((item, idx) => (
            <div key={idx} className="relative pl-8 md:pl-12 group">

              {/* Timeline Glowing Bullet Node */}
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ type: "spring", stiffness: 150 }}
                className={`absolute left-0 top-1.5 -translate-x-[50%] w-6 h-6 rounded-full border-2 bg-[#0b090f] flex items-center justify-center pointer-events-none transition-all duration-300 z-10 group-hover:scale-125 ${item.textColor} ${item.color}`}
                style={{
                  boxShadow: `0 0 10px ${item.shadowColor}`
                }}
              >
                {item.icon}
              </motion.div>

              {/* Side Date (Desktop Only) */}
              <div className="hidden md:block absolute right-[100%] top-1.5 mr-12 text-right">
                <span className="font-mono text-xs font-bold tracking-widest text-muted text-neon-purple">
                  {item.date}
                </span>
              </div>

              {/* Mobile / Inline Date */}
              <div className="md:hidden mb-2">
                <span className="font-mono text-xs font-bold tracking-widest text-muted">
                  {item.date}
                </span>
              </div>

              {/* Timeline Card: Retro Terminal inspired */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`glass-panel p-5 border-2 hover:translate-y-[-4px] transition-all duration-300 retro-shadow-dark ${item.color}`}
              >
                {/* Terminal top head */}
                <div className={`flex items-center gap-1.5 border-b border-white/10 pb-3 mb-4 font-mono text-[10px] tracking-widest font-extrabold uppercase ${item.textColor}`}>
                  <TermIcon size={12} className="animate-pulse" />
                  <span>PROCESS_{idx + 1}.EXE - {item.company}</span>
                </div>

                <h3 className="font-display font-extrabold text-base md:text-lg mb-1 tracking-wide text-white dark:text-[#fdfaf2]">
                  {item.role}
                </h3>

                <ul className="space-y-2 mt-4">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start text-xs md:text-sm text-muted/90 font-sans leading-relaxed">
                      <span className={`mr-2.5 font-mono font-bold font-extrabold ${item.textColor}`}>&gt;</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
