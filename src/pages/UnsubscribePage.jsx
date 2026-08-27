import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './LegalPage.css';
import './UnsubscribePage.css';

export default function UnsubscribePage() {
  useEffect(() => {
    document.title = `Unsubscribe | ${SITE_CONFIG.businessName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SiteHeader />

      <main className="legal-main">
        <div className="container container--text">
          <div className="legal-header">
            <Link to="/" className="legal-back">← Back</Link>
            <span className="badge" style={{ display: 'inline-block', marginBottom: '12px' }}>Email Preferences</span>
            <h1>Unsubscribe</h1>
          </div>

          <div className="legal-body">
            <p>
              You may stop receiving promotional emails from {SITE_CONFIG.businessName} at any
              time. There are two ways to unsubscribe:
            </p>

            <h2>Option 1: Use the Unsubscribe Link in Our Emails</h2>
            <p>
              Every promotional email we send includes an unsubscribe link at the bottom of the
              message. Click that link to remove yourself from our mailing list immediately.
            </p>

            <h2>Option 2: Contact Our Support Team</h2>
            <p>
              Send an email requesting removal from our promotional list to:
            </p>
            <p>
              <a href={`mailto:${SITE_CONFIG.supportEmail}?subject=Unsubscribe Request`}>
                {SITE_CONFIG.supportEmail}
              </a>
            </p>
            <p>
              Please include the email address you would like to unsubscribe in your message.
              We will process your request promptly.
            </p>

            <h2>Important Information</h2>
            <ul>
              <li>
                Unsubscribing from promotional emails will not affect transactional emails
                related to your purchases (e.g., order confirmations, product access information).
              </li>
              <li>
                Unsubscribe requests are processed as quickly as possible. Please allow up to
                10 business days for processing.
              </li>
              <li>
                For questions about your data, please review our{' '}
                <Link to="/privacy-policy">Privacy Policy</Link>.
              </li>
            </ul>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
