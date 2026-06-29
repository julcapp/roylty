import React, { useEffect, useMemo, useState } from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css';

const CONSENT_STORAGE_KEY = 'soft_ice_consent_v1';
const CONSENT_VERSION = '2026-06-26.v1';

function getInitialSource() {
  const params = new URLSearchParams(window.location.search);
  return {
    utm_source: params.get('utm_source') || 'direct',
    entry_point: params.get('entry_point') || 'miniapp_home',
    referral_code: params.get('ref') || null
  };
}

function readConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}

function saveConsent(categories) {
  const record = {
    version: CONSENT_VERSION,
    categories,
    granted_at: new Date().toISOString(),
    source: 'miniapp_home'
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(record));
  return record;
}

function trackEvent(eventName, payload = {}) {
  const event = {
    event_name: eventName,
    occurred_at: new Date().toISOString(),
    source: 'telegram_mini_app',
    payload
  };

  // В MVP логируем событие локально. После появления backend отправляем через Analytics API.
  console.info('[analytics]', event);
}

function AppHeader() {
  return (
    <header className="app-header">
      <div>
        <p className="eyebrow">Soft ICE Platform</p>
        <h1>У Тимоши</h1>
      </div>
      <div className="avatar" aria-label="Тимоша">🍦</div>
    </header>
  );
}

function ActionCard({ icon, title, description, badge, onClick }) {
  return (
    <button className="action-card" onClick={onClick} type="button">
      <span className="action-icon">{icon}</span>
      <span className="action-content">
        <span className="action-title">{title}</span>
        <span className="action-description">{description}</span>
      </span>
      {badge ? <span className="badge">{badge}</span> : <span className="arrow">›</span>}
    </button>
  );
}

function CookieConsent({ onAccepted }) {
  const [isOpen, setIsOpen] = useState(() => !readConsent());

  if (!isOpen) {
    return null;
  }

  function acceptNecessary() {
    const record = saveConsent({ necessary: true, analytics: false, personalization: false, marketing: false });
    trackEvent('CookieConsentAcceptedNecessary', { version: record.version });
    setIsOpen(false);
    onAccepted(record);
  }

  function acceptAll() {
    const record = saveConsent({ necessary: true, analytics: true, personalization: true, marketing: false });
    trackEvent('CookieConsentAcceptedAll', { version: record.version });
    setIsOpen(false);
    onAccepted(record);
  }

  return (
    <section className="consent-panel" aria-label="Cookie consent">
      <div>
        <h2>Настройки удобства и статистики</h2>
        <p>
          Мы используем обязательные cookie для работы сервиса. Аналитику и персонализацию включаем только с вашего согласия.
        </p>
      </div>
      <div className="consent-actions">
        <button className="button secondary" onClick={acceptNecessary} type="button">Только необходимые</button>
        <button className="button primary" onClick={acceptAll} type="button">Принять и продолжить</button>
      </div>
    </section>
  );
}

function App() {
  const source = useMemo(() => getInitialSource(), []);
  const [consent, setConsent] = useState(() => readConsent());

  useEffect(() => {
    trackEvent('MiniAppOpened', { source, consent_version: consent?.version || null });
  }, [source, consent]);

  return (
    <main className="app-shell">
      <AppHeader />

      <section className="hero-card">
        <p className="eyebrow">Добро пожаловать</p>
        <h2>Соберите своё мягкое мороженое</h2>
        <p>Выберите продукт, вступайте в Клуб Тимоши и получайте бонусы за любимый десерт.</p>
      </section>

      <section className="card-grid" aria-label="Главные действия">
        <ActionCard
          icon="🍦"
          title="Купить мороженое"
          description="Вкус дня, сироп и топпинг на выбор"
          badge="130 ₽"
          onClick={() => trackEvent('ProductViewed', { product_id: 'flavor_of_day' })}
        />
        <ActionCard
          icon="🎁"
          title="Клуб Тимоши"
          description="Скидка 20%, бонусы и специальные предложения"
          badge="300 ₽"
          onClick={() => trackEvent('ClubOfferShown')}
        />
        <ActionCard
          icon="⭐"
          title="Бонусы"
          description="Копите и используйте бонусы в следующих покупках"
          onClick={() => trackEvent('BonusSectionOpened')}
        />
        <ActionCard
          icon="📍"
          title="Где купить"
          description="Найдите ближайший автомат или точку продаж"
          onClick={() => trackEvent('LocationSectionOpened')}
        />
      </section>

      <nav className="bottom-nav" aria-label="Навигация">
        <button type="button" aria-label="Главная">🏠<span>Главная</span></button>
        <button type="button" aria-label="Купить">🍦<span>Купить</span></button>
        <button type="button" aria-label="Клуб">🎁<span>Клуб</span></button>
        <button type="button" aria-label="Профиль">👤<span>Профиль</span></button>
      </nav>

      <CookieConsent onAccepted={setConsent} />
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
