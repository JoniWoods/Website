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
        scroll_depth?: number;
        file_name?: string;
        link_url?: string;
        link_domain?: string;
      }
    ) => void;
  }
}

export const trackEvent = (
  action: string,
  category: string,
  label: string,
  value?: number,
  additionalParams?: Record<string, any>
) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      ...(value !== undefined && { value }),
      ...additionalParams,
    });
  }
};

// Scroll depth tracking
let scrollDepthTracked: number[] = [];

export const initScrollTracking = () => {
  if (typeof window === 'undefined') return;

  const trackScrollDepth = () => {
    const scrollPercentage = Math.round(
      (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
    );

    // Track at 25%, 50%, 75%, and 100% milestones
    const milestones = [25, 50, 75, 100];
    
    milestones.forEach(milestone => {
      if (scrollPercentage >= milestone && !scrollDepthTracked.includes(milestone)) {
        scrollDepthTracked.push(milestone);
        trackEvent('scroll', 'engagement', `scroll_depth_${milestone}`, milestone, {
          scroll_depth: milestone
        });
      }
    });
  };

  // Debounce scroll events
  let scrollTimeout: NodeJS.Timeout;
  const handleScroll = () => {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(trackScrollDepth, 100);
  };

  window.addEventListener('scroll', handleScroll, { passive: true });

  // Reset on page navigation
  return () => {
    window.removeEventListener('scroll', handleScroll);
    scrollDepthTracked = [];
  };
};

// PDF/File download tracking
export const trackFileDownload = (fileName: string, fileUrl: string) => {
  trackEvent('file_download', 'engagement', fileName, undefined, {
    file_name: fileName,
    link_url: fileUrl
  });
};

// Outbound link tracking
export const trackOutboundLink = (url: string, linkText: string) => {
  try {
    const domain = new URL(url).hostname;
    trackEvent('outbound_click', 'engagement', linkText, undefined, {
      link_url: url,
      link_domain: domain
    });
  } catch (e) {
    // Invalid URL, skip tracking
  }
};

// Predefined tracking functions for common CTAs
export const trackCTAClick = {
  bookCall: () => trackEvent('click', 'engagement', 'book_call_calendly'),
  buyBook: () => {
    trackEvent('click', 'conversion', 'buy_book');
    trackOutboundLink('https://books2read.com/u/mq2K7v', 'Buy Book');
  },
  exploreBook: () => {
    trackEvent('click', 'engagement', 'explore_book_pdf');
    trackFileDownload('Explore My Book.pdf', '/Explore My Book.pdf');
  },
  getNewsletter: () => trackEvent('click', 'engagement', 'get_newsletter'),
  workWithMe: () => {
    trackEvent('click', 'engagement', 'work_with_me');
    trackOutboundLink('https://calendly.com/joniwoods/virtual-coffee', 'Work With Me');
  },
  bookDiscoveryCall: () => {
    trackEvent('click', 'conversion', 'book_discovery_call');
    trackOutboundLink('https://calendly.com/joniwoods/virtual-coffee', 'Book Discovery Call');
  },
  scheduleConsultation: () => {
    trackEvent('click', 'conversion', 'schedule_consultation');
    trackOutboundLink('https://calendly.com/joniwoods/virtual-coffee', 'Schedule Consultation');
  },
  bookSpeaking: () => {
    trackEvent('click', 'conversion', 'book_speaking');
    trackOutboundLink('https://calendly.com/joniwoods/virtual-coffee', 'Book Speaking');
  },
  startHealing: () => {
    trackEvent('click', 'conversion', 'start_healing');
    trackOutboundLink('https://calendly.com/joniwoods/virtual-coffee', 'Start Healing');
  },
  visitBlog: () => {
    trackEvent('click', 'engagement', 'visit_blog');
    trackOutboundLink('http://journeylifecoaching.life', 'Visit Blog');
  },
  visitYoutube: () => {
    trackEvent('click', 'engagement', 'visit_youtube');
    trackOutboundLink('https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw', 'YouTube');
  },
  subscribeYouTube: () => {
    trackEvent('click', 'engagement', 'subscribe_youtube');
    trackOutboundLink('https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw', 'Subscribe YouTube');
  },
  freeConsultation: () => trackEvent('click', 'conversion', 'free_consultation'),
  getBook: () => trackEvent('click', 'conversion', 'get_book'),
  transformationRoadmap: () => {
    trackEvent('click', 'conversion', 'transformation_roadmap');
    trackFileDownload('transformation_roadmap.pdf', '/transformation_roadmap.pdf');
  },
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

