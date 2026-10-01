// src/components/home/AboutTeaser.jsx
import { motion } from 'framer-motion'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'
import StatCounter from '../shared/StatCounter'

const stats = [
  { value: 200, suffix: '', unit: 'kaos/hari', label: 'Kapasitas produksi harian' },
  { value: 10, suffix: '', unit: 'anggota', label: 'Pemuda KUB Dollyverse' },
  { value: 2, suffix: '', unit: 'lokasi', label: 'Pusat produksi aktif' },
]

export default function AboutTeaser() {
  return (
    <section id="tentang-singkat" className="py-20 md:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            <SectionHeading
              eyebrow="Cerita Kami"
              title="Dari Kampung Dolly untuk Indonesia"
              subtitle="Dollyverse adalah kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya. Kami melayani kaos custom satuan, sablon kelompok, merchandise, dan pelatihan sablon — dengan harga terjangkau dan desain otentik."
            />
            <Button variant="text" href="/tentang">
              Baca Cerita Kami
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="grid grid-cols-3 gap-4 lg:gap-6"
          >
            {stats.map(({ value, suffix, unit, label }) => (
              <div
                key={label}
                className="flex flex-col items-center text-center p-5 rounded-2xl bg-lilac/50 border border-lilac"
              >
                <div className="font-heading font-extrabold text-navy text-3xl md:text-4xl leading-none">
                  <StatCounter value={value} suffix={suffix} />
                </div>
                <div className="text-indigo font-bold text-sm mt-0.5">{unit}</div>
                <div className="text-gray-400 text-xs mt-1 leading-snug">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
