import './BookMockup.css';

export default function BookMockup({ title = "The Beginner's Guide to Birdwatching", size = 'lg' }) {
  return (
    <div className={`book-mockup book-mockup--${size}`} aria-label={`Digital e-book: ${title}`} role="img">
      <div className="book-mockup__cover">

        {/* ── Spine ─────────────────────────────────────── */}
        <div className="book-mockup__spine" aria-hidden="true">
          <span>HP Digital</span>
        </div>

        {/* ── Cover Illustration ─────────────────────────── */}
        <div className="book-mockup__illustration-wrap" aria-hidden="true">
          <svg
            viewBox="0 0 260 210"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="book-mockup__svg"
          >
            {/* Paper background */}
            <rect width="260" height="210" fill="#f4efe6"/>

            {/* Sky */}
            <rect width="260" height="138" fill="#d8eae3"/>

            {/* Sun / light glow */}
            <circle cx="40" cy="38" r="26" fill="#f0e4b0" opacity="0.45"/>
            <circle cx="40" cy="38" r="18" fill="#f5eda8" opacity="0.35"/>

            {/* Distant treeline */}
            <path d="M0,112 Q50,92 100,100 Q150,107 200,96 Q230,90 260,95 L260,138 L0,138 Z"
                  fill="#2c4a3e" opacity="0.16"/>
            <path d="M0,120 Q40,108 80,114 Q130,110 180,117 Q220,120 260,114 L260,138 L0,138 Z"
                  fill="#3a6354" opacity="0.13"/>

            {/* Water */}
            <rect x="0" y="140" width="260" height="70" fill="#7ab8a4" opacity="0.28"/>

            {/* Water surface ripples */}
            <path d="M8,150 Q40,147 72,150" stroke="#5a9880" strokeWidth="0.8" opacity="0.5"/>
            <path d="M90,154 Q124,151 158,154" stroke="#5a9880" strokeWidth="0.8" opacity="0.5"/>
            <path d="M188,149 Q218,146 248,149" stroke="#5a9880" strokeWidth="0.8" opacity="0.45"/>
            <path d="M18,163 Q52,160 86,163" stroke="#5a9880" strokeWidth="0.6" opacity="0.3"/>
            <path d="M166,160 Q198,157 230,160" stroke="#5a9880" strokeWidth="0.6" opacity="0.3"/>

            {/* ── Left reed cluster ── */}
            <line x1="20" y1="210" x2="17" y2="120" stroke="#5a7c5e" strokeWidth="2.5" strokeLinecap="round"/>
            <ellipse cx="17" cy="120" rx="4" ry="13" fill="#8b6840" opacity="0.72"/>
            <line x1="31" y1="210" x2="34" y2="131" stroke="#6a8c6e" strokeWidth="2" strokeLinecap="round"/>
            <ellipse cx="34" cy="131" rx="3.2" ry="10" fill="#9b7848" opacity="0.62"/>
            <line x1="12" y1="210" x2="9"  y2="142" stroke="#4a6c4e" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
            <ellipse cx="9" cy="142" rx="2.5" ry="8" fill="#8b6840" opacity="0.48"/>
            <line x1="40" y1="210" x2="43" y2="143" stroke="#5a7c5e" strokeWidth="1.5" strokeLinecap="round" opacity="0.65"/>
            <ellipse cx="43" cy="143" rx="2.5" ry="9" fill="#9b7848" opacity="0.52"/>
            <line x1="6"  y1="210" x2="4"  y2="158" stroke="#3a5c3e" strokeWidth="1.2" strokeLinecap="round" opacity="0.38"/>

            {/* ── Right reed cluster ── */}
            <line x1="240" y1="210" x2="238" y2="138" stroke="#5a7c5e" strokeWidth="2" strokeLinecap="round" opacity="0.68"/>
            <ellipse cx="238" cy="138" rx="3.2" ry="10" fill="#8b6840" opacity="0.58"/>
            <line x1="250" y1="210" x2="253" y2="148" stroke="#6a8c6e" strokeWidth="1.5" strokeLinecap="round" opacity="0.58"/>
            <ellipse cx="253" cy="148" rx="2.5" ry="8" fill="#9b7848" opacity="0.5"/>
            <line x1="258" y1="210" x2="260" y2="158" stroke="#4a6c4e" strokeWidth="1.2" strokeLinecap="round" opacity="0.45"/>

            {/* ── Great Blue Heron ── */}

            {/* Legs */}
            <line x1="158" y1="188" x2="152" y2="210" stroke="#7a6040" strokeWidth="2.5" strokeLinecap="round"/>
            <line x1="167" y1="188" x2="170" y2="210" stroke="#7a6040" strokeWidth="2.5" strokeLinecap="round"/>
            {/* Knee hint */}
            <circle cx="152.5" cy="203" r="2.2" fill="#7a6040"/>
            <circle cx="170" cy="204" r="2.2" fill="#7a6040"/>
            {/* Feet */}
            <path d="M152,210 L139,214 M152,210 L149,217 M152,210 L158,213"
                  stroke="#7a6040" strokeWidth="1.8" strokeLinecap="round"/>
            <path d="M170,210 L158,214 M170,210 L167,217 M170,210 L176,213"
                  stroke="#7a6040" strokeWidth="1.8" strokeLinecap="round"/>

            {/* Body */}
            <ellipse cx="158" cy="158" rx="24" ry="30" fill="#5d7888" transform="rotate(-8 158 158)"/>
            {/* Wing fold shading */}
            <path d="M143,144 Q162,135 178,145 Q174,170 160,185 Q146,178 140,164 Z"
                  fill="#496476" opacity="0.38"/>
            {/* Chest lighter area */}
            <ellipse cx="147" cy="164" rx="11" ry="18" fill="#c0cfda" opacity="0.42"/>

            {/* Neck — S-curve, broad at base tapering */}
            <path d="M154,130 Q168,112 164,93 Q160,77 155,66"
                  stroke="#5d7888" strokeWidth="12" fill="none" strokeLinecap="round"/>
            {/* Lighter front of neck */}
            <path d="M154,130 Q165,116 161,97 Q157,82 155,66"
                  stroke="#c0cfda" strokeWidth="5" fill="none" strokeLinecap="round" opacity="0.42"/>

            {/* Head */}
            <ellipse cx="152" cy="60" rx="13" ry="10" fill="#4e6878" transform="rotate(-6 152 60)"/>
            {/* White face */}
            <ellipse cx="153" cy="62" rx="7" ry="5.5" fill="#d8e4ea" opacity="0.55"/>
            {/* Black cap */}
            <path d="M142,56 Q148,51 156,54 Q157,49 154,45 Q148,43 143,47 Q140,50 142,56 Z"
                  fill="#1e2d38"/>
            {/* Plume */}
            <path d="M142,56 Q127,72 115,92"
                  stroke="#1e2d38" strokeWidth="2.2" fill="none" strokeLinecap="round"/>
            <path d="M142,56 Q124,74 110,97"
                  stroke="#1e2d38" strokeWidth="1.4" fill="none" strokeLinecap="round" opacity="0.5"/>
            <path d="M142,56 Q128,70 118,88"
                  stroke="#1e2d38" strokeWidth="0.8" fill="none" strokeLinecap="round" opacity="0.3"/>

            {/* Eye — yellow iris */}
            <circle cx="155" cy="58" r="3.5" fill="#d4b830"/>
            <circle cx="155.5" cy="58" r="2" fill="#1a2830"/>
            <circle cx="154.5" cy="57.2" r="0.7" fill="#ffffff" opacity="0.75"/>

            {/* Bill — long ochre dagger */}
            <path d="M160,58 L192,52" stroke="#b89030" strokeWidth="3.5" strokeLinecap="round"/>
            <path d="M160,58 L192,53.5" stroke="#e8c840" strokeWidth="1.5" strokeLinecap="round" opacity="0.55"/>
            <path d="M160,59 L190,54.5" stroke="#9a7828" strokeWidth="1.5" strokeLinecap="round" opacity="0.4"/>

            {/* Breast streaks */}
            <path d="M147,166 Q144,174 146,181" stroke="#8a9eac" strokeWidth="0.8" opacity="0.28"/>
            <path d="M151,168 Q148,177 150,184" stroke="#8a9eac" strokeWidth="0.8" opacity="0.22"/>

            {/* Reflection in water */}
            <path d="M158,188 Q165,196 162,206"
                  stroke="#4a6878" strokeWidth="6" fill="none" strokeLinecap="round" opacity="0.1"/>

            {/* Background flying birds */}
            <path d="M68,26 Q72,22 76,26" stroke="#3a5a4a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45"/>
            <path d="M76,26 Q80,22 84,26" stroke="#3a5a4a" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.45"/>
            <path d="M50,40 Q53,37 56,40" stroke="#3a5a4a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.32"/>
            <path d="M56,40 Q59,37 62,40" stroke="#3a5a4a" strokeWidth="1.2" fill="none" strokeLinecap="round" opacity="0.32"/>
            <path d="M198,22 Q201,19 204,22" stroke="#3a5a4a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.28"/>
            <path d="M204,22 Q207,19 210,22" stroke="#3a5a4a" strokeWidth="1" fill="none" strokeLinecap="round" opacity="0.28"/>

            {/* Fine border frame */}
            <rect x="5" y="5" width="250" height="200" fill="none" stroke="#2c4a3e" strokeWidth="1" opacity="0.3"/>
          </svg>
        </div>

        {/* ── Title Panel ─────────────────────────────────── */}
        <div className="book-mockup__title-panel" aria-hidden="true">
          <div className="book-mockup__publisher">HP Digital</div>
          <h3 className="book-mockup__title">{title}</h3>
          <div className="book-mockup__subtitle">A Field Guide for New Observers</div>
        </div>

      </div>{/* end .book-mockup__cover */}

      {/* Shadow */}
      <div className="book-mockup__shadow" aria-hidden="true"/>

      {/* PDF Badge */}
      <div className="book-mockup__pdf-badge" aria-label="PDF format">
        <span>PDF</span>
      </div>
    </div>
  );
}
