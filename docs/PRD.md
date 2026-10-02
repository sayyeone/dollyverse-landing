# PRD — Company Profile KUB Dollyverse (React)

> **Pendekatan:** pola layout meniru ubsgold.com (hero fullscreen, marquee, eyebrow + heading, footer berkolom), tapi **isinya lebih ringkas**. Prinsipnya: halaman beranda hanya memberi gambaran, detail dipindah ke halaman sendiri atau panel yang dibuka pengunjung.
> Aset asli UBS Gold tidak dipakai. Tanda ⚠️ = nilai perkiraan yang perlu dicek ulang.

---

## 1. Ringkasan

Website company profile **KUB Dollyverse**: kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya, yang bergerak di sablon digital (DTF dan sublim), sablon manual, merchandise, dan pelatihan sablon. Website berfungsi sebagai etalase brand dan pintu masuk pemesanan lewat WhatsApp dan marketplace. **Tidak ada keranjang atau checkout.**

## 2. Deskripsi Usaha

**Versi singkat (untuk beranda, ±40 kata):**
> Dollyverse adalah kelompok usaha bersama pemuda RW 12 Putat Jaya, Surabaya. Kami melayani kaos custom satuan, sablon kelompok, merchandise, dan pelatihan sablon — dengan harga terjangkau dan desain otentik.

**Versi lengkap (untuk halaman Tentang):**
- **Siapa:** KUB Dollyverse beranggotakan 10 orang dari RW 12 Kelurahan Putat Jaya, kawasan eks-lokalisasi Dolly.
- **Bidang usaha:** penjualan kaos berdesain otentik, jasa sablon kaos, merchandise (lanyard, mug, tumbler, sablon bolpoin, tote bag, topi, pin), dan jasa pelatihan sablon.
- **Teknik dan kapasitas:** DTF dan sublim (hingga 200 kaos per hari), serta sablon manual.
- **Dua lokasi produksi:** Balai RW 12 (DTF, sublim, merchandise) dan eks-Wisma Barbara lantai 3 (sablon manual, pusat produksi produk lokal milik Pemkot Surabaya).
- **Nama dan logo:** *Dolly* (tempat usaha berada) + *universe* (semesta). Logo jempol melambangkan spirit perubahan dan jaminan kualitas. Maskot gabungan sura (hiu) dan buaya menandakan ambisi menjadi usaha ikonik Surabaya.
- **Ciri khas:** layanan custom satuan, harga terjangkau, dan desain yang menggambarkan transformasi Kampung Dolly.

## 3. Latar Belakang Usaha

**Versi singkat (untuk beranda, 3 kartu "Kenapa Dollyverse"):**

| Kartu | Isi satu kalimat |
|---|---|
| Dari Kampung Dolly | Lahir dari semangat warga untuk mengubah kawasan eks-lokalisasi lewat ekonomi kreatif. |
| Murah, tanpa korbankan kualitas | Kaos custom satuan dan merchandise yang terjangkau untuk semua kalangan. |
| Belajar dan tumbuh bersama | Pelatihan sablon agar warga punya keterampilan dan peluang usaha. |

**Versi lengkap (untuk halaman Tentang, bentuk timeline + teks):**

1. **Latar:** RW 12 Putat Jaya adalah kawasan eks-lokalisasi Dolly yang ditutup sekitar satu dekade lalu. Dollyverse berdiri bukan hanya demi profit, tetapi sebagai salah satu solusi atas dampak penutupan itu melalui sektor ekonomi kreatif.
2. **April 2023:** RW dan Kelurahan Putat Jaya menginisiasi kelompok usaha bersama di bidang sablon.
3. **Pelatihan:** Dinas Tenaga Kerja memberi pelatihan; universitas-universitas di Surabaya menambah pelatihan skill dan alat usaha.
4. **2024:** Kecamatan Sawahan dan Kementerian Sosial memberi bantuan perlengkapan usaha.
5. **Kini:** menjual produk dan jasa, serta membuka pelatihan wirausaha sablon.
6. **Masalah yang dijawab:** (a) kaos custom satuan yang terjangkau, (b) merchandise murah, (c) nilai transformasi Dolly pada setiap produk, (d) pelatihan wirausaha sablon bagi warga.

## 4. Tujuan dan Target Pengguna

| Tujuan | Metrik |
|---|---|
| Pengunjung paham siapa Dollyverse dalam < 10 detik | Scroll dari hero ke section 2 |
| Pengunjung menghubungi / memesan | Klik WhatsApp atau marketplace |
| Cerita transformasi Dolly tersampaikan | Klik "Baca Cerita Kami" |

Pengguna: **individu** (warga dan wisatawan Surabaya), **kelompok** (komunitas, seragam instansi), **calon peserta pelatihan**.

## 5. Prinsip UI/UX — Anggaran Informasi

Aturan ini menjaga beranda tetap ringan:

