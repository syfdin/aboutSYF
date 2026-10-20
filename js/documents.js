/**
 * documents.js
 * ------------------------------------------------------------
 * Daftar sertifikat dan dokumen pendukung.
 *
 * CARA MENAMBAH DOKUMEN (versi statis, tanpa backend):
 *  1. Salin file ke folder yang sesuai:
 *       assets/documents/certificates/   (PDF, DOC, DOCX, JPG, PNG)
 *       assets/documents/other/
 *       assets/images/certificates/      (gambar untuk thumbnail)
 *  2. Daftarkan file tersebut pada array DOCUMENTS di bawah ini.
 *  3. Simpan, lalu muat ulang halaman. Tidak perlu mengubah index.html.
 *
 * Catatan: website ini tidak memiliki fitur upload karena tidak ada server.
 * Pastikan dokumen yang didaftarkan tidak memuat data pribadi/sensitif
 * (nomor KTP, alamat rumah, nomor telepon pribadi, dll.) yang tidak ingin dipublikasikan.
 *
 * Format satu entri:
 * {
 *   id: "unik-tanpa-spasi",
 *   category: "certificate" | "training" | "other",
 *   file: "assets/documents/certificates/nama-file.pdf",   // wajib
 *   type: "pdf" | "image" | "word",                       // opsional, otomatis dari ekstensi
 *   thumbnail: "assets/images/certificates/nama.jpg",      // opsional (untuk PDF/Word); gambar memakai file-nya sendiri
 *   date: "2025-03",                                       // opsional (YYYY, YYYY-MM, atau YYYY-MM-DD)
 *   title:       { id: "Judul ID",       en: "Title EN" },
 *   description: { id: "Deskripsi ID",   en: "Description EN" }  // opsional
 * }
 */
window.DOCUMENTS = [
  // Contoh (hapus tanda komentar dan sesuaikan dengan file asli Anda):
  //
  // {
  //   id: "contoh-sertifikat-1",
  //   category: "certificate",
  //   file: "assets/documents/certificates/nama-sertifikat.pdf",
  //   date: "2025-01",
  //   title: { id: "Nama Sertifikat", en: "Certificate Name" },
  //   description: { id: "Penyelenggara dan ringkasan singkat.", en: "Issuer and a short summary." }
  // }
];
