import type { Metadata } from "next";
import { Righteous, Space_Mono } from "next/font/google";
import "./globals.css";
import ClientWrapper from "@/components/ClientWrapper";

// Custom Google Font Pairings for Synthwave Aesthetics
const righteous = Righteous({
  weight: "400",
  variable: "--font-righteous",
  subsets: ["latin"],
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  variable: "--font-space-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tannistha Chattapadhyay",
  description: "A premium retro-futuristic synthwave portfolio built using Next.js, React Three Fiber, Framer Motion, and Web Audio synthesizers.",
  keywords: ["Tannistha", "Portfolio", "Computer Science Engineer", "Machine Learning", "Next.js", "Three.js", "Creative Developer"],
  authors: [{ name: "Tannistha" }],
  viewport: "width=device-width, initial-scale=1.0",
  openGraph: {
    title: "Tannistha | Creative Developer & ML Engineer",
    description: "A premium retro-futuristic synthwave portfolio built using Next.js, React Three Fiber, Framer Motion, and Web Audio synthesizers.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${righteous.variable} ${spaceMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-[#0b090f] text-[#fdfaf2] selection:bg-[#ff007f] selection:text-white">
        <ClientWrapper>{children}</ClientWrapper>
      </body>
    </html>
  );
}
