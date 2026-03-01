"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Highlight } from "@/data/profile";
import { cn } from "@/lib/utils";

interface HighlightCardProps {
  highlight: Highlight;
  index?: number;
  className?: string;
}

export function HighlightCard({ highlight, index = 0, className }: HighlightCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      className="h-full"
    >
      <Card
        className={cn(
          "group flex h-full flex-col border-studio-border bg-neutral-100 transition-all duration-200 hover:border-studio-muted/40 hover:shadow-glow-sm",
          className
        )}
      >
        <CardContent className="flex flex-1 flex-col p-4">
          <p className="font-heading text-lg font-medium text-studio-fg md:text-xl">
            {highlight.outcome}
          </p>
          <p className="mt-1 flex-1 text-sm text-studio-muted">{highlight.context}</p>
          <Badge variant="default" className="mt-4 shrink-0">
            {highlight.impactChip}
          </Badge>
        </CardContent>
      </Card>
    </motion.div>
  );
}
