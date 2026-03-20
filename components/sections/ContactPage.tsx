'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { MapPin, Phone, Mail, Send } from 'lucide-react'
import { FaLinkedin, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa'
import toast from 'react-hot-toast'
import GradientText from '@/components/ui/GradientText'
import BlurText from '@/components/ui/BlurText'
import GlassCard from '@/components/ui/GlassCard'
import SpotlightCard from '@/components/ui/SpotlightCard'
import Magnet from '@/components/ui/Magnet'

export default function ContactPage() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', service: '', budget: '', message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    await new Promise(r => setTimeout(r, 1500))
    setLoading(false)
    toast.success('Message sent! We\'ll get back within 24 hours.')
    setForm({ name: '', email: '', phone: '', service: '', budget: '', message: '' })
  }

  return (
    <div className="min-h-screen pt-[68px]">
      {/* HERO */}
      <section className="relative py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-bg bg-brand-dark" />
        <div className="absolute top-10 left-1/4 w-72 h-72 bg-brand-primary/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-10 right-1/4 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px] animate-float-delay" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-white/40 font-mono mb-4"
          >
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Contact</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-6"
          >
            <span className="text-5xl md:text-7xl font-display font-bold text-white">Let&apos;s Work{' '}</span>
            <GradientText colors={['#6C63FF', '#00D9FF', '#FF6B6B', '#6C63FF']} animationSpeed={5} className="text-5xl md:text-7xl font-display font-bold">
              Together
            </GradientText>
          </motion.div>
          <BlurText
            text="Have a project in mind? Drop us a message and we'll get back within 24 hours."
            delay={60}
            animateBy="words"
            className="text-white/60 text-xl max-w-2xl mx-auto justify-center"
          />
        </div>
      </section>

      {/* TWO-COLUMN FORM */}
      <section className="py-16 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-display font-bold text-white mb-8">Get In Touch</h2>
            <div className="space-y-6 mb-10">
              {[
                { icon: MapPin, color: 'text-brand-primary', label: 'Main Office', value: 'SRS Tower, Sector 31, Faridabad, Haryana 121003' },
                { icon: MapPin, color: 'text-brand-secondary', label: 'Branch Office', value: 'Techman City, Mathura, UP' },
                { icon: Phone, color: 'text-brand-primary', label: 'Phone', value: '+91-8445806095', href: 'tel:+918445806095' },
                { icon: Mail, color: 'text-brand-secondary', label: 'Email', value: 'hr@technogigsolution.in', href: 'mailto:hr@technogigsolution.in' },
              ].map((item, i) => (
                <SpotlightCard key={i} className="flex items-start gap-4 p-5" spotlightColor="rgba(108, 99, 255, 0.2)">
                  <item.icon className={`w-5 h-5 ${item.color} mt-0.5 shrink-0`} />
                  <div>
                    <div className="text-white/40 text-xs font-mono mb-1">{item.label}</div>
                    {item.href ? (
                      <a href={item.href} className="text-white text-sm hover:text-brand-primary transition-colors">{item.value}</a>
                    ) : (
                      <div className="text-white text-sm">{item.value}</div>
                    )}
                  </div>
                </SpotlightCard>
              ))}
            </div>
            <div>
              <div className="text-white/40 text-sm font-mono mb-4">Follow Us</div>
              <div className="flex gap-3">
                {[
                  { icon: FaLinkedin, label: 'LinkedIn' },
                  { icon: FaTwitter, label: 'Twitter' },
                  { icon: FaInstagram, label: 'Instagram' },
                  { icon: FaGithub, label: 'GitHub' },
                ].map(({ icon: Icon, label }) => (
                  <a key={label} href="#" aria-label={label} className="w-10 h-10 rounded-xl glass border border-brand-border flex items-center justify-center text-white/50 hover:text-brand-primary hover:border-brand-primary transition-all">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <GlassCard className="p-8" glowColor="rgba(108, 99, 255, 0.2)">
            <form onSubmit={handleSubmit} className="space-y-5">
              <h2 className="text-xl font-display font-bold text-white mb-2">Send a Message</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-white/50 text-xs font-mono mb-2">Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={e => setForm({...form, name: e.target.value})}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-primary outline-none text-white placeholder-white/20 text-sm transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-white/50 text-xs font-mono mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={e => setForm({...form, email: e.target.value})}
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-primary outline-none text-white placeholder-white/20 text-sm transition-colors"
                  />
                </div>
              </div>
              <div>
                <label className="block text-white/50 text-xs font-mono mb-2">Phone</label>
                <input
                  value={form.phone}
                  onChange={e => setForm({...form, phone: e.target.value})}
                  placeholder="+91 98765 43210"
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-primary outline-none text-white placeholder-white/20 text-sm transition-colors"
                />
              </div>
              <div>
                <label className="block text-white/50 text-xs font-mono mb-2">Service Interested In</label>
                <select
                  value={form.service}
                  onChange={e => setForm({...form, service: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-primary outline-none text-white text-sm transition-colors"
                >
                  <option value="" className="bg-brand-dark">Select a service...</option>
                  {['Web Development', 'Mobile App Development', 'MLM Software', 'E-Commerce', 'CRM & HRM Software', 'AI & Machine Learning', 'DevOps & Cloud', 'Custom Software'].map(s => (
                    <option key={s} value={s} className="bg-brand-dark">{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/50 text-xs font-mono mb-2">Project Budget</label>
                <select
                  value={form.budget}
                  onChange={e => setForm({...form, budget: e.target.value})}
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-primary outline-none text-white text-sm transition-colors"
                >
                  <option value="" className="bg-brand-dark">Select a budget range...</option>
                  {['Under ₹50,000', '₹50,000 – ₹1,00,000', '₹1,00,000 – ₹5,00,000', '₹5,00,000 – ₹15,00,000', '₹15,00,000+', 'Not Sure Yet'].map(b => (
                    <option key={b} value={b} className="bg-brand-dark">{b}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-white/50 text-xs font-mono mb-2">Message *</label>
                <textarea
                  required
                  rows={4}
                  value={form.message}
                  onChange={e => setForm({...form, message: e.target.value})}
                  placeholder="Tell us about your project..."
                  className="w-full px-4 py-3 rounded-xl bg-brand-dark border border-brand-border focus:border-brand-primary outline-none text-white placeholder-white/20 text-sm transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:opacity-90 transition-all glow-purple disabled:opacity-60"
              >
                {loading ? (
                  <>
                    <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" /> Send Message
                  </>
                )}
              </button>
            </form>
            </GlassCard>
          </motion.div>
        </div>
      </section>

      {/* GOOGLE MAPS */}
      <section className="px-4 pb-16 bg-brand-card">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-2xl overflow-hidden border border-brand-border" style={{ height: '400px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.1!2d77.3094!3d28.3976!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdcb5b4b4b4b5%3A0x1234567890abcdef!2sSRS%20Tower%2C%20Sector%2031%2C%20Faridabad!5e0!3m2!1sen!2sin!4v1"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Technogig Office Location"
            />
          </div>
        </div>
      </section>
    </div>
  )
}
