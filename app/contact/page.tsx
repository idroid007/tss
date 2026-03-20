import type { Metadata } from 'next'
export const metadata: Metadata = {
  title: 'Contact Us | Technogig Software Solution',
  description: 'Get in touch with Technogig Software Solution. Start your project, request a free quote, or just say hello.',
  openGraph: { title: 'Contact Technogig Software Solution', description: 'Have a project in mind? Let\'s talk.' },
}
import ContactPage from '@/components/sections/ContactPage'
export default function Contact() { return <ContactPage /> }
