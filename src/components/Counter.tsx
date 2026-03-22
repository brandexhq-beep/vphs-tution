import { useState, useEffect, useRef } from "react";
import { useInView, motion, useSpring, useTransform } from "framer-motion";

interface CounterProps {
  value: string;
  duration?: number;
}

const Counter = ({ value, duration = 2 }: CounterProps) => {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  // Extract number and suffix (e.g., "1000+", "98%")
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));
  const suffix = value.replace(/[0-9]/g, "");

  const spring = useSpring(0, {
    stiffness: 40,
    damping: 30,
    restDelta: 0.001
  });

  const displayValue = useTransform(spring, (current) =>
    Math.round(current).toString() + suffix
  );

  useEffect(() => {
    if (isInView) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
};

export default Counter;
