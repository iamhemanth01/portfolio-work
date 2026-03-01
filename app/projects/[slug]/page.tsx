import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { projects } from "@/data/profile";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return { title: "Project not found" };
  return {
    title: project.title,
    description: project.oneLiner,
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const otherProjects = projects.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen py-10">
      <Container>
        <Button variant="ghost" size="sm" asChild className="mb-6">
          <Link href="/projects" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            All projects
          </Link>
        </Button>

        <header className="mb-8">
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-2 font-heading text-4xl font-semibold tracking-tight leading-tight text-studio-fg md:text-5xl lg:text-6xl">
            {project.title}
          </h1>
          <p className="mt-2 font-body text-base leading-relaxed text-studio-muted">{project.oneLiner}</p>
          <div className="mt-2 flex flex-wrap items-center gap-4 text-sm text-studio-muted">
            <span>{project.year}</span>
            <span>·</span>
            <span>{project.role}</span>
            {project.impactMetric && (
              <>
                <span>·</span>
                <span className="rounded-lg border border-studio-border bg-white px-2.5 py-0.5 text-sm font-medium text-studio-muted">
                  {project.impactMetric}
                </span>
              </>
            )}
          </div>
          {project.links && project.links.length > 0 && (
            <div className="mt-3 flex gap-3">
              {project.links.map((link) => (
                <a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent hover:text-accent-light text-sm"
                >
                  {link.label}
                  <ExternalLink className="h-4 w-4" />
                </a>
              ))}
            </div>
          )}
        </header>

        <div className="max-w-none space-y-6">
          {project.problem && (
            <section>
              <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
                Problem
              </h2>
              <p className="mt-1.5 font-body text-base leading-relaxed text-studio-muted">{project.problem}</p>
            </section>
          )}

          {project.approach && (
            <section>
              <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
                Approach
              </h2>
              <p className="mt-1.5 font-body text-base leading-relaxed text-studio-muted">{project.approach}</p>
            </section>
          )}

          {project.result && (
            <section>
              <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
                Result
              </h2>
              <p className="mt-1.5 font-body text-base leading-relaxed text-studio-muted">{project.result}</p>
              {project.metrics && project.metrics.length > 0 && (
                <ul className="mt-2 list-disc space-y-0.5 pl-5 font-body text-base leading-relaxed text-studio-muted">
                  {project.metrics.map((m, i) => (
                    <li key={i}>{m}</li>
                  ))}
                </ul>
              )}
            </section>
          )}

          {project.screenshots && project.screenshots.length > 0 && (
            <section>
              <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
                Screenshots
              </h2>
              <div className="mt-2 grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((img, i) => (
                  <div
                    key={i}
                    className="relative overflow-hidden rounded-xl border border-studio-border"
                  >
                    <Image
                      src={img.url}
                      alt={img.alt}
                      width={1200}
                      height={600}
                      className="h-auto w-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}

          {project.learnings && project.learnings.length > 0 && (
            <section>
              <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
                Learnings
              </h2>
              <ul className="mt-2 list-disc space-y-0.5 pl-5 font-body text-base leading-relaxed text-studio-muted">
                {project.learnings.map((l, i) => (
                  <li key={i}>{l}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <section className="mt-12 border-t border-studio-border pt-8">
          <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
            More projects
          </h2>
          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherProjects.map((p) => (
              <Link
                key={p.slug}
                href={`/projects/${p.slug}`}
                className="group block rounded-xl border border-studio-border bg-neutral-100 p-6 transition-all hover:border-accent/30 hover:shadow-md"
              >
                <h3 className="font-heading text-lg font-medium text-studio-fg group-hover:text-accent-light md:text-xl">
                  {p.title}
                </h3>
                <p className="mt-2 text-sm text-studio-muted line-clamp-2">
                  {p.oneLiner}
                </p>
                <p className="mt-3 text-xs text-studio-muted">
                  {p.year} · {p.role}
                </p>
              </Link>
            ))}
          </div>
          <div className="mt-4">
            <Button variant="secondary" asChild>
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </section>
      </Container>
    </div>
  );
}
