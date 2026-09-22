import type { Metadata } from "next";
import { Space_Grotesk, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnimatedBackground from "@/components/layout/AnimatedBackground";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://thiagoforneli.com"; // [EDITAR: domínio real após deploy]

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Thiago Forneli Silveira — UX/UI Designer",
  description:
    "Portfólio de Thiago Forneli Silveira, UX/UI Designer com experiência em sistemas Web, Mobile, ERP, usabilidade e produtos digitais.",
  keywords: ["UX Designer", "UI Designer", "Product Designer", "Portfólio", "Thiago Forneli Silveira"],
  openGraph: {
    title: "Thiago Forneli Silveira — UX/UI Designer",
    description:
      "Portfólio de Thiago Forneli Silveira, UX/UI Designer com experiência em sistemas Web, Mobile, ERP, usabilidade e produtos digitais.",
    url: siteUrl,
    siteName: "Thiago Forneli Silveira",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Thiago Forneli Silveira — UX/UI Designer",
    description: "Portfólio de Thiago Forneli Silveira, UX/UI Designer.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${spaceGrotesk.variable} ${inter.variable}`}>
      <body className="bg-bg text-text-primary font-body antialiased relative overflow-x-hidden">
        <AnimatedBackground />
        <Navbar />
        <main id="conteudo-principal">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
