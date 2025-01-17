import type { Metadata } from "next";
import {inter } from '@/app/font'
import "./globals.css";
import Navbar from "@/components/ui/Navbar";


export const metadata: Metadata = {
  title: 'My SEO Portfolio - Digital Marketing & SEO Expertise',
  description: 'Explore my SEO portfolio showcasing my skills in keyword research, on-page optimization, and digital marketing strategies to improve online visibility and drive organic traffic.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
