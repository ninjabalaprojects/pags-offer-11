import { SITE_CONFIG } from '../config';
import './SiteHeader.css';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container">
        <a href="/" className="site-logo" aria-label="HP Digital — Home">
          <span className="site-logo__icon" aria-hidden="true">🐦</span>
          <span className="site-logo__name">{SITE_CONFIG.businessName}</span>
        </a>
      </div>
    </header>
  );
}
