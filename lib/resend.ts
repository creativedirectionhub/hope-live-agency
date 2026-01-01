import nodemailer from 'nodemailer'

export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  const gmailUser = process.env.GMAIL_USER
  const gmailPassword = process.env.GMAIL_APP_PASSWORD
  
  if (!gmailUser || !gmailPassword) {
    console.warn('Gmail credentials not configured. Email would have been sent to:', to)
    return { success: false, message: 'Email service not configured' }
  }

  try {
    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: gmailUser,
        pass: gmailPassword,
      },
    })

    // Send email
    const info = await transporter.sendMail({
      from: `"H.O.P.E Live Agency" <${gmailUser}>`,
      to,
      subject,
      html,
    })

    console.log('Email sent successfully:', info.messageId)
    return { success: true, data: info }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, message: 'Failed to send email' }
  }
}
