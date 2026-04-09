"use client";

import { useRef, useEffect, useState } from "react";

type Props = {
  children: React.ReactNode;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  className?: string;
};

export function FadeIn({ children, delay = 0, direction = "up", className }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(true); // SSR: always visible

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;

    // If already in viewport, skip animation
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) return;

    // Hide for scroll-triggered animation
    setVisible(false);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "-60px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const hiddenTransform =
    direction === "up" ? "translateY(30px)" :
    direction === "left" ? "translateX(-30px)" :
    direction === "right" ? "translateX(30px)" : "none";

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "none" : hiddenTransform,
        transition: visible
          ? `opacity 0.6s ease-out ${delay}s, transform 0.6s ease-out ${delay}s`
          : "none",
      }}
    >
      {children}
    </div>
  );
}
