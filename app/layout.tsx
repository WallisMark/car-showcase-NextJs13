import { Footer, NavBar } from '@/components'
import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Cars',
  description: 'Discover the best cars in the world',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='realative'>
        <NavBar/>
        {children}
        <Footer/>
        </body>
    </html>
  )
}
