import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Brain, Bot, Database, Zap, MessageSquare, Eye, ChevronDown } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ServiceProcess } from "@/components/ServiceProcess";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { FadeIn } from "@/components/FadeIn";
import { RFMDemo } from "@/components/demos/RFMDemo";

export const metadata: Metadata = {
  title: "Consultor en Inteligencia Artificial - IA para Empresas",
  description:
    "Miguel Cantú es consultor en inteligencia artificial. Ayuda a empresas a implementar IA para automatizar procesos, analizar datos y tomar mejores decisiones de negocio.",
};

const capabilities = [
  { icon: Brain, title: "Estrategia de IA", description: "Identificación de casos de uso de IA con mayor impacto para tu negocio." },
  { icon: Bot, title: "Automatización con IA", description: "Chatbots, asistentes y automatización de procesos repetitivos con inteligencia artificial." },
  { icon: Database, title: "Analítica Avanzada", description: "Modelos predictivos, segmentación inteligente y análisis de datos con IA." },
  { icon: MessageSquare, title: "IA Generativa", description: "Implementación de herramientas de IA generativa para marketing, contenido y operaciones." },
  { icon: Eye, title: "Computer Vision", description: "Soluciones de visión artificial para control de calidad, inventarios y más." },
  { icon: Zap, title: "Integración de IA", description: "Conexión de modelos de IA con tus sistemas existentes y flujos de trabajo." },
];

const process = [
  { number: "01", title: "Exploración", description: "Identificación de oportunidades de IA y evaluación de factibilidad técnica y de negocio." },
  { number: "02", title: "Piloto", description: "Prueba de concepto rápida para validar el impacto antes de escalar." },
  { number: "03", title: "Implementación", description: "Desarrollo e integración de la solución de IA en tu operación." },
  { number: "04", title: "Escalamiento", description: "Expansión a otros procesos y mejora continua del modelo." },
];

const faqs = [
  {
    q: "¿Necesito un equipo técnico para implementar IA en mi empresa?",
    a: "No necesariamente. Muchas soluciones de IA modernas son no-code o low-code y se integran directamente con tus herramientas existentes. Para proyectos más complejos, puedo coordinar con desarrolladores especializados. Mi rol es asegurar que la solución tenga sentido de negocio, no solo técnico.",
  },
  {
    q: "¿Qué procesos de mi empresa se pueden automatizar con IA?",
    a: "Los mejores candidatos son procesos repetitivos con alto volumen de datos: clasificación de documentos, atención al cliente, análisis de ventas, segmentación de clientes, predicción de demanda y generación de contenido. En el assessment inicial identificamos los casos con mayor ROI.",
  },
  {
    q: "¿Es seguro usar IA con los datos de mi empresa?",
    a: "Sí, siempre que se implemente correctamente. Evaluamos opciones de IA privada (modelos on-premise o en tu propia nube), políticas de acceso a datos, anonimización y cumplimiento regulatorio. La seguridad y privacidad de datos es parte fundamental de cualquier proyecto de IA que diseñamos.",
  },
  {
    q: "¿Cuál es la diferencia entre IA generativa y analítica avanzada?",
    a: "La analítica avanzada usa modelos predictivos para encontrar patrones y predecir resultados (ej: qué cliente va a comprar). La IA generativa crea contenido nuevo como textos, imágenes y código. Ambas son complementarias y las combinamos según el caso de uso de tu negocio.",
  },
  {
    q: "¿Cuánto cuesta implementar IA en una empresa mediana?",
    a: "Un piloto típico puede arrancar desde $5,000 USD y validar el impacto en 4-8 semanas. El costo depende de la complejidad del caso de uso, la calidad de los datos disponibles y el nivel de integración requerido. Siempre empezamos con un piloto acotado antes de escalar.",
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

const businessAreas = [
  "Ventas",
  "Marketing",
  "Operaciones",
  "Finanzas",
  "Atención",
  "Logística",
  "RRHH",
  "Producto",
];

const aiModels = [
  { name: "Clusters", description: "Segmentación automática", icon: Database },
  { name: "RFM", description: "Recencia, Frecuencia, Monetario", icon: Brain },
  { name: "ARIMA", description: "Predicción de series de tiempo", icon: Zap },
  { name: "NLP", description: "Lenguaje natural", icon: MessageSquare },
];

export default function InteligenciaArtificial() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="page-header">
        <h1>Consultor en Inteligencia Artificial</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/">Consultoría</Link>
          <span className="mx-2">/</span>
          <span>Inteligencia Artificial</span>
        </p>
      </div>

      {/* Intro with AI network */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn>
            <span className="section-badge">Inteligencia Artificial</span>
            <h2 className="mb-6">IA que Resuelve Problemas Reales de Negocio</h2>
            <p className="mb-6 text-text-muted leading-relaxed">
              La inteligencia artificial no es magia, es una herramienta
              poderosa cuando se aplica al problema correcto. Como consultor en
              inteligencia artificial, ayudo a empresas a identificar dónde la
              IA puede generar el mayor impacto y cómo implementarla de forma
              práctica.
            </p>
            <Link href="/contacto" className="btn btn-primary">
              Explorar Oportunidades de IA <ArrowRight size={16} />
            </Link>
          </FadeIn>
          <FadeIn delay={0.2} direction="right">
            <NeuralNetwork centerLabel="IA" nodes={businessAreas} />
          </FadeIn>
        </div>
      </section>

      {/* AI Models ribbon */}
      <section className="bg-primary px-6 py-10">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-xs font-semibold uppercase tracking-[0.15em] text-white/40 mb-6">
            Algunos de los Modelos de IA que más Usamos
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:justify-between">
            {aiModels.map((m) => (
              <div key={m.name} className="flex items-center gap-3">
                <m.icon size={18} className="text-accent" strokeWidth={1.5} />
                <div>
                  <p className="text-base font-heading font-bold text-white">{m.name}</p>
                  <p className="text-xs text-white/50">{m.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="section-badge">Demo Interactivo</span>
              <h2>Segmentación RFM con Inteligencia Artificial</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Observa cómo la IA segmenta clientes automáticamente por Recencia, Frecuencia y Valor Monetario.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <RFMDemo />
          </FadeIn>
        </div>
      </section>

      {/* Capabilities */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Capacidades</span>
              <h2>Soluciones de Inteligencia Artificial para tu Empresa</h2>
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
              <h2>Proceso de Implementación de IA</h2>
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
              <h2>Dudas sobre Inteligencia Artificial</h2>
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
            <h2 className="mb-4 text-white">¿Tu empresa está lista para la IA?</h2>
            <p className="mx-auto mb-8 max-w-lg text-white/60">
              Agenda una sesión exploratoria y descubramos juntos dónde la inteligencia artificial puede transformar tu operación.
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
