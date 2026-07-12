"use client";

import { useEffect, useState, useRef } from "react";
import { useReducedMotion } from "framer-motion";

export default function CursorGlow() {
  const shouldReduceMotion = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const mousePosition = useRef({ x: 0, y: 0 });
  const glowPosition = useRef({ x: 0, y: 0 });
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
    // Detect touch device
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouchDevice(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      mousePosition.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  // Animation Loop (Lerp)
  useEffect(() => {
    if (isTouchDevice || shouldReduceMotion) return;

    let animationFrameId: number;

    const renderLoop = () => {
      // Lerp logic for smooth interpolation (approx 120ms easing feel)
      glowPosition.current.x += (mousePosition.current.x - glowPosition.current.x) * 0.15;
      glowPosition.current.y += (mousePosition.current.y - glowPosition.current.y) * 0.15;

      if (glowRef.current) {
        glowRef.current.style.transform = `translate3d(${glowPosition.current.x}px, ${glowPosition.current.y}px, 0) translate(-50%, -50%)`;
      }

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();
    return () => cancelAnimationFrame(animationFrameId);
  }, [isTouchDevice, shouldReduceMotion, mounted]);

  if (!mounted || isTouchDevice || shouldReduceMotion) return null;

  return (
    <div
      ref={glowRef}
      className={`fixed top-0 left-0 pointer-events-none z-50 transition-opacity duration-500 ease-out opacity-100`}
      style={{
        width: "350px",
        height: "350px",
        background: "radial-gradient(circle, rgba(212, 175, 55, 0.15) 0%, rgba(212, 175, 55, 0) 70%)",
        filter: "blur(30px)",
        willChange: "transform", // GPU acceleration
      }}
    />
  );
}
