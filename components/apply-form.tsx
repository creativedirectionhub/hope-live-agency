'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { applicationSchema, type ApplicationFormData } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Checkbox } from '@/components/ui/checkbox'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, Send, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

const niches = [
  'Gaming',
  'Beauty',
  'Fitness',
  'Music',
  'Cooking',
  'Lifestyle',
  'Education',
  'Comedy',
  'Dance',
  'Art & Crafts',
  'Other',
]

export function ApplyForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ApplicationFormData>({
    resolver: zodResolver(applicationSchema),
  })

  const agreedToTerms = watch('agreedToTerms')

  const onSubmit = async (data: ApplicationFormData) => {
    setIsSubmitting?.(true)

    try {
      const response = await fetch('/api/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response?.ok) {
        const error = await response?.json?.()
        throw new Error(error?.message ?? 'Failed to submit application')
      }

      setIsSuccess?.(true)
      reset?.()
      toast?.success?.('Application submitted successfully! We\'ll review it within 2-3 business days.')
    } catch (error) {
      toast?.error?.(error instanceof Error ? error?.message : 'Failed to submit application. Please try again.')
    } finally {
      setIsSubmitting?.(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#4B0082] mb-2">Application Submitted!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for applying to H.O.P.E Live Agency. We'll review your application and get back to you within 2-3 business days.
        </p>
        <Button
          onClick={() => setIsSuccess?.(false)}
          className="bg-[#FF7A00] hover:bg-[#C81D77] text-white"
        >
          Submit Another Application
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Full Name */}
      <div>
        <Label htmlFor="fullName" className="text-[#4B0082] font-semibold">Full Name *</Label>
        <Input
          id="fullName"
          {...register('fullName')}
          placeholder="John Doe"
          className="mt-1.5"
        />
        {errors?.fullName && (
          <p className="text-red-500 text-sm mt-1">{errors?.fullName?.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-[#4B0082] font-semibold">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="john@example.com"
          className="mt-1.5"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
        )}
      </div>

      {/* Phone */}
      <div>
        <Label htmlFor="phone" className="text-[#4B0082] font-semibold">Phone Number (Optional)</Label>
        <Input
          id="phone"
          type="tel"
          {...register('phone')}
          placeholder="+1 (555) 123-4567"
          className="mt-1.5"
        />
      </div>

      {/* TikTok Handles */}
      <div>
        <Label htmlFor="tiktokHandles" className="text-[#4B0082] font-semibold">TikTok Handle(s) *</Label>
        <Input
          id="tiktokHandles"
          {...register('tiktokHandles')}
          placeholder="@yourhandle, @secondhandle"
          className="mt-1.5"
        />
        {errors?.tiktokHandles && (
          <p className="text-red-500 text-sm mt-1">{errors?.tiktokHandles?.message}</p>
        )}
      </div>

      {/* Niche */}
      <div>
        <Label htmlFor="niche" className="text-[#4B0082] font-semibold">Primary Niche/Category *</Label>
        <Select onValueChange={(value) => setValue?.('niche', value)}>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select your niche" />
          </SelectTrigger>
          <SelectContent>
            {niches?.map?.((niche) => (
              <SelectItem key={niche} value={niche ?? ''}>
                {niche ?? ''}
              </SelectItem>
            )) ?? null}
          </SelectContent>
        </Select>
        {errors?.niche && (
          <p className="text-red-500 text-sm mt-1">{errors?.niche?.message}</p>
        )}
      </div>

      {/* Live Schedule */}
      <div>
        <Label htmlFor="liveSchedule" className="text-[#4B0082] font-semibold">Typical LIVE Schedule *</Label>
        <Input
          id="liveSchedule"
          {...register('liveSchedule')}
          placeholder="e.g., Daily 7-9 PM EST, Weekends 2-5 PM"
          className="mt-1.5"
        />
        {errors?.liveSchedule && (
          <p className="text-red-500 text-sm mt-1">{errors?.liveSchedule?.message}</p>
        )}
      </div>

      {/* Goals */}
      <div>
        <Label htmlFor="goals" className="text-[#4B0082] font-semibold">Your Goals with H.O.P.E *</Label>
        <Textarea
          id="goals"
          {...register('goals')}
          placeholder="Tell us what you hope to achieve by joining H.O.P.E Live Agency..."
          className="mt-1.5 min-h-[120px]"
        />
        {errors?.goals && (
          <p className="text-red-500 text-sm mt-1">{errors?.goals?.message}</p>
        )}
      </div>

      {/* Follower Count */}
      <div>
        <Label htmlFor="followerCount" className="text-[#4B0082] font-semibold">Current Follower Count (Optional)</Label>
        <Input
          id="followerCount"
          {...register('followerCount')}
          placeholder="e.g., 5,000 or Just Starting"
          className="mt-1.5"
        />
      </div>

      {/* Location */}
      <div>
        <Label htmlFor="location" className="text-[#4B0082] font-semibold">Location (Optional)</Label>
        <Input
          id="location"
          {...register('location')}
          placeholder="City, Country"
          className="mt-1.5"
        />
      </div>

      {/* Agreement */}
      <div className="flex items-start gap-3 p-4 bg-gray-50 rounded-lg">
        <Checkbox
          id="agreedToTerms"
          checked={agreedToTerms ?? false}
          onCheckedChange={(checked) => setValue?.('agreedToTerms', checked === true)}
        />
        <div>
          <Label htmlFor="agreedToTerms" className="text-sm cursor-pointer">
            I understand that H.O.P.E Live Agency is an independent creator management agency and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd. I agree to the terms and conditions outlined in the application process.
          </Label>
          {errors?.agreedToTerms && (
            <p className="text-red-500 text-sm mt-1">{errors?.agreedToTerms?.message}</p>
          )}
        </div>
      </div>

      {/* Submit Button */}
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-[#FF7A00] hover:bg-[#C81D77] text-white font-semibold py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Submitting...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Submit Application
          </>
        )}
      </Button>
    </form>
  )
}
