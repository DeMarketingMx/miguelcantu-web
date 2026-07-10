import Link from "next/link";
import { ArrowRight, BarChart3, Target, TrendingUp, Brain, CheckCircle, GraduationCap, Award, BookOpen, Globe, ChevronDown, Users, Briefcase, LineChart, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ROICalculator } from "@/components/demos/ROICalculator";
import { FadeIn } from "@/components/FadeIn";
import { BookSismico } from "@/components/BookSismico";
import { getBlogPosts } from "@/lib/blog";

const services = [
  {
    icon: Target,
    title: "Marketing Digital",
    href: "/consultoria/marketing-digital",
    description:
      "Estrategias de marketing basadas en datos para posicionar tu marca y generar demanda real.",
  },
  {
    icon: TrendingUp,
    title: "Transformación Digital",
    href: "/consultoria/transformacion-digital",
    description:
      "Hoja de ruta para llevar a tu empresa al siguiente nivel digital con visión estratégica.",
  },
  {
    icon: BarChart3,
    title: "Estrategia Digital",
    href: "/consultoria/estrategia-digital",
    description:
      "Alineación de tecnología, procesos y personas para maximizar el impacto digital en tu negocio.",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    href: "/consultoria/inteligencia-artificial",
    description:
      "Implementación de IA para automatizar procesos, analizar datos y tomar mejores decisiones.",
  },
];

const credentials = [
  { icon: GraduationCap, title: "MBA Transformación Digital", subtitle: "IEBS, España" },
  { icon: GraduationCap, title: "Maestría Analítica", subtitle: "EGADE Business School" },
  { icon: Globe, title: "Micromaster", subtitle: "Boston University" },
  { icon: Award, title: "7+ Certificaciones", subtitle: "Analítica Digital" },
  { icon: BookOpen, title: "Profesor de Cátedra", subtitle: "Tec de Monterrey" },
];

const differentiators = [
  {
    title: "Estratega, No Ejecutor",
    description: "Diseño la estrategia completa. No vendo tácticas sueltas. Construyo el plan que conecta marketing, datos y resultados de negocio.",
  },
  {
    title: "Datos Sobre Opiniones",
    description: "Cada recomendación está respaldada por analítica. GA4, CRM, dashboards. Decisiones basadas en evidencia, no en intuición.",
  },
  {
    title: "Par del C-Suite",
    description: "Hablo el idioma de directores y CEOs. Formación de EGADE, Boston University y IEBS aplicada al mercado mexicano.",
  },
];

const onlineCreds = [
  "Boston University · MicroMasters (edX)",
  "Wharton (edX)",
  "TU Munich (edX)",
  "Google",
];

const stats = [
  { number: 40, suffix: "+", label: "Empresas Asesoradas", icon: Briefcase },
  { number: 7, suffix: "+", label: "Años de Experiencia", icon: Clock },
  { number: 54, suffix: "", label: "Artículos Publicados", icon: BookOpen },
  { number: 7, suffix: "+", label: "Certificaciones", icon: Award },
];

const results = [
  {
    result: "De cero presencia digital a generación constante de leads en 6 meses.",
    context: "Empresa industrial, Monterrey",
  },
  {
    result: "Estrategia digital estructurada de punta a punta, con métricas claras de negocio.",
    context: "Empresa de servicios, CDMX",
  },
  {
    result: "Análisis comercial reducido de semanas a horas con implementación de IA.",
    context: "Empresa de tecnología, Guadalajara",
  },
];

