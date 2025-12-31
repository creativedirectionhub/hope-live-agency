export async function sendEmail({
  to,
  subject,
  html,
}: {
  to: string
  subject: string
  html: string
}) {
  const apiKey = process.env.RESEND_API_KEY
  
  if (!apiKey || apiKey === 're_placeholder_key') {
    console.warn('Resend API key not configured. Email would have been sent to:', to)
    return { success: false, message: 'Email service not configured' }
  }

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'H.O.P.E Live Agency <noreply@hopeliveagency.com>',
        to: [to],
        subject,
        html,
      }),
    })

    if (!response?.ok) {
      const errorData = await response?.json?.().catch(() => ({ error: 'Unknown error' }))
      console.error('Resend API error:', errorData)
      return { success: false, message: 'Failed to send email' }
    }

    const data = await response?.json?.()
    return { success: true, data }
  } catch (error) {
    console.error('Email sending error:', error)
    return { success: false, message: 'Failed to send email' }
  }
}
