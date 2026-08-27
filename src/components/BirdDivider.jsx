import './BirdDivider.css';

/**
 * Decorative section divider with flying bird silhouettes.
 * variant: 'light' | 'dark'
 */
export default function BirdDivider({ variant = 'light' }) {
  return (
    <div className={`bird-divider bird-divider--${variant}`} aria-hidden="true">
      <svg viewBox="0 0 420 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="bird-divider__svg">
        {/* Horizontal line */}
        <line x1="0" y1="20" x2="420" y2="20" stroke="currentColor" strokeWidth="0.5" opacity="0.3"/>

        {/* Bird group 1 — center */}
        <path d="M193,16 Q198,11 203,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M203,16 Q208,11 213,16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="203" cy="16" r="1.5" fill="currentColor" opacity="0.6"/>

        {/* Bird group 2 — left of center */}
        <path d="M158,19 Q162,15 166,19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M166,19 Q170,15 174,19" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="166" cy="19" r="1.3" fill="currentColor" opacity="0.5"/>

        {/* Bird group 3 — right of center */}
        <path d="M246,18 Q250,14 254,18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M254,18 Q258,14 262,18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="254" cy="18" r="1.3" fill="currentColor" opacity="0.5"/>

        {/* Tiny bird far left */}
        <path d="M108,21 Q111,18 114,21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
        <path d="M114,21 Q117,18 120,21" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>

        {/* Tiny bird far right */}
        <path d="M300,20 Q303,17 306,20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>
        <path d="M306,20 Q309,17 312,20" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" opacity="0.5"/>

        {/* Ornamental dots */}
        <circle cx="80"  cy="20" r="1.5" fill="currentColor" opacity="0.25"/>
        <circle cx="340" cy="20" r="1.5" fill="currentColor" opacity="0.25"/>
      </svg>
    </div>
  );
}
