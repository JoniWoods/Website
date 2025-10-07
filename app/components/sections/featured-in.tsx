
"use client";

import Image from "next/image";
import Link from "next/link";

const features = [
  {
    name: "DisruptHR",
    logo: "/images/featured-in/disrupthr.jpg",
    url: "https://www.linkedin.com/company/disrupthr-llc/",
    width: 130,
    height: 50
  },
  {
    name: "Love Means Business",
    logo: "/images/featured-in/love-means-business.jpg",
    url: "https://www.linkedin.com/company/love-means-business/",
    width: 130,
    height: 50
  },
  {
    name: "Walsh College",
    logo: "/images/featured-in/walsh-college.png",
    url: "https://walshcollege.edu",
    width: 130,
    height: 50
  },
  {
    name: "Washtenaw Business Association",
    logo: "/images/featured-in/wba.png",
    url: "https://www.washtenawbusinessassociation.com",
    width: 130,
    height: 50
  },
  {
    name: "SHRM",
    logo: "/images/featured-in/shrm.png",
    url: "https://www.shrm.org",
    width: 130,
    height: 50
  },
  {
    name: "The Sun Times News",
    logo: "/images/featured-in/sun-times-news.png",
    url: "https://thesuntimesnews.com",
    width: 130,
    height: 50
  }
];

export function FeaturedIn() {
  return (
    <section className="w-full bg-white pt-4 pb-8 sm:pt-6 sm:pb-10 md:pt-8 md:pb-12 lg:pt-10 lg:pb-14 border-t border-b">
      <div className="mx-auto px-4 sm:px-6 md:px-8">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-center text-jw-charcoal mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          As Featured In
        </h2>
        
        {/* Desktop: Static Grid */}
        <div className="hidden lg:flex items-center justify-center gap-12 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Link
              key={index}
              href={feature.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex items-center justify-center opacity-80 hover:opacity-100 transition-opacity duration-300"
              aria-label={`Visit ${feature.name}`}
            >
              <div className="relative flex items-center justify-center h-[50px]">
                <Image
                  src={feature.logo}
                  alt={`${feature.name} logo`}
                  width={feature.width}
                  height={feature.height}
                  className="object-contain max-h-full w-auto"
                />
              </div>
            </Link>
          ))}
        </div>

        {/* Mobile/Tablet: Auto-scrolling carousel */}
        <div className="lg:hidden overflow-hidden relative">
          <div className="flex" style={{ 
            width: 'max-content',
            animation: 'scroll 20s linear infinite'
          }}
          onMouseEnter={(e) => e.currentTarget.style.animationPlayState = 'paused'}
          onMouseLeave={(e) => e.currentTarget.style.animationPlayState = 'running'}
          >
            {/* First set of logos */}
            {features.map((feature, index) => (
              <Link
                key={`first-${index}`}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                aria-label={`Visit ${feature.name}`}
              >
                <div className="relative flex items-center justify-center h-[50px]">
                  <Image
                    src={feature.logo}
                    alt={`${feature.name} logo`}
                    width={feature.width}
                    height={feature.height}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              </Link>
            ))}
            {/* Duplicate set for seamless loop */}
            {features.map((feature, index) => (
              <Link
                key={`second-${index}`}
                href={feature.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-shrink-0 mx-8 opacity-80 hover:opacity-100 transition-opacity duration-300"
                aria-label={`Visit ${feature.name}`}
              >
                <div className="relative flex items-center justify-center h-[50px]">
                  <Image
                    src={feature.logo}
                    alt={`${feature.name} logo`}
                    width={feature.width}
                    height={feature.height}
                    className="object-contain max-h-full w-auto"
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
