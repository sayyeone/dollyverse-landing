// src/App.jsx
import { lazy, Suspense } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import FloatingWhatsApp from './components/layout/FloatingWhatsApp'
import { useLocation } from 'react-router-dom'

const Home = lazy(() => import('./pages/Home'))
const About = lazy(() => import('./pages/About'))
const Products = lazy(() => import('./pages/Products'))
const Services = lazy(() => import('./pages/Services'))
const Contact = lazy(() => import('./pages/Contact'))

function AppRoutes() {
  const location = useLocation()
  const isContact = location.pathname === '/kontak'

  return (
    <>
      <Navbar />
      <Suspense
        fallback={
          <div className="min-h-screen bg-ink flex items-center justify-center">
            <div className="w-10 h-10 border-4 border-violet/20 border-t-violet rounded-full animate-spin" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tentang" element={<About />} />
          <Route path="/produk" element={<Products />} />
          <Route path="/layanan" element={<Services />} />
          <Route path="/kontak" element={<Contact />} />
        </Routes>
      </Suspense>
      <Footer />
      {!isContact && <FloatingWhatsApp />}
    </>
  )
}

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </HelmetProvider>
  )
}
