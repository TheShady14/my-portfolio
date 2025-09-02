"use client";
import Navbar from "@/components/navbar";
import ContactForm from "./components/contact-form";
import ProjectCard from "@/components/project-card";
import TechStack from "./components/tech-stack";
import { EducationCard } from "@/components/education-card";
import HeroSection from "@/components/hero-section";
import Slide from "@/components/slide";
import IOSAppsSlide from "@/components/ios-apps-slide";
import FlickeringFooter from "@/components/flickering-footer";
import { InteractiveGridPattern } from "@/components/magicui/interactive-grid-pattern";
import FigmaSlide from "@/components/figma-slide";

export default function Page() {
  return (
    <>
      <div className="fixed inset-0 w-screen h-screen z-0">
        <InteractiveGridPattern
          className="w-full h-full opacity-20 dark:opacity-10"
          width={60}
          height={60}
          squares={[40, 30]}
        />
      </div>

      {/* Main app container */}
      <div className="min-h-screen flex flex-col bg-background transition-theme relative z-10">
        <Navbar />

        {/* Snap scrolling container  */}
        <main
          className="w-full pt-16 snap-y snap-mandatory overflow-y-auto"
          style={{ height: "calc(100vh - 4rem)" }}
        >
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
                  description="A full-stack appointment booking system with OAuth2 authentication, Infobip communication, API integrrations and custom CSS."
                  image="/projects/project1.png"
                  link="https://github.com/TheShady14/Craig-Small-Physiotherapy.git"
                  tags={["Infobip", "OAuth2", "TailwindCSS"]}
                />
                <ProjectCard
                  title="Task Management App"
                  description="TaskMaster is a full-stack todo application with user authentication built using Next.js, MongoDB, and JWT authentication."
                  image="/projects/project2.png"
                  link="https://github.com/TheShady14/task-master.git"
                  tags={["Next.js", "Node.js", "Express"]}
                />
                <ProjectCard
                  title="Itunes API Explorer"
                  description="A web application that allows users to search for music, movies, podcasts, and more from the iTunes Store and Apple Books Store."
                  image="/projects/project4.png"
                  link="https://github.com/TheShady14/itunes-explorer.git"
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
                  image="/projects/express-project.png"
                  link="https://github.com/TheShady14/Express-Middleware-Test.git"
                  tags={["Express.js", "Node.js", "REST API"]}
                />
                <ProjectCard
                  title="Authentication with JWT"
                  description="Secure user authentication system using JSON Web Tokens and bcrypt password hashing."
                  image="/projects/jwt-auth-project.png"
                  link="https://github.com/TheShady14/jwt-auth-example.git"
                  tags={["JWT", "Authentication", "Security"]}
                />
                <ProjectCard
                  title="Redux and Global State Management"
                  description="Complex state management using Redux Toolkit with persistent storage and middleware."
                  image="/projects/redux-project.png"
                  link="https://www.dropbox.com/scl/fo/wycu7o0j3el25ywltutwm/AElXbN7QSgX5zWeP43iD0Nc?rlkey=qqc7yjbrl6fmlu89ib2xb8160&st=hlplhp1z&dl=0"
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
                  description="A comprehensive full-stack appointment booking service and
              business managment toolkit, aimied to change the way businesses
              manage their businesses from Internal Operations, Administration,
              Invoicing, Accounting, CRM and Automation in South Africa"
                  image="/images/AppointmentEngine.png"
                  link="YOUR_APPOINTMENT_ENGINE_LINK"
                  tags={["Full-Stack", "API Integrations", "Data Analytics"]}
                />
                <ProjectCard
                  title="Giveaway Portal"
                  description="Interactive platform for managing contests and giveaways with custom user engagement features."
                  image="/images/giveaway-portal.png"
                  link="https://teddybearfoundationgiveaway.com/"
                  tags={["React", "Contest Management", "User Engagement"]}
                />
                <ProjectCard
                  title="M2"
                  description="A custom CSS frontend sales site for Mediametrics, built with TypeScript and adapted from Figma."
                  image="/images/m2.png"
                  link="https://github.com/TheShady14/M2.git"
                  tags={["Typscript", "CSS", "Custom Design"]}
                />
              </div>
            </div>
          </Slide>

          {/* iOS Apps Slide */}
          <Slide id="ios-apps" bg="background">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
                iOS Applications
              </h2>
              <IOSAppsSlide />
            </div>
          </Slide>

          {/* Figma Design Slide */}
          <Slide id="figma-mockup" bg="muted">
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center text-foreground">
                Design Showcase
              </h2>
              <div className="text-center">
                <FigmaSlide />
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
        </main>

        {/* Footer Section */}
        <FlickeringFooter />
      </div>
    </>
  );
}
