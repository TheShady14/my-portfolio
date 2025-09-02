"use client";
import Slide from "./slide";

export default function FigmaSlide() {
  return (
    <Slide id="figma-mockup" bg="gray-50">
      <div className="max-w-4xl mx-auto text-center">
        {/* Paragraph now ABOVE the content box */}
        <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-8">
          This section highlights design mockups created in Figma, showcasing
          layout ideas, UI styles, and component interactions for an early
          conceptualisation of the Appointment Engine project. I prefer to adapt
          designs but am omfortable designing mockups and wireframes on Figma.
        </p>

        <div className="bg-card/95 backdrop-blur-sm dark:bg-card/95 p-8 rounded-lg shadow-lg border border-border">
          <div className="w-full max-w-2xl mx-auto mb-6">
            <img
              src="/images/figma.png"
              alt="Figma Design Mockup"
              className="w-full rounded-lg shadow-md"
              onError={(e) => {
                e.currentTarget.style.display = "none";
                (e.currentTarget
                  .nextElementSibling as HTMLElement)!.style.display = "flex";
              }}
            />
            <div className="hidden w-full h-64 bg-gray-200 dark:bg-gray-700 rounded-lg items-center justify-center">
              <span className="text-gray-500">Figma Mockup Image</span>
            </div>
          </div>

          <a
            href="https://www.figma.com/proto/HkUcvGBXa4FaFPdW6P1hru/Appointment-Engine-Proof-of-Concept?node-id=0-1&t=xZfilIPuLu5AaB5y-1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors font-medium"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M15.5 0H8.5C6.57 0 5 1.57 5 3.5S6.57 7 8.5 7H12V3.5C12 1.57 13.43 0 15.5 0ZM8.5 8.5C6.57 8.5 5 10.07 5 12S6.57 15.5 8.5 15.5H12V8.5H8.5ZM8.5 17C6.57 17 5 18.57 5 20.5S6.57 24 8.5 24S12 22.43 12 20.5V17H8.5ZM13.5 8.5C13.5 6.57 15.07 5 17 5S20.5 6.57 20.5 8.5S18.93 12 17 12S13.5 10.43 13.5 8.5ZM17 13.5C18.93 13.5 20.5 15.07 20.5 17S18.93 20.5 17 20.5S13.5 18.93 13.5 17S15.07 13.5 17 13.5Z" />
            </svg>
            View Design on Figma
          </a>
        </div>
      </div>
    </Slide>
  );
}
