import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionReveal } from '@/components/section-reveal'

export const metadata = {
  title: 'Terms of Service | H.O.P.E Live Agency',
  description: 'Terms of Service for H.O.P.E Live Agency. Read our terms and conditions for using our creator management services.',
}

export default function TermsOfServicePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h1 className="text-5xl font-bold text-[#4B0082] font-playfair mb-4">
                Terms of Service
              </h1>
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> December 31, 2025
              </p>
            </SectionReveal>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
              <SectionReveal delay={0.1}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">1. Agreement to Terms</h2>
                  <p>
                    By accessing or using the H.O.P.E Live Agency website (hopeliveagency.com) and services, you agree to be bound by these Terms of Service. If you disagree with any part of these terms, you may not access our services.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">2. Description of Services</h2>
                  <p>
                    H.O.P.E Live Agency provides creator management services for TikTok LIVE streamers, including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Training and educational resources</li>
                    <li>Access to streaming tools and analytics</li>
                    <li>Community networking opportunities</li>
                    <li>Brand partnership facilitation</li>
                    <li>Technical and strategic support</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">3. Eligibility</h2>
                  <p>
                    To use our services, you must:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Be at least 18 years of age</li>
                    <li>Have the legal capacity to enter into binding agreements</li>
                    <li>Have an active TikTok account in good standing</li>
                    <li>Provide accurate and truthful information during the application process</li>
                    <li>Comply with TikTok's Community Guidelines and Terms of Service</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.25}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">4. Application Process</h2>
                  <p>
                    Submitting an application does not guarantee acceptance into H.O.P.E Live Agency. We reserve the right to accept or reject any application at our sole discretion. Decisions are final and not subject to appeal. We will notify applicants of our decision within 2-3 business days.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">5. Creator Responsibilities</h2>
                  <p>
                    As a member of H.O.P.E Live Agency, you agree to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Maintain an active and consistent streaming schedule</li>
                    <li>Create content that complies with TikTok's Community Guidelines</li>
                    <li>Represent H.O.P.E Live Agency professionally</li>
                    <li>Participate in required training and check-ins</li>
                    <li>Provide accurate analytics and performance data when requested</li>
                    <li>Honor commitments to brand partnerships facilitated by H.O.P.E</li>
                    <li>Respect fellow community members</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.35}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">6. Partnership Agreements</h2>
                  <p>
                    Specific terms of your partnership with H.O.P.E Live Agency (including revenue sharing, exclusivity, duration, and other arrangements) will be outlined in a separate Creator Agreement. These Terms of Service apply in addition to any Creator Agreement.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">7. Intellectual Property</h2>
                  <p>
                    You retain ownership of all content you create. By joining H.O.P.E Live Agency, you grant us a non-exclusive license to use your name, likeness, and content for promotional purposes related to our services. This includes featuring your content in marketing materials, case studies, and promotional campaigns.
                  </p>
                  <p className="mt-4">
                    All H.O.P.E Live Agency branding, training materials, and proprietary tools remain our intellectual property.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.45}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">8. Prohibited Conduct</h2>
                  <p>
                    You agree not to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Create content that is hateful, harassing, or discriminatory</li>
                    <li>Engage in fraudulent activity or misrepresent your performance metrics</li>
                    <li>Share confidential information about H.O.P.E or fellow creators</li>
                    <li>Attempt to circumvent brand partnerships facilitated by H.O.P.E</li>
                    <li>Use our services for any unauthorized commercial purposes</li>
                    <li>Reverse engineer or copy our proprietary tools and materials</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.5}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">9. Termination</h2>
                  <p>
                    Either party may terminate the relationship at any time, subject to the terms of any Creator Agreement. H.O.P.E Live Agency reserves the right to suspend or terminate your access to services immediately for:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Violation of these Terms of Service</li>
                    <li>Violation of TikTok's Terms of Service or Community Guidelines</li>
                    <li>Engaging in prohibited conduct</li>
                    <li>Providing false or misleading information</li>
                    <li>Inactivity or failure to meet agreed-upon commitments</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.55}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">10. Disclaimers</h2>
                  <p>
                    <strong>No Guarantees:</strong> While we provide tools, training, and support, we cannot guarantee specific outcomes such as follower growth, earnings, or brand partnerships. Your success depends on many factors, including your content quality, consistency, and audience engagement.
                  </p>
                  <p className="mt-4">
                    <strong>Independent Agency:</strong> H.O.P.E Live Agency is an independent creator management agency and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd.
                  </p>
                  <p className="mt-4">
                    <strong>Services Provided "As Is":</strong> Our services are provided on an "as is" and "as available" basis without warranties of any kind, either express or implied.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.6}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">11. Limitation of Liability</h2>
                  <p>
                    To the maximum extent permitted by law, H.O.P.E Live Agency shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services. Our total liability shall not exceed the amount paid by you to us in the 12 months preceding the claim.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.65}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">12. Indemnification</h2>
                  <p>
                    You agree to indemnify and hold harmless H.O.P.E Live Agency from any claims, damages, losses, or expenses arising from your use of our services, violation of these terms, or infringement of any third-party rights.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.7}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">13. Changes to Terms</h2>
                  <p>
                    We reserve the right to modify these Terms of Service at any time. Material changes will be communicated via email or through our website. Continued use of our services after changes constitutes acceptance of the updated terms.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.75}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">14. Governing Law</h2>
                  <p>
                    These Terms of Service shall be governed by and construed in accordance with the laws of the jurisdiction in which H.O.P.E Live Agency operates, without regard to its conflict of law provisions.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.8}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">15. Contact Information</h2>
                  <p>
                    If you have questions about these Terms of Service, please contact us:
                  </p>
                  <div className="bg-[#F9F9FB] p-6 rounded-xl mt-4">
                    <p className="font-semibold text-[#4B0082]">H.O.P.E Live Agency</p>
                    <p>Email: hopeliveinquiries@gmail.com</p>
                    <p>Website: hopeliveagency.com</p>
                    <p>Discord: discord.gg/A7WgPyJP</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.85}>
                <div className="border-t-2 border-gray-200 pt-8 mt-12">
                  <p className="text-center font-semibold text-[#4B0082]">
                    By using H.O.P.E Live Agency services, you acknowledge that you have read, understood, and agree to be bound by these Terms of Service.
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
