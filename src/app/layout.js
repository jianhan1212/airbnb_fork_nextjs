import './globals.css'
import { Inter } from 'next/font/google'
import {Providers} from "./providers";


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '旅遊訂房網站',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='lidht'>
      <body className={inter.className}>
        {/* <div className="container"> */}
        <Providers>

          {children}
        </Providers>
        {/* </div> */}
      </body>
    </html>
  )
}


