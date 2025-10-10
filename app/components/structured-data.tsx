export function StructuredData() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://joniwoods.com/#person",
        "name": "Joni Woods",
        "url": "https://joniwoods.com",
        "image": "https://joniwoods.com/images/Joni_Woods_Author_Portrait_Optimized.jpg",
        "description": "Certified life coach, culture strategist, speaker, and author helping people transform through self-awareness, healing, and real human connection.",
        "jobTitle": "Life Coach & Author",
        "worksFor": {
          "@type": "Organization",
          "name": "Journey Life Coaching"
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
        "image": "https://joniwoods.com/images/Woods_FrontCover_3D.png",
        "genre": "Self-Help, Memoir",
        "url": "https://books2read.com/u/bw5ZDa"
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
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://joniwoods.com/?s={search_term_string}",
          "query-input": "required name=search_term_string"
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
        "description": "Professional life coaching services specializing in emotional intelligence, relationship healing, and personal transformation."
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