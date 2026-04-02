import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre mi",
  description:
    "Conoce la trayectoria de Miguel Cantu: 15 anos en consultoria de transformacion digital, marketing y estrategia de datos.",
};

export default function SobreMi() {
  return (
    <>
      {/* Header */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Sobre mi
          </p>
          <h1 className="mb-6">Miguel Cantu</h1>
          <p className="text-lg leading-relaxed text-text-muted">
            Consultor estrategico en transformacion digital con sede en
            Monterrey, Mexico. Ayudo a directores y equipos de liderazgo a tomar
            mejores decisiones digitales — con datos, no con intuicion.
          </p>
        </div>
      </section>

      {/* Trayectoria */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8">Trayectoria</h2>
          <div className="space-y-8">
            {[
              {
                period: "2024 — Presente",
                role: "Founder, De Marketing",
                description:
                  "Consultoria AI-First especializada en marketing B2B. Estrategia digital, analitica y transformacion para empresas medianas.",
              },
              {
                period: "2019 — 2024",
                role: "Consultoria independiente",
                description:
                  "Proyectos de transformacion digital para empresas en Mexico. SEO, analitica web, campanas digitales y diseno de estrategia.",
              },
              {
                period: "2011 — 2019",
                role: "Inicio de carrera",
                description:
                  "Primeros anos en marketing digital, construyendo experiencia en analitica, posicionamiento y estrategia de contenidos.",
              },
            ].map((item) => (
              <div
                key={item.period}
                className="border-l-2 border-border pl-6"
              >
                <p className="mb-1 text-sm font-semibold text-accent">
                  {item.period}
                </p>
                <h3 className="mb-2 text-xl">{item.role}</h3>
                <p className="text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lo que hago */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px]">
          <h2 className="mb-8">Lo que hago</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {[
              {
                title: "Consultoria estrategica",
                description:
                  "Diagnostico y hoja de ruta para la transformacion digital de tu empresa.",
              },
              {
                title: "Conferencias",
                description:
                  "Ponencias sobre transformacion digital, marketing y toma de decisiones basada en datos.",
              },
              {
                title: "Contenido",
                description:
                  "Blog y publicaciones sobre estrategia digital, analitica y tendencias de negocio.",
              },
              {
                title: "Mentorias",
                description:
                  "Acompanamiento a lideres y equipos en su proceso de madurez digital.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[var(--radius-lg)] bg-surface p-6 shadow-md"
              >
                <h3 className="mb-2 text-lg">{item.title}</h3>
                <p className="text-sm text-text-muted">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="mb-4">¿Quieres trabajar conmigo?</h2>
          <p className="mx-auto mb-8 max-w-lg text-text-muted">
            Si buscas un estratega digital que entienda tu negocio, hablemos.
          </p>
          <Link
            href="/contacto"
            className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
          >
            Agendar Consulta
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
