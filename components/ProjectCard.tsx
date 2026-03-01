"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/data/profile";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: Project;
  index?: number;
  className?: string;
}

export function ProjectCard({ project, index = 0, className }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -2 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.35, delay: index * 0.06 }}
    >
      <Link href={`/projects/${project.slug}`} className="block group">
        <Card
          className={cn(
            "h-full border-studio-border bg-neutral-100 transition-all duration-200 hover:border-accent/30 hover:shadow-md",
            className
          )}
        >
          <CardContent className="p-6">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0 flex-1">
                <h3 className="font-heading text-lg font-medium text-studio-fg group-hover:text-accent-light transition-colors md:text-xl">
                  {project.title}
                </h3>
                <p className="mt-2 text-sm text-studio-muted line-clamp-2">
                  {project.oneLiner}
                </p>
              </div>
              <ArrowUpRight className="h-5 w-5 shrink-0 text-studio-muted group-hover:text-accent group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
            </div>
            <div className="mt-4 flex flex-wrap items-center gap-2">
              {project.tags.slice(0, 3).map((tag) => (
                <Badge key={tag} variant="secondary" className="text-xs">
                  {tag}
                </Badge>
              ))}
              {project.impactMetric && (
                <span className="ml-auto rounded-lg border border-studio-border bg-white px-2.5 py-0.5 font-body text-xs font-medium text-studio-muted">
                  {project.impactMetric}
                </span>
              )}
            </div>
            <p className="mt-3 text-xs text-studio-muted">
              {project.year} · {project.role}
            </p>
          </CardContent>
        </Card>
      </Link>
    </motion.div>
  );
}
