"use client";

import { cn } from "@/lib/utils";

interface GradientBackgroundProps {
  className?: string;
}

export function GradientBackground({ className }: GradientBackgroundProps) {
  return (
    <>
      {/* Base light gradient */}
      <div
        className={cn(
          "pointer-events-none fixed inset-0 z-0",
          "bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(124,58,237,0.06),transparent_70%)]",
          className
        )}
        aria-hidden
      />
      {/* Animated gradient orbs - subtle movement */}
      <div
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
        aria-hidden
      >
        <div
          className="absolute -top-1/2 -left-1/4 h-full w-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.08)_0%,transparent_70%)] animate-gradient-float"
          style={{ animationDelay: "0s" }}
        />
        <div
          className="absolute -top-1/3 -right-1/4 h-2/3 w-1/2 rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.06)_0%,transparent_70%)] animate-gradient-float"
          style={{ animationDelay: "-7s" }}
        />
        <div
          className="absolute top-1/2 left-1/2 h-1/2 w-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(124,58,237,0.04)_0%,transparent_70%)] animate-gradient-float"
          style={{ animationDelay: "-14s" }}
        />
      </div>
    </>
  );
}
