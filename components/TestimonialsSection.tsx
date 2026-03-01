"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import type { Testimonial } from "@/data/profile";
import { cn } from "@/lib/utils";

const INITIAL_COUNT = 3;

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? testimonials : testimonials.slice(0, INITIAL_COUNT);
  const hasMore = testimonials.length > INITIAL_COUNT;

  return (
    <>
      <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {visible.map((t) => (
          <Card
            key={t.id}
            className="border-2 border-studio-border bg-neutral-100 shadow-md"
          >
            <CardContent className="p-4 text-left">
              <blockquote className="font-body whitespace-pre-line text-left text-sm leading-relaxed text-studio-muted">
                {t.quote}
              </blockquote>
              <footer className="mt-4 border-t border-studio-border pt-4 text-left">
                <p className="font-heading font-semibold text-studio-fg">{t.author}</p>
                {(t.role || t.company) && (
                  <p className="mt-0.5 font-body text-sm text-studio-muted">
                    {[t.role, t.company].filter(Boolean).join(" · ")}
                  </p>
                )}
                {t.relationship && (
                  <p className="mt-1 font-body text-xs text-studio-muted">{t.relationship}</p>
                )}
                {t.date_display && (
                  <p className="font-body text-xs text-studio-muted">{t.date_display}</p>
                )}
              </footer>
            </CardContent>
          </Card>
        ))}
      </div>
      {hasMore && !showAll && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="secondary"
            onClick={() => setShowAll(true)}
            className="gap-2"
            aria-expanded={showAll}
          >
            More testimonials
            <ChevronDown className="h-4 w-4" />
          </Button>
        </div>
      )}
    </>
  );
}
