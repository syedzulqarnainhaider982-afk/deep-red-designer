"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
  blur: number;
}

export default function FloatingParticles() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Generate particles on mount to avoid hydration mismatches
    const particleCount = window.innerWidth < 768 ? 8 : 15; // Slightly more particles
    
    const newParticles = Array.from({ length: particleCount }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // percentage
      y: Math.random() * 100, // percentage
      size: Math.random() * 4 + 2, // 2px to 6px (Larger)
      duration: Math.random() * 15 + 15, // 15s to 30s (Faster)
      delay: Math.random() * 5,
      opacity: Math.random() * 0.5 + 0.3, // 0.3 to 0.8 (More opaque)
      blur: Math.random() * 2, // 0px to 2px (Sharper)
    }));
    
    setParticles(newParticles);
  }, []);

  if (!mounted || shouldReduceMotion || particles.length === 0) return null;

  return (
    <div className="fixed inset-0 z-[-1] pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full bg-[#D4AF37]"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            filter: `blur(${p.blur}px)`,
          }}
          animate={{
            y: [`0vh`, `-15vh`, `10vh`, `0vh`],
            x: [`0vw`, `8vw`, `-8vw`, `0vw`],
            opacity: [p.opacity, p.opacity * 1.5, p.opacity],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}
