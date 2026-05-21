"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const socialLinks = [
    { 
      icon: <Mail size={18} />, 
      href: "mailto:tannistha@example.com", 
      color: "hover:text-[#ff007f]", 
      borderClass: "hover:border-[#ff007f]" 
    },
    { 
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c-2.761 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      ), 
      href: "https://linkedin.com/in/tannistha", 
      color: "hover:text-[#00f5d4]", 
      borderClass: "hover:border-[#00f5d4]" 
    },
    { 
      icon: (
        <svg className="w-4.5 h-4.5 fill-current" viewBox="0 0 24 24">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
        </svg>
      ), 
      href: "https://github.com/tannistha12", 
      color: "hover:text-[#9d4edd]", 
      borderClass: "hover:border-[#9d4edd]" 
    },
    { 
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ), 
      href: "https://twitter.com", 
      color: "hover:text-[#ff7b00]", 
      borderClass: "hover:border-[#ff7b00]" 
    }
  ];

  const validate = () => {
    let tempErrors = { name: "", email: "", message: "" };
    let isValid = true;

    if (!form.name.trim()) {
      tempErrors.name = "Identification signature is required.";
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!form.email.trim()) {
      tempErrors.email = "Communication node address is required.";
      isValid = false;
    } else if (!emailRegex.test(form.email)) {
      tempErrors.email = "Address syntax is invalid.";
      isValid = false;
    }

    if (!form.message.trim()) {
      tempErrors.message = "Transmission payload cannot be empty.";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate API pipeline transmission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSuccess(true);
    setForm({ name: "", email: "", message: "" });

    // Trigger congratulations particle explosions
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ["#ff007f", "#00f5d4", "#9d4edd", "#ff7b00"]
    });

    // Dismiss message after 5 seconds
    setTimeout(() => setSuccess(false), 5000);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-black/10">
      
      {/* Background neon dots */}
      <div className="absolute top-1/2 left-0 w-80 h-80 rounded-full bg-[#00f5d4]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 md:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col mb-16 items-center">
          <span className="font-mono text-xs font-bold tracking-widest text-[#ff007f] uppercase text-neon-pink">
            // 06. TRANSMISSION NODE
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-extrabold tracking-tight mt-2 flex items-center gap-3">
            ESTABLISH CONNECTION <span className="w-12 h-1 bg-[#00f5d4] block rounded" />
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Tech Info & Socials */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="font-display font-bold text-xl text-white tracking-wide">
              LET’S ENGINEER TOGETHER
            </h3>
            
            <p className="text-xs md:text-sm text-muted/90 leading-relaxed font-sans">
              Have an interesting model architecture, a complex web deployment, or a collaborative open-source framework you want to construct? 
              Transmit your details and let's formulate something premium.
            </p>

            <div className="space-y-4 font-mono text-xs text-muted/90 pt-4">
              <div className="flex items-center gap-3">
                <span className="text-[#00f5d4]">&gt;</span>
                <span>NODE ADDRESS: <strong className="text-white">tannistha@example.com</strong></span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-[#ff007f]">&gt;</span>
                <span>AVAILABILITY: <strong className="text-white">ACTIVE FOR DISCUSSIONS</strong></span>
              </div>
            </div>

            {/* Glowing Social Badges */}
            <div className="pt-6">
              <span className="font-mono text-[9px] font-bold text-muted tracking-widest block mb-4 uppercase">
                // EXTERNAL CONNECTIONS:
              </span>
              <div className="flex items-center gap-3">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center w-10 h-10 rounded-full border border-white/10 text-muted bg-[#100c18]/80 transition-all duration-300 ${link.color} ${link.borderClass} hover:scale-115 hover:shadow-lg interactive-cursor`}
                  >
                    {link.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Form Panel */}
          <div className="lg:col-span-7 w-full">
            <div className="glass-panel p-6 border-2 border-[#00f5d4] retro-shadow-teal bg-black/60 relative overflow-hidden">
              <div className="absolute inset-0 bg-[#00f5d4]/2.5 pointer-events-none" />

              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Name */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="font-mono text-[10px] tracking-widest text-[#00f5d4] font-bold">
                    [ IDENTIFICATION SIGNATURE ]
                  </label>
                  <input
                    id="name"
                    type="text"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="retro-input w-full text-xs md:text-sm"
                    placeholder="e.g., Ada Lovelace"
                  />
                  {errors.name && (
                    <span className="font-mono text-[9px] text-[#ff007f] font-semibold mt-1">
                      {errors.name}
                    </span>
                  )}
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="font-mono text-[10px] tracking-widest text-[#00f5d4] font-bold">
                    [ COMMUNICATION ADDRESS ]
                  </label>
                  <input
                    id="email"
                    type="text"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="retro-input w-full text-xs md:text-sm"
                    placeholder="e.g., ada@computing.org"
                  />
                  {errors.email && (
                    <span className="font-mono text-[9px] text-[#ff007f] font-semibold mt-1">
                      {errors.email}
                    </span>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="font-mono text-[10px] tracking-widest text-[#00f5d4] font-bold">
                    [ TRANSMISSION PAYLOAD ]
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="retro-input w-full text-xs md:text-sm resize-none"
                    placeholder="Enter message details here..."
                  />
                  {errors.message && (
                    <span className="font-mono text-[9px] text-[#ff007f] font-semibold mt-1">
                      {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full flex items-center justify-center gap-2 py-3.5 border-2 border-[#00f5d4] font-mono text-xs font-extrabold tracking-widest text-[#00f5d4] hover:bg-[#00f5d4] hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-none transition-all duration-300 retro-shadow-teal rounded-sm interactive-cursor bg-black/45 disabled:opacity-50 disabled:pointer-events-none"
                >
                  {isSubmitting ? (
                    <span>TRANSMITTING SIGNAL...</span>
                  ) : (
                    <>
                      <Send size={12} />
                      <span>TRANSMIT PAYLOAD</span>
                    </>
                  )}
                </button>

              </form>

              {/* Success Notification message */}
              <AnimatePresence>
                {success && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute inset-0 bg-[#0b090f]/95 border-2 border-[#00f5d4] flex flex-col items-center justify-center p-6 text-center select-none"
                  >
                    <CheckCircle2 size={44} className="text-[#00f5d4] animate-bounce mb-3" />
                    <h4 className="font-display font-extrabold text-lg text-white mb-2 uppercase">
                      TRANSMISSION SECURED
                    </h4>
                    <p className="font-mono text-[10px] text-muted max-w-xs leading-relaxed uppercase">
                      Signal was cleanly processed and dispatched into the queue. Direct communication reply scheduled.
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
