"use client";
import type React from "react";

type SlideProps = {
  id: string;
  children: React.ReactNode;
  bg?: string;
  backgroundImage?: string;
};

export default function Slide({
  id,
  children,
  bg = "background",
  backgroundImage,
}: SlideProps) {
  const backgroundStyles = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  const getBackgroundClass = () => {
    if (backgroundImage) return "";

    switch (bg) {
      case "muted":
        return "bg-muted";
      case "card":
        return "bg-card";
      case "white":
        return "bg-background";
      case "gradient-to-br from-purple-100 to-white":
        return "bg-gradient-to-br from-purple-100 to-white dark:from-purple-900/20 dark:to-background";
      case "background":
      default:
        return "bg-background";
    }
  };

  return (
    <section
      id={id}
      className={`min-h-screen flex items-center justify-center snap-start ${getBackgroundClass()}`}
      style={backgroundStyles}
    >
      <div className="w-full flex items-center justify-center py-20 px-4">
        {children}
      </div>
    </section>
  );
}
