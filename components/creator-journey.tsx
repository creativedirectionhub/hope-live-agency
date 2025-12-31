'use client'

import { CheckCircle2 } from 'lucide-react'
import { SectionReveal } from './section-reveal'

const steps = [
  {
    number: '01',
    title: 'Apply',
    description: 'Submit your application telling us about your TikTok LIVE goals and experience.',
  },
  {
    number: '02',
    title: 'Review',
    description: 'Our team reviews your application and assesses your fit within 2-3 business days.',
  },
  {
    number: '03',
    title: 'Onboarding',
    description: 'Get access to our training platform, tools, and join our vibrant Discord community.',
  },
  {
    number: '04',
    title: 'Launch',
    description: 'Start streaming with confidence, backed by ongoing support and growth resources.',
  },
  {
    number: '05',
    title: 'Grow',
    description: 'Scale your audience, unlock brand deals, and achieve your creator goals with us.',
  },
]

export function CreatorJourney() {
  return (
    <section className="py-24 bg-gradient-to-b from-[#F9F9FB] to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-4">
              Your Journey to Success
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              A clear, proven path from application to thriving LIVE creator
            </p>
          </div>
        </SectionReveal>

        <div className="relative">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-[#FF7A00] via-[#C81D77] to-[#8B00FF] -translate-x-1/2" />

          <div className="space-y-12">
            {steps?.map?.((step, index) => {
              const isEven = index % 2 === 0
              return (
                <SectionReveal key={step?.number ?? index} delay={index * 0.15}>
                  <div
                    className={`flex flex-col lg:flex-row items-center gap-8 ${
                      isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                    }`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${isEven ? 'lg:text-right' : 'lg:text-left'}`}>
                      <div className="inline-block bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                        <div className="text-5xl font-bold gradient-text font-playfair mb-2">
                          {step?.number ?? ''}
                        </div>
                        <h3 className="text-2xl font-bold text-[#4B0082] mb-3">
                          {step?.title ?? ''}
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                          {step?.description ?? ''}
                        </p>
                      </div>
                    </div>

                    {/* Icon */}
                    <div className="relative z-10">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center shadow-lg">
                        <CheckCircle2 className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Spacer for alignment */}
                    <div className="flex-1 hidden lg:block" />
                  </div>
                </SectionReveal>
              )
            }) ?? null}
          </div>
        </div>
      </div>
    </section>
  )
}
