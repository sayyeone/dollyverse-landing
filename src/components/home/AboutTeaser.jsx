// src/components/home/AboutTeaser.jsx
import { motion } from 'framer-motion'
import StatCounter from '../shared/StatCounter'
import { Sparkles, Award, ShieldCheck, ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const stats = [
  { value: 200, suffix: '+', unit: 'kaos / hari', label: 'Kapasitas produksi sablon digital harian' },
  { value: 10, suffix: '', unit: 'anggota tim', label: 'Pemuda & warga aktif RW 12 Putat Jaya' },
  { value: 2, suffix: '', unit: 'pusat produksi', label: 'Workshop terpadu di Surabaya' },
]

export default function AboutTeaser() {
  return (
    <section
      id="tentang-singkat"
      className="relative py-20 md:py-32 bg-[#FAF9F5] border-t border-gray-200/60 overflow-hidden"
    >
      {/* Background accents */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
        
        {/* Main Grid */}
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Visual Composition (Photo Cards + Gold Badge) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Main Card */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 bg-white group">
                <img
                  src="/sura-baya.png"
                  alt="Aktivitas Pemuda KUB Dollyverse"
                  className="w-full h-80 md:h-96 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                  <div className="inline-flex items-center gap-2 bg-gold text-ink text-xs font-heading font-black px-3 py-1 rounded-full w-max mb-2">
                    <Sparkles size={14} />
                    <span>Dollyverse Empowering</span>
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl text-white leading-tight">
                    Karya Warga Putat Jaya
                  </h3>
                  <p className="text-white/80 text-xs md:text-sm mt-1">
                    Mengubah stereotype kawasan lama menjadi pusat kreativitas sablon digital & merchandise.
                  </p>
                </div>
              </div>

              {/* Floating Stat Pill Badge */}
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="absolute -bottom-6 -right-2 md:-right-6 bg-white p-4 rounded-2xl border border-gray-200 shadow-xl flex items-center gap-3 max-w-xs"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/20 border border-gold text-ink flex items-center justify-center shrink-0">
                  <Award size={24} className="text-ink" />
                </div>
                <div>
                  <p className="font-heading font-extrabold text-ink text-sm">Kualitas Terjamin</p>
                  <p className="text-xs text-gray-500">Hasil sablon rapi, presisi & tahan cuci</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Text & Stats Column */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 text-indigo font-mono text-xs font-bold uppercase tracking-widest bg-lilac/70 px-3 py-1 rounded-full w-max">
                <ShieldCheck size={14} />
                Cerita KUB Dollyverse
              </span>

              <h2 className="font-heading font-black text-3xl md:text-4xl lg:text-5xl text-ink leading-tight">
                Membangun Kemandirian Ekonomi dari <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo via-violet to-ink">Kampung Dolly</span>
              </h2>

              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Dollyverse adalah kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya. Kami melayani pembuatan kaos custom satuan, sablon komunitas, merchandise acara, dan pelatihan keterampilan sablon digital secara berkala.
              </p>
            </div>

            {/* Metric Cards */}
            <div className="grid grid-cols-3 gap-3 md:gap-4">
              {stats.map(({ value, suffix, unit, label }) => (
                <div
                  key={label}
                  className="flex flex-col p-4 md:p-5 rounded-2xl bg-white border border-gray-200 shadow-xs hover:shadow-md hover:border-gold transition-all"
                >
                  <div className="font-heading font-black text-ink text-2xl md:text-4xl leading-none">
                    <StatCounter value={value} suffix={suffix} />
                  </div>
                  <div className="text-indigo font-extrabold text-xs md:text-sm mt-1">{unit}</div>
                  <div className="text-gray-500 text-[11px] md:text-xs mt-1 leading-tight">{label}</div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex items-center gap-4 pt-2">
              <Link
                to="/tentang"
                className="inline-flex items-center gap-2 bg-ink hover:bg-navy text-white font-heading font-bold text-sm md:text-base px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all"
              >
                <span>Pelajari Kisah Selengkapnya</span>
                <ArrowUpRight size={18} />
              </Link>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
