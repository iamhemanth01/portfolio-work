"use client";

import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ExperienceItem } from "@/data/profile";
import { cn } from "@/lib/utils";

interface TimelineItemProps {
  experience: ExperienceItem;
  isLast?: boolean;
  className?: string;
}

export function TimelineItemComponent({
  experience,
  isLast,
  className,
}: TimelineItemProps) {
  return (
    <div className={cn("relative flex gap-6", className)}>
      {/* Timeline line */}
      {!isLast && (
        <div
          className="absolute left-[11px] top-10 bottom-0 w-px bg-studio-border"
          aria-hidden
        />
      )}
      {/* Dot */}
      <div
        className={cn(
          "relative z-10 mt-1.5 h-6 w-6 shrink-0 rounded-full border-2 border-accent bg-studio-bg",
          experience.current && "ring-2 ring-accent/30"
        )}
        aria-hidden
      />
      <div className="flex-1 min-w-0 pb-4">
        <Accordion type="single" collapsible className="w-full" defaultValue={experience.current ? experience.id : undefined}>
          <AccordionItem value={experience.id} className="border-none">
            <AccordionTrigger className="py-2 hover:no-underline [&[data-state=open]]:text-accent">
              <div className="text-left">
                <div className="flex flex-wrap items-baseline gap-2">
                  <span className="font-heading font-semibold text-studio-fg">
                    {experience.role}
                  </span>
                  <span className="text-studio-muted">·</span>
                  <span className="text-studio-muted">{experience.company}</span>
                  {experience.current && (
                    <span className="rounded bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent-light">
                      Current
                    </span>
                  )}
                </div>
                <p className="mt-0.5 text-sm text-studio-muted">
                  {experience.period}
                  {experience.location && ` · ${experience.location}`}
                </p>
              </div>
            </AccordionTrigger>
            <AccordionContent>
              <p className="text-studio-muted">{experience.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-studio-muted">
                {experience.details.map((detail, i) => (
                  <li key={i}>{detail}</li>
                ))}
              </ul>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </div>
  );
}