1. **Satu pesan per section.** Satu heading, maksimal 2 kalimat, satu CTA utama.
2. **Maksimal 4 item terlihat** dalam satu grup (kartu produk, layanan, galeri). Sisanya lewat "Lihat semua".
3. **Detail pindah ke halaman atau panel.** Timeline, daftar mesin, tim, mitra, dan daftar lokasi tidak ditampilkan di beranda.
4. **Paragraf maksimal ±50 kata.** Teks lebih panjang hanya di halaman Tentang.
5. **Satu aksi utama di seluruh situs:** *Pesan via WhatsApp*. CTA lain bersifat sekunder (outline atau link teks).
6. **Beranda tidak lebih dari 7 section** (± 5–6 layar scroll di mobile).
7. **Mobile first.** Mayoritas pengunjung datang dari Instagram dan WhatsApp lewat HP.

**Yang sengaja dibuang dari rancangan UBS:** carousel toko, newsletter, section berita, popup CV, dan footer berkolom banyak.

## 6. Sitemap dan Rute (React Router)

| Rute | Halaman | Isi |
|---|---|---|
| `/` | Beranda | Ringkasan 7 section |
| `/tentang` | Tentang | Deskripsi lengkap, latar belakang (timeline), tim, mitra dan dukungan |
| `/produk` | Produk | 6 kartu produk dan harga, tombol tanya per produk |
| `/layanan` | Layanan | Kaos satuan, pesanan kelompok, pelatihan, cara pesan 4 langkah, kapasitas |
| `/kontak` | Kontak | 2 lokasi produksi + peta, WhatsApp, Instagram, YouTube, marketplace |

Galeri tampil sebagai strip di beranda dan dibuka dalam **lightbox**, bukan halaman terpisah.

## 7. Struktur Beranda (7 section)

| # | Section | Isi (ringkas) | CTA |
|---|---|---|---|
| 1 | **Navbar + Hero** | Panel diagonal gelap dari cover PDF, maskot, headline **"Jagonya Sablon Digital Murah di Surabaya"**, 1 kalimat pendukung. Navbar: Beranda, Tentang, Produk, Layanan, Kontak. | Primer: **Pesan via WhatsApp**. Sekunder: **Lihat Produk** |
| 2 | **Tentang Singkat** | Eyebrow "Cerita Kami", deskripsi singkat (±40 kata), 3 angka: **200 kaos/hari**, **10 anggota**, **2 lokasi**. | Link teks: **Baca Cerita Kami →** `/tentang` |
| 3 | **Marquee** | Pita teks berjalan: *Dollyverse ⋅ Sablon Digital Murah ⋅ Desain Otentik ⋅ Dari Kampung Dolly*. Pemisah motif ◀◀◀ ▶▶▶. | — |
| 4 | **Kenapa Dollyverse** | 3 kartu latar belakang (lihat bagian 3). | — |
| 5 | **Produk Unggulan** | 4 kartu: Kaos Custom (mulai Rp55.000, *Best Seller*), Mug (Rp16.500), Tote Bag (Rp24.500), Tumbler (Rp38.500). | **Lihat Semua Produk →** `/produk` |
| 6 | **Layanan** | 3 kartu ikon: Kaos Satuan, Pesanan Kelompok/Seragam, Pelatihan Sablon. Satu kalimat per kartu. | **Lihat Layanan →** `/layanan` |
| 7 | **Galeri + CTA Penutup** | Strip 4–5 foto (produksi, bazar), klik membuka lightbox. Di bawahnya banner satu kalimat + tombol WhatsApp. Footer ringkas satu baris tinggi: logo, ikon sosial, alamat singkat, copyright. | **Pesan via WhatsApp** |

Pemindahan dari rancangan sebelumnya: Mitra dan Dukungan → `/tentang`; Cara Pesan → `/layanan`; 2 lokasi produksi + peta → `/kontak`; popup konsultasi → dihapus, diganti tombol WhatsApp langsung dengan pesan awal terisi.

## 8. Komponen React

```
src/
├── data/            products.js, services.js, timeline.js, contact.js   ← semua teks dan harga di sini
├── components/
│   ├── layout/      Navbar, MobileMenu, Footer, FloatingWhatsApp
│   ├── ui/          Button, SectionHeading (eyebrow + judul), Card, Badge
│   ├── home/        Hero, AboutTeaser, Marquee, WhyUs, FeaturedProducts, ServiceCards, GalleryStrip, ClosingCta
│   └── shared/      Lightbox, Timeline, StatCounter
├── pages/           Home, About, Products, Services, Contact
├── hooks/           useScrollPosition, useReducedMotion
└── App.jsx          rute React Router
```

Prinsip: **konten dipisah dari komponen** (`data/*.js`), jadi ganti harga atau teks tidak menyentuh JSX. `SectionHeading`, `Card`, dan `Button` dipakai ulang di semua halaman supaya tampilan konsisten.

**State yang diperlukan (minim):** buka/tutup menu mobile, navbar solid saat scroll, indeks lightbox. Tidak perlu state manager global.

## 9. Spesifikasi Komponen Kunci

