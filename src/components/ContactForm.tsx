"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const WORKER_URL = "https://contact-form.miguel-28a.workers.dev";

const COMPANY_SIZES = ["Hasta 10", "20 a 40", "50 o más"];

export default function ContactForm() {
  const router = useRouter();
  const [sending, setSending] = useState(false);
  const [error, setError] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setError("");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      nombre: formData.get("name") as string,
      whatsapp: formData.get("whatsapp") as string,
      email: formData.get("email") as string,
      empresa: formData.get("empresa") as string,
      tamanoEmpresa: formData.get("companySize") as string,
      mensaje: formData.get("message") as string,
      origen: "miguelcantu.mba",
    };

    try {
      const res = await fetch(WORKER_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Error al enviar el mensaje");
      }

      router.push("/gracias");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Error al enviar. Intenta de nuevo.");
      setSending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
            Nombre
          </label>
          <input id="name" name="name" type="text" required className="input-minimal" placeholder="Tu nombre" />
        </div>
        <div>
          <label htmlFor="whatsapp" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
            WhatsApp
          </label>
          <input id="whatsapp" name="whatsapp" type="tel" required className="input-minimal" placeholder="+52 81 1234 5678" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="email" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
            Correo
          </label>
          <input id="email" name="email" type="email" required className="input-minimal" placeholder="tu@empresa.com" />
        </div>
        <div>
          <label htmlFor="empresa" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
            Empresa
          </label>
          <input id="empresa" name="empresa" type="text" required className="input-minimal" placeholder="Nombre de tu empresa" />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
          Tamaño de empresa
        </label>
        <div className="grid grid-cols-3 gap-2">
          {COMPANY_SIZES.map((opt, i) => (
            <label key={opt} className="cursor-pointer">
              <input type="radio" name="companySize" value={opt} required={i === 0} className="peer sr-only" />
              <span className="block border border-border px-3 py-2.5 text-center text-sm text-primary transition-all hover:border-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:text-white">
                {opt}
              </span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-primary">
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="input-minimal resize-none"
          placeholder="Cuéntame brevemente sobre tu empresa y qué necesitas..."
        />
      </div>

      {error && <p className="text-sm text-red-600">{error}</p>}

      <button type="submit" disabled={sending} className="btn btn-primary w-full sm:w-auto disabled:opacity-50">
        {sending ? "Enviando..." : "Agendar diagnóstico gratuito"}
      </button>
    </form>
  );
}
