/* eslint-disable react/react-in-jsx-scope */
import type { Metadata } from 'next'
import { Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from './components/Header'
import { Suspense } from 'react'
import Loading from './loading'
import Footer from './components/Footer'

const notoSansJP = Noto_Sans_JP({ weight: '400', subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Google Sample.com',
  description: 'Google Sample!!!'
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={notoSansJP.className}>{children}
        <Header/>
        <Suspense fallback={<Loading />}>{children}</Suspense>
        <Footer/>
      </body>
    </html>
  )
}
