'use client'
import dynamic from 'next/dynamic'
import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Star, Code2, Smartphone, Network, ShoppingCart, Users, Cpu } from 'lucide-react'
import CountUp from 'react-countup'
import { useInView } from 'framer-motion'
import { COMPANY, SERVICES, PROJECTS, TESTIMONIALS } from '@/lib/constants'
import WordReveal from '@/components/ui/WordReveal'
import GradientText from '@/components/ui/GradientText'
import BlurText from '@/components/ui/BlurText'
import SpotlightCard from '@/components/ui/SpotlightCard'
import TiltedCard from '@/components/ui/TiltedCard'
import Magnet from '@/components/ui/Magnet'
import LogoLoop from '@/components/ui/LogoLoop'
import {
  SiReact, SiNextdotjs, SiNodedotjs, SiPython, SiFlutter,
  SiDocker, SiMongodb, SiTypescript, SiAngular, SiVuedotjs,
  SiTailwindcss, SiPostgresql, SiRedis, SiFirebase,
  SiKubernetes, SiGraphql, SiTensorflow, SiFigma, SiGo,
} from 'react-icons/si'
import { FaAws } from 'react-icons/fa6'

// Dynamic import Aurora (WebGL — client only)
const Aurora = dynamic(() => import('@/components/ui/Aurora'), { ssr: false })

const techLogos = [
  { icon: <SiReact />,        label: 'React',       color: '#61DAFB' },
  { icon: <SiNextdotjs />,    label: 'Next.js',     color: '#e2e8f0' },
  { icon: <SiNodedotjs />,    label: 'Node.js',     color: '#68A063' },
  { icon: <SiTypescript />,   label: 'TypeScript',  color: '#3178C6' },
  { icon: <SiPython />,       label: 'Python',      color: '#FFD43B' },
  { icon: <SiFlutter />,      label: 'Flutter',     color: '#54C5F8' },
  { icon: <FaAws />,          label: 'AWS',         color: '#FF9900' },
  { icon: <SiDocker />,       label: 'Docker',      color: '#2496ED' },
  { icon: <SiKubernetes />,   label: 'Kubernetes',  color: '#326CE5' },
  { icon: <SiMongodb />,      label: 'MongoDB',     color: '#47A248' },
  { icon: <SiPostgresql />,   label: 'PostgreSQL',  color: '#4169E1' },
  { icon: <SiRedis />,        label: 'Redis',       color: '#DC382D' },
  { icon: <SiFirebase />,     label: 'Firebase',    color: '#FFCA28' },
  { icon: <SiTensorflow />,   label: 'TensorFlow',  color: '#FF6F00' },
  { icon: <SiGraphql />,      label: 'GraphQL',     color: '#E535AB' },
  { icon: <SiGo />,           label: 'Go',          color: '#00ADD8' },
  { icon: <SiVuedotjs />,     label: 'Vue.js',      color: '#42B883' },
  { icon: <SiAngular />,      label: 'Angular',     color: '#DD0031' },
  { icon: <SiTailwindcss />,  label: 'Tailwind',    color: '#38BDF8' },
  { icon: <SiFigma />,        label: 'Figma',       color: '#F24E1E' },
]

function StatCounter({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-display font-bold mb-2">
        <GradientText className="text-4xl md:text-5xl font-display font-bold">
          {inView ? <CountUp end={value} duration={2.5} separator="," suffix={suffix} /> : '0'}
        </GradientText>
      </div>
      <div className="text-white/50 text-sm font-medium">{label}</div>
    </div>
  )
}

const serviceIcons = [Code2, Smartphone, Network, ShoppingCart, Users, Cpu]

const techPills = ['React', 'Node.js', 'AWS', 'Flutter', 'Python', 'AI/ML', 'DevOps', 'Next.js']


