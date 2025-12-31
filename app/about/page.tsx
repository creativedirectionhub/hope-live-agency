import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionReveal } from '@/components/section-reveal'
import { Heart, Target, Users, Zap } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'About Us | H.O.P.E Live Agency',
  description: 'Learn about H.O.P.E Live Agency - Helping Other People Elevate. We are a premier TikTok LIVE creator management agency dedicated to creator success.',
}

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
                About H.O.P.E
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Building a community where TikTok LIVE creators don't just survive—they thrive.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-6">
                  Our Mission
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                  H.O.P.E stands for <span className="font-bold text-[#FF7A00]">Helping Other People Elevate</span>. We believe every creator deserves the tools, training, and support needed to turn their passion into a sustainable career.
                </p>
              </div>
            </SectionReveal>

            <div className="grid md:grid-cols-2 gap-12 mt-16">
              <SectionReveal delay={0.2}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mb-6">
                    <Heart className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Creator-First Approach</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Your success is our success. We provide personalized guidance, resources, and opportunities tailored to your unique goals and content style.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mb-6">
                    <Users className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Strong Community</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Join a vibrant network of creators who support, inspire, and learn from each other. Collaboration over competition is our philosophy.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mb-6">
                    <Target className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Results-Driven</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We measure success by your growth. Our strategies are data-backed and proven to increase engagement, followers, and revenue.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.5}>
                <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mb-6">
                    <Zap className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-[#4B0082] mb-4">Continuous Innovation</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The creator economy evolves rapidly. We stay ahead of trends, platform updates, and best practices to keep you competitive.
                  </p>
                </div>
              </SectionReveal>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-24 bg-[#F9F9FB]">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold text-[#4B0082] font-playfair mb-8 text-center">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6 leading-relaxed">
                <p>
                  H.O.P.E Live Agency was founded by creators, for creators. We saw talented streamers struggling to navigate the complexities of monetization, audience growth, and platform algorithms without proper guidance.
                </p>
                <p>
                  What started as a small Discord community has grown into a full-service agency supporting hundreds of creators across every niche. From gaming to cooking, beauty to education—we've helped creators at every stage turn their passion into profit.
                </p>
                <p>
                  Today, H.O.P.E is recognized as one of the premier TikTok LIVE creator agencies, known for our personalized approach, comprehensive training programs, and genuine commitment to creator success.
                </p>
                <p className="font-semibold text-[#4B0082]">
                  We're not just an agency—we're a family dedicated to helping you reach new heights in your creator journey.
                </p>
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#4B0082] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
                Join Our Community
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Ready to take your TikTok LIVE career to the next level? Let's elevate together.
              </p>
              <Link href="/apply">
                <Button
                  size="lg"
                  className="bg-[#FF7A00] hover:bg-white text-white hover:text-[#4B0082] font-semibold px-8 py-6 text-lg rounded-full transition-all duration-300 shadow-2xl"
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
