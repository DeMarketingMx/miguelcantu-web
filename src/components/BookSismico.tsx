/**
 * Libro "El Método Sísmico" en 3D — misma portada y formato que
 * sismico.demarketing.mx (SVG autocontenido). Puro CSS, sin JS.
 */
export function BookSismico() {
  return (
    <div className="book3d">
      <div className="book3d__inner">
        <span className="book3d__pages" aria-hidden="true" />
        <div className="book3d__cover">
          <svg
            viewBox="0 0 800 1200"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Portada del libro El Método Sísmico, de Miguel Cantú"
          >
            <defs>
              <radialGradient id="epi-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#9be564" stopOpacity="0.55" />
                <stop offset="45%" stopColor="#9be564" stopOpacity="0.18" />
                <stop offset="100%" stopColor="#9be564" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect width="800" height="1200" fill="#fafafa" />
            <circle cx="600" cy="860" r="40" fill="none" stroke="#16273f" strokeWidth="1.5" strokeOpacity="0.85" />
            <circle cx="600" cy="860" r="95" fill="none" stroke="#9be564" strokeWidth="2.2" strokeOpacity="1" />
            <circle cx="600" cy="860" r="160" fill="none" stroke="#16273f" strokeWidth="1.2" strokeOpacity="0.55" />
            <circle cx="600" cy="860" r="235" fill="none" stroke="#9be564" strokeWidth="1.8" strokeOpacity="0.95" />
            <circle cx="600" cy="860" r="320" fill="none" stroke="#9be564" strokeWidth="1.3" strokeOpacity="0.78" />
            <circle cx="600" cy="860" r="415" fill="none" stroke="#16273f" strokeWidth="1" strokeOpacity="0.4" />
            <circle cx="600" cy="860" r="520" fill="none" stroke="#9be564" strokeWidth="1.3" strokeOpacity="0.62" />
            <circle cx="600" cy="860" r="635" fill="none" stroke="#9be564" strokeWidth="1" strokeOpacity="0.42" />
            <circle cx="600" cy="860" r="760" fill="none" stroke="#16273f" strokeWidth="0.9" strokeOpacity="0.22" />
            <circle cx="600" cy="860" r="895" fill="none" stroke="#9be564" strokeWidth="1" strokeOpacity="0.3" />
            <circle cx="600" cy="860" r="120" fill="url(#epi-glow)" />
            <circle cx="407" cy="725" r="4.5" fill="#16273f" />
            <circle cx="291" cy="777" r="4.5" fill="#9be564" stroke="#16273f" strokeWidth="1" />
            <circle cx="362" cy="520" r="4.5" fill="#16273f" />
            <circle cx="545" cy="710" r="4.5" fill="#9be564" stroke="#16273f" strokeWidth="1" />
            <circle cx="150" cy="600" r="4.5" fill="#16273f" />
            <circle cx="501" cy="556" r="4.5" fill="#9be564" stroke="#16273f" strokeWidth="1" />
            <circle cx="600" cy="860" r="7" fill="#9be564" />
            <circle cx="600" cy="860" r="14" fill="none" stroke="#9be564" strokeWidth="2" />
            <text x="72" y="124" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="600" letterSpacing="6.7" fill="#808187">DE MARKETING</text>
            <text x="70" y="238" fontFamily="Inter, sans-serif" fontSize="108" fontWeight="900" letterSpacing="-3.2" fill="#16273f">EL MÉTODO</text>
            <text x="70" y="337" fontFamily="Inter, sans-serif" fontSize="108" fontWeight="900" letterSpacing="-3.2" fill="#16273f">SÍSMICO</text>
            <text x="73" y="430" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="400" fill="#808187">Cómo convertir el marketing</text>
            <text x="73" y="467" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="400" fill="#808187">improvisado en una práctica de</text>
            <text x="73" y="504" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="400" fill="#808187">adquisición de clientes</text>
            <text x="73" y="541" fontFamily="Inter, sans-serif" fontSize="26" fontWeight="400" fill="#808187">sistematizada.</text>
            <rect x="73" y="1054" width="56" height="4" fill="#9be564" />
            <text x="73" y="1102" fontFamily="Inter, sans-serif" fontSize="30" fontWeight="700" letterSpacing="4.8" fill="#16273f">MIGUEL CANTÚ</text>
          </svg>
        </div>
        <span className="book3d__spine" aria-hidden="true" />
      </div>
    </div>
  );
}
