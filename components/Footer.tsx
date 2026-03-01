import { Container } from "@/components/layout/Container";
import { Badge } from "@/components/ui/badge";
import { contactConfig } from "@/data/profile";

export function Footer() {
  return (
    <footer className="border-t border-studio-border">
      <div className="w-full bg-neutral-200 py-6">
        <Container>
          <div className="flex flex-col items-center justify-center text-center">
            <h3 className="font-heading text-lg font-medium text-studio-fg md:text-xl">
              Open to
            </h3>
            {contactConfig.openToChips && contactConfig.openToChips.length > 0 && (
              <div className="mt-3 flex flex-wrap justify-center gap-2">
                {contactConfig.openToChips.map((chip) => (
                  <Badge
                    key={chip}
                    variant="outline"
                    className="border-studio-border bg-white/80 text-studio-fg font-normal"
                  >
                    {chip}
                  </Badge>
                ))}
              </div>
            )}
            {contactConfig.responseTimeText && (
              <p className="mt-3 text-xs text-studio-muted">
                {contactConfig.responseTimeText}
              </p>
            )}
          </div>
        </Container>
      </div>
    </footer>
  );
}
