import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Github, LinkIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  video?: string;
  dates?: string;
  tags: string[];
  href?: string;
  links?: {
    github?: string;
    demo?: string;
  };
}

export function ProjectCard({
  title,
  description,
  image,
  video,
  dates,
  tags,
  href,
  links,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden h-full flex flex-col">
      <div className="relative aspect-video">
        {video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />
        ) : (
          <Image
            src={image || "/placeholder.svg?height=400&width=600"}
            alt={title}
            fill
            className="object-cover transition-transform hover:scale-105"
          />
        )}
      </div>
      <CardContent className="p-4 flex-grow">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-xl mb-2">{title}</h3>
          {dates && (
            <span className="text-xs text-muted-foreground">{dates}</span>
          )}
        </div>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="bg-primary/10 text-primary border-primary/20"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0 flex justify-between">
        {href && (
          <Link href={href} className="text-sm hover:underline">
            Learn more
          </Link>
        )}
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
      </CardFooter>
    </Card>
  );
}
