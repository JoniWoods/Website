
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

    const subject = `New Transformation Roadmap Request: ${supportTypeLabels[supportType] || "General"}`;

    // Submit to Web3Forms
    const formData = new FormData();
    formData.append('access_key', '3ca23ba3-c21b-4bf0-817a-10d1ace488ea');
    formData.append('to', 'joniwoodswebsite@gmail.com');
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', `
Name: ${name}
Email: ${email}
Support Type: ${supportTypeLabels[supportType] || supportType}

This form was submitted from joniwoods.com requesting the Transformation Roadmap.
    `.trim());

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({ 
        success: true, 
        message: 'Form submitted successfully' 
      }, { status: 200 });
    } else {
      throw new Error('Web3Forms submission failed');
    }
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to process form submission' },
      { status: 500 }
    );
  }
}
