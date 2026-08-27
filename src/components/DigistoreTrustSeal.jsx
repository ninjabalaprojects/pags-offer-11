import './DigistoreTrustSeal.css';

/**
 * Placeholder for the official Digistore24 trust seal.
 * Replace the inner content with the official Digistore24 embed code
 * once you have received it from your Digistore24 account.
 *
 * variant="dark"  — used inside the dark hero (default)
 * variant="light" — used on light/cream backgrounds
 * center          — centers the seal horizontally
 */
export default function DigistoreTrustSeal({ variant = 'dark', center = false }) {
  const wrapperClass = [
    'ds24-seal-wrapper',
    variant === 'light' ? 'ds24-seal-wrapper--light' : '',
    center ? 'ds24-seal-wrapper--center' : '',
  ].filter(Boolean).join(' ');

  return (
    <div className={wrapperClass} aria-label="Digistore24 secure checkout seal">
      {/* ======================================================
          REPLACE THIS COMMENT BLOCK WITH THE OFFICIAL
          DIGISTORE24 TRUST SEAL CODE WHEN AVAILABLE.
          ====================================================== */}
      <div className="ds24-seal-placeholder">
        <div className="ds24-seal-placeholder__icon" aria-hidden="true">🔒</div>
        <div className="ds24-seal-placeholder__text">
          <span className="ds24-seal-placeholder__label">Secure Checkout</span>
          <span className="ds24-seal-placeholder__sub">Powered by Digistore24</span>
        </div>
      </div>
    </div>
  );
}
