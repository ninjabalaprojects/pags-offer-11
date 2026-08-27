import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './LegalPage.css';
import './ContactPage.css';

export default function ContactPage() {
  useEffect(() => {
    document.title = `Contact | ${SITE_CONFIG.businessName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SiteHeader />

      <main className="legal-main">
        <div className="container container--text">
          <div className="legal-header">
            <Link to="/" className="legal-back">← Back</Link>
            <span className="badge" style={{ display: 'inline-block', marginBottom: '12px' }}>Support</span>
            <h1>Contact Us</h1>
          </div>

          <div className="contact-block">
            <div className="contact-block__intro">
              <p>
                We are here to help. Whether you have a question about your purchase, need
                help accessing your product, or would like to request a refund, please reach
                out to our support team.
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-card__icon" aria-hidden="true">📧</div>
              <div>
                <h3 className="contact-card__title">Email Support</h3>
                <a
                  href={`mailto:${SITE_CONFIG.supportEmail}`}
                  className="contact-card__email"
                >
                  {SITE_CONFIG.supportEmail}
                </a>
                <p className="contact-card__note">
                  We aim to respond to all inquiries within 1–2 business days.
                </p>
              </div>
            </div>

            <div className="contact-topics">
              <h3 className="contact-topics__title">We Can Help With</h3>
              <ul>
                <li>Accessing your digital product after purchase</li>
                <li>Questions about your Digistore24 order or billing</li>
                <li>Refund requests (subject to our <Link to="/refund-policy">Refund Policy</Link>)</li>
                <li>General product questions</li>
                <li>Unsubscribe requests</li>
                <li>Any other support needs</li>
              </ul>
            </div>

            <div className="contact-note">
              <p className="legal-text">
                If you have not received your product access email, please check your spam or
                junk folder first. If you still cannot locate it, contact us at the email above
                and we will assist you promptly.
              </p>
            </div>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
