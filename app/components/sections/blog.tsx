
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";

const articles = [
  {
    title: "With all my love, xoxo J",
    category: "Personal Growth",
    excerpt: "A heartfelt exploration of vulnerability, healing, and the courage it takes to show up authentically in our relationships.",
    topics: ["Vulnerability", "Healing", "Authenticity"],
    url: "https://journeylifecoaching.life/blog/with-all-my-love-xoxo-j/"
  },
  {
    title: "Not Tests, Affirmations!",
    category: "Mindset",
    excerpt: "Shifting perspective from viewing life's challenges as tests to seeing them as affirmations of our growth and resilience.",
    topics: ["Mindset", "Growth", "Resilience"],
    url: "https://journeylifecoaching.life/blog/not-tests-affirmations/"
  },
  {
    title: "The North Star",
    category: "Poetry",
    excerpt: "A poetic journey about finding direction in life when everything feels uncertain and the path forward isn't clear.",
    topics: ["Direction", "Poetry", "Life"],
    url: "https://journeylifecoaching.life/blog/the-north-star/"
  },
  {
    title: "Show Yourself Grace",
    category: "Self-Compassion",
    excerpt: "Learning to extend the same kindness to ourselves that we offer others, and why self-compassion is crucial for growth.",
    topics: ["Self-Compassion", "Grace", "Growth"],
    url: "https://journeylifecoaching.life/blog/the-north-star/"
  },
  {
    title: "Finding Your Way",
    category: "Direction",
    excerpt: "Sometimes the most important journey is the one that leads you back to yourself and your true purpose.",
    topics: ["Purpose", "Direction", "Self-Discovery"],
    url: "https://journeylifecoaching.life/blog/with-all-my-love-xoxo-j/"
  },
  {
    title: "Mindful Moments",
    category: "Mindfulness",
    excerpt: "Finding peace and wisdom in life's everyday moments and learning to be present in each experience.",
    topics: ["Mindfulness", "Peace", "Presence"],
    url: "https://journeylifecoaching.life/blog/not-tests-affirmations/"
  }
];

export function Blog() {
  return (
    <section id="resources" className="px-0 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
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
        {articles.map((article, index) => (
          <Card key={index} className="group cursor-pointer transition-all hover:scale-105 h-full flex flex-col">
            <CardHeader className="flex-none">
              <Badge variant="outline" className="w-fit mb-2">
                {article.category}
              </Badge>
              <CardTitle className="group-hover:text-jw-burgundy transition-colors text-lg">
                {article.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1">
              <CardDescription className="mb-4">
                {article.excerpt}
              </CardDescription>
              <div className="flex flex-wrap gap-2">
                {article.topics.map((topic, idx) => (
                  <span key={idx} className="text-xs font-bold text-jw-blue">
                    {topic}
                  </span>
                ))}
              </div>
            </CardContent>
            <CardFooter>
              <Link href={article.url} target="_blank" className="w-full">
                <div className="flex items-center text-jw-burgundy font-semibold group-hover:text-jw-rust transition-colors w-full">
                  <span>Read Full Article</span>
                  <svg className="ml-auto h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mx-auto text-center space-y-4">
        <div className="flex flex-col sm:flex-row gap-2 justify-center">
          <Button asChild className="bg-jw-blue text-white hover:bg-jw-blue/80 w-full sm:w-auto">
            <Link href="http://journeylifecoaching.life" target="_blank">
              Visit Blog
            </Link>
          </Button>
          <Button asChild className="bg-jw-burgundy text-white border-2 border-jw-burgundy/80 hover:bg-transparent hover:text-jw-burgundy hover:border-jw-burgundy w-full sm:w-auto">
            <Link href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" target="_blank">
              YouTube
            </Link>
          </Button>
          <Button asChild className="bg-jw-rust text-white hover:bg-jw-rust/80 w-full sm:w-auto">
            <Link href="https://journeylifecoaching.life/newsletter/" target="_blank">
              Get the Newsletter
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
