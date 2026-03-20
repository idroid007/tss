import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'About Technogig | Our Story, Mission & Team',
  description: 'Learn about Technogig Software Solution — our story, mission, vision, and the passionate team building world-class software since day one.',
  openGraph: { title: 'About Technogig Software Solution', description: 'Our story, mission, vision, and the team behind TSS.' },
}

import AboutPage from '@/components/sections/AboutPage'
export default function About() { return <AboutPage /> }