const faqs = [
  {
    q: "¿Qué tipo de empresas asesoras?",
    a: "Trabajo principalmente con empresas medianas B2B en México, sobre todo industria, servicios profesionales y tecnología. Mi cliente típico tiene equipo de ventas y quiere profesionalizar su marketing digital.",
  },
  {
    q: "¿Cuál es la diferencia entre consultoría y agencia?",
    a: "Una agencia ejecuta tácticas. Yo diseño la estrategia completa: qué hacer, por qué, en qué orden, con qué métricas. Después superviso la ejecución, ya sea con tu equipo interno o con mi agencia De Marketing.",
  },
  {
    q: "¿Cómo funciona la primera consulta?",
    a: "Agendas una llamada de 30 minutos sin compromiso. Revisamos dónde está tu empresa hoy, identificamos oportunidades rápidas y definimos si tiene sentido trabajar juntos.",
  },
  {
    q: "¿Trabajas con empresas fuera de Monterrey?",
    a: "Sí. Trabajo con empresas en todo México y Latinoamérica de forma remota. Las reuniones son por videollamada y la comunicación es asíncrona con herramientas digitales.",
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

export default function Home() {
  const recentPosts = getBlogPosts().slice(0, 3);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-surface overflow-hidden">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <FadeIn>
            <span className="section-badge">Miguel Cantú</span>
            <h1 className="mb-4">Decisiones Digitales que Mueven Negocios</h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-text-muted">
              Consultor de negocios en estrategia digital, inteligencia artificial
              y marketing digital. Estrategia con datos para la alta dirección.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="btn btn-primary">
                Agendar diagnóstico
                <ArrowRight size={16} />
              </Link>
              <Link href="/sobre-mi" className="btn btn-outline">
                Mi Trayectoria
              </Link>
            </div>

            {/* Authority strip: founder / author proof with links */}
            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4 border-t border-border pt-6">
              <span className="text-[11px] font-semibold uppercase tracking-widest text-text-muted">
                Detrás de
              </span>
              <a
                href="https://demarketing.mx"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-extrabold uppercase tracking-[2px] text-primary transition-opacity hover:opacity-70"
              >
                De Marketing
              </a>
              <span className="h-4 w-px bg-border" aria-hidden="true" />
              <a
                href="https://kuldu.cafe"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-extrabold uppercase tracking-[2px] text-primary transition-opacity hover:opacity-70"
              >
                Kuldu Café
              </a>
              <span className="h-4 w-px bg-border" aria-hidden="true" />
              <span className="inline-flex items-center gap-2 text-sm font-extrabold uppercase tracking-[2px] text-primary">
                Método Sísmico
                <span className="rounded-sm bg-accent-light px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-primary">
                  Próximamente
                </span>
              </span>
            </div>
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-[5/6] overflow-hidden rounded-lg shadow-2xl ring-1 ring-black/10">
                <img
                  src="/miguel-hero.webp"
                  alt="Miguel Cantú - Consultor de Transformación Digital"
                  className="h-full w-full object-cover object-top"
                />
              </div>
              {/* Libro El Método Sísmico — 3D (misma portada que sismico.demarketing.mx) */}
              <div className="absolute -bottom-6 left-2 w-28 sm:left-4 md:-bottom-10 md:-left-10 md:w-48">
                <BookSismico />
              </div>
              <div className="absolute -top-3 -right-3 h-16 w-16 rounded-lg bg-primary/10 shadow-sm" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Formación: títulos de posgrado (logos) + certificaciones en línea (texto) */}
      <section className="bg-primary px-6 py-8">
        <div className="mx-auto max-w-[1000px]">
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-6">
            Formación de posgrado y certificaciones en línea
          </p>
          <div className="flex items-center justify-center gap-10 md:gap-14 flex-wrap mb-7">
            <img
              src="/logos/tec-logo.png"
              alt="Tecnológico de Monterrey"
              className="h-11 md:h-12 w-auto object-contain opacity-70 brightness-0 invert"
            />
            <img
              src="/logos/logo-iebs.png"
              alt="IEBS Business School"
              className="h-7 md:h-8 w-auto object-contain opacity-70 brightness-0 invert"
            />
            <img
              src="/logos/egadelogo.webp"
              alt="EGADE Business School"
              className="h-14 md:h-16 w-auto object-contain opacity-70 brightness-0 invert"
            />
          </div>
          <div className="flex items-center justify-center gap-x-8 gap-y-3 flex-wrap border-t border-white/10 pt-6">
            {onlineCreds.map((c) => (
              <span key={c} className="text-xs font-semibold text-white/45 whitespace-nowrap">{c}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="flex items-center justify-center gap-3">
                <s.icon size={40} className="shrink-0 text-primary" strokeWidth={2.25} />
                <div className="text-left">
                  <AnimatedCounter end={s.number} suffix={s.suffix} label={s.label} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Consultoría</span>
              <h2>Áreas de Especialización</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Consultoría estratégica en las áreas que más impacto generan en
                la transformación digital de tu empresa.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link href={s.href} className="block card-hover no-underline h-full">
                  <s.icon size={32} className="mb-4 text-primary" strokeWidth={1.5} />
                  <h3 className="mb-3 text-lg">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-primary">
                    Ver más <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Client results - outcomes, not quotes */}
      <section className="relative bg-surface px-6 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Resultados</span>
              <h2>Resultados de Clientes</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Empresas que profesionalizaron su estrategia digital con consultoría basada en datos.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {results.map((r, i) => (
              <FadeIn key={r.context} delay={i * 0.1}>
                <div className="card-hover h-full flex flex-col">
                  <TrendingUp size={24} className="mb-4 text-primary/30" strokeWidth={1.5} />
                  <p className="flex-1 text-base font-semibold leading-relaxed text-primary mb-6">
                    {r.result}
                  </p>
                  <p className="pt-4 border-t border-border text-xs uppercase tracking-wider text-text-muted">
                    {r.context}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me / Differentiators - replaces old "Certified Knowledge" */}
      <section className="section-navy relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl ring-1 ring-white/10">
              <img
                src="/miguel-knowledge.webp"
                alt="Miguel Cantú en conferencia de consultoría"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="section-badge section-badge-white">Por Qué Yo</span>
            <h2 className="mb-6">Lo que Enseño en el Tec, Aplicado a tu Negocio</h2>
            <p className="mb-8 text-white/60">
              Soy profesor de cátedra en el Tec de Monterrey. Llevo el mismo rigor
              que enseño en el aula, marcos probados, evidencia y método, a las
              decisiones digitales de tu empresa.
            </p>
            <div className="space-y-6">
              {differentiators.map((d, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-accent/20">
                    <CheckCircle size={16} className="text-accent" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">{d.title}</p>
                    <p className="mt-1 text-sm text-white/50">{d.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="relative px-6 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="section-badge">Herramienta Educativa</span>
              <h2>¿Tu Adquisición de Clientes es Rentable?</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Toda empresa debería saber calcular esto. Mide lo que te cuesta
                adquirir un cliente (publicidad más agencia, sin el costo de tu
                producto) y compáralo contra lo que ese cliente deja con el tiempo.
                Esa relación decide si tu marketing crece o quema dinero.
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <ROICalculator />
          </FadeIn>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="relative bg-surface px-6 py-20 overflow-hidden">
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="section-badge">Blog</span>
                <h2>Artículos Recientes</h2>
                <p className="mt-4 max-w-lg text-text-muted">
                  Estrategia digital, marketing, IA y transformación de negocios.
                </p>
              </div>
              <Link href="/blog" className="hidden md:inline-flex btn btn-outline text-sm">
                Ver todos <ArrowRight size={14} />
              </Link>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {recentPosts.map((post, i) => (
              <FadeIn key={post.slug} delay={i * 0.1}>
                <Link href={`/blog/${post.slug}`} className="block card-hover no-underline h-full">
                  {post.thumbnail && (
                    <div className="aspect-[16/9] overflow-hidden rounded-t-lg -mx-6 -mt-6 mb-5">
                      <img
                        src={post.thumbnail}
                        alt={post.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-primary mb-2">
                    {post.category}
                  </span>
                  <h3 className="text-base mb-2 line-clamp-2">{post.title}</h3>
                  <p className="text-sm text-text-muted line-clamp-2">{post.description}</p>
                  <p className="mt-3 text-xs text-text-muted">{post.readingTime} de lectura</p>
                </Link>
              </FadeIn>
            ))}
          </div>
          <div className="mt-8 text-center md:hidden">
            <Link href="/blog" className="btn btn-outline text-sm">
              Ver todos los artículos <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-[800px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Preguntas Frecuentes</span>
              <h2>Resuelve tus Dudas</h2>
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

      {/* CTA - Different visual from footer */}
      <section className="relative px-6 py-24 overflow-hidden">
        <div className="relative mx-auto max-w-[800px] text-center">
          <FadeIn>
            <span className="section-badge">Hablemos</span>
            <h2 className="mb-6">¿Listo para Crecer con Estrategia Digital?</h2>
            <p className="mx-auto mb-10 max-w-lg text-text-muted leading-relaxed">
              Agenda un diagnóstico sin compromiso. Hablemos de dónde está tu
              empresa hoy y diseñemos juntos el camino hacia donde quieres llegar.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contacto" className="btn btn-primary">
                Agendar diagnóstico
                <ArrowRight size={16} />
              </Link>
              <Link href="/sobre-mi" className="btn btn-outline">
                Conocer mi Trayectoria
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
