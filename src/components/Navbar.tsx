"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, ChevronDown, Target, TrendingUp, BarChart3, Brain } from "lucide-react";

const serviceLinks = [
  {
    href: "/consultoria/marketing-digital",
    label: "Marketing Digital",
    icon: Target,
    description: "SEO, campanas, contenido y analitica para generar demanda real.",
  },
  {
    href: "/consultoria/transformacion-digital",
    label: "Transformacion Digital",
    icon: TrendingUp,
    description: "Hoja de ruta para llevar tu empresa al siguiente nivel digital.",
  },
  {
    href: "/consultoria/estrategia-digital",
    label: "Estrategia Digital",
    icon: BarChart3,
    description: "Alineacion de tecnologia, procesos y personas.",
  },
  {
    href: "/consultoria/inteligencia-artificial",
    label: "Inteligencia Artificial",
    icon: Brain,
    description: "IA aplicada a procesos, datos y decisiones de negocio.",
  },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeService, setActiveService] = useState(0);

  return (
    <nav className="sticky top-0 z-50 bg-surface shadow-[0_2px_16px_rgba(5,28,44,0.08)]">
      <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="font-heading text-2xl font-bold text-primary no-underline tracking-tight"
        >
          Miguel Cantu, MBA, MBD
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-7 lg:flex">
          <Link href="/" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Home
          </Link>

          {/* Mega menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => { setDropdownOpen(false); setActiveService(0); }}
          >
            <button className="flex items-center gap-1 text-sm font-medium text-primary transition-colors hover:text-accent">
              Consultoria
              <ChevronDown size={14} className={`transition-transform duration-200 ${dropdownOpen ? "rotate-180" : ""}`} />
            </button>

            {dropdownOpen && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full pt-3">
                <div className="bg-surface border border-border shadow-lg w-[560px] grid grid-cols-[200px_1fr]">
                  {/* Left - Service list */}
                  <div className="border-r border-border py-2">
                    {serviceLinks.map((l, i) => (
                      <Link
                        key={l.href}
                        href={l.href}
                        onMouseEnter={() => setActiveService(i)}
                        className={`block px-5 py-3 text-sm no-underline transition-all ${
                          activeService === i
                            ? "bg-accent-light text-accent font-semibold"
                            : "text-primary hover:bg-accent-light/50"
                        }`}
                      >
                        {l.label}
                      </Link>
                    ))}
                  </div>

                  {/* Right - Preview */}
                  <div className="p-6 flex flex-col justify-center">
                    <div className="mb-3 inline-flex items-center justify-center w-12 h-12 bg-accent-light">
                      {(() => {
                        const Icon = serviceLinks[activeService].icon;
                        return <Icon size={24} className="text-accent" strokeWidth={1.5} />;
                      })()}
                    </div>
                    <h4 className="text-base font-semibold text-primary mb-2">
                      {serviceLinks[activeService].label}
                    </h4>
                    <p className="text-sm text-text-muted leading-relaxed mb-4">
                      {serviceLinks[activeService].description}
                    </p>
                    <Link
                      href={serviceLinks[activeService].href}
                      className="text-xs font-semibold uppercase tracking-wider text-accent no-underline hover:underline"
                    >
                      Ver mas →
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link href="/sobre-mi" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Sobre mi
          </Link>
          <Link href="/blog" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Blog
          </Link>
          <Link href="/contacto" className="text-sm font-medium text-primary no-underline transition-colors hover:text-accent">
            Contacto
          </Link>
          <Link href="/contacto" className="btn btn-primary text-xs py-2.5 px-5">
            Agendar Consulta
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setOpen(!open)} className="text-primary lg:hidden" aria-label="Menu">
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-surface px-6 py-4 lg:hidden">
          <Link href="/" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Home
          </Link>
          <div className="border-b border-border py-2">
            <p className="py-2 text-xs font-semibold uppercase tracking-wider text-text-muted">Consultoria</p>
            {serviceLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 py-2.5 pl-2 text-sm text-primary no-underline hover:text-accent"
              >
                <l.icon size={16} className="text-accent" strokeWidth={1.5} />
                {l.label}
              </Link>
            ))}
          </div>
          <Link href="/sobre-mi" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Sobre mi
          </Link>
          <Link href="/blog" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Blog
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className="block py-3 text-sm font-medium text-primary no-underline border-b border-border">
            Contacto
          </Link>
          <Link href="/contacto" onClick={() => setOpen(false)} className="btn btn-primary mt-4 w-full text-xs">
            Agendar Consulta
          </Link>
        </div>
      )}
    </nav>
  );
}
