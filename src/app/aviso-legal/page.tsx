import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Aviso Legal",
  description: "Aviso legal del sitio web miguelcantu.mba. Información sobre el titular y condiciones de uso.",
};

export default function AvisoLegal() {
  return (
    <>
      <div className="page-header">
        <h1>Aviso Legal</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Aviso Legal</span>
        </p>
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] prose-legal">
          <p className="text-sm text-text-muted mb-8">Última actualización: Abril 2026</p>

          <h2>1. Datos del Titular</h2>
          <ul>
            <li><strong>Titular:</strong> Miguel Cantú</li>
            <li><strong>Actividad:</strong> Consultoría en marketing digital, transformación digital, estrategia digital e inteligencia artificial</li>
            <li><strong>Domicilio:</strong> Monterrey, Nuevo León, México</li>
            <li><strong>Email:</strong> contacto@miguelcantu.mba</li>
            <li><strong>Sitio web:</strong> www.miguelcantu.mba</li>
          </ul>

          <h2>2. Objeto del Sitio</h2>
          <p>Este sitio web tiene como finalidad informar sobre los servicios de consultoría ofrecidos por Miguel Cantú, compartir contenido educativo a través del blog y facilitar el contacto con potenciales clientes.</p>

          <h2>3. Condiciones de Acceso</h2>
          <p>El acceso a este sitio web es gratuito y no requiere registro previo, salvo para funcionalidades específicas como la suscripción al newsletter. El usuario se compromete a hacer un uso adecuado del sitio conforme a la ley, estos términos y la moral.</p>

          <h2>4. Propiedad Intelectual e Industrial</h2>
          <p>Los derechos de propiedad intelectual sobre el contenido de este sitio web (textos, imágenes, diseño, código fuente, logotipos, marcas) pertenecen a Miguel Cantú salvo que se indique lo contrario.</p>
          <p>Se permite la reproducción parcial del contenido del blog citando la fuente y enlazando al artículo original. Para cualquier otro uso, se requiere autorización previa.</p>

          <h2>5. Protección de Datos Personales</h2>
          <p>El tratamiento de datos personales se realiza de conformidad con la Ley Federal de Protección de Datos Personales en Posesión de los Particulares (LFPDPPP) de México. Para más información, consulta nuestra <Link href="/politica-de-privacidad" className="text-primary hover:underline">Política de Privacidad</Link>.</p>

          <h2>6. Responsabilidad</h2>
          <p>Miguel Cantú no se hace responsable de:</p>
          <ul>
            <li>Errores u omisiones en el contenido del sitio</li>
            <li>La disponibilidad continua e ininterrumpida del sitio</li>
            <li>Daños derivados del uso de la información publicada</li>
            <li>El contenido de sitios web externos enlazados desde este sitio</li>
          </ul>

          <h2>7. Legislación y Jurisdicción</h2>
          <p>Este aviso legal se rige por la legislación mexicana. Para la resolución de cualquier controversia, las partes se someten a la jurisdicción de los tribunales de Monterrey, Nuevo León, México.</p>

          <h2>8. Contacto</h2>
          <p>Para cualquier cuestión relacionada con este aviso legal:</p>
          <ul>
            <li>Email: contacto@miguelcantu.mba</li>
            <li>Ubicación: Monterrey, Nuevo León, México</li>
          </ul>
        </div>
      </section>
    </>
  );
}
