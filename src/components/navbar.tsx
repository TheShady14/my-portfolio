"use client";

import type React from "react";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import { ChevronDown, Download, Eye, X } from "lucide-react";
import { useTheme } from "next-themes";
import MobileNav from "@/components/mobile-nav"; // Import the separate mobile component
import "../styles/navbar.css";

const navItems = [
  { name: "About", href: "#hero" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-section" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const { theme } = useTheme();
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const navbarRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const mainContainer = document.querySelector("main");
      const scrollTop = mainContainer
        ? mainContainer.scrollTop
        : window.scrollY;
      const isScrolled = scrollTop > 20;

      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const mainContainer = document.querySelector("main");

    if (mainContainer) {
      mainContainer.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("scroll", handleScroll);

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("scroll", handleScroll);
      }
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  // Handle click outside desktop dropdown only
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setIsCvDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
        return;
      }

      const targetElement = document.getElementById(targetId);
      const mainContainer = document.querySelector("main");

      if (targetElement && mainContainer) {
        const navbarHeight = navbarRef.current?.clientHeight || 64;
        const containerRect = mainContainer.getBoundingClientRect();
        const targetRect = targetElement.getBoundingClientRect();
        const scrollTop = mainContainer.scrollTop;
        const targetPosition = targetRect.top - containerRect.top + scrollTop;
        const offsetPosition = targetPosition - navbarHeight - 20;

        mainContainer.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  const openPdfViewer = (url: string) => {
    setPdfUrl(url);
    setIsPdfViewerOpen(true);
    setIsCvDropdownOpen(false);
  };

  const getDropdownTopPosition = () => {
    if (navbarRef.current) {
      const navbarHeight = navbarRef.current.clientHeight;
      return `${navbarHeight + 8}px`;
    }
    return "72px";
  };

  return (
    <>
      <header
        ref={navbarRef}
        className={`navbar ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        } fixed top-0 left-0 right-0 z-50 transition-all duration-300`}
      >
        <div className="navbar-container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
          {/* Logo */}
          <Link
            href="#hero"
            className="flex items-center z-50"
            onClick={(e) => handleSmoothScroll(e, "#hero")}
          >
            <div
              className={`logo-container ${
                scrolled ? "logo-expanded" : "logo-default"
              }`}
            >
              <Image
                src="/images/logo-light.svg"
                alt="Ben Lombaard Development Logo"
                fill
                className="object-contain dark:hidden"
                priority
              />
              <Image
                src="/images/logo-dark.svg"
                alt="Ben Lombaard Development Logo"
                fill
                className="object-contain hidden dark:block"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="navbar-right hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-foreground hover:text-primary transition-colors duration-200 text-sm font-medium"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}

            <ThemeToggle />

            {/* Desktop CV Dropdown */}
            <div className="dropdown-menu relative" ref={desktopDropdownRef}>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200 border border-primary/20 hover:border-primary/40 text-sm font-medium"
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
              >
                <span>CV</span>
                <ChevronDown
                  className={`h-3 w-3 transition-transform duration-200 ${
                    isCvDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              {isCvDropdownOpen && (
                <div
                  className="dropdown-content absolute right-0 w-48 bg-background border border-border rounded-lg shadow-xl overflow-hidden z-[9999]"
                  style={{
                    top: getDropdownTopPosition(),
                  }}
                >
                  <button
                    className="dropdown-item w-full text-left hover:bg-primary/5 flex items-center gap-3 px-4 py-3 transition-colors"
                    onClick={() => {
                      window.open("/pdf/cv.pdf", "_blank");
                      setIsCvDropdownOpen(false);
                    }}
                  >
                    <Download className="h-4 w-4 text-primary" />
                    <span className="font-medium">Download</span>
                  </button>
                  <div className="border-t border-border/50" />
                  <button
                    className="dropdown-item w-full text-left hover:bg-primary/5 flex items-center gap-3 px-4 py-3 transition-colors"
                    onClick={() => openPdfViewer("/pdf/cv.pdf")}
                  >
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="font-medium">Preview</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation - Use separate component */}
          <MobileNav onPdfView={openPdfViewer} />
        </div>
      </header>

      {/* PDF Viewer Modal */}
      <div
        className={`pdf-viewer-container fixed inset-0 bg-background z-[100] transition-all duration-300 ${
          isPdfViewerOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <div className="pdf-viewer-header flex items-center justify-between p-4 border-b border-border bg-background">
          <h3 className="font-semibold text-lg text-foreground">
            Curriculum Vitae
          </h3>
          <div className="flex items-center gap-2">
            <button
              className="hidden sm:flex px-3 py-2 text-sm bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/80 transition-colors"
              onClick={() => window.open("/pdf/cv.pdf", "_blank")}
            >
              Open in New Tab
            </button>
            <button
              className="p-2 rounded-md hover:bg-primary/10 transition-colors"
              onClick={() => setIsPdfViewerOpen(false)}
              aria-label="Close PDF viewer"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>
          </div>
        </div>
        <div className="pdf-viewer-content flex-1 overflow-hidden">
          {isPdfViewerOpen && (
            <iframe
              src={pdfUrl}
              className="w-full h-full border-0"
              title="PDF Viewer"
            />
          )}
        </div>
      </div>
    </>
  );
}
