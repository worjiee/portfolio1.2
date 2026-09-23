import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://karl.dev"),
  title: { default: "Karl — IT Student & Developer", template: "%s — Karl" },
  description: "Karl is an IT student and developer building thoughtful web applications, systems, and digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" data-scroll-behavior="smooth" className={`${manrope.variable} ${dmMono.variable}`}><body className="font-[family-name:var(--font-sans)] antialiased">{children}</body></html>;
}
