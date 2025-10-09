
import Link from "next/link";
import Image from "next/image";

export function BookBanner() {
  return (
    <section className="w-screen relative left-[50%] right-[50%] -mx-[50vw] bg-white">
      <Link 
        href="#book" 
        target="_blank"
        className="block w-full hover:opacity-90 transition-opacity"
      >
        <div className="relative w-full py-4 sm:py-6 md:py-8 lg:py-10 xl:py-12">
          <div className="relative w-full h-auto">
            <Image
              src="/images/book-banner.png"
              alt="Burned, Blocked, and Better Than Ever - A Raw Journey of Healing by Joni Woods, available on all platforms for personal transformation and recovery"
              width={1440}
              height={192}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </Link>
    </section>
  );
}
