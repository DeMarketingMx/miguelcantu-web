import type { Metadata } from "next";
import Link from "next/link";
import { Mail, MapPin, Clock, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta con Miguel Cantu. Transformacion digital estrategica para tu empresa.",
};

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "contacto@miguelcantu.mba",
  },
  {
    icon: Phone,
    title: "Telefono",
    value: "+52 (81) XXXX-XXXX",
  },
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
            <h3 className="mb-6 text-xl">Envia tu Mensaje</h3>
            <form className="space-y-5">
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    Nombre
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="input-minimal"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary"
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="input-minimal"
                    placeholder="tu@empresa.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  Asunto
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="input-minimal"
                  placeholder="Asunto de tu mensaje"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary"
                >
                  Mensaje
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="input-minimal resize-none"
                  placeholder="Cuentame sobre tu proyecto..."
                />
              </div>

              <button type="submit" className="btn btn-primary w-full sm:w-auto">
                Enviar Mensaje
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
