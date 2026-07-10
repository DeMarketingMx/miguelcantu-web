import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, BarChart3, Search, Mail, PenTool, TrendingUp, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { FadeIn } from "@/components/FadeIn";
import { FunnelDemo } from "@/components/demos/FunnelDemo";

export const metadata: Metadata = {
  title: "Consultor en Marketing Digital - Estrategia, SEO, Campañas y Contenido",
  description:
    "Miguel Cantú es consultor en marketing digital. Estrategias de SEO, campañas digitales, marketing de contenidos y analítica para empresas que buscan resultados medibles.",
};

const capabilities = [
  { icon: Search, title: "SEO y Posicionamiento", description: "Estrategia de posicionamiento orgánico para que te encuentren quienes te necesitan." },
  { icon: Target, title: "Campañas Digitales", description: "Google Ads, Meta Ads y campañas de performance con enfoque en ROI." },
  { icon: PenTool, title: "Marketing de Contenidos", description: "Estrategia de contenido que posiciona, educa y genera demanda." },
  { icon: Mail, title: "Email Marketing", description: "Automatización y nurturing para convertir leads en clientes." },
  { icon: BarChart3, title: "Analítica de Marketing", description: "Dashboards, atribución y KPIs para saber qué funciona y qué no." },
  { icon: TrendingUp, title: "Funnel de Ventas", description: "Diseño de embudos de conversión optimizados con datos." },
];

const process = [
  { number: "01", title: "Diagnóstico", description: "Análisis de tu presencia digital actual, competidores y oportunidades." },
  { number: "02", title: "Estrategia", description: "Plan de acción con canales, presupuesto, KPIs y calendario." },
  { number: "03", title: "Ejecución", description: "Implementación de campañas, contenido y optimizaciones." },
  { number: "04", title: "Medición", description: "Reportes de resultados, ajustes y escalamiento." },
];

const faqs = [
  {
    q: "¿Cuánto tiempo tarda en verse resultados de marketing digital?",
    a: "Depende del canal. Las campañas de pago (Google Ads, Meta Ads) pueden generar leads desde la primera semana. El SEO y el marketing de contenidos son estrategias de mediano plazo. Normalmente se ven resultados significativos entre los 3 y 6 meses, pero con un efecto acumulativo mucho más sostenible.",
  },
  {
    q: "¿Qué incluye una consultoría en marketing digital?",
    a: "Incluye un diagnóstico completo de tu presencia digital actual, un plan estratégico con canales priorizados, KPIs definidos y un calendario de ejecución. Dependiendo del alcance, también incluyo la supervisión de campañas, optimización de SEO y reportes mensuales de resultados.",
  },
  {
    q: "¿Cómo se mide el ROI del marketing digital?",
    a: "Utilizamos herramientas de analítica (GA4, Google Tag Manager, CRM) para rastrear cada punto de contacto del cliente. Medimos costo por lead, costo por adquisición, valor de vida del cliente y retorno sobre inversión publicitaria. Cada peso invertido tiene un KPI asociado.",
  },
  {
    q: "¿Necesito tener un equipo interno de marketing?",
    a: "No necesariamente. Puedo trabajar directamente con tu equipo existente, capacitarlos, o coordinar la ejecución con mi agencia De Marketing. Lo importante es que tengas alguien internamente que pueda dar seguimiento a la estrategia y tomar decisiones rápidas.",
  },
  {
    q: "¿Trabajas con empresas que ya tienen agencia de marketing?",
    a: "Sí, de hecho es un escenario común. Mi rol como consultor es diseñar la estrategia y supervisar que la agencia ejecute con los KPIs correctos. Aporto la visión estratégica y de negocio que complementa la ejecución táctica de la agencia.",
  },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function MarketingDigital() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-header">
        <h1>Consultor en Marketing Digital</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoría</Link>
          <span className="mx-2">/</span>
          <span>Marketing Digital</span>
        </p>
      </div>

      {/* Intro */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Marketing Digital</span>
            <h2 className="mb-6">Estrategias de Marketing que Generan Resultados Reales</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              Como consultor en marketing digital, ayudo a empresas a dejar de
              gastar en tácticas aisladas y empezar a invertir en una estrategia
              integral. SEO, campañas, contenido y analítica, todo alineado a
              tus objetivos de negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-primary">
                Solicitar Diagnóstico <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-4">
              <div className="bg-surface p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Search size={20} className="text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">SEO y Posicionamiento</p>
                </div>
                <p className="text-xs text-text-muted">Que te encuentren quienes te necesitan. Estrategia de contenido + técnica.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={20} className="text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">Campañas de Performance</p>
                </div>
                <p className="text-xs text-text-muted">Google Ads, Meta Ads, cada peso invertido con objetivo claro y medible.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 size={20} className="text-primary" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">Analítica y Atribución</p>
                </div>
                <p className="text-xs text-text-muted">Dashboards, KPIs y reportes para saber qué funciona y qué no.</p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Ribbon */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:justify-between">
          {[
            { icon: Search, label: "SEO" },
            { icon: Target, label: "SEM / PPC" },
            { icon: BarChart3, label: "Analítica" },
            { icon: PenTool, label: "Sitio Web" },
            { icon: TrendingUp, label: "Redes Sociales" },
          ].map((s) => (
            <div key={s.label} className="flex items-center gap-2">
              <s.icon size={16} className="text-accent" strokeWidth={1.5} />
              <span className="text-sm font-semibold text-white/80">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="section-badge">Demo Interactivo</span>
              <h2>Simula tu Funnel de Conversión</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Mueve los sliders y observa cómo pequeños cambios en tu estrategia generan gran impacto en revenue.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <FunnelDemo />
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Servicios</span>
              <h2>Alcance de la Consultoría en Marketing Digital</h2>
            </div>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.08}>
                <div className="card-hover h-full">
                  <c.icon size={28} className="mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="mb-2 text-base font-semibold">{c.title}</h3>
                  <p className="text-sm text-text-muted leading-relaxed">{c.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="bg-surface px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Proceso</span>
              <h2>Cómo Trabajo</h2>
            </div>
          </FadeIn>
          <ServiceProcess steps={process} />
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Preguntas Frecuentes</span>
              <h2>Dudas sobre Marketing Digital</h2>
            </div>
          </FadeIn>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <FadeIn key={i} delay={i * 0.05}>
                <details className="group rounded-lg border border-border bg-surface">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-4 text-sm font-semibold text-primary list-none [&::-webkit-details-marker]:hidden">
                    {faq.q}
                    <ChevronDown size={18} className="shrink-0 text-text-muted transition-transform duration-200 group-open:rotate-180" />
                  </summary>
                  <div className="px-6 pb-5 text-sm leading-relaxed text-text-muted">
                    {faq.a}
                  </div>
                </details>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px] bg-primary px-8 py-16 text-center">
          <FadeIn>
            <h2 className="mb-4 text-white">¿Necesitas un consultor en marketing digital?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una consulta y exploremos cómo mejorar tu estrategia de marketing con datos y resultados medibles.
            </p>
            <Link href="/contacto" className="btn btn-white">
              Agendar diagnóstico <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
