/** Emblema de la casa: vinilo + tijera + navaja fusionados.
 * SVG propio en paleta de marca (tinta/hueso/volt). Decorativo.
 */
export default function HeroEmblem() {
  return (
    <svg
      viewBox="0 0 400 400"
      role="img"
      aria-label="Emblema: vinilo con tijera de barbero y navaja cruzadas"
      className="h-auto w-full"
    >
      {/* Vinilo */}
      <circle cx="200" cy="200" r="150" fill="#141416" stroke="#D7FF3F" strokeWidth="5" />
      <circle cx="200" cy="200" r="132" fill="none" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="120" fill="none" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="108" fill="none" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="1.5" />
      <circle cx="200" cy="200" r="96" fill="none" stroke="#F4F1EA" strokeOpacity="0.14" strokeWidth="1.5" />

      {/* Navaja en diagonal (detrás) */}
      <g transform="rotate(-14 200 200)">
        <rect x="72" y="196" width="118" height="26" rx="13" fill="#0A0A0B" stroke="#F4F1EA" strokeWidth="7" />
        <polygon points="190,192 306,182 306,222 190,226" fill="#F4F1EA" />
        <line x1="206" y1="198" x2="292" y2="192" stroke="#FF4D00" strokeWidth="5" strokeLinecap="round" />
        <circle cx="92" cy="209" r="5" fill="#D7FF3F" />
      </g>

      {/* Tijera vertical (delante) */}
      <g stroke="#F4F1EA" strokeWidth="13" strokeLinecap="round" fill="none">
        <line x1="200" y1="192" x2="152" y2="66" />
        <line x1="200" y1="192" x2="248" y2="66" />
        <line x1="200" y1="192" x2="168" y2="296" />
        <line x1="200" y1="192" x2="232" y2="296" />
      </g>
      <circle cx="158" cy="318" r="21" fill="none" stroke="#F4F1EA" strokeWidth="10" />
      <circle cx="242" cy="318" r="21" fill="none" stroke="#F4F1EA" strokeWidth="10" />
      <circle cx="200" cy="192" r="12" fill="#D7FF3F" stroke="#0A0A0B" strokeWidth="4" />

      {/* Destellos */}
      <g fill="#D7FF3F">
        <path d="M84,84 c1.5,-8 3,-9.5 11,-11 c-8,-1.5 -9.5,-3 -11,-11 c-1.5,8 -3,9.5 -11,11 c8,1.5 9.5,3 11,11 Z" />
        <path d="M322,96 c1.2,-6.5 2.4,-7.7 9,-9 c-6.6,-1.2 -7.8,-2.4 -9,-9 c-1.2,6.6 -2.4,7.8 -9,9 c6.6,1.3 7.8,2.5 9,9 Z" />
        <path d="M330,296 c1.2,-6.5 2.4,-7.7 9,-9 c-6.6,-1.2 -7.8,-2.4 -9,-9 c-1.2,6.6 -2.4,7.8 -9,9 c6.6,1.3 7.8,2.5 9,9 Z" />
      </g>
    </svg>
  );
}
