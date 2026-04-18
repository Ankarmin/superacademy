"use client";

import { useEffect, useRef, useState } from "react";
import usePrefersReducedMotion from "@/components/ui/usePrefersReducedMotion";

type AnimatedStatNumberProps = {
  value: number;
  suffix?: string;
  durationMs?: number;
};

function formatStatValue(value: number) {
  return value.toLocaleString("en-US");
}

export default function AnimatedStatNumber({
  value,
  suffix = "",
  durationMs = 1400,
}: AnimatedStatNumberProps) {
  const prefersReducedMotion = usePrefersReducedMotion();
  const numberRef = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const element = numberRef.current;

    if (!element || hasStarted) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 },
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [hasStarted]);

  useEffect(() => {
    if (!hasStarted) {
      return;
    }

    if (prefersReducedMotion) {
      return;
    }

    let frame = 0;
    const startedAt = performance.now();

    const animate = (timestamp: number) => {
      const progress = Math.min((timestamp - startedAt) / durationMs, 1);
      setDisplayValue(Math.round(value * progress));

      if (progress < 1) {
        frame = window.requestAnimationFrame(animate);
      }
    };

    frame = window.requestAnimationFrame(animate);

    return () => {
      window.cancelAnimationFrame(frame);
    };
  }, [durationMs, hasStarted, prefersReducedMotion, value]);

  const visibleValue = prefersReducedMotion && hasStarted ? value : displayValue;

  return (
    <span ref={numberRef}>
      {formatStatValue(visibleValue)}
      {suffix}
    </span>
  );
}
