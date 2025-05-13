"use client";

import type React from "react";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeToggle } from "@/components/theme-toggle";
import {
  Menu,
  X,
  ChevronDown,
  Download,
  Eye,
  DoorClosedIcon as CloseIcon,
} from "lucide-react";
import { useTheme } from "next-themes";
import "../styles/navbar.css";

// Navigation items
const navItems = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Tech Stack", href: "#tech-stack" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCvDropdownOpen, setIsCvDropdownOpen] = useState(false);
  const [isPdfViewerOpen, setIsPdfViewerOpen] = useState(false);
  const [pdfUrl, setPdfUrl] = useState("");
  const { theme } = useTheme();
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Handle click outside dropdown
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsCvDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Smooth scroll function
  const handleSmoothScroll = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();

    if (href.startsWith("#")) {
      const targetId = href.substring(1);
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        // Get navbar height for offset
        const navbarHeight =
          document.querySelector(".navbar")?.clientHeight || 0;

        // Calculate position
        const targetPosition =
          targetElement.getBoundingClientRect().top + window.scrollY;
        const offsetPosition = targetPosition - navbarHeight - 20;

        // Scroll
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Close mobile menu if open
        setIsMenuOpen(false);
      }
    }
  };

  // Open PDF viewer
  const openPdfViewer = (url: string) => {
    setPdfUrl(url);
    setIsPdfViewerOpen(true);
    setIsCvDropdownOpen(false);
  };

  return (
    <>
      <header
        className={`navbar ${
          scrolled ? "navbar-scrolled" : "navbar-transparent"
        }`}
      >
        <div className="navbar-container">
          {/* Logo */}
          <Link href="/" className="flex items-center">
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
          <div className="navbar-right hidden md:flex">
            {/* Nav Links */}
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="nav-link text-foreground hover:text-primary"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* CV Dropdown */}
            <div className="dropdown-menu" ref={dropdownRef}>
              <button
                className="flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
                onClick={() => setIsCvDropdownOpen(!isCvDropdownOpen)}
              >
                Curriculum Vitae
                <ChevronDown
                  className={`h-4 w-4 transition-transform ${
                    isCvDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {isCvDropdownOpen && (
                <div className="dropdown-content absolute right-0 mt-2 w-56 bg-background border rounded-md shadow-lg">
                  <button
                    className="dropdown-item w-full text-left"
                    onClick={() => window.open("/pdf/cv.pdf", "_blank")}
                  >
                    <Download className="dropdown-icon h-5 w-5" />
                    <span>Download CV</span>
                  </button>
                  <button
                    className="dropdown-item w-full text-left"
                    onClick={() => openPdfViewer("/pdf/cv.pdf")}
                  >
                    <Eye className="dropdown-icon h-5 w-5" />
                    <span>Preview CV</span>
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <ThemeToggle />
            <button
              className="ml-4 p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 menu-icon open" />
              ) : (
                <Menu className="h-6 w-6 menu-icon" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        <div className={`mobile-menu ${isMenuOpen ? "active" : ""}`}>
          <div className="container mx-auto px-4 py-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="mobile-nav-link"
                onClick={(e) => handleSmoothScroll(e, item.href)}
              >
                {item.name}
              </Link>
            ))}

            {/* Mobile CV Options */}
            <div className="p-4 space-y-2">
              <button
                className="w-full flex items-center gap-2 px-4 py-2 rounded-md bg-primary text-primary-foreground"
                onClick={() => window.open("/pdf/cv.pdf", "_blank")}
              >
                <Download className="h-5 w-5" />
                <span>Download CV</span>
              </button>
              <button
                className="w-full flex items-center gap-2 px-4 py-2 rounded-md bg-secondary text-secondary-foreground"
                onClick={() => openPdfViewer("/pdf/cv.pdf")}
              >
                <Eye className="h-5 w-5" />
                <span>Preview CV</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* PDF Viewer Modal */}
      <div
        className={`pdf-viewer-container ${isPdfViewerOpen ? "active" : ""}`}
      >
        <div className="pdf-viewer-header">
          <h3 className="font-medium">Curriculum Vitae</h3>
          <button
            className="close-button"
            onClick={() => setIsPdfViewerOpen(false)}
            aria-label="Close PDF viewer"
          >
            <CloseIcon className="h-6 w-6" />
          </button>
        </div>
        <div className="pdf-viewer-content">
          {isPdfViewerOpen && (
            <iframe
              src={pdfUrl}
              className="pdf-viewer-iframe"
              title="PDF Viewer"
            />
          )}
        </div>
      </div>
    </>
  );
}
