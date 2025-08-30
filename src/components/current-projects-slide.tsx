"use client";
import Slide from "./slide";

export default function CurrentProjectsSlide() {
  return (
    <Slide id="current-projects" bg="gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Current Projects
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1: Appointment Engine */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">
              1. Appointment Engine
            </h3>
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
              <img
                src="/public/images/AppointmentEngine.png"
                alt="Appointment Engine"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "flex";
                }}
              />
              <span className="text-gray-500 hidden">
                Appointment Engine Image
              </span>
            </div>
            <p className="mb-2 font-medium text-gray-800 dark:text-gray-200">
              Full-Stack Software System
            </p>
            <p className="mb-4 text-gray-600 dark:text-gray-300 text-sm">
              A comprehensive full-stack appointment booking service and
              business managment toolkit, aimied to change the way businesses
              manage their Businesses from Internal Operations, Administration,
              Invoicing and Customer Engagement in South Africa
            </p>
            <div className="flex items-center text-green-600 dark:text-green-400">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
              <span className="text-sm">In Development</span>
            </div>
          </div>

          {/* Project 2: Giveaway Portal */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">2. Giveaway Portal</h3>

            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
              <img
                src="/images/giveaway-portal.png"
                alt="Giveaway Portal"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "flex";
                }}
              />
              <span className="text-gray-500 hidden">
                Giveaway Portal Image
              </span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Interactive giveaway management platform with user engagement
              features
            </p>

            <a
              href="https://teddybearfoundationgiveaway.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm"
            >
              Visit Website →
            </a>
          </div>

          {/* Project 3: M2 */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">3. M2</h3>

            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
              <img
                src="/images/m2.png"
                alt="M2 Project"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "flex";
                }}
              />
              <span className="text-gray-500 hidden">M2 Project Image</span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Advanced development project showcasing modern web technologies
            </p>

            <a
              href="https://github.com/TheShady14/M2.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View on GitHub →
            </a>
          </div>
        </div>
      </div>
    </Slide>
  );
}
