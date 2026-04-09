"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useInView } from "framer-motion";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
};

export function FadeIn({ children, delay = 0, direction = "up", className }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const [forceVisible, setForceVisible] = useState(false);

  useEffect(() => {
    // Reduced motion: show immediately without animation
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setForceVisible(true);
      return;
    }
    // Safety net: if IntersectionObserver never fires, force visible after 3s
    const timer = setTimeout(() => setForceVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  const shouldShow = isInView || forceVisible;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: direction === "up" ? 30 : 0, x: direction === "left" ? -30 : direction === "right" ? 30 : 0 }}
      animate={shouldShow ? { opacity: 1, y: 0, x: 0 } : undefined}
      transition={{ duration: forceVisible ? 0 : 0.6, delay: forceVisible ? 0 : delay, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
