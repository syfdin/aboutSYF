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
  {
    id: "training-hr-2025",
    category: "certificate",   // certificate | training | other
    file: "assets/documents/certificates/sertifikat-training-hr.pdf",
    date: "2025-03",           // opsional: 2025, 2025-03, atau 2025-03-15
    title: { id: "Training HR Dasar", en: "Basic HR Training" },
    description: { id: "Diselenggarakan oleh PT Pegadaian", en: "Organized by PT Pegadaian" }  // opsional
  },
  {
    id: "sertifikat-2",
    category: "training",
    file: "assets/images/certificates/sertifikat-2.jpg",   // gambar tampil sebagai thumbnail otomatis
    title: { id: "Judul", en: "Title" }
  }
];
