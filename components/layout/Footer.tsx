import Link from 'next/link'
import Image from 'next/image'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import { Mail, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-brand-card border-t border-brand-border relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-brand-primary to-transparent" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-4">
              <Image
                src="/logo.svg"
                alt="Technogig Software Solution"
                width={200}
                height={50}
                className="h-10 w-auto"
              />
            </div>
            <p className="text-white/50 text-sm leading-relaxed mb-6">
              Technology + Logic = Let&apos;s Technogig Your Business. Your Digital Engineering & Technology Partner.
            </p>
            <div className="flex items-center gap-4">
              {[
                { icon: FaLinkedin, href: '#', label: 'LinkedIn' },
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaInstagram, href: '#', label: 'Instagram' },
                { icon: FaGithub, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} aria-label={label} className="w-9 h-9 rounded-full border border-brand-border flex items-center justify-center text-white/50 hover:text-brand-primary hover:border-brand-primary transition-colors">
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact'].map(item => (
                <li key={item}>
                  <Link href={`/${item === 'Home' ? '' : item.toLowerCase()}`} className="text-white/50 hover:text-brand-secondary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-display">Services</h3>
            <ul className="space-y-3">
              {['Web Development', 'Mobile Apps', 'MLM Software', 'E-Commerce', 'CRM & HRM', 'AI & Machine Learning', 'DevOps & Cloud'].map(item => (
                <li key={item}>
                  <Link href="/services" className="text-white/50 hover:text-brand-secondary text-sm transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-5 font-display">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-primary mt-1 shrink-0" />
                <span className="text-white/50 text-sm">SRS Tower, Sector 31, Faridabad, Haryana 121003</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-secondary mt-1 shrink-0" />
                <span className="text-white/50 text-sm">Techman City, Mathura, UP</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="tel:+918445806095" className="text-white/50 hover:text-white text-sm transition-colors">+91-8445806095</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-primary shrink-0" />
                <a href="mailto:hr@technogigsolution.in" className="text-white/50 hover:text-white text-sm transition-colors">hr@technogigsolution.in</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border text-center">
          <p className="text-white/30 text-sm">© 2025 Technogig Software Solution. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
