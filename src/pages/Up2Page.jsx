import { useEffect } from 'react';
import { SITE_CONFIG } from '../config';
import UpsellLayout from '../components/UpsellLayout';
import './UpPage.css';

const { up2 } = SITE_CONFIG.products;

const includes = [
  'Visual identification fundamentals — how to look at a bird systematically',
  'Bird size and shape — using relative size as a first identification clue',
  'Color patterns, markings, and field marks explained clearly',
  'Beak types, shapes, and what they tell you about a bird',
  'Tail and wing shapes as identification clues',
  'Bird posture and movement patterns in the field',
  'Habitat associations — connecting birds to their environments',
  'Identification checklist — a step-by-step process for uncertain sightings',
  'Common beginner identification mistakes and how to avoid them',
  'Personal identification notes template for each species you observe',
];

const forYou = [
  'You want to correctly identify the birds you observe',
  'You find bird identification confusing and want a clear framework',
  'You want a systematic approach to looking at unfamiliar birds',
  'You want to understand what visual clues to look for in the field',
  'You want to build your identification confidence over time',
];

export default function Up2Page() {
  useEffect(() => {
    document.title = `${up2.name} | ${SITE_CONFIG.businessName}`;

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
      product={up2}
      declinePath="/up3"
      ctaLabel="Yes, Add This Guide"
      declineLabel="No thanks, continue without it"
      includes={includes}
      forYou={forYou}
      description="The Bird Identification Guide for Beginners provides a clear, methodical framework for recognizing and identifying birds in the field. It focuses on the fundamental visual clues that experienced birdwatchers use — size, shape, color pattern, beak type, behavior, and habitat — and translates them into a process any beginner can follow."
    >
      {/* Extra feature block */}
      <section className="section up-feature-block">
        <div className="container container--narrow">
          <div className="text-center" style={{ marginBottom: '32px' }}>
            <span className="badge" style={{ marginBottom: '14px', display: 'inline-block' }}>
              Key Topics
            </span>
            <h2>A Methodical Approach to Bird ID</h2>
          </div>

          <div className="up-feature-grid">
            {[
              { icon: '👁️', label: 'Visual Clues', desc: 'Learn to observe size, shape, color, and field marks systematically.' },
              { icon: '🦜', label: 'Beak & Body', desc: 'Understand how physical features reveal species and habits.' },
              { icon: '🌿', label: 'Habitat Clues', desc: 'Connect birds to their environments for faster identification.' },
              { icon: '📝', label: 'ID Checklist', desc: 'A step-by-step checklist to use in the field for uncertain sightings.' },
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
