"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";
import { useEffect, useState } from "react";

const articles = [
  {
    title: "Regret",
    date: "Oct 27, 2025",
    excerpt: "Learning to extend the same kindness to ourselves that we offer others, and why self-compassion is crucial for growth.",
    topics: ["Self-Compassion", "Grace", "Growth"],
    url: "https://journeylifecoaching.life/2025/10/27/regret/",
    image: "/images/articles/img_3614.jpg"
  },
  {
    title: "The Good!",
    date: "Oct 21, 2025",
    excerpt: "A heartfelt exploration of vulnerability, healing, and the courage it takes to show up authentically in our relationships.",
    topics: ["Vulnerability", "Healing", "Authenticity"],
    url: "https://journeylifecoaching.life/2025/10/21/the-good/",
    image: "/images/articles/img_3570.jpeg"
  },
  {
    title: "The War Inside",
    date: "Oct 17, 2025",
    excerpt: "Shifting perspective from viewing life's challenges as tests to seeing them as affirmations of our growth and resilience.",
    topics: ["Mindset", "Growth", "Resilience"],
    url: "https://journeylifecoaching.life/2025/10/17/the-war-inside/",
    image: "/images/articles/img_3069.jpeg"
  },
  {
    title: "Love, Not Trust",
    date: "Oct 14, 2025",
    excerpt: "A poetic journey about finding direction in life when everything feels uncertain and the path forward isn't clear.",
    topics: ["Direction", "Poetry", "Life"],
    url: "https://journeylifecoaching.life/2025/10/14/love-not-trust/",
    image: "/images/articles/img_3814.jpeg"
  },
  {
    title: "A Little Laugh, A Big Win, and a Heart Full of Gratitude",
    date: "Oct 10, 2025",
    excerpt: "Sometimes the most important journey is the one that leads you back to yourself and your true purpose.",
    topics: ["Purpose", "Direction", "Self-Discovery"],
    url: "https://journeylifecoaching.life/2025/10/10/a-little-laugh-a-big-win-and-a-heart-full-of-gratitude-%f0%9f%92%9b/",
    image: "/images/articles/img_2715.jpeg"
  },
  {
    title: "Unsubscribed",
    date: "Oct 3, 2025",
    excerpt: "Finding peace and wisdom in life's everyday moments and learning to be present in each experience.",
    topics: ["Mindfulness", "Peace", "Presence"],
    url: "https://journeylifecoaching.life/2025/10/03/unsubscribing-from-pain/",
    image: "/images/articles/unsb.jpeg"
  }
];

// type WordPressPost = {
//   id: number;
//   title: {
//     rendered: string;
//   };
//   excerpt: {
//     rendered: string;
//   };
//   date: string;
//   link: string;
//   _embedded?: {
//     'wp:featuredmedia'?: Array<{
//       source_url: string;
//     }>;
//   };
// };

export function Blog() {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    async function fetchPosts() {
      try {
        // Try using a different WordPress API endpoint
        const response = await fetch(
          'https://public-api.wordpress.com/rest/v1.1/sites/journeylifecoaching.life/posts', {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          }
        });

        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }

        const data = await response.json();
        console.log('WordPress Posts:', data);
        setArticles(data.posts?.slice(0, 6) || []);
      } catch (err) {
        console.error('Error fetching posts:', err);
      }
    }

    console.log('Blog component mounted'); // This should appear first
    fetchPosts(); // Actually call the function
  }, []);
  console.log('Rendering Blog component with articles:', articles);
  return (
    <section id="resources" className="px-4 md:px-8 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Latest{" "}
          <span className="gradient-text">
            Articles
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Practical wisdom for your transformation journey, fresh perspectives on healing,
          and insights for building emotionally intelligent relationships.
        </p>
      </div>

      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[76rem] md:grid-cols-3">
        {articles.map((article:any, index:number) => (
          <Card
            key={index}
            className="group cursor-pointer transition-all hover:scale-105 h-full flex flex-col overflow-hidden relative"
          >
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-90 transition-opacity"
              style={{ backgroundImage: `url(${article?.post_thumbnail?.URL})` }}
            ></div>

            {/* Overlay to darken image for better text contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/70"></div>

            {/* Content Layer */}
            <div className="relative z-10 flex flex-col h-full justify-end p-4">
              <CardHeader className="flex-none h-56 sm:h-64 md:h-72 flex flex-col justify-end">
                <Badge variant="outline" className="w-fit mb-2 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                  {article?.date
                  ? new Date(article.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "2-digit",
                      year: "numeric",
                      timeZone: "UTC",
                    })
                  : ""}
                </Badge>
                <CardTitle className="text-white drop-shadow-md group-hover:text-jw-burgundy transition-colors text-lg leading-snug">
                  {article?.title}
                </CardTitle>
              </CardHeader>

              <CardFooter>
                <Link href={article?.URL} target="_blank" className="w-full">
                  <div className="flex items-center text-white font-semibold group-hover:text-jw-rust transition-colors w-full drop-shadow-md">
                    <span>Read Full Article</span>
                    <svg
                      className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </Link>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>

      <div className="mx-auto text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button asChild className="bg-jw-blue text-white hover:bg-jw-blue/80 w-full sm:w-auto">
            <Link href="http://journeylifecoaching.life" target="_blank" onClick={trackCTAClick.visitBlog}>
              Visit Blog
            </Link>
          </Button>
          <Button asChild className="bg-jw-burgundy text-white border-2 border-jw-burgundy/80 hover:bg-transparent hover:text-jw-burgundy hover:border-jw-burgundy w-full sm:w-auto">
            <Link href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" target="_blank" onClick={trackCTAClick.subscribeYouTube}>
              YouTube
            </Link>
          </Button>
          {/* <a
            className="text-white/80 hover:text-white transition-colors w-full sm:w-auto text-center"
            href="mailto:joniwoods@gmail.com?subject=Sign%20Me%20Up%20for%20the%20Newsletter&amp;body=Hi%20Joni%2C%0A%0AWould%20you%20please%20add%20me%20to%20your%20email%20list%20for%20the%20newsletter%3F%0A%0AThanks%21"
          >
            Get the Newsletter
          </a> */}
        </div>
      </div>
    </section>
  );
}
