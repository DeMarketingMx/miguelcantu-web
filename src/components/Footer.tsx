import Link from "next/link";
import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";

const serviceLinks = [
  { href: "/consultoria/marketing-digital", label: "Marketing Digital" },
  { href: "/consultoria/transformacion-digital", label: "Transformación Digital" },
  { href: "/consultoria/estrategia-digital", label: "Estrategia Digital" },
  { href: "/consultoria/inteligencia-artificial", label: "Inteligencia Artificial" },
];

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre-mi", label: "Sobre mí" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

const legalLinks = [
  { href: "/politica-de-privacidad", label: "Política de Privacidad" },
  { href: "/terminos-y-condiciones", label: "Términos y Condiciones" },
  { href: "/aviso-legal", label: "Aviso Legal" },
];

export function Footer() {
  return (
    <footer className="bg-navy">
      {/* Main footer */}
      <div className="mx-auto max-w-[1200px] px-6 pt-16 pb-12">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="font-heading text-2xl font-extrabold text-white no-underline">
              Miguel Cantú
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-white/50">
              Consultor en marketing digital, transformación digital, estrategia
              digital e inteligencia artificial. Cuento con dos maestrías, un
              micromaster, un diplomado y múltiples certificaciones en
              transformación digital, marketing, inteligencia artificial y
              estrategia digital. Ayudo a empresas a crecer con claridad y datos.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm text-white/60">
                <Mail size={14} className="text-accent shrink-0" />
                <span>contacto@miguelcantu.mba</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-white/60">
                <MapPin size={14} className="text-accent shrink-0" />
                <span>Monterrey, México</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Consultoría
            </h4>
            <ul className="space-y-3">
              {serviceLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 no-underline transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Navegación
            </h4>
            <ul className="space-y-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 no-underline transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Newsletter */}
          <div>
            <h4 className="mb-5 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Legal
            </h4>
            <ul className="space-y-3 mb-8">
              {legalLinks.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-sm text-white/60 no-underline transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.15em] text-white/40">
              Newsletter
            </h4>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-white/5 px-3 py-2 text-xs text-white placeholder-white/30 border border-white/10 outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent px-3 py-2 text-primary transition-colors hover:bg-accent-hover"
              >
                <ArrowRight size={14} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-white/8">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col items-center justify-between gap-3 sm:flex-row">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Miguel Cantú. Todos los derechos reservados.
          </p>
          <p className="text-xs text-white/20">
            Monterrey, México
          </p>
        </div>
      </div>
    </footer>
  );
}
