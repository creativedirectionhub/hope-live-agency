import { z } from 'zod'

export const applicationSchema = z.object({
  fullName: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  tiktokHandles: z.string().min(1, 'Please enter at least one TikTok handle'),
  niche: z.string().min(1, 'Please select a niche'),
  liveSchedule: z.string().min(10, 'Please describe your typical live schedule'),
  goals: z.string().min(20, 'Please tell us more about your goals (at least 20 characters)'),
  followerCount: z.string().optional(),
  location: z.string().optional(),
  agreedToTerms: z.boolean().refine(val => val === true, 'You must agree to the terms'),
})

export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters').max(100),
  email: z.string().email('Please enter a valid email address'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  preferredContact: z.string().optional(),
  schedulingPreference: z.string().optional(),
})

export type ApplicationFormData = z.infer<typeof applicationSchema>
export type ContactFormData = z.infer<typeof contactSchema>
