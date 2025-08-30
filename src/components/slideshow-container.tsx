"use client";
import { useEffect, useState, useRef } from "react";
import type React from "react";

import { motion, AnimatePresence } from "framer-motion";

type SlideshowContainerProps = {
  children: React.ReactNode[];
};

export default function SlideshowContainer({
  children,
}: SlideshowContainerProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const totalSlides = children.length;

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (isScrolling) return;

      e.preventDefault();
      setIsScrolling(true);

      if (e.deltaY > 0 && currentSlide < totalSlides - 1) {
        // Scroll down - next slide
        setCurrentSlide((prev) => prev + 1);
      } else if (e.deltaY < 0 && currentSlide > 0) {
        // Scroll up - previous slide
        setCurrentSlide((prev) => prev - 1);
      }

      // Reset scrolling flag after animation
      setTimeout(() => setIsScrolling(false), 800);
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (container) {
        container.removeEventListener("wheel", handleWheel);
      }
    };
  }, [currentSlide, totalSlides, isScrolling]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      if (e.key === "ArrowDown" && currentSlide < totalSlides - 1) {
        setIsScrolling(true);
        setCurrentSlide((prev) => prev + 1);
        setTimeout(() => setIsScrolling(false), 800);
      } else if (e.key === "ArrowUp" && currentSlide > 0) {
        setIsScrolling(true);
        setCurrentSlide((prev) => prev - 1);
        setTimeout(() => setIsScrolling(false), 800);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide, totalSlides, isScrolling]);

  return (
    <div ref={containerRef} className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          {children[currentSlide]}
        </motion.div>
      </AnimatePresence>

      {/* Slide indicators */}
      <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-2">
        {children.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              if (!isScrolling) {
                setIsScrolling(true);
                setCurrentSlide(index);
                setTimeout(() => setIsScrolling(false), 800);
              }
            }}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary scale-125"
                : "bg-muted-foreground/30 hover:bg-muted-foreground/60"
            }`}
          />
        ))}
      </div>

      {/* Navigation hints */}
      <div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50 text-muted-foreground text-sm flex items-center gap-4">
        <span>Use ↑↓ keys or scroll to navigate</span>
        <span className="text-xs">
          {currentSlide + 1} / {totalSlides}
        </span>
      </div>
    </div>
  );
}
