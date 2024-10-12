import type { Metadata } from "next";
import "./globals.css";
import Header from "@/containers/Header";
import Footer from "@/containers/Footer";

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
  title: "ADHL",
  description: "Professional Portfolio of Adrian Han Lim Oah",
};

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
      <body className="font-cairo text-text-50 bg-primary-950">
        <Header />
        <main className="p-8 lg:p-6">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
