// src/components/home/Hero.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, CheckCircle2, Sparkles, X, ChevronRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const heroProducts = [
  {
    id: 'mockup-2',
    name: 'Standard White Mockup',
    subtitle: '100% Cotton Combed 30s',
    image: '/mockup-2.png',
    tag: '/01',
  },
  {
    id: 'sura-baya',
    name: 'Special Surabaya Edition',
    subtitle: 'Maskot Sura & Baya Authentic',
    image: '/sura-baya.png',
    tag: '/02',
  },
  {
    id: 'kotalama',
    name: 'Kota Lama Vintage Tee',
    subtitle: 'Desain Ikonik Cagar Budaya',
    image: '/kotalama.png',
    tag: '/03',
  },
]

const categories = [
  { id: '01', title: 'Custom T-Shirt', link: '/produk?cat=kaos' },
  { id: '02', title: 'Merchandise', link: '/produk?cat=merch' },
  { id: '03', title: 'Pelatihan Kreatif', link: '/layanan#pelatihan' },
  { id: '04', title: 'Komunitas', link: '/tentang' },
]

export default function Hero() {
  const [activeProductIndex, setActiveProductIndex] = useState(0)
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  const activeProduct = heroProducts[activeProductIndex]

  return (
    <section
      id="hero"
      className="relative min-h-[95vh] pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#FAF9F5] text-ink flex flex-col justify-between"
      aria-label="Hero section"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[80vw] h-[500px] bg-gradient-to-b from-lime/20 via-violet/10 to-transparent blur-3xl pointer-events-none z-0 rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/15 blur-3xl pointer-events-none z-0 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex-1 flex flex-col justify-center">
        {/* HUGE BACKGROUND TYPOGRAPHY: KUB DOLLYVERSE. */}
        <div className="relative w-full text-center lg:text-left select-none pointer-events-none mb-4 md:-mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-heading font-black text-ink tracking-tighter text-[12vw] lg:text-[10.5vw] leading-[0.85] uppercase"
          >
            KUB DOLLYVERSE<span className="text-lime">.</span>
          </motion.h1>

          {/* Underline swoosh stroke */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="origin-left mt-1 lg:ml-20 w-48 md:w-80 h-3 md:h-4 bg-lime rounded-full shadow-sm"
          />
        </div>

        {/* MAIN GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mt-4 md:mt-0">
          
          {/* LEFT CONTENT COLUMN (Cols 4) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6 z-20"
          >
            <div className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-4xl text-ink leading-tight">
                Dari Kampung Dolly,<br />
                <span className="text-navy">untuk Cerita Baru.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                Custom t-shirt, merchandise, dan pelatihan kreatif untuk mendukung ekonomi warga RW 12 Putat Jaya, Surabaya.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <Link
                to="/produk"
                className="inline-flex items-center gap-2 bg-lime hover:bg-[#c4f322] text-ink font-heading font-extrabold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Lihat Produk</span>
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 group text-ink hover:text-indigo font-bold text-sm md:text-base py-2 px-3 rounded-full transition-all"
              >
                <div className="w-11 h-11 rounded-full border-2 border-ink flex items-center justify-center bg-white/60 group-hover:bg-ink group-hover:text-white transition-all shadow-sm">
                  <Play size={16} className="ml-0.5 fill-current" />
                </div>
                <span>Video Profil</span>
              </button>
            </div>

            {/* Bottom Left Card Overlay (Street Art Mural Photo + Avatars Badge) */}
            <div className="mt-4 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-lg flex items-center gap-4 max-w-sm">
              <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 border border-gray-200">
                <img
                  src="/sura-baya.png"
                  alt="Kampung Dolly Mural"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="flex -space-x-2 overflow-hidden mb-1">
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80" alt="Customer avatar" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80" alt="Customer avatar" />
                  <img className="inline-block h-6 w-6 rounded-full ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80" alt="Customer avatar" />
                </div>
                <p className="font-heading font-bold text-xs text-ink">2K+ Pelanggan</p>
                <p className="text-[11px] text-gray-500">& anggota komunitas</p>
              </div>
            </div>
          </motion.div>

          {/* CENTER FEATURED PRODUCT STAGE (Cols 5) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[360px] md:min-h-[440px] my-4 lg:my-0">
            
            {/* Background Landmark Image (Kota Lama / Surabaya) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-48 md:w-64 h-64 md:h-80 rounded-3xl overflow-hidden opacity-25 grayscale hover:grayscale-0 transition-all duration-500 z-0 pointer-events-none">
              <img src="/kotalama.png" alt="Landmark Kota Lama" className="w-full h-full object-cover" />
            </div>

            {/* Glowing Liquid Orbit Ring Effect */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 rounded-full border-4 border-lime/40 animate-pulse pointer-events-none z-0 shadow-[0_0_50px_rgba(212,248,54,0.3)]" />
            <div className="absolute w-80 h-80 md:w-[420px] md:h-[420px] rounded-full border border-gray-300/40 pointer-events-none z-0" />

            {/* Mascot Floating Right Behind Shirt */}
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -10, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                opacity: { duration: 0.6 }
              }}
              src="/mascot.png"
              alt="Maskot Dollyverse"
              className="absolute right-2 md:-right-6 top-4 w-28 md:w-44 h-auto z-10 drop-shadow-xl pointer-events-none"
            />

            {/* MAIN SHIRT DISPLAY (Interactive Switcher) */}
            <div className="relative z-20 w-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeProduct.id}
                  initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                  animate={{ opacity: 1, scale: 1, rotate: 0 }}
                  exit={{ opacity: 0, scale: 0.8, rotate: 5 }}
                  transition={{ duration: 0.4 }}
                  className="relative group"
                >
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    className="w-72 md:w-96 lg:w-[420px] h-auto object-contain drop-shadow-[0_25px_35px_rgba(0,0,0,0.18)] transition-transform duration-300 group-hover:scale-105"
                  />
                  
                  {/* Floating badge label on shirt */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-ink/90 text-white backdrop-blur-md px-4 py-1.5 rounded-full text-xs font-bold shadow-xl border border-white/20 whitespace-nowrap flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-lime animate-ping" />
                    <span>{activeProduct.name}</span>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Product Switcher Thumbnails (Uses ALL 3 IMAGES: mockup-2, sura-baya, kotalama) */}
            <div className="relative z-30 flex items-center justify-center gap-3 mt-6 bg-white/80 backdrop-blur-md p-2 rounded-full border border-gray-200 shadow-md">
              {heroProducts.map((prod, index) => (
                <button
                  key={prod.id}
                  type="button"
                  onClick={() => setActiveProductIndex(index)}
                  className={`relative px-3 py-1.5 rounded-full text-xs font-bold transition-all duration-200 flex items-center gap-2 ${
                    activeProductIndex === index
                      ? 'bg-ink text-white shadow-md scale-105'
                      : 'text-gray-600 hover:text-ink hover:bg-gray-100'
                  }`}
                >
                  <span className="w-5 h-5 rounded-full overflow-hidden border border-gray-300 shrink-0 inline-block">
                    <img src={prod.image} alt={prod.name} className="w-full h-full object-cover" />
                  </span>
                  <span>{prod.id === 'mockup-2' ? 'White Tee' : prod.id === 'sura-baya' ? 'Sura & Baya' : 'Kota Lama'}</span>
                </button>
              ))}
            </div>

            {/* Bottom Right Floating Lime Action Orb "Lihat Prosesnya?" */}
            <Link
              to="/layanan"
              className="absolute -bottom-6 right-2 lg:-right-10 z-30 w-24 h-24 md:w-28 md:h-28 rounded-full bg-lime text-ink font-heading font-black text-xs md:text-sm p-4 flex flex-col items-center justify-center text-center shadow-xl hover:scale-110 active:scale-95 transition-all duration-300 group border-4 border-white"
            >
              <span className="text-base md:text-lg group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              <span>Lihat Prosesnya?</span>
            </Link>
          </div>

          {/* RIGHT VERTICAL INDEX MENU (Cols 3) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 hidden lg:flex flex-col justify-center items-end gap-6 z-20 pl-4 border-l border-gray-200/60"
          >
            <div className="w-full space-y-4">
              <p className="text-xs font-bold text-gray-400 uppercase tracking-widest text-right mb-2">
                Kategori Utama
              </p>
              {categories.map((cat) => (
                <Link
                  key={cat.id}
                  to={cat.link}
                  className="group flex items-center justify-end gap-3 text-right text-gray-600 hover:text-ink transition-colors py-1"
                >
                  <span className="font-heading font-bold text-sm md:text-base group-hover:translate-x-[-4px] transition-transform">
                    {cat.title}
                  </span>
                  <span className="font-mono text-xs text-gray-400 group-hover:text-lime font-bold">
                    /{cat.id}
                  </span>
                </Link>
              ))}
            </div>
          </motion.div>

        </div>
      </div>

      {/* VIDEO MODAL LIGHTBOX */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-ink/80 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsVideoOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-ink border border-white/10 rounded-3xl overflow-hidden max-w-3xl w-full p-6 relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsVideoOpen(false)}
                className="absolute top-4 right-4 text-white/70 hover:text-white p-2 rounded-full bg-white/10"
              >
                <X size={20} />
              </button>
              <h3 className="font-heading font-bold text-xl text-white mb-4 flex items-center gap-2">
                <Sparkles className="text-lime" size={20} />
                Profil KUB Dollyverse Surabaya
              </h3>
              <div className="aspect-video w-full rounded-2xl overflow-hidden bg-black flex items-center justify-center border border-white/10">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
                  title="Video Profil Dollyverse"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              <p className="text-white/60 text-sm mt-4 text-center">
                Melihat langsung semangat pemuda RW 12 Putat Jaya merintis usaha sablon digital bernilai sosial.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
