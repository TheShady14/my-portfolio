"use client";
import Slide from "./slide";

// Technology concepts slide - showcases specific tech implementations
export default function TechConceptsSlide() {
  return (
    <Slide id="tech-concepts" bg="white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-8 text-center">
          Specific Technology Concepts
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {/* Project 1: Express */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">1. Express</h3>
            {/* Save Express project image as: /public/images/express-project.png */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
              <img
                src="/images/projects/express-project.png"
                alt="Express Project"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "flex";
                }}
              />
              <span className="text-gray-500 hidden">
                Express Project Image
              </span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Express.js backend development project showcasing server-side
              architecture
            </p>
            {/* Replace YOUR_EXPRESS_GITHUB_LINK with your actual GitHub link */}
            <a
              href="https://github.com/TheShady14/Express-Middleware-Test.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 2: Authentication with JWT */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">
              2. Authentication with JWT
            </h3>
            {/* Save JWT project image as: /public/images/jwt-auth-project.png */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
              <img
                src="/images/projects/jwt-auth-project.png"
                alt="JWT Authentication"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "flex";
                }}
              />
              <span className="text-gray-500 hidden">JWT Auth Image</span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              JWT authentication implementation with secure token management
            </p>
            {/* Replace YOUR_JWT_GITHUB_LINK with your actual GitHub link */}
            <a
              href="https://github.com/TheShady14/jwt-auth-example.git"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View on GitHub →
            </a>
          </div>

          {/* Project 3: Redux */}
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
            <h3 className="text-xl font-semibold mb-4">
              3. Redux and Global State Management
            </h3>
            {/* Save Redux project image as: /public/images/redux-project.png */}
            <div className="w-full h-48 bg-gray-200 dark:bg-gray-700 rounded mb-4 flex items-center justify-center">
              <img
                src="/images/projects/redux-project.png"
                alt="Redux Project"
                className="w-full h-full object-cover rounded"
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  e.currentTarget.nextElementSibling!.style.display = "flex";
                }}
              />
              <span className="text-gray-500 hidden">Redux Project Image</span>
            </div>
            <p className="mb-4 text-gray-600 dark:text-gray-300">
              Redux state management implementation with complex application
              state
            </p>
            {/* Replace YOUR_REDUX_DROPBOX_LINK with your actual Dropbox link */}
            <a
              href="YOUR_REDUX_DROPBOX_LINK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 transition-colors"
            >
              View on Dropbox →
            </a>
          </div>
        </div>
      </div>
    </Slide>
  );
}
