import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Projects | Technogig Software Solution Portfolio',
  description: 'Explore 12+ projects by Technogig — from AI/ML and mobile apps to e-commerce platforms and enterprise software.',
  openGraph: { title: 'Our Work | Technogig Software Solution', description: 'Browse our portfolio of cutting-edge digital products.' },
}
import ProjectsPage from '@/components/sections/ProjectsPage'
export default function Projects() { return <ProjectsPage /> }
