import { VercelToolbar } from '@vercel/toolbar/next'
import type { Metadata } from 'next'
import { Toaster } from 'sonner'

import './globals.css'
import { ExamplesBanner } from '@/components/banners/examples-banner'
import { PostHogProvider } from './posthog-provider'

export const metadata: Metadata = {
  title: 'PostHog - Flags SDK Example',
  description: 'A Flags SDK ecommerce example using PostHog',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <PostHogProvider>
          <ExamplesBanner />
          {children}
          <Toaster />
        </PostHogProvider>
        <VercelToolbar />
      </body>
    </html>
  )
}
