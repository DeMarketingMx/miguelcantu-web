import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Gracias por tu mensaje",
  description: "Tu mensaje ha sido enviado correctamente. Te respondere pronto.",
  robots: { index: false, follow: false },
};

export default function Gracias() {
  return (
    <section className="flex min-h-[70vh] items-center justify-center px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10">
          <CheckCircle className="h-8 w-8 text-accent" />
        </div>

        <h1 className="mb-4">Gracias por tu mensaje</h1>

        <p className="mb-8 text-text-muted">
          Tu mensaje ha sido enviado correctamente. Revisare tu solicitud y te
          respondere en las proximas 24-48 horas.
        </p>

        <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="/"
            className="btn-primary inline-flex items-center gap-2 rounded-md px-6 py-3 text-sm font-semibold text-white no-underline transition-colors"
          >
            Volver al inicio
          </Link>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-md border-2 border-primary px-6 py-3 text-sm font-semibold text-primary no-underline transition-colors hover:bg-primary hover:text-white"
          >
            Leer el blog
          </Link>
        </div>
      </div>
    </section>
  );
}
