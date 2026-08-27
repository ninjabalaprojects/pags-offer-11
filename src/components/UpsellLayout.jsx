import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';
import SiteFooter from './SiteFooter';
import GuaranteeBox from './GuaranteeBox';
import DigistoreTrustSeal from './DigistoreTrustSeal';
import LegalLinks from './LegalLinks';
import { SITE_CONFIG } from '../config';
import './UpsellLayout.css';

/**
 * Shared layout for all upsell pages (UP1, UP2, UP3).
 *
 * Props:
 *   product        — SITE_CONFIG.products.up*
 *   declinePath    — where the decline button goes
 *   ctaLabel       — primary CTA button text
 *   declineLabel   — secondary decline text
 *   includes       — string[] list of included items
 *   forYou         — string[] "is for you if"
 *   children       — extra content blocks (e.g. feature details)
 */
export default function UpsellLayout({
  product,
  declinePath,
  ctaLabel,
  declineLabel,
  includes,
  forYou,
  description,
  children,
}) {
  return (
    <div className="upsell-page">
      <SiteHeader />

      {/* ── TOP BANNER ──────────────────────────────────── */}
      <div className="upsell-banner">
        <div className="container">
          <p>
            Your order is being processed. Before you continue, you have one optional
            opportunity to add a complementary resource to your order.
          </p>
        </div>
      </div>

      {/* ── HERO ────────────────────────────────────────── */}
      <section className="upsell-hero">
        <div className="container container--narrow">
          <div className="upsell-hero__inner animate-fadeUp">
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Optional Add-On · {product.format}
            </span>

            <h1 className="upsell-hero__title">{product.name}</h1>
            <p className="upsell-hero__subtitle">{product.subtitle}</p>

            {description && (
              <p className="upsell-hero__desc">{description}</p>
            )}

            <div className="upsell-hero__price-block">
              <span className="price-display">{product.price}</span>
              <span className="upsell-hero__price-note">One-time add-on · Digital PDF</span>
            </div>

            <div className="upsell-hero__actions">
              <a
                href={product.checkoutUrl}
                className="btn btn--primary btn--xl"
                rel="noopener noreferrer"
              >
                {ctaLabel}
              </a>

              <Link
                to={declinePath}
                className="btn btn--ghost"
              >
                {declineLabel}
              </Link>
            </div>

            <p className="upsell-hero__guarantee-note">
              🛡️ 60-Day Money-Back Guarantee · Secure Checkout via Digistore24
            </p>

            <div style={{ marginTop: '20px' }}>
              <DigistoreTrustSeal />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIGITAL NOTICE ──────────────────────────────── */}
      <div className="fp-digital-notice" style={{ background: 'var(--color-forest-mid)' }}>
        <div className="container">
          <p>
            <strong>Digital product.</strong> No physical item will be shipped.
            Delivered by email after purchase via Digistore24.
          </p>
        </div>
      </div>

      {/* ── WHAT'S INCLUDED ─────────────────────────────── */}
      <section className="section upsell-includes">
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '36px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-block' }}>
              What's Included
            </span>
            <h2>Inside {product.name}</h2>
          </div>

          <ul className="check-list">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── EXTRA CONTENT ───────────────────────────────── */}
      {children}

      {/* ── WHO IT'S FOR ────────────────────────────────── */}
      {forYou && forYou.length > 0 && (
        <section className="section upsell-for" style={{ background: 'var(--color-cream)' }}>
          <div className="container container--narrow">
            <div className="text-center" style={{ marginBottom: '28px' }}>
              <h3 style={{ color: 'var(--color-forest-deep)' }}>This add-on is for you if…</h3>
            </div>
            <ul className="check-list">
              {forYou.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ── GUARANTEE ───────────────────────────────────── */}
      <section className="section--sm upsell-guarantee">
        <div className="container container--narrow">
          <GuaranteeBox />
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────────────────── */}
      <section className="section upsell-bottom-cta" style={{ background: 'var(--color-cream)' }}>
        <div className="container container--narrow text-center">
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Optional Add-On
          </span>
          <h2>{product.name}</h2>
          <div className="upsell-bottom-cta__price">
            <span className="price-display">{product.price}</span>
          </div>

          <div className="upsell-hero__actions">
            <a
              href={product.checkoutUrl}
              className="btn btn--primary btn--xl"
              rel="noopener noreferrer"
            >
              {ctaLabel}
            </a>

            <Link to={declinePath} className="btn btn--ghost">
              {declineLabel}
            </Link>
          </div>

          <p style={{ marginTop: '14px', fontSize: '0.76rem', color: 'var(--color-charcoal-light)' }}>
            Digital PDF only. No physical product. Billed through Digistore24.
          </p>
        </div>
      </section>

      {/* ── LEGAL DISCLAIMER ────────────────────────────── */}
      <div className="upsell-disclaimer">
        <div className="container container--text">
          <p className="legal-text">
            All products are digital PDFs intended for educational and informational purposes.
            No specific results are guaranteed. Billing is handled by Digistore24.
            You may request a refund within 60 days of purchase by contacting{' '}
            <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
          </p>
        </div>
      </div>

      {/* ── LEGAL LINKS ─────────────────────────────────── */}
      <div className="container container--narrow">
        <LegalLinks />
      </div>

      <SiteFooter />
    </div>
  );
}
