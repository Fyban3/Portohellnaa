# Cetak Biru Struktur & Panduan Teknis (STRUCTURE.md)

**Proyek:** Website Portofolio Pribadi Simpel & Premium  
**Lokasi Proyek:** `/home/fyban/Documents/portofolio/`  
**Target Selesai:** Malam Ini

---

## 1. Struktur Folder (Folder Structure)

Struktur proyek akan dibuat sangat bersih dan efisien agar mudah dikelola dan cepat dimuat:

```text
portofolio/
├── PRD.md                  # Dokumen Persyaratan Produk
├── STRUCTURE.md            # Dokumen Panduan Struktur (File Ini)
├── index.html              # Struktur Halaman Utama (HTML5 Semantik)
├── styles.css              # Sistem Desain, Layout (Grid & Flex), & Animasi
├── script.js               # Logika Interaktivitas Ringan
└── assets/                 # Folder Penyimpanan Media
    ├── images/             # Gambar proyek/foto profil (opsional)
    └── icons/              # Ikon kustom jika tidak menggunakan SVG inline
```

---

## 2. Struktur File Utama & Kelas CSS (HTML & CSS Blueprint)

### A. Kerangka HTML (`index.html`)
Halaman ini menggunakan elemen semantik dengan struktur utama sebagai berikut:

* `<nav class="navbar">` - Navigasi melayang dengan efek blur glassmorphism.
* `<header class="hero-section" id="home">` - Bagian perkenalan dengan teks gradasi tebal dan CTA.
* `<section class="about-section" id="about">` - Profil diri dan daftar keahlian (Skill Tags).
* `<section class="projects-section" id="projects">` - Grid proyek (Bento-style / Cards).
* `<section class="contact-section" id="contact">` - Bagian hubungi saya & tautan sosial.
* `<footer class="footer">` - Hak cipta dan tautan ringkas.

### B. Variabel Sistem Desain CSS (`styles.css`)
Untuk memastikan konsistensi visual dan kemudahan modifikasi, variabel CSS (Custom Properties) berikut akan didefinisikan di awal stylesheet:

```css
:root {
  /* Color Palette (Deep Mode Gelap) */
  --bg-primary: #0b0f19;
  --bg-secondary: #111827;
  --bg-card: rgba(255, 255, 255, 0.03);
  --border-card: rgba(255, 255, 255, 0.08);
  
  --text-primary: #f9fafb;
  --text-secondary: #9ca3af;
  --text-muted: #6b7280;
  
  /* Accent Colors */
  --accent-color: #8b5cf6;       /* Violet */
  --accent-gradient: linear-gradient(135deg, #8b5cf6 0%, #06b6d4 100%);
  --accent-hover: #a78bfa;
  
  /* Font Family */
  --font-family: 'Plus Jakarta Sans', 'Inter', -apple-system, BlinkMacSystemFont, sans-serif;
  
  /* Transitions & Shadows */
  --transition-smooth: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --shadow-premium: 0 10px 30px -10px rgba(0, 0, 0, 0.5);
  --radius-premium: 16px;
  
  /* Container Width */
  --container-max-width: 1100px;
}
```

---

## 3. Rencana Langkah Implementasi (Step-by-step Execution Plan)

Berikut adalah panduan langkah cepat untuk merakit website Anda malam ini:

### Langkah 1: Persiapan Folder & File Dasar
1. Buat folder `assets/images` dan `assets/icons`.
2. Buat file kosong `index.html`, `styles.css`, dan `script.js` di dalam folder `portofolio/`.

### Langkah 2: Menyusun Kerangka HTML (`index.html`)
1. Hubungkan Google Fonts (Plus Jakarta Sans) di bagian `<head>`.
2. Masukkan pustaka ikon gratis (misalnya Lucide Icons via CDN atau SVG inline agar lebih cepat dimuat).
3. Susun struktur HTML dengan atribut `id` pada masing-masing section untuk mengaktifkan smooth scroll.

### Langkah 3: Menerapkan Gaya Visual CSS (`styles.css`)
1. Setel ulang dasar CSS (CSS Reset) agar konsisten di semua browser.
2. Terapkan variabel CSS pada elemen global (body background, warna font, dll.).
3. Bangun navbar sticky dengan properti CSS:
   ```css
   backdrop-filter: blur(12px);
   background: rgba(11, 15, 25, 0.7);
   border-bottom: 1px solid var(--border-card);
   ```
4. Desain grid proyek responsif menggunakan CSS Grid:
   ```css
   display: grid;
   grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
   gap: 24px;
   ```
5. Buat efek hover premium pada tombol dan kartu proyek menggunakan `transform: translateY(-6px)` dan modifikasi bayangan shadow.

### Langkah 4: Menambahkan Efek Interaktif (`script.js`)
1. Implementasikan deteksi scroll untuk mengubah style navbar saat halaman digulirkan (menambahkan border atau bayangan shadow).
2. Tambahkan interaksi animasi ringan saat elemen masuk ke viewport (opsional, menggunakan Intersection Observer API bawaan peramban).

### Langkah 5: Pengujian Responsivitas & Performa
1. Uji di browser Chrome/Firefox menggunakan Mode Responsif (Inspect Element -> Toggle Device Toolbar). Posisikan pada dimensi ponsel (misalnya iPhone 12 Pro atau Pixel 5) untuk memastikan tidak ada konten yang terpotong.
2. Periksa performa loading halaman.

---

## 4. Tautan Penting

- [PRD Proyek](file:///home/fyban/Documents/portofolio/PRD.md)
- [Struktur Cetak Biru ini](file:///home/fyban/Documents/portofolio/STRUCTURE.md)
