import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "Miguel Cantu — Consultor en Transformacion Digital",
    template: "%s | Miguel Cantu",
  },
  description:
    "Consultoria estrategica en transformacion digital para empresas que quieren crecer con claridad.",
  metadataBase: new URL("https://www.miguelcantu.mba"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Miguel Cantu",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
