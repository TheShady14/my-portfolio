import type React from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

interface ResumeCardProps {
  logoUrl?: string;
  altText: string;
  title: string;
  subtitle: string;
  period?: string;
  description?: string;
  href?: string;
  badges?: string[];
}

export function ResumeCard({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  description,
  href,
  badges,
}: ResumeCardProps) {
  const CardWrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link href={href} target="_blank">
          <Card className="overflow-hidden transition-all hover:border-primary/50 hover:shadow-sm h-full flex flex-col">
            {children}
          </Card>
        </Link>
      );
    }
    return (
      <Card className="overflow-hidden h-full flex flex-col">{children}</Card>
    );
  };

  return (
    <CardWrapper>
      <CardContent className="p-4 flex-1 flex flex-col">
        <div className="flex flex-col gap-4 h-full">
          {logoUrl && (
            <div className="w-full h-28 flex justify-center items-center bg-white rounded-md overflow-hidden">
              <Image
                src={logoUrl}
                alt={altText}
                width={100}
                height={100}
                className="object-contain max-h-full"
              />
            </div>
          )}
          <div className="flex-1 space-y-1">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold">{title}</h3>
              {period && (
                <span className="text-xs text-muted-foreground">{period}</span>
              )}
            </div>
            <p className="text-sm text-muted-foreground">{subtitle}</p>
            {description && (
              <p className={cn("text-sm text-muted-foreground pt-2")}>
                {description}
              </p>
            )}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-1 pt-2">
                {badges.map((badge) => (
                  <Badge key={badge} variant="outline">
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </CardWrapper>
  );
}
