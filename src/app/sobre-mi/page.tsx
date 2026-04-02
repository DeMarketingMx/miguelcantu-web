import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, CheckCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Sobre mi",
  description:
    "Conoce la trayectoria de Miguel Cantu: 15 anos en consultoria de transformacion digital, marketing y estrategia de datos.",
};

const stats = [
  { number: "15+", label: "Anos de experiencia" },
  { number: "50+", label: "Empresas asesoradas" },
  { number: "100+", label: "Proyectos completados" },
];

const values = [
  {
    number: "01",
    title: "Enfoque Estrategico",
    description:
      "Cada proyecto empieza con una vision clara del negocio. La tecnologia es el medio, no el fin.",
  },
  {
    number: "02",
    title: "Decisiones con Datos",
    description:
      "No recomiendo por intuicion. Cada sugerencia esta respaldada por analitica y evidencia.",
  },
  {
    number: "03",
    title: "Transparencia Total",
    description:
      "Comunicacion directa, sin jerga innecesaria. Sabes exactamente donde estas y a donde vas.",
  },
  {
    number: "04",
    title: "Resultados Medibles",
    description:
      "KPIs claros desde el dia uno. Si no se puede medir, no se puede mejorar.",
  },
];

const timeline = [
  {
    period: "2024 — Presente",
    role: "Founder, De Marketing",
    description:
      "Consultoria AI-First especializada en marketing B2B. Estrategia digital, analitica y transformacion para empresas medianas.",
  },
  {
    period: "2019 — 2024",
    role: "Consultoria Independiente",
    description:
      "Proyectos de transformacion digital para empresas en Mexico. SEO, analitica web, campanas digitales y estrategia de crecimiento.",
  },
  {
    period: "2011 — 2019",
    role: "Inicio de Carrera",
    description:
      "Primeros anos en marketing digital, construyendo experiencia en analitica, posicionamiento y estrategia de contenidos.",
  },
];

export default function SobreMi() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Sobre Mi</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Sobre mi</span>
        </p>
      </div>

      {/* Bio - Split */}
      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          {/* Photo */}
          <div className="aspect-[3/4] bg-navy/90 flex items-center justify-center">
            <div className="text-center text-white/40 px-8">
              <p className="text-sm uppercase tracking-wider mb-2">
                Foto profesional
              </p>
              <p className="text-xs">Retrato de Miguel</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <span className="section-badge">Quien Soy</span>
            <h2 className="mb-6">Miguel Cantu</h2>
            <p className="mb-4 text-text-muted leading-relaxed">
              Consultor estrategico en transformacion digital con sede en
              Monterrey, Mexico. Ayudo a directores y equipos de liderazgo a
              tomar mejores decisiones digitales.
            </p>
            <p className="mb-8 text-text-muted leading-relaxed">
              Mi enfoque es simple: entender tu negocio primero, despues la
              tecnologia. La transformacion digital no es un proyecto de TI — es
              una decision de negocio que requiere vision estrategica y
              ejecucion disciplinada.
            </p>

            {/* Stats inline */}
            <div className="grid grid-cols-3 gap-6 border-t border-border pt-8">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-2xl font-bold text-primary">
                    {s.number}
                  </p>
                  <p className="mt-1 text-xs text-text-muted uppercase tracking-wider">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values - Numbered grid */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <span className="section-badge">Mi Filosofia</span>
            <h2>Valores que Guian mi Trabajo</h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.number} className="flex gap-5">
                <span className="font-heading text-4xl font-bold text-accent/20 leading-none">
                  {v.number}
                </span>
                <div>
                  <h3 className="mb-2 text-lg">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">
                    {v.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority navy band */}
      <section className="section-navy px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <div>
            <span className="section-badge section-badge-white">Mision</span>
            <h2 className="mb-6">
              Ayudar a Empresas a Tomar Mejores Decisiones Digitales
            </h2>
            <p className="text-white/60 leading-relaxed">
              Creo que cada empresa merece acceso a estrategia digital de primer
              nivel. No necesitas un equipo de 50 personas — necesitas claridad
              en que hacer, por que y cuando.
            </p>
          </div>
          <div className="aspect-video bg-navy-light flex items-center justify-center">
            <div className="text-center text-white/30 px-8">
              <p className="text-sm uppercase tracking-wider mb-2">
                Imagen
              </p>
              <p className="text-xs">Conferencia o equipo</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <div className="text-center mb-14">
            <span className="section-badge">Trayectoria</span>
            <h2>Experiencia Profesional</h2>
          </div>
          <div className="space-y-0">
            {timeline.map((t, i) => (
              <div
                key={t.period}
                className="relative flex gap-6 pb-10 last:pb-0"
              >
                {/* Vertical line */}
                <div className="flex flex-col items-center">
                  <div className="h-3 w-3 rounded-full bg-accent shrink-0 mt-1.5" />
                  {i < timeline.length - 1 && (
                    <div className="w-px flex-1 bg-border" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-2">
                  <p className="text-xs font-semibold uppercase tracking-wider text-accent mb-1">
                    {t.period}
                  </p>
                  <h3 className="text-lg mb-2">{t.role}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <h2 className="mb-4 text-white">¿Trabajamos juntos?</h2>
          <p className="mx-auto mb-8 max-w-lg text-white/60">
            Si buscas un estratega digital que entienda tu negocio, hablemos.
          </p>
          <Link href="/contacto" className="btn btn-white">
            Agendar Consulta
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
}
