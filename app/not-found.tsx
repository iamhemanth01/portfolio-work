import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center gap-6 px-4">
      <h1 className="font-heading text-2xl font-semibold text-studio-fg">
        404 — Page not found
      </h1>
      <p className="font-body text-center text-studio-muted">
        The page you’re looking for doesn’t exist or has been moved.
      </p>
      <Button asChild variant="default">
        <Link href="/">Back to home</Link>
      </Button>
    </div>
  );
}
