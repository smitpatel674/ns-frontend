import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const { name, email, phone, service, budget, message } = await req.json();

    // Validate inputs
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    // Use environment variables for credentials
    // Note: Gmail requires an "App Password" if 2FA is enabled.
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 1. Send notification to the admin/company
    const adminMailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER, // or your specific company email like nextronsolution@gmail.com
      subject: `New Contact Request from ${name}`,
      html: `
        <h2>New Project Inquiry</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'N/A'}</p>
        <p><strong>Service Needed:</strong> ${service || 'N/A'}</p>
        <p><strong>Budget:</strong> ${budget || 'N/A'}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
    };

    // 2. Send auto-reply to the user
    const userMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Thank you for contacting Nextron Solution`,
      html: `
        <h2>Hi ${name},</h2>
        <p>Thank you for reaching out to Nextron Solution!</p>
        <p>We have received your message regarding <strong>${service || 'our services'}</strong> and will get back to you as soon as possible.</p>
        <br>
        <p>Here is a copy of your message:</p>
        <blockquote style="border-left: 4px solid #ccc; padding-left: 10px; color: #555;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
        <br>
        <p>Best Regards,</p>
        <p><strong>The Nextron Solution Team</strong></p>
        <p><a href="https://www.nextronsolution.com">www.nextronsolution.com</a></p>
      `,
    };

    // Send both emails
    await transporter.sendMail(adminMailOptions);
    await transporter.sendMail(userMailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Failed to send email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
