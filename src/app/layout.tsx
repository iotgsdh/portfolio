import type { Metadata } from "next";
import { Geist, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { SITE } from "@/constants/site";
import LoadingScreen from "@/components/loading-screen";

const geist = Geist({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-geist",
});

const spaceGrotesk = Space_Grotesk({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

export const metadata: Metadata = {
  title: SITE.title,
  description:
    "Frontend Developer Yuri Toriyama's portfolio showcasing experience in WordPress website production, web application development, and modern frontend technologies including React, TypeScript, and Next.js.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ja"
      className={`${geist.variable} ${spaceGrotesk.variable} antialiased`}
    >
      <body className="flex min-h-dvh flex-col text-sm md:text-base">
        <LoadingScreen>
          <Header />
          {children}
          <Footer />
        </LoadingScreen>
      </body>
    </html>
  );
}
