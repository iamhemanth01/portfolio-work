import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { Card, CardContent } from "@/components/ui/card";
import { notes } from "@/data/profile";
import { formatDate } from "@/lib/utils";

export const metadata = {
  title: "Notes",
  description: "Writing on design systems, frontend, and shipping product.",
};

export default function NotesPage() {
  return (
    <div className="min-h-screen py-16">
      <Container>
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-studio-fg md:text-5xl lg:text-6xl">
          Notes
        </h1>
        <p className="mt-3 max-w-2xl font-body text-sm font-medium text-studio-muted">
          Occasional writing on design systems, frontend, and shipping product.
        </p>

        <div className="mt-12 space-y-6">
          {notes.map((note) => (
            <Link key={note.slug} href={`/notes/${note.slug}`}>
              <Card className="border-studio-border bg-white transition-all hover:border-accent/30 hover:shadow-md">
                <CardContent className="p-6">
                  <h2 className="font-heading text-lg font-medium text-studio-fg hover:text-accent-light transition-colors md:text-xl">
                    {note.title}
                  </h2>
                  <p className="mt-2 text-sm text-studio-muted line-clamp-2">
                    {note.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-3 text-xs text-studio-muted">
                    <time dateTime={note.date}>{formatDate(note.date)}</time>
                    {note.readTime && (
                      <>
                        <span>·</span>
                        <span>{note.readTime} read</span>
                      </>
                    )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </Container>
    </div>
  );
}
