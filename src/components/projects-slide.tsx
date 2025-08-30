"use client";
import Slide from "./slide";

// Projects slide component - displays main portfolio projects
export default function ProjectsSlide() {
  return (
    <Slide id="projects" bg="gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project 1</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Project description placeholder
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project 2</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Project description placeholder
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Project 3</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Project description placeholder
            </p>
          </div>
        </div>
      </div>
    </Slide>
  );
}
