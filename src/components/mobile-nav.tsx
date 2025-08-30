"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { Menu, ChevronDown, Download, Eye, X } from "lucide-react";

const navItems = [
  { name: "About", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-section" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

interface MobileNavProps {
  onPdfView: (url: string) => void;
}

export default function MobileNav({ onPdfView }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef<HTMLDivElement>(null);

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileNavRef.current &&
        !mobileNavRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    if (href.startsWith("#")) {
      const targetId = href.substring(1);

      if (targetId === "hero") {
        const mainContainer = document.querySelector("main");
        if (mainContainer) {
          mainContainer.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }
        setIsOpen(false);
        return;
      }

      const targetElement = document.getElementById(targetId);
      const mainContainer = document.querySelector("main");

      if (targetElement && mainContainer) {
        const navbarHeight = 64; // Fixed navbar height
        const containerRect = mainContainer.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        const scrollTop = mainContainer.scrollTop;
        const targetPosition = targetRect.top - containerRect.top + scrollTop;
        const offsetPosition = targetPosition - navbarHeight - 20;

        mainContainer.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        setIsOpen(false);
      }
    }
  };

  return (
    <div className="md:hidden relative" ref={mobileNavRef}>
      {/* Mobile Menu Button */}
      <button
        className="flex items-center gap-1 p-2 rounded-lg hover:bg-primary/10 transition-colors border border-transparent hover:border-primary/20"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle mobile menu"
        aria-expanded={isOpen}
      >
        <Menu className="h-5 w-5 text-foreground" />
        <ChevronDown
          className={`h-4 w-4 text-foreground transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-80 max-w-[90vw] bg-background border border-border rounded-xl shadow-2xl overflow-hidden z-50">
          {/* Header */}
          <div className="px-4 py-3 border-b border-border/50 bg-muted/30">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold text-foreground">Menu</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-md hover:bg-primary/10 transition-colors"
                aria-label="Close menu"
              >
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="py-2">
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Navigation
            </div>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center px-4 py-3 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Theme Section */}
          <div className="border-t border-border/50">
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Appearance
            </div>
            <div className="px-4 py-3 flex items-center justify-between">
              <span className="text-sm font-medium text-foreground">Theme</span>
              <ThemeToggle />
            </div>
          </div>

          {/* CV Section */}
          <div className="border-t border-border/50">
            <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
              Curriculum Vitae
            </div>
            <div className="py-2 space-y-1">
              <button
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 transition-colors"
                onClick={() => {
                  window.open("/pdf/cv.pdf", "_blank");
                  setIsOpen(false);
                }}
              >
                <Download className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Download CV</span>
              </button>
              <button
                className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 transition-colors"
                onClick={() => {
                  onPdfView("/pdf/cv.pdf");
                  setIsOpen(false);
                }}
              >
                <Eye className="h-4 w-4 text-primary flex-shrink-0" />
                <span className="font-medium text-foreground">Preview CV</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
