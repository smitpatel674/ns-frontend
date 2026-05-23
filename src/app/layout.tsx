import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextron Solution - Web Development & Digital Marketing",
  description: "Nextron Solution offers expert web development, digital marketing, SEO, UI/UX design, and AI/ML development services in Gujarat, India. Next Digital Success.",
  icons: {
    icon: [
      { url: "/favicon.ico?v=1", sizes: "any" },
      { url: "/icon.png?v=1", sizes: "32x32" },
      { url: "/icon.png?v=1", sizes: "192x192" },
      { url: "/icon.png?v=1", sizes: "512x512" },
    ],
    apple: "/icon.png?v=1",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700;1,900&family=DM+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&family=Inter+Tight:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
