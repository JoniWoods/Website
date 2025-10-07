
"use client";

import { useEffect } from "react";
import { Navigation } from "@/components/navigation";
import { BookBanner } from "@/components/sections/book-banner";
import { Hero } from "@/components/sections/hero";
import { FeaturedIn } from "@/components/sections/featured-in";
import { MediaAppearances } from "@/components/sections/media-appearances";
import { About } from "@/components/sections/about";
import { Services } from "@/components/sections/services";
import { Book } from "@/components/sections/book";
import { Testimonials } from "@/components/sections/testimonials";
import { Blog } from "@/components/sections/blog";
import { TransformationForm } from "@/components/sections/transformation-form";
import { Contact } from "@/components/sections/contact";
import { Footer } from "@/components/sections/footer";
import { FloatingElements } from "@/components/floating-elements";

export default function HomePage() {
  useEffect(() => {
    // Ensure page always starts at the top when component mounts
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Navigation />
      <main>
        <BookBanner />
        <Hero />
        <FeaturedIn />
        <TransformationForm />
        <MediaAppearances />
        <Book />
        <About />
        <Services />
        <Testimonials />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <FloatingElements />
    </>
  );
}
