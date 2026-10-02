// src/components/layout/Navbar.jsx
import { useState, useEffect } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { Menu, X, Search, ShoppingBag, ArrowRight, ThumbsUp } from 'lucide-react'
import { useScrollPosition } from '../../hooks/useScrollPosition'
import MobileMenu from './MobileMenu'

const navLinks = [
  { to: '/', label: 'Beranda' },
  { to: '/produk', label: 'Produk' },
  { to: '/layanan', label: 'Custom' },
  { to: '/layanan#pelatihan', label: 'Pelatihan' },
  { to: '/tentang', label: 'Tentang Kami' },
  { to: '/kontak', label: 'Kontak' },
]

export default function Navbar() {
  const scrollY = useScrollPosition()
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [location.pathname])

  const solid = scrollY > 40

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          solid
            ? 'bg-white/90 backdrop-blur-md shadow-sm py-3 border-b border-gray-200/60'
            : 'bg-transparent py-4 md:py-6'
        }`}
      >
        <nav className="max-w-7xl mx-auto px-4 md:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-1.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded-lg"
            aria-label="KUB Dollyverse — Ke Beranda"
          >
            <span className="font-display font-black text-ink text-xl md:text-2xl tracking-tighter uppercase">
              KUB DOLLYVERSE
            </span>
            <div className="w-6 h-6 rounded-full bg-gold flex items-center justify-center text-ink shadow-xs group-hover:scale-110 transition-transform">
              <ThumbsUp size={13} className="fill-ink" />
            </div>
          </Link>

          {/* Desktop Capsule Nav */}
          <div className="hidden lg:flex items-center bg-white/85 backdrop-blur-md border border-gray-200/80 rounded-full px-2 py-1.5 shadow-xs">
            <ul className="flex items-center gap-1">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <NavLink
                    to={to}
                    end={to === '/'}
                    className={({ isActive }) =>
                      `px-4 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 block ${
                        isActive
                          ? 'bg-lime text-ink font-bold shadow-xs'
                          : 'text-gray-700 hover:text-ink hover:bg-gray-100/70'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Icons & CTA */}
          <div className="flex items-center gap-3">
            <button
              type="button"
              className="p-2 rounded-full text-ink hover:bg-gray-100 transition-colors"
              aria-label="Cari produk"
            >
              <Search size={20} />
            </button>
            <button
              type="button"
              className="relative p-2 rounded-full text-ink hover:bg-gray-100 transition-colors"
              aria-label="Keranjang belanja"
            >
              <ShoppingBag size={20} />
              <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-lime border border-white" />
            </button>
            <a
              href="https://wa.me/6281234567890?text=Halo+Dollyverse%2C+saya+ingin+pesan+custom."
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-2 bg-ink hover:bg-navy text-white text-sm font-bold px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200"
            >
              <span>Pesan Custom</span>
              <ArrowRight size={16} />
            </a>

            {/* Mobile Hamburger */}
            <button
              id="nav-menu-toggle"
              type="button"
              className="lg:hidden p-2 rounded-full text-ink hover:bg-gray-100 transition-colors"
              aria-label={menuOpen ? 'Tutup menu' : 'Buka menu'}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </nav>
      </header>

      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} links={navLinks} />
    </>
  )
}
