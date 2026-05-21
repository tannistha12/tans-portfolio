"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useDragControls } from "framer-motion";
import { Terminal as TerminalIcon, X, Minus, Square } from "lucide-react";

interface TerminalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function Terminal({ isOpen, onClose }: TerminalProps) {
  const dragControls = useDragControls();
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([
    "TYPE 'help' FOR A LIST OF AVAILABLE COMMANDS.",
    ""
  ]);
  const [themeColor, setThemeColor] = useState<"teal" | "pink" | "purple" | "orange">("teal");
  const [matrixActive, setMatrixActive] = useState(false);
  const terminalEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom of terminal when logs change
  useEffect(() => {
    if (isOpen) {
      terminalEndRef.current?.scrollIntoView({ behavior: "smooth" });
      inputRef.current?.focus();
    }
  }, [history, isOpen]);

  // Color mapping
  const colorMap = {
    teal: "text-[#00f5d4] border-[#00f5d4] shadow-[#00f5d4]/20",
    pink: "text-[#ff007f] border-[#ff007f] shadow-[#ff007f]/20",
    purple: "text-[#9d4edd] border-[#9d4edd] shadow-[#9d4edd]/20",
    orange: "text-[#ff7b00] border-[#ff7b00] shadow-[#ff7b00]/20",
  };

  const handleCommand = (cmdStr: string) => {
    const trimmed = cmdStr.trim().toLowerCase();
    const args = trimmed.split(" ");
    const cmd = args[0];

    let response: string[] = [];

    switch (cmd) {
      case "help":
        response = [
          "AVAILABLE COMMANDS:",
          "  about    - Display summary bio & background",
          "  skills   - View core skills & languages",
          "  color    - Change UI color (color pink|teal|purple|orange)",
          "  clear    - Clear console records",
          "  exit     - Shutdown console"
        ];
        break;
      case "about":
        response = [
          "TANNISTHA - Computer Science Engineer & Data Scientist",
          "--------------------------------------------------",
          "Building intelligent systems from data, curiosity, and code.",
          "Exploring the intersection of machine learning, analytics, research, and modern digital experiences.",

        ];
        break;
      case "skills":
        response = [
          "CORE TECH STACK:",
          "Python",
          "Machine Learning",
          "Data Analysis",
          "Pandas & NumPy",
          "SQL",
          "Data Visualization",
          "Scikit-learn",
          "Git & GitHub",
          "Web Development",
          "APIs",
          "Problem Solving",
          "Research & Experimentation"

        ];
        break;
      case "color":
        const targetColor = args[1];
        if (targetColor === "pink" || targetColor === "teal" || targetColor === "purple" || targetColor === "orange") {
          setThemeColor(targetColor);
          response = [`Console accent switched to ${targetColor}.`];
        } else {
          response = ["Invalid color option. Use: color pink | teal | purple | orange"];
        }
        break;
      case "clear":
        setHistory([]);
        return;
      case "exit":
        onClose();
        return;
      default:
        response = [`Command not found: '${cmd}'. Type 'help' for instructions.`];
    }

    setHistory((prev) => [...prev, `guest@tans-portfolio:~$ ${cmdStr}`, ...response, ""]);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) {
      setHistory((prev) => [...prev, "guest@tans-portfolio:~$ ", ""]);
      return;
    }
    handleCommand(input);
    setInput("");
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 30 }}
          transition={{ type: "spring", damping: 20, stiffness: 120 }}
          drag
          dragControls={dragControls}
          dragListener={false}
          className={`fixed bottom-8 right-8 z-[9999] w-full max-w-lg md:max-w-xl glass-panel border-2 ${colorMap[themeColor]} shadow-xl select-none font-mono crt-screen overflow-hidden`}
        >
          {/* Subtle flicker overlay inside the terminal window */}
          <div className="absolute inset-0 bg-black/10 animate-flicker pointer-events-none z-10" />

          {/* Matrix digital falling code effect layer */}
          {matrixActive && <MatrixRain active={matrixActive} color={themeColor} />}

          {/* Header Bar */}
          <div className="terminal-header flex items-center justify-between px-4 py-2 border-b-2 bg-black/45 border-current cursor-move" onPointerDown={(e) => dragControls.start(e)}>
            <div className="flex items-center gap-2 text-xs font-bold tracking-wider">
              <TerminalIcon size={14} className="animate-pulse" />
              <span>TERMINAL CONSOLE</span>
            </div>
            <div className="flex items-center gap-2">
              <button
                aria-label="Minimize"
                onClick={onClose}
                className="hover:bg-white/10 p-0.5 rounded transition"
              >
                <Minus size={14} />
              </button>
              <button
                aria-label="Maximize"
                className="hover:bg-white/10 p-0.5 rounded transition"
              >
                <Square size={10} />
              </button>
              <button
                aria-label="Close"
                onClick={onClose}
                className="hover:bg-red-500/25 p-0.5 rounded text-red-500 transition"
              >
                <X size={14} />
              </button>
            </div>
          </div>

          {/* Terminal Screen Console */}
          <div
            onClick={() => inputRef.current?.focus()}
            className="p-4 h-72 overflow-y-auto bg-black/90 scrollbar-thin scrollbar-thumb-current text-xs md:text-sm relative z-0 flex flex-col gap-1 cursor-text"
          >
            {history.map((line, index) => (
              <div
                key={index}
                className={
                  line.startsWith("guest@")
                    ? "text-[#ff7b00]"
                    : line.startsWith("AVAILABLE COMMANDS") || line.startsWith("CORE TECH") || line.startsWith("CORE MODULE")
                      ? "text-[#ff007f]"
                      : ""
                }
              >
                {line}
              </div>
            ))}
            <div ref={terminalEndRef} />

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="flex items-center gap-1 mt-auto pt-2">
              <span className="text-[#ff7b00] font-bold">guest@tans-portfolio:~$</span>
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className="flex-1 bg-transparent border-none outline-none font-mono text-current caret-current"
                placeholder="type a command..."
                autoFocus
              />
            </form>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* Helper digital code matrix falling effect component */
function MatrixRain({ active, color }: { active: boolean; color: "teal" | "pink" | "purple" | "orange" }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    canvas.width = canvas.parentElement?.clientWidth || 500;
    canvas.height = canvas.parentElement?.clientHeight || 300;

    const colorHex = {
      teal: "#00f5d4",
      pink: "#ff007f",
      purple: "#9d4edd",
      orange: "#ff7b00",
    }[color];

    const columns = Math.floor(canvas.width / 14);
    const drops: number[] = Array(columns).fill(1);

    const chars = "ｦｧｨｩｪｫｬｭｮｯｰｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890ABCDEF";

    let animId: number;

    const draw = () => {
      ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = colorHex;
      ctx.font = "12px monospace";

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        const x = i * 14;
        const y = drops[i] * 14;

        ctx.fillText(text, x, y);

        if (y > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }

        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    };

    draw();

    const handleResize = () => {
      canvas.width = canvas.parentElement?.clientWidth || 500;
      canvas.height = canvas.parentElement?.clientHeight || 300;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", handleResize);
    };
  }, [active, color]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 opacity-15 pointer-events-none z-[-1]"
    />
  );
}
