import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Compass, LineChart, Lightbulb, Puzzle, Gauge, Globe, Award, BookOpen, GraduationCap, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { StrategyVisual } from "@/components/StrategyVisual";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FadeIn } from "@/components/FadeIn";
import { ImpactCalculator } from "@/components/demos/ImpactCalculator";

export const metadata: Metadata = {
  title: "Consultor en Estrategia Digital — Alineacion de Tecnologia y Negocio",
  description:
    "Miguel Cantu es consultor en estrategia digital. Alinea tecnologia, procesos y personas para maximizar el impacto digital en tu negocio.",
};

const capabilities = [
  { icon: Compass, title: "Vision Digital", description: "Definicion del norte digital de tu empresa alineado a la estrategia de negocio." },
  { icon: LineChart, title: "Modelo de Datos", description: "Arquitectura de datos y analitica para tomar decisiones informadas." },
  { icon: Lightbulb, title: "Innovacion Digital", description: "Identificacion de oportunidades de innovacion y diferenciacion digital." },
  { icon: Puzzle, title: "Integracion de Canales", description: "Estrategia omnicanal que conecta todos los puntos de contacto digitales." },
  { icon: Gauge, title: "Performance Digital", description: "KPIs, dashboards y mecanismos de medicion para cada iniciativa." },
  { icon: Globe, title: "Presencia Digital", description: "Estrategia de web, SEO, redes sociales y ecosistema digital completo." },
];

const process = [
  { number: "01", title: "Descubrimiento", description: "Entendimiento profundo de tu negocio, mercado y capacidades digitales actuales." },
  { number: "02", title: "Analisis", description: "Benchmarking, gaps, oportunidades y priorizacion de iniciativas." },
  { number: "03", title: "Estrategia", description: "Plan integral con vision, objetivos, iniciativas y metricas de exito." },
  { number: "04", title: "Activacion", description: "Implementacion por fases con acompanamiento y medicion continua." },
];

const certRibbon = [
  { icon: GraduationCap, text: "MBA Transformacion Digital — IEBS" },
  { icon: GraduationCap, text: "Maestria Analitica — EGADE" },
  { icon: Globe, text: "Micromaster — Boston University" },
  { icon: Award, text: "Estrategia Conectada — Wharton" },
  { icon: BookOpen, text: "7+ Certificaciones Digitales" },
];

const faqs = [
  {
    q: "¿Cual es la diferencia entre estrategia digital y marketing digital?",
    a: "La estrategia digital es el marco completo que define como tu empresa usa la tecnologia para competir y crecer. El marketing digital es uno de sus componentes. Una estrategia digital abarca procesos, datos, tecnologia, personas y canales — no solo campanas publicitarias.",
  },
  {
    q: "¿Que entregables recibo de una consultoria en estrategia digital?",
    a: "Recibes un diagnostico de madurez digital, un documento de estrategia con vision, objetivos y KPIs, una hoja de ruta priorizada por fases con timeline y presupuesto estimado, y un dashboard de seguimiento. Todo documentado y accionable para tu equipo.",
  },
  {
    q: "¿Como se implementa la estrategia digital una vez definida?",
    a: "La implementacion se hace por fases priorizadas segun impacto y factibilidad. Empezamos con quick wins que generan resultados rapidos, luego avanzamos a proyectos de mayor alcance. Puedo acompanar la ejecucion o capacitar a tu equipo interno para llevarla adelante.",
  },
  {
    q: "¿Cuanto tiempo toma disenar una estrategia digital?",
    a: "El proceso de diagnostico y diseno estrategico tipicamente toma de 4 a 8 semanas, dependiendo del tamano de la empresa y la complejidad del ecosistema digital. Incluye entrevistas con stakeholders, analisis de datos y benchmarking competitivo.",
  },
  {
    q: "¿La estrategia digital aplica para empresas que apenas inician en digital?",
    a: "Absolutamente. De hecho, es el mejor momento para hacerlo. Empezar con una estrategia clara evita invertir en herramientas o canales equivocados. Diseñamos una hoja de ruta que escala gradualmente segun tus recursos y prioridades de negocio.",
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

export default function EstrategiaDigital() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-header">
        <h1>Consultor en Estrategia Digital</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoria</Link>
          <span className="mx-2">/</span>
          <span>Estrategia Digital</span>
        </p>
      </div>

      {/* Intro with strategy radar */}
      <section className="relative px-6 py-20 overflow-hidden">
        <AnimatedBackground variant="grid" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Estrategia Digital</span>
            <h2 className="mb-6">Estrategia Digital que Conecta Tecnologia con Negocio</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              La mayoria de las empresas tienen herramientas digitales. Pocas
              tienen una estrategia digital. Como consultor en estrategia
              digital, ayudo a alinear tecnologia, procesos y personas para que
              cada inversion digital tenga impacto real.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Disenar mi Estrategia <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <StrategyVisual />
          </FadeIn>
        </div>
      </section>

      {/* Ribbon */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:justify-between">
          {[
            { icon: Globe, label: "Visibilidad" },
            { icon: Compass, label: "Posicionamiento" },
            { icon: Lightbulb, label: "Reconocimiento" },
            { icon: Gauge, label: "Autoridad" },
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
              <h2>Calculadora de Impacto Digital</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Selecciona tu industria y tamano de empresa para ver tu benchmark digital vs el mercado.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ImpactCalculator />
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Alcance</span>
              <h2>Pilares de la Estrategia Digital</h2>
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
              <span className="section-badge">Metodologia</span>
              <h2>Mi Proceso de Estrategia Digital</h2>
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
              <h2>Dudas sobre Estrategia Digital</h2>
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
            <h2 className="mb-4 text-white">¿Tu empresa tiene estrategia digital?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una consulta y definamos juntos la estrategia digital que tu negocio necesita.
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
