import { useState, useEffect } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { t } from '../lib/translations';

const CONSENT_KEY = 'fs_cookie_consent';

function loadTrackingScripts() {
  // Google Tag Manager
  const gtmScript = document.createElement('script');
  gtmScript.defer = true;
  gtmScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-1K80RTFP9G';
  document.body.appendChild(gtmScript);

  const gtmInline = document.createElement('script');
  gtmInline.defer = true;
  gtmInline.textContent = `
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-1K80RTFP9G');
  `;
  document.body.appendChild(gtmInline);

  // Meta Pixel
  const fbScript = document.createElement('script');
  fbScript.defer = true;
  fbScript.textContent = `
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '1510397547152057');
    fbq('track', 'PageView');
  `;
  document.body.appendChild(fbScript);
}

export function CookieConsent() {
  const { lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem(CONSENT_KEY);
    if (consent === 'accepted') {
      // Already accepted — load scripts silently
      loadTrackingScripts();
    } else if (consent === null) {
      // First visit — show banner after short delay
      const t = setTimeout(() => setVisible(true), 1200);
      return () => clearTimeout(t);
    }
    // consent === 'declined' → do nothing, no scripts loaded
  }, []);

  const handleAccept = () => {
    localStorage.setItem(CONSENT_KEY, 'accepted');
    setVisible(false);
    loadTrackingScripts();
  };

  const handleDecline = () => {
    localStorage.setItem(CONSENT_KEY, 'declined');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-label="Cookie consent"
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 9999,
        background: '#1a1a1a',
        color: '#fff',
        padding: '16px 24px',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        boxShadow: '0 -4px 24px rgba(0,0,0,0.3)',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', flexWrap: 'wrap' }}>
        <p style={{ margin: 0, fontSize: '14px', lineHeight: '1.5', flex: 1, minWidth: '200px', color: '#e5e5e5' }}>
          {t(lang, 'cookie_text')}{' '}
          <span style={{ color: '#aaa' }}>
            {t(lang, 'cookie_sub')}
          </span>
        </p>
        <div style={{ display: 'flex', gap: '8px', flexShrink: 0, alignItems: 'center' }}>
          <button
            onClick={handleDecline}
            style={{
              padding: '8px 16px',
              borderRadius: '6px',
              border: '1px solid #555',
              background: 'transparent',
              color: '#aaa',
              fontSize: '13px',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {t(lang, 'cookie_decline')}
          </button>
          <button
            onClick={handleAccept}
            style={{
              padding: '8px 20px',
              borderRadius: '6px',
              border: 'none',
              background: '#059669',
              color: '#fff',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              fontFamily: 'inherit',
            }}
          >
            {t(lang, 'cookie_accept')}
          </button>
        </div>
      </div>
    </div>
  );
}
