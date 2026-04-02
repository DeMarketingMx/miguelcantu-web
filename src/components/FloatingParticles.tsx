"use client";

import { motion } from "framer-motion";

/**
 * Subtle floating particles/dots that drift slowly across the background.
 * Place inside a relative + overflow-hidden container.
 */
export function FloatingParticles({ count = 20, color = "accent" }: { count?: number; color?: "accent" | "primary" }) {
  const fill = color === "accent" ? "var(--color-accent)" : "var(--color-primary)";

  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 3,
    duration: 15 + Math.random() * 20,
    delay: Math.random() * 5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute rounded-full"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: fill,
            opacity: 0.08,
          }}
          animate={{
            y: [0, -40, 0],
            x: [0, 20, -10, 0],
            opacity: [0.06, 0.12, 0.06],
          }}
          transition={{
            duration: p.duration,
            delay: p.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle connecting lines between some particles */}
      <svg className="absolute inset-0 w-full h-full opacity-[0.04]">
        {particles.slice(0, 8).map((p, i) => {
          const next = particles[(i + 3) % particles.length];
          return (
            <motion.line
              key={`line-${i}`}
              x1={`${p.x}%`}
              y1={`${p.y}%`}
              x2={`${next.x}%`}
              y2={`${next.y}%`}
              stroke={fill}
              strokeWidth={0.5}
              animate={{ opacity: [0.3, 0.8, 0.3] }}
              transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut" }}
            />
          );
        })}
      </svg>
    </div>
  );
}
