# Website Portofolio Pribadi (Premium & Simpel)

Proyek ini adalah portofolio satu halaman (Single Page Website) dengan desain estetik modis bergaya Glassmorphism & Bento Layout, dirakit menggunakan **HTML5 semantik, CSS3 modern, dan JavaScript vanilla** agar memiliki performa loading sangat cepat.

---

## 🚀 Cara Menjalankan Secara Lokal

Anda tidak memerlukan server khusus untuk menjalankan website ini. Cukup ikuti salah satu metode berikut:

1. **Langsung Buka File HTML:**
   - Masuk ke folder `/home/fyban/Documents/portofolio/`.
   - Klik ganda pada file `index.html` untuk langsung membukanya di browser Google Chrome, Firefox, Safari, atau Edge.

2. **Menggunakan VS Code Live Server (Direkomendasikan):**
   - Buka folder `portofolio/` menggunakan VS Code.
   - Klik kanan pada `index.html` lalu pilih **Open with Live Server**. Halaman akan diperbarui otomatis saat Anda melakukan edit file.

---

## 🛠️ Cara Kustomisasi Informasi

Semua file dikomentari dengan rapi untuk mempermudah pengeditan:

* **Mengubah Nama, Profil, & Kontak:**  
  Buka [index.html](file:///home/fyban/Documents/portofolio/index.html) dan cari teks konten di dalam bagian `<header id="home">`, `<section id="about">`, atau `<section id="contact">`. Edit teks tersebut sesuai kebutuhan Anda.
* **Menyunting Daftar Keahlian (Skills):**  
  Pada file [index.html](file:///home/fyban/Documents/portofolio/index.html), temukan bagian `<div class="skills-container">` dan tambahkan atau hapus tag keahlian (`<span class="skill-tag">`). Anda bisa mengganti ikon dengan menggunakan nama ikon dari pustaka [Lucide Icons](https://lucide.dev/icons).
* **Menambahkan Proyek Baru:**  
  Cari elemen `<div class="projects-grid">` di [index.html](file:///home/fyban/Documents/portofolio/index.html), salin satu blok `<div class="project-card">` dan perbarui teks, tag, serta tautan repositori/live demonya.
* **Mengganti Tema Warna:**  
  Buka file [styles.css](file:///home/fyban/Documents/portofolio/styles.css) dan ubah variabel warna di dalam blok `:root`. Misalnya, jika ingin mengubah warna aksen gradasi, sunting nilai `--accent-gradient`.

---

## 🌐 Panduan Deploy Malam Ini (Gratis & Cepat)

Untuk mempublikasikan website agar dapat diakses oleh publik secara gratis, Anda dapat memilih salah satu metode di bawah ini:

### Opsi A: Menggunakan Vercel (Paling Instan & Mudah)
1. Buka [Vercel](https://vercel.com/) dan buat akun (bisa sign-up menggunakan GitHub).
2. Instal Vercel CLI di terminal komputer Anda:
   ```bash
   npm install -g vercel
   ```
3. Buka terminal di direktori proyek ini (`/home/fyban/Documents/portofolio/`) dan jalankan perintah:
   ```bash
   vercel
   ```
4. Ikuti instruksi login dan setup proyek. Dalam 1 menit website Anda akan mendapatkan URL publik `.vercel.app`.

### Opsi B: Menggunakan Netlify (Metode Drag and Drop)
1. Buka [Netlify Drop](https://app.netlify.com/drop).
2. Seret (drag and drop) folder `portofolio/` Anda ke kotak drop di halaman tersebut.
3. Website akan langsung mengudara (live) dalam beberapa detik dengan URL acak yang dapat diubah sesuai keinginan Anda di panel kontrol.

### Opsi C: Menggunakan GitHub Pages
1. Buat repositori baru di GitHub (misal: `my-portfolio`).
2. Jalankan inisialisasi Git di folder ini, hubungkan dengan repositori GitHub Anda, dan push kode Anda.
3. Masuk ke tab **Settings** repositori Anda di GitHub -> pilih bagian **Pages** -> atur Source ke **Deploy from a branch** -> pilih branch **main** dan folder `/ (root)` -> klik **Save**.
4. Website akan live di alamat `https://username.github.io/my-portfolio`.
