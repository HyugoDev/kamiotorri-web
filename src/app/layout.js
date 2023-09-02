import './globals.css'
import { Inter } from 'next/font/google'

import Navbar from './components/navbar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'kamiotorri',
  description: 'App Web para poder ver anime gratis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
