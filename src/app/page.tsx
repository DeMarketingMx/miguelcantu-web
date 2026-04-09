import Link from "next/link";
import { ArrowRight, BarChart3, Target, TrendingUp, Brain, CheckCircle, GraduationCap, Award, BookOpen, Globe, Quote, ChevronDown, Users, Briefcase, LineChart, Clock } from "lucide-react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ROICalculator } from "@/components/demos/ROICalculator";
import { BackgroundPattern } from "@/components/BackgroundPattern";
import { FloatingParticles } from "@/components/FloatingParticles";
import { AnimatedBackground } from "@/components/AnimatedBackground";
import { FadeIn } from "@/components/FadeIn";
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
    title: "Transformacion Digital",
    href: "/consultoria/transformacion-digital",
    description:
      "Hoja de ruta para llevar a tu empresa al siguiente nivel digital con vision estrategica.",
  },
  {
    icon: BarChart3,
    title: "Estrategia Digital",
    href: "/consultoria/estrategia-digital",
    description:
      "Alineacion de tecnologia, procesos y personas para maximizar el impacto digital en tu negocio.",
  },
  {
    icon: Brain,
    title: "Inteligencia Artificial",
    href: "/consultoria/inteligencia-artificial",
    description:
      "Implementacion de IA para automatizar procesos, analizar datos y tomar mejores decisiones.",
  },
];

const credentials = [
  { icon: GraduationCap, title: "MBA Transformacion Digital", subtitle: "IEBS, Espana" },
  { icon: GraduationCap, title: "Maestria Analitica", subtitle: "EGADE Business School" },
  { icon: Globe, title: "Micromaster", subtitle: "Boston University" },
  { icon: Award, title: "7+ Certificaciones", subtitle: "Analitica Digital" },
  { icon: BookOpen, title: "Profesor de Catedra", subtitle: "Tec de Monterrey" },
];

const differentiators = [
  {
    title: "Estratega, No Ejecutor",
    description: "Diseño la estrategia completa. No vendo tacticas sueltas — construyo el plan que conecta marketing, datos y resultados de negocio.",
  },
  {
    title: "Datos Sobre Opiniones",
    description: "Cada recomendacion esta respaldada por analitica. GA4, CRM, dashboards — decisiones basadas en evidencia, no en intuicion.",
  },
  {
    title: "Par del C-Suite",
    description: "Hablo el idioma de directores y CEOs. Formacion de EGADE, Boston University y IEBS aplicada al mercado mexicano.",
  },
];

const institutions = [
  "EGADE Business School",
  "Boston University",
  "IEBS Espana",
  "Wharton (EdX)",
  "Tec de Monterrey",
  "Google",
];

const stats = [
  { number: 50, suffix: "+", label: "Empresas Asesoradas", icon: Briefcase },
  { number: 12, suffix: "+", label: "Anos de Experiencia", icon: Clock },
  { number: 54, suffix: "", label: "Articulos Publicados", icon: BookOpen },
  { number: 7, suffix: "+", label: "Certificaciones", icon: Award },
];

const testimonials = [
  {
    quote: "Miguel nos ayudo a estructurar toda nuestra estrategia digital. En 6 meses pasamos de no tener presencia online a generar leads consistentes.",
    name: "Director General",
    company: "Empresa Industrial, Monterrey",
    initials: "DG",
  },
  {
    quote: "Su enfoque estrategico es lo que lo diferencia. No te vende tacticas, te ayuda a pensar como CEO digital.",
    name: "VP de Marketing",
    company: "Empresa de Servicios, CDMX",
    initials: "VP",
  },
  {
    quote: "La implementacion de IA en nuestros procesos comerciales redujo el tiempo de analisis de semanas a horas. Miguel hizo la diferencia.",
    name: "CEO",
    company: "Empresa de Tecnologia, Guadalajara",
    initials: "CE",
  },
];

