import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { ContactForm } from '@/components/contact-form'
import { SectionReveal } from '@/components/section-reveal'
import { Mail, MessageCircle, MapPin } from 'lucide-react'

export const metadata = {
  title: 'Contact Us | H.O.P.E Live Agency',
  description: 'Get in touch with H.O.P.E Live Agency. We are here to answer your questions about joining our TikTok LIVE creator community.',
}

const contactInfo = [
  {
    icon: Mail,
    title: 'Email Us',
    content: 'hopeliveinquiries@gmail.com',
    description: 'We typically respond within 24 hours',
  },
  {
    icon: MessageCircle,
    title: 'Join Our Discord',
    content: 'discord.gg/A7WgPyJP',
    description: 'Connect with our community',
    link: 'https://discord.gg/A7WgPyJP',
  },
  {
    icon: MapPin,
    title: 'We\'re Remote-First',
    content: 'Supporting creators worldwide',
    description: 'Available across all time zones',
  },
]

export default function ContactPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        {/* Hero Section */}
        <section className="py-24 bg-gradient-to-br from-[#FF7A00] via-[#C81D77] to-[#8B00FF] text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h1 className="text-5xl sm:text-6xl font-bold font-playfair mb-6">
                Get in Touch
              </h1>
              <p className="text-xl leading-relaxed text-white/90">
                Questions about joining H.O.P.E? We're here to help.
              </p>
            </SectionReveal>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {contactInfo?.map?.((info, index) => {
                const Icon = info?.icon
                return (
                  <SectionReveal key={info?.title ?? index} delay={index * 0.1}>
                    <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center hover:shadow-xl transition-shadow duration-300">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#FF7A00] to-[#C81D77] flex items-center justify-center mx-auto mb-4">
                        {Icon && <Icon className="w-8 h-8 text-white" />}
                      </div>
                      <h3 className="text-xl font-bold text-[#4B0082] mb-2">
                        {info?.title ?? ''}
                      </h3>
                      {info?.link ? (
                        <a
                          href={info?.link ?? '#'}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#FF7A00] font-semibold hover:underline block mb-2"
                        >
                          {info?.content ?? ''}
                        </a>
                      ) : (
                        <p className="text-[#FF7A00] font-semibold mb-2">
                          {info?.content ?? ''}
                        </p>
                      )}
                      <p className="text-gray-600 text-sm">
                        {info?.description ?? ''}
                      </p>
                    </div>
                  </SectionReveal>
                )
              }) ?? null}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-24 bg-[#F9F9FB]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-bold text-[#4B0082] font-playfair mb-4">
                  Send Us a Message
                </h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below and we'll get back to you as soon as possible.
                </p>
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <div className="bg-white p-8 md:p-12 rounded-2xl shadow-xl border border-gray-200">
                <ContactForm />
              </div>
            </SectionReveal>
          </div>
        </section>

        {/* FAQ Link */}
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <SectionReveal>
              <h2 className="text-3xl font-bold text-[#4B0082] font-playfair mb-4">
                Have a Quick Question?
              </h2>
              <p className="text-gray-600 mb-6">
                Check out our FAQ section on the homepage - you might find the answer there!
              </p>
              <a
                href="/#faq"
                className="inline-block text-[#FF7A00] font-semibold hover:underline"
              >
                View Frequently Asked Questions →
              </a>
            </SectionReveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
