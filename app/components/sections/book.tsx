
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";

export function Book() {
  return (
    <section id="book" className="px-0 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
        <div className="relative overflow-hidden rounded-lg bg-background p-6">
          <div className="flex flex-col items-center justify-center h-full">
            <div className="relative w-full max-w-sm aspect-[3/4] mb-6">
              <Image
                src="/images/Woods_FrontCover_3D.png"
                alt="Burned, Blocked, and Better Than Ever - Book Cover"
                fill
                className="object-contain"
              />
            </div>
            <Button 
              asChild 
              className="bg-jw-blue text-white border-2 border-jw-blue hover:bg-jw-blue/60 hover:text-white"
            >
              <Link href="https://books2read.com/u/mq2K7v" target="_blank">
                Available on All Platforms
              </Link>
            </Button>
          </div>
        </div>
        
        <div className="relative overflow-hidden rounded-lg bg-background p-2">
          <div className="flex flex-col justify-between rounded-md p-6 h-full">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Get the <span className="gradient-text">Book</span>
              </h2>
              <h3 className="text-xl font-semibold text-muted-foreground">
                A Raw Journey of Healing
              </h3>
              
              <div className="space-y-4 text-muted-foreground">
                <p className="font-semibold text-foreground">
                  For anyone who's stayed too long or felt too broken to begin again, you'll learn:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-jw-burgundy mr-2">•</span>
                    Why there's no merit badge for suffering through relationships that are breaking you
                  </li>
                  <li className="flex items-start">
                    <span className="text-jw-burgundy mr-2">•</span>
                    Why healing starts with radical self-awareness—and how to access it
                  </li>
                  <li className="flex items-start">
                    <span className="text-jw-burgundy mr-2">•</span>
                    How to communicate your boundaries and stop performing peace
                  </li>
                  <li className="flex items-start">
                    <span className="text-jw-burgundy mr-2">•</span>
                    What men are navigating emotionally—and why it matters to your healing
                  </li>
                  <li className="flex items-start">
                    <span className="text-jw-burgundy mr-2">•</span>
                    How to rebuild your identity without roles, titles, or someone else's timeline
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-4 pt-6">
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Paperback $17.99</Badge>
                <Badge variant="outline">eBook $9.99</Badge>
                <Badge variant="outline">Hardcover $27.99</Badge>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button asChild className="bg-jw-burgundy hover:bg-jw-rust w-full sm:w-auto">
                  <Link href="https://books2read.com/u/mq2K7v" target="_blank">
                    Buy Now
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" asChild className="w-full sm:w-auto">
                  <Link href="/Joni Woods Media Kit_Final.pdf" target="_blank">
                    Book Preview
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
