
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Navigation() {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Float the header only after scrolling past ~400px (middle of hero section)
      setIsFloating(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Book", href: "#book" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "Resources", href: "#resources" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className={`w-full z-50 bg-white/95 backdrop-blur border-b transition-all duration-300 ${
      isFloating ? 'fixed top-0 shadow-md' : 'relative'
    }`}>
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image 
            src="/images/JoniWoods_logo.png" 
            alt="Joni Woods" 
            width={40} 
            height={40}
            className="rounded-full"
          />
          <span className="font-bold text-xl" style={{ fontFamily: 'Georgia, serif' }}>
            Joni Woods
          </span>
        </Link>
        
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <Button asChild className="bg-white text-jw-blue border-2 border-jw-blue hover:bg-jw-blue hover:text-white">
            <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
              Book Call
            </Link>
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="sm" asChild className="bg-white text-jw-blue border-2 border-jw-blue hover:bg-jw-blue hover:text-white">
            <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
              Book Call
            </Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}
