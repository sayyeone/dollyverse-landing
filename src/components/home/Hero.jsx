// src/components/home/Hero.jsx
import { motion } from 'framer-motion'
import Button from '../ui/Button'
import { buildWaUrl } from '../../data/contact'

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-ink"
      aria-label="Hero section"
    >
      {/* Diagonal panel — navy behind ink */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            'linear-gradient(135deg, #2F3552 0%, #2F3552 45%, #121316 45%)',
        }}
      />

      {/* Decorative gradient glow */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo/20 rounded-full blur-3xl z-0 pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-violet/15 rounded-full blur-3xl z-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col gap-6"
          >
            {/* Eyebrow */}
            <span className="inline-flex items-center gap-2 text-violet text-xs font-semibold tracking-[0.15em] uppercase">
              <span className="w-6 h-px bg-violet" />
              KUB Dollyverse — Putat Jaya, Surabaya
            </span>

            {/* Headline */}
            <h1 className="font-heading font-extrabold text-white leading-tight"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}
            >
              Jagonya{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet to-gold">
                Sablon Digital
              </span>{' '}
              Murah di Surabaya
            </h1>

            {/* Sub */}
            <p className="text-white/70 text-lg leading-relaxed max-w-lg">
              Kaos custom satuan, merchandise, dan pelatihan sablon — dari semangat warga Kampung Dolly untuk semua kalangan.
            </p>

            {/* Arrow motif */}
            <div className="flex items-center gap-1 text-gold font-mono font-bold text-sm select-none">
              <span>◀◀◀</span>
              <span className="text-white/30 mx-2">|</span>
              <span>▶▶▶</span>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <a
                id="hero-cta-wa"
                href={buildWaUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo to-violet text-white font-semibold px-7 py-3.5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 text-base"
              >
                Pesan via WhatsApp
              </a>
              <Button variant="secondary" href="/produk" className="border-white/40 text-white hover:bg-white/10 hover:border-white hover:text-white">
                Lihat Produk
              </Button>
            </div>
          </motion.div>

          {/* Mascot side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex items-center justify-center"
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-violet/40 to-indigo/20 blur-2xl scale-110" />
              <img
                src="/mascot.png"
                alt="Maskot Dollyverse — Sura dan Baya"
                className="relative w-72 h-72 md:w-96 md:h-96 object-contain drop-shadow-2xl"
                style={{ filter: 'drop-shadow(0 0 40px rgba(142,124,240,0.4))' }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stat bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 grid grid-cols-3 gap-4 border-t border-white/10 pt-8"
        >
          {[
            { value: '200', unit: 'kaos/hari', label: 'Kapasitas Produksi' },
            { value: '10', unit: 'anggota', label: 'Tim Dollyverse' },
            { value: '2', unit: 'lokasi', label: 'Pusat Produksi' },
          ].map(({ value, unit, label }) => (
            <div key={label} className="text-center md:text-left">
              <div className="font-heading font-extrabold text-white leading-none" style={{ fontSize: 'clamp(1.75rem, 4vw, 3rem)' }}>
                {value}
                <span className="text-violet text-lg ml-1">{unit}</span>
              </div>
              <div className="text-white/40 text-xs mt-1">{label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 animate-bounce">
        <span className="text-white/30 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}
