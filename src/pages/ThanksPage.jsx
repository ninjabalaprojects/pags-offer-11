import { useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import LegalLinks from '../components/LegalLinks';
import './ThanksPage.css';

export default function ThanksPage() {
  useEffect(() => {
    document.title = `Thank You | ${SITE_CONFIG.businessName}`;
  }, []);

  return (
    <div className="thanks-page">
      <SiteHeader />

      {/* ── THANK YOU HERO ───────────────────────────────── */}
      <section className="thanks-hero">
        <div className="container container--narrow text-center">
          <div className="thanks-hero__check animate-fadeIn" aria-hidden="true">✓</div>

          <h1 className="thanks-hero__title animate-fadeUp">
            Thank You for Your Purchase
          </h1>

          <p className="thanks-hero__sub animate-fadeUp animate-delay-1">
            Your order has been received and is now being processed by Digistore24.
          </p>
        </div>
      </section>

      {/* ── ACCESS INFORMATION ───────────────────────────── */}
      <section className="section thanks-access">
        <div className="container container--narrow">
          <div className="thanks-access__card">
            <div className="thanks-access__icon" aria-hidden="true">📧</div>
            <div>
              <h2 className="thanks-access__title">How to Access Your Guide</h2>
              <p className="thanks-access__body">
                Your digital product access information will be sent to the email address
                you used during your purchase. Please allow a few minutes for the email to arrive.
              </p>
              <p className="thanks-access__body" style={{ marginTop: '12px' }}>
                <strong>Don't see it?</strong> Please check your <strong>spam</strong> or{' '}
                <strong>junk</strong> folder. If you still cannot find your access email,
                contact our support team and we will assist you promptly.
              </p>
            </div>
          </div>

          <div className="thanks-steps">
            {[
              { n: '1', t: 'Check Your Email', d: 'Open the email from Digistore24 in the inbox used during checkout.' },
              { n: '2', t: 'Download Your PDF', d: 'Follow the instructions in the email to download your guide.' },
              { n: '3', t: 'Start Birdwatching', d: 'Open the guide on any device and begin exploring at your own pace.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="thanks-step">
                <div className="thanks-step__num" aria-hidden="true">{n}</div>
                <div>
                  <h4 className="thanks-step__title">{t}</h4>
                  <p className="thanks-step__desc">{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── BILLING NOTICE ───────────────────────────────── */}
      <section className="thanks-billing">
        <div className="container container--narrow">
          <div className="thanks-billing__box">
            <div className="thanks-billing__icon" aria-hidden="true">💳</div>
            <div>
              <h4 className="thanks-billing__title">Billing Information</h4>
              <p className="thanks-billing__body">
                <strong>Billing will be handled by Digistore24.</strong>{' '}
                The charge on your bank or card statement will appear under the Digistore24
                name. If you have any questions about your billing, please contact our support
                team or refer to your Digistore24 purchase confirmation email.
              </p>
              <p className="thanks-billing__note">
                A cobrança se dará através de Digistore24.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── SUPPORT ──────────────────────────────────────── */}
      <section className="section--sm thanks-support">
        <div className="container container--narrow text-center">
          <h3 className="thanks-support__title">Need Help?</h3>
          <p className="thanks-support__body">
            Our support team is here to assist you with product access, purchase questions,
            or any other concerns.
          </p>
          <a
            href={`mailto:${SITE_CONFIG.supportEmail}`}
            className="thanks-support__email"
          >
            {SITE_CONFIG.supportEmail}
          </a>
        </div>
      </section>

      {/* ── LEGAL LINKS ──────────────────────────────────── */}
      <div className="container container--narrow">
        <LegalLinks />
      </div>

      <SiteFooter />
    </div>
  );
}