export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % TESTIMONIALS.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden pt-[68px]">
        {/* Aurora WebGL background */}
        <div className="absolute inset-0">
          <Aurora
            colorStops={['#6C63FF', '#00D9FF', '#6C63FF']}
            amplitude={1.2}
            blend={0.6}
            speed={0.5}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-brand-dark/60 via-transparent to-brand-dark/90" />

        {/* Floating pills */}
        {techPills.map((pill, i) => (
          <motion.div
            key={pill}
            className="absolute hidden md:block px-3 py-1 rounded-full glass text-xs text-brand-secondary border border-brand-secondary/20 font-mono"
            style={{
              top: `${15 + (i * 10) % 70}%`,
              left: i % 2 === 0 ? `${5 + i * 5}%` : undefined,
              right: i % 2 !== 0 ? `${5 + i * 4}%` : undefined,
            }}
            animate={{ y: [0, -15, 0], opacity: [0.4, 0.8, 0.4] }}
            transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut' }}
          >
            {pill}
          </motion.div>
        ))}

        <div className="relative z-10 text-center max-w-5xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border border-brand-primary/30 text-sm text-brand-primary font-mono mb-8"
          >
            <span className="text-brand-secondary">✦</span> TRUSTED BY 100+ BUSINESSES
          </motion.div>

          {/* Hero headline — WordReveal */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-white mb-6 leading-tight">
            <WordReveal delay={0.15} stagger={0.1} className="text-white">
              Technogig Your
            </WordReveal>
            {' '}
            <WordReveal delay={0.4} stagger={0.1} className="gradient-text">
              Business
            </WordReveal>
          </h1>

          {/* GradientText subtitle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-4"
          >
            <GradientText
              colors={['#6C63FF', '#00D9FF', '#FF6B6B', '#6C63FF']}
              animationSpeed={6}
              className="text-xl md:text-2xl font-display font-semibold"
            >
              Technology + Logic = Growth
            </GradientText>
          </motion.div>

          {/* BlurText body */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-10"
          >
            <BlurText
              text="We build cutting-edge software, apps, and digital experiences that transform businesses globally."
              delay={80}
              animateBy="words"
              direction="bottom"
              className="text-white/60 text-lg justify-center"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnet magnetStrength={3}>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:opacity-90 transition-all glow-purple text-lg"
              >
                Start Your Project <ArrowRight className="w-5 h-5" />
              </Link>
            </Magnet>
            <Magnet magnetStrength={3}>
              <Link
                href="/projects"
                className="flex items-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all text-lg"
              >
                View Our Work
              </Link>
            </Magnet>
          </motion.div>
        </div>

        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-6 h-6 text-white/40" />
        </motion.div>
      </section>

      {/* LOGO LOOP MARQUEE */}
      <section className="py-6 bg-brand-card border-y border-brand-border">
        <LogoLoop items={techLogos} speed={40} direction="left" iconSize="w-10 h-10" pauseOnHover={true} />
      </section>

      {/* ABOUT SNAPSHOT */}
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="grid grid-cols-2 gap-8">
                {COMPANY.stats.map((stat, i) => (
                  <StatCounter key={i} value={stat.value} suffix={stat.suffix} label={stat.label} />
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-6">
                Why Choose{' '}
                <GradientText colors={['#6C63FF', '#00D9FF', '#6C63FF']} className="text-3xl md:text-4xl font-display font-bold">
                  TSS?
                </GradientText>
              </h2>
              <p className="text-white/60 mb-8 leading-relaxed">
                We combine technical excellence with business acumen to deliver software solutions that actually move the needle. Every project is built with precision, passion, and purpose.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { icon: '🚀', title: 'Fast Delivery', desc: 'Agile sprints, on-time launches, zero compromises on quality.' },
                  { icon: '💡', title: 'Innovative Solutions', desc: 'We bring fresh perspectives and cutting-edge tech to every challenge.' },
                  { icon: '🔒', title: 'Secure & Scalable', desc: 'Enterprise-grade architecture built to scale with your growth.' },
                  { icon: '🌍', title: 'Global Clients', desc: 'Serving 85+ clients across India, USA, UK, UAE, and beyond.' },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4 p-4 rounded-xl glass"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-white text-sm">{item.title}</div>
                      <div className="text-white/50 text-sm">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
              <Link href="/about" className="inline-flex items-center gap-2 text-brand-primary font-medium hover:gap-3 transition-all">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SERVICES — SpotlightCard */}
      <section className="py-24 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-mono text-sm tracking-wider uppercase">What We Do</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">
              Our{' '}
              <GradientText colors={['#6C63FF', '#00D9FF', '#6C63FF']} className="text-3xl md:text-5xl font-display font-bold">
                Core Services
              </GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.slice(0, 6).map((service, i) => {
              const Icon = serviceIcons[i]
              return (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <TiltedCard rotateAmplitude={8} scaleOnHover={1.02}>
                    <SpotlightCard
                      className="h-full p-6 cursor-pointer group"
                      spotlightColor="rgba(108, 99, 255, 0.3)"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mb-5">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-lg font-display font-semibold text-white mb-3">{service.title}</h3>
                      <p className="text-white/50 text-sm leading-relaxed mb-4">{service.short}</p>
                      <Link href="/services" className="inline-flex items-center gap-1 text-brand-primary text-sm font-medium group-hover:gap-2 transition-all">
                        Explore <ArrowRight className="w-3 h-3" />
                      </Link>
                    </SpotlightCard>
                  </TiltedCard>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* PROJECTS — TiltedCard */}
      <section className="py-24 px-4 grid-bg overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-secondary font-mono text-sm tracking-wider uppercase">Portfolio</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">
              Featured{' '}
              <GradientText colors={['#00D9FF', '#6C63FF', '#00D9FF']} className="text-3xl md:text-5xl font-display font-bold">
                Projects
              </GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.slice(0, 6).map((project, i) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <TiltedCard rotateAmplitude={6} scaleOnHover={1.02}>
                  <div className="group rounded-2xl overflow-hidden glass border border-brand-border hover:border-brand-secondary/40 transition-all">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 to-transparent" />
                      <span className="absolute top-3 left-3 px-2 py-1 rounded-full bg-brand-primary/80 text-white text-xs font-mono">
                        {project.category}
                      </span>
                    </div>
                    <div className="p-5">
                      <h3 className="font-display font-semibold text-white mb-2">{project.title}</h3>
                      <p className="text-white/50 text-sm mb-4 line-clamp-2">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map(t => (
                          <span key={t} className="px-2 py-1 rounded bg-brand-border text-white/60 text-xs font-mono">{t}</span>
                        ))}
                      </div>
                      <Link href="/projects" className="inline-flex items-center gap-1 text-brand-secondary text-sm font-medium hover:gap-2 transition-all">
                        View Case Study <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                </TiltedCard>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Magnet magnetStrength={2}>
              <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-3 rounded-full border border-brand-primary text-brand-primary font-medium hover:bg-brand-primary hover:text-white transition-all">
                View All Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </Magnet>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-24 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-accent font-mono text-sm tracking-wider uppercase">Our Process</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">
              How We{' '}
              <GradientText colors={['#FF6B6B', '#6C63FF', '#FF6B6B']} className="text-3xl md:text-5xl font-display font-bold">
                Work
              </GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            <div className="hidden md:block absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-brand-primary via-brand-secondary to-brand-primary" />
            {[
              { step: '01', title: 'Discovery & Planning', desc: 'We deep-dive into your requirements, goals, and market to craft a winning strategy and detailed project roadmap.' },
              { step: '02', title: 'Design & Prototype', desc: 'Our designers create pixel-perfect wireframes and interactive prototypes, iterating until every detail is right.' },
              { step: '03', title: 'Development & Testing', desc: 'Agile sprints with continuous testing ensure we deliver a rock-solid, high-performance product every time.' },
              { step: '04', title: 'Launch & Support', desc: 'We deploy with zero-downtime strategies and provide ongoing support, monitoring, and optimization.' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center mx-auto mb-6 glow-purple relative z-10">
                  <span className="text-white font-display font-bold text-lg">{item.step}</span>
                </div>
                <h3 className="font-display font-semibold text-white mb-3">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 px-4 grid-bg">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-brand-primary font-mono text-sm tracking-wider uppercase">Testimonials</span>
            <h2 className="text-3xl md:text-5xl font-display font-bold text-white mt-3">
              What Clients{' '}
              <GradientText colors={['#6C63FF', '#00D9FF', '#6C63FF']} className="text-3xl md:text-5xl font-display font-bold">
                Say
              </GradientText>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.slice(0, 3).map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <SpotlightCard
                  spotlightColor={activeTestimonial === i ? 'rgba(108, 99, 255, 0.35)' : 'rgba(108, 99, 255, 0.15)'}
                  className={`p-6 h-full transition-all ${activeTestimonial === i ? 'border-brand-primary/60 glow-purple' : ''}`}
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(t.rating)].map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 italic">&ldquo;{t.quote}&rdquo;</p>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/40 text-xs">{t.role} · {t.company}</div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-primary/20 via-brand-dark to-purple-900/20" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[120px]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-display font-bold text-white mb-6 leading-tight">
            <WordReveal trigger="scroll" delay={0} stagger={0.08} className="text-white">
              Ready to Build
            </WordReveal>
            {' '}
            <WordReveal trigger="scroll" delay={0.3} stagger={0.08} className="gradient-text">
              Something Great?
            </WordReveal>
          </h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-white/60 text-lg mb-10 max-w-2xl mx-auto"
          >
            Let&apos;s collaborate to turn your vision into a world-class digital product. Our team is ready to start.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Magnet magnetStrength={3}>
              <Link href="/contact" className="px-8 py-4 rounded-full bg-gradient-to-r from-brand-primary to-brand-secondary text-white font-semibold hover:opacity-90 transition-all glow-purple">
                Contact Us
              </Link>
            </Magnet>
            <Magnet magnetStrength={3}>
              <Link href="/services" className="px-8 py-4 rounded-full border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
                View Services
              </Link>
            </Magnet>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
