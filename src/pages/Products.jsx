// src/pages/Products.jsx
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import SectionHeading from '../components/ui/SectionHeading'
import Badge from '../components/ui/Badge'
import { products } from '../data/products'
import { buildWaUrl } from '../data/contact'

function formatRupiah(n) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(n)
}

const productImages = {
  'kaos-custom': '/product-kaos.png',
  mug: '/product-mug.png',
  'tote-bag': '/product-totebag.png',
  tumbler: '/product-tumbler.png',
  lanyard: '/product-kaos.png',
  topi: '/product-kaos.png',
}

export default function Products() {
  return (
    <>
      <Helmet>
        <title>Produk — Dollyverse</title>
        <meta
          name="description"
          content="Temukan semua produk custom Dollyverse: kaos, mug, tote bag, tumbler, lanyard, dan topi dengan harga terjangkau dan kualitas terjamin."
        />
      </Helmet>

      {/* Page header */}
      <div className="pt-24 pb-16 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo/20 to-violet/10" />
        <div className="relative max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <SectionHeading
              eyebrow="Produk Kami"
              title="Custom Sesukamu, Mulai 1 Pcs"
              subtitle="Pilih produk, chat WhatsApp, dan kami siap bantu wujudkan desainmu."
              light
            />
          </motion.div>
        </div>
      </div>

      <main className="bg-white py-20 md:py-24">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
            {products.map((product, i) => (
              <motion.article
                key={product.id}
                initial={{ opacity: 0, y: 28 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.07 }}
                className="group bg-white rounded-2xl overflow-hidden border border-lilac/60 shadow-sm hover:-translate-y-1.5 hover:shadow-xl transition-all duration-300 flex flex-col"
              >
                {/* Image */}
                <div className="relative aspect-square overflow-hidden bg-lilac/40">
                  <img
                    src={productImages[product.id] || '/product-kaos.png'}
                    alt={product.imageAlt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {product.badge && (
                    <div className="absolute top-3 left-3">
                      <Badge>{product.badge}</Badge>
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="p-4 md:p-5 flex flex-col gap-2 flex-1">
                  <span className="text-xs font-semibold text-indigo uppercase tracking-widest">
                    {product.category}
                  </span>
                  <h2 className="font-heading font-bold text-navy text-lg leading-snug">
                    {product.name}
                  </h2>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {product.description}
                  </p>
                  <div className="mt-2">
                    <div className="text-gray-400 text-xs">{product.priceLabel}</div>
                    <div className="font-heading font-extrabold text-indigo text-xl">
                      {formatRupiah(product.price)}
                    </div>
                  </div>
                </div>

                {/* CTA */}
                <div className="px-4 md:px-5 pb-4 md:pb-5">
                  <a
                    href={buildWaUrl(product.waText)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo to-violet text-white text-sm font-semibold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
                  >
                    Tanya via WhatsApp
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>
    </>
  )
}
