import type { Metadata } from "next";
import Nav from "@/components/Nav";
import "./globals.css";

const socialImageVersion = "20260401-wordmark";
const socialImageAlt =
  "Anti Fund social share image with the Anti Fund word mark and thesis line.";

export const metadata: Metadata = {
  title: "Anti Fund",
  description:
    "The future is forged at the intersection of tech and culture. Capital is commodity. Attention is not.",
  metadataBase: new URL("https://antifund.com"),
  openGraph: {
    title: "Anti Fund",
    description:
      "The future is forged at the intersection of tech and culture. Capital is commodity. Attention is not.",
    url: "https://antifund.com",
    siteName: "Anti Fund",
    type: "website",
    images: [
      {
        url: `/opengraph-image?v=${socialImageVersion}`,
        width: 1200,
        height: 630,
        alt: socialImageAlt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti Fund",
    description:
      "The future is forged at the intersection of tech and culture. Capital is commodity. Attention is not.",
    images: [`/twitter-image?v=${socialImageVersion}`],
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
