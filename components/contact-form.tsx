'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { contactSchema, type ContactFormData } from '@/lib/validation'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Loader2, Send, CheckCircle } from 'lucide-react'
import { toast } from 'sonner'

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting?.(true)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      })

      if (!response?.ok) {
        const error = await response?.json?.()
        throw new Error(error?.message ?? 'Failed to send message')
      }

      setIsSuccess?.(true)
      reset?.()
      toast?.success?.('Message sent successfully! We\'ll get back to you soon.')
    } catch (error) {
      toast?.error?.(error instanceof Error ? error?.message : 'Failed to send message. Please try again.')
    } finally {
      setIsSubmitting?.(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="text-center py-12">
        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-[#4B0082] mb-2">Message Sent!</h3>
        <p className="text-gray-600 mb-6">
          Thank you for contacting H.O.P.E Live Agency. We'll respond to your inquiry as soon as possible.
        </p>
        <Button
          onClick={() => setIsSuccess?.(false)}
          className="bg-[#FF7A00] hover:bg-[#C81D77] text-white"
        >
          Send Another Message
        </Button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      {/* Name */}
      <div>
        <Label htmlFor="name" className="text-[#4B0082] font-semibold">Name *</Label>
        <Input
          id="name"
          {...register('name')}
          placeholder="Your name"
          className="mt-1.5"
        />
        {errors?.name && (
          <p className="text-red-500 text-sm mt-1">{errors?.name?.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <Label htmlFor="email" className="text-[#4B0082] font-semibold">Email Address *</Label>
        <Input
          id="email"
          type="email"
          {...register('email')}
          placeholder="your@email.com"
          className="mt-1.5"
        />
        {errors?.email && (
          <p className="text-red-500 text-sm mt-1">{errors?.email?.message}</p>
        )}
      </div>

      {/* Preferred Contact Method */}
      <div>
        <Label htmlFor="preferredContact" className="text-[#4B0082] font-semibold">Preferred Contact Method (Optional)</Label>
        <Select onValueChange={(value) => setValue?.('preferredContact', value)}>
          <SelectTrigger className="mt-1.5">
            <SelectValue placeholder="Select method" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="email">Email</SelectItem>
            <SelectItem value="phone">Phone</SelectItem>
            <SelectItem value="discord">Discord</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Scheduling Preference */}
      <div>
        <Label htmlFor="schedulingPreference" className="text-[#4B0082] font-semibold">When would you like to hear from us? (Optional)</Label>
        <Input
          id="schedulingPreference"
          {...register('schedulingPreference')}
          placeholder="e.g., Weekday mornings, ASAP, Next week"
          className="mt-1.5"
        />
      </div>

      {/* Message */}
      <div>
        <Label htmlFor="message" className="text-[#4B0082] font-semibold">Message *</Label>
        <Textarea
          id="message"
          {...register('message')}
          placeholder="Tell us how we can help..."
          className="mt-1.5 min-h-[150px]"
        />
        {errors?.message && (
          <p className="text-red-500 text-sm mt-1">{errors?.message?.message}</p>
        )}
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
            Sending...
          </>
        ) : (
          <>
            <Send className="w-5 h-5 mr-2" />
            Send Message
          </>
        )}
      </Button>
    </form>
  )
}
