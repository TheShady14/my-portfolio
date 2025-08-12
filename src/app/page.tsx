"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import Navbar from "@/components/navbar";
import ContactForm from "./components/contact-form";
import ProjectCard from "@/components/project-card";
import TechStack from "./components/tech-stack";
import { EducationCard } from "@/components/education-card";
import HeroSection from "@/components/hero-section";
import Slide from "@/components/slide";
import IOSAppsSlide from "@/components/ios-apps-slide";
import FlickeringFooter from "@/components/flickering-footer";

export default function Page() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background transition-theme">
      <Navbar />

      <main className="w-full pt-16 snap-y snap-mandatory overflow-y-scroll h-screen">
        {/* Hero Section */}
        <section className="min-h-screen snap-start">
          <HeroSection />
        </section>

        {/* Projects Slide */}
        <Slide id="projects" bg="muted">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
              Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Appointment Booking System"
                description="A full-stack e-commerce platform built with Next.js, Prisma, and Stripe integration."
                image="/projects/project1.png?height=400&width=600"
                link="https://github.com"
                tags={["Twilio", "OAuth2", "TailwindCSS"]}
              />
              <ProjectCard
                title="Task Management App"
                description="A real-time task management application with team collaboration features."
                image="/projects/project2.png?height=400&width=600"
                link="https://github.com"
                tags={["Next.js", "Node.js", "Express"]}
              />
              <ProjectCard
                title="Itunes API Explorer"
                description="An AI-powered chat interface with natural language processing capabilities."
                image="/projects/project4.png?height=400&width=600"
                link="https://github.com"
                tags={["Typscript", "Next.js", "JWT"]}
              />
            </div>
          </div>
        </Slide>

        {/* Tech Concepts Slide */}
        <Slide id="tech-concepts" bg="background">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
              Specific Technology Concepts
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Express"
                description="RESTful API development with Express.js, middleware implementation, and server-side routing."
                image="/projects/express-project.png?height=400&width=600"
                link="YOUR_EXPRESS_GITHUB_LINK"
                tags={["Express.js", "Node.js", "REST API"]}
              />
              <ProjectCard
                title="Authentication with JWT"
                description="Secure user authentication system using JSON Web Tokens and bcrypt password hashing."
                image="/projects/jwt-auth-project.png?height=400&width=600"
                link="YOUR_JWT_GITHUB_LINK"
                tags={["JWT", "Authentication", "Security"]}
              />
              <ProjectCard
                title="Redux and Global State Management"
                description="Complex state management using Redux Toolkit with persistent storage and middleware."
                image="/projects/redux-project.png?height=400&width=600"
                link="YOUR_DROPBOX_LINK"
                tags={["Redux", "State Management", "React"]}
              />
            </div>
          </div>
        </Slide>

        {/* Current Projects Slide */}
        <Slide id="current-projects" bg="muted">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
              Current Projects
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <ProjectCard
                title="Appointment Engine"
                description="A Full-Stack Software System for managing appointments with real-time scheduling and notifications."
                image="/projects/appointment-engine.png?height=400&width=600"
                link="YOUR_APPOINTMENT_ENGINE_LINK"
                tags={["Full-Stack", "Real-time", "Scheduling"]}
              />
              <ProjectCard
                title="Giveaway Portal"
                description="Interactive platform for managing contests and giveaways with user engagement features."
                image="/projects/giveaway-portal.png?height=400&width=600"
                link="YOUR_GIVEAWAY_WEBSITE_LINK"
                tags={["React", "Contest Management", "User Engagement"]}
              />
              <ProjectCard
                title="M2"
                description="Advanced project management system with collaborative features and analytics dashboard."
                image="/projects/m2-project.png?height=400&width=600"
                link="YOUR_M2_GITHUB_LINK"
                tags={["Project Management", "Analytics", "Collaboration"]}
              />
            </div>
          </div>
        </Slide>

        {/* iOS Apps Slide */}
        <Slide id="ios-apps" bg="background">
          <IOSAppsSlide />
        </Slide>

        {/* Figma Design Slide */}
        <Slide id="figma-mockup" bg="muted">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
              Design Showcase
            </h2>
            <div className="text-center">
              <div className="bg-card rounded-lg p-8 shadow-lg">
                <img
                  src="/images/figma-mockup.png"
                  alt="Figma Design Mockup"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-md mb-6"
                />
                <h3 className="text-2xl font-semibold mb-4">
                  UI/UX Design Project
                </h3>
                <p className="text-muted-foreground mb-6">
                  Modern interface design showcasing user experience principles
                </p>
                <a
                  href="YOUR_FIGMA_LINK"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
                >
                  View on Figma
                </a>
              </div>
            </div>
          </div>
        </Slide>

        {/* Tech Stack Slide */}
        <Slide id="tech-section" bg="background">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </Slide>

        {/* Education Slide */}
        <Slide id="education" bg="muted">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
              Education
            </h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <EducationCard
                logoUrl="/logos/iu-logo.jpg"
                school="IU International University of Applied Sciences"
                degree="Bachelor of Science - BSc, Computer Science"
                start="Oct 2024"
                end="Apr 2028"
                description="Comprehensive BSc program focusing on theoretical and practical aspects of computer science."
              />
              <EducationCard
                logoUrl="/logos/hyperiondev-logo.png"
                school="HyperionDev & The University of Stellenbosch"
                degree="Full-Stack Web Development Bootcamp"
                start="Jul 2024"
                end="Apr 2025"
                description="Intensive bootcamp in full-stack web development, taught in collaboration with Stellenbosch University."
              />
              <EducationCard
                logoUrl="/logos/vega-logo.png"
                school="Vega School"
                degree="Bachelor of Commerce - Digital Marketing"
                start="Jan 2021"
                end="Nov 2023"
                description="Specialised in digital marketing strategy, branding, and social media communications."
              />
            </div>
          </div>
        </Slide>

        {/* Contact Slide */}
        <Slide id="contact" bg="background">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
                Get in Touch
              </h2>
              <ContactForm />
            </div>
          </div>
        </Slide>

        {/* Portfolio showcase image section */}
        <section className="w-full snap-start">
          <div className="w-full">
            <div className="relative w-full">
              <img
                src="/images/section-image-light.png"
                alt="Portfolio showcase image"
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                  mounted && theme === "dark" ? "opacity-0" : "opacity-100"
                }`}
                style={{
                  position:
                    mounted && theme === "dark" ? "absolute" : "relative",
                  top: mounted && theme === "dark" ? 0 : "auto",
                }}
              />
              <img
                src="/images/section-image-dark.png"
                alt="Portfolio showcase image"
                className={`w-full h-auto object-cover transition-opacity duration-500 ${
                  mounted && theme !== "dark" ? "opacity-100" : "opacity-0"
                }`}
                style={{
                  position:
                    mounted && theme !== "dark" ? "absolute" : "relative",
                  top: mounted && theme !== "dark" ? 0 : "auto",
                }}
              />
            </div>
          </div>
        </section>

        {/* Footer - now only appears after contact */}
        <section className="snap-start">
          <FlickeringFooter />
        </section>
      </main>
    </div>
  );
}
