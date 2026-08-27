import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BADGE_SALESPAGE  = 'https://www.digistore24.com/trusted-badge/47613/y1kSONLoaTuRTFA/salespage';
const BADGE_THANKYOU   = 'https://www.digistore24.com/trusted-badge/47614/lXfK01Uyj8lLuj7/thankyoupage';

/**
 * Loads the correct Digistore24 Trusted Badge based on the current route.
 * /thanks  → thankyoupage badge (47614)
 * all other pages → salespage badge (47613)
 *
 * Re-runs on every route change, removing the previous script first.
 */
export default function DigiStoreBadge() {
  const { pathname } = useLocation();

  useEffect(() => {
    const src = pathname === '/thanks' ? BADGE_THANKYOU : BADGE_SALESPAGE;

    // Remove any previously injected badge script
    document.querySelectorAll('script[data-ds24-badge]').forEach((s) => s.remove());

    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = src;
    script.setAttribute('data-ds24-badge', 'true');
    document.body.appendChild(script);

    return () => {
      document.querySelectorAll('script[data-ds24-badge]').forEach((s) => s.remove());
    };
  }, [pathname]);

  return null;
}
