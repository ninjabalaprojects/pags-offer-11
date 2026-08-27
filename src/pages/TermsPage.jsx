import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './LegalPage.css';

export default function TermsPage() {
  useEffect(() => {
    document.title = `Terms of Use | ${SITE_CONFIG.businessName}`;
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
            <h1>Terms of Use</h1>
            <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="legal-body">
            <p>
              Please read these Terms of Use carefully before accessing or purchasing from{' '}
              {SITE_CONFIG.domain}. By using this website or purchasing any product, you agree
              to be bound by these terms.
            </p>

            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing this website or purchasing any product from {SITE_CONFIG.businessName},
              you confirm that you have read, understood, and agree to these Terms of Use.
              If you do not agree, please do not use this website or purchase any product.
            </p>

            <h2>2. Digital Product License</h2>
            <p>
              Upon completing a purchase, you are granted a non-exclusive, non-transferable,
              personal license to access and use the purchased digital product for your own
              personal, non-commercial purposes.
            </p>

            <h2>3. Personal Use Only</h2>
            <p>
              Our digital products are intended for personal use only. You may not share,
              distribute, reproduce, resell, or make the content available to any other person
              or entity, in whole or in part, without express written permission.
            </p>

            <h2>4. Intellectual Property</h2>
            <p>
              All content on this website and within our digital products — including text,
              graphics, design, and structure — is the intellectual property of{' '}
              {SITE_CONFIG.businessName} and is protected by applicable copyright law.
              Unauthorized use is strictly prohibited.
            </p>

            <h2>5. Prohibition of Redistribution</h2>
            <p>
              You may not upload, post, share, or distribute any purchased content on any
              platform, marketplace, or network — including but not limited to file-sharing
              services, social media, or online communities — without prior written consent.
            </p>

            <h2>6. Educational Disclaimer</h2>
            <p>
              All products offered by {SITE_CONFIG.businessName} are intended for educational
              and informational purposes only. They are provided to support recreational
              birdwatching and personal learning. They do not constitute professional scientific,
              environmental, veterinary, or other specialized advice. No specific results are
              guaranteed.
            </p>

            <h2>7. Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, {SITE_CONFIG.businessName} shall
              not be liable for any indirect, incidental, special, or consequential damages
              arising from your use of our products or website. Our total liability shall not
              exceed the amount paid for the product in question.
            </p>

            <h2>8. Refund Policy</h2>
            <p>
              We offer a 60-day money-back guarantee on all products. For full details, please
              review our <Link to="/refund-policy">Refund Policy</Link>.
            </p>

            <h2>9. Privacy</h2>
            <p>
              Your use of this website is also governed by our{' '}
              <Link to="/privacy-policy">Privacy Policy</Link>, which is incorporated into
              these Terms by reference.
            </p>

            <h2>10. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. Changes will be
              posted on this page with an updated date. Continued use of the website following
              any changes constitutes acceptance of the revised terms.
            </p>

            <h2>11. Contact</h2>
            <p>
              Questions regarding these Terms of Use may be directed to:
            </p>
            <p>
              <strong>{SITE_CONFIG.businessName}</strong><br />
              Email: <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>
            </p>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
