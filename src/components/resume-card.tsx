"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle: string;
  period: string;
  description?: string;
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
}: ResumeCardProps) {
  return (
    <Card className="overflow-hidden h-full transition-all duration-300 hover:shadow-md bg-card">
      <CardContent className="p-6 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-4">
          {logoUrl && (
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-background flex-shrink-0">
              <Image
                src={logoUrl || "/placeholder.svg"}
                alt={altText}
                fill
                className="object-contain p-1"
              />
            </div>
          )}
          <div>
            <h3 className="font-medium text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground">{period}</p>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-2">{subtitle}</h4>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
