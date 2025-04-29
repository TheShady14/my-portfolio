"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Download } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { ResumeCard } from "./resume-card";

interface EducationCardProps {
  school: string;
  degree: string;
  start: string;
  end: string;
  logoUrl?: string;
  certificateUrl?: string;
  description?: string;
}

export function EducationCard({
  school,
  degree,
  start,
  end,
  logoUrl,
  certificateUrl,
  description,
}: EducationCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="cursor-pointer">
          <ResumeCard
            logoUrl={logoUrl}
            altText={school}
            title={school}
            subtitle={degree}
            period={`${start} - ${end}`}
            description={description}
          />
        </div>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>{degree}</DialogTitle>
          <DialogDescription>
            {school} • {start} - {end}
          </DialogDescription>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
          {certificateUrl && (
            <div className="relative w-full h-[400px] border rounded-md overflow-hidden">
              <Image
                src={certificateUrl || "/placeholder.svg"}
                alt={`${degree} certificate`}
                fill
                className="object-contain"
              />
            </div>
          )}
          {certificateUrl && (
            <Button asChild>
              <a
                href={certificateUrl}
                download
                target="_blank"
                rel="noopener noreferrer"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Certificate
              </a>
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
