
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { trackCTAClick } from "@/lib/analytics";

const services = [
  {
    title: "Individual Coaching",
    description: "One-on-one coaching for personal growth, relationship healing, and emotional intelligence development. Perfect for navigating life transitions and building self-awareness.",
    features: ["Personal growth coaching", "Relationship healing", "Emotional intelligence", "Life transitions"],
    cta: "Book Discovery Call",
    href: "https://calendly.com/joniwoods/virtual-coffee",
    trackingFn: trackCTAClick.bookDiscoveryCall
  },
  {
    title: "Corporate Culture Strategy", 
    description: "Transform your organization's culture with emotional intelligence training, leadership development, and communication workshops.",
    features: ["Leadership development", "Team communication", "Culture assessment", "Conflict resolution"],
    cta: "Schedule Consultation",
    href: "https://calendly.com/joniwoods/virtual-coffee",
    trackingFn: trackCTAClick.scheduleConsultation
  },
  {
    title: "Speaking & Workshops",
    description: "Engaging presentations on emotional intelligence, healthy relationships, and personal growth for conferences, organizations, and events.",
    features: ["Keynote speaking", "Interactive workshops", "Team building", "Personal development"],
    cta: "Book Speaking", 
    href: "https://calendly.com/joniwoods/virtual-coffee",
    trackingFn: trackCTAClick.bookSpeaking
  },
  {
    title: "Relationship Coaching",
    description: "Whether you're single, dating, married, or rebuilding after separation, learn to create emotionally safe and fulfilling relationships.",
    features: ["Communication skills", "Boundary setting", "Conflict resolution", "Relationship rebuilding"],
    cta: "Start Healing",
    href: "https://calendly.com/joniwoods/virtual-coffee",
    trackingFn: trackCTAClick.startHealing
  }
];

export function Services() {
  return (
    <section id="services" className="w-screen relative left-[50%] right-[50%] -mx-[50vw] space-y-6 sm:space-y-8 md:space-y-10 py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mx-auto flex max-w-[58rem] lg:max-w-[70rem] flex-col items-center space-y-4 sm:space-y-5 md:space-y-6 text-center px-4">
        <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-[1.1]">
          <span className="gradient-text">
            Transformation
          </span>{" "}
          Programs
        </h2>
        <p className="max-w-[90%] sm:max-w-[85%] leading-normal text-muted-foreground text-base sm:text-lg md:text-xl sm:leading-7">
          Whether you're healing from trauma, building better relationships, or leading teams 
          through change, I meet you where you are and guide you where you want to go.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-2">
        {services.map((service, index) => (
          <Card key={index} className="group relative overflow-hidden">
            <CardHeader>
              <CardTitle className="text-xl">{service.title}</CardTitle>
              <CardDescription className="text-base">
                {service.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-muted-foreground">
                    <span className="text-jw-burgundy mr-2">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
              <div className="flex justify-center">
                <Button asChild className="w-full sm:w-auto text-white hover:opacity-80" style={{backgroundColor: "#505155"}}>
                  <Link href={service.href} target="_blank" onClick={service.trackingFn}>
                    {service.cta}
                    <svg className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <div className="mx-auto text-center">
        <p className="text-muted-foreground mb-4">Ready to begin your transformation journey?</p>
        <Button size="lg" asChild className="bg-jw-burgundy hover:bg-jw-rust">
          <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank" onClick={trackCTAClick.scheduleConsultation}>
            Schedule Free Consultation
          </Link>
        </Button>
      </div>
      </div>
    </section>
  );
}
