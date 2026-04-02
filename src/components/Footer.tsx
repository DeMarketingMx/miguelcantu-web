import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/sobre-mi", label: "Sobre mi" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

export function Footer() {
  return (
    <footer className="bg-navy text-white/70">
      <div className="mx-auto max-w-[1200px] px-6 py-16">
        <div className="grid gap-12 md:grid-cols-3">
          {/* Brand + description */}
          <div>
            <Link
              href="/"
              className="font-heading text-xl font-bold text-white no-underline"
            >
              Miguel Cantu
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Consultoria estrategica en transformacion digital para empresas que
              quieren crecer con claridad.
            </p>
            <div className="mt-6 space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail size={16} className="text-accent shrink-0" />
                <span>contacto@miguelcantu.mba</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin size={16} className="text-accent shrink-0" />
                <span>Monterrey, Mexico</span>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegacion
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

          {/* Newsletter / CTA */}
          <div>
            <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Newsletter
            </h4>
            <p className="mb-4 text-sm">
              Recibe insights sobre transformacion digital directamente en tu
              bandeja.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Tu email"
                className="flex-1 bg-white/10 px-4 py-2.5 text-sm text-white placeholder-white/40 border border-white/20 outline-none focus:border-accent"
              />
              <button
                type="submit"
                className="bg-accent px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-white transition-colors hover:bg-accent-hover"
              >
                Suscribir
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-[1200px] px-6 py-5 flex flex-col items-center justify-between gap-2 sm:flex-row">
          <p className="text-xs text-white/40">
            &copy; {new Date().getFullYear()} Miguel Cantu. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-xs text-white/40 no-underline hover:text-white/70"
            >
              Politica de Privacidad
            </Link>
            <Link
              href="#"
              className="text-xs text-white/40 no-underline hover:text-white/70"
            >
              Terminos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
