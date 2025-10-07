
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Hero() {
  return (
    <section className="w-full bg-white">
      {/* Mobile/Tablet Layout - Image First, Then Text */}
      <div className="md:hidden">
        {/* Mobile Hero Image - Full Width */}
        <div className="w-full">
          <Image
            src="/images/Joni_Woods_Author_Portrait_Optimized.jpg"
            alt="Joni Woods"
            width={600}
            height={800}
            className="w-full h-auto"
            priority
          />
        </div>
        
        <div className="px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col items-start text-left space-y-3 sm:space-y-4 max-w-2xl mx-auto">
            <h1 className="font-heading text-xl sm:text-2xl leading-tight text-jw-charcoal">
              Helping People Transform Through Self-Awareness, Healing, and Real Human Connection
            </h1>
            
            <p className="text-sm sm:text-base leading-relaxed text-jw-charcoal/80">
              I'm Joni Woods — certified life coach, culture strategist, speaker, and author of Burned, Blocked, and Better Than Ever. I help people move from survival mode into thriving lives by guiding them to rebuild trust in themselves, navigate difficult relationships, and embrace their most empowered, authentic self.
            </p>
            
            <div className="flex flex-col gap-3 w-full pt-2">
              <Button size="default" asChild className="bg-jw-blue hover:bg-jw-blue/80 w-full">
                <Link href="https://books2read.com/u/mq2K7v" target="_blank">
                  Explore My Book
                  <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </Button>
              <Button variant="outline" size="default" asChild className="border-jw-charcoal text-jw-charcoal hover:bg-jw-charcoal/5 w-full">
                <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                  Work With Me
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Layout - Side by Side */}
      <div className="hidden md:block">
        <div className="container mx-auto px-4 md:px-6 lg:px-8 pt-6 pb-12 md:pt-8 lg:pt-10 lg:pb-16 xl:pb-20">
          <div className="grid md:grid-cols-2 gap-8 md:gap-10 lg:gap-12 xl:gap-16 items-start">
            {/* Left Column - Text Content */}
            <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6">
              <h1 className="font-heading text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-tight text-jw-charcoal">
                Helping People Transform Through Self-Awareness, Healing, and Real Human Connection
              </h1>
              
              <p className="text-base md:text-lg lg:text-xl leading-relaxed text-jw-charcoal/80 max-w-xl">
                I'm Joni Woods — certified life coach, culture strategist, speaker, and author of Burned, Blocked, and Better Than Ever. I help people move from survival mode into thriving lives by guiding them to rebuild trust in themselves, navigate difficult relationships, and embrace their most empowered, authentic self.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
                <Button size="lg" asChild className="bg-jw-blue hover:bg-jw-blue/80">
                  <Link href="https://books2read.com/u/mq2K7v" target="_blank">
                    Explore My Book
                    <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="border-jw-charcoal text-jw-charcoal hover:bg-jw-charcoal/5">
                  <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                    Work With Me
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column - Desktop Hero Image */}
            <div className="relative w-full">
              <Image
                src="/images/Joni_Woods_Author_Portrait_Optimized.jpg"
                alt="Joni Woods"
                width={800}
                height={1000}
                className="w-full h-auto"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
