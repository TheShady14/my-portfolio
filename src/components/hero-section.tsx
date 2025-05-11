"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Simple mounting effect
  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    // Set the background color based on theme
    const root = document.documentElement;
    if (theme === "dark") {
      root.style.setProperty("--background-color", "black");
    } else {
      root.style.setProperty("--background-color", "white");
    }
  }, [theme]);

  return (
    <section
      id="about"
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundColor: "var(--background-color, white)",
      }}
    >
      {/* Background images - both loaded but only one visible based on theme */}
      <div className="absolute inset-0 transition-opacity duration-300">
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            mounted && theme === "dark" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/images/background-dark.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            mounted && theme !== "dark" ? "opacity-100" : "opacity-0"
          }`}
          style={{
            backgroundImage: "url('/images/background-light.svg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Content container - centered in viewport */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 md:px-6">
        {/* Elegant card with theme-based background */}
        <div
          className={`w-full max-w-xl mx-auto shadow-xl rounded-lg p-8 backdrop-blur-sm border border-primary/10 transition-colors duration-300 ${
            mounted && theme === "dark"
              ? "bg-black/85 text-white"
              : "bg-white/85 text-black"
          }`}
        >
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-3">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground whitespace-nowrap">
                React Development
              </h1>
              <p className="mx-auto max-w-md text-sm md:text-base text-muted-foreground">
                Designing elegant, intuitive frontends and mobile experiences
                with TypeScript, React, and React Native. I bring clean
                architecture, type-safe code, and thoughtful design together to
                turn complex problems into seamless digital solutions.
              </p>
            </div>
            <div className="flex space-x-6 pt-2">
              <SocialButton
                href="https://github.com/TheShady14"
                icon={<Github className="h-5 w-5" />}
                label="Github"
              />
              <SocialButton
                href="https://www.linkedin.com/in/ben-lombaard-42300631a/"
                icon={<Linkedin className="h-5 w-5" />}
                label="LinkedIn"
              />
              <SocialButton
                href="https://www.instagram.com/ben_lombaard02/"
                icon={<Instagram className="h-5 w-5" />}
                label="Instagram"
              />
              <SocialButton
                href="mailto:benlombaard820@gmail.com"
                icon={<Mail className="h-5 w-5" />}
                label="Email"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Extracted social button component with animations
function SocialButton({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <Link href={href} target="_blank">
      <Button
        variant="outline"
        size="icon"
        className="rounded-full border-2 transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground group relative overflow-hidden"
      >
        <span className="absolute inset-0 w-full h-full bg-primary/0 group-hover:bg-primary/100 transition-all duration-300 rounded-full transform scale-0 group-hover:scale-100"></span>
        <span className="relative z-10">{icon}</span>
        <span className="sr-only">{label}</span>
      </Button>
    </Link>
  );
}
