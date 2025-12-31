import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { BenefitsGrid } from '@/components/benefits-grid'
import { SectionReveal } from '@/components/section-reveal'
import { Sparkles, BookOpen, BarChart3, Shield, Megaphone, Rocket } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'What You Get | H.O.P.E Live Agency',
  description: 'Discover all the benefits of joining H.O.P.E Live Agency: expert training, premium tools, community support, and exclusive opportunities for TikTok LIVE creators.',
}

const additionalServices = [
  {
    icon: BookOpen,
    title: 'Comprehensive Training Library',
    description: 'Access our extensive library of courses, tutorials, and masterclasses covering everything from technical setup to advanced monetization strategies.',
  },
  {
    icon: BarChart3,
    title: 'Analytics & Insights Dashboard',
    description: 'Track your performance with our custom analytics dashboard. Understand what content resonates and optimize your streaming strategy.',
  },
  {
    icon: Shield,
    title: 'Legal & Contract Support',
    description: 'Get help with brand partnerships, sponsorship contracts, and legal questions. We protect your interests in every deal.',
  },
  {
    icon: Megaphone,
    title: 'Marketing & Promotion',
    description: 'Benefit from cross-promotion within our network, featured spots in our campaigns, and marketing support to expand your reach.',
  },
  {
    icon: Sparkles,
    title: 'Brand Partnership Opportunities',
    description: 'Connect with vetted brands looking for creators like you. We facilitate partnerships that align with your content and values.',
  },
  {
    icon: Rocket,
    title: 'Growth Strategy Consultations',
    description: 'Get personalized 1-on-1 consultations with our growth strategists who will help you identify opportunities and overcome challenges.',
  },
]

export default function ServicesPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
                What You Get
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                A complete ecosystem designed to support your growth as a professional TikTok LIVE creator.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Main Benefits */}
        <BenefitsGrid />

        {/* Additional Services */}
        <section className="py-24 bg-[#F9F9FB]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-4">
                  Even More Benefits
                </h2>
                <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                  We go above and beyond to ensure your success
                </p>
              </div>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {additionalServices?.map?.((service, index) => {
                const Icon = service?.icon
                return (
                  <SectionReveal key={service?.title ?? index} delay={index * 0.1}>
                    <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-200 h-full">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#8B00FF] to-[#C81D77] flex items-center justify-center mb-6">
                        {Icon && <Icon className="w-7 h-7 text-white" />}
                      </div>
                      <h3 className="text-xl font-bold text-[#4B0082] mb-3">
                        {service?.title ?? ''}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {service?.description ?? ''}
                      </p>
                    </div>
                  </SectionReveal>
                )
              }) ?? null}
            </div>
          </div>
        </section>

        {/* Investment Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="bg-gradient-to-br from-[#4B0082] to-[#3A0066] text-white p-12 rounded-3xl shadow-2xl">
                <h2 className="text-3xl sm:text-4xl font-bold font-playfair mb-6 text-center">
                  Your Investment in Success
                </h2>
                <p className="text-lg text-white/90 leading-relaxed text-center mb-8">
                  We offer flexible partnership structures tailored to your current stage and goals. During the application process, we'll discuss the model that works best for you. Our commitment is to your growth—when you succeed, we succeed.
                </p>
                <p className="text-center text-white/80 italic">
                  Ready to learn more? Let's talk about how H.O.P.E can accelerate your creator journey.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#F9F9FB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-6">
                Ready to Get Started?
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Join the premier TikTok LIVE creator agency and unlock your full potential.
              </p>
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-[#FF7A00] hover:bg-[#C81D77] text-white font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Apply to Join H.O.P.E
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
