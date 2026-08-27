import './GuaranteeBadge.css';

/**
 * Guarantee badge — all elements geometrically verified to sit inside r=56.
 *
 * viewBox 120×120, center (60,60), outer circle r=56 → bottom y=116, top y=4.
 *
 * At each text's y, the circle half-width = √(56²–(y–60)²).
 * Every text was checked against this before placing.
 */
export default function GuaranteeBadge({ size = 'lg' }) {
  return (
    <div className={`guarantee-badge guarantee-badge--${size}`} aria-label="60-Day Money-Back Guarantee">
      <svg
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="guarantee-badge__svg"
        aria-hidden="true"
      >
        {/* ── Rings ─────────────────────────────────────── */}
        <circle cx="60" cy="60" r="56" fill="#f4efe6" stroke="#2c4a3e" strokeWidth="2.5"/>
        <circle cx="60" cy="60" r="50" stroke="#7a9e8e" strokeWidth="0.9" strokeDasharray="3 3"/>
        <circle cx="60" cy="60" r="44" stroke="#c8a030" strokeWidth="0.7" opacity="0.5"/>

        {/* ── Large "60" — top focal element ────────────── */}
        {/* y=38 → circle half-w ≈51px; "60" at size 28 ≈28px wide. Fits easily. */}
        <text
          x="60" y="38"
          textAnchor="middle"
          fontFamily="Georgia, serif"
          fontSize="28"
          fontWeight="700"
          fill="#1e3329"
        >
          60
        </text>

        {/* ── Separator ─────────────────────────────────── */}
        {/* at y=44, half-w≈49px */}
        <line x1="28" y1="44" x2="92" y2="44" stroke="#d8d1c7" strokeWidth="0.8"/>

        {/* ── Shield ────────────────────────────────────── */}
        {/* centered at x=60, y range 49–83 — well inside the circle */}
        <path
          d="M60,49 L74,56 L74,71 Q74,82 60,87 Q46,82 46,71 L46,56 Z"
          fill="#2c4a3e"
        />
        {/* Checkmark */}
        <path
          d="M52,68 L58,75 L69,60"
          stroke="#f4efe6"
          strokeWidth="2.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />

        {/* ── Separator ─────────────────────────────────── */}
        {/* at y=92, half-w≈44px */}
        <line x1="28" y1="92" x2="92" y2="92" stroke="#d8d1c7" strokeWidth="0.8"/>

        {/* ── "MONEY-BACK" ──────────────────────────────── */}
        {/*
            y=101 → half-w = √(56²–41²) = √(3136–1681) = √1455 ≈ 38px
            circle x-range: 22–98
            text width at size 6, ls 1: ≈10×3.3+9×1 = 42px → 39–81. Fits ✓
        */}
        <text
          x="60" y="101"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="6"
          fontWeight="700"
          fill="#2c4a3e"
          letterSpacing="1"
        >
          MONEY-BACK
        </text>

        {/* ── "GUARANTEE" ───────────────────────────────── */}
        {/*
            y=110 → half-w = √(56²–50²) = √(3136–2500) = √636 ≈ 25px
            circle x-range: 35–85
            text width at size 6, ls 1: ≈9×3.3+8×1 = 37.7px → 41.15–78.85. Fits ✓
            baseline at y=110, bottom of glyphs ≈y=111, circle bottom=116. Fits ✓
        */}
        <text
          x="60" y="110"
          textAnchor="middle"
          fontFamily="Arial, sans-serif"
          fontSize="6"
          fontWeight="700"
          fill="#7a9e8e"
          letterSpacing="1"
        >
          GUARANTEE
        </text>
      </svg>
    </div>
  );
}
