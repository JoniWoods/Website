
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import Link from "next/link";
import Image from "next/image";

interface FormData {
  name: string;
  email: string;
  supportType: string;
  message: string;
}

export function TransformationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    supportType: "",
    message: ""
  });
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [personalizedResponse, setPersonalizedResponse] = useState("");
  const [lastSubmitTime, setLastSubmitTime] = useState<number>(0);

  // Generate prefilled message based on support type and name
  const generatePrefilledMessage = (supportType: string, name: string) => {
    const supportTypeLabels = {
      individual: "Individual Coaching",
      corporate: "Corporate Culture Strategy", 
      speaking: "Speaking & Workshops",
      relationship: "Relationship Coaching",
      book: "Book Study & Coaching"
    };
    
    const supportLabel = supportTypeLabels[supportType as keyof typeof supportTypeLabels] || supportType;
    const firstName = name.split(' ')[0] || name;
    
    return `Hi, Joni

I'm interested in ${supportLabel}. What are the next steps I should take on this journey?

Thanks,
${firstName}`;
  };

  // Update message when support type or name changes
  const updateFormData = (updates: Partial<FormData>) => {
    setFormData(prev => {
      const newData = { ...prev, ...updates };
      
      // Auto-update message if support type or name changed and we have both values
      if ((updates.supportType || updates.name) && newData.supportType && newData.name) {
        newData.message = generatePrefilledMessage(newData.supportType, newData.name);
      }
      
      return newData;
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic rate limiting - prevent submissions within 30 seconds
    const now = Date.now();
    if (now - lastSubmitTime < 30000) {
      alert('Please wait 30 seconds before submitting again.');
      return;
    }
    
    // Validate required fields
    if (!formData.supportType) {
      alert('Please select a support type before submitting.');
      return;
    }
    
    setLoading(true);
    setLastSubmitTime(now);

    try {
      // Submit directly to Web3Forms using environment variables
      const formData_web3 = new FormData();
      formData_web3.append('access_key', process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '');
      formData_web3.append('to', process.env.NEXT_PUBLIC_CONTACT_EMAIL || '');
      formData_web3.append('name', formData.name);
      formData_web3.append('email', formData.email);
      formData_web3.append('subject', `New Transformation Roadmap Request: ${formData.supportType}`);
      formData_web3.append('message', `
Name: ${formData.name}
Email: ${formData.email}
Support Type: ${formData.supportType}
Message: ${formData.message}

This form was submitted from joniwoods.com requesting the Transformation Roadmap.
      `.trim());

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData_web3
      });

      const result = await response.json();

      if (result.success) {
        const personalizedMsg = generatePersonalizedResponse(formData);
        setPersonalizedResponse(personalizedMsg);
        setSubmitted(true);
      } else {
        alert('Error: ' + (result.message || 'Form submission failed. Please try again.'));
      }
    } catch (error) {
      console.error('Form submission error:', error);
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

    const firstName = data.name.split(' ')[0] || data.name;

    return `Hi ${firstName}!

Thank you for your interest in connecting! I'm excited to support you on your transformation journey.

Based on your interest in ${responses[data.supportType as keyof typeof responses]}, I believe we can create powerful change together.

You will begin receiving our newsletter as soon as this week!

Remember: You don't have to have it all figured out to take the next step. You just need to be willing to begin.

The fact that you're here shows you're ready for real transformation.

Let's hop on a free discovery call so I can learn more about your unique situation and see how I can best support your journey.

Sincerely,
Joni`;
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      supportType: "",
      message: ""
    });
    setSubmitted(false);
    setPersonalizedResponse("");
  };

  return (
    <section id="transform" className="w-screen relative left-[50%] right-[50%] -mx-[50vw] space-y-6 py-4 md:py-6 lg:py-10 bg-muted/50">
      <div className="container mx-auto px-4 md:px-8">
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
          <br />
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
                      onChange={(e) => updateFormData({ name: e.target.value })}
                      disabled={loading}
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
                      onChange={(e) => updateFormData({ email: e.target.value })}
                      disabled={loading}
                      required
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="support">What type of support interests you most? *</Label>
                  <Select 
                    value={formData.supportType} 
                    onValueChange={(value) => updateFormData({ supportType: value })}
                    disabled={loading}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Please select a support type" />
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

                <div className="space-y-2">
                  <Label htmlFor="message">Message to Joni</Label>
                  <Textarea
                    id="message"
                    placeholder="Your message will be automatically filled based on your selections above"
                    value={formData.message}
                    onChange={(e) => updateFormData({ message: e.target.value })}
                    disabled={loading}
                    rows={6}
                    className="resize-none"
                  />
                </div>
                
                <div className="flex flex-col items-center space-y-3">
                  <Button type="submit" className="w-full sm:w-auto bg-jw-burgundy hover:bg-jw-rust shadow-[0_1px_0px_0px_rgba(0,0,0,0.1)]" size="lg" disabled={loading} style={{ boxShadow: '0 1px 0px 0px rgba(0,0,0,0.1)' }}>
                    {loading ? "Creating Your Personalized Roadmap..." : "Get My Free Transformation Roadmap →"}
                  </Button>
                  <p className="text-xs text-muted-foreground text-center max-w-md">
                    By submitting this form, you agree to receive our newsletter along with other great value. We will never spam you or sell your information.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        ) : (
          <Card className="border-[#9b9b9c]/20 bg-[#9b9b9c]/5">
            <CardHeader className="text-center pt-8 pb-6">
              <div className="flex justify-center mb-6">
                <Image 
                  src="/images/JoniWoods_logo.png" 
                  alt="Joni Woods Logo"
                  width={60}
                  height={60}
                  className="object-contain"
                />
              </div>
              <CardTitle className="text-jw-blue text-2xl mb-4">Your Personalized Transformation Roadmap Is Ready!</CardTitle>
            </CardHeader>
            <CardContent className="px-6 pb-8">
              <Card className="mb-8">
                <CardContent className="p-6">
                  <pre 
                    className="whitespace-pre-wrap text-base leading-relaxed font-medium" 
                    style={{ 
                      fontFamily: 'Georgia, serif',
                      color: '#44484b'
                    }}
                  >
                    {personalizedResponse}
                  </pre>
                </CardContent>
              </Card>
              <CardDescription className="text-center mb-8 text-base">
                📧 Keep an eye on your email for our newsletter!
              </CardDescription>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button 
                  asChild 
                  className="bg-jw-burgundy hover:bg-jw-rust w-full sm:w-auto shadow-[0_1px_0px_0px_rgba(0,0,0,0.1)]"
                  style={{ boxShadow: '0 1px 0px 0px rgba(0,0,0,0.1)' }}
                >
                  <Link href="/Transformation_Roadmap_Webpage.html" target="_blank">
                    View Transformation Roadmap
                  </Link>
                </Button>
                <Button 
                  asChild 
                  className="bg-jw-blue hover:bg-jw-blue/80 text-white w-full sm:w-auto shadow-[0_1px_0px_0px_rgba(0,0,0,0.1)]"
                  style={{ boxShadow: '0 1px 0px 0px rgba(0,0,0,0.1)' }}
                >
                  <Link href="https://calendly.com/joniwoods/virtual-coffee">
                    Let's Have Coffee!
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        )}
      </div>
      </div>
    </section>
  );
}
