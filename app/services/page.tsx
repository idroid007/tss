import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Services | Technogig Software Solution',
  description: 'End-to-End IT Engineering Services — Web Development, Mobile Apps, MLM Software, E-Commerce, CRM/HRM, AI & ML, DevOps, and Custom Software.',
  openGraph: { title: 'IT Services | Technogig Software Solution', description: 'From concept to deployment — we handle every layer of your digital product.' },
}
import ServicesPage from '@/components/sections/ServicesPage'
export default function Services() { return <ServicesPage /> }
