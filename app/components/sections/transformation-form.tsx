
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";

interface FormData {
  name: string;
  email: string;
  supportType: string;
}

export function TransformationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    supportType: "individual"
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [personalizedResponse, setPersonalizedResponse] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Send form data to API
      const response = await fetch('/api/transformation-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const personalizedMsg = generatePersonalizedResponse(formData);
        setPersonalizedResponse(personalizedMsg);
        setSubmitted(true);
      } else {
        alert('There was an error submitting the form. Please try again.');
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const generatePersonalizedResponse = (data: FormData) => {
    const responses = {
      individual: "individual coaching sessions where we'll work together to unlock your potential",
      corporate: "corporate culture strategy to transform your organization from the inside out",
      speaking: "speaking engagement that will inspire and equip your audience with practical tools",
      relationship: "relationship coaching to help you build the connections you deserve",
      book: "book study and coaching combination for deep personal transformation"
    };

    return `Hi ${data.name}! 

Thank you for your interest in connecting! I'm excited to support you on your transformation journey.

Based on your interest in ${responses[data.supportType as keyof typeof responses]}, I believe we can create powerful change together.

Here's what I'm sending to your email immediately:
✨ A personalized roadmap for your transformation journey
✨ My "Emotional Safety Checklist" - a tool I use with all my clients

Remember: You don't have to have it all figured out to take the next step. You just need to be willing to begin.

The fact that you're here shows you're ready for real transformation.

Let's hop on a free discovery call so I can learn more about your unique situation and see how I can best support your journey.`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      supportType: "individual"
    });
    setSubmitted(false);
    setPersonalizedResponse("");
  };

  return (
    <section id="transform" className="px-0 md:container space-y-6 py-4 dark:bg-transparent md:py-6 lg:py-10">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Get Your Free{" "}
          <span className="gradient-text">
            Transformation
          </span>{" "}
          Roadmap
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Tell me about your situation and I'll send you personalized insights and resources to begin your healing journey.
        </p>
      </div>

      <div className="mx-auto max-w-[58rem]">
        {!submitted ? (
          <Card>
            <CardContent className="p-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="space-y-2">
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      placeholder="Enter your name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Your Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="support">What type of support interests you most?</Label>
                  <Select value={formData.supportType} onValueChange={(value) => setFormData({ ...formData, supportType: value })}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="individual">Individual Coaching</SelectItem>
                      <SelectItem value="corporate">Corporate Culture Strategy</SelectItem>
                      <SelectItem value="speaking">Speaking & Workshops</SelectItem>
                      <SelectItem value="relationship">Relationship Coaching</SelectItem>
                      <SelectItem value="book">Book Study & Coaching</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="flex justify-center">
                  <Button type="submit" className="w-full sm:w-auto bg-jw-burgundy hover:bg-jw-rust" size="lg" disabled={loading}>
                    {loading ? "Creating Your Personalized Roadmap..." : "Get My Free Transformation Roadmap →"}
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-jw-burgundy/20 bg-jw-burgundy/5">
            <CardHeader className="text-center">
              <div className="text-6xl mb-4">✨</div>
              <CardTitle className="text-jw-burgundy text-2xl">Your Personalized Transformation Roadmap Is Ready!</CardTitle>
            </CardHeader>
            <CardContent>
              <Card className="mb-6">
                <CardContent className="p-4">
                  <pre className="whitespace-pre-wrap text-sm text-muted-foreground leading-relaxed font-sans">
                    {personalizedResponse}
                  </pre>
                </CardContent>
              </Card>
              <CardDescription className="text-center mb-6">
                📧 Check your email - I've sent this roadmap plus your free resources!
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" onClick={handleReset} className="w-full sm:w-auto">
                  Ask Another Question
                </Button>
                <Button asChild className="bg-jw-burgundy hover:bg-jw-rust w-full sm:w-auto">
                  <Link href="https://calendly.com/joniwoods/virtual-coffee" target="_blank">
                    Book Discovery Call
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </section>
  );
}
