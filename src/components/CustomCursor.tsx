"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMobile, setIsMobile] = useState(true);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);

  // Motion values for the mouse position
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for a elegant trailing "lag" effect
  const springConfig = { damping: 25, stiffness: 200, mass: 0.6 };
  const trailX = useSpring(cursorX, springConfig);
  const trailY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Check if the user is on a touch device
    const checkDevice = () => {
      const mobile = 
        window.matchMedia("(pointer: coarse)").matches || 
        window.innerWidth < 768;
      setIsMobile(mobile);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    const moveMouse = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleMouseDown = () => setClicked(true);
    const handleMouseUp = () => setClicked(false);

    // Mouse movement listener
    window.addEventListener("mousemove", moveMouse);
    window.addEventListener("mousedown", handleMouseDown);
    window.addEventListener("mouseup", handleMouseUp);

    // Detect if mouse is hovering over interactive elements (buttons, links, textareas)
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive = 
        target.tagName === "A" || 
        target.tagName === "BUTTON" || 
        target.closest("button") || 
        target.closest("a") || 
        target.getAttribute("role") === "button" ||
        target.classList.contains("interactive-cursor");
      
      setHovered(!!isInteractive);
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("resize", checkDevice);
      window.removeEventListener("mousemove", moveMouse);
      window.removeEventListener("mousedown", handleMouseDown);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (isMobile) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[100000]">
      {/* Outer trailing ring */}
      <motion.div
        className="absolute w-8 h-8 rounded-full border-2 pointer-events-none mix-blend-difference"
        style={{
          x: trailX,
          y: trailY,
          translateX: "-50%",
          translateY: "-50%",
          borderColor: hovered ? "#00f5d4" : "#ff007f",
          scale: clicked ? 0.75 : hovered ? 1.5 : 1,
          backgroundColor: hovered ? "rgba(0, 245, 212, 0.15)" : "rgba(255, 0, 127, 0)",
        }}
        transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
      />

      {/* Inner precise dot */}
      <motion.div
        className="absolute w-2 h-2 rounded-full pointer-events-none"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: "-50%",
          translateY: "-50%",
          backgroundColor: hovered ? "#00f5d4" : "#ff007f",
          boxShadow: hovered 
            ? "0 0 10px #00f5d4, 0 0 20px #00f5d4" 
            : "0 0 6px #ff007f, 0 0 12px #ff007f",
        }}
      />
    </div>
  );
}
