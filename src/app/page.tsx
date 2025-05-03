import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/navbar";
import ContactForm from "./components/contact-form";
import ProjectCard from "./components/project-card";
import TechStack from "./components/tech-stack";
import { EducationCard } from "@/components/education-card";

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Navbar />
      <main className="w-full max-w-6xl mx-auto px-4 md:px-6 pt-16">
        <section id="about" className="py-20 md:py-32">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-8 text-center">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
                  Full Stack Web Developer
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Building sophisticated digital experiences utilizing modern
                  technologies. Detail-oriented approach to creating simple
                  solutions to complex requirements.
                </p>
              </div>
              <div className="flex space-x-4">
                <Link href="https://github.com/TheShady14" target="_blank">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">Github</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.linkedin.com/in/ben-lombaard-42300631a/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </Link>
                <Link
                  href="https://www.instagram.com/ben_lombaard02/"
                  target="_blank"
                >
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Instagram className="h-5 w-5" />
                    <span className="sr-only">Instagram</span>
                  </Button>
                </Link>
                <Link href="mailto:benlombaard820@gmail.com">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full hover:bg-primary hover:text-primary-foreground"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="py-20 bg-muted/50">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
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
        </section>

        <section className="py-20">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
              Tech Stack
            </h2>
            <TechStack />
          </div>
        </section>

        <section id="education" className="py-20 bg-muted/50">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
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
        </section>

        <section id="contact" className="py-20 bg-muted/50">
          <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-2xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-12 text-center">
                Get in Touch
              </h2>
              <div className="bg-card rounded-lg border shadow-sm p-8">
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted/30">
        <div className="w-full max-w-6xl mx-auto px-4 md:px-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ben.dev. All rights reserved.
          </p>
          <nav className="sm:ml-auto flex gap-6">
            <Link
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-sm text-muted-foreground hover:text-foreground hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  );
}
