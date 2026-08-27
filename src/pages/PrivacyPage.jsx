import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './LegalPage.css';

export default function PrivacyPage() {
  useEffect(() => {
    document.title = `Privacy Policy | ${SITE_CONFIG.businessName}`;
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="legal-page">
      <SiteHeader />

      <main className="legal-main">
        <div className="container container--text">
          <div className="legal-header">
            <Link to="/" className="legal-back">← Back</Link>
            <span className="badge" style={{ display: 'inline-block', marginBottom: '12px' }}>Legal</span>
            <h1>Privacy Policy</h1>
            <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="legal-body">
            <p>
              {SITE_CONFIG.businessName} ("we," "us," or "our") operates the website at{' '}
              {SITE_CONFIG.domain}. This Privacy Policy explains how we collect, use, and protect
              information in connection with your use of our website and products.
            </p>

            <h2>1. Information We Collect</h2>
            <p>
              When you purchase a product through our website, your purchase is processed by
              Digistore24. We may receive limited information related to your transaction, such
              as your name and email address, for the purpose of delivering your product and
              providing customer support.
            </p>
            <p>
              We do not collect payment information directly. Payment data is collected and
              processed solely by Digistore24 in accordance with their own privacy policy.
            </p>

            <h2>2. How We Use Your Information</h2>
            <ul>
              <li>To deliver your digital product following purchase.</li>
              <li>To respond to customer support inquiries.</li>
              <li>To send you important information about your order.</li>
              <li>To send promotional communications, where you have provided consent.</li>
            </ul>

            <h2>3. Email Communications</h2>
            <p>
              If you have made a purchase or otherwise provided your email address, we may send
              you occasional promotional communications about our products and resources.
            </p>
            <p>
              You may opt out of promotional emails at any time using the unsubscribe link included
              in every email, or by contacting us at{' '}
              <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
              Transactional emails related to your purchase are not affected by unsubscribe requests.
            </p>

            <h2>4. Cookies and Analytics</h2>
            <p>
              Our website may use cookies and similar technologies to understand how visitors use
              the site and to improve your experience. We may use analytics tools such as Google
              Analytics to collect non-personally identifiable information about website usage.
            </p>
            <p>
              You may configure your browser to refuse cookies or to alert you when cookies are
              being sent. Some features of the website may not function properly if cookies are disabled.
            </p>

            <h2>5. Third-Party Services</h2>
            <p>
              Our checkout and payment process is handled by Digistore24. By making a purchase,
              you are subject to Digistore24's terms and privacy policy in addition to ours.
              We are not responsible for the privacy practices of Digistore24 or other third parties.
            </p>

            <h2>6. Data Security</h2>
            <p>
              We take reasonable steps to protect your information. However, no method of data
              transmission or storage is completely secure. We cannot guarantee absolute security
              of any information you provide.
            </p>

            <h2>7. Data Retention</h2>
            <p>
              We retain your information only for as long as necessary to fulfill the purposes
              described in this policy, or as required by applicable law.
            </p>

            <h2>8. Your Rights</h2>
            <p>
              Depending on your location, you may have the right to request access to, correction
              of, or deletion of your personal data. To exercise any of these rights, please
              contact us at <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
            </p>

            <h2>9. Children's Privacy</h2>
            <p>
              Our products and website are not directed at children under the age of 13. We do not
              knowingly collect personal information from children under 13.
            </p>

            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Updates will be posted on this
              page with a revised date. Continued use of our website following any changes
              constitutes acceptance of the updated policy.
            </p>

            <h2>11. Contact</h2>
            <p>
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p>
              <strong>{SITE_CONFIG.businessName}</strong><br />
              Email: <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a><br />
              Website: {SITE_CONFIG.domain}
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
