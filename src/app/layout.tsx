import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/containers/Header";
import Footer from "@/src/containers/Footer";

import { MuseoModerno, Cairo } from 'next/font/google';

const museoModerno = MuseoModerno({
  subsets: ['latin'],
  variable: '--font-museoModerno'
});

const cairo = Cairo({
  subsets: ['latin'],
  variable: '--font-cairo'
});

export const metadata: Metadata = {
  title: "ADHL - Portfolio",
  description: "Explore my professional portfolio showcasing skills, projects, and experiences in Software Development, Cybersecurity, and DevOps.",
  keywords: "Adrian Han-Lim Oah, ADHL, portfolio, software development, cybersecurity, full-stack developer, projects, experience, devops",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "ADHL - Portfolio",
    description: "Discover my professional portfolio. Explore projects, experiences, and skills in software development and cybersecurity.",
    url: "https://adhl-dev.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adrian Han-Lim Oah Portfolio",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adhl-dev.vercel.app",
  }
};

export const viewport = "width=device-width, initial-scale=1.0"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${museoModerno.variable} ${cairo.variable} scroll-smooth`}
    >
      <body className="flex flex-col font-cairo text-text-50 bg-primary-950">
        <header>
          <Header />
        </header>
        <main className="px-12 lg:px-32">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
