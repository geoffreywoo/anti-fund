import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Anti Fund",
  description:
    "Technology creates value. Culture creates demand. We back founders who command both.",
  openGraph: {
    title: "Anti Fund",
    description:
      "Technology creates value. Culture creates demand. We back founders who command both.",
    url: "https://antifund.com",
    siteName: "Anti Fund",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anti Fund",
    description:
      "Technology creates value. Culture creates demand. We back founders who command both.",
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
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen">{children}</body>
    </html>
  );
}
