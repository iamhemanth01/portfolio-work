"use client";

import { useState } from "react";
import Image from "next/image";
import { Copy, Check, Mail, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Container } from "@/components/layout/Container";
import { contactConfig } from "@/data/profile";
import { cn } from "@/lib/utils";

function getQuickLinks() {
  return [
    {
      label: "LinkedIn",
      href: contactConfig.linkedinUrl,
      iconSrc: "/icons/linkedin.png",
      primary: "",
      subtext: "For quick introductions and professional conversations",
      external: true,
    },
    {
      label: "Phone",
      iconSrc: "/icons/phone.png",
      primary: "Speak directly",
      subtext: "For urgent or time-sensitive discussions",
      isPhone: true,
    },
    {
      label: "Topmate",
      href: contactConfig.topmateUrl,
      iconSrc: "/icons/topmate.png",
      primary: "Schedule advisory time",
      subtext: "Deep-dive on strategy, modelling, and transformation",
      external: true,
    },
  ];
}

export function ContactSection() {
  const [copied, setCopied] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.phoneNumber.replace(/\s/g, ""));
      setCopiedPhone(true);
      setTimeout(() => setCopiedPhone(false), 1500);
    } catch {
      // fallback: try with spaces
      try {
        await navigator.clipboard.writeText(contactConfig.phoneNumber);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 1500);
      } catch {}
    }
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactConfig.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      window.location.href = `mailto:${contactConfig.email}`;
    }
  };

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, message } = formState;
    if (!name.trim() || !email.trim() || !message.trim()) {
      setSubmitStatus("error");
      return;
    }
    if (!validateEmail(email)) {
      setSubmitStatus("error");
      return;
    }
    const subject = encodeURIComponent(`Contact from ${name.trim()}`);
    const body = encodeURIComponent(
      `${message.trim()}\n\n— ${name.trim()} (${email.trim()})`
    );
    window.location.href = `mailto:${contactConfig.email}?subject=${subject}&body=${body}`;
    setFormState({ name: "", email: "", message: "" });
    setSubmitStatus("success");
  };

  return (
    <section id="contact" className="scroll-mt-20 py-5 md:py-8">
      <Container>
        <h2 className="font-heading text-2xl font-semibold tracking-tight text-studio-fg md:text-3xl">
          Get in touch
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-studio-muted">
          Reach out for consulting, presales discussions, or supply chain optimization conversations.
        </p>

        <div className="mt-6 grid gap-8 lg:grid-cols-2">
          {/* Left: Email card + Quick links */}
          <div className="space-y-6">
            <Card className="border-2 border-studio-border bg-neutral-100 shadow-md">
              <CardContent className="p-4">
                <p className="text-xs font-medium uppercase tracking-wider text-studio-muted">
                  Email
                </p>
                <p className="mt-1 font-body text-studio-fg">{contactConfig.email}</p>
                {contactConfig.emailHelperText && (
                  <p className="mt-1 text-xs text-studio-muted">
                    {contactConfig.emailHelperText}
                  </p>
                )}
                <div className="mt-4 flex flex-wrap gap-2">
                  <Button size="sm" asChild className="gap-2">
                    <a href={`mailto:${contactConfig.email}`}>
                      <Mail className="h-4 w-4" />
                      Email me
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyEmail}
                    className="gap-2"
                    aria-label={copied ? "Copied" : "Copy email"}
                  >
                    {copied ? (
                      <>
                        <Check className="h-4 w-4" />
                        Copied
                      </>
                    ) : (
                      <>
                        <Copy className="h-4 w-4" />
                        Copy email
                      </>
                    )}
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-studio-muted">
                Quick links
              </p>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                {getQuickLinks().map((link) =>
                  "isPhone" in link && link.isPhone ? (
                    <div
                      key={link.label}
                      className={cn(
                        "flex min-w-0 flex-col rounded-xl border-2 border-studio-border bg-neutral-100 px-3 py-2.5 shadow-sm min-h-[180px] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-neutral-200/80",
                        "focus-within:ring-2 focus-within:ring-accent focus-within:ring-offset-2 focus-within:outline-none"
                      )}
                    >
                      <span className="flex items-center justify-between gap-1.5">
                        <span className="relative h-8 w-8 shrink-0">
                          <Image
                            src={link.iconSrc}
                            alt=""
                            width={32}
                            height={32}
                            className="object-contain"
                            aria-hidden
                          />
                        </span>
                        <button
                          type="button"
                          onClick={handleCopyPhone}
                          className="rounded-lg p-1.5 text-studio-muted transition-colors hover:bg-studio-border/50 hover:text-studio-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                          aria-label={copiedPhone ? "Copied" : "Copy phone number"}
                        >
                          {copiedPhone ? (
                            <Check className="h-4 w-4" aria-hidden />
                          ) : (
                            <Copy className="h-4 w-4" aria-hidden />
                          )}
                        </button>
                      </span>
                      <span className="mt-1.5 font-heading text-sm font-semibold text-studio-fg">
                        {link.label}
                      </span>
                      {contactConfig.phoneNumber && (
                        <span className="mt-0.5 font-body text-sm font-medium text-studio-fg">
                          {contactConfig.phoneNumber}
                        </span>
                      )}
                      <span className="mt-1 font-body text-sm font-medium text-studio-fg">
                        {link.primary}
                      </span>
                      <span className="mt-0.5 font-body text-xs text-studio-muted">
                        {link.subtext}
                      </span>
                    </div>
                  ) : (
                    <a
                      key={link.label}
                      href={link.href}
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      className={cn(
                        "flex min-w-0 flex-col rounded-xl border-2 border-studio-border bg-neutral-100 px-3 py-2.5 shadow-sm min-h-[180px] transition-all duration-200 hover:-translate-y-0.5 hover:border-accent/30 hover:bg-neutral-200/80",
                        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                      )}
                      aria-label={link.label}
                    >
                      <span className="flex items-center gap-1.5">
                        <span className="relative h-8 w-8 shrink-0">
                          <Image
                            src={link.iconSrc}
                            alt=""
                            width={32}
                            height={32}
                            className="object-contain"
                            aria-hidden
                          />
                        </span>
                        {link.external && (
                          <ExternalLink className="h-3.5 w-3.5 text-studio-muted shrink-0" aria-hidden />
                        )}
                      </span>
                      <span className="mt-1.5 font-heading text-sm font-semibold text-studio-fg">
                        {link.label}
                      </span>
                      {link.primary ? (
                        <span className="mt-1 font-body text-sm font-medium text-studio-fg">
                          {link.primary}
                        </span>
                      ) : null}
                      <span className="mt-0.5 font-body text-xs text-studio-muted">
                        {link.subtext}
                      </span>
                    </a>
                  )
                )}
              </div>
            </div>
          </div>

          {/* Right: Form */}
          <Card className="border-2 border-studio-border bg-neutral-100 shadow-md">
            <CardContent className="p-4">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="contact-name" className="mb-1.5 block text-sm font-medium text-studio-fg">
                    Name
                  </label>
                  <Input
                    id="contact-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formState.name}
                    onChange={(e) => {
                      setFormState((s) => ({ ...s, name: e.target.value }));
                      setSubmitStatus("idle");
                    }}
                    className="bg-white"
                    autoComplete="name"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-1.5 block text-sm font-medium text-studio-fg">
                    Email
                  </label>
                  <Input
                    id="contact-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formState.email}
                    onChange={(e) => {
                      setFormState((s) => ({ ...s, email: e.target.value }));
                      setSubmitStatus("idle");
                    }}
                    className="bg-white"
                    autoComplete="email"
                    aria-required="true"
                  />
                </div>
                <div>
                  <label htmlFor="contact-message" className="mb-1.5 block text-sm font-medium text-studio-fg">
                    Message
                  </label>
                  <Textarea
                    id="contact-message"
                    required
                    placeholder="Your message..."
                    value={formState.message}
                    onChange={(e) => {
                      setFormState((s) => ({ ...s, message: e.target.value }));
                      setSubmitStatus("idle");
                    }}
                    className="min-h-[120px] bg-white resize-none"
                    rows={4}
                    aria-required="true"
                  />
                </div>
                <p className="text-xs text-studio-muted">
                  Or email directly for the fastest response.
                </p>
                {submitStatus === "success" && (
                  <p className="text-sm font-medium text-green-600" role="status">
                    Draft email opened
                  </p>
                )}
                {submitStatus === "error" && (
                  <p className="text-sm font-medium text-red-600" role="alert">
                    Please fill all fields and use a valid email.
                  </p>
                )}
                <Button type="submit" className="w-full sm:w-auto">
                  Send
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </Container>
    </section>
  );
}
