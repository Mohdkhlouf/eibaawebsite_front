import {Tajawal} from 'next/font/google'
const tajawal=Tajawal({
  weight:['400','700'],
  subsets:['arabic']
});

import { Footer } from './components/Footer'
import { Header } from './components/Header'

import './globals.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'



import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eibaa Website',
  description: 'إباء أبو طه',
}

export default function RootLayout({ children }) {

  return (
    <html lang="ar">

      <body dir="rtl" className={tajawal.className}>
        
          <Header/>
          
          {children}
         
          <Footer />
        


      

      




        </body>

    </html>
  )
}
