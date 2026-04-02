import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="px-6 py-24 md:py-32">
        <div className="mx-auto max-w-[1200px] text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
            Consultoria Estrategica
          </p>
          <h1 className="mx-auto mb-6 max-w-3xl">
            Transformacion Digital con Estrategia
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg text-text-muted">
            15 anos ayudando a empresas a tomar mejores decisiones digitales.
            Consultoria para directores que quieren crecer con claridad.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contacto"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
            >
              Agendar Consulta
              <ArrowRight size={16} />
            </Link>
            <Link
              href="/sobre-mi"
              className="inline-flex items-center gap-2 rounded-[var(--radius-md)] border-2 border-primary px-6 py-3 text-sm font-semibold text-primary no-underline transition-colors hover:bg-primary hover:text-white"
            >
              Conoce mi trayectoria
            </Link>
          </div>
        </div>
      </section>

      {/* Credibility */}
      <section className="px-6 py-16">
        <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-3">
          {[
            {
              title: "Estrategia, no ejecucion",
              description:
                "Trabajo a nivel de direccion para alinear la transformacion digital con los objetivos de negocio.",
            },
            {
              title: "Enfoque basado en datos",
              description:
                "Cada recomendacion esta respaldada por analitica, no por intuicion ni tendencias pasajeras.",
            },
            {
              title: "Resultados medibles",
              description:
                "Indicadores claros desde el dia uno. Sin reportes decorativos, solo metricas que importan.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[var(--radius-lg)] bg-surface p-6 shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg"
            >
              <h3 className="mb-3 text-xl">{item.title}</h3>
              <p className="text-sm leading-relaxed text-text-muted">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-[1200px] rounded-[var(--radius-xl)] bg-primary px-8 py-16 text-center text-white">
          <h2 className="mb-4 text-white">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-white/70">
            Agenda una consulta sin compromiso. Hablemos de donde esta tu
            empresa y a donde quieres llevarla.
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
