"use client";

import { useState, useEffect } from "react";

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

export default function IconTest() {
  const [iconStatus, setIconStatus] = useState<Record<string, boolean>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkIcons = async () => {
      const status: Record<string, boolean> = {};

      for (const icon of techIcons) {
        const path = `/icons/${icon.toLowerCase().replace(/\s+/g, "-")}.svg`;
        try {
          const response = await fetch(path, { method: "HEAD" });
          status[icon] = response.ok;
        } catch (e) {
          status[icon] = false;
        }
      }

      setIconStatus(status);
      setLoading(false);
    };

    checkIcons();
  }, []);

  if (loading) {
    return <div>Checking icon availability...</div>;
  }

  const missingIcons = techIcons.filter((icon) => !iconStatus[icon]);

  return (
    <div className="p-4 bg-card border rounded-lg">
      <h2 className="text-xl font-bold mb-4">Icon Status</h2>

      {missingIcons.length > 0 ? (
        <div>
          <p className="text-destructive mb-2">
            Missing icons ({missingIcons.length}):
          </p>
          <ul className="list-disc pl-5 space-y-1">
            {missingIcons.map((icon) => (
              <li key={icon}>
                {icon} -{" "}
                <code className="bg-muted px-1 py-0.5 rounded text-sm">
                  /icons/{icon.toLowerCase().replace(/\s+/g, "-")}.svg
                </code>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p className="text-green-500">All icons are available!</p>
      )}
    </div>
  );
}
