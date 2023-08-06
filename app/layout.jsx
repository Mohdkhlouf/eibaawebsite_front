import {Tajawal} from 'next/font/google'
const tajawal=Tajawal({
  weight:['400','700'],
  subsets:['arabic']
});

import { Footer } from './components/Footer'
import { Header } from './components/Header'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'
import './globals.css'
import { Inter } from 'next/font/google'
import { Header2 } from './components/Header2';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Eibaa Website',
  description: 'إباء أبو طه',
}

export default function RootLayout({ children }) {

  return (
    <html lang="ar">

      <body dir="rtl" className={tajawal.className}>
          <Header2 />
          
          
          {children}
         
          <Footer />
        


      

      




          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>

          

        </body>

    </html>
  )
}
