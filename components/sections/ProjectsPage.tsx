'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { PROJECTS } from '@/lib/constants'
import WordReveal from '@/components/ui/WordReveal'
import GradientText from '@/components/ui/GradientText'
import SpotlightCard from '@/components/ui/SpotlightCard'
import TiltedCard from '@/components/ui/TiltedCard'

const categories = ['All', 'Frontend', 'Full Stack', 'E-Commerce', 'Backend', 'DevOps', 'HRM', 'AI & ML', 'Mobile']

const categoryColors: Record<string, string> = {
  Frontend: 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Full Stack': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
  'E-Commerce': 'bg-green-500/20 text-green-400 border-green-500/30',
  Backend: 'bg-orange-500/20 text-orange-400 border-orange-500/30',
  DevOps: 'bg-red-500/20 text-red-400 border-red-500/30',
  HRM: 'bg-pink-500/20 text-pink-400 border-pink-500/30',
  'AI & ML': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  Mobile: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
}

export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === activeCategory)

  return (
    <div className="min-h-screen pt-[68px]">
      {/* HERO */}
      <section className="relative py-32 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark grid-bg" />
        <div className="absolute top-10 right-1/3 w-80 h-80 bg-brand-secondary/10 rounded-full blur-[100px] animate-float" />
        <div className="absolute bottom-10 left-1/3 w-64 h-64 bg-brand-primary/15 rounded-full blur-[80px] animate-float-delay" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-sm text-white/40 font-mono mb-4"
          >
            <Link href="/" className="hover:text-brand-primary transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white/70">Projects</span>
          </motion.div>
          <h1 className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight">
            <WordReveal delay={0.1} stagger={0.1} className="text-white">
              Our Work
            </WordReveal>
            {' '}
            <WordReveal delay={0.32} stagger={0.1} className="gradient-text">
              Speaks
            </WordReveal>
          </h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <GradientText colors={['#00D9FF', '#6C63FF', '#FF6B6B', '#00D9FF']} animationSpeed={7} className="text-white/60 text-xl max-w-2xl mx-auto">
              20+ projects across industries — each one a story of challenge, craft, and impact.
            </GradientText>
          </motion.div>
        </div>
      </section>

      {/* FILTER TABS */}
      <section className="px-4 pb-8 bg-brand-card sticky top-16 z-40 border-b border-brand-border">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-2 overflow-x-auto py-4">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                  activeCategory === cat
                    ? 'bg-brand-primary text-white glow-purple'
                    : 'text-white/50 hover:text-white border border-brand-border hover:border-white/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECT GRID */}
      <section className="py-16 px-4 bg-brand-card">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filtered.map((project, i) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <TiltedCard rotateAmplitude={6} scaleOnHover={1.02}>
                    <SpotlightCard
                      className="group overflow-hidden"
                      spotlightColor="rgba(0, 217, 255, 0.2)"
                    >
                      <div className="relative h-52 overflow-hidden rounded-t-2xl">
                        <img
                          src={project.image}
                          alt={project.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-transparent to-transparent" />
                        <span className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-mono border ${categoryColors[project.category] || 'bg-white/10 text-white/60 border-white/20'}`}>
                          {project.category}
                        </span>
                      </div>
                      <div className="p-6">
                        <h3 className="font-display font-bold text-white text-lg mb-2">{project.title}</h3>
                        <p className="text-white/50 text-sm leading-relaxed line-clamp-2">{project.description}</p>
                      </div>
                    </SpotlightCard>
                  </TiltedCard>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </div>
  )
}
