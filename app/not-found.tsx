"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-jw-burgundy/5 via-white to-jw-yellow/10 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Left side - Image */}
          <div className="order-2 md:order-1">
            <Image
              src="/images/JoniWoods_logo.png"
              alt="Joni Woods Logo"
              width={300}
              height={200}
              className="mx-auto mb-6 opacity-80"
              priority
            />
          </div>
          
          {/* Right side - Content */}
          <div className="order-1 md:order-2 text-left md:text-left">
            <div className="mb-6">
              <h1 className="text-6xl md:text-8xl font-bold text-jw-burgundy mb-2">
                404
              </h1>
              <h2 className="text-2xl md:text-3xl font-heading text-jw-charcoal mb-4">
                Page Not Found
              </h2>
            </div>
            
            <div className="mb-8 space-y-4">
              <p className="text-lg text-jw-charcoal/80 leading-relaxed">
                It looks like this page has wandered off the path. Sometimes we all need to find our way back to where we belong.
              </p>
              <p className="text-base text-jw-charcoal/70">
                Let's get you back on track to transformation and healing.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                asChild 
                className="bg-jw-burgundy hover:bg-jw-burgundy/90 text-white px-8 py-3"
              >
                <Link href="/">
                  Return Home
                  <svg className="ml-2 h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </Link>
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                asChild 
                className="border-jw-charcoal text-jw-charcoal hover:bg-jw-charcoal/5 px-8 py-3"
              >
                <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                  Work With Me
                </Link>
              </Button>
            </div>
            
            {/* Inspirational quote */}
            <div className="mt-12 p-6 bg-jw-yellow/10 rounded-lg border-l-4 border-jw-yellow">
              <blockquote className="text-jw-charcoal/80 italic text-base">
                "Every detour is an opportunity to discover something new about yourself."
              </blockquote>
              <cite className="text-jw-charcoal text-sm mt-2 block">- Joni Woods</cite>
            </div>
          </div>
        </div>
        
        {/* Bottom navigation suggestions */}
        <div className="mt-16 pt-8 border-t border-jw-charcoal/10">
          <h3 className="text-lg font-heading text-jw-charcoal mb-6">
            Popular Pages
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            <Link 
              href="/#book" 
              className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-jw-charcoal/10 hover:border-jw-burgundy/30"
            >
              <div className="text-jw-burgundy font-semibold mb-1">My Book</div>
              <div className="text-sm text-jw-charcoal/70">Burned, Blocked, and Better Than Ever</div>
            </Link>
            
            <Link 
              href="/#services" 
              className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-jw-charcoal/10 hover:border-jw-burgundy/30"
            >
              <div className="text-jw-burgundy font-semibold mb-1">Services</div>
              <div className="text-sm text-jw-charcoal/70">Coaching & Speaking</div>
            </Link>
            
            <Link 
              href="/#about" 
              className="p-4 rounded-lg bg-white shadow-sm hover:shadow-md transition-shadow border border-jw-charcoal/10 hover:border-jw-burgundy/30"
            >
              <div className="text-jw-burgundy font-semibold mb-1">About</div>
              <div className="text-sm text-jw-charcoal/70">My Story</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}