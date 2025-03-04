import type { Metadata } from "next";
import "./globals.css";
import Header from "@/src/components/Header";
import Footer from "@/src/components/Footer";

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
  metadataBase: new URL('https://adhl-0216.vercel.app'),
  title: "Adrian Han-Lim Oah",
  description: "Explore my professional portfolio showcasing skills, projects, and experiences in Software Engineering, Cybersecurity, and DevOps.",
  keywords: "Adrian Han-Lim Oah, ADHL, software development, cybersecurity, full-stack developer, software engineer, devops",
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    title: "Adrian Han-Lim Oah",
    description: "Discover my professional portfolio. Explore projects, experiences, and skills in software development and cybersecurity.",
    url: "https://adhl-0216.vercel.app",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Adrian Han-Lim Oah",
      },
    ],
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://adhl-0216.vercel.app",
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
      <head>
        <meta name="google-site-verification" content="FUElpGDLbqiMTTr0PtMIRXF2DJ-sTYijuuWqPlDBZTk" />
      </head>
      <body className="flex flex-col font-cairo text-text-50 bg-primary-950">
        <header>
          <Header />
        </header>
        <main className="md:px-0 pb-36 md:gap-56 ">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
