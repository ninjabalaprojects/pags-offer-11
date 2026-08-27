import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import './SiteFooter.css';

export default function SiteFooter() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <span className="site-footer__logo-icon" aria-hidden="true">🐦</span>
            <span className="site-footer__logo-name">{SITE_CONFIG.businessName}</span>
          </div>
          <p className="site-footer__tagline">
            Premium digital guides for birdwatching enthusiasts and outdoor explorers.
          </p>
        </div>

        <nav className="site-footer__nav" aria-label="Footer navigation">
          <Link to="/privacy-policy">Privacy Policy</Link>
          <Link to="/terms-of-use">Terms of Use</Link>
          <Link to="/refund-policy">Refund Policy</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/unsubscribe">Unsubscribe</Link>
        </nav>

        <div className="site-footer__support">
          <span>Support: </span>
          <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>
        </div>

        <div className="site-footer__bottom">
          <p className="legal-text">
            &copy; {year} {SITE_CONFIG.businessName}. All rights reserved. All digital products are
            protected by copyright and are for personal use only. No portion may be reproduced,
            distributed, or transmitted in any form without prior written permission.
          </p>
          <p className="legal-text" style={{ marginTop: '8px' }}>
            This website is operated by {SITE_CONFIG.businessName}. Payment processing is handled by
            Digistore24. Digital products are delivered electronically upon completed purchase.
          </p>
        </div>
      </div>
    </footer>
  );
}
