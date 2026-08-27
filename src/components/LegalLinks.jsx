import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import './LegalLinks.css';

export default function LegalLinks() {
  return (
    <div className="legal-links-block">
      <nav className="legal-links-nav" aria-label="Legal links">
        <Link to="/privacy-policy">Privacy Policy</Link>
        <span aria-hidden="true">·</span>
        <Link to="/terms-of-use">Terms of Use</Link>
        <span aria-hidden="true">·</span>
        <Link to="/refund-policy">Refund Policy</Link>
        <span aria-hidden="true">·</span>
        <Link to="/unsubscribe">Unsubscribe</Link>
        <span aria-hidden="true">·</span>
        <Link to="/contact">Contact</Link>
      </nav>
      <p className="legal-links-email">
        Support: <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>
      </p>
    </div>
  );
}
