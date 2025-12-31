import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Testimonials } from '@/components/testimonials'
import { SectionReveal } from '@/components/section-reveal'
import { Users, TrendingUp, DollarSign, Award } from 'lucide-react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

export const metadata = {
  title: 'Creator Success Stories | H.O.P.E Live Agency',
  description: 'Real success stories from TikTok LIVE creators who transformed their careers with H.O.P.E Live Agency. See the results for yourself.',
}

const stats = [
  {
    icon: Users,
    value: '500+',
    label: 'Active Creators',
    description: 'Thriving in our community',
  },
  {
    icon: TrendingUp,
    value: '10M+',
    label: 'Combined Followers',
    description: 'Across all H.O.P.E creators',
  },
  {
    icon: DollarSign,
    value: '$2M+',
    label: 'Creator Earnings',
    description: 'Generated through our platform',
  },
  {
    icon: Award,
    value: '95%',
    label: 'Success Rate',
    description: 'Creators meeting their goals',
  },
]

const caseStudies = [
  {
    name: 'From 5K to 250K in 6 Months',
    creator: 'Sarah M.',
    niche: 'Beauty & Lifestyle',
    story: 'Sarah joined H.O.P.E with just 5,000 followers and a dream. Through our training program, she learned advanced engagement techniques, optimal streaming times, and monetization strategies. Six months later, she hit 250K followers and now streams full-time.',
    results: [
      'Follower growth: 5K → 250K',
      'Monthly LIVE views: 2M+',
      'Secured 3 brand partnerships',
      'Quit day job to stream full-time',
    ],
  },
  {
    name: 'Gaming Creator Triples Revenue',
    creator: 'Marcus C.',
    niche: 'Gaming',
    story: 'Marcus was already successful with 100K followers but struggled to monetize effectively. After joining H.O.P.E and implementing our gifting strategies and brand partnership framework, his monthly revenue tripled within 4 months.',
    results: [
      'Revenue increased by 300%',
      'Landed exclusive gaming sponsor',
      'Grew to 500K followers',
      'Featured at H.O.P.E creator event',
    ],
  },
  {
    name: 'Cooking Creator Builds Brand',
    creator: 'Elena R.',
    niche: 'Cooking',
    story: 'Elena had great content but no clear monetization path. H.O.P.E connected her with kitchen brands and taught her how to integrate products naturally into her streams. She now has recurring sponsorships and launched her own cookbook.',
    results: [
      'Monthly sponsorship income: $5K+',
      'Released debut cookbook',
      'Community growth: 180K followers',
      'Streams 5x per week consistently',
    ],
  },
]

export default function CreatorSuccessPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
                Creator Success Stories
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Real creators. Real results. Real community.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-4xl font-bold text-[#4B0082] font-playfair mb-16 text-center">
                The H.O.P.E Impact
              </h2>
            </SectionReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {stats?.map?.((stat, index) => {
                const Icon = stat?.icon
                return (
                  <SectionReveal key={stat?.label ?? index} delay={index * 0.1}>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-100 text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mx-auto mb-4">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                      <div className="text-4xl font-bold gradient-text font-playfair mb-2">
                        {stat?.value ?? ''}
                      </div>
                      <div className="text-lg font-semibold text-[#4B0082] mb-1">
                        {stat?.label ?? ''}
                      </div>
                      <div className="text-sm text-gray-600">
                        {stat?.description ?? ''}
                      </div>
                    </div>
                  </SectionReveal>
                )
              }) ?? null}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <Testimonials />

        {/* Case Studies */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h2 className="text-4xl font-bold text-[#4B0082] font-playfair mb-16 text-center">
                Featured Success Stories
              </h2>
            </SectionReveal>

            <div className="space-y-12">
              {caseStudies?.map?.((study, index) => (
                <SectionReveal key={study?.name ?? index} delay={index * 0.2}>
                  <div className="bg-gradient-to-br from-gray-50 to-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-200">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center text-2xl font-bold text-white flex-shrink-0">
                        {study?.creator?.charAt?.(0) ?? 'C'}
                      </div>
                      <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-[#4B0082] mb-2">
                          {study?.name ?? ''}
                        </h3>
                        <p className="text-[#FF7A00] font-semibold">
                          {study?.creator ?? ''} • {study?.niche ?? ''}
                        </p>
                      </div>
                    </div>

                    <p className="text-gray-700 text-lg leading-relaxed mb-6">
                      {study?.story ?? ''}
                    </p>

                    <div className="bg-white p-6 rounded-xl border-2 border-[#FFD700]">
                      <h4 className="font-bold text-[#4B0082] mb-4">Key Results:</h4>
                      <ul className="space-y-2">
                        {study?.results?.map?.((result, idx) => (
                          <li key={idx} className="flex items-center gap-2 text-gray-700">
                            <div className="w-2 h-2 rounded-full bg-[#FF7A00]" />
                            {result ?? ''}
                          </li>
                        )) ?? null}
                      </ul>
                    </div>
                  </div>
                </SectionReveal>
              )) ?? null}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 bg-[#4B0082] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-4xl sm:text-5xl font-bold font-playfair mb-6">
                Your Success Story Starts Here
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join the creators who are transforming their passion into thriving careers with H.O.P.E.
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
