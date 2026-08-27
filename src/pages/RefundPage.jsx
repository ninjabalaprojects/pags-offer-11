import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import './LegalPage.css';

export default function RefundPage() {
  useEffect(() => {
    document.title = `Refund Policy | ${SITE_CONFIG.businessName}`;
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
            <h1>Refund Policy</h1>
            <p className="legal-updated">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className="legal-body">
            <h2>60-Day Money-Back Guarantee</h2>
            <p>
              {SITE_CONFIG.businessName} offers a 60-day money-back guarantee on all digital
              products. If you are not satisfied with your purchase for any reason, you may
              request a full refund within 60 days of the original purchase date.
            </p>

            <h2>Refund Period</h2>
            <p>
              Refund requests must be submitted within <strong>60 days</strong> of your
              original purchase date. Requests submitted after this period may not be eligible
              for a refund.
            </p>

            <h2>How to Request a Refund</h2>
            <p>
              To request a refund, please contact our support team by email:
            </p>
            <p>
              <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>
            </p>
            <p>
              Please include in your message:
            </p>
            <ul>
              <li>The email address used during purchase</li>
              <li>Your Digistore24 order number (if available)</li>
              <li>The name of the product you purchased</li>
            </ul>

            <h2>Processing</h2>
            <p>
              Refunds are processed through Digistore24. Once your refund request is approved,
              the refund will be issued to the original payment method. Processing times may
              vary depending on your payment provider.
            </p>

            <h2>Eligibility</h2>
            <p>
              All digital products are eligible for the 60-day money-back guarantee, provided
              the request is made within the refund period. We do not require you to return
              the digital product.
            </p>

            <h2>Contact</h2>
            <p>
              For any questions about our refund policy, please contact:
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
