import { useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import UpsellLayout from '../components/UpsellLayout';
import './UpPage.css';

const { up3 } = SITE_CONFIG.products;

const includes = [
  'Annual birdwatching goals and personal intentions page',
  'Seasonal birdwatching calendar — spring, summer, autumn, winter',
  'Monthly observation planning pages with habitat focus areas',
  'Weekly birdwatching habit tracker',
  'Favourite local locations and site notes',
  'Species target lists by season and habitat',
  'Trip pre-planning template — route, gear, timing, conditions',
  'Post-outing reflection pages — highlights, surprises, next steps',
  'Personal species milestone tracker',
  'Notes pages for longer-term observation patterns and reflections',
];

const forYou = [
  'You want to build a consistent birdwatching practice',
  'You enjoy planning your outdoor activities with intention',
  'You want to track your birdwatching habits and progress over time',
  'You want a seasonal structure to your birdwatching year',
  'You want to set and review personal birdwatching goals',
];

export default function Up3Page() {
  useEffect(() => {
    document.title = `${up3.name} | ${SITE_CONFIG.businessName}`;
  }, []);

  return (
    <UpsellLayout
      product={up3}
      declinePath="/thanks"
      ctaLabel="Yes, Add the Planner"
      declineLabel="No thanks, finish my order"
      includes={includes}
      forYou={forYou}
      description="The Birdwatching Planner helps you build a consistent, intentional birdwatching practice throughout the year. With structured monthly and weekly planning pages, seasonal checklists, and habit trackers, it gives you a clear framework for making birdwatching a meaningful and organized part of your outdoor life."
    >
      {/* Extra feature block */}
      <section className="section up-feature-block" style={{ background: 'var(--color-cream)' }}>
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-block' }}>
              Key Features
            </span>
            <h2>Plan Your Birdwatching Year</h2>
          </div>

          <div className="up-feature-grid">
            {[
              { icon: '📅', label: 'Seasonal Planning', desc: 'Organize your birdwatching around seasonal bird movements and habitat changes.' },
              { icon: '🎯', label: 'Goals & Intentions', desc: 'Set meaningful personal birdwatching goals and review your progress.' },
              { icon: '✅', label: 'Habit Tracker', desc: 'Build a consistent weekly birdwatching routine with a dedicated habit tracker.' },
              { icon: '🗺️', label: 'Location Notes', desc: 'Record your favourite local sites and plan future visits.' },
            ].map(({ icon, label, desc }) => (
              <div key={label} className="up-feature-card">
                <span className="up-feature-card__icon" aria-hidden="true">{icon}</span>
                <h4 className="up-feature-card__label">{label}</h4>
                <p className="up-feature-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </UpsellLayout>
  );
}
