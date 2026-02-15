import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  metadataBase: new URL("https://nurulfaradila.github.io"),
  title: {
    default: "Nurul Faradila - Software Engineer in Test",
    template: "%s | Nurul Faradila",
  },
  description:
    "Software Engineer in Test specializing in Python, JavaScript, and TypeScript. Building reliable, scalable systems with a focus on quality assurance and backend excellence.",
  keywords: [
    "Frontend Engineer",
    "React Developer",
    "Next.js",
    "TypeScript",
    "Web Development",
    "JavaScript",
    "Software Engineer",
  ],
  authors: [{ name: "Nurul Faradila" }],
  creator: "Nurul Faradila",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://nurulfaradila.github.io",
    title: "Nurul Faradila - Software Engineer in Test",
    description:
      "Software Engineer in Test specializing in Python, JavaScript, and TypeScript. Building reliable, scalable systems with a focus on quality assurance and backend excellence.",
    siteName: "Nurul Faradila Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Nurul Faradila - Software Engineer in Test",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nurul Faradila - Software Engineer in Test",
    description:
      "Software Engineer in Test specializing in Python, JavaScript, and TypeScript. Building reliable, scalable systems with a focus on quality assurance and backend excellence.",
    creator: "@nurulfaradila",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
