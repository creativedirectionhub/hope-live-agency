import Link from 'next/link'
import { Instagram, MessageCircle } from 'lucide-react'

export function Footer() {
  const currentYear = new Date()?.getFullYear?.()

  return (
    <footer className="bg-[#4B0082] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <h3 className="text-3xl font-bold font-playfair mb-2">H.O.P.E Live Agency</h3>
              <p className="text-lg text-white/90 font-medium">Helping Other People Elevate</p>
            </div>
            <p className="text-white/70 mb-6 max-w-md">
              Premier TikTok LIVE creator agency providing expert training, tools, and support to help creators thrive in the live streaming space.
            </p>
            <div className="flex items-center gap-4">
              <a
                href="https://discord.gg/A7WgPyJP"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF7A00] flex items-center justify-center transition-colors"
                aria-label="Join our Discord"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#FF7A00] flex items-center justify-center transition-colors"
                aria-label="Follow on Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#FFD700]">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-white/80 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-white/80 hover:text-white transition-colors">
                  What You Get
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="text-white/80 hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/creator-success" className="text-white/80 hover:text-white transition-colors">
                  Success Stories
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4 text-[#FFD700]">Support</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/contact" className="text-white/80 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/apply" className="text-white/80 hover:text-white transition-colors">
                  Apply Now
                </Link>
              </li>
              <li>
                <a
                  href="mailto:hopeliveinquiries@gmail.com"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  Email Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm text-center md:text-left">
            © {currentYear ?? 2025} H.O.P.E Live Agency. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm">
            <Link href="/privacy-policy" className="text-white/60 hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms-of-service" className="text-white/60 hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 pt-6 border-t border-white/10">
          <p className="text-white/50 text-xs text-center">
            H.O.P.E Live Agency is an independent creator management agency and is not affiliated with, endorsed by, or sponsored by TikTok or ByteDance Ltd.
          </p>
        </div>
      </div>
    </footer>
  )
}
