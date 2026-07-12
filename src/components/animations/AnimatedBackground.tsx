"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AnimatedBackground() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) return <div className="fixed inset-0 z-[-2] pointer-events-none w-full h-full bg-[#0a0a0a]" />; // Static fallback for SSR

  return (
    <div className="fixed inset-0 z-[-2] pointer-events-none w-full h-full bg-[#0a0a0a] overflow-hidden">
      {/* 
        Premium Gold Mesh Effect
        Using multiple radial gradients to create a luxurious, subtle moving mesh.
        If user prefers reduced motion, the gradients remain static.
      */}
      <motion.div
        animate={
          shouldReduceMotion
            ? {}
            : {
                backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
              }
        }
        transition={{
          duration: 15, // Faster, more noticeable movement
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-[-50%] w-[200%] h-[200%] opacity-100"
        style={{
          background: `
            radial-gradient(circle at 20% 30%, rgba(212, 175, 55, 0.12) 0%, transparent 40%),
            radial-gradient(circle at 80% 70%, rgba(212, 175, 55, 0.08) 0%, transparent 50%),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.04) 0%, transparent 60%)
          `,
          backgroundSize: "100% 100%",
        }}
      />
      
      {/* Dark overlay to ensure text readability */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[100px]" />
    </div>
  );
}
