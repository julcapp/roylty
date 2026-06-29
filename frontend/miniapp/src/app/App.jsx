import { useEffect, useMemo, useState } from 'react';
import { MiniAppHomePage } from '../pages/MiniAppHomePage.jsx';
import { readUserSettings } from '../consent/userSettingsStorage.js';
import { getInitialSource } from '../analytics/source.js';
import { trackEvent } from '../analytics/trackEvent.js';

export function App() {
  const source = useMemo(() => getInitialSource(), []);
  const [settings, setSettings] = useState(() => readUserSettings());

  useEffect(() => {
    trackEvent('MiniAppOpened', { source, settings_version: settings?.version || null });
  }, [source, settings]);

  return <MiniAppHomePage onConsentAccepted={setSettings} />;
}
