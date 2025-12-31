import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CreatorJourney } from '@/components/creator-journey'
import { SectionReveal } from '@/components/section-reveal'
import { Clock, UserCheck, Lightbulb, TrendingUp } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'How It Works | H.O.P.E Live Agency',
  description: 'Learn how to join H.O.P.E Live Agency and start your journey as a professional TikTok LIVE creator. Simple process, powerful results.',
}

const highlights = [
  {
    icon: Clock,
    title: 'Quick Review Process',
    description: '2-3 business days from application to decision',
  },
  {
    icon: UserCheck,
    title: 'Personalized Onboarding',
    description: 'Tailored training based on your experience level',
  },
  {
    icon: Lightbulb,
    title: 'Immediate Access',
    description: 'Start using tools and resources right away',
  },
  {
    icon: TrendingUp,
    title: 'Ongoing Support',
    description: '24/7 assistance throughout your creator journey',
  },
]

export default function HowItWorksPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
                How It Works
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                A straightforward path from application to thriving LIVE creator.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Highlights */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {highlights?.map?.((highlight, index) => {
                const Icon = highlight?.icon
                return (
                  <SectionReveal key={highlight?.title ?? index} delay={index * 0.1}>
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mx-auto mb-4">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-lg font-bold text-[#4B0082] mb-2">
                        {highlight?.title ?? ''}
                      </h3>
                      <p className="text-gray-600 text-sm">
                        {highlight?.description ?? ''}
                      </p>
                    </div>
                  </SectionReveal>
                )
              }) ?? null}
            </div>
          </div>
        </section>

        {/* Journey Steps */}
        <CreatorJourney />

        {/* What to Expect */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-12 text-center">
                What to Expect
              </h2>
            </SectionReveal>

            <div className="space-y-8">
              <SectionReveal delay={0.2}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">After You Apply</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Our team carefully reviews each application to understand your goals, current setup, and how we can best support you. We value quality over quantity and want to ensure H.O.P.E is the right fit for your creator journey.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">During Onboarding</h3>
                  <p className="text-gray-600 leading-relaxed">
                    You'll receive a personalized welcome package with login credentials, training materials, and an invitation to our Discord community. We'll schedule an onboarding call to answer questions and help you get started on the right foot.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Your First 30 Days</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Focus on completing our foundational training, connecting with fellow creators, and establishing your streaming routine. Your dedicated support team will check in regularly to track progress and address any challenges.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.5}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Long-Term Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    As you progress, you'll unlock advanced training, exclusive events, and brand partnership opportunities. We'll continuously work with you to refine your strategy and achieve your evolving goals.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#4B0082] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
                Start Your Journey Today
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                The first step is simple. Submit your application and let's see how we can help you thrive.
              </p>
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-[#FF7A00] hover:bg-white text-white hover:text-[#4B0082] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl"
                >
                  Apply Now
                </Button>
              </Link>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
