
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";

export function Contact() {
  return (
    <section id="contact" className="border-t bg-muted/50">
      <div className="px-0 md:container grid max-w-6xl gap-6 py-4 md:py-6 lg:py-10">
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-4">
                    Ready to Begin Your Journey?
                  </h2>
                  <p className="text-muted-foreground md:text-xl/relaxed">
                    Whether you're navigating divorce, seeking healthier relationships, 
                    or building emotional intelligence in your organization, I'm here to help.
                  </p>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-jw-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">100% Confidential Conversations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-jw-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">15+ Years of Experience</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg className="h-4 w-4 text-jw-burgundy" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-sm">Transforming Pain Into Power</span>
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row flex-wrap gap-2">
                  <Button asChild className="bg-jw-burgundy hover:bg-jw-rust w-full sm:w-auto">
                    <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                      Book Discovery Call
                    </Link>
                  </Button>
                  <Button variant="outline" asChild className="w-full sm:w-auto">
                    <Link href="https://books2read.com/u/mq2K7v" target="_blank">
                      Get the Book
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Connect With Me</h3>
                  <div className="space-y-3">
                    
                    <Link 
                      href="http://journeylifecoaching.life" 
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-jw-burgundy/10">
                        <svg className="h-4 w-4 text-jw-burgundy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0C5.374 0 0 5.373 0 12s5.374 12 12 12 12-5.373 12-12S18.626 0 12 0z"/>
                        </svg>
                      </div>
                      <span>Journey Life Coaching Blog</span>
                    </Link>
                    
                    <Link 
                      href="https://www.facebook.com/joni.woods.9/" 
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-jw-burgundy/10">
                        <svg className="h-4 w-4 text-jw-burgundy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </div>
                      <span>Facebook</span>
                    </Link>
                    
                    <Link 
                      href="https://www.instagram.com/joniwoods/" 
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-jw-burgundy/10">
                        <svg className="h-4 w-4 text-jw-burgundy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                        </svg>
                      </div>
                      <span>Instagram</span>
                    </Link>
                    
                    <Link 
                      href="https://www.tiktok.com/@joniwoods730" 
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-jw-burgundy/10">
                        <svg className="h-4 w-4 text-jw-burgundy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 015.2-1.74V12.5a7.72 7.72 0 00-4.67-1.51c-4.08 0-7.72 3.33-7.72 7.72s3.64 7.72 7.72 7.72 7.72-3.33 7.72-7.72V9.4a8.07 8.07 0 004.25 1.2v-3.91z"/>
                        </svg>
                      </div>
                      <span>TikTok</span>
                    </Link>
                    
                    <Link 
                      href="https://www.youtube.com/channel/UCQ2d3jM3TYtMq0v-LF0bOMw" 
                      target="_blank"
                      className="flex items-center gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-jw-burgundy/10">
                        <svg className="h-4 w-4 text-jw-burgundy" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                      </div>
                      <span>YouTube Channel</span>
                    </Link>
                    
                    {/* LinkedIn link temporarily removed due to access restrictions */}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
