# SYFDN Portfolio

Website personal portfolio Muhammad Syaifudin (SYFDN). Dibuat dengan HTML5, CSS3, dan JavaScript vanilla, tanpa framework dan tanpa dependensi eksternal. Mendukung Bahasa Indonesia (default) dan English, dark mode, serta tampilan responsif.

## Struktur

```text
SYFDN-Portfolio/
├── index.html
├── css/style.css
├── js/
│   ├── config.js         profil, email, media sosial, CV, pengalaman, skill
│   ├── translations.js   seluruh teks ID dan EN
│   ├── documents.js      daftar sertifikat dan dokumen
│   └── script.js         logika website
└── assets/
    ├── images/profile.jpg           (foto Anda, belum ada)
    ├── images/certificates/
    ├── documents/cv/CV-Muhammad-Syaifudin.pdf   (CV Anda, belum ada)
    ├── documents/certificates/
    ├── documents/other/
    └── icons/favicon.svg
```

## Menjalankan secara lokal

Cara paling cepat: buka `index.html` di browser (klik dua kali).

Cara yang disarankan (perilaku sama seperti saat online):

```bash
cd SYFDN-Portfolio
python3 -m http.server 8000
```

Lalu buka `http://localhost:8000`.

Catatan: saat dibuka langsung dari file (`file://`), website tidak dapat memeriksa apakah CV ada, sehingga tombol CV akan selalu ditampilkan. Lewat server lokal atau hosting, tombol CV hanya muncul jika file benar-benar ada.

## Mengganti foto profil

Simpan foto Anda sebagai `assets/images/profile.jpg` (disarankan rasio potret 4:5, misalnya 800x1000 px). Jika nama atau format berbeda (misalnya `.png`), ubah `profile.photo` di `js/config.js`. Selama file belum ada, website menampilkan placeholder inisial.

## Mengubah informasi profil

- Teks ringkasan, judul, tombol, dan semua label: `js/translations.js` (edit ID dan EN).
- Pengalaman kerja (posisi, perusahaan, tanggal, tanggung jawab): `experience` di `js/config.js`. Isi `period` dengan teks tanggal Anda, misalnya `{ id: "Jan 2024 - Sekarang", en: "Jan 2024 - Present" }`. Jika kosong, ditampilkan placeholder.
- Skill: `skills` di `js/config.js`. Tambah, hapus, atau ubah kategori dan item tanpa menyentuh HTML.

## Menambahkan CV

Salin CV ke `assets/documents/cv/CV-Muhammad-Syaifudin.pdf`. Untuk nama atau lokasi lain, ubah `cv.path` dan `cv.downloadName` di `js/config.js`. Selama file belum ada, bagian CV menampilkan pesan "CV belum tersedia" dan tidak ada tautan unduhan palsu.

## Memasukkan sertifikat dan dokumen

Website ini statis (tanpa server), jadi tidak ada tombol upload. Cara menambahkan dokumen:

1. Salin file (PDF, JPG, PNG, DOC, DOCX) ke `assets/documents/certificates/` atau `assets/documents/other/`.
2. Buka `js/documents.js`, lalu tambahkan satu entri pada array `DOCUMENTS` (contoh format ada di dalam file).
3. Simpan dan muat ulang halaman.

Perilaku per jenis file: PDF dibuka di tab baru, JPG/PNG menampilkan thumbnail, Word menyediakan tombol buka/unduh tanpa preview. Kategori filter: `certificate`, `training`, `other`.

Pastikan dokumen yang Anda tampilkan tidak memuat data pribadi yang sensitif, karena semua file di website dapat diakses publik.

## Mengubah email

Isi `email` di `js/config.js`, misalnya `email: "nama@gmail.com"`. Satu pengaturan ini dipakai oleh tombol Contact Me, Send Email (`mailto:`), dan Buka di Gmail. Subjek dan isi email otomatis dapat diubah pada `emailTemplate`. Website tidak mengirim email; pengiriman dilakukan Anda sendiri lewat aplikasi email atau Gmail. Jika email kosong, tombol dinonaktifkan dan pesan informasi ditampilkan.

## Memperbarui media sosial

Isi URL lengkap di `social` pada `js/config.js` (harus diawali `https://`), misalnya `linkedin: "https://www.linkedin.com/in/username"`. Akun yang URL-nya kosong ditampilkan sebagai "Segera tersedia" tanpa tautan.

## Font

Website memakai tumpukan font sistem dengan Inter/Manrope/Plus Jakarta Sans sebagai prioritas jika terpasang di perangkat pengunjung. Untuk memuat font secara pasti, tambahkan tautan Google Fonts di `index.html` atau simpan file font di `assets/`.

## Deploy

Karena statis, seluruh folder dapat diunggah ke GitHub Pages, Netlify, Cloudflare Pages, atau hosting biasa. Setelah memiliki domain, tambahkan tag Open Graph `og:url` dan `og:image` (gambar pratinjau) di `index.html` agar tautan lebih menarik saat dibagikan.
