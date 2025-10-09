export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://joniwoods.com/#person",
        "name": "Joni Woods",
        "url": "https://joniwoods.com",
        "image": {
          "@type": "ImageObject",
          "url": "https://joniwoods.com/images/Joni_Woods_Author_Portrait_Optimized.jpg",
          "width": 800,
          "height": 800
        },
        "description": "Certified life coach, culture strategist, speaker, and author helping people transform through self-awareness, healing, and real human connection.",
        "jobTitle": ["Life Coach", "Author", "Speaker", "Culture Strategist"],
        "knowsAbout": [
          "Life Coaching",
          "Emotional Intelligence", 
          "Relationship Coaching",
          "Personal Transformation",
          "Divorce Recovery",
          "Self-Awareness",
          "Corporate Culture Strategy"
        ],
        "worksFor": {
          "@type": "Organization",
          "name": "Journey Life Coaching"
        },
        "alumniOf": {
          "@type": "Organization",
          "name": "Certified Professional Coach"
        },
        "sameAs": [
          "https://www.facebook.com/joni.woods.9",
          "https://www.instagram.com/joniwoods",
          "https://www.tiktok.com/@joniwoods730",
          "https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw",
          "http://journeylifecoaching.life"
        ]
      },
      {
        "@type": "Book",
        "@id": "https://joniwoods.com/#book",
        "name": "Burned, Blocked, and Better Than Ever",
        "author": {
          "@id": "https://joniwoods.com/#person"
        },
        "description": "A raw, faith-rooted memoir of divorce, self-discovery, and the healing that begins when you stop pretending you're fine.",
        "image": {
          "@type": "ImageObject",
          "url": "https://joniwoods.com/images/Woods_FrontCover_3D.png",
          "width": 400,
          "height": 600
        },
        "genre": ["Self-Help", "Memoir", "Personal Development"],
        "url": "https://books2read.com/u/bw5ZDa",
        "bookFormat": "EBook",
        "inLanguage": "en-US",
        "about": [
          "Divorce Recovery",
          "Self-Discovery", 
          "Healing",
          "Personal Transformation",
          "Faith",
          "Self-Awareness"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://joniwoods.com/#website",
        "url": "https://joniwoods.com",
        "name": "Joni Woods - Life Coach & Author",
        "description": "Transform your pain into power. Break generational patterns. Create the future you deserve.",
        "publisher": {
          "@id": "https://joniwoods.com/#person"
        },
        "inLanguage": "en-US",
        "copyrightYear": "2024",
        "copyrightHolder": {
          "@id": "https://joniwoods.com/#person"
        }
      },
      {
        "@type": "Organization",
        "@id": "https://joniwoods.com/#organization",
        "name": "Journey Life Coaching",
        "url": "http://journeylifecoaching.life",
        "founder": {
          "@id": "https://joniwoods.com/#person"
        },
        "description": "Professional life coaching services specializing in emotional intelligence, relationship healing, and personal transformation.",
        "serviceType": [
          "Individual Life Coaching",
          "Corporate Culture Strategy",
          "Relationship Coaching", 
          "Speaking Services",
          "Workshop Facilitation"
        ],
        "areaServed": "Worldwide",
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": "Life Coaching Services",
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": "Individual Life Coaching",
                "description": "One-on-one coaching sessions for personal transformation and goal achievement"
              }
            },
            {
              "@type": "Offer", 
              "itemOffered": {
                "@type": "Service",
                "name": "Corporate Culture Strategy",
                "description": "Organizational transformation and culture development consulting"
              }
            },
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service", 
                "name": "Speaking & Workshops",
                "description": "Motivational speaking and interactive workshops on personal development"
              }
            }
          ]
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://joniwoods.com/#webpage",
        "url": "https://joniwoods.com",
        "name": "Joni Woods - Burned, Blocked, and Better Than Ever",
        "description": "Transform your pain into power. Break generational patterns. Create the future you deserve.",
        "isPartOf": {
          "@id": "https://joniwoods.com/#website"
        },
        "about": {
          "@id": "https://joniwoods.com/#person"
        },
        "mainEntity": {
          "@id": "https://joniwoods.com/#person"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Home",
              "item": "https://joniwoods.com"
            }
          ]
        }
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData)
      }}
    />
  );
}