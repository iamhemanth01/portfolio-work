"use client";

import * as React from "react";
import Image from "next/image";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { ExperienceItem } from "@/data/profile";
import { cn } from "@/lib/utils";

const COMPANY_LOGOS: Record<string, string> = {
  Locus: "/images/companies/locus.png",
  Genpact: "/images/companies/genpact.png",
  Jumbotail: "/images/companies/jumbotail.png",
  Doodhwala: "/images/companies/doodhwala.png",
};

function parsePeriod(period: string): { start: string; end: string } {
  const parts = period.split(/\s*–\s*/);
  const start = (parts[0] ?? "").trim();
  const end = (parts[1] ?? start).trim() || start;
  return { start, end };
}

function getCompanyDateRange(roles: ExperienceItem[]): string {
  if (roles.length === 0) return "";
  const monthOrder: Record<string, number> = {
    Jan: 1, Feb: 2, Mar: 3, Apr: 4, May: 5, Jun: 6,
    Jul: 7, Aug: 8, Sep: 9, Oct: 10, Nov: 11, Dec: 12,
  };
  const toKey = (s: string) => {
    if (!s || s === "Present") return s === "Present" ? "9999-12" : "0000-00";
    const [mon, year] = s.split(" ");
    const m = monthOrder[mon ?? ""] ?? 0;
    const y = parseInt(year ?? "0", 10);
    return `${y}-${String(m).padStart(2, "0")}`;
  };
  let minStart = "";
  let maxEnd = "";
  let minKey = "9999-12";
  let maxKey = "0000-00";
  for (const r of roles) {
    const { start, end } = parsePeriod(r.period);
    const sk = toKey(start);
    const ek = end === "Present" ? "9999-12" : toKey(end);
    if (sk < minKey) {
      minKey = sk;
      minStart = start;
    }
    if (ek > maxKey) {
      maxKey = ek;
      maxEnd = end === "Present" ? "Present" : end;
    }
  }
  if (!minStart || !maxEnd) return "";
  return minStart === maxEnd ? minStart : `${minStart} – ${maxEnd}`;
}

function groupByCompany(items: ExperienceItem[]): {
  company: string;
  tenure?: string;
  dateRange: string;
  roles: ExperienceItem[];
}[] {
  const map = new Map<string, ExperienceItem[]>();
  const tenureMap = new Map<string, string>();
  for (const item of items) {
    if (!map.has(item.company)) {
      map.set(item.company, []);
      if (item.companyTenure) tenureMap.set(item.company, item.companyTenure);
    }
    map.get(item.company)!.push(item);
  }
  return Array.from(map.entries()).map(([company, roles]) => ({
    company,
    tenure: tenureMap.get(company),
    dateRange: getCompanyDateRange(roles),
    roles,
  }));
}

interface ExperienceSectionProps {
  experience: ExperienceItem[];
  className?: string;
}

export function ExperienceSection({ experience, className }: ExperienceSectionProps) {
  const groups = groupByCompany(experience);

  return (
    <div className={cn("space-y-4", className)}>
      {groups.map(({ company, tenure, dateRange, roles }) => (
        <div
          key={company}
          className="overflow-hidden rounded-xl border-2 border-studio-border bg-neutral-100 shadow-md"
        >
          <div className="border-b border-studio-border bg-neutral-50 px-3 py-2 sm:px-4 sm:py-2.5">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              {COMPANY_LOGOS[company] && (
                <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-studio-border bg-white sm:h-12 sm:w-12">
                  <Image
                    src={COMPANY_LOGOS[company]}
                    alt=""
                    width={48}
                    height={48}
                    className="object-contain p-0.5"
                    unoptimized
                  />
                </span>
              )}
              <span className="font-heading text-lg font-semibold tracking-tight text-studio-fg md:text-xl">
                {company}
              </span>
              <span className="ml-auto shrink-0 font-body text-sm font-semibold text-studio-muted">
                {tenure ? `${tenure}` : ""}
                {tenure && dateRange ? " · " : ""}
                {dateRange ? dateRange : ""}
              </span>
            </div>
          </div>
          <div className="relative p-3 sm:p-4">
            {roles.map((role, idx) => (
              <div
                key={role.id}
                className={cn(
                  "relative flex gap-3",
                  idx < roles.length - 1 && "pb-3"
                )}
              >
                {/* Vertical line segment connecting to the next role */}
                {idx < roles.length - 1 && (
                  <div
                    className="absolute left-[5px] top-8 bottom-0 w-0.5 bg-neutral-300"
                    aria-hidden
                  />
                )}
                {/* Timeline dot */}
                <div
                  className={cn(
                    "relative z-10 mt-1.5 h-3 w-3 shrink-0 rounded-full bg-neutral-400",
                    role.current && "ring-2 ring-accent/50 ring-offset-2 ring-offset-neutral-50"
                  )}
                  aria-hidden
                />
                <div className="min-w-0 flex-1">
                  <div className="rounded-lg border-2 border-studio-border bg-neutral-50 p-3 shadow-sm">
                    <Accordion
                      type="single"
                      collapsible
                      className="w-full"
                      defaultValue={role.current ? role.id : undefined}
                    >
                      <AccordionItem value={role.id} className="border-none">
                        <AccordionTrigger className="py-0.5 hover:no-underline [&[data-state=open]]:text-accent">
                          <div className="text-left">
                            <div className="flex flex-wrap items-baseline gap-2">
                              <span className="font-heading text-base font-medium text-studio-fg md:text-lg">
                                {role.role}
                              </span>
                              {role.current && (
                                <span className="rounded bg-accent-muted px-2 py-0.5 text-xs font-medium text-accent-light">
                                  Current
                                </span>
                              )}
                              {role.badge && (
                                <span className="rounded bg-studio-border/60 px-2 py-0.5 text-xs font-medium text-studio-muted">
                                  {role.badge}
                                </span>
                              )}
                            </div>
                            <p className="mt-1 font-body text-sm text-studio-muted">
                              {role.period}
                              {role.location && ` · ${role.location}`}
                            </p>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <ul className="mt-1 list-disc space-y-0.5 pl-5 font-body text-sm text-studio-muted">
                            {[
                              ...(role.summary ? [role.summary] : []),
                              ...role.details,
                            ].map((point, i) => (
                              <li key={i}>{point}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
