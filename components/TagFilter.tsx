"use client";

import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface TagFilterProps {
  tags: string[];
  selected: string[];
  onToggle: (tag: string) => void;
  className?: string;
}

export function TagFilter({ tags, selected, onToggle, className }: TagFilterProps) {
  const sortedTags = useMemo(() => [...tags].sort(), [tags]);

  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {sortedTags.map((tag) => {
        const isSelected = selected.includes(tag);
        return (
          <button
            key={tag}
            type="button"
            onClick={() => onToggle(tag)}
            className="focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-studio-bg rounded-lg transition-colors"
            aria-pressed={isSelected}
          >
            <Badge
              variant={isSelected ? "default" : "secondary"}
              className={cn(
                "cursor-pointer transition-all hover:opacity-90",
                isSelected && "border-accent/50"
              )}
            >
              {tag}
            </Badge>
          </button>
        );
      })}
    </div>
  );
}
