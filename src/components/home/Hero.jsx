// src/components/home/Hero.jsx
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Sparkles, X } from 'lucide-react'
import { Link } from 'react-router-dom'

const categories = [
  { id: '01', title: 'Custom T-Shirt', link: '/produk?cat=kaos' },
  { id: '02', title: 'Merchandise', link: '/produk?cat=merch' },
  { id: '03', title: 'Pelatihan Kreatif', link: '/layanan#pelatihan' },
  { id: '04', title: 'Komunitas', link: '/tentang' },
]

export default function Hero() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-24 md:pt-28 pb-10 overflow-hidden bg-[#FAF9F5] text-ink flex flex-col justify-between"
      aria-label="Hero section"
    >
      {/* Background Decorative Blur Gradients */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[85vw] h-[550px] bg-gradient-to-b from-lime/25 via-violet/15 to-transparent blur-3xl pointer-events-none z-0 rounded-full" />
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-gold/15 blur-3xl pointer-events-none z-0 rounded-full" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 w-full flex-1 flex flex-col justify-between">
        
        {/* HUGE BACKGROUND DISPLAY TYPOGRAPHY: KUB DOLLYVERSE. */}
        <div className="relative w-full text-center lg:text-left select-none pointer-events-none pt-2 md:pt-4">
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display font-black text-ink tracking-tighter text-[11.5vw] lg:text-[10.5vw] leading-[0.82] uppercase"
          >
            KUB DOLLYVERSE<span className="text-lime">.</span>
          </motion.h1>

          {/* Underline swoosh stroke */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="origin-left mt-2 lg:ml-20 w-48 md:w-88 h-3.5 md:h-4 bg-lime rounded-full shadow-sm"
          />
        </div>

        {/* MAIN FULL-STAGE LAYOUT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center flex-1 my-4 md:my-0">
          
          {/* LEFT CONTENT COLUMN (Cols 4) */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-6 z-20"
          >
            <div className="space-y-3">
              <h2 className="font-heading font-extrabold text-2xl md:text-3xl lg:text-[38px] text-ink leading-tight">
                Dari Kampung Dolly,<br />
                <span className="text-navy">untuk Cerita Baru.</span>
              </h2>
              <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-md">
                Custom t-shirt, merchandise, dan pelatihan kreatif untuk mendukung ekonomi warga RW 12 Putat Jaya, Surabaya.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                to="/produk"
                className="inline-flex items-center gap-2 bg-lime hover:bg-[#c5f028] text-ink font-heading font-extrabold text-sm md:text-base px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 transition-all duration-200"
              >
                <span>Lihat Produk</span>
                <ArrowRight size={18} />
              </Link>

              <button
                type="button"
                onClick={() => setIsVideoOpen(true)}
                className="inline-flex items-center gap-3 group text-ink hover:text-indigo font-bold text-sm md:text-base py-2 px-3 rounded-full transition-all"
              >
                <div className="w-11 h-11 rounded-full border-2 border-ink flex items-center justify-center bg-white/70 group-hover:bg-ink group-hover:text-white transition-all shadow-sm">
                  <Play size={16} className="ml-0.5 fill-current" />
                </div>
                <span>Video Profil</span>
              </button>
            </div>

            {/* Bottom Left Card Overlay (Mural Photo + 2K+ Avatars Badge) */}
            <div className="mt-2 p-3 bg-white/90 backdrop-blur-md rounded-2xl border border-gray-200/80 shadow-lg flex items-center gap-4 max-w-sm">
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

          {/* GIANT CENTER STAGE: BOLD T-SHIRT SHOWCASE (Cols 5) */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center min-h-[400px] md:min-h-[500px] my-2 lg:my-0">
            
            {/* Background Landmark Image (Kota Lama / Surabaya) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-52 md:w-72 h-72 md:h-96 rounded-3xl overflow-hidden opacity-30 grayscale hover:grayscale-0 transition-all duration-500 z-0 pointer-events-none">
              <img src="/kotalama.png" alt="Landmark Kota Lama" className="w-full h-full object-cover" />
            </div>

            {/* Glowing 3D Liquid Orbit Rings */}
            <div className="absolute w-80 h-80 md:w-[460px] md:h-[460px] rounded-full border-4 border-lime/50 animate-pulse pointer-events-none z-0 shadow-[0_0_60px_rgba(212,248,54,0.4)]" />
            <div className="absolute w-96 h-96 md:w-[500px] md:h-[500px] rounded-full border border-gray-300/50 pointer-events-none z-0" />

            {/* Mascot Sura & Baya Peeking Behind Shirt */}
            <motion.img
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: [0, -12, 0], opacity: 1 }}
              transition={{
                y: { repeat: Infinity, duration: 4, ease: 'easeInOut' },
                opacity: { duration: 0.6 }
              }}
              src="/mascot.png"
              alt="Maskot Dollyverse"
              className="absolute right-2 md:-right-8 top-2 w-32 md:w-52 h-auto z-10 drop-shadow-2xl pointer-events-none"
            />

            {/* GIANT T-SHIRT MOCKUP (mockup-2.png) */}
            <div className="relative z-20 w-full flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.85 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                className="relative group"
              >
                <img
                  src="/mockup-2.png"
                  alt="Custom T-Shirt KUB Dollyverse"
                  className="w-80 sm:w-[420px] md:w-[520px] lg:w-[600px] h-auto object-contain drop-shadow-[0_30px_45px_rgba(0,0,0,0.22)] transition-transform duration-300 group-hover:scale-105"
                />
              </motion.div>
            </div>

            {/* Bottom Right Floating Action Orb "Lihat Prosesnya?" */}
            <Link
              to="/layanan"
              className="absolute -bottom-4 right-0 lg:-right-12 z-30 w-28 h-28 md:w-32 md:h-32 rounded-full bg-lime text-ink font-heading font-black text-xs md:text-sm p-4 flex flex-col items-center justify-center text-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 group border-4 border-white"
            >
              <span className="text-lg md:text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform">↗</span>
              <span>Lihat Prosesnya?</span>
            </Link>
          </div>

          {/* RIGHT VERTICAL CATEGORY INDEX MENU (Cols 3) */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
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
