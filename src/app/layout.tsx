import { Analytics } from '@vercel/analytics/react';
import type { Metadata } from "next";
import { Inter, Calistoga } from 'next/font/google';
import { twMerge } from "tailwind-merge";
import  Navbar from "../components/Navbar"
import "./globals.css";
import Footer from "@/components/Footer";


const inter = Inter({subsets: ['latin'], variable: "--font-sans"});
const calistoga = Calistoga({subsets: ['latin'], variable: "--font-serif", weight: ['400']});


export const metadata: Metadata = {
  title: {
    default: "Cafe & Kebab House",
    template: "%s - Cafe & Kebab House",
  },
  description: "Cafe & Kebab House I Høje Taastrup, altid frisk og god mad",
  twitter: {
    card: "summary_large_image"
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={twMerge(inter.variable, calistoga.variable,"bg-gray-900 text-white antialiased font-sans")}>
        <Navbar />
        {children}
        <Analytics />
        <Footer />
      </body>
    </html>
  );
}
