import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, Clock, CheckCircle } from "lucide-react";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta con Miguel Cantu. Transformacion digital estrategica para tu empresa.",
};

const contactInfo = [
  {
    icon: MapPin,
    title: "Ubicacion",
    value: "Monterrey, Mexico",
  },
  {
    icon: Clock,
    title: "Horario",
    value: "Lun - Vie: 9:00 - 18:00",
  },
];

export default function Contacto() {
  return (
    <>
      {/* Page Header */}
      <div className="page-header">
        <h1>Contacto</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Contacto</span>
        </p>
      </div>

      <section className="px-6 py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 md:grid-cols-2">
          {/* Left - Info */}
          <div>
            <span className="section-badge">Contacto</span>
            <h2 className="mb-4">
              Hablemos de tu Proyecto Digital
            </h2>
            <p className="mb-10 text-text-muted leading-relaxed">
              ¿Tienes un proyecto de transformacion digital en mente? Agenda una
              consulta sin compromiso y exploremos juntos las oportunidades.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {contactInfo.map((c) => (
                <div
                  key={c.title}
                  className="bg-surface p-5 shadow-sm border border-border"
                >
                  <c.icon size={24} className="mb-3 text-accent" strokeWidth={1.5} />
                  <p className="text-sm font-semibold text-primary">{c.title}</p>
                  <p className="mt-1 text-sm text-text-muted">{c.value}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-surface p-8 shadow-md">
            <h3 className="mb-2 text-xl">Agenda tu Consulta</h3>
            <p className="mb-6 text-sm text-text-muted">
              50+ empresas han confiado en mi consultoria
            </p>
            <ContactForm />

            {/* Trust indicators */}
            <div className="mt-6 space-y-2">
              {[
                "Respuesta en menos de 24 horas",
                "Sin compromiso",
                "Datos 100% confidenciales",
              ].map((text) => (
                <div key={text} className="flex items-center gap-2">
                  <CheckCircle size={16} className="shrink-0 text-accent" strokeWidth={1.5} />
                  <span className="text-xs text-text-muted">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
