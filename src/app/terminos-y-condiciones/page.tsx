import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terminos y Condiciones",
  description: "Terminos y condiciones de uso del sitio web miguelcantu.mba.",
};

export default function TerminosCondiciones() {
  return (
    <>
      <div className="page-header">
        <h1>Terminos y Condiciones</h1>
        <p className="breadcrumb">
          <Link href="/">Home</Link>
          <span className="mx-2">/</span>
          <span>Terminos y Condiciones</span>
        </p>
      </div>

      <section className="px-6 py-16">
        <div className="mx-auto max-w-[800px] prose-legal">
          <p className="text-sm text-text-muted mb-8">Ultima actualizacion: Abril 2026</p>

          <h2>1. Aceptacion de los Terminos</h2>
          <p>Al acceder y utilizar el sitio web miguelcantu.mba, aceptas estar sujeto a estos terminos y condiciones de uso. Si no estas de acuerdo con alguno de estos terminos, te pedimos no utilizar este sitio.</p>

          <h2>2. Uso del Sitio</h2>
          <p>Este sitio web es de caracter informativo y tiene como objetivo presentar los servicios de consultoria de Miguel Cantu. Te comprometes a:</p>
          <ul>
            <li>Utilizar el sitio unicamente para fines legales y de acuerdo con estos terminos</li>
            <li>No intentar acceder a areas restringidas del sitio sin autorizacion</li>
            <li>No utilizar el sitio de manera que pueda danarlo, deshabilitarlo o sobrecargarlo</li>
            <li>No recopilar informacion de otros usuarios sin su consentimiento</li>
          </ul>

          <h2>3. Propiedad Intelectual</h2>
          <p>Todo el contenido de este sitio web, incluyendo pero no limitado a textos, imagenes, graficos, logotipos, iconos, software y diseno, es propiedad de Miguel Cantu o se utiliza con la debida autorizacion.</p>
          <p>Queda prohibida la reproduccion, distribucion, modificacion o uso comercial del contenido sin autorizacion previa por escrito.</p>

          <h2>4. Servicios de Consultoria</h2>
          <p>La informacion sobre servicios presentada en este sitio es de caracter general e informativo. Los terminos especificos de cualquier servicio de consultoria se estableceran en un contrato independiente entre las partes.</p>

          <h2>5. Demos Interactivos</h2>
          <p>Los demos interactivos disponibles en este sitio (calculadoras, simuladores, assessments) son herramientas ilustrativas. Los resultados generados son estimaciones basadas en datos genericos y no constituyen asesoria profesional.</p>

          <h2>6. Enlaces a Terceros</h2>
          <p>Este sitio puede contener enlaces a sitios web de terceros. No somos responsables del contenido, politicas de privacidad o practicas de sitios externos.</p>

          <h2>7. Limitacion de Responsabilidad</h2>
          <p>El contenido de este sitio se proporciona "tal cual" sin garantias de ningun tipo. Miguel Cantu no sera responsable por danos directos, indirectos, incidentales o consecuentes derivados del uso de este sitio.</p>

          <h2>8. Modificaciones</h2>
          <p>Nos reservamos el derecho de modificar estos terminos en cualquier momento. Los cambios entraran en vigor inmediatamente despues de su publicacion en esta pagina.</p>

          <h2>9. Legislacion Aplicable</h2>
          <p>Estos terminos se rigen por las leyes de los Estados Unidos Mexicanos. Cualquier disputa sera sometida a la jurisdiccion de los tribunales competentes de Monterrey, Nuevo Leon, Mexico.</p>

          <h2>10. Contacto</h2>
          <p>Para cualquier consulta sobre estos terminos, contactanos:</p>
          <ul>
            <li>Email: contacto@miguelcantu.mba</li>
            <li>Ubicacion: Monterrey, Nuevo Leon, Mexico</li>
          </ul>
        </div>
      </section>
    </>
  );
}
