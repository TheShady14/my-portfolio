"use client";

import { cn } from "@/lib/utils";
import type React from "react";
import { useEffect, useRef } from "react";

interface DotPatternProps extends React.HTMLAttributes<HTMLDivElement> {
  width?: number;
  height?: number;
  gap?: number;
  dotSize?: number;
  dotColor?: string;
}

export function DotPattern({
  width = 20,
  height = 20,
  gap = 30,
  dotSize = 2,
  dotColor = "currentColor",
  className,
  ...props
}: DotPatternProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = dotColor;

    const cols = Math.ceil(rect.width / gap);
    const rows = Math.ceil(rect.height / gap);

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        const x = i * gap;
        const y = j * gap;
        ctx.beginPath();
        ctx.arc(x, y, dotSize, 0, Math.PI * 2);
        ctx.fill();
      }
    }
  }, [gap, dotSize, dotColor]);

  return (
    <div className={cn("absolute inset-0 -z-10", className)} {...props}>
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}
