"use client";
import { useTheme } from "next-themes";
import type React from "react";

import { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const SocialButton = ({
  href,
  icon,
  label,
  isFlickering,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  isFlickering: boolean;
}) => (
  <Button
    variant="outline"
    size="icon"
    asChild
    className={`transition-all duration-300 ${
      isFlickering
        ? "scale-110 border-primary/80 shadow-lg"
        : "scale-100 border-primary/50"
    }`}
  >
    <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
      {icon}
    </a>
  </Button>
);

// Footer component with scroll escape functionality
export default function FlickeringFooter() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isFlickering, setIsFlickering] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Create flickering effect similar to navbar animations
  useEffect(() => {
    const flickerInterval = setInterval(() => {
      setIsFlickering(true);
      setTimeout(() => setIsFlickering(false), 150);
    }, 3000); // Flicker every 3 seconds

    return () => clearInterval(flickerInterval);
  }, []);

  // Add scroll listener to disable snap scrolling when user reaches the footer area
  useEffect(() => {
    let isScrollingToFooter = false;

    const handleWheel = (e: WheelEvent) => {
      const mainContainer = document.querySelector("main");
      const contactSection = document.getElementById("contact");

      if (!mainContainer || !contactSection) return;

      const mainRect = mainContainer.getBoundingClientRect();
      const contactRect = contactSection.getBoundingClientRect();

      // Check if we're at the bottom of the contact section and scrolling down
      const isAtContactBottom = contactRect.bottom <= mainRect.bottom + 50; // 50px threshold
      const isScrollingDown = e.deltaY > 0;

      if (isAtContactBottom && isScrollingDown && !isScrollingToFooter) {
        e.preventDefault();
        isScrollingToFooter = true;

        // Temporarily disable snap scrolling
        mainContainer.style.scrollSnapType = "none";

        // Scroll to show the footer
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: "smooth",
        });

        // Re-enable snap scrolling after a delay
        setTimeout(() => {
          mainContainer.style.scrollSnapType = "y mandatory";
          isScrollingToFooter = false;
        }, 1000);
      }
    };

    // Add wheel listener to the main container
    const mainContainer = document.querySelector("main");
    if (mainContainer) {
      mainContainer.addEventListener("wheel", handleWheel, { passive: false });
    }

    return () => {
      if (mainContainer) {
        mainContainer.removeEventListener("wheel", handleWheel);
      }
    };
  }, [mounted]);

  if (!mounted) {
    return null;
  }

  return (
    <footer
      className={`w-full mt-auto flex items-center justify-center transition-all duration-500 ${
        isFlickering ? "opacity-80 scale-[0.998]" : "opacity-100 scale-100"
      } bg-background/95 backdrop-blur-sm border-t border-border relative py-12`}
    >
      {/* Background pattern that flickers */}
      <div
        className={`absolute inset-0 transition-opacity duration-300 ${
          isFlickering ? "opacity-30" : "opacity-10"
        }`}
      >
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, ${
              theme === "dark" ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,0.1)"
            } 0%, transparent 50%)`,
          }}
        />
      </div>

      <div className="relative z-10 w-full px-6 py-12">
        <div className="w-full">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Left side - Logo and Bio */}
            <div className="space-y-6">
              {/* Flickering logo */}
              <div
                className={`relative transition-all duration-300 ${
                  isFlickering
                    ? "brightness-125 saturate-150"
                    : "brightness-100"
                }`}
              >
                <div className="relative h-16 w-64">
                  <Image
                    src="/images/logo-light.svg"
                    alt="Ben Thomas Development Logo"
                    fill
                    className={`object-contain transition-opacity duration-500 ${
                      theme === "dark" ? "opacity-0" : "opacity-100"
                    }`}
                    priority
                  />
                  <Image
                    src="/images/logo-dark.svg"
                    alt="Ben Thomas Development Logo"
                    fill
                    className={`object-contain transition-opacity duration-500 ${
                      theme === "dark" ? "opacity-100" : "opacity-0"
                    }`}
                    priority
                  />
                </div>
              </div>

              {/* Bio section */}
              <div className="space-y-3">
                <h3 className="text-xl font-semibold text-foreground">
                  Ben Thomas
                </h3>
                <p className="text-muted-foreground max-w-md leading-relaxed">
                  Full-Stack Developer specializing in React, TypeScript, and
                  modern web technologies. Passionate about creating elegant
                  solutions and seamless user experiences.
                </p>
              </div>
            </div>

            {/* Right side - Social buttons matching hero section */}
            <div className="flex flex-col items-center md:items-end space-y-6">
              <h4 className="text-lg font-medium text-foreground">
                Connect With Me
              </h4>

              {/* Social buttons with same styling as hero section */}
              <div className="flex space-x-4">
                <SocialButton
                  href="https://github.com/TheShady14"
                  icon={<Github className="h-5 w-5" />}
                  label="Github"
                  isFlickering={isFlickering}
                />
                <SocialButton
                  href="https://www.linkedin.com/in/ben-lombaard-42300631a/"
                  icon={<Linkedin className="h-5 w-5" />}
                  label="LinkedIn"
                  isFlickering={isFlickering}
                />
                <SocialButton
                  href="https://www.instagram.com/ben_lombaard02/"
                  icon={<Instagram className="h-5 w-5" />}
                  label="Instagram"
                  isFlickering={isFlickering}
                />
                <SocialButton
                  href="mailto:benlombaard820@gmail.com"
                  icon={<Mail className="h-5 w-5" />}
                  label="Email"
                  isFlickering={isFlickering}
                />
              </div>

              {/* CTA button with navigation to contact section */}
              <Button
                variant="outline"
                className={`transition-all duration-300 border-2 ${
                  isFlickering
                    ? "scale-105 border-primary/80 shadow-lg"
                    : "scale-100 border-primary/50"
                }`}
                onClick={() => {
                  const contactSection = document.getElementById("contact");
                  const mainContainer = document.querySelector("main");
                  if (contactSection && mainContainer) {
                    const containerRect = mainContainer.getBoundingClientRect();
                    const targetRect = contactSection.getBoundingClientRect();
                    const scrollTop = mainContainer.scrollTop;
                    const targetPosition =
                      targetRect.top - containerRect.top + scrollTop;
                    mainContainer.scrollTo({
                      top: targetPosition,
                      behavior: "smooth",
                    });
                  }
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>

          {/* Bottom section with navigation functionality */}
          <div className="mt-8 pt-6 border-t border-border/50">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-muted-foreground">
                © 2024 Ben Thomas. All rights reserved.
              </p>
              <div className="flex space-x-6 text-sm">
                <button
                  onClick={() => {
                    const projectsSection = document.getElementById("projects");
                    const mainContainer = document.querySelector("main");
                    if (projectsSection && mainContainer) {
                      const containerRect =
                        mainContainer.getBoundingClientRect();
                      const targetRect =
                        projectsSection.getBoundingClientRect();
                      const scrollTop = mainContainer.scrollTop;
                      const targetPosition =
                        targetRect.top - containerRect.top + scrollTop;
                      mainContainer.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Projects
                </button>
                <button
                  onClick={() => {
                    const techSection = document.getElementById("tech-section");
                    const mainContainer = document.querySelector("main");
                    if (techSection && mainContainer) {
                      const containerRect =
                        mainContainer.getBoundingClientRect();
                      const targetRect = techSection.getBoundingClientRect();
                      const scrollTop = mainContainer.scrollTop;
                      const targetPosition =
                        targetRect.top - containerRect.top + scrollTop;
                      mainContainer.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Tech Stack
                </button>
                <button
                  onClick={() => {
                    const contactSection = document.getElementById("contact");
                    const mainContainer = document.querySelector("main");
                    if (contactSection && mainContainer) {
                      const containerRect =
                        mainContainer.getBoundingClientRect();
                      const targetRect = contactSection.getBoundingClientRect();
                      const scrollTop = mainContainer.scrollTop;
                      const targetPosition =
                        targetRect.top - containerRect.top + scrollTop;
                      mainContainer.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                      });
                    }
                  }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