- **Navbar:** transparan di hero, solid navy setelah scroll > 40px; link aktif bergaris bawah ungu. Mobile: drawer layar penuh.
- **FloatingWhatsApp:** tombol bulat di kanan bawah, **hanya mobile**, hilang di section kontak.
- **Button:** primer (isi indigo), sekunder (outline), link teks dengan panah. State: hover, focus-visible, active, disabled.
- **Card produk:** foto persegi, nama, "mulai dari" + harga; badge *Best Seller*; hover naik 4px.
- **Marquee:** CSS `translateX` loop; berhenti saat `prefers-reduced-motion`.
- **Lightbox:** tutup dengan `Esc`, klik latar, atau tombol; navigasi panah kiri/kanan; fokus terkunci di dalam.
- **Link WhatsApp:** `https://wa.me/62…?text=` dengan pesan awal berbeda per konteks (umum, tanya produk X, pelatihan).

## 10. Design System (disesuaikan dengan identitas Dollyverse)

**Kenapa bukan palet dan font UBS:** UBS memakai emas dan serif untuk kesan *luxury*. Dollyverse adalah brand kreatif, komunitas, dan anak muda dengan maskot ceria, jadi nadanya lebih berani dan ramah.

### Palet warna ⚠️ (perkiraan visual dari PDF, cek dengan color picker pada logo asli)

| Token | Hex | Pemakaian |
|---|---|---|
| `ink` | `#121316` | Latar gelap hero, footer |
| `navy` | `#2F3552` | Navbar solid, judul di latar terang |
| `indigo` | `#4A3C9E` | Tombol primer, link |
| `violet` | `#8E7CF0` | Aksen, hover, ikon |
| `lilac` | `#EDE9FE` | Latar section terang, kartu |
| `gold` | `#E0A92E` | Aksen kecil: badge, garis, angka sorotan |
| `cream` | `#F6E7C1` | Latar hangat sesekali |
| `paper` | `#FFFFFF` | Latar utama |

Aturan: ungu, navy, dan hitam sebagai dasar; **emas hanya aksen kecil**. Cek kontras AA untuk teks putih di atas `violet`.

### Tipografi (Google Fonts)

| Peran | Font |
|---|---|
| Heading | **Montserrat** ExtraBold 800, huruf kapital, tracking +0.02em — mirip judul cover PDF |
| Body, menu, tombol | **Plus Jakarta Sans** 400/500/600 |
| Angka sorotan | Montserrat 800 |
| Dekoratif (opsional, hemat) | Pirata One untuk satu elemen bergaya gotik |

Ukuran awal: h1 `clamp(2.5rem, 6vw, 4.5rem)`, h2 `clamp(1.75rem, 4vw, 3rem)`, body 1rem/1.7, eyebrow 0.8rem kapital tracking 0.15em. Jarak antar section: 64px mobile, 112px desktop.

### Elemen khas
Panel diagonal (navy di atas hitam), motif panah ◀◀◀ ▶▶▶, maskot sebagai penanda, radius 12–16px.

## 11. Kebutuhan Non-Fungsional

- **Responsif:** 360 / 768 / 1024 / 1440.
- **Performa:** gambar WebP + `loading="lazy"`, rute di-*lazy load* (`React.lazy`), LCP < 2,5 dtk.
- **Aksesibilitas:** alt text, fokus keyboard terlihat, kontras AA, `prefers-reduced-motion`, tombol dan link bisa dijangkau keyboard.
- **SEO:** karena React (SPA) biasa kurang ramah mesin pencari, pakai `react-helmet-async` untuk title dan meta per rute, atau pertimbangkan **Next.js / prerender** bila SEO lokal ("sablon murah Surabaya") penting.

## 12. Tech Stack

- **React + Vite** (JavaScript atau TypeScript)
- **Tailwind CSS** (token warna dan font di `tailwind.config`)
- **React Router** untuk rute
- **Embla Carousel** atau **Swiper** (hanya jika ada carousel), **Framer Motion** untuk animasi masuk ringan
- **lucide-react** untuk ikon
- Deploy: Vercel atau Netlify

## 13. Ruang Lingkup

**V1:** 5 rute, beranda 7 section, lightbox galeri, tombol WhatsApp, responsif.
**V2:** blog/kegiatan, katalog desain, form pesanan ke backend, multi-bahasa.
**Di luar cakupan:** pembayaran, keranjang, akun pengguna, game Android.

## 14. Data dan Aset yang Masih Perlu Disiapkan

| Item | Status |
|---|---|
| Logo dan maskot PNG transparan / SVG | Perlu file asli (bukan dari PDF) |
| Foto produk per kategori | Perlu; poster harga bisa dipakai sementara |
| Foto produksi dan bazar | Ada di PDF (cek izin wajah) |
| Nomor NIB | Kosong di PDF — isi atau jangan ditampilkan |
| Link Shopee, Tokopedia, Google Maps | Perlu |
| Klaim "harga paling murah di Surabaya" | Beri bukti atau perlunak jadi "harga terjangkau" |
| Logo mitra pendukung | Perlu izin penggunaan |

## 15. Pertanyaan Terbuka

1. Hero memakai video proses produksi atau cukup ilustrasi maskot?
2. Tim (nama anggota) ditampilkan di `/tentang` atau tidak?
3. SEO penting? Jika ya, pilih Vite + prerender atau langsung Next.js.