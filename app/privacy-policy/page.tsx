import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { SectionReveal } from '@/components/section-reveal'

export const metadata = {
  title: 'Privacy Policy | H.O.P.E Live Agency',
  description: 'Privacy Policy for H.O.P.E Live Agency. Learn how we collect, use, and protect your personal information.',
}

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen pt-20">
        <section className="py-24 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionReveal>
              <h1 className="text-5xl font-bold text-[#4B0082] font-playfair mb-4">
                Privacy Policy
              </h1>
              <p className="text-gray-600 mb-8">
                <strong>Last Updated:</strong> December 31, 2025
              </p>
            </SectionReveal>

            <div className="prose prose-lg max-w-none space-y-8 text-gray-700 leading-relaxed">
              <SectionReveal delay={0.1}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">1. Introduction</h2>
                  <p>
                    H.O.P.E Live Agency ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website hopeliveagency.com and use our services.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.15}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">2. Information We Collect</h2>
                  <h3 className="text-xl font-semibold text-[#4B0082] mb-2 mt-4">Personal Information</h3>
                  <p>
                    When you apply to join our agency or contact us, we may collect personal information including but not limited to:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Full name</li>
                    <li>Email address</li>
                    <li>Phone number (optional)</li>
                    <li>TikTok handle(s)</li>
                    <li>Content niche and creator information</li>
                    <li>Geographic location (optional)</li>
                  </ul>

                  <h3 className="text-xl font-semibold text-[#4B0082] mb-2 mt-4">Usage Data</h3>
                  <p>
                    We automatically collect certain information when you visit our website, including:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>IP address</li>
                    <li>Browser type and version</li>
                    <li>Pages visited and time spent</li>
                    <li>Referring website</li>
                    <li>Device information</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.2}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">3. How We Use Your Information</h2>
                  <p>We use the information we collect to:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li>Process and review creator applications</li>
                    <li>Communicate with you about our services</li>
                    <li>Provide customer support</li>
                    <li>Improve our website and services</li>
                    <li>Send promotional materials (with your consent)</li>
                    <li>Comply with legal obligations</li>
                    <li>Prevent fraud and maintain security</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.25}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">4. Information Sharing and Disclosure</h2>
                  <p>
                    We do not sell your personal information. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Service Providers:</strong> With third-party vendors who assist in operating our website and services</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>With Your Consent:</strong> When you explicitly authorize us to share your information</li>
                  </ul>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.3}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">5. Data Security</h2>
                  <p>
                    We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet or electronic storage is 100% secure. While we strive to protect your information, we cannot guarantee its absolute security.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.35}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">6. Your Rights</h2>
                  <p>Depending on your location, you may have the following rights:</p>
                  <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Access:</strong> Request access to your personal information</li>
                    <li><strong>Correction:</strong> Request correction of inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Objection:</strong> Object to processing of your information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Withdraw Consent:</strong> Withdraw consent for marketing communications</li>
                  </ul>
                  <p className="mt-4">
                    To exercise these rights, please contact us at hopeliveinquiries@gmail.com.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.4}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">7. Cookies and Tracking</h2>
                  <p>
                    We use cookies and similar tracking technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Disabling cookies may affect website functionality.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.45}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">8. Third-Party Links</h2>
                  <p>
                    Our website may contain links to third-party websites (such as TikTok, Discord, etc.). We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.5}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">9. Children's Privacy</h2>
                  <p>
                    Our services are not intended for individuals under 18 years of age. We do not knowingly collect personal information from children. If you believe we have collected information from a child, please contact us immediately.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.55}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">10. Changes to This Privacy Policy</h2>
                  <p>
                    We may update this Privacy Policy from time to time. We will notify you of any material changes by posting the new policy on this page and updating the "Last Updated" date. Your continued use of our services after changes constitutes acceptance of the updated policy.
                  </p>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.6}>
                <div>
                  <h2 className="text-3xl font-bold text-[#4B0082] mb-4 mt-8">11. Contact Us</h2>
                  <p>
                    If you have questions about this Privacy Policy or our data practices, please contact us:
                  </p>
                  <div className="bg-[#F9F9FB] p-6 rounded-xl mt-4">
                    <p className="font-semibold text-[#4B0082]">H.O.P.E Live Agency</p>
                    <p>Email: hopeliveinquiries@gmail.com</p>
                    <p>Website: hopeliveagency.com</p>
                  </div>
                </div>
              </SectionReveal>

              <SectionReveal delay={0.65}>
                <div className="border-t-2 border-gray-200 pt-8 mt-12">
                  <p className="text-sm text-gray-500 italic">
                    H.O.P.E Live Agency is an independent creator management agency and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd.
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
