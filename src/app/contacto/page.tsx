import type { Metadata } from "next";
import { Mail, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Agenda una consulta con Miguel Cantu. Transformacion digital estrategica para tu empresa.",
};

export default function Contacto() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-[800px]">
        <p className="mb-4 text-sm font-semibold uppercase tracking-wider text-accent">
          Contacto
        </p>
        <h1 className="mb-4">Hablemos</h1>
        <p className="mb-12 max-w-lg text-lg text-text-muted">
          ¿Tienes un proyecto de transformacion digital en mente? Agenda una
          consulta sin compromiso.
        </p>

        {/* Contact form */}
        <form className="space-y-6 rounded-[var(--radius-xl)] bg-surface p-8 shadow-md">
          <div className="grid gap-6 sm:grid-cols-2">
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-primary"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
                placeholder="tu@empresa.com"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="company"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Empresa
            </label>
            <input
              id="company"
              name="company"
              type="text"
              className="w-full rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
              placeholder="Nombre de tu empresa"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="mb-2 block text-sm font-semibold text-primary"
            >
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              className="w-full resize-none rounded-[var(--radius-md)] border border-border bg-background px-4 py-3 text-sm text-primary outline-none transition-colors focus:border-accent"
              placeholder="Cuentame sobre tu proyecto o necesidad..."
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-[var(--radius-md)] bg-accent px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-accent-hover sm:w-auto"
          >
            Enviar mensaje
          </button>
        </form>

        {/* Contact info */}
        <div className="mt-12 flex flex-col gap-6 sm:flex-row sm:gap-12">
          <div className="flex items-start gap-3">
            <Mail size={20} className="mt-0.5 text-accent" />
            <div>
              <p className="text-sm font-semibold text-primary">Email</p>
              <p className="text-sm text-text-muted">contacto@miguelcantu.mba</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin size={20} className="mt-0.5 text-accent" />
            <div>
              <p className="text-sm font-semibold text-primary">Ubicacion</p>
              <p className="text-sm text-text-muted">Monterrey, Mexico</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
