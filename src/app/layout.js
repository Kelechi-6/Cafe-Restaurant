// import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata = {
  title: 'Brew & Bloom | Specialty Coffee in Port Harcourt',
  description: 'Specialty coffee, freshly baked treats, and slow mornings at Brew & Bloom in Port Harcourt.',
  openGraph: {
    title: 'Brew & Bloom | Your Daily Ritual, Brewed Beautifully.',
    description: 'A warm place for good coffee, fresh food, and better moments.',
    type: 'website',
  },
}

export const viewport = { colorScheme: 'light', themeColor: '#2d211b' }

export default function RootLayout({ children }) {
  return <html lang="en"><body>{children}{process.env.NODE_ENV === 'production' && <Analytics />}</body></html>
}
