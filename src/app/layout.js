import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/navbar'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'KAMIOTORII',
  description: 'App Web para poder ver anime gratis',
}

export default async function RootLayout({ children }) {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()



  return (
    <html lang="ES">
      <body className={inter.className}>
        <Navbar session={session} />
        {children}
      </body>
    </html>
  )
}
