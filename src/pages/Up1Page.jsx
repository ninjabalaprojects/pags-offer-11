import { useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import UpsellLayout from '../components/UpsellLayout';
import './UpPage.css';

const { up1 } = SITE_CONFIG.products;

const includes = [
  'Structured bird sighting log — species, date, time, location, weather',
  'Habitat and behavior observation fields for each entry',
  'Personal notes section for each recorded sighting',
  'Weekly and monthly observation summary pages',
  'Trip planning pages — destination, target species, season',
  'Equipment packing checklist for each outing',
  'Map and location notes template',
  'Year-round observation tracker by habitat type',
  'Favourite sighting records and personal milestones',
  'Clean, minimal layout designed for use in the field',
];

const forYou = [
  'You want to record and keep track of your bird sightings',
  'You enjoy structured observation and personal documentation',
  'You like planning your birdwatching outings in advance',
  'You want a dedicated space for your field observations',
  'You prefer organized notes over loose scraps of paper',
];

export default function Up1Page() {
  useEffect(() => {
    document.title = `${up1.name} | ${SITE_CONFIG.businessName}`;

    const script = document.createElement('script');
    script.src = 'https://www.digistore24-scripts.com/service/digistore.js';
    script.async = true;
    script.onload = () => {
      if (typeof window.digistoreUpsell === 'function') {
        window.digistoreUpsell();
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <UpsellLayout
      product={up1}

      ctaLabel="Yes, Add the Field Journal"
      declineLabel="No thanks, continue without it"
      includes={includes}
      forYou={forYou}
      description="The Birdwatcher's Field Journal is a structured companion for recording and organizing your birdwatching observations. It complements your beginner's guide by giving you a dedicated space to log what you see, plan your outings, and build a personal record of your birdwatching experiences."
    >
      {/* Extra feature block */}
      <section className="section up-feature-block" style={{ background: 'var(--color-cream)' }}>
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-block' }}>
              Inside the Journal
            </span>
            <h2>A Complete Observation System</h2>
          </div>

          <div className="up-feature-grid">
            {[
              { icon: '📋', label: 'Sighting Log', desc: 'Capture every detail of each bird sighting in a structured, easy-to-complete format.' },
              { icon: '📍', label: 'Location Notes', desc: 'Record your observation locations, habitats, and conditions for future reference.' },
              { icon: '🗓️', label: 'Trip Planner', desc: 'Plan upcoming birdwatching outings with target species and seasonal notes.' },
              { icon: '📊', label: 'Progress Tracker', desc: 'Review your observations over time and celebrate your personal milestones.' },
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
