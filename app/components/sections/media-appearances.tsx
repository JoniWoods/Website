
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const appearances = [
  {
    title: "Newest with Jason Tracey",
    description: "Burned, Blocked, & Better Than Ever w/ Joni Woods",
    image: "/images/media-appearances/podcast1.jpeg",
    category: "Podcast",
    url: "https://youtu.be/B8vZcNDvv48"
  },
  {
    title: "Special Guest Interview",
    description: "Broken to Better than Ever with Special Guest Joni Woods",
    image: "/images/media-appearances/podcast2.jpeg",
    category: "Podcast",
    url: "https://youtu.be/bi12wJllQoE"
  },
  {
    title: "Destination Ann Arbor",
    description: "Workshop",
    image: "/images/media-appearances/podcast3.jpeg",
    category: "Workshop",
    url: "https://youtu.be/sPUDaTnnAz0"
  }
];

export function MediaAppearances() {
  return (
    <section className="px-0 md:container space-y-6 py-4 md:py-6 lg:py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Recent{" "}
          <span className="gradient-text">
            Media Appearances
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Sharing insights on transformation, relationships, and personal growth across various media platforms.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-6 sm:grid-cols-1 md:max-w-[76rem] md:grid-cols-3">
        {appearances.map((appearance, index) => (
          <a key={index} href={appearance.url} target="_blank" rel="noopener noreferrer">
            <Card className="group cursor-pointer transition-all hover:scale-105 h-full flex flex-col">
              <div className="relative aspect-video bg-muted rounded-t-lg overflow-hidden">
                <Image
                  src={appearance.image}
                  alt={`${appearance.title} - ${appearance.description}`}
                  fill
                  className="object-cover transition-transform group-hover:scale-110"
                />
              </div>
              <CardHeader className="flex-none">
                <Badge variant="outline" className="w-fit mb-2">
                  {appearance.category}
                </Badge>
                <CardTitle className="group-hover:text-jw-burgundy transition-colors text-lg">
                  {appearance.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription>
                  {appearance.description}
                </CardDescription>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
      
      <div className="flex justify-center mt-8 px-4 md:px-0">
        <Button asChild className="bg-jw-burgundy hover:bg-jw-rust w-full sm:w-auto" size="lg">
          <Link href="https://www.youtube.com/@joniwoods7141" target="_blank">
            View More Content
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Link>
        </Button>
      </div>
    </section>
  );
}
