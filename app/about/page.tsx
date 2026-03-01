import { Container } from "@/components/layout/Container";
import { aboutContent } from "@/data/profile";

export const metadata = {
  title: "About",
  description: "Industrial Engineering & Management graduate with 6+ years in supply chain, pre-sales, and solution consulting.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen py-16">
      <Container className="max-w-3xl">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-studio-fg md:text-5xl lg:text-6xl">
          {aboutContent.title}
        </h1>
        <p className="mt-3 font-body text-base leading-relaxed text-studio-muted">
          {aboutContent.subtitle}
        </p>

        <div className="mt-16 space-y-12">
          {aboutContent.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
                {section.title}
              </h2>
              <p className="mt-3 font-body text-base leading-relaxed text-studio-muted">
                {section.content}
              </p>
            </section>
          ))}
        </div>
      </Container>
    </div>
  );
}
