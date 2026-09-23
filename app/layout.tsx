import type { Metadata } from "next";
import { DM_Mono, Manrope } from "next/font/google";
import { ThemeProvider } from "@/components/theme/ThemeProvider";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-sans" });
const dmMono = DM_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL("https://karl.dev"),
  title: { default: "Karl — IT Student & Developer", template: "%s — Karl" },
  description: "Karl is an IT student and developer building thoughtful web applications, systems, and digital experiences.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth" className={`${manrope.variable} ${dmMono.variable}`}>
    <head><script dangerouslySetInnerHTML={{ __html: `(function(){try{var t=localStorage.getItem('theme')||'system';var d=t==='dark'||(t==='system'&&matchMedia('(prefers-color-scheme: dark)').matches);document.documentElement.classList.add(d?'dark':'light');document.documentElement.style.colorScheme=d?'dark':'light'}catch(e){}})();` }} /></head>
    <body className="font-[family-name:var(--font-sans)] antialiased"><ThemeProvider><ThemeToggle />{children}</ThemeProvider></body>
  </html>;
}
