"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EducationCardProps {
  logoUrl: string;
  school: string;
  degree: string;
  start: string;
  end: string;
  description: string;
  link?: string;
  className?: string;
}

export function EducationCard({
  logoUrl,
  school,
  degree,
  start,
  end,
  description,
  link,
  className,
}: EducationCardProps) {
  return (
    <Card
      className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden bg-card/95 backdrop-blur-sm ${className}`}
    >
      {/* Image section matching project cards */}
      <div className="relative h-48 overflow-hidden bg-muted/80">
        <img
          src={logoUrl || "/placeholder.svg"}
          alt={`${school} logo`}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <Badge variant="secondary" className="mb-2">
            <Calendar className="w-3 h-3 mr-1" />
            {start} - {end}
          </Badge>
        </div>
      </div>

      <CardContent className="p-6 bg-card">
        <div className="space-y-3">
          <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {school}
          </h3>
          <p className="text-lg font-medium text-muted-foreground">{degree}</p>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {description}
          </p>

          {link && (
            <Button
              variant="outline"
              size="sm"
              className="mt-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors bg-card"
              onClick={() => window.open(link, "_blank")}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Learn More
            </Button>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
