"use client";

import { useEffect, useState } from "react";

type Props = {
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
};

export default function AnimatedCounter({
  target,
  suffix = "",
  duration = 2000,
  className,
}: Props) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const fps = 60;
    const increment = target / (duration / (1000 / fps));

    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(interval);
  }, [target, duration]);

  return (
    <div className={className}>
      {count}
      {suffix}
    </div>
  );
}
