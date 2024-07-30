import './globals.css'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

export const metadata = {
  title: 'Your Name - Full Stack Web Developer',
  description: 'Personal portfolio of [Your Name], a Full Stack Web Developer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}