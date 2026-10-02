// src/components/home/Hero.jsx
import { motion } from 'framer-motion'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Link } from 'react-router-dom'
import { buildWaUrl } from '../../data/contact'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-[85vh] pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-[#FAF9F5] flex flex-col justify-center"
      aria-label="Hero section"
    >
      {/* Soft Ambient Background Glow (60/30/10 Rule: subtle 10% gold glow) */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-10 left-1/3 w-80 h-80 bg-indigo/5 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN (Cols 7) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 text-indigo text-xs font-semibold tracking-[0.12em] uppercase">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <span>Putat Jaya, Surabaya</span>
            </div>

            {/* Primary H1 Headline — Bricolage Grotesque 800, line-height 1.1, tracking -0.01em */}
            <h1
              className="font-heading font-extrabold text-ink text-4xl sm:text-5xl lg:text-[52px] leading-[1.1] tracking-[-0.01em] [text-wrap:balance]"
            >
              Dari Kampung Dolly,<br />
              <span className="text-indigo">untuk Cerita Baru.</span>
            </h1>

            {/* Subtext — Plus Jakarta Sans 400, line-height 1.65, tracking 0 */}
            <p className="font-sans font-normal text-gray-600 text-base md:text-lg leading-[1.65] max-w-xl">
              Custom t-shirt, merchandise, dan pelatihan kreatif untuk mendukung ekonomi warga RW 12 Putat Jaya, Surabaya.
            </p>

            {/* Action Buttons — Primary + Secondary */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={buildWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-ink hover:bg-navy text-white font-sans font-semibold text-sm md:text-base px-7 py-3.5 rounded-full shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <MessageCircle size={18} className="text-gold" />
                <span>Pesan via WhatsApp</span>
              </a>

              <Link
                to="/produk"
                className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-ink font-sans font-semibold text-sm md:text-base px-6 py-3.5 rounded-full border border-gray-300 shadow-2xs hover:border-gray-400 transition-all duration-200"
              >
                <span>Lihat Produk</span>
                <ArrowRight size={16} />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT VISUAL SHOWCASE (Cols 5) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 relative flex items-center justify-center min-h-[340px] md:min-h-[400px]"
          >
            {/* Subtle background circle glow */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full bg-white shadow-xl border border-gray-100 pointer-events-none z-0" />
            <div className="absolute w-80 h-80 md:w-[410px] md:h-[410px] rounded-full border border-gray-200/60 pointer-events-none z-0" />

            {/* Mascot Sura & Baya (Clean Cutout, no checkerboard box) */}
            <motion.img
              initial={{ y: 15 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              src="/mascot.png"
              alt="Maskot Sura & Baya Dollyverse"
              className="absolute right-0 top-0 w-28 md:w-40 h-auto z-10 drop-shadow-md pointer-events-none"
            />

            {/* Main T-Shirt Mockup */}
            <div className="relative z-20">
              <img
                src="/mockup-2.png"
                alt="Kaos Custom KUB Dollyverse"
                className="w-72 md:w-88 lg:w-[380px] h-auto object-contain drop-shadow-2xl transition-transform duration-300 hover:scale-105"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
