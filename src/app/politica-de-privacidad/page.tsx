import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Miguel Cantú. Conoce cómo recopilamos, usamos y protegemos tu información personal.",
};

export default function PoliticaPrivacidad() {
  return (
    <>
      <div className="page-header">
        <h1>Política de Privacidad</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Política de Privacidad</span>
        </p>
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] prose-legal">
          <p className="text-sm text-text-muted mb-8">Última actualización: Abril 2026</p>

          <h2>1. Información que Recopilamos</h2>
          <p>En miguelcantu.mba recopilamos información personal que nos proporcionas voluntariamente cuando:</p>
          <ul>
            <li>Completas el formulario de contacto (nombre, email, empresa, mensaje)</li>
            <li>Te suscribes a nuestro newsletter (email)</li>
            <li>Interactúas con nuestros demos interactivos (datos anónimos de uso)</li>
          </ul>
          <p>También recopilamos automáticamente información técnica como tu dirección IP, tipo de navegador, páginas visitadas y tiempo de permanencia a través de herramientas de analítica.</p>

          <h2>2. Uso de la Información</h2>
          <p>Utilizamos tu información para:</p>
          <ul>
            <li>Responder a tus consultas y solicitudes de contacto</li>
            <li>Enviarte contenido relevante si te suscribes al newsletter</li>
            <li>Mejorar la experiencia de navegación en nuestro sitio web</li>
            <li>Analizar el rendimiento del sitio y optimizar su contenido</li>
          </ul>

          <h2>3. Cookies y Tecnologías de Seguimiento</h2>
          <p>Utilizamos cookies y tecnologías similares para:</p>
          <ul>
            <li>Recordar tus preferencias de navegación</li>
            <li>Analizar el tráfico del sitio web mediante Google Analytics</li>
            <li>Mejorar la funcionalidad del sitio</li>
          </ul>
          <p>Puedes desactivar las cookies en la configuración de tu navegador, aunque esto puede afectar la funcionalidad del sitio.</p>

          <h2>4. Compartición de Datos</h2>
          <p>No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto:</p>
          <ul>
            <li>Proveedores de servicios técnicos necesarios para operar el sitio (hosting, email)</li>
            <li>Cuando sea requerido por ley o autoridad competente</li>
            <li>Para proteger nuestros derechos legales</li>
          </ul>

          <h2>5. Seguridad de los Datos</h2>
          <p>Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra acceso no autorizado, alteración, divulgación o destrucción.</p>

          <h2>6. Tus Derechos</h2>
          <p>De acuerdo con la legislación aplicable, tienes derecho a:</p>
          <ul>
            <li>Acceder a tus datos personales</li>
            <li>Rectificar datos inexactos</li>
            <li>Solicitar la eliminación de tus datos</li>
            <li>Oponerte al tratamiento de tus datos</li>
            <li>Solicitar la portabilidad de tus datos</li>
          </ul>
          <p>Para ejercer estos derechos, contáctanos a <strong>contacto@miguelcantu.mba</strong>.</p>

          <h2>7. Retención de Datos</h2>
          <p>Conservamos tu información personal únicamente durante el tiempo necesario para cumplir con los fines para los que fue recopilada, o según lo requiera la ley.</p>

          <h2>8. Cambios a esta Política</h2>
          <p>Nos reservamos el derecho de actualizar esta política de privacidad en cualquier momento. Los cambios se publicarán en esta página con la fecha de actualización correspondiente.</p>

          <h2>9. Contacto</h2>
          <p>Si tienes preguntas sobre esta política de privacidad, contáctanos:</p>
          <ul>
            <li>Email: contacto@miguelcantu.mba</li>
            <li>Ubicación: Monterrey, Nuevo León, México</li>
          </ul>
        </div>
      </section>
    </>
  );
}
