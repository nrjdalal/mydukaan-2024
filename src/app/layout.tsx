import './globals.css'
import { fontAlt, fontSans } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'MyDukaan | @nrjdalal',
  description: 'Assignment for Mydukaan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          'min-h-dvh font-sans antialiased',
          fontSans.variable,
          fontAlt.variable,
        )}
      >
        {children}
      </body>
    </html>
  )
}
