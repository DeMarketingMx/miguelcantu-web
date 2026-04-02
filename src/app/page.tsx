import Link from "next/link";
import { ArrowRight, BarChart3, Target, TrendingUp, CheckCircle } from "lucide-react";

const stats = [
  { number: "15+", label: "Anos de experiencia" },
  { number: "50+", label: "Empresas asesoradas" },
  { number: "100%", label: "Enfoque estrategico" },
  { number: "3x", label: "ROI promedio" },
];

const services = [
  {
    icon: Target,
    title: "Estrategia Digital",
    description:
      "Diagnostico y hoja de ruta para alinear tu transformacion digital con los objetivos de negocio.",
  },
  {
    icon: BarChart3,
    title: "Analitica y Datos",
    description:
      "Convierte tus datos en decisiones accionables. Dashboards, KPIs y cultura data-driven.",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento Digital",
    description:
      "SEO, marketing de contenidos y campanas digitales con enfoque en resultados medibles.",
  },
];

const reasons = [
  "Vision estrategica, no solo ejecucion tactica",
  "Experiencia con empresas medianas en Mexico",
  "Enfoque en datos y resultados medibles",
  "Comunicacion directa y transparente",
  "Acompanamiento de principio a fin",
];

export default function Home() {
  return (
    <>
      {/* Hero - Split layout */}
      <section className="bg-surface">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          {/* Left - Text */}
          <div>
            <span className="section-badge">Consultoria Estrategica</span>
            <h1 className="mb-6">
              Transformacion Digital con Estrategia
            </h1>
            <p className="mb-8 max-w-lg text-lg leading-relaxed text-text-muted">
              Ayudo a directores y C-suite a tomar mejores decisiones digitales.
              Con datos, no con intuicion.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-primary">
                Agendar Consulta
                <ArrowRight size={16} />
              </Link>
              <Link href="/sobre-mi" className="btn btn-outline">
                Mi Trayectoria
              </Link>
            </div>
          </div>

          {/* Right - Image placeholder with overlay */}
          <div className="relative">
            <div className="aspect-[4/3] bg-navy/90 flex items-center justify-center">
              <div className="text-center text-white/40 px-8">
                <p className="text-sm uppercase tracking-wider mb-2">Foto profesional</p>
                <p className="text-xs">Reemplazar con foto de Miguel</p>
              </div>
            </div>
            {/* Floating stat card */}
            <div className="absolute -bottom-6 -left-4 bg-surface p-4 shadow-lg">
              <p className="font-heading text-3xl font-bold text-primary">15+</p>
              <p className="text-xs text-text-muted uppercase tracking-wider">Anos de experiencia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="border-y border-border bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 px-6 py-12 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <p className="stat-number">{s.number}</p>
              <p className="stat-label">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Services / Que hago */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <div className="text-center mb-14">
            <span className="section-badge">Que Hago</span>
            <h2>Areas de Consultoria</h2>
          </div>
          <div className="grid gap-8 md:grid-cols-3">
            {services.map((s) => (
              <div key={s.title} className="card-hover">
                <s.icon
                  size={32}
                  className="mb-4 text-accent"
                  strokeWidth={1.5}
                />
                <h3 className="mb-3">{s.title}</h3>
                <p className="text-sm leading-relaxed text-text-muted">
                  {s.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authority section - Navy */}
      <section className="section-navy px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          {/* Left - Image */}
          <div className="aspect-[4/3] bg-navy-light flex items-center justify-center">
            <div className="text-center text-white/30 px-8">
              <p className="text-sm uppercase tracking-wider mb-2">Imagen de contexto</p>
              <p className="text-xs">Reunion, oficina o conferencia</p>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <span className="section-badge section-badge-white">Por Que Trabajar Conmigo</span>
            <h2 className="mb-6">
              Ayudo a Empresas a Crecer con Claridad Digital
            </h2>
            <p className="mb-8 text-white/60">
              No soy una agencia. Soy un estratega que trabaja codo a codo con
              tu equipo directivo para que cada decision digital tenga impacto
              real en el negocio.
            </p>
            <ul className="space-y-4">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-3">
                  <CheckCircle
                    size={20}
                    className="mt-0.5 shrink-0 text-accent"
                  />
                  <span className="text-sm text-white/80">{r}</span>
                </li>
              ))}
            </ul>
            <Link href="/sobre-mi" className="btn btn-white mt-8">
              Conoce Mi Trayectoria
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <span className="section-badge section-badge-white">Siguiente Paso</span>
          <h2 className="mb-4 text-white">
            ¿Listo para transformar tu empresa?
          </h2>
          <p className="mx-auto mb-8 max-w-lg text-white/60">
            Agenda una consulta sin compromiso. Hablemos de donde esta tu
            empresa y a donde quieres llevarla.
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
