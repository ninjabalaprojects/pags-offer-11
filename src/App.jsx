import { BrowserRouter, Routes, Route } from 'react-router-dom';
import FrontPage       from './pages/FrontPage';
import Up1Page         from './pages/Up1Page';
import Up2Page         from './pages/Up2Page';
import Up3Page         from './pages/Up3Page';
import ThanksPage      from './pages/ThanksPage';
import PrivacyPage     from './pages/PrivacyPage';
import TermsPage       from './pages/TermsPage';
import RefundPage      from './pages/RefundPage';
import ContactPage     from './pages/ContactPage';
import UnsubscribePage from './pages/UnsubscribePage';
import './index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* ── Funnel ────────────────────────────────────── */}
        <Route path="/"              element={<FrontPage />} />
        <Route path="/up1"           element={<Up1Page />} />
        <Route path="/up2"           element={<Up2Page />} />
        <Route path="/up3"           element={<Up3Page />} />
        <Route path="/thanks"        element={<ThanksPage />} />

        {/* ── Legal / Support ───────────────────────────── */}
        <Route path="/privacy-policy" element={<PrivacyPage />} />
        <Route path="/terms-of-use"   element={<TermsPage />} />
        <Route path="/refund-policy"  element={<RefundPage />} />
        <Route path="/contact"        element={<ContactPage />} />
        <Route path="/unsubscribe"    element={<UnsubscribePage />} />
      </Routes>
    </BrowserRouter>
  );
}
