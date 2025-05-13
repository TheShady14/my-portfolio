"use client";

import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactForm from "./components/contact-form";
import ProjectCard from "@/components/project-card";
import TechStack from "./components/tech-stack";
import { EducationCard } from "@/components/education-card";
import HeroSection from "@/components/hero-section";
import { motion } from "framer-motion";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background transition-theme">
      <Navbar />
      <main className="w-full pt-16">
        <HeroSection />

        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <motion.section
            id="projects"
            className="py-20 bg-muted/50 rounded-lg my-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.section>

          <motion.section
            className="py-20 bg-background rounded-lg my-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
                Tech Stack
              </h2>
              <TechStack />
            </div>
          </motion.section>

          <motion.section
            id="education"
            className="py-20 bg-muted/50 rounded-lg my-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
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
          </motion.section>

          <motion.section
            id="contact"
            className="py-20 bg-background rounded-lg my-4"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
              <div className="mx-auto max-w-2xl">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center text-foreground">
                  Get in Touch
                </h2>
                <ContactForm />
              </div>
            </div>
          </motion.section>
        </div>
      </main>

      <motion.footer
        className="border-t bg-muted/30 py-6 mt-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ben.dev. All rights reserved.
          </p>
          <nav className="flex gap-6 mt-4 sm:mt-0">
            <Link
              className="text-sm text-muted-foreground hover:text-foreground relative group"
              href="#"
            >
              Terms of Service
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full origin-left"></span>
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground relative group"
              href="#"
            >
              Privacy
              <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-primary transition-all duration-300 group-hover:w-full origin-left"></span>
            </Link>
          </nav>
        </div>
      </motion.footer>
    </div>
  );
}
