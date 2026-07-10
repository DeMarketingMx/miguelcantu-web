import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Layers, Users, Cpu, GitBranch, Shield, Workflow, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { FadeIn } from "@/components/FadeIn";
import { MaturityAssessment } from "@/components/demos/MaturityAssessment";

export const metadata: Metadata = {
  title: "Consultor en Transformación Digital - Estrategia y Hoja de Ruta",
  description:
    "Miguel Cantú es consultor en transformación digital. Ayuda a empresas a diseñar e implementar su estrategia de transformación digital con visión de negocio.",
};

const capabilities = [
  { icon: Layers, title: "Diagnóstico de Madurez Digital", description: "Evaluación integral de dónde está tu empresa en su proceso de transformación." },
  { icon: Workflow, title: "Hoja de Ruta Digital", description: "Plan estratégico con fases, prioridades, presupuesto y timeline." },
  { icon: Users, title: "Gestión del Cambio", description: "Acompañamiento a equipos para adoptar nuevas tecnologías y procesos." },
  { icon: Cpu, title: "Selección de Tecnología", description: "Evaluación y recomendación de plataformas, herramientas y partners." },
  { icon: GitBranch, title: "Optimización de Procesos", description: "Rediseño de flujos de trabajo para maximizar eficiencia digital." },
  { icon: Shield, title: "Gobernanza Digital", description: "Estructura de gobierno, KPIs y mecanismos de seguimiento." },
];

const process = [
  { number: "01", title: "Assessment", description: "Evaluación de madurez digital, entrevistas con stakeholders y análisis del entorno." },
  { number: "02", title: "Visión", description: "Definición del estado futuro deseado y gaps a cerrar." },
  { number: "03", title: "Roadmap", description: "Hoja de ruta con quick wins, proyectos a mediano y largo plazo." },
  { number: "04", title: "Acompañamiento", description: "Seguimiento, ajustes y aseguramiento de la adopción." },
];

const faqs = [
  {
    q: "¿Qué tan disruptivo es un proceso de transformación digital?",
    a: "No tiene que ser disruptivo. Un buen proyecto de transformación digital se implementa por fases, empezando con quick wins que generan confianza y momentum. El objetivo es evolucionar tu operación, no detenerla. Cada fase se planifica para minimizar fricción y maximizar adopción.",
  },
  {
    q: "¿Necesito cambiar todos mis sistemas y procesos actuales?",
    a: "No necesariamente. El assessment inicial identifica qué funciona bien y qué necesita mejorar. Muchas veces se trata de integrar mejor lo que ya tienes, automatizar procesos manuales y cerrar gaps específicos, no de reemplazar todo desde cero.",
  },
  {
    q: "¿Cuánto cuesta un proyecto de transformación digital?",
    a: "Depende del alcance y la madurez digital actual de tu empresa. Empezamos con un assessment que define exactamente qué necesitas. A partir de ahí, se construye una hoja de ruta con fases priorizadas por impacto y presupuesto, para que inviertas donde realmente importa.",
  },
  {
    q: "¿Cuánto tiempo toma una transformación digital completa?",
    a: "Una transformación integral puede tomar de 12 a 24 meses, pero los primeros resultados se ven en las primeras 8-12 semanas con quick wins. Lo importante es establecer una hoja de ruta realista con hitos medibles en cada fase.",
  },
  {
    q: "¿Qué pasa si mi equipo se resiste al cambio?",
    a: "La resistencia al cambio es normal y esperada. Por eso incluyo gestión del cambio como parte integral del proceso: comunicación clara, capacitación práctica, líderes de cambio internos y métricas de adopción. El éxito depende tanto de las personas como de la tecnología.",
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

const networkNodes = [
  "Ventas",
  "Marketing",
  "Operaciones",
  "Finanzas",
  "RRHH",
  "TI",
  "Clientes",
  "Datos",
];

export default function TransformacionDigital() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-header">
        <h1>Consultor en Transformación Digital</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoría</Link>
          <span className="mx-2">/</span>
          <span>Transformación Digital</span>
        </p>
      </div>

      {/* Intro with neural network */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Transformación Digital</span>
            <h2 className="mb-6">La Transformación Digital No Es un Proyecto de TI</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              Es una decisión de negocio. Como consultor en transformación
              digital con MBA en Transformación Digital por IEBS y
              Micromaster por Boston University, ayudo a empresas a diseñar su
              estrategia de transformación con visión de negocio, no de
              tecnología.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Solicitar Assessment <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <NeuralNetwork centerLabel="CORE DIGITAL" nodes={networkNodes} />
          </FadeIn>
        </div>
      </section>

      {/* Ribbon */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto flex max-w-[1200px] flex-wrap items-center justify-center gap-8 md:justify-between">
          {[
            { icon: Cpu, label: "Tecnología" },
            { icon: Users, label: "Personas" },
            { icon: Workflow, label: "Procesos" },
            { icon: Layers, label: "Digitalización" },
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
              <h2>Evalúa tu Madurez Digital</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Responde 6 preguntas rápidas y descubre en qué nivel de transformación digital se encuentra tu empresa.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <MaturityAssessment />
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Hoja de Ruta</span>
              <h2>Alcance del Proyecto de Transformación Digital</h2>
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
              <span className="section-badge">Metodología</span>
              <h2>Proceso de Transformación</h2>
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
              <h2>Dudas sobre Transformación Digital</h2>
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
            <h2 className="mb-4 text-white">¿Listo para iniciar tu transformación digital?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda un assessment y descubre dónde está tu empresa en su camino de transformación.
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
