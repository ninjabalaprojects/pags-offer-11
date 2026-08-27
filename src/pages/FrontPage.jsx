import { useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';
import BookMockup from '../components/BookMockup';
import GuaranteeBox from '../components/GuaranteeBox';
import DigistoreTrustSeal from '../components/DigistoreTrustSeal';
import LegalLinks from '../components/LegalLinks';
import BirdDivider from '../components/BirdDivider';
import './FrontPage.css';

const { front } = SITE_CONFIG.products;

const chapters = [
  { num: 'Ch. 01', title: 'Getting Started with Birdwatching' },
  { num: 'Ch. 02', title: 'Essential Birdwatching Equipment' },
  { num: 'Ch. 03', title: 'Understanding Bird Habitats' },
  { num: 'Ch. 04', title: 'Basic Bird Identification' },
  { num: 'Ch. 05', title: 'Observing Bird Behavior' },
  { num: 'Ch. 06', title: 'Recording Your Sightings' },
  { num: 'Ch. 07', title: 'Planning Your Birdwatching Trips' },
  { num: 'Ch. 08', title: 'Common Beginner Mistakes to Avoid' },
  { num: 'Ch. 09', title: 'Creating Your Own Birdwatching Routine' },
  { num: 'Ch. 10', title: 'Field Checklists & Observation Notes' },
];

const includes = [
  'Practical, beginner-friendly birdwatching fundamentals',
  'Basic bird identification techniques and visual cues',
  'Observation methods for different habitats and conditions',
  'Equipment guidance — what you actually need to start',
  'Field checklists for organized observation sessions',
  'Bird sighting log templates and recording pages',
  'Trip planning framework for local and regional outings',
  'Practical exercises to build your observation skills',
  'Common beginner mistakes and how to avoid them',
  'A personal observation tracking system',
];

const forYou = [
  'You are new to birdwatching and want a clear starting point',
  'You enjoy spending time outdoors and observing nature',
  'You want to learn basic bird identification',
  'You want a practical, well-organized reference guide',
  'You want to make your outdoor observations more intentional',
  'You are looking for a calm, educational hobby',
];

const notForYou = [
  'You are looking for advanced ornithology research',
  'You need professional scientific field training',
  'You expect to become an expert without dedicated practice',
];

const faqs = [
  {
    q: 'What format is the guide?',
    a: 'The guide is a digital PDF file. You can read it on any device — computer, tablet, smartphone, or e-reader.',
  },
  {
    q: 'How do I receive it?',
    a: 'After completing your purchase through Digistore24, access instructions will be sent to the email address you used during checkout. Please check your spam or junk folder if you do not see the email within a few minutes.',
  },
  {
    q: 'Is it suitable for complete beginners?',
    a: 'Yes. The guide was created specifically for people who are new to birdwatching. No prior knowledge is required.',
  },
  {
    q: 'Can I read it on my phone?',
    a: 'Yes. The PDF is compatible with all modern smartphones, tablets, and computers.',
  },
  {
    q: 'Can I print the guide?',
    a: 'Yes. The PDF is print-friendly if you prefer to read a physical copy.',
  },
  {
    q: 'Do I need special equipment?',
    a: 'Not immediately. The guide covers basic and optional equipment so you can start with what you already have.',
  },
  {
    q: 'Is this a physical book?',
    a: 'No. This is a digital product. No physical item will be shipped. You will receive a PDF file electronically.',
  },
  {
    q: 'What is the refund policy?',
    a: `We offer a 60-day money-back guarantee. If you are not satisfied, contact us at ${SITE_CONFIG.supportEmail} within 60 days of purchase for a full refund.`,
  },
];

export default function FrontPage() {
  useEffect(() => {
    document.title = `${front.name} | ${SITE_CONFIG.businessName}`;
  }, []);

  return (
    <div className="front-page">
      <SiteHeader />

      {/* ── HERO ─────────────────────────────────────────── */}
      <section className="fp-hero">
        {/* Subtle background birds */}
        <div className="fp-hero__bg-birds" aria-hidden="true">
          <svg viewBox="0 0 800 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            {/* Large flock — scattered flying birds */}
            <path d="M60,60 Q66,54 72,60"   stroke="#a8c5b5" strokeWidth="1.4" strokeLinecap="round" opacity="0.25"/>
            <path d="M72,60 Q78,54 84,60"   stroke="#a8c5b5" strokeWidth="1.4" strokeLinecap="round" opacity="0.25"/>
            <path d="M36,78 Q41,73 46,78"   stroke="#a8c5b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.18"/>
            <path d="M46,78 Q51,73 56,78"   stroke="#a8c5b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.18"/>
            <path d="M92,45 Q97,40 102,45"  stroke="#a8c5b5" strokeWidth="1"   strokeLinecap="round" opacity="0.14"/>
            <path d="M102,45 Q107,40 112,45" stroke="#a8c5b5" strokeWidth="1"  strokeLinecap="round" opacity="0.14"/>

            <path d="M680,30 Q686,24 692,30"  stroke="#a8c5b5" strokeWidth="1.4" strokeLinecap="round" opacity="0.22"/>
            <path d="M692,30 Q698,24 704,30"  stroke="#a8c5b5" strokeWidth="1.4" strokeLinecap="round" opacity="0.22"/>
            <path d="M720,50 Q724,45 728,50"  stroke="#a8c5b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.16"/>
            <path d="M728,50 Q732,45 736,50"  stroke="#a8c5b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.16"/>
            <path d="M660,55 Q664,51 668,55"  stroke="#a8c5b5" strokeWidth="1"   strokeLinecap="round" opacity="0.12"/>
            <path d="M668,55 Q672,51 676,55"  stroke="#a8c5b5" strokeWidth="1"   strokeLinecap="round" opacity="0.12"/>

            <path d="M370,40 Q376,34 382,40"  stroke="#a8c5b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.16"/>
            <path d="M382,40 Q388,34 394,40"  stroke="#a8c5b5" strokeWidth="1.2" strokeLinecap="round" opacity="0.16"/>
            <path d="M400,28 Q405,23 410,28"  stroke="#a8c5b5" strokeWidth="1"   strokeLinecap="round" opacity="0.12"/>
            <path d="M410,28 Q415,23 420,28"  stroke="#a8c5b5" strokeWidth="1"   strokeLinecap="round" opacity="0.12"/>
          </svg>
        </div>

        <div className="container">
          <div className="fp-hero__inner">
            <div className="fp-hero__content animate-fadeUp">
              <span className="badge" style={{ marginBottom: '20px', display: 'inline-block' }}>
                Digital E-Book · PDF
              </span>
              <h1 className="fp-hero__headline">
                Discover the World<br />of Birdwatching
              </h1>
              <p className="fp-hero__sub animate-fadeUp animate-delay-1">
                A practical beginner's guide to birdwatching, identification, observation,
                and enjoying the outdoors with greater confidence.
              </p>

              <div className="fp-hero__cta-block animate-fadeUp animate-delay-2">
                <div className="fp-hero__price">
                  <span className="price-display">{front.price}</span>
                  <span className="fp-hero__price-note">One-time · Digital PDF</span>
                </div>
                <a
                  href={front.checkoutUrl}
                  className="btn btn--primary btn--xl"
                  rel="noopener noreferrer"
                >
                  Get the Guide
                </a>
                <p className="fp-hero__guarantee-note animate-fadeUp animate-delay-3">
                  🛡️ 60-Day Money-Back Guarantee
                </p>
              </div>

              <div style={{ marginTop: '28px' }}>
                <DigistoreTrustSeal />
              </div>
            </div>

            <div className="fp-hero__visual animate-fadeIn animate-delay-2">
              <BookMockup title={front.name} size="lg" />
            </div>
          </div>
        </div>
      </section>

      {/* ── DIGITAL PRODUCT NOTICE ───────────────────────── */}
      <div className="fp-digital-notice">
        <div className="container container--narrow">
          <p>
            <strong>This is a digital product.</strong> No physical item will be shipped.
            Upon completing your purchase, you will receive access to your PDF guide via
            the email address provided at checkout.
          </p>
        </div>
      </div>

      {/* ── WHAT YOU'LL RECEIVE ──────────────────────────── */}
      <section className="section fp-includes">
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              What's Included
            </span>
            <h2>Everything You Need to Start</h2>
            <p style={{ marginTop: '12px', maxWidth: '540px', marginInline: 'auto' }}>
              Practical, actionable birdwatching fundamentals organized into clear,
              easy-to-follow sections — from your first observation to building a
              personal field practice.
            </p>
          </div>

          <ul className="check-list fp-includes__list">
            {includes.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <div className="fp-includes__notice">
            <p className="legal-text">
              This is a digital product. No physical product will be shipped. Access is
              delivered electronically following purchase.
            </p>
          </div>
        </div>
      </section>

      <BirdDivider variant="light" />

      {/* ── CHAPTERS ─────────────────────────────────────── */}
      <section className="section fp-chapters" style={{ background: 'var(--color-cream)' }}>
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Table of Contents
            </span>
            <h2>What's Inside the Guide</h2>
          </div>

          <ul className="chapter-list">
            {chapters.map(({ num, title }) => (
              <li key={num}>
                <span className="chapter-number">{num}</span>
                <span>{title}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BirdDivider variant="light" />

      {/* ── WHO IT'S FOR ─────────────────────────────────── */}
      <section className="section fp-for">
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Is This for You?
            </span>
            <h2>Who This Guide Is For</h2>
          </div>

          <div className="fp-for__grid">
            <div className="fp-for__col">
              <h3 className="fp-for__col-title fp-for__col-title--yes">
                This guide is for you if…
              </h3>
              <ul className="check-list">
                {forYou.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="fp-for__col">
              <h3 className="fp-for__col-title fp-for__col-title--no">
                This guide may not be for you if…
              </h3>
              <ul className="fp-not-list">
                {notForYou.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── GUIDE HIGHLIGHTS ─────────────────────────────── */}
      <section className="section fp-previews" style={{ background: 'var(--color-cream)' }}>
        <div className="container">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              Guide Highlights
            </span>
            <h2>Structured Pages for Every Stage</h2>
            <p style={{ marginTop: '12px', maxWidth: '500px', marginInline: 'auto' }}>
              The guide includes practical, ready-to-use pages covering every aspect
              of your birdwatching practice — from your first outing to building
              a personal observation system.
            </p>
          </div>

          <div className="fp-previews__grid">
            {[
              { icon: '📋', title: 'Bird Observation Checklist', desc: 'A structured checklist for each session — species, behavior, time, location, and weather conditions.' },
              { icon: '📓', title: 'Field Notes Pages', desc: 'Lined and structured pages for recording personal observations and notes directly in the field.' },
              { icon: '🔭', title: 'Equipment Reference', desc: 'A practical reference for what to bring on birdwatching outings — from essentials to optional items.' },
              { icon: '🐦', title: 'Identification Notes', desc: 'A template for recording key features: size, color, beak type, behavior, and habitat associations.' },
              { icon: '📍', title: 'Location & Trip Planner', desc: 'Pages for planning birdwatching outings by location, season, and target species.' },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="fp-preview-card">
                <div className="fp-preview-card__icon" aria-hidden="true">{icon}</div>
                <h4 className="fp-preview-card__title">{title}</h4>
                <p className="fp-preview-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────── */}
      <section className="section fp-steps">
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              How It Works
            </span>
            <h2>Simple to Get Started</h2>
          </div>

          <div className="fp-steps__grid">
            {[
              { n: '1', t: 'Purchase the Guide', d: 'Complete your secure purchase through Digistore24.' },
              { n: '2', t: 'Receive Your PDF', d: 'Access instructions are sent to your email. Download your guide immediately.' },
              { n: '3', t: 'Start Observing', d: 'Open the guide on any device and begin your birdwatching journey at your own pace.' },
            ].map(({ n, t, d }) => (
              <div key={n} className="fp-step">
                <div className="fp-step__number" aria-hidden="true">{n}</div>
                <h4 className="fp-step__title">{t}</h4>
                <p className="fp-step__desc">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── GUARANTEE ────────────────────────────────────── */}
      <section className="section--sm fp-guarantee">
        <div className="container container--narrow">
          <GuaranteeBox />
        </div>
      </section>

      {/* ── DISCLAIMER ───────────────────────────────────── */}
      <section className="fp-disclaimer">
        <div className="container container--text">
          <h4 className="fp-disclaimer__title">Educational Disclaimer</h4>
          <p className="legal-text">
            This guide is provided for educational and informational purposes only. It is intended
            to support recreational birdwatching and general learning. It does not constitute
            professional scientific, environmental, veterinary, or other specialized advice.
            Results from following the guide will vary depending on individual effort, location,
            and conditions. No specific outcomes are guaranteed.
          </p>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────── */}
      <section className="section fp-faq" style={{ background: 'var(--color-cream)' }}>
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '40px' }}>
            <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
              FAQ
            </span>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="fp-faq__list">
            {faqs.map(({ q, a }) => (
              <div key={q} className="fp-faq__item">
                <h4 className="fp-faq__q">{q}</h4>
                <p className="fp-faq__a">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────── */}
      <section className="section fp-final-cta">
        <div className="container container--narrow text-center">
          <span className="badge" style={{ marginBottom: '16px', display: 'inline-block' }}>
            Digital E-Book · PDF
          </span>
          <h2 className="fp-final-cta__title">{front.name}</h2>
          <p className="fp-final-cta__sub">{front.subtitle}</p>

          <div className="fp-final-cta__price-block">
            <span className="price-display">{front.price}</span>
            <span className="fp-final-cta__once">One-time purchase</span>
          </div>

          <a
            href={front.checkoutUrl}
            className="btn btn--primary btn--xl"
            rel="noopener noreferrer"
          >
            Get the Guide
          </a>

          <p style={{ marginTop: '16px', fontSize: '0.8rem', color: 'var(--color-sage-light)' }}>
            🛡️ 60-Day Money-Back Guarantee · Secure Checkout via Digistore24
          </p>

          <p style={{ marginTop: '8px', fontSize: '0.75rem', color: 'var(--color-sage-light)' }}>
            Digital PDF · No physical product · Delivered by email after purchase
          </p>

          <div style={{ marginTop: '24px' }}>
            <DigistoreTrustSeal />
          </div>
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
