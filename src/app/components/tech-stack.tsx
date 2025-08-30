"use client";

import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconCloud } from "@/components/magicui/icon-cloud";

const techIcons = [
  "apache-superset",
  "bootstrap",
  "docker",
  "chakraui",
  "chartdotjs",
  "css3",
  "daisyui",
  "expo",
  "express",
  "figma",
  "firebase",
  "github",
  "google-cloud",
  "html5",
  "javascript",
  "jest",
  "jquery",
  "mongodb",
  "netlify",
  "nextdotjs",
  "nodedotjs",
  "npm",
  "pnpm",
  "postman",
  "react",
  "reacthookform",
  "reactquery",
  "reactrouter",
  "redux",
  "ruby",
  "supabase",
  "swift",
  "tailwindcss",
  "threedotjs",
  "twilio",
  "typescript",
  "vercel",
  "wordpress",
  "xcode",
];

export default function TechStack() {
  const [mounted, setMounted] = useState(false);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    setMounted(true);

    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setScreenSize("mobile");
      } else if (width < 768) {
        setScreenSize("tablet");
      } else {
        setScreenSize("desktop");
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  // Create paths for light mode icons (dark SVGs)
  const lightModeIcons = techIcons.map(
    (name) => `/icons/light/${name.toLowerCase().replace(/\s+/g, "-")}.svg`
  );

  // Create paths for dark mode icons (light SVGs)
  const darkModeIcons = techIcons.map(
    (name) => `/icons/dark/${name.toLowerCase().replace(/\s+/g, "-")}.svg`
  );

  // Responsive parameters based on screen size
  const getCloudParams = () => {
    switch (screenSize) {
      case "mobile":
        return {
          imageSize: 50,
          radius: 220,
          height: 400,
        };
      case "tablet":
        return {
          imageSize: 40,
          radius: 250,
          height: 400,
        };
      default:
        return {
          imageSize: 50,
          radius: 350,
          height: 500,
        };
    }
  };

  const cloudParams = getCloudParams();

  return (
    <div className="space-y-8">
      {/* IconCloud Section */}
      <div className="w-full px-4 sm:px-0">
        <IconCloud
          lightModeImages={lightModeIcons}
          darkModeImages={darkModeIcons}
          imageSize={cloudParams.imageSize}
          radius={cloudParams.radius}
          initialSpeed={0.01}
          height={cloudParams.height}
        />
      </div>

      {/* Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <Card className="overflow-hidden bg-card/95 backdrop-blur-sm">
          <div className="bg-primary/10 py-2 px-4 font-medium text-foreground">
            Frontend
          </div>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {[
                "HTML5",
                "CSS3",
                "JavaScript",
                "TypeScript",
                "React",
                "Next.js",
                "Redux",
                "TailwindCSS",
                "Bootstrap",
                "Chakra",
                "DaisyUI",
                "React Router",
                "React Query",
                "React Hook Form",
                "React Native",
                "Expo",
                "Vite",
                "Three.js",
                "Jest",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Backend */}
        <Card className="overflow-hidden bg-card/95 backdrop-blur-sm">
          <div className="bg-primary/10 py-2 px-4 font-medium text-foreground">
            Backend
          </div>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {[
                "NodeJS",
                "Express.js",
                "JWT",
                "MongoDB",
                "Supabase",
                "Firebase",
                "Nodemon",
                "NPM",
                "PNPM",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & Platforms */}
        <Card className="overflow-hidden bg-card/95 backdrop-blur-sm">
          <div className="bg-primary/10 py-2 px-4 font-medium text-foreground">
            Tools & Platforms
          </div>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-2">
              {[
                "GitHub",
                "Postman",
                "Figma",
                "Chart.js",
                "Google Cloud",
                "Netlify",
                "Vercel",
                "WordPress",
                "Twilio",
                "Docker",
                "Context-API",
                "jQuery",
                "Ruby",
                "Swift",
                "XCode",
              ].map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary text-secondary-foreground px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
