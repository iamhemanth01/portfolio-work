import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { ScrollToTop } from "@/components/ScrollToTop";
import { GradientBackground } from "@/components/layout/GradientBackground";
import { person } from "@/data/profile";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"),
  title: {
    default: `${person.name} — ${person.headline.slice(0, 50)}...`,
    template: `%s | ${person.name}`,
  },
  description: person.headline,
  openGraph: {
    title: person.name,
    description: person.headline,
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: person.name,
    description: person.headline,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-body noise-overlay min-h-screen flex flex-col`} style={{ backgroundColor: '#FFFFFF', color: '#0A0A0A' }}>
        <GradientBackground />
        <div className="relative z-10 flex min-h-screen flex-col bg-white">
          <Nav />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
