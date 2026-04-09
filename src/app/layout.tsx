import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const GTM_ID = "GTM-TFTVN7B";

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
    default:
      "Miguel Cantu — Consultor en Marketing Digital, Transformacion Digital e Inteligencia Artificial",
    template: "%s | Miguel Cantu",
  },
  description:
    "Miguel Cantu es consultor en marketing digital, transformacion digital, estrategia digital e inteligencia artificial. Ayuda a empresas a crecer con claridad y datos.",
  keywords: [
    "Miguel Cantu",
    "consultor marketing digital",
    "consultor transformacion digital",
    "consultor estrategia digital",
    "consultor inteligencia artificial",
    "consultoria digital Monterrey",
    "transformacion digital Mexico",
  ],
  metadataBase: new URL("https://www.miguelcantu.mba"),
  openGraph: {
    type: "website",
    locale: "es_MX",
    siteName: "Miguel Cantu",
    title: "Miguel Cantu — Consultor en Marketing Digital y Transformacion Digital",
    description:
      "Consultoria estrategica en marketing digital, transformacion digital e inteligencia artificial para empresas que quieren crecer con claridad.",
    images: [{ url: "/miguel-hero.png", width: 1200, height: 630, alt: "Miguel Cantu - Consultor Digital" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Miguel Cantu — Consultor en Marketing Digital y Transformacion Digital",
    description: "Consultoria estrategica en marketing digital, transformacion digital e IA.",
    images: ["/miguel-hero.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`,
          }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  "@id": "https://www.miguelcantu.mba/#website",
                  url: "https://www.miguelcantu.mba",
                  name: "Miguel Cantu",
                  description: "Consultoria estrategica en marketing digital, transformacion digital e inteligencia artificial.",
                  inLanguage: "es-MX",
                },
                {
                  "@type": "Person",
                  "@id": "https://www.miguelcantu.mba/#person",
                  name: "Miguel Cantu",
                  url: "https://www.miguelcantu.mba",
                  image: "https://www.miguelcantu.mba/miguel-hero.png",
                  jobTitle: "Consultor en Transformacion Digital e Inteligencia Artificial",
                  worksFor: { "@type": "Organization", name: "De Marketing" },
                  alumniOf: [
                    { "@type": "CollegeOrUniversity", name: "IEBS Business School" },
                    { "@type": "CollegeOrUniversity", name: "EGADE Business School" },
                    { "@type": "CollegeOrUniversity", name: "Boston University" },
                  ],
                  knowsAbout: ["Marketing Digital", "Transformacion Digital", "Inteligencia Artificial", "Estrategia Digital", "Analitica de Datos"],
                  sameAs: [],
                },
              ],
            }),
          }}
        />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
