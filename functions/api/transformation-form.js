export async function onRequestPost(context) {
  try {
    const request = context.request;
    const body = await request.json();
    const { name, email, supportType } = body;

    // Map support type to readable subject
    const supportTypeLabels = {
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
      return new Response(JSON.stringify({ 
        success: true, 
        message: 'Form submitted successfully' 
      }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'POST',
          'Access-Control-Allow-Headers': 'Content-Type'
        }
      });
    } else {
      throw new Error('Web3Forms submission failed');
    }
    
  } catch (error) {
    console.error('Error processing form submission:', error);
    return new Response(JSON.stringify({
      success: false,
      message: 'There was an error submitting the form. Please try again.'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    });
  }
}

// Handle preflight requests
export async function onRequestOptions(context) {
  return new Response(null, {
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type'
    }
  });
}