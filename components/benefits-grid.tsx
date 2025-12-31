'use client'

import { motion } from 'framer-motion'
import { Award, Users, Wrench, Calendar, Headphones, TrendingUp } from 'lucide-react'
import { SectionReveal } from './section-reveal'

const benefits = [
  {
    icon: Award,
    title: 'Expert Training',
    description: 'Comprehensive onboarding and ongoing education from industry professionals who know what works.',
  },
  {
    icon: Wrench,
    title: 'Premium Tools',
    description: 'Access cutting-edge streaming software, analytics platforms, and growth tools to maximize your reach.',
  },
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'Connect with fellow creators, share insights, and collaborate in our exclusive Discord community.',
  },
  {
    icon: Calendar,
    title: 'Exclusive Events',
    description: 'Participate in creator meetups, workshops, brand collaborations, and live streaming challenges.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: '24/7 access to our support team who understands the unique challenges of LIVE streaming.',
  },
  {
    icon: TrendingUp,
    title: 'Growth Opportunities',
    description: 'Connect with brands, sponsors, and exclusive partnership opportunities to monetize your content.',
  },
]

export function BenefitsGrid() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-4">
              What You Get
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to succeed as a professional TikTok LIVE creator
            </p>
          </div>
        </SectionReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits?.map?.((benefit, index) => {
            const Icon = benefit?.icon
            return (
              <SectionReveal key={benefit?.title ?? index} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 group"
                >
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    {Icon && <Icon className="w-7 h-7 text-white" />}
                  </div>
                  <h3 className="text-xl font-bold text-[#4B0082] mb-3">
                    {benefit?.title ?? ''}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit?.description ?? ''}
                  </p>
                </motion.div>
              </SectionReveal>
            )
          }) ?? null}
        </div>
      </div>
    </section>
  )
}
