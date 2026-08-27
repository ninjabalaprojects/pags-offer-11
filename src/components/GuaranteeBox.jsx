import { SITE_CONFIG } from '../config';
import GuaranteeBadge from './GuaranteeBadge';
import './GuaranteeBox.css';

export default function GuaranteeBox() {
  return (
    <div className="guarantee-box">
      <GuaranteeBadge size="lg" />
      <div className="guarantee-content">
        <h4 className="guarantee-title">60-Day Money-Back Guarantee</h4>
        <p className="guarantee-body">
          We stand behind the quality of our guides. If you are not satisfied with your
          purchase for any reason, contact our support team within 60 days of purchase
          and we will process a full refund — no complicated questions, no lengthy procedures.
        </p>
        <p className="guarantee-contact">
          To request a refund, contact us at{' '}
          <a href={`mailto:${SITE_CONFIG.supportEmail}`}>{SITE_CONFIG.supportEmail}</a>.
        </p>
      </div>
    </div>
  );
}
