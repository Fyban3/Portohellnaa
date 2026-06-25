# Product Requirements Document (PRD): Simple & Premium Portfolio Website

**Tanggal:** 25 Juni 2026  
**Status:** Approved / Siap Implementasi  
**Tenggat Waktu:** Malam Ini (25 Juni 2026)  
**Target Utama:** Membuat website portofolio pribadi yang profesional, responsif, memiliki estetika premium (visual modern, animasi mikro, palet warna elegan), dan selesai dideploy malam ini.

---

## 1. Ringkasan Eksekutif (Executive Summary)

### Masalah (Problem Statement)
Kebutuhan akan kehadiran digital (digital presence) yang dapat memamerkan keahlian, proyek, dan profil profesional secara instan, namun dengan waktu pembuatan yang sangat terbatas (kurang dari beberapa jam/tenggat malam ini).

### Solusi (Proposed Solution)
Sebuah website portofolio satu halaman (Single Page Application/SPA) menggunakan HTML5, Vanilla CSS3 premium, dan Vanilla JavaScript untuk interaksi ringan. Desain difokuskan pada estetika tinggi (modern dark mode, glassmorphism, gradasi halus, tata letak bento-grid untuk proyek) agar langsung memberikan impresi pertama yang memukau tanpa overhead framework yang berat.

### Dampak Bisnis / Personal (Business Impact)
- Meningkatkan kredibilitas profesional di mata perekrut atau calon klien.
- Menjadi pusat rujukan untuk seluruh tautan sosial media dan resume profesional.
- Kemudahan akses dan performa tinggi (load-time di bawah 1 detik).

---

## 2. Tujuan & Matrik Keberhasilan (Goals & Success Metrics)

### Tujuan Utama
1. Menyajikan informasi profil secara terstruktur (Hero, About, Projects, Contact).
2. Menampilkan karya/proyek dengan kartu visual yang interaktif.
3. Menyediakan jalur komunikasi yang cepat (tautan email/media sosial yang menonjol).

### Matriks Keberhasilan (Success Metrics)
* **Kecepatan Muat Halaman:** Skor Google PageSpeed Insights > 90 (Mobile & Desktop).
* **Responsivitas:** Tampilan 100% sempurna di perangkat Mobile (smartphone), Tablet, dan Desktop.
* **Interaktivitas:** Semua tombol navigasi, efek hover, dan animasi mikro berjalan mulus tanpa lag.
* **Ketepatan Waktu:** Website selesai dideploy dan dapat diakses sebelum tengah malam.

---

## 3. Cakupan Fitur (Features Scope)

### Di Dalam Cakupan (In Scope - MVP)
1. **Hero Section:**
   - Judul utama dengan tipografi premium (Inter/Outfit) menggunakan gradasi warna modern.
   - Subjudul penjelas peran/keahlian.
   - Tombol Call-to-Action (CTA) "Lihat Proyek" (dengan efek scroll halus) dan "Hubungi Saya".
2. **About Me Section:**
   - Deskripsi singkat profil profesional.
   - Tampilan visual tag keahlian (Skill Tags) dengan styling modern (pill-shaped, semi-transparent background).
3. **Projects Grid Section:**
   - Tata letak grid responsif berisi kartu proyek (Project Cards).
   - Efek hover interaktif pada kartu proyek (sedikit bergeser ke atas/shadow bertambah).
   - Tautan ke kode sumber (GitHub) atau demo langsung.
4. **Contact & Social Section:**
   - Desain footer/bagian kontak yang bersih dan elegan.
   - Tautan ikon sosial media terverifikasi (GitHub, LinkedIn, Email).
5. **Fitur Navigasi:**
   - Navbar melayang (sticky navbar) dengan latar belakang kaca kabur (glassmorphism/backdrop-filter blur).
   - Smooth scrolling ke setiap bagian halaman.

### Di Luar Cakupan (Out of Scope - Future Release)
- Sistem Manajemen Konten (CMS) untuk memperbarui proyek (cukup ubah file HTML langsung).
- Form kontak yang mengirim pesan langsung ke database (untuk malam ini cukup tautan `mailto:` atau integrasi form eksternal instan seperti Formspree).
- Fitur multi-bahasa (Localization).

---

## 4. Panduan Desain & Estetika (Design & Aesthetics)

Untuk mencapai standar estetika premium dan memukau dalam waktu singkat, desain akan mengikuti panduan berikut:

* **Palet Warna (Harmoni Mode Gelap/Dark Mode):**
  - Latar Belakang Utama: `#0B0F19` (Deep Slate Blue)
  - Latar Belakang Kartu/Kontainer: `rgba(255, 255, 255, 0.03)` dengan border halus `rgba(255, 255, 255, 0.08)` (Efek Glassmorphism).
  - Warna Aksen Utama: Gradasi Violet ke Cyan (`#8B5CF6` -> `#06B6D4`).
  - Teks Utama: `#F9FAFB` (Hampir Putih)
  - Teks Sekunder: `#9CA3AF` (Abu-abu lembut)
* **Tipografi:**
  - Mengimpor Google Fonts: **Plus Jakarta Sans** atau **Inter** untuk keterbacaan tinggi dan kesan modern.
* **Animasi Mikro:**
  - Transisi halus (`transition: all 0.3s ease`) pada semua tombol, kartu, dan tautan saat di-hover.
  - Efek blur pada navigasi saat di-scroll.

---

## 5. Kebutuhan Non-Fungsional (Non-Functional Requirements)

* **SEO Best Practices:**
  - Penggunaan elemen semantik HTML5 (`<header>`, `<main>`, `<section>`, `<footer>`).
  - Tag judul (`<h1>` tunggal pada halaman, diikuti oleh `<h2>` untuk bagian sub-halaman).
  - Tag meta deskripsi dan open graph untuk tampilan pratinjau media sosial.
* **Aksesibilitas (A11y):**
  - Kontras warna teks memenuhi standar WCAG AA.
  - Atribut `aria-label` pada tautan ikon media sosial.
* **Performa:**
  - Menggunakan Vanilla CSS tanpa library pihak ketiga yang besar untuk meminimalkan ukuran file.
  - Tidak ada pustaka JS eksternal (jQuery, dll.) untuk memastikan pemuatan cepat.

---

## 6. Jadwal Milestone (Timeline)

| Fase | Waktu Pengoperasian | Hasil Kerja (Deliverables) |
|---|---|---|
| **Fase 1: Struktur & Perencanaan** | 30 Menit | PRD & `STRUCTURE.md` selesai (Saat ini). |
| **Fase 2: Kerangka HTML & Asset** | 45 Menit | `index.html` selesai dengan struktur semantik dan meta SEO. |
| **Fase 3: Styling CSS (Aesthetics)** | 60 Menit | `styles.css` dengan variabel CSS, layout grid/flex, dan glassmorphism. |
| **Fase 4: Interaktivitas JS** | 30 Menit | `script.js` untuk smooth scroll dan efek navbar. |
| **Fase 5: Validasi & Uji Coba** | 30 Menit | Pengecekan responsivitas mobile dan kecepatan loading. |
| **Fase 6: Deploy** | 15 Menit | Upload ke platform gratis seperti GitHub Pages, Vercel, atau Netlify. |
