import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "DVLOP Technologies — Web Development Company in Gujarat",
  description: "Leading web development company in Gujarat, delivering innovative digital solutions. Custom web development, e-commerce platforms, and AI-powered software.",
  icons: {
    icon: [
      { url: "/seo/favicon.ico", type: "image/x-icon" },
      { url: "/seo/favicon.svg", type: "image/svg+xml" },
    ],
    apple: "/seo/apple-touch-icon.png",
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
      <body className="min-h-full flex flex-col bg-[var(--bg-color)] text-[var(--text-color)] font-[&apos;General Sans&apos;,sans-serif]">{children}</body>
    </html>
  );
}
