import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Politica de Privacidad",
  description: "Politica de privacidad de Miguel Cantu. Conoce como recopilamos, usamos y protegemos tu informacion personal.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <div className="page-header">
        <h1>Politica de Privacidad</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Politica de Privacidad</span>
        </p>
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] prose-legal">
          <p className="text-sm text-text-muted mb-8">Ultima actualizacion: Abril 2026</p>

          <h2>1. Informacion que Recopilamos</h2>
          <p>En miguelcantu.mba recopilamos informacion personal que nos proporcionas voluntariamente cuando:</p>
          <ul>
            <li>Completas el formulario de contacto (nombre, email, empresa, mensaje)</li>
            <li>Te suscribes a nuestro newsletter (email)</li>
            <li>Interactuas con nuestros demos interactivos (datos anonimos de uso)</li>
          </ul>
          <p>Tambien recopilamos automaticamente informacion tecnica como tu direccion IP, tipo de navegador, paginas visitadas y tiempo de permanencia a traves de herramientas de analitica.</p>

          <h2>2. Uso de la Informacion</h2>
          <p>Utilizamos tu informacion para:</p>
          <ul>
            <li>Responder a tus consultas y solicitudes de contacto</li>
            <li>Enviarte contenido relevante si te suscribes al newsletter</li>
            <li>Mejorar la experiencia de navegacion en nuestro sitio web</li>
            <li>Analizar el rendimiento del sitio y optimizar su contenido</li>
          </ul>

          <h2>3. Cookies y Tecnologias de Seguimiento</h2>
          <p>Utilizamos cookies y tecnologias similares para:</p>
          <ul>
            <li>Recordar tus preferencias de navegacion</li>
            <li>Analizar el trafico del sitio web mediante Google Analytics</li>
            <li>Mejorar la funcionalidad del sitio</li>
          </ul>
          <p>Puedes desactivar las cookies en la configuracion de tu navegador, aunque esto puede afectar la funcionalidad del sitio.</p>

          <h2>4. Comparticion de Datos</h2>
          <p>No vendemos, alquilamos ni compartimos tu informacion personal con terceros, excepto:</p>
          <ul>
            <li>Proveedores de servicios tecnicos necesarios para operar el sitio (hosting, email)</li>
            <li>Cuando sea requerido por ley o autoridad competente</li>
            <li>Para proteger nuestros derechos legales</li>
          </ul>

          <h2>5. Seguridad de los Datos</h2>
          <p>Implementamos medidas de seguridad tecnicas y organizativas para proteger tu informacion personal contra acceso no autorizado, alteracion, divulgacion o destruccion.</p>

          <h2>6. Tus Derechos</h2>
          <p>De acuerdo con la legislacion aplicable, tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la eliminacion de tus datos</li>
            <li>Oponerte al tratamiento de tus datos</li>
            <li>Solicitar la portabilidad de tus datos</li>
          </ul>
          <p>Para ejercer estos derechos, contactanos a <strong>contacto@miguelcantu.mba</strong>.</p>

          <h2>7. Retencion de Datos</h2>
          <p>Conservamos tu informacion personal unicamente durante el tiempo necesario para cumplir con los fines para los que fue recopilada, o segun lo requiera la ley.</p>

          <h2>8. Cambios a esta Politica</h2>
          <p>Nos reservamos el derecho de actualizar esta politica de privacidad en cualquier momento. Los cambios se publicaran en esta pagina con la fecha de actualizacion correspondiente.</p>

          <h2>9. Contacto</h2>
          <p>Si tienes preguntas sobre esta politica de privacidad, contactanos:</p>
          <ul>
            <li>Email: contacto@miguelcantu.mba</li>
            <li>Ubicacion: Monterrey, Nuevo Leon, Mexico</li>
          </ul>
        </div>
      </section>
    </>
  );
}
