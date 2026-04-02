"use client";

import { motion } from "framer-motion";

/**
 * Subtle animated backgrounds — 2 variants:
 * - "grid": Very subtle static grid + breathing nodes at intersections
 * - "waves": Subtle topographic lines that breathe
 * Grid is very faint, nodes are a bit more visible — like stars twinkling.
 */
export function AnimatedBackground({ variant = "grid" }: { variant?: "grid" | "waves" }) {
  if (variant === "waves") return <WavesBackground />;
  return <GridWithNodes />;
}

function GridWithNodes() {
  const cols = 14;
  const rows = 8;
  const cellW = 100;
  const cellH = 90;

  // Generate random nodes at intersections that will "breathe"
  const nodes = [
    { col: 2, row: 1, delay: 0, dur: 4 },
    { col: 5, row: 3, delay: 1.5, dur: 5 },
    { col: 9, row: 2, delay: 3, dur: 4.5 },
    { col: 12, row: 5, delay: 0.5, dur: 6 },
    { col: 3, row: 6, delay: 2, dur: 5.5 },
    { col: 7, row: 1, delay: 4, dur: 4 },
    { col: 11, row: 4, delay: 1, dur: 5 },
    { col: 1, row: 4, delay: 3.5, dur: 6 },
    { col: 6, row: 7, delay: 2.5, dur: 4.5 },
    { col: 10, row: 6, delay: 0, dur: 5 },
    { col: 4, row: 2, delay: 5, dur: 4 },
    { col: 8, row: 5, delay: 1.8, dur: 5.5 },
    { col: 13, row: 2, delay: 3.2, dur: 4 },
    { col: 2, row: 7, delay: 4.5, dur: 5 },
  ];

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${cols * cellW} ${rows * cellH}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {/* Very subtle static grid lines */}
        {Array.from({ length: cols + 1 }, (_, i) => (
          <line
            key={`v-${i}`}
            x1={i * cellW}
            y1={0}
            x2={i * cellW}
            y2={rows * cellH}
            stroke="var(--color-primary)"
            strokeWidth={0.4}
            opacity={0.04}
          />
        ))}
        {Array.from({ length: rows + 1 }, (_, i) => (
          <line
            key={`h-${i}`}
            x1={0}
            y1={i * cellH}
            x2={cols * cellW}
            y2={i * cellH}
            stroke="var(--color-primary)"
            strokeWidth={0.4}
            opacity={0.04}
          />
        ))}

        {/* Breathing nodes — more visible */}
        {nodes.map((n, i) => (
          <g key={`node-${i}`}>
            {/* Glow ring */}
            <motion.circle
              cx={n.col * cellW}
              cy={n.row * cellH}
              r={12}
              fill="var(--color-accent)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.06, 0] }}
              transition={{
                duration: n.dur,
                delay: n.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            {/* Core dot */}
            <motion.circle
              cx={n.col * cellW}
              cy={n.row * cellH}
              r={3}
              fill="var(--color-accent)"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.25, 0] }}
              transition={{
                duration: n.dur,
                delay: n.delay,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </g>
        ))}

        {/* Subtle connection lines between some nearby nodes */}
        {[
          [0, 1], [1, 2], [3, 4], [5, 6], [7, 8], [9, 10], [11, 12],
        ].map(([a, b], i) => (
          <motion.line
            key={`conn-${i}`}
            x1={nodes[a].col * cellW}
            y1={nodes[a].row * cellH}
            x2={nodes[b].col * cellW}
            y2={nodes[b].row * cellH}
            stroke="var(--color-accent)"
            strokeWidth={0.5}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.08, 0] }}
            transition={{
              duration: 6,
              delay: i * 1.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

function WavesBackground() {
  const waveCount = 5;
  const width = 1600;
  const height = 800;

  const generateWavePath = (yBase: number, amplitude: number, frequency: number) => {
    const points: string[] = [];
    for (let x = 0; x <= width; x += 10) {
      const y = yBase + amplitude * Math.sin((x / width) * Math.PI * frequency);
      points.push(`${x},${y}`);
    }
    return `M${points.join(" L")}`;
  };

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${width} ${height}`}
        preserveAspectRatio="xMidYMid slice"
        className="absolute inset-0"
      >
        {Array.from({ length: waveCount }, (_, i) => {
          const yBase = 100 + i * (height / (waveCount + 1));
          const amplitude = 12 + i * 4;
          const frequency = 2.5 + i * 0.4;
          const path = generateWavePath(yBase, amplitude, frequency);

          return (
            <motion.path
              key={`wave-${i}`}
              d={path}
              fill="none"
              stroke="var(--color-primary)"
              strokeWidth={0.6}
              initial={{ opacity: 0.04 }}
              animate={{ opacity: [0.04, 0.08, 0.04] }}
              transition={{
                duration: 8 + i * 3,
                delay: i * 1,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
}
