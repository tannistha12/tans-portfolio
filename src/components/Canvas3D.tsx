"use client";

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Stars, Line } from "@react-three/drei";
import * as THREE from "three";

// Custom type for mouse tracking
interface MouseTracker {
  x: number;
  y: number;
}

// 3D Scene Components with Mouse Parallax and Floating movement
function SceneContent() {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const starsRef = useRef<any>(null);
  const mouse = useRef<MouseTracker>({ x: 0, y: 0 });

  // Access the viewport sizes and events
  const { size } = useThree();

  // Track mouse coordinates on window
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Normalize to -1 to 1 range
      mouse.current.x = (e.clientX / size.width) * 2 - 1;
      mouse.current.y = -(e.clientY / size.height) * 2 + 1;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [size]);

  // Frame Loop animation
  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Mesh spinning auto rotation
    if (meshRef.current) {
      meshRef.current.rotation.x = time * 0.15;
      meshRef.current.rotation.y = time * 0.25;

      // Cursor Parallax lag movement
      const targetX = mouse.current.x * 0.6;
      const targetY = mouse.current.y * 0.6;
      meshRef.current.position.x += (targetX - meshRef.current.position.x) * 0.05;
      meshRef.current.position.y += (targetY - meshRef.current.position.y) * 0.05;
    }

    // 2. Slow counter rotation for orbital outer rings
    if (ringRef.current) {
      ringRef.current.rotation.z = -time * 0.08;
      ringRef.current.rotation.x = Math.PI / 3 + Math.sin(time * 0.2) * 0.1;
    }
  });

  return (
    <>
      {/* Dynamic ambient synthwave space stars */}
      <Stars radius={100} depth={50} count={2500} factor={4} saturation={0.8} fade speed={1.5} />

      {/* Atmospheric lighting */}
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 10, 5]} intensity={1.5} color="#00f5d4" />
      <pointLight position={[-8, -8, -8]} intensity={1.2} color="#ff007f" />
      <spotLight position={[0, 10, 0]} intensity={2.5} color="#9d4edd" />

      {/* Floating Retro Abstract 3D Central Orb/Mesh */}
      <Float speed={2.5} rotationIntensity={0.6} floatIntensity={1.2}>
        <mesh ref={meshRef} position={[0, 0, 0]}>
          <icosahedronGeometry args={[2, 1]} />
          <meshStandardMaterial
            color="#ff007f"
            wireframe
            roughness={0.1}
            metalness={0.9}
            emissive="#9d4edd"
            emissiveIntensity={0.6}
          />
        </mesh>

        {/* Outer glowing orbital synth rings */}
        <mesh ref={ringRef} rotation={[Math.PI / 3, 0, 0]}>
          <torusGeometry args={[3.2, 0.02, 16, 100]} />
          <meshBasicMaterial color="#00f5d4" transparent opacity={0.85} />
        </mesh>
        
        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[3.5, 0.015, 8, 80]} />
          <meshBasicMaterial color="#ff7b00" transparent opacity={0.6} />
        </mesh>
      </Float>
    </>
  );
}

export default function Canvas3D() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="absolute inset-0 flex items-center justify-center font-mono text-[#00f5d4] text-xs">
        [ RESOLVING WEBGL VIEWPORT... ]
      </div>
    );
  }

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none z-0">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        style={{ pointerEvents: "none" }}
      >
        <SceneContent />
      </Canvas>
    </div>
  );
}
