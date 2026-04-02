import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center px-6 py-20">
      <div className="text-center">
        <p className="mb-2 text-6xl font-bold text-primary">404</p>
        <h1 className="mb-4 text-2xl">Pagina no encontrada</h1>
        <p className="mb-8 text-text-muted">
          La pagina que buscas no existe o fue movida.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-[var(--radius-md)] bg-accent px-6 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
        >
          <ArrowLeft size={16} />
          Volver al inicio
        </Link>
      </div>
    </section>
  );
}
