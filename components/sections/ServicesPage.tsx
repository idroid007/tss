'use client'
import dynamic from 'next/dynamic'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Code2, Smartphone, Network, ShoppingCart, Users, Cpu, Cloud, Wrench } from 'lucide-react'
import { SERVICES } from '@/lib/constants'
import WordReveal from '@/components/ui/WordReveal'
import GradientText from '@/components/ui/GradientText'
import BlurText from '@/components/ui/BlurText'
import SpotlightCard from '@/components/ui/SpotlightCard'
import Magnet from '@/components/ui/Magnet'

const Aurora = dynamic(() => import('@/components/ui/Aurora'), { ssr: false })

const serviceIcons = [Code2, Smartphone, Network, ShoppingCart, Users, Cpu, Cloud, Wrench]

const techCategories = [
  {
    label: 'Frontend',
    color: 'from-blue-500 to-cyan-400',
    border: 'border-blue-500/30',
    text: 'text-blue-400',
    techs: ['React', 'Next.js', 'Vue.js', 'Angular', 'Svelte', 'Astro', 'TypeScript', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    color: 'from-violet-500 to-brand-primary',
    border: 'border-violet-500/30',
    text: 'text-violet-400',
    techs: ['Node.js', 'Python', 'Java', 'Go', 'Rust', 'FastAPI', 'Django', 'Laravel', 'NestJS'],
  },
  {
    label: 'Mobile',
    color: 'from-emerald-500 to-teal-400',
    border: 'border-emerald-500/30',
    text: 'text-emerald-400',
    techs: ['Flutter', 'React Native', 'Swift', 'Kotlin', 'Expo', 'Capacitor'],
  },
  {
    label: 'Database',
    color: 'from-orange-500 to-amber-400',
    border: 'border-orange-500/30',
    text: 'text-orange-400',
    techs: ['PostgreSQL', 'MongoDB', 'MySQL', 'Redis', 'Supabase', 'Prisma', 'Elasticsearch'],
  },
  {
    label: 'Cloud & DevOps',
    color: 'from-red-500 to-rose-400',
    border: 'border-red-500/30',
    text: 'text-red-400',
    techs: ['AWS', 'GCP', 'Azure', 'Docker', 'Kubernetes', 'Terraform', 'GitHub Actions', 'CI/CD'],
  },
  {
    label: 'AI & ML',
    color: 'from-brand-secondary to-blue-400',
    border: 'border-cyan-500/30',
    text: 'text-cyan-400',
    techs: ['TensorFlow', 'PyTorch', 'OpenAI API', 'LangChain', 'HuggingFace', 'Scikit-learn'],
  },
]

const processSteps = [
  {
    step: '01',
    title: 'Requirement Analysis',
    desc: 'We deep-dive into your business goals, technical needs, and market landscape. Every requirement is documented, prioritised, and aligned with your vision.',
    tag: 'Discovery',
    duration: '3–5 days',
  },
  {
    step: '02',
    title: 'Architecture Design',
    desc: 'Our architects blueprint a robust, scalable system — selecting the right tech stack, defining APIs, data models, and infrastructure to support your growth.',
    tag: 'Planning',
    duration: '1 week',
  },
  {
    step: '03',
    title: 'UI/UX Prototyping',
    desc: 'Pixel-perfect wireframes and interactive Figma prototypes are crafted and iterated with your feedback until every interaction feels exactly right.',
    tag: 'Design',
    duration: '1–2 weeks',
  },
  {
    step: '04',
    title: 'Agile Development',
    desc: 'Focused 2-week sprints with daily standups, live demos, and continuous integration. You see real progress — not just status updates.',
    tag: 'Build',
    duration: 'Ongoing',
  },
  {
    step: '05',
    title: 'QA & Testing',
    desc: 'Comprehensive automated + manual testing covers unit, integration, performance, and security layers. Zero regressions, zero surprises.',
    tag: 'Quality',
    duration: 'Per sprint',
  },
  {
    step: '06',
    title: 'Deployment',
    desc: 'Zero-downtime releases via fully automated CI/CD pipelines. Production-grade infrastructure on your cloud of choice with rollback safety nets.',
    tag: 'Launch',
    duration: '1–2 days',
  },
  {
    step: '07',
    title: 'Post-Launch Support',
    desc: 'Ongoing monitoring, performance tuning, security patches, and feature iterations. We stay invested in your product long after go-live.',
    tag: 'Support',
    duration: 'Ongoing',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen pt-[68px]">
      {/* HERO */}
      <section className="relative py-32 px-4 overflow-hidden min-h-[60vh] flex items-center">
        <div className="absolute inset-0">
          <Aurora colorStops={['#6C63FF', '#00D9FF', '#FF6B6B']} amplitude={1.0} blend={0.5} speed={0.4} />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/70 via-transparent to-brand-dark/90 grid-bg" />
        <div className="relative z-10 max-w-5xl mx-auto text-center w-full">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-white/40 font-mono mb-6"
          >
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Services</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            <WordReveal delay={0.1} stagger={0.09}>
              End-to-End IT
            </WordReveal>
            {' '}
            <WordReveal delay={0.35} stagger={0.09} className="gradient-text">
              Engineering
            </WordReveal>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-6"
          >
            <GradientText colors={['#6C63FF', '#00D9FF', '#FF6B6B', '#6C63FF']} animationSpeed={6} className="text-2xl md:text-3xl font-display font-semibold">
              Services
            </GradientText>
          </motion.div>
          <BlurText
            text="From concept to deployment — we handle every layer of your digital product with precision, expertise, and passion."
            delay={60}
            animateBy="words"
            className="text-white/60 text-xl max-w-3xl mx-auto justify-center"
          />
        </div>
      </section>

      {/* SERVICES GRID — SpotlightCard */}
      <section className="py-24 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <SpotlightCard
                    className="group p-8 h-full"
                    spotlightColor="rgba(108, 99, 255, 0.25)"
                  >
                    <div className="flex items-start gap-5 mb-5">
                      <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center shrink-0">
                        <Icon className="w-7 h-7 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-display font-bold text-white mb-1">{service.title}</h3>
                        <p className="text-brand-secondary text-sm font-mono">{service.short}</p>
                      </div>
                    </div>
                    <p className="text-white/50 text-sm leading-relaxed mb-6">{service.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {service.tech.map(t => (
                        <span key={t} className="px-3 py-1 rounded-full bg-brand-border text-white/60 text-xs font-mono">{t}</span>
                      ))}
                    </div>
                    <Link href="/contact" className="inline-flex items-center gap-2 text-brand-primary text-sm font-medium group-hover:gap-3 transition-all">
                      Get a Quote <ArrowRight className="w-4 h-4" />
                    </Link>
                  </SpotlightCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROCESS — Animated Vertical Timeline */}
      <section className="py-24 px-4 grid-bg overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="text-brand-accent font-mono text-sm tracking-wider uppercase">Process</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">
              How We <span className="gradient-text">Deliver</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
              A proven 7-step engineering process that turns ideas into production-ready products — on time, every time.
            </p>
          </motion.div>

          <div className="relative">
            {/* Vertical line */}
            <motion.div
              className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-primary via-brand-secondary to-brand-accent"
              initial={{ scaleY: 0, originY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, ease: 'easeInOut' }}
              style={{ transformOrigin: 'top' }}
            />

            <div className="space-y-12">
              {processSteps.map((step, i) => {
                const isRight = i % 2 === 0
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: isRight ? -40 : 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-60px' }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    className={`relative flex items-start gap-6 md:gap-0 ${
                      isRight ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Card */}
                    <div className={`w-full md:w-[calc(50%-2.5rem)] ${isRight ? 'md:pr-10' : 'md:pl-10'} pl-16 md:pl-0`}>
                      <div className="group p-6 rounded-2xl glass border border-brand-border hover:border-brand-primary/40 transition-all hover:shadow-[0_0_30px_rgba(108,99,255,0.1)]">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-2.5 py-1 rounded-full text-xs font-mono bg-brand-primary/15 text-brand-primary border border-brand-primary/20">
                            {step.tag}
                          </span>
                          <span className="text-white/30 text-xs font-mono">{step.duration}</span>
                        </div>
                        <h3 className="font-display font-bold text-white text-lg mb-2">{step.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                      </div>
                    </div>

                    {/* Center dot */}
                    <div className="absolute left-8 md:left-1/2 -translate-x-1/2 flex flex-col items-center z-10">
                      <motion.div
                        className="w-10 h-10 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center text-white text-xs font-display font-bold shadow-[0_0_16px_rgba(108,99,255,0.5)]"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 + 0.3, type: 'spring', stiffness: 200 }}
                      >
                        {step.step}
                      </motion.div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* TECH STACK — Categorised */}
      <section className="py-24 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-secondary font-mono text-sm tracking-wider uppercase">Technologies</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">
              Our Tech <span className="gradient-text">Stack</span>
            </h2>
            <p className="text-white/50 mt-4 max-w-xl mx-auto text-sm">
              40+ modern technologies across every layer — from design to deployment.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {techCategories.map((cat, ci) => (
              <motion.div
                key={cat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: ci * 0.1 }}
                className="glass rounded-2xl border border-brand-border p-6 hover:border-white/10 transition-all"
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-2 h-8 rounded-full bg-gradient-to-b ${cat.color}`} />
                  <span className={`font-display font-semibold text-sm ${cat.text}`}>{cat.label}</span>
                </div>
                {/* Tech pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.techs.map((tech, ti) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, scale: 0.85 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: ci * 0.08 + ti * 0.04 }}
                      whileHover={{ scale: 1.08, y: -2 }}
                      className={`px-3 py-1.5 rounded-lg bg-brand-border/60 border ${cat.border} ${cat.text} text-xs font-mono cursor-default transition-all hover:bg-brand-border`}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/15 via-brand-dark to-brand-secondary/10" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-display font-bold text-white mb-6 leading-tight">
            <WordReveal trigger="scroll" delay={0} stagger={0.08} className="text-white">
              Let&apos;s Build Your
            </WordReveal>
            {' '}
            <WordReveal trigger="scroll" delay={0.28} stagger={0.08} className="gradient-text">
              Next Product
            </WordReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-10"
          >
            Get a free consultation with our engineering team and discover how TSS can accelerate your growth.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Magnet magnetStrength={3}>
              <Link href="/contact" className="inline-flex items-center gap-2 px-10 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:opacity-90 transition-all glow-purple text-lg">
                Get a Free Consultation <ArrowRight className="w-5 h-5" />
              </Link>
            </Magnet>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
