import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "BPI · Body Proportion Index",
  description:
    "An exploratory visible-body proportion observation framework. Public measurement language layer.",
  keywords: ["BPI", "body proportion", "proportion index", "measurement language", "BG-10"],
  openGraph: {
    title: "BPI · Body Proportion Index",
    description: "An exploratory visible-body proportion observation framework.",
    type: "website",
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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300&family=Syne:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}
