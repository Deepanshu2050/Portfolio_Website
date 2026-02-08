import nodemailer from 'nodemailer';

// Create reusable transporter
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_APP_PASSWORD,
        },
    });
};

// Send email notification when contact form is submitted
export const sendContactNotification = async (contactData) => {
    const { name, email, message } = contactData;

    const transporter = createTransporter();

    // Email to you (the portfolio owner)
    const mailOptionsToOwner = {
        from: process.env.EMAIL_USER,
        to: process.env.EMAIL_USER, // Your email
        subject: `New Portfolio Contact from ${name}`,
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="margin: 20px 0;">
          <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
          <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
          <p style="margin: 10px 0;"><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #000; margin: 10px 0;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This message was sent from your portfolio contact form at ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `,
    };

    // Auto-reply to the sender
    const mailOptionsToSender = {
        from: process.env.EMAIL_USER,
        to: email,
        subject: 'Thank you for reaching out!',
        html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #000; border-bottom: 2px solid #000; padding-bottom: 10px;">
          Thank You for Your Message
        </h2>
        
        <p>Hi ${name},</p>
        
        <p>Thank you for reaching out through my portfolio website. I have received your message and will get back to you as soon as possible, typically within 24 hours.</p>
        
        <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #000; margin: 20px 0;">
          <p style="margin: 0;"><strong>Your message:</strong></p>
          <p style="margin: 10px 0 0 0;">${message.replace(/\n/g, '<br>')}</p>
        </div>
        
        <p>Best regards,<br>
        <strong>Deepanshu Jangid</strong><br>
        Full Stack MERN Developer</p>
        
        <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd;">
          <p style="color: #666; font-size: 12px;">
            This is an automated response. Please do not reply to this email.
          </p>
        </div>
      </div>
    `,
    };

    try {
        // Send both emails
        await transporter.sendMail(mailOptionsToOwner);
        await transporter.sendMail(mailOptionsToSender);
        console.log('✅ Emails sent successfully');
        return { success: true };
    } catch (error) {
        console.error('❌ Error sending email:', error);
        throw error;
    }
};
