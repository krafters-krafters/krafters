// app/layout.tsx
import './globals.css'
import Navbar from '../components/Navbar'
import BodyWrapper from '../components/BodyWrapper'

export const metadata = {
  title: 'Cinquième',
  description: 'Back office for your e-commerce',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white font-sans">
        <Navbar />
        <BodyWrapper>{children}</BodyWrapper>
      </body>
    </html>
  )
}
