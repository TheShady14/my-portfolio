"use client";

import { useEffect } from "react";

/**
 * Custom hook for smooth scrolling to anchor links
 * Accounts for fixed navbar height and adds offset
 */
export function useSmoothScroll() {
  useEffect(() => {
    // Handle anchor link clicks
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest("a");

      // Check if it's an anchor link (starts with #)
      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault();

        // Get the target element
        const targetId = anchor.hash.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          // Get navbar height to offset scroll position
          const navbar = document.querySelector(".navbar");
          const navbarHeight = navbar ? navbar.clientHeight : 0;

          // Calculate scroll position with offset
          const targetPosition =
            targetElement.getBoundingClientRect().top + window.scrollY;
          const offsetPosition = targetPosition - navbarHeight - 20; // Extra 20px padding

          // Smooth scroll to the target
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }
    };

    // Add event listener to document
    document.addEventListener("click", handleAnchorClick);

    // Clean up
    return () => {
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);
}
