
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section id="about" className="px-0 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Meet{" "}
          <span className="gradient-text">
            Joni Woods
          </span>
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Certified life coach and culture strategist with over 15 years helping individuals, couples, and organizations strengthen communication and lead with emotional intelligence.
        </p>
      </div>
      
      <div className="mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 md:max-w-[64rem] lg:max-w-[80rem] px-4 sm:px-6 md:px-8">
        
        {/* Photo - Shows on mobile after header */}
        <div className="block md:hidden rounded-lg overflow-hidden mx-auto max-w-sm">
          <img
            src="/images/JoniWoods_SideView.webp"
            alt="Joni Woods - Author and Life Coach"
            className="w-full h-auto object-cover rounded-lg"
            style={{ objectPosition: 'center center' }}
          />
        </div>
        
        <div className="grid justify-center gap-6 sm:gap-8 md:gap-10 lg:gap-12 grid-cols-1 md:grid-cols-2">
          {/* Text content - Left side on desktop, after photo on mobile */}
          <div className="relative overflow-hidden rounded-lg bg-background p-2 order-1">
            <div className="flex flex-col justify-between rounded-md p-6">
              <div className="space-y-4 text-muted-foreground/80">
                <p>
                  As the founder of Journey Coaching, I specialize in guiding 
                  clients through personal growth, relational healing, and 
                  values-based leadership.
                </p>
                <p>
                  After navigating my own journey through divorce and rebuilding, 
                  I discovered that healing isn't linear—but it is possible. My 
                  mission is to help you develop self-awareness, establish healthy 
                  boundaries, and build emotionally safe connections.
                </p>
                <p>
                  Based in Ann Arbor, Michigan, I'm also an active community leader, 
                  serving with the Women's Exchange of Washtenaw, United Way, and 
                  Washtenaw Business Association.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 pt-4">
                <Button 
                  className="bg-jw-blue text-white border-2 border-jw-blue hover:bg-jw-blue/60 hover:text-white w-full sm:w-auto" 
                  asChild
                >
                  <Link href="mailto:joniwoods@gmail.com?subject=Sign%20Me%20Up%20for%20the%20Newsletter&body=Hi%20Joni%2C%0A%0AWould%20you%20please%20add%20me%20to%20your%20email%20list%20for%20the%20newsletter%3F%0A%0AThanks%21">
                    Get the Newsletter
                  </Link>
                </Button>
              </div>
            </div>
          </div>
          
          {/* Image - Right side on desktop only (hidden on mobile) */}
          <div className="hidden md:block relative overflow-hidden rounded-lg bg-background p-2 order-2">
            <div className="flex flex-col justify-between rounded-md overflow-hidden h-full">
              <img
                src="/images/JoniWoods_SideView.webp"
                alt="Joni Woods - Author and Life Coach"
                className="w-full h-full object-cover rounded-md"
                style={{ objectPosition: 'center center' }}
              />
            </div>
          </div>
        </div>
        
        {/* Professional Highlights - Full width under both columns */}
        <div className="w-full">
          <Card>
            <CardContent className="p-6 sm:p-8">
              <h3 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Professional Highlights</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground/80">
                    15+ years in communication & emotional intelligence
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground/80">
                    Fortune 500 consultant & keynote speaker
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground/80">
                    Author of "Burned, Blocked, and Better Than Ever"
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground/80">
                    Certified Life Coach (CLC) & Culture Strategist
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground/80">
                    Community leader in Ann Arbor, Michigan
                  </p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="mt-2 h-2 w-2 rounded-full bg-jw-burgundy flex-shrink-0" />
                  <p className="text-sm sm:text-base text-muted-foreground/80">
                    Specializes in relational healing & boundary setting
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
