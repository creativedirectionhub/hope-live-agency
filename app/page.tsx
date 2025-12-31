import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Hero } from '@/components/hero'
import { BenefitsGrid } from '@/components/benefits-grid'
import { CreatorJourney } from '@/components/creator-journey'
import { Testimonials } from '@/components/testimonials'
import { FAQ } from '@/components/faq'
import { SectionReveal } from '@/components/section-reveal'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Hero />
        
        <BenefitsGrid />
        
        <CreatorJourney />
        
        <Testimonials />
        
        <FAQ />
        
        {/* Final CTA Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-white font-playfair mb-6">
                Ready to Elevate Your LIVE Career?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join hundreds of successful creators who trust H.O.P.E to help them grow, monetize, and thrive in the TikTok LIVE space.
              </p>
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-white text-[#4B0082] hover:bg-gray-100 font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl hover:shadow-white/50 group"
                >
                  Start Your Application
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
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
