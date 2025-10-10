
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { StructuredData } from "../components/structured-data";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://joniwoods.com'),
  title: "Joni Woods - Burned, Blocked, and Better Than Ever",
  description: "A raw, faith-rooted memoir of divorce, self-discovery, and the healing that begins when you stop pretending you're fine.",
  keywords: "Joni Woods, healing, divorce recovery, self-discovery, relationship coach, emotional intelligence, life coach, author, transformation, self-awareness",
  authors: [{ name: "Joni Woods" }],
  robots: 'index, follow',
  viewport: 'width=device-width, initial-scale=1',
  openGraph: {
    title: "Joni Woods - Burned, Blocked, and Better Than Ever",
    description: "Transform your pain into power. Break generational patterns. Create the future you deserve.",
    url: "https://joniwoods.com",
    siteName: "Joni Woods",
    images: [
      {
        url: "/images/JoniWoods_logo.png",
        width: 1200,
        height: 630,
        alt: "Joni Woods - Life Coach and Author",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joni Woods - Burned, Blocked, and Better Than Ever",
    description: "Transform your pain into power. Break generational patterns. Create the future you deserve.",
    images: ["/images/JoniWoods_logo.png"],
    creator: "@joniwoods730",
  },
  alternates: {
    canonical: "https://joniwoods.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        {/* Preconnect to external domains for faster loading */}
        <link rel="preconnect" href="https://www.googletagmanager.com" />
        <link rel="preconnect" href="https://www.google-analytics.com" />
        <link rel="dns-prefetch" href="https://calendly.com" />
        <link rel="dns-prefetch" href="https://books2read.com" />
        
        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-15GL881LLP"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-15GL881LLP');
            `,
          }}
        />
        <StructuredData />
        <style>
          {`
            /* Ensure all sections with non-white backgrounds are full width */
            section {
              width: 100%;
              margin-left: auto;
              margin-right: auto;
            }
            section:not([style*='background-color: #ffffff']) {
              width: 100%;
            }
          `}
        </style>
      </head>
      <body className={inter.className}>
        {children}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Disable browser scroll restoration
              if ('scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
              
              // Force scroll to top immediately
              window.scrollTo(0, 0);
              
              // Ensure scroll to top after page fully loads
              window.addEventListener('load', function() {
                setTimeout(function() {
                  window.scrollTo(0, 0);
                }, 0);
              });
              
              // Initialize scroll depth tracking
              (function() {
                const scrollDepths = [25, 50, 75, 90, 100];
                const triggered = {};

                function handleScroll() {
                  const windowHeight = window.innerHeight;
                  const documentHeight = document.documentElement.scrollHeight;
                  const scrollTop = window.scrollY || window.pageYOffset;
                  const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

                  scrollDepths.forEach(function(depth) {
                    if (scrollPercent >= depth && !triggered[depth]) {
                      triggered[depth] = true;
                      if (window.gtag) {
                        gtag('event', 'scroll', {
                          event_category: 'engagement',
                          event_label: 'scroll_depth_' + depth,
                          value: depth
                        });
                      }
                    }
                  });
                }

                let scrollTimeout = null;
                window.addEventListener('scroll', function() {
                  if (scrollTimeout) return;
                  scrollTimeout = setTimeout(function() {
                    handleScroll();
                    scrollTimeout = null;
                  }, 500);
                });
              })();
              
              // Initialize section visibility tracking
              window.addEventListener('load', function() {
                if ('IntersectionObserver' in window) {
                  const sections = document.querySelectorAll('section[id]');
                  const observed = {};

                  const observer = new IntersectionObserver(function(entries) {
                    entries.forEach(function(entry) {
                      const sectionId = entry.target.id;
                      if (entry.isIntersecting && !observed[sectionId]) {
                        observed[sectionId] = true;
                        if (window.gtag) {
                          gtag('event', 'section_view', {
                            event_category: 'engagement',
                            event_label: sectionId
                          });
                        }
                      }
                    });
                  }, { threshold: 0.5 });

                  sections.forEach(function(section) {
                    observer.observe(section);
                  });
                }
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
