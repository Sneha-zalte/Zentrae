import { Resend } from 'resend'
import { NextRequest, NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

// Recipient email from environment variable or default
const TO_EMAIL = process.env.CONTACT_EMAIL || 'zentraeindia@gmail.com'
const FROM_EMAIL = process.env.FROM_EMAIL || 'onboarding@resend.dev'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, company, category, message } = body

    // Validation
    if (!name || !email || !phone || !category || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email address' },
        { status: 400 }
      )
    }

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: `ZENTRAE Contact Form <${FROM_EMAIL}>`,
      to: [TO_EMAIL],
      replyTo: email,
      subject: `New Contact Form Submission - ${category}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f5f5f5;">
          <div style="background-color: white; padding: 30px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <h2 style="color: #003a8c; margin-top: 0; border-bottom: 2px solid #003a8c; padding-bottom: 10px;">
              New Contact Form Submission
            </h2>
            
            <div style="margin-top: 20px;">
              <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
              <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
              <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${phone}">${phone}</a></p>
              ${company ? `<p style="margin: 10px 0;"><strong>Company:</strong> ${company}</p>` : ''}
              <p style="margin: 10px 0;"><strong>Business Type:</strong> ${category}</p>
              
              <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #e0e0e0;">
                <p style="margin: 10px 0;"><strong>Message:</strong></p>
                <p style="margin: 10px 0; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #003a8c; white-space: pre-wrap;">${message}</p>
              </div>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #e0e0e0; text-align: center; color: #666; font-size: 12px;">
              <p>This email was sent from the ZENTRAE website contact form.</p>
              <p>Reply directly to this email to respond to ${name}.</p>
            </div>
          </div>
        </div>
      `,
      text: `
New Contact Form Submission

Name: ${name}
Email: ${email}
Phone: ${phone}
${company ? `Company: ${company}` : ''}
Business Type: ${category}

Message:
${message}

---
This email was sent from the ZENTRAE website contact form.
Reply directly to this email to respond to ${name}.
      `.trim(),
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json(
        { error: 'Failed to send email. Please try again later.' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { message: 'Email sent successfully', id: data?.id },
      { status: 200 }
    )
  } catch (error) {
    console.error('Contact form error:', error)
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

