"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Search, ArrowUpRight } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/layout/Container";
import { TagFilter } from "@/components/TagFilter";
import { projects } from "@/data/profile";
import { cn } from "@/lib/utils";

type SortOption = "recent" | "impact" | "az";

export default function ProjectsPage() {
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [sort, setSort] = useState<SortOption>("recent");

  const allTags = useMemo(
    () => Array.from(new Set(projects.flatMap((p) => p.tags))),
    []
  );

  const filteredAndSorted = useMemo(() => {
    let result = projects.filter((p) => {
      const matchSearch =
        !search ||
        p.title.toLowerCase().includes(search.toLowerCase()) ||
        p.oneLiner.toLowerCase().includes(search.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(search.toLowerCase()));
      const matchTags =
        selectedTags.length === 0 ||
        selectedTags.every((t) => p.tags.includes(t));
      return matchSearch && matchTags;
    });

    if (sort === "recent") {
      result = [...result].sort((a, b) => Number(b.year) - Number(a.year));
    } else if (sort === "az") {
      result = [...result].sort((a, b) => a.title.localeCompare(b.title));
    } else if (sort === "impact") {
      result = [...result].sort((a, b) => {
        const aVal = a.impactMetric ? 1 : 0;
        const bVal = b.impactMetric ? 1 : 0;
        if (bVal !== aVal) return bVal - aVal;
        return Number(b.year) - Number(a.year);
      });
    }
    return result;
  }, [search, selectedTags, sort]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const sortLabel =
    sort === "recent"
      ? "Most recent"
      : sort === "impact"
        ? "Most impact"
        : "A–Z";

  return (
    <div className="min-h-screen py-16">
      <Container>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-studio-fg md:text-5xl lg:text-6xl">
          Projects
        </h1>
        <p className="mt-3 max-w-2xl font-body text-sm font-medium text-studio-muted">
          Filter and sort through the full project library.
        </p>

        <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-studio-muted" />
            <Input
              type="search"
              placeholder="Search projects..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10"
              aria-label="Search projects"
            />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="secondary">
                Sort: {sortLabel}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setSort("recent")}>
                Most recent
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSort("impact")}>
                Most impact
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setSort("az")}>
                A–Z
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="mt-6">
          <p className="mb-2 text-sm text-studio-muted">Filter by tag</p>
          <TagFilter
            tags={allTags}
            selected={selectedTags}
            onToggle={toggleTag}
          />
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredAndSorted.map((project) => (
            <Link
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="block group"
            >
              <Card className="h-full border-studio-border bg-neutral-100 transition-all hover:border-accent/30 hover:shadow-md">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0 flex-1">
                      <h2 className="font-heading text-lg font-medium text-studio-fg group-hover:text-accent-light transition-colors md:text-xl">
                        {project.title}
                      </h2>
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
          ))}
        </div>

        {filteredAndSorted.length === 0 && (
          <p className="mt-12 text-center text-studio-muted">
            No projects match your filters. Try adjusting search or tags.
          </p>
        )}
      </Container>
    </div>
  );
}
