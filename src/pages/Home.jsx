// src/pages/Home.jsx
import { Helmet } from 'react-helmet-async'
import Hero from '../components/home/Hero'
import AboutTeaser from '../components/home/AboutTeaser'
import Marquee from '../components/home/Marquee'
import WhyUs from '../components/home/WhyUs'
import FeaturedProducts from '../components/home/FeaturedProducts'
import ServiceCards from '../components/home/ServiceCards'
import GalleryStrip from '../components/home/GalleryStrip'
import ClosingCta from '../components/home/ClosingCta'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dollyverse — Jagonya Sablon Digital Murah di Surabaya</title>
        <meta
          name="description"
          content="KUB Dollyverse menyediakan kaos custom satuan, sablon kelompok, merchandise, dan pelatihan sablon dengan harga terjangkau dari Kampung Dolly, Surabaya."
        />
      </Helmet>

      <main>
        {/* Section 1: Hero */}
        <Hero />
        {/* Section 2: Tentang Singkat */}
        <AboutTeaser />
        {/* Section 3: Marquee */}
        <Marquee />
        {/* Section 4: Kenapa Dollyverse */}
        <WhyUs />
        {/* Section 5: Produk Unggulan */}
        <FeaturedProducts />
        {/* Section 6: Layanan */}
        <ServiceCards />
        {/* Section 7: Galeri + CTA */}
        <GalleryStrip />
        <ClosingCta />
      </main>
    </>
  )
}
