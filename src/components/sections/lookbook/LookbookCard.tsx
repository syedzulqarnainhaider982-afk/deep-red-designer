"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LookbookItem } from "./lookbookData";

interface LookbookCardProps {
  item: LookbookItem;
  index: number;
  onClick: (item: LookbookItem) => void;
}

export default function LookbookCard({ item, index, onClick }: LookbookCardProps) {
  // Use slightly varying heights for the masonry effect
  const heights = ["h-[400px]", "h-[500px]", "h-[600px]"];
  const heightClass = item.featured ? "h-[600px]" : heights[index % 3];

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: (index % 3) * 0.1 }}
      className={`relative w-full ${heightClass} mb-6 lg:mb-8 rounded-sm overflow-hidden group cursor-pointer border border-white/5 bg-primary`}
      onClick={() => onClick(item)}
    >
      {/* Base Image */}
      <Image
        src={item.image}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105 filter contrast-110 saturate-50"
      />

      {/* Persistent Bottom Gradient */}
      <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-primary via-primary/50 to-transparent z-10" />

      {/* Hover Glass Overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 flex flex-col items-center justify-center p-8 text-center" />

      {/* Hover Content */}
      <div className="absolute inset-0 z-30 flex flex-col justify-end lg:justify-center p-6 lg:p-10 opacity-0 group-hover:opacity-100 transition-all duration-700 translate-y-8 group-hover:translate-y-0 text-center">
        
        <span className="font-heading text-[var(--color-accent)] tracking-[0.3em] text-xs uppercase mb-3 block">
          {item.category}
        </span>
        
        <h3 className="font-serif text-2xl lg:text-3xl text-white mb-2">
          {item.title}
        </h3>
        
        <p className="text-white/60 font-sans text-sm tracking-widest uppercase mb-8 hidden lg:block">
          {item.subtitle}
        </p>

        <p className="text-white/80 font-light text-sm leading-relaxed max-w-xs mx-auto mb-8 hidden lg:block">
          {item.description}
        </p>

        <div className="mt-auto lg:mt-0" onClick={(e) => e.stopPropagation()}>
          {/* Prevent opening lightbox when clicking button if we want button to act differently later.
              For now, clicking button also acts as inquiry (just visual). */}
          <button className="text-white/90 border border-white/30 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)] px-8 py-3 text-xs tracking-widest uppercase transition-all duration-500 bg-white/5 backdrop-blur-md active:scale-95">
            Inquire About This Design
          </button>
        </div>
      </div>

      {/* Animated Gold Border Glow on Hover */}
      <div className="absolute inset-0 border border-transparent group-hover:border-[var(--color-accent)]/40 transition-colors duration-700 z-40 pointer-events-none" />
      
      {/* Non-hover details (visible by default at bottom) */}
      <div className="absolute bottom-6 left-6 right-6 z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500">
        <h4 className="font-serif text-lg text-white mb-1">{item.title}</h4>
        <p className="font-heading text-[10px] text-[var(--color-accent)] tracking-widest uppercase">{item.subtitle}</p>
      </div>
    </motion.div>
  );
}
