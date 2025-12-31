import { NextRequest, NextResponse } from 'next/server'
import { contactSchema } from '@/lib/validation'
import { prisma } from '@/lib/db'
import { sendEmail } from '@/lib/resend'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.()

    // Validate input
    const validationResult = contactSchema.safeParse(body)
    if (!validationResult?.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: validationResult?.error?.errors ?? [] },
        { status: 400 }
      )
    }

    const data = validationResult?.data

    // Save to database
    const inquiry = await prisma?.inquiry?.create?.({
      data: {
        name: data?.name ?? '',
        email: data?.email ?? '',
        message: data?.message ?? '',
        preferredContact: data?.preferredContact ?? null,
        schedulingPreference: data?.schedulingPreference ?? null,
      },
    })

    // Send email notification
    const adminEmail = process.env.ADMIN_EMAIL ?? 'hopeliveinquiries@gmail.com'
    const emailHtml = `
      <h2>New Contact Inquiry</h2>
      <p><strong>Inquiry ID:</strong> ${inquiry?.id ?? 'N/A'}</p>
      <p><strong>Name:</strong> ${data?.name ?? 'N/A'}</p>
      <p><strong>Email:</strong> ${data?.email ?? 'N/A'}</p>
      <p><strong>Preferred Contact Method:</strong> ${data?.preferredContact ?? 'Not specified'}</p>
      <p><strong>Scheduling Preference:</strong> ${data?.schedulingPreference ?? 'Not specified'}</p>
      <p><strong>Message:</strong></p>
      <p>${data?.message ?? 'N/A'}</p>
      <p><strong>Submitted:</strong> ${new Date()?.toLocaleString?.()}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This inquiry was submitted via hopeliveagency.com</p>
    `

    await sendEmail({
      to: adminEmail,
      subject: `New Contact Inquiry - ${data?.name ?? 'Unknown'}`,
      html: emailHtml,
    })

    return NextResponse.json(
      { message: 'Inquiry submitted successfully', inquiryId: inquiry?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Contact submission error:', error)
    return NextResponse.json(
      { message: 'Failed to submit inquiry. Please try again.' },
      { status: 500 }
    )
  }
}
