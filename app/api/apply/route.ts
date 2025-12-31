import { NextRequest, NextResponse } from 'next/server'
import { applicationSchema } from '@/lib/validation'
import { prisma } from '@/lib/db'
import { sendEmail } from '@/lib/resend'

export const dynamic = 'force-dynamic'

export async function POST(request: NextRequest) {
  try {
    const body = await request?.json?.()

    // Validate input
    const validationResult = applicationSchema.safeParse(body)
    if (!validationResult?.success) {
      return NextResponse.json(
        { message: 'Validation failed', errors: validationResult?.error?.errors ?? [] },
        { status: 400 }
      )
    }

    const data = validationResult?.data

    // Save to database
    const application = await prisma?.application?.create?.({
      data: {
        fullName: data?.fullName ?? '',
        email: data?.email ?? '',
        phone: data?.phone ?? null,
        tiktokHandles: data?.tiktokHandles ?? '',
        niche: data?.niche ?? '',
        liveSchedule: data?.liveSchedule ?? '',
        goals: data?.goals ?? '',
        followerCount: data?.followerCount ?? null,
        location: data?.location ?? null,
        agreedToTerms: data?.agreedToTerms ?? false,
      },
    })

    // Send email notification
    const adminEmail = process.env.ADMIN_EMAIL ?? 'hopeliveinquiries@gmail.com'
    const emailHtml = `
      <h2>New Creator Application</h2>
      <p><strong>Application ID:</strong> ${application?.id ?? 'N/A'}</p>
      <p><strong>Name:</strong> ${data?.fullName ?? 'N/A'}</p>
      <p><strong>Email:</strong> ${data?.email ?? 'N/A'}</p>
      <p><strong>Phone:</strong> ${data?.phone ?? 'Not provided'}</p>
      <p><strong>TikTok Handle(s):</strong> ${data?.tiktokHandles ?? 'N/A'}</p>
      <p><strong>Niche:</strong> ${data?.niche ?? 'N/A'}</p>
      <p><strong>Live Schedule:</strong> ${data?.liveSchedule ?? 'N/A'}</p>
      <p><strong>Goals:</strong></p>
      <p>${data?.goals ?? 'N/A'}</p>
      <p><strong>Follower Count:</strong> ${data?.followerCount ?? 'Not provided'}</p>
      <p><strong>Location:</strong> ${data?.location ?? 'Not provided'}</p>
      <p><strong>Submitted:</strong> ${new Date()?.toLocaleString?.()}</p>
      <hr>
      <p style="color: #666; font-size: 12px;">This application was submitted via hopeliveagency.com</p>
    `

    await sendEmail({
      to: adminEmail,
      subject: `New Creator Application - ${data?.fullName ?? 'Unknown'}`,
      html: emailHtml,
    })

    return NextResponse.json(
      { message: 'Application submitted successfully', applicationId: application?.id },
      { status: 201 }
    )
  } catch (error) {
    console.error('Application submission error:', error)
    return NextResponse.json(
      { message: 'Failed to submit application. Please try again.' },
      { status: 500 }
    )
  }
}
