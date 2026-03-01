import Link from "next/link";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/layout/Container";
import { resumeConfig } from "@/data/profile";

export const metadata = {
  title: "Resume",
  description: "Download my resume (PDF).",
};

export default function ResumePage() {
  return (
    <div className="min-h-screen py-16">
      <Container className="max-w-2xl text-center">
        <h1 className="font-heading text-4xl font-semibold tracking-tight text-studio-fg md:text-5xl lg:text-6xl">
          Resume
        </h1>
        <p className="mt-3 font-body text-base leading-relaxed text-studio-muted">
          Last updated {resumeConfig.lastUpdated}. Download the PDF below.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" asChild className="gap-2">
            <a href={resumeConfig.downloadUrl} download>
              <Download className="h-5 w-5" />
              {resumeConfig.label}
            </a>
          </Button>
          <Button variant="secondary" size="lg" asChild className="gap-2">
            <Link href="/#contact">Contact me</Link>
          </Button>
        </div>

        <div className="mt-12">
          <Button variant="ghost" asChild>
            <Link href="/">Back to home</Link>
          </Button>
        </div>
      </Container>
    </div>
  );
}
