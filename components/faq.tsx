'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionReveal } from './section-reveal'

const faqs = [
  {
    question: 'Do I need a minimum follower count to join?',
    answer: 'No minimum follower count required! We welcome creators at all stages. Whether you\'re just starting or already established, if you\'re passionate about TikTok LIVE and ready to commit, we want to hear from you.',
  },
  {
    question: 'Is there a cost to join H.O.P.E Live Agency?',
    answer: 'We offer various partnership models. During the application process, we\'ll discuss the structure that best fits your goals and current level. Our focus is on mutual growth and success.',
  },
  {
    question: 'How long does the application process take?',
    answer: 'Most applications are reviewed within 2-3 business days. Once approved, you\'ll receive onboarding instructions and can start accessing our resources immediately.',
  },
  {
    question: 'What kind of support can I expect?',
    answer: 'You\'ll have 24/7 access to our support team via Discord and email. We provide technical assistance, streaming advice, growth strategies, and help with brand collaborations. Plus, you\'ll be part of a community of creators who support each other.',
  },
  {
    question: 'Can I work with other agencies or platforms?',
    answer: 'We believe in creator freedom. However, some partnership agreements may include exclusivity clauses. We\'ll discuss this during the application process to ensure alignment with your goals.',
  },
  {
    question: 'What niches does H.O.P.E support?',
    answer: 'We support creators across all niches including Gaming, Beauty, Fitness, Music, Cooking, Lifestyle, Education, Comedy, Dance, Art & Crafts, and more. Diversity makes our community stronger!',
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about joining H.O.P.E
            </p>
          </div>
        </SectionReveal>

        <div className="space-y-4">
          {faqs?.map?.((faq, index) => (
            <SectionReveal key={index} delay={index * 0.1}>
              <div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-200 hover:border-[#FF7A00] transition-colors duration-300">
                <button
                  onClick={() => setOpenIndex?.(openIndex === index ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-100 transition-colors duration-200"
                  aria-expanded={openIndex === index}
                >
                  <span className="font-semibold text-[#4B0082] text-lg pr-4">
                    {faq?.question ?? ''}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF7A00] flex-shrink-0 transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 text-gray-600 leading-relaxed">
                        {faq?.answer ?? ''}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </SectionReveal>
          )) ?? null}
        </div>
      </div>
    </section>
  )
}
