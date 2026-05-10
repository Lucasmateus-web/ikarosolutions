import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Karkachi Tecnologia & Automação | Engenharia Elétrica e Automação',
  description: 'Soluções em automação residencial, industrial e IoT. Engenharia elétrica de alta performance com inovação e confiabilidade. Jaboatão dos Guararapes, PE.',
  keywords: ['automação residencial', 'automação industrial', 'engenharia elétrica', 'IoT', 'Pernambuco', 'Suape'],
  authors: [{ name: 'Ikaro Karkachi' }],
  creator: 'dev.mateus',
  icons: {
    icon: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://karkachi.com.br',
    siteName: 'Karkachi Tecnologia & Automação',
    title: 'Karkachi Tecnologia & Automação',
    description: 'Soluções em automação residencial, industrial e IoT. Engenharia elétrica de alta performance.',
    images: [
      {
        url: '/logo.jpeg',
        width: 800,
        height: 800,
        alt: 'Karkachi Tecnologia & Automação',
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: '#050505',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="dark">
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
