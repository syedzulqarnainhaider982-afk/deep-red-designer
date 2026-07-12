"use client";

import { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import AnimatedBackground from "./AnimatedBackground";
import FloatingParticles from "./FloatingParticles";
import CursorGlow from "./CursorGlow";
import { animationConfig } from "@/lib/animations/config";

interface AnimationProviderProps {
  children: ReactNode;
}

export default function AnimationProvider({ children }: AnimationProviderProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Global Luxury Background Layers */}
      <AnimatedBackground />
      <FloatingParticles />
      <CursorGlow />

      {/* Page Transitions Wrapper */}
      <AnimatePresence mode="wait">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "brightness(1.5)" }} // Gold flash / bright fade effect
          transition={{ duration: animationConfig.duration.medium, ease: animationConfig.ease.smooth }}
          className="relative z-10"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
