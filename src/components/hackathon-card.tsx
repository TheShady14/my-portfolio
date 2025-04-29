import { Badge } from "@/components/ui/badge";
import { Github, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface HackathonCardProps {
  title: string;
  description: string;
  location: string;
  dates: string;
  image?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export function HackathonCard({
  title,
  description,
  location,
  dates,
  image,
  links,
}: HackathonCardProps) {
  return (
    <li className="relative pl-6 pb-6 pt-2">
      <div className="absolute left-0 top-2 h-4 w-4 -translate-x-1/2 rounded-full border bg-background"></div>
      <div className="flex flex-col sm:flex-row gap-4">
        {image && (
          <div className="relative h-24 w-24 overflow-hidden rounded-md border shrink-0">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="object-cover"
            />
          </div>
        )}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="font-medium">{title}</h3>
            <span className="text-xs text-muted-foreground">{dates}</span>
          </div>
          <p className="text-sm text-muted-foreground">{description}</p>
          <div className="flex items-center justify-between">
            <Badge variant="outline">{location}</Badge>
            <div className="flex gap-2">
              {links?.github && (
                <Link
                  href={links.github}
                  target="_blank"
                  className="hover:text-primary"
                >
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              )}
              {links?.demo && (
                <Link
                  href={links.demo}
                  target="_blank"
                  className="hover:text-primary"
                >
                  <LinkIcon className="h-4 w-4" />
                  <span className="sr-only">Demo</span>
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
