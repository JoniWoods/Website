
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, supportType } = body;

    // Map support type to readable subject
    const supportTypeLabels: { [key: string]: string } = {
      individual: "Individual Coaching",
      corporate: "Corporate Culture Strategy",
      speaking: "Speaking & Workshops",
      relationship: "Relationship Coaching",
      book: "Book Study & Coaching"
    };

    const subject = supportTypeLabels[supportType] || "Transformation Roadmap Request";

    // Create email content
    const emailContent = `
New Transformation Roadmap Request

Name: ${name}
Email: ${email}
Support Type: ${subject}

---
This form was submitted from joniwoods.com
    `.trim();

    // For now, we'll just log the submission
    // In production, you would integrate with an email service like SendGrid, Resend, etc.
    console.log('Form submission:', {
      to: 'joniwoods@gmail.com',
      subject,
      content: emailContent
    });

    // Simulate successful email send
    // TODO: Integrate with actual email service
    
    return NextResponse.json({ 
      success: true, 
      message: 'Form submitted successfully' 
    }, { status: 200 });
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
