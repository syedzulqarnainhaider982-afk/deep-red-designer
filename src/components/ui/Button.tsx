"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const baseStyles = "inline-flex items-center justify-center rounded-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-accent disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden group";
    
    const variants = {
      primary: "bg-[var(--color-accent)] text-[var(--color-primary)] hover:bg-[var(--color-accent-light)] shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]",
      secondary: "bg-[var(--color-surface)] text-[var(--color-text-main)] hover:bg-white/10",
      outline: "border border-[var(--color-accent)] text-[var(--color-accent)] hover:bg-[var(--color-accent)]/10",
      ghost: "hover:bg-white/5 text-[var(--color-text-main)] hover:text-[var(--color-accent)]",
    };
    
    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-12 px-8 text-base",
      lg: "h-14 px-10 text-lg",
    };

    return (
      <motion.button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        {...props}
      >
        <span className="relative z-10">{children as React.ReactNode}</span>
        {variant === "primary" && (
          <div className="absolute inset-0 -translate-x-full animate-[shimmer_2.5s_infinite] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
        )}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
