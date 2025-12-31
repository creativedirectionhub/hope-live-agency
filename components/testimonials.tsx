'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SectionReveal } from './section-reveal'

const testimonials = [
  {
    name: 'Sarah Mitchell',
    handle: '@sarahlive',
    niche: 'Beauty & Lifestyle',
    followers: '250K',
    quote: 'Joining H.O.P.E was the best decision for my streaming career. The training and community support helped me grow from 10K to 250K followers in just 6 months!',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    handle: '@marcusgaming',
    niche: 'Gaming',
    followers: '500K',
    quote: 'The tools and analytics they provide are game-changing. I finally understood what my audience wanted and my engagement skyrocketed. The support team is always there when I need them.',
    rating: 5,
  },
  {
    name: 'Elena Rodriguez',
    handle: '@elenacooks',
    niche: 'Cooking',
    followers: '180K',
    quote: 'As a cooking creator, I was struggling to monetize my content. H.O.P.E connected me with brands and taught me how to leverage LIVE gifting. Now I stream full-time!',
    rating: 5,
  },
  {
    name: 'DJ Phoenix',
    handle: '@djphoenixlive',
    niche: 'Music',
    followers: '320K',
    quote: 'The exclusive events and networking opportunities have been incredible. I\'ve collaborated with so many talented creators and even landed a brand sponsorship through H.O.P.E.',
    rating: 5,
  },
]

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const handlePrevious = () => {
    setCurrentIndex?.((prev) => (prev === 0 ? (testimonials?.length ?? 1) - 1 : prev - 1))
  }

  const handleNext = () => {
    setCurrentIndex?.((prev) => (prev === (testimonials?.length ?? 1) - 1 ? 0 : prev + 1))
  }

  const currentTestimonial = testimonials?.[currentIndex]

  return (
    <section className="py-24 bg-gradient-to-b from-[#4B0082] to-[#3A0066] text-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-4">
              Creator Success Stories
            </h2>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Real creators, real results, real community
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
            >
              <Quote className="w-12 h-12 text-[#FFD700] mb-6" />
              
              <div className="flex items-center gap-1 mb-6">
                {Array?.from?.({ length: currentTestimonial?.rating ?? 5 })?.map?.((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-[#FFD700] text-[#FFD700]" />
                )) ?? null}
              </div>

              <blockquote className="text-xl md:text-2xl leading-relaxed mb-8 text-white/90">
                "{currentTestimonial?.quote ?? ''}"
              </blockquote>

              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center text-2xl font-bold">
                  {currentTestimonial?.name?.charAt?.(0) ?? 'A'}
                </div>
                <div>
                  <div className="font-bold text-lg">{currentTestimonial?.name ?? ''}</div>
                  <div className="text-white/70">{currentTestimonial?.handle ?? ''}</div>
                  <div className="text-sm text-[#FFD700]">
                    {currentTestimonial?.niche ?? ''} • {currentTestimonial?.followers ?? ''} followers
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <Button
              onClick={handlePrevious}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6" />
            </Button>

            <div className="flex items-center gap-2">
              {testimonials?.map?.((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex?.(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex ? 'w-8 bg-[#FF7A00]' : 'bg-white/40'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              )) ?? null}
            </div>

            <Button
              onClick={handleNext}
              variant="outline"
              size="icon"
              className="rounded-full bg-white/10 border-white/20 hover:bg-white/20 text-white"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
