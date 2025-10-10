// Google Analytics event tracking utilities

declare global {
  interface Window {
    gtag?: (
      command: string,
      action: string,
      params: {
        event_category?: string;
        event_label?: string;
        value?: number;
      }
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      ...(value !== undefined && { value }),
    });
  }
};

// Predefined tracking functions for common CTAs
export const trackCTAClick = {
  bookCall: () => trackEvent('click', 'engagement', 'book_call_calendly'),
  buyBook: () => trackEvent('click', 'conversion', 'buy_book'),
  exploreBook: () => trackEvent('click', 'engagement', 'explore_book_pdf'),
  getNewsletter: () => trackEvent('click', 'engagement', 'get_newsletter'),
  workWithMe: () => trackEvent('click', 'engagement', 'work_with_me'),
  bookDiscoveryCall: () => trackEvent('click', 'conversion', 'book_discovery_call'),
  scheduleConsultation: () => trackEvent('click', 'conversion', 'schedule_consultation'),
  bookSpeaking: () => trackEvent('click', 'conversion', 'book_speaking'),
  startHealing: () => trackEvent('click', 'conversion', 'start_healing'),
  visitBlog: () => trackEvent('click', 'engagement', 'visit_blog'),
  visitYoutube: () => trackEvent('click', 'engagement', 'visit_youtube'),
  subscribeYouTube: () => trackEvent('click', 'engagement', 'subscribe_youtube'),
  freeConsultation: () => trackEvent('click', 'conversion', 'free_consultation'),
  getBook: () => trackEvent('click', 'conversion', 'get_book'),
  transformationRoadmap: () => trackEvent('click', 'conversion', 'transformation_roadmap'),
};

// Scroll depth tracking
export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const scrollDepths = [25, 50, 75, 90, 100];
  const triggered: { [key: number]: boolean } = {};

  const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY || window.pageYOffset;
    const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

    scrollDepths.forEach((depth) => {
      if (scrollPercent >= depth && !triggered[depth]) {
        triggered[depth] = true;
        trackEvent('scroll', 'engagement', `scroll_depth_${depth}`, depth);
      }
    });
  };

  // Throttle scroll events to once every 500ms
  let scrollTimeout: NodeJS.Timeout | null = null;
  window.addEventListener('scroll', () => {
    if (scrollTimeout) return;
    scrollTimeout = setTimeout(() => {
      handleScroll();
      scrollTimeout = null;
    }, 500);
  });
};

// Section visibility tracking (when sections come into view)
export const trackSectionView = (sectionName: string) => {
  trackEvent('section_view', 'engagement', sectionName);
};

export const initSectionTracking = () => {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const sections = document.querySelectorAll('section[id]');
  const observed: { [key: string]: boolean } = {};

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const sectionId = entry.target.id;
        if (entry.isIntersecting && !observed[sectionId]) {
          observed[sectionId] = true;
          trackSectionView(sectionId);
        }
      });
    },
    {
      threshold: 0.5, // Trigger when 50% of section is visible
    }
  );

  sections.forEach((section) => observer.observe(section));
};

