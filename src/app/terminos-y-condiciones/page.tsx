import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Términos y Condiciones",
  description: "Términos y condiciones de uso del sitio web miguelcantu.mba.",
};

export default function TerminosCondiciones() {
  return (
    <>
      <div className="page-header">
        <h1>Términos y Condiciones</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Términos y Condiciones</span>
        </p>
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] prose-legal">
          <p className="text-sm text-text-muted mb-8">Última actualización: Abril 2026</p>

          <h2>1. Aceptación de los Términos</h2>
          <p>Al acceder y utilizar el sitio web miguelcantu.mba, aceptas estar sujeto a estos términos y condiciones de uso. Si no estás de acuerdo con alguno de estos términos, te pedimos no utilizar este sitio.</p>

          <h2>2. Uso del Sitio</h2>
          <p>Este sitio web es de carácter informativo y tiene como objetivo presentar los servicios de consultoría de Miguel Cantú. Te comprometes a:</p>
          <ul>
            <li>Utilizar el sitio únicamente para fines legales y de acuerdo con estos términos</li>
            <li>No intentar acceder a áreas restringidas del sitio sin autorización</li>
            <li>No utilizar el sitio de manera que pueda dañarlo, deshabilitarlo o sobrecargarlo</li>
            <li>No recopilar información de otros usuarios sin su consentimiento</li>
          </ul>

          <h2>3. Propiedad Intelectual</h2>
          <p>Todo el contenido de este sitio web, incluyendo pero no limitado a textos, imágenes, gráficos, logotipos, iconos, software y diseño, es propiedad de Miguel Cantú o se utiliza con la debida autorización.</p>
          <p>Queda prohibida la reproducción, distribución, modificación o uso comercial del contenido sin autorización previa por escrito.</p>

          <h2>4. Servicios de Consultoría</h2>
          <p>La información sobre servicios presentada en este sitio es de carácter general e informativo. Los términos específicos de cualquier servicio de consultoría se establecerán en un contrato independiente entre las partes.</p>

          <h2>5. Demos Interactivos</h2>
          <p>Los demos interactivos disponibles en este sitio (calculadoras, simuladores, assessments) son herramientas ilustrativas. Los resultados generados son estimaciones basadas en datos genéricos y no constituyen asesoría profesional.</p>

          <h2>6. Enlaces a Terceros</h2>
          <p>Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, políticas de privacidad o prácticas de sitios externos.</p>

          <h2>7. Limitación de Responsabilidad</h2>
          <p>El contenido de este sitio se proporciona "tal cual" sin garantías de ningún tipo. Miguel Cantú no será responsable por daños directos, indirectos, incidentales o consecuentes derivados del uso de este sitio.</p>

          <h2>8. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en esta página.</p>

          <h2>9. Legislación Aplicable</h2>
          <p>Estos términos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa será sometida a la jurisdicción de los tribunales competentes de Monterrey, Nuevo León, México.</p>

          <h2>10. Contacto</h2>
          <p>Para cualquier consulta sobre estos términos, contáctanos:</p>
          <ul>
            <li>Email: contacto@miguelcantu.mba</li>
            <li>Ubicación: Monterrey, Nuevo León, México</li>
          </ul>
        </div>
      </section>
    </>
  );
}
