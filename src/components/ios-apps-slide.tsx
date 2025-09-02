"use client";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

// Add proper TypeScript interface for the Iphone15Pro props
interface Iphone15ProProps {
  width: string;
  height: string;
  src?: string;
  className?: string;
}

const Iphone15Pro = ({ width, height, src, className }: Iphone15ProProps) => (
  <div className={`relative ${className}`} style={{ width, height }}>
    {/* iPhone frame */}
    <div className="w-full h-full bg-black rounded-[2rem] md:rounded-[3rem] p-1.5 md:p-2 shadow-2xl">
      {/* Screen */}
      <div className="w-full h-full bg-white rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden relative">
        {/* Notch */}
        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 md:w-32 h-4 md:h-6 bg-black rounded-b-xl md:rounded-b-2xl z-10"></div>

        {/* Screenshot container  */}
        <div className="w-full h-full flex items-center justify-center bg-gray-50">
          <img
            src={src || "/placeholder.svg"}
            alt="App screenshot"
            className="w-full h-full object-contain"
            onError={(e) => {
              e.currentTarget.src =
                "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='400' viewBox='0 0 200 400'%3E%3Crect width='200' height='400' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' textAnchor='middle' dy='0.3em' fontFamily='Arial, sans-serif' fontSize='16' fill='%236b7280'%3EApp Screenshot%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
      </div>
    </div>
  </div>
);

// iOS apps showcase slide with manual arrow controls
export default function IOSAppsSlide() {
  const [currentApp, setCurrentApp] = useState(0);

  const nextApp = () => {
    setCurrentApp((prev) => (prev === apps.length - 1 ? 0 : prev + 1));
  };

  const prevApp = () => {
    setCurrentApp((prev) => (prev === 0 ? apps.length - 1 : prev - 1));
  };

  // App data
  const apps = [
    {
      name: "Swash",
      description:
        "Swash is a premium app-based laundry club offering weekly or twice-weekly pickups via branded delivery vehicles. Users schedule, track, and manage laundry through the app. Swash supports local laundromats, ensures quality, and provides a hassle-free, power-resilient laundry experience.",
      screenshot: "/images/swash-app-screenshot.PNG",
      logo: "/images/swash-logo.png",
      githubLink: "https://github.com/TheShady14/swash.git",
      hasGithub: true,
    },
  ];

  const currentAppData = apps[currentApp];

  return (
    <div className="max-w-6xl mx-auto px-4">
      {/* Stack vertically on mobile, side by side on desktop */}
      <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        {/* iPhone display section */}
        <div className="w-full flex justify-center relative order-1 lg:order-1">
          {/* Navigation arrows - hidden on mobile, visible on desktop when multiple apps */}
          {apps.length > 1 && (
            <>
              <button
                onClick={prevApp}
                className="hidden lg:block absolute left-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/90 backdrop-blur-md border-2 border-border hover:bg-background transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Previous app"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>

              <button
                onClick={nextApp}
                className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20 p-3 rounded-full bg-background/90 backdrop-blur-md border-2 border-border hover:bg-background transition-all duration-200 hover:scale-110 shadow-lg"
                aria-label="Next app"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </>
          )}

          <div className="relative">
            {/* iPhone tray effect */}
            <div className="absolute -bottom-2 md:-bottom-4 -left-2 md:-left-4 -right-2 md:-right-4 h-4 md:h-8 bg-gradient-to-t from-gray-200 to-transparent dark:from-gray-800 rounded-full blur-sm opacity-50"></div>

            {/* iPhone with current app - responsive sizing */}
            <div className="relative z-10 transition-all duration-700 ease-in-out transform hover:scale-105">
              <Iphone15Pro
                width="250px" // Smaller on mobile
                height="510px" // Proportional height
                src={currentAppData.screenshot}
                className="drop-shadow-2xl md:w-[300px] md:h-[612px]" // Larger on desktop
              />
            </div>

            {/* App indicator dots */}
            {apps.length > 1 && (
              <div className="flex justify-center mt-4 md:mt-6 space-x-2">
                {apps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentApp(index)}
                    className={`w-2.5 h-2.5 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      index === currentApp
                        ? "bg-primary scale-125"
                        : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                    }`}
                    aria-label={`Switch to ${apps[index].name}`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>

        {/* App details section */}
        <div className="w-full space-y-4 md:space-y-6 order-2 lg:order-2">
          {/* responsive sizing */}
          <div className="flex items-center space-x-3 md:space-x-4">
            <div className="w-12 h-12 md:w-16 md:h-16 bg-white rounded-xl md:rounded-2xl flex items-center justify-center shadow-lg border border-gray-200">
              <span
                className="font-bold text-2xl md:text-4xl"
                style={{
                  color: "#2D9CDB",
                }}
              >
                S
              </span>
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground">
                {currentAppData.name}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                iOS Application
              </p>
            </div>
          </div>

          {/* App description - better mobile text sizing */}
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
            {currentAppData.description}
          </p>

          {/* Action buttons - responsive button sizing */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4">
            <Button
              variant="default"
              className="flex items-center justify-center gap-2 w-full sm:w-auto text-sm md:text-base py-2.5 md:py-3"
              onClick={() => window.open(currentAppData.githubLink, "_blank")}
            >
              <Github className="w-4 h-4" />
              View on GitHub
            </Button>

            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 bg-transparent w-full sm:w-auto text-sm md:text-base py-2.5 md:py-3"
              onClick={() => {
                // Scroll to contact section
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              <ExternalLink className="w-4 h-4" />
              Get In Touch
            </Button>
          </div>

          {/* show only on mobile when multiple apps */}
          {apps.length > 1 && (
            <div className="flex justify-center lg:hidden gap-4 pt-4">
              <button
                onClick={prevApp}
                className="p-2.5 rounded-full bg-background/90 backdrop-blur-md border-2 border-border hover:bg-background transition-all duration-200 shadow-lg"
                aria-label="Previous app"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={nextApp}
                className="p-2.5 rounded-full bg-background/90 backdrop-blur-md border-2 border-border hover:bg-background transition-all duration-200 shadow-lg"
                aria-label="Next app"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}
        </div>
      </div>

      {/* info section - better mobile spacing */}
      <div className="mt-8 md:mt-12 text-center">
        <p className="text-xs md:text-sm text-muted-foreground max-w-2xl mx-auto px-4">
          This application showcases modern iOS development practices with focus
          on user experience, performance optimization, and clean architecture
          patterns.
        </p>
      </div>
    </div>
  );
}
