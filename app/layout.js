import { Roboto, Inter } from "next/font/google"
import './globals.css'
import Navbar from '@/components/Navbar'

const roboto = Roboto({ subsets: ['latin'], weight: ["300", "400", "700"] })

export const metadata = {
  title: 'Melisa Labra',
  description: 'Melisa Labra Portfolio',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased`}>
        <Navbar />
             
        {children}
      </body>
    </html>
  )
}
