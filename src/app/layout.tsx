import type { Metadata } from "next";
import { Geist, Geist_Mono, Dancing_Script } from "next/font/google"; // 1. Added Dancing_Script
import Navbar from "@/components/Navbar";
import "./globals.css";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// 2. Setup the Signature Font
const dancingScript = Dancing_Script({
  variable: "--font-signature",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Studio Diary | Vaishnavi", // 3. Updated title for your brand
  description: "The digital sketchbook of a Design Engineer.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} antialiased bg-[#09090b] text-white`}
      >
        <CustomCursor />
        <Navbar />
        {children}
      </body>
    </html>
  );
}