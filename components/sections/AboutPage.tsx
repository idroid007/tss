'use client'
import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import CountUp from 'react-countup'
import { COMPANY } from '@/lib/constants'
import GradientText from '@/components/ui/GradientText'
import BlurText from '@/components/ui/BlurText'
import SpotlightCard from '@/components/ui/SpotlightCard'
import GlassCard from '@/components/ui/GlassCard'
import Magnet from '@/components/ui/Magnet'

const team = [
  { name: 'Pushpendra', role: 'CEO', initials: 'P' },
  { name: 'Dheerendra Kuntal', role: 'Account Manager', initials: 'DK' },
  { name: 'Reeta Kunjur', role: 'Talent Acquisitions Manager', initials: 'RK' },
  { name: 'Shivani Kuntal', role: 'Project Manager', initials: 'SK' },
]

const values = [
  { icon: '💡', title: 'Innovation', desc: 'We embrace new technologies and ideas to stay ahead of the curve.' },
  { icon: '🔍', title: 'Transparency', desc: 'Open communication and honesty in every project and partnership.' },
  { icon: '⭐', title: 'Quality', desc: 'We never compromise on quality — from code to client experience.' },
  { icon: '⚡', title: 'Speed', desc: 'Rapid delivery without sacrificing precision or reliability.' },
  { icon: '🤝', title: 'Client First', desc: 'Your success is our success. We\'re invested in your outcomes.' },
  { icon: '🌍', title: 'Global Mindset', desc: 'Building products that work across cultures, markets, and borders.' },
]

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-display font-bold gradient-text mb-1">
        {inView ? <CountUp end={value} duration={2.5} separator="," suffix={suffix} /> : '0'}
      </div>
      <div className="text-white/50 text-sm">{label}</div>
    </div>
  )
}

export default function AboutPage() {
  return (
    <div className="min-h-screen pt-[68px]">
      {/* HERO */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-20 left-1/4 w-72 h-72 bg-brand-primary/15 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-brand-secondary/10 rounded-full blur-[80px] animate-float-delay" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-white/40 font-mono mb-6"
          >
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">About</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mb-4"
          >
            <span className="text-4xl md:text-6xl font-display font-bold text-white">About{' '}</span>
            <GradientText colors={['#6C63FF', '#00D9FF', '#FF6B6B', '#6C63FF']} animationSpeed={5} className="text-4xl md:text-6xl font-display font-bold">
              Technogig
            </GradientText>
          </motion.div>
          <BlurText
            text="A passionate team of engineers, designers, and strategists building digital products that make a difference."
            delay={60}
            animateBy="words"
            className="text-white/60 text-xl max-w-2xl mx-auto justify-center"
          />
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-24 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-brand-primary font-mono text-sm tracking-wider uppercase">Our Story</span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mt-3 mb-6">
              Built on Passion, <span className="gradient-text">Driven by Purpose</span>
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              Technogig Software Solution was established with the motive of becoming one of the best IT & Software companies. Our objective is to create software solutions for offshore clients — quality work, within budget, delivered globally.
            </p>
            <p className="text-white/60 leading-relaxed mb-6">
              What started as a small team of passionate developers has grown into a full-service digital engineering agency serving clients across India, USA, UK, UAE, and beyond. We don&apos;t just write code — we build businesses.
            </p>
            <p className="text-white/60 leading-relaxed mb-8">
              Every project we undertake is approached with the mindset of a co-founder: understanding the business deeply, designing for impact, and engineering for scale.
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-medium hover:opacity-90 transition-all glow-purple">
              Start a Conversation <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden glass border border-brand-border p-8">
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: '🏆', title: 'Award-Winning', desc: 'Recognized for excellence in software delivery' },
                  { icon: '🌐', title: 'Global Reach', desc: '15+ countries served across 4 continents' },
                  { icon: '⚡', title: 'Agile Sprints', desc: '2-week delivery cycles, always on schedule' },
                  { icon: '🔐', title: 'ISO Standards', desc: 'Enterprise-grade security & quality practices' },
                ].map((item, i) => (
                  <div key={i} className="p-5 rounded-xl bg-brand-border/30 hover:bg-brand-primary/10 transition-colors">
                    <div className="text-3xl mb-3">{item.icon}</div>
                    <div className="font-display font-semibold text-white text-sm mb-1">{item.title}</div>
                    <div className="text-white/40 text-xs">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MISSION VISION HISTORY */}
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Our <span className="gradient-text">Foundation</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: '🎯',
                title: 'Mission',
                desc: 'To deliver world-class software solutions that empower businesses to grow faster, operate smarter, and reach further — with unwavering commitment to quality, innovation, and client success.',
              },
              {
                icon: '👁️',
                title: 'Vision',
                desc: "To become the most trusted digital engineering partner globally — a company where every client's dream project becomes a reality that exceeds expectations and creates lasting business value.",
              },
              {
                icon: '📖',
                title: 'History',
                desc: 'Founded in Faridabad, Haryana, Technogig grew from a passionate startup to a 50+ person agency with offices in Faridabad and Mathura, serving 100+ happy clients across the globe.',
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
              >
                <GlassCard className="p-8 text-center h-full" glowColor="rgba(108, 99, 255, 0.2)">
                  <div className="text-5xl mb-5">{card.icon}</div>
                  <h3 className="text-xl font-display font-bold text-white mb-4">{card.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{card.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white">
              Our <span className="gradient-text">Values</span>
            </h2>
          </motion.div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {values.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="p-6 rounded-2xl glass border border-brand-border hover:border-brand-primary/30 transition-all text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="font-display font-semibold text-white mb-2">{value.title}</h3>
                <p className="text-white/40 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="py-20 px-4 bg-brand-card border-y border-brand-border">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-10">
          {COMPANY.stats.map((stat, i) => (
            <StatCounter key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
          ))}
        </div>
      </section>
    </div>
  )
}
