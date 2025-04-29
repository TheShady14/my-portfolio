"use client";

import React from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg border bg-card">
      <div className="relative aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-105"
        />
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 right-4 flex gap-2">
            <Link href={link} target="_blank">
              <Button size="sm" variant="secondary" className="rounded-full">
                <Github className="mr-1 h-4 w-4" /> Code
              </Button>
            </Link>
            <Button size="sm" variant="default" className="rounded-full">
              <ExternalLink className="mr-1 h-4 w-4" /> Demo
            </Button>
          </div>
        </div>
      </div>
      <CardContent className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="px-6 pb-6 pt-0">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-primary/10 text-primary text-xs px-3 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardFooter>
    </Card>
  );
}
