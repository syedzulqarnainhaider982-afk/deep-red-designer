"use client";

import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface LuxuryButtonProps extends HTMLMotionProps<"button"> {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  withArrow?: boolean;
}

export function LuxuryButton({ children, onClick, className = "", withArrow = true, ...props }: LuxuryButtonProps) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`group relative inline-flex items-center justify-center gap-4 px-10 py-5 bg-[var(--color-accent)] text-black font-heading text-sm tracking-[0.2em] font-semibold uppercase overflow-hidden transition-all duration-500 hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] ${className}`}
      {...props}
    >
      {/* Shine Effect */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12" />
      
      <span className="relative z-10">{children}</span>
      
      {withArrow && (
        <ArrowRight className="relative z-10 w-4 h-4 transform group-hover:translate-x-2 transition-transform duration-500" />
      )}
    </motion.button>
  );
}
