import Link from "next/link";
import Image from "next/image";
import {
  Layers,
  Zap,
  Accessibility,
  Code,
  Users,
  Briefcase,
  Mail,
  Github,
  Linkedin,
  Twitter,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { Section } from "@/components/layout/Section";
import { HeroEntrance } from "@/components/HeroEntrance";
import { HighlightCard } from "@/components/HighlightCard";
import { ProjectCard } from "@/components/ProjectCard";
import { ExperienceSection } from "@/components/ExperienceSection";
import { ContactSection } from "@/components/ContactSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  person,
  highlights,
  themes,
  experience,
  skills,
  projects,
  testimonials,
  blogsAuthored,
  resumeConfig,
  heroAboutSummary,
} from "@/data/profile";

const themeIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  layers: Layers,
  zap: Zap,
  accessibility: Accessibility,
  code: Code,
  users: Users,
};

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  LinkedIn: Linkedin,
  GitHub: Github,
  Twitter: Twitter,
};

const featuredProjects = projects.filter((p) => p.featured);

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section
        id="hero"
        className="relative overflow-hidden py-10 md:py-12 lg:py-14"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(124,58,237,0.12),transparent_70%)] animate-shimmer pointer-events-none" />
        <Container className="relative z-10 pt-4 pb-4">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[auto_1fr] lg:gap-12 lg:items-start">
            {/* Left column: profile image */}
            <div className="order-1 flex justify-center lg:order-1 lg:justify-start">
              <span className="relative flex h-40 w-40 shrink-0 overflow-hidden rounded-full border-2 border-studio-border shadow-lg sm:h-44 sm:w-44 lg:h-56 lg:w-56">
                <Image
                  src="/images/hero-photo.png"
                  alt=""
                  width={224}
                  height={224}
                  className="object-cover"
                  priority
                />
              </span>
            </div>
            {/* Right column: name, subtitle, CTAs, metrics */}
            <div className="order-2 flex flex-col text-left lg:order-2">
              <HeroEntrance>
                <h1 className="font-heading text-4xl font-semibold tracking-tight leading-tight text-studio-fg md:text-5xl lg:text-6xl">
                  {person.name}
                </h1>
                <p className="mt-3 max-w-2xl font-body text-base leading-relaxed text-studio-muted sm:text-lg">
                  {person.headline}
                </p>
                <div className="mt-6 flex flex-wrap gap-6 gap-y-1 font-body text-sm font-medium text-studio-muted sm:gap-8 sm:text-base">
                  <span>{projects.length}+ projects shipped</span>
                  <span>6+ years</span>
                  <span>Supply chain & logistics</span>
                </div>
              </HeroEntrance>
            </div>
          </div>
        </Container>
      </section>

      {/* About / Summary */}
      <Section id="about-summary" className="pt-1 md:pt-2">
        <div
          className="h-0.5 w-full bg-[length:200%_100%] bg-[linear-gradient(90deg,transparent_0%,rgb(124,58,237)_50%,transparent_100%)] animate-line-shine"
          aria-hidden
        />
        <Container className="mt-6">
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            {heroAboutSummary.heading}
          </h2>
          <div className="mt-4 w-full space-y-4 text-justify">
            {heroAboutSummary.paragraphs.map((paragraph, i) => (
              <p key={i} className="font-body text-base leading-relaxed text-studio-fg">
                {paragraph}
              </p>
            ))}
          </div>
        </Container>
      </Section>

      {/* Highlights */}
      <Section id="highlights">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Highlights
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            Outcome-focused work across design systems, performance, and product.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {highlights.map((h, i) => (
              <HighlightCard key={i} highlight={h} index={i} />
            ))}
          </div>
        </Container>
      </Section>

      {/* Signature themes */}
      <Section id="themes">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Signature themes
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            Pillars that guide how I build and collaborate.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {themes.map((theme) => {
              const Icon = themeIcons[theme.icon] ?? Briefcase;
              return (
                <Card
                  key={theme.title}
                  className="border-studio-border bg-neutral-100 transition-all hover:border-studio-muted/40 hover:shadow-md"
                >
                  <CardContent className="p-4">
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent-muted text-accent-light">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="mt-3 font-heading text-lg font-medium text-studio-fg md:text-xl">
                      {theme.title}
                    </h3>
                    <p className="mt-1 text-sm text-studio-muted">{theme.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* Featured projects */}
      <Section id="projects">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Featured projects
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            A selection of recent work. See the full library on the Projects page.
          </p>
          <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((p, i) => (
              <ProjectCard key={p.slug} project={p} index={i} />
            ))}
          </div>
          <div className="mt-6 text-center">
            <Button asChild variant="secondary">
              <Link href="/projects">View all projects</Link>
            </Button>
          </div>
        </Container>
      </Section>

      {/* Experience */}
      <Section id="experience">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Experience
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            6+ years of experience leading solution design, presales engagements, and operational diagnostics.
            Changing ambiguous business challenges into structured, data-backed transformation roadmaps.
          </p>
          <div className="mt-6">
            <ExperienceSection experience={experience} />
          </div>
        </Container>
      </Section>

      {/* Skills */}
      <Section id="skills">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Skills
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            Core tech, tools, and ways of working.
          </p>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <Card className="border-2 border-studio-border bg-neutral-100 shadow-md">
              <CardContent className="p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-studio-muted">
                  Core
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.core.map((s) => (
                    <Badge key={s} className="border-studio-border bg-white text-studio-fg">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-studio-border bg-neutral-100 shadow-md">
              <CardContent className="p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-studio-muted">
                  Tools
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.tools.map((s) => (
                    <Badge key={s} className="border-studio-border bg-white text-studio-fg">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
            <Card className="border-2 border-studio-border bg-neutral-100 shadow-md">
              <CardContent className="p-4">
                <p className="mb-3 text-xs font-medium uppercase tracking-wider text-studio-muted">
                  Leadership
                </p>
                <div className="flex flex-wrap gap-2">
                  {skills.leadership.map((s) => (
                    <Badge key={s} className="border-studio-border bg-white text-studio-fg">
                      {s}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </Section>

      {/* Testimonials */}
      <Section id="testimonials">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Testimonials
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            What colleagues and partners say.
          </p>
          <TestimonialsSection testimonials={testimonials} />
        </Container>
      </Section>

      {/* Authored section */}
      <Section id="blogs">
        <Container>
          <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
            Authored section
          </h2>
          <p className="mt-2 max-w-2xl font-body text-sm font-medium text-studio-muted">
            Papers and whitepapers on logistics, data, and supply chain.
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {blogsAuthored.map((post) => (
              <a
                key={post.id}
                href={post.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <Card className="h-full border-2 border-studio-border bg-neutral-100 transition-all hover:border-accent/30 hover:shadow-md">
                  <CardContent className="p-4">
                    <div className="flex items-start justify-between gap-2">
                      <h3 className="font-heading text-lg font-medium text-studio-fg group-hover:text-accent transition-colors md:text-xl">
                        {post.title}
                      </h3>
                      <ExternalLink className="h-4 w-4 shrink-0 text-studio-muted group-hover:text-accent transition-colors" aria-hidden />
                    </div>
                    <p className="mt-2 font-body text-sm leading-relaxed text-studio-muted">
                      {post.brief}
                    </p>
                    <div className="mt-4 flex flex-wrap items-center gap-2">
                      {post.type && (
                        <Badge variant="secondary" className="text-xs">
                          {post.type}
                        </Badge>
                      )}
                      {post.tags?.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </a>
            ))}
          </div>
        </Container>
      </Section>

      <ContactSection />
    </>
  );
}
