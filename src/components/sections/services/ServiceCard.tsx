"use client";

import { motion } from "framer-motion";
import { ServiceItem } from "./servicesData";

export function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  const Icon = item.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
      className="group relative p-8 lg:p-10 rounded-sm border border-white/5 glass-panel overflow-hidden transition-all duration-500 hover:border-[var(--color-accent)]/40"
    >
      {/* Background Hover Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[var(--color-accent)]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

      {/* Number and Icon Header */}
      <div className="flex justify-between items-start mb-8 relative z-10">
        <span className="font-heading text-4xl lg:text-5xl text-white/10 font-light tracking-wider group-hover:text-[var(--color-accent)]/30 transition-colors duration-500">
          {item.num}
        </span>
        <div className="p-3 rounded-full bg-white/5 border border-white/10 group-hover:border-[var(--color-accent)]/50 group-hover:bg-[var(--color-accent)]/10 transition-all duration-500">
          <Icon className="w-6 h-6 text-white/60 group-hover:text-[var(--color-accent)] transition-colors duration-500" strokeWidth={1.5} />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <h3 className="font-heading text-2xl lg:text-3xl text-white mb-4 tracking-wide group-hover:text-[var(--color-accent)] transition-colors duration-500">
          {item.title}
        </h3>
        <p className="text-white/60 font-sans leading-relaxed tracking-wide font-light text-sm lg:text-base group-hover:text-white/80 transition-colors duration-500">
          {item.desc}
        </p>
      </div>

      {/* Bottom Accent Line */}
      <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-[var(--color-accent)] to-transparent group-hover:w-full transition-all duration-700 ease-out" />
    </motion.div>
  );
}
