import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Target, BarChart3, Search, Mail, PenTool, TrendingUp, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FadeIn } from "@/components/FadeIn";
import { FunnelDemo } from "@/components/demos/FunnelDemo";

export const metadata: Metadata = {
  title: "Consultor en Marketing Digital — Estrategia, SEO, Campanas y Contenido",
  description:
    "Miguel Cantu es consultor en marketing digital. Estrategias de SEO, campanas digitales, marketing de contenidos y analitica para empresas que buscan resultados medibles.",
};

const capabilities = [
  { icon: Search, title: "SEO y Posicionamiento", description: "Estrategia de posicionamiento organico para que te encuentren quienes te necesitan." },
  { icon: Target, title: "Campanas Digitales", description: "Google Ads, Meta Ads y campanas de performance con enfoque en ROI." },
  { icon: PenTool, title: "Marketing de Contenidos", description: "Estrategia de contenido que posiciona, educa y genera demanda." },
  { icon: Mail, title: "Email Marketing", description: "Automatizacion y nurturing para convertir leads en clientes." },
  { icon: BarChart3, title: "Analitica de Marketing", description: "Dashboards, atribucion y KPIs para saber que funciona y que no." },
  { icon: TrendingUp, title: "Funnel de Ventas", description: "Diseno de embudos de conversion optimizados con datos." },
];

const process = [
  { number: "01", title: "Diagnostico", description: "Analisis de tu presencia digital actual, competidores y oportunidades." },
  { number: "02", title: "Estrategia", description: "Plan de accion con canales, presupuesto, KPIs y calendario." },
  { number: "03", title: "Ejecucion", description: "Implementacion de campanas, contenido y optimizaciones." },
  { number: "04", title: "Medicion", description: "Reportes de resultados, ajustes y escalamiento." },
];

const faqs = [
  {
    q: "¿Cuanto tiempo tarda en verse resultados de marketing digital?",
    a: "Depende del canal. Las campanas de pago (Google Ads, Meta Ads) pueden generar leads desde la primera semana. El SEO y el marketing de contenidos son estrategias de mediano plazo — normalmente se ven resultados significativos entre los 3 y 6 meses, pero con un efecto acumulativo mucho mas sostenible.",
  },
  {
    q: "¿Que incluye una consultoria en marketing digital?",
    a: "Incluye un diagnostico completo de tu presencia digital actual, un plan estrategico con canales priorizados, KPIs definidos y un calendario de ejecucion. Dependiendo del alcance, tambien incluyo la supervision de campanas, optimizacion de SEO y reportes mensuales de resultados.",
  },
  {
    q: "¿Como se mide el ROI del marketing digital?",
    a: "Utilizamos herramientas de analitica (GA4, Google Tag Manager, CRM) para rastrear cada punto de contacto del cliente. Medimos costo por lead, costo por adquisicion, valor de vida del cliente y retorno sobre inversion publicitaria. Cada peso invertido tiene un KPI asociado.",
  },
  {
    q: "¿Necesito tener un equipo interno de marketing?",
    a: "No necesariamente. Puedo trabajar directamente con tu equipo existente, capacitarlos, o coordinar la ejecucion con mi agencia De Marketing. Lo importante es que tengas alguien internamente que pueda dar seguimiento a la estrategia y tomar decisiones rapidas.",
  },
  {
    q: "¿Trabajas con empresas que ya tienen agencia de marketing?",
    a: "Si, de hecho es un escenario comun. Mi rol como consultor es disenar la estrategia y supervisar que la agencia ejecute con los KPIs correctos. Aporto la vision estrategica y de negocio que complementa la ejecucion tactica de la agencia.",
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
          <Link href="/">Consultoria</Link>
          <span className="mx-2">/</span>
          <span>Marketing Digital</span>
        </p>
      </div>

      {/* Intro */}
      <section className="relative px-6 py-20 overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Marketing Digital</span>
            <h2 className="mb-6">Estrategias de Marketing que Generan Resultados Reales</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              Como consultor en marketing digital, ayudo a empresas a dejar de
              gastar en tacticas aisladas y empezar a invertir en una estrategia
              integral. SEO, campanas, contenido y analitica — todo alineado a
              tus objetivos de negocio.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-primary">
                Solicitar Diagnostico <ArrowRight size={16} />
              </Link>
            </div>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <div className="space-y-4">
              <div className="bg-surface p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Search size={20} className="text-accent" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">SEO y Posicionamiento</p>
                </div>
                <p className="text-xs text-text-muted">Que te encuentren quienes te necesitan. Estrategia de contenido + tecnica.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <Target size={20} className="text-accent" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">Campanas de Performance</p>
                </div>
                <p className="text-xs text-text-muted">Google Ads, Meta Ads — cada peso invertido con objetivo claro y medible.</p>
              </div>
              <div className="bg-surface p-6 border border-border">
                <div className="flex items-center gap-3 mb-2">
                  <BarChart3 size={20} className="text-accent" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">Analitica y Atribucion</p>
                </div>
                <p className="text-xs text-text-muted">Dashboards, KPIs y reportes para saber que funciona y que no.</p>
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
            { icon: BarChart3, label: "Analitica" },
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
        <AnimatedBackground variant="grid" />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="section-badge">Demo Interactivo</span>
              <h2>Simula tu Funnel de Conversion</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Mueve los sliders y observa como pequeños cambios en tu estrategia generan gran impacto en revenue.
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
              <h2>Alcance de la Consultoria en Marketing Digital</h2>
            </div>
          </FadeIn>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.08}>
                <div className="card-hover h-full">
                  <c.icon size={28} className="mb-4 text-accent" strokeWidth={1.5} />
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
              <h2>Como Trabajo</h2>
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
              Agenda una consulta y exploremos como mejorar tu estrategia de marketing con datos y resultados medibles.
            </p>
            <Link href="/contacto" className="btn btn-white">
              Agendar Consulta <ArrowRight size={16} />
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
