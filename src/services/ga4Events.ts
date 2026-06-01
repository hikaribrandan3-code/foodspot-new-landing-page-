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

// Key conversion events (configured in GA4)
export const trackQualifyLead = (source: string) => {
  trackGA4Event('qualify_lead', {
    lead_source: source,
    event_category: 'conversion'
  });
};

export const trackCloseConvertLead = (reason: string) => {
  trackGA4Event('close_convert_lead', {
    close_reason: reason,
    event_category: 'conversion'
  });
};

export const trackPurchase = (value: number, currency: string = 'ARS') => {
  trackGA4Event('purchase', {
    value: value,
    currency: currency,
    event_category: 'conversion'
  });
};

// Engagement tracking
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
  // Also fire qualify_lead when form is submitted
  trackQualifyLead(formName);
};

export const trackCtaClick = (ctaName: string, location?: string) => {
  trackGA4Event('cta_click', {
    cta_name: ctaName,
    cta_location: location || 'unknown',
    event_category: 'conversion'
  });
};

export const trackPricingSelection = (planName: string) => {
  trackGA4Event('pricing_selection', {
    plan_name: planName,
    event_category: 'conversion'
  });
};

export const trackSectionView = (sectionName: string) => {
  trackGA4Event('section_view', {
    section_name: sectionName,
    event_category: 'engagement'
  });
};

export const trackFeatureInteraction = (featureName: string) => {
  trackGA4Event('feature_interaction', {
    feature_name: featureName,
    event_category: 'engagement'
  });
};

export const trackFaqClick = (question: string) => {
  trackGA4Event('faq_click', {
    question: question,
    event_category: 'engagement'
  });
};

export const trackNavigation = (destination: string) => {
  trackGA4Event('navigation', {
    destination: destination,
    event_category: 'engagement'
  });
};