const faqs = [
  {
    q: "¿Que tipo de empresas asesoras?",
    a: "Trabajo principalmente con empresas medianas B2B en Mexico — industria, servicios profesionales, tecnologia. Mi cliente tipico tiene equipo de ventas y quiere profesionalizar su marketing digital.",
  },
  {
    q: "¿Cual es la diferencia entre consultoria y agencia?",
    a: "Una agencia ejecuta tacticas. Yo diseño la estrategia completa: que hacer, por que, en que orden, con que metricas. Despues superviso la ejecucion, ya sea con tu equipo interno o con mi agencia De Marketing.",
  },
  {
    q: "¿Como funciona la primera consulta?",
    a: "Agendas una llamada de 30 minutos sin compromiso. Revisamos donde esta tu empresa hoy, identificamos oportunidades rapidas y definimos si tiene sentido trabajar juntos.",
  },
  {
    q: "¿Trabajas con empresas fuera de Monterrey?",
    a: "Si. Trabajo con empresas en todo Mexico y Latinoamerica de forma remota. Las reuniones son por videollamada y la comunicacion es asincrona con herramientas digitales.",
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
        <AnimatedBackground variant="grid" />
        <FloatingParticles count={25} />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 px-6 py-20 md:grid-cols-2 md:py-28">
          <FadeIn>
            <span className="section-badge">Miguel Cantu — Consultor Estrategico</span>
            <h1 className="mb-4">Decisiones Digitales que Mueven Negocios</h1>
            <p className="mb-8 max-w-lg text-base leading-relaxed text-text-muted">
              Asesoro a directores y C-suite en marketing digital, transformacion
              digital e inteligencia artificial. Estrategia con datos, no con intuicion.
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
          </FadeIn>

          <FadeIn delay={0.2} direction="right">
            <div className="relative">
              <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-2xl ring-1 ring-black/10">
                <img
                  src="/miguel-hero.png"
                  alt="Miguel Cantu - Consultor de Transformacion Digital"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-3 -left-3 h-20 w-20 rounded-lg bg-accent shadow-lg" />
              <div className="absolute -top-3 -right-3 h-16 w-16 rounded-lg bg-primary/10 shadow-sm" />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Logo Bar / Institutional Trust */}
      <section className="bg-primary px-6 py-6">
        <div className="mx-auto max-w-[1200px]">
          <p className="text-center text-[10px] font-semibold uppercase tracking-widest text-white/30 mb-4">Formacion y credenciales de</p>
          <div className="flex items-center justify-center gap-8 md:gap-12 flex-wrap">
            {institutions.map((inst) => (
              <span key={inst} className="text-xs font-semibold text-white/50 whitespace-nowrap">{inst}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="px-6 py-16 bg-surface">
        <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.label} delay={i * 0.1}>
              <div className="text-center">
                <s.icon size={24} className="mx-auto mb-3 text-accent" strokeWidth={1.5} />
                <AnimatedCounter end={s.number} suffix={s.suffix} label={s.label} />
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="relative px-6 py-20 overflow-hidden">
        <AnimatedBackground variant="grid" />
        <FloatingParticles count={15} color="primary" />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Consultoria</span>
              <h2>Areas de Especializacion</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Consultoria estrategica en las areas que mas impacto generan en
                la transformacion digital de tu empresa.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <FadeIn key={s.title} delay={i * 0.1}>
                <Link href={s.href} className="block card-hover no-underline h-full">
                  <s.icon size={32} className="mb-4 text-accent" strokeWidth={1.5} />
                  <h3 className="mb-3 text-lg">{s.title}</h3>
                  <p className="text-sm leading-relaxed text-text-muted">{s.description}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-accent">
                    Ver mas <ArrowRight size={12} />
                  </span>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials — social proof right after claims */}
      <section className="relative bg-surface px-6 py-20 overflow-hidden">
        <FloatingParticles count={8} />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-14">
              <span className="section-badge">Testimonios</span>
              <h2>Lo que Dicen mis Clientes</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Empresas que profesionalizaron su estrategia digital con consultoria basada en datos.
              </p>
            </div>
          </FadeIn>
          <div className="grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <FadeIn key={t.initials} delay={i * 0.1}>
                <div className="card-hover h-full flex flex-col">
                  <Quote size={24} className="mb-4 text-accent/30" strokeWidth={1.5} />
                  <blockquote className="flex-1 text-sm leading-relaxed text-text-muted mb-6">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-xs font-bold text-white">
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-primary">{t.name}</p>
                      <p className="text-xs text-text-muted">{t.company}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Me / Differentiators — replaces old "Certified Knowledge" */}
      <section className="section-navy relative px-6 py-20 overflow-hidden">
        <FloatingParticles count={12} color="accent" />
        <div className="relative mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2">
          <FadeIn direction="left">
            <div className="aspect-[4/3] overflow-hidden rounded-lg shadow-xl ring-1 ring-white/10">
              <img
                src="/miguel-knowledge.png"
                alt="Miguel Cantu en conferencia de consultoria"
                className="h-full w-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <span className="section-badge section-badge-white">Por Que Yo</span>
            <h2 className="mb-6">No Soy una Agencia. Soy tu Estratega Digital.</h2>
            <p className="mb-8 text-white/60">
              Trabajo directamente con directores y CEOs. Sin intermediarios, sin juniors, sin reportes genericos.
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
        <AnimatedBackground variant="grid" />
        <FloatingParticles count={10} />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="text-center mb-10">
              <span className="section-badge">Herramienta Interactiva</span>
              <h2>Calcula el Retorno de tu Inversion en Marketing Digital</h2>
              <p className="mt-4 mx-auto max-w-lg text-text-muted">
                Selecciona tu industria y presupuesto mensual para estimar leads,
                clientes nuevos y retorno de inversion esperado.
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
        <FloatingParticles count={8} />
        <div className="relative mx-auto max-w-[1200px]">
          <FadeIn>
            <div className="flex items-end justify-between mb-14">
              <div>
                <span className="section-badge">Blog</span>
                <h2>Articulos Recientes</h2>
                <p className="mt-4 max-w-lg text-text-muted">
                  Estrategia digital, marketing, IA y transformacion de negocios.
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
                  <span className="inline-block text-[10px] font-semibold uppercase tracking-wider text-accent mb-2">
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
              Ver todos los articulos <ArrowRight size={14} />
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
        <AnimatedBackground variant="grid" />
        <FloatingParticles count={18} />
        <div className="relative mx-auto max-w-[800px] text-center">
          <FadeIn>
            <span className="section-badge">Hablemos</span>
            <h2 className="mb-6">¿Listo para Crecer con Estrategia Digital?</h2>
            <p className="mx-auto mb-10 max-w-lg text-text-muted leading-relaxed">
              Agenda una consulta sin compromiso. Hablemos de donde esta tu
              empresa hoy y disenemos juntos el camino hacia donde quieres llegar.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link href="/contacto" className="btn btn-primary">
                Agendar Consulta
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
