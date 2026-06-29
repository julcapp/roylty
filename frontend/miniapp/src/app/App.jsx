import { useEffect, useMemo, useState } from 'react';
import { MiniAppHomePage } from '../pages/MiniAppHomePage.jsx';
import { readConsent } from '../consent/consentStorage.js';
import { getInitialSource } from '../analytics/source.js';
import { trackEvent } from '../analytics/trackEvent.js';

export function App() {
  const source = useMemo(() => getInitialSource(), []);
  const [consent, setConsent] = useState(() => readConsent());

  useEffect(() => {
    trackEvent('MiniAppOpened', { source, consent_version: consent?.version || null });
  }, [source, consent]);

  return <MiniAppHomePage onConsentAccepted={setConsent} />;
}
