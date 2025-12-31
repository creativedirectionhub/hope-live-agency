import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ApplyForm } from '@/components/apply-form'
import { SectionReveal } from '@/components/section-reveal'
import { CheckCircle2 } from 'lucide-react'

export const metadata = {
  title: 'Apply to Join | H.O.P.E Live Agency',
  description: 'Apply to join H.O.P.E Live Agency and start your journey as a professional TikTok LIVE creator. Quick application, personalized support.',
}

const benefits = [
  'Expert training and resources',
  'Premium streaming tools',
  'Vibrant creator community',
  'Brand partnership opportunities',
  '24/7 dedicated support',
  'Exclusive events and workshops',
]

export default function ApplyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
                Apply to Join H.O.P.E
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Take the first step toward elevating your TikTok LIVE career.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Form Section */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Benefits Sidebar */}
              <div className="lg:col-span-1">
                <SectionReveal>
                  <div className="bg-gradient-to-br from-[#4B0082] to-[#3A0066] text-white p-8 rounded-2xl shadow-xl sticky top-24">
                    <h3 className="text-2xl font-bold font-playfair mb-6">What You'll Get</h3>
                    <ul className="space-y-4">
                      {benefits?.map?.((benefit, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <CheckCircle2 className="w-6 h-6 text-[#FFD700] flex-shrink-0 mt-0.5" />
                          <span className="text-white/90">{benefit ?? ''}</span>
                        </li>
                      )) ?? null}
                    </ul>
                  </div>
                </SectionReveal>
              </div>

              {/* Application Form */}
              <div className="lg:col-span-2">
                <SectionReveal delay={0.2}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
                    <h2 className="text-3xl font-bold text-[#4B0082] font-playfair mb-2">
                      Creator Application
                    </h2>
                    <p className="text-gray-600 mb-8">
                      Tell us about yourself and your creator goals. We'll review your application within 2-3 business days.
                    </p>
                    <ApplyForm />
                  </div>
                </SectionReveal>
              </div>
            </div>
          </div>
        </section>

        {/* What Happens Next */}
        <section className="py-24 bg-[#F9F9FB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#4B0082] font-playfair mb-12 text-center">
                What Happens Next?
              </h2>
            </SectionReveal>

            <div className="grid md:grid-cols-3 gap-8">
              <SectionReveal delay={0.2}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-[#4B0082] mb-2">Application Review</h3>
                  <p className="text-gray-600">
                    Our team reviews your application and assesses fit
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-[#4B0082] mb-2">Decision Email</h3>
                  <p className="text-gray-600">
                    You'll receive an email within 2-3 business days
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="text-center">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center text-2xl font-bold text-white mx-auto mb-4">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-[#4B0082] mb-2">Welcome Onboard!</h3>
                  <p className="text-gray-600">
                    Get immediate access to tools, training, and community
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
