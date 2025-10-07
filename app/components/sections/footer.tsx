

import Link from "next/link";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";

// TikTok icon component since it's not in lucide-react
function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V12.5a7.72 7.72 0 00-4.67-1.51c-4.08 0-7.72 3.33-7.72 7.72s3.64 7.72 7.72 7.72 7.72-3.33 7.72-7.72V9.4a8.07 8.07 0 004.25 1.2v-3.91z"/>
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="bg-[#8B2332] text-white">
      <div className="container mx-auto px-4 sm:px-6 md:px-8 py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12">
          {/* Main Footer Content */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-myriad-semibold text-white mb-2">
              Joni Woods
            </h3>
            <p className="text-white/90 italic mb-4 font-myriad-light">
              "Creating the future You want!"
            </p>
            <div className="space-y-2 text-white/80">
              <p>Journey Coaching - Human Connection & Culture Specialist</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-myriad-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="#about" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link 
                  href="#book" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Book
                </Link>
              </li>
              <li>
                <Link 
                  href="#services" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Coaching
                </Link>
              </li>
              <li>
                <Link 
                  href="#transformation-form" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Newsletter
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Connect */}
          <div>
            <h4 className="text-lg font-myriad-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 mb-6">
              <li>
                <Link 
                  href="https://journeylifecoaching.life" 
                  target="_blank"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Journey Coaching
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Free Resources
                </Link>
              </li>
              <li>
                <Link 
                  href="#" 
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Book Club Guide
                </Link>
              </li>
            </ul>
            
            <h4 className="text-lg font-myriad-semibold text-white mb-4">Connect</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://www.instagram.com/authorjoniwoods/" 
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Instagram className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.tiktok.com/@joniwoods730" 
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <TikTokIcon className="h-6 w-6" />
              </Link>
              {/* LinkedIn link temporarily removed due to access restrictions */}
              <Link 
                href="https://www.facebook.com/joni.woods.9" 
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Facebook className="h-6 w-6" />
              </Link>
              <Link 
                href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" 
                target="_blank"
                className="text-white/80 hover:text-white transition-colors"
              >
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/20 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/80 text-sm">
              © 2024 Joni Woods. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link 
                href="#" 
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link 
                href="#" 
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link 
                href="#" 
                className="text-white/80 hover:text-white text-sm transition-colors"
              >
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

