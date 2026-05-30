/**
 * GA4 Event Tracking Utility
 * Tracks user interactions for conversion analytics
 */

declare global {
  interface Window {
    gtag?: (command: string, ...args: any[]) => void;
  }
}

export const trackGA4Event = (eventName: string, eventData?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, eventData);
  }
};

// Specific event tracking functions
export const trackButtonClick = (buttonName: string, location: string) => {
  trackGA4Event('button_click', {
    button_name: buttonName,
    button_location: location,
    event_category: 'engagement'
  });
};

export const trackFormSubmit = (formName: string) => {
  trackGA4Event('form_submission', {
    form_name: formName,
    event_category: 'conversion'
  });
};

export const trackCtaClick = (ctaName: string) => {
  trackGA4Event('cta_click', {
    cta_name: ctaName,
    event_category: 'conversion'
  });
};

export const trackPricingSelection = (planName: string) => {
  trackGA4Event('pricing_selection', {
    plan_name: planName,
    event_category: 'conversion'
  });
};
