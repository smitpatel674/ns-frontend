import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Nextron Solution — Web Development & Digital Marketing",
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
    <html lang="en" className="h-full antialiased">
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap" />
        <link rel="stylesheet" href="https://api.fontshare.com/v2/css?f[]=author@200,300,400,500&display=swap" />
      </head>
      <body className="min-h-full flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] font-['General Sans',sans-serif]">{children}</body>
    </html>
  );
}
