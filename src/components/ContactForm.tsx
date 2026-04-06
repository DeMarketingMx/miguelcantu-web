"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const WORKER_URL = "https://contact-form.miguel-28a.workers.dev";

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
      email: formData.get("email") as string,
      empresa: formData.get("subject") as string,
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
          Empresa / Asunto
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          className="input-minimal"
          placeholder="Tu empresa o asunto"
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

      {error && (
        <p className="text-sm text-red-600">{error}</p>
      )}

      <button
        type="submit"
        disabled={sending}
        className="btn btn-primary w-full sm:w-auto disabled:opacity-50"
      >
        {sending ? "Enviando..." : "Enviar Mensaje"}
      </button>
    </form>
  );
}
