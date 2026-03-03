"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Container } from "@/components/layout/Container";
import { person } from "@/data/profile";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/#highlights", label: "Highlights" },
  { href: "/#themes", label: "Themes" },
  { href: "/projects", label: "Projects" },
  { href: "/#experience", label: "Experience" },
  { href: "/#skills", label: "Skills" },
  { href: "/#blogs", label: "Authored section" },
  { href: "/#contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const SECTION_IDS = ["hero", "highlights", "themes", "experience", "skills", "blogs", "contact"];

export function Nav() {
  const pathname = usePathname();
  const normalizedPath = pathname?.replace(/\/$/, "") || "/";
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const visibilityRef = useRef<Record<string, number>>({});

  useEffect(() => {
    if (normalizedPath !== "/") {
      setActiveSectionId(null);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const id = entry.target.id;
          if (!id) continue;
          visibilityRef.current[id] = entry.isIntersecting ? entry.intersectionRatio : 0;
        }
        const vis = visibilityRef.current;
        const mostVisible = SECTION_IDS.reduce<[string, number]>(
          (best, id) => {
            const ratio = vis[id] ?? 0;
            return ratio > best[1] ? [id, ratio] : best;
          },
          ["hero", vis["hero"] ?? 0]
        );
        setActiveSectionId(mostVisible[1] > 0 ? mostVisible[0] : "hero");
      },
      { rootMargin: "-15% 0px -65% 0px", threshold: [0, 0.05, 0.1, 0.5, 1] }
    );

    const timeoutId = setTimeout(() => {
      for (const id of SECTION_IDS) {
        const el = document.getElementById(id);
        if (el) observer.observe(el);
      }
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
    };
  }, [normalizedPath]);

  const isActive = (href: string) => {
    if (href === "/") {
      return normalizedPath === "/" && (activeSectionId === "hero" || activeSectionId === null);
    }
    if (href.startsWith("/#")) {
      if (normalizedPath !== "/") return false;
      const sectionId = href.replace("/#", "");
      return activeSectionId === sectionId;
    }
    return normalizedPath === href || normalizedPath.startsWith(href + "/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileMenuOpen(false);
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-studio-border bg-neutral-200 backdrop-blur-sm">
      <Container className="px-4 sm:px-6 lg:px-8">
        <nav className="flex h-12 md:h-14 items-center justify-between gap-x-4 py-2">
          <Link
            href="/"
            className={cn(
              "shrink-0 font-heading text-base font-semibold transition-colors md:text-lg",
              normalizedPath === "/" && (activeSectionId === "hero" || activeSectionId === null)
                ? "text-accent font-semibold"
                : "text-studio-fg hover:text-accent"
            )}
          >
            {person.name.split(" ")[0]}
          </Link>

          {/* Desktop: horizontal links */}
          <div className="hidden md:flex md:items-center md:gap-x-1 md:gap-y-1">
            {NAV_LINKS.map((link) => {
              const active = isActive(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "relative rounded-lg px-2.5 py-1.5 text-xs font-medium transition-colors md:px-3 md:py-2 md:text-sm",
                    active
                      ? "text-accent font-semibold"
                      : "text-studio-muted hover:text-studio-fg hover:bg-studio-border/50"
                  )}
                >
                  {link.label}
                  {active && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Mobile: hamburger button */}
          <button
            type="button"
            className="md:hidden rounded-lg p-2 text-studio-fg transition-colors hover:bg-studio-border/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
            onClick={() => setMobileMenuOpen((o) => !o)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>

        {/* Mobile menu panel */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden border-t border-studio-border bg-neutral-200"
            >
              <div className="flex flex-col gap-0 py-2">
                {NAV_LINKS.map((link) => {
                  const active = isActive(link.href);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                        active
                          ? "bg-accent/10 text-accent font-semibold"
                          : "text-studio-muted hover:bg-studio-border/50 hover:text-studio-fg"
                      )}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </Container>
    </header>
  );
}
