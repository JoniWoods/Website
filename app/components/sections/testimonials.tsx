
import { Card, CardContent, CardDescription, CardFooter, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const testimonials = [
  {
    quote: "Joni is a one of a kind. She has the sweetest smile and an even sweeter soul. She looks for the best in everyone even when they don't see it in themselves. She helps you explore your own options instead of telling you what to do. She makes you notice how you're feeling and works that into your healing process.",
    author: "Emma Pechota",
    role: "The Eagle"
  },
  {
    quote: "During her session, Joni provided valuable insights on Effective Communication. She emphasized the importance of pausing before responding, seeking evidence and utilizing phrases such as 'I noticed' and 'I observed'.",
    author: "Workshop Attendee",
    role: "Communication Workshop"
  },
  {
    quote: "Joni is a relationship coach that helped us build a stronger leadership team through formal training and one-on-one sessions. She is very good at what she does and was very helpful to us.",
    author: "Lisa Ho, PMP CSM",
    role: "Principal Project Manager, Menlo Innovations"
  },
  {
    quote: "Working with Joni has truly transformed how I approach communication and conflict resolution in the workplace. Her insights enabled me to de-escalate tense situations and find mutually beneficial resolutions.",
    author: "Sarah Paspal-Jasinski",
    role: "Shelter Association of Washtenaw County"
  },
  {
    quote: "Joni emphasized the importance of listening and asking clarifying questions before jumping to conclusions. Very knowledgeable of topic with personal feedback throughout.",
    author: "Workshop Participant",
    role: "Professional Development Workshop"
  },
  {
    quote: "After divorce, I thought I was broken beyond repair. Joni helped me realize that healing isn't about becoming who I was before—it's about becoming who I'm meant to be.",
    author: "Individual Client",
    role: "Divorce Recovery Coaching"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-0 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Transformation{" "}
          <span className="gradient-text">
            Stories
          </span>
        </h2>
        <p className="w-full px-4 leading-normal text-muted-foreground sm:text-lg sm:leading-7" style={{ textWrap: 'balance' }}>
          Real stories from individuals, couples, and organizations who chose healing over staying stuck.
        </p>
      </div>
      
      <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[76rem] md:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="h-full">
            <CardContent className="flex-1 pt-6">
              <CardDescription className="italic leading-relaxed text-base">
                <span className="text-4xl text-jw-burgundy leading-none">"</span>
                {testimonial.quote}
                <span className="text-4xl text-jw-burgundy leading-none">"</span>
              </CardDescription>
            </CardContent>
            <CardFooter className="flex flex-col items-start border-t pt-4">
              <p className="font-semibold">{testimonial.author}</p>
              <p className="text-sm text-muted-foreground">{testimonial.role}</p>
            </CardFooter>
          </Card>
        ))}
      </div>
      
      <div className="mx-auto text-center px-4 md:px-0">
        <p className="text-muted-foreground mb-4">Ready to write your own transformation story?</p>
        <Button asChild className="bg-jw-burgundy hover:bg-jw-rust w-full sm:w-auto">
          <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
            Begin Your Journey
          </Link>
        </Button>
      </div>
    </section>
  );
}
