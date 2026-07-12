"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";
import { ArrowRight } from "lucide-react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  withArrow?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", withArrow, children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center font-sans transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group rounded-sm";
    
    const variants = {
      primary: "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent-light)] font-semibold text-sm tracking-wide shadow-[0_0_15px_rgba(212,175,55,0.2)] hover:shadow-[0_0_25px_rgba(212,175,55,0.4)]",
      secondary: "bg-[var(--color-surface)] text-[var(--color-text-main)] hover:bg-white/10",
      outline: "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10 font-medium text-sm tracking-wide",
      ghost: "hover:bg-white/5 text-[var(--color-text-main)] hover:text-[var(--color-accent)]",
    };
    
    const sizes = {
      sm: "h-9 px-6 text-xs",
      md: "h-11 px-8 text-sm",
      lg: "h-14 px-10 text-sm",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2">
          {children as React.ReactNode}
          {withArrow && <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />}
        </span>
        {variant === "primary" && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
