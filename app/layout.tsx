import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anti Fund",
  description:
    "Capital is abundant. Attention is scarce. Anti Fund backs founders with technical depth and cultural gravity.",
  metadataBase: new URL("https://antifund.com"),
  openGraph: {
    title: "Anti Fund",
    description:
      "Capital is abundant. Attention is scarce. Anti Fund backs founders with technical depth and cultural gravity.",
    url: "https://antifund.com",
    siteName: "Anti Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti Fund",
    description:
      "Capital is abundant. Attention is scarce. Anti Fund backs founders with technical depth and cultural gravity.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600&family=Source+Serif+4:opsz,wght@8..60,400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">
        <Nav />
        {children}
      </body>
    </html>
  );
}
