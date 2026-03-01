import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { notes } from "@/data/profile";
import { formatDate } from "@/lib/utils";

interface NotePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return notes.map((n) => ({ slug: n.slug }));
}

export async function generateMetadata({ params }: NotePageProps) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) return { title: "Note not found" };
  return {
    title: note.title,
    description: note.excerpt,
  };
}

export default async function NoteDetailPage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = notes.find((n) => n.slug === slug);
  if (!note) notFound();

  return (
    <div className="min-h-screen py-16">
      <Container className="max-w-3xl">
        <Button variant="ghost" size="sm" asChild className="mb-10">
          <Link href="/notes" className="gap-2">
            <ArrowLeft className="h-4 w-4" />
            Notes
          </Link>
        </Button>

        <article>
          <header className="mb-12">
            <h1 className="font-heading text-4xl font-semibold tracking-tight text-studio-fg md:text-5xl lg:text-6xl">
              {note.title}
            </h1>
            <div className="mt-4 flex items-center gap-3 text-sm text-studio-muted">
              <time dateTime={note.date}>{formatDate(note.date)}</time>
              {note.readTime && (
                <>
                  <span>·</span>
                  <span>{note.readTime} read</span>
                </>
              )}
            </div>
          </header>

          <div className="max-w-none font-body text-base leading-relaxed text-studio-muted">
            <p>{note.excerpt}</p>
            <p className="mt-6">
              This is a placeholder. Add your full note content here (e.g. from
              MDX or CMS).
            </p>
          </div>
        </article>
      </Container>
    </div>
  );
}
