"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

type Props = {
  end: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({
  end,
  suffix = "",
  prefix = "",
  label,
  duration = 2,
}: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(end);

  useEffect(() => {
    if (!isInView) return;

    setCount(0);
    let start = 0;
    const step = end / (duration * 60);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [isInView, end, duration]);

  return (
    <div ref={ref} className="text-center">
      <p className="stat-number">
        {prefix}
        {count}
        {suffix}
      </p>
      <p className="stat-label">{label}</p>
    </div>
  );
}
