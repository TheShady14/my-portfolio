"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { IconCloud } from "../../components/magicui/icon-cloud";

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

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="space-y-8">
      {/* IconCloud Section */}
      <div className="h-[500px] w-full">
        <IconCloud
          images={techIcons.map(
            (name) => `/icons/${name.toLowerCase().replace(/\s+/g, "-")}.svg`
          )}
          imageSize={40}
          radius={180}
        />
      </div>

      {/* Tech Categories */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Frontend */}
        <Card className="overflow-hidden">
          <div className="bg-primary/10 py-2 px-4 font-medium">Frontend</div>
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
                  className="rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Backend */}
        <Card className="overflow-hidden">
          <div className="bg-primary/10 py-2 px-4 font-medium">Backend</div>
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
                  className="rounded-full bg-secondary px-3 py-1 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Tools & Platforms */}
        <Card className="overflow-hidden">
          <div className="bg-primary/10 py-2 px-4 font-medium">
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
                  className="rounded-full bg-secondary px-3 py-1 text-sm font-medium"
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
