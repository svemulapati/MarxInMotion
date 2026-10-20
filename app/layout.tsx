import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import { AUTHOR } from "@/lib/site";
import "./globals.css";

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Marx in Motion",
  description:
    "Das Kapital, all four volumes, explained chapter by chapter with animations simple enough for a kid to follow.",
  authors: [{ name: AUTHOR }],
  creator: AUTHOR,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${interTight.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">{children}</body>
    </html>
  );
}
