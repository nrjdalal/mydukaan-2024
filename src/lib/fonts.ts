import { Inter as FontSans } from 'next/font/google'
import localFont from 'next/font/local'

export const fontSans = FontSans({
  subsets: ['latin'],
  variable: '--font-sans',
})

export const fontAlt = localFont({
  src: [
    {
      path: './fonts-gg/Galano Grotesque Extra Light.woff',
      weight: '200',
    },
    {
      path: './fonts-gg/Galano Grotesque Light.woff',
      weight: '300',
    },
    {
      path: './fonts-gg/Galano Grotesque Regular.woff',
      weight: '400',
    },
    {
      path: './fonts-gg/Galano Grotesque Medium.woff',
      weight: '500',
    },
    {
      path: './fonts-gg/Galano Grotesque Semi Bold.woff',
      weight: '600',
    },
    {
      path: './fonts-gg/Galano Grotesque Bold.woff',
      weight: '700',
    },
    {
      path: './fonts-gg/Galano Grotesque Extra Bold.woff',
      weight: '800',
    },
    {
      path: './fonts-gg/Galano Grotesque Black.woff',
      weight: '900',
    },
  ],
  variable: '--font-alt',
})
