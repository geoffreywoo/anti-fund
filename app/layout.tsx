import type { Metadata } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans, Source_Serif_4 } from "next/font/google";
import Nav from "@/components/Nav";
import "./globals.css";

const sourceSerif = Source_Serif_4({
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
  display: "swap",
  variable: "--font-source-serif",
});

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-mono",
});

const plexSans = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-plex-sans",
});

export const metadata: Metadata = {
  title: "Anti Fund",
  applicationName: "Anti Fund",
  description:
    "Anti Fund backs technical founders from pre-seed through growth across AI, robotics, defense, energy, and frontier infrastructure.",
  metadataBase: new URL("https://antifund.com"),
  openGraph: {
    title: "Anti Fund",
    description:
      "Anti Fund backs technical founders from pre-seed through growth across AI, robotics, defense, energy, and frontier infrastructure.",
    url: "https://antifund.com",
    siteName: "Anti Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti Fund",
    description:
      "Anti Fund backs technical founders from pre-seed through growth across AI, robotics, defense, energy, and frontier infrastructure.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${sourceSerif.variable} ${plexMono.variable} ${plexSans.variable}`}>
      <body className="min-h-screen">
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <Nav />
        {children}
      </body>
    </html>
  );
}
