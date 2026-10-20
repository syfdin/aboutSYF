/**
 * config.js
 * ------------------------------------------------------------
 * Satu tempat untuk mengubah informasi profil, email, media sosial,
 * dan lokasi file CV. Tidak perlu menyentuh index.html.
 *
 * Aturan placeholder:
 *  - Nilai kosong ("") berarti "belum diisi". Website akan menyembunyikan
 *    atau menonaktifkan elemen terkait dan menampilkan pesan yang sopan,
 *    sehingga pengunjung tidak diarahkan ke tautan palsu.
 */
window.SITE_CONFIG = {
  profile: {
    name: "Muhammad Syaifudin",
    brand: "SYFDN",
    // Foto profil: letakkan file di assets/images/profile.jpg
    // Jika file tidak ditemukan, placeholder inisial akan ditampilkan.
    photo: "assets/images/profile.jpg",
    photoAlt: {
      id: "Foto profil Muhammad Syaifudin",
      en: "Portrait of Muhammad Syaifudin"
    }
  },

  // Alamat email. Isi satu kali di sini, dipakai di seluruh website.
  // Contoh: "nama@gmail.com". Kosongkan jika belum ada.
  email: "fudintombo@gmail.com",

  // Template email profesional (mengikuti bahasa yang aktif).
  emailTemplate: {
    id: {
      subject: "Salam Perkenalan dan Peluang Kolaborasi",
      body:
        "Yth. Bapak/Ibu Muhammad Syaifudin,\n\n" +
        "Perkenalkan, saya [Nama Anda] dari [Perusahaan/Instansi]. " +
        "Saya menghubungi Anda terkait [tujuan, misalnya kolaborasi, " +
        "kebutuhan training, atau peluang kerja].\n\n" +
        "Mohon kesediaannya untuk berdiskusi lebih lanjut.\n\n" +
        "Terima kasih.\n[Nama Anda]"
    },
    en: {
      subject: "Introduction and Collaboration Opportunity",
      body:
        "Dear Mr. Muhammad Syaifudin,\n\n" +
        "My name is [Your Name] from [Company/Organization]. " +
        "I am reaching out regarding [purpose, e.g. collaboration, " +
        "training needs, or a job opportunity].\n\n" +
        "I would appreciate the chance to discuss this further.\n\n" +
        "Thank you.\n[Your Name]"
    }
  },

  // URL media sosial. Kosongkan ("") jika belum tersedia.
  // Contoh: "https://www.linkedin.com/in/username"
  social: {
    linkedin: "",
    instagram: "",
    facebook: ""
  },

  // File CV. Ubah nama/lokasi di sini jika perlu.
  cv: {
    path: "assets/documents/cv/CV-Muhammad-Syaifudin.pdf",
    downloadName: "CV-Muhammad-Syaifudin.pdf"
  },

  // Data pengalaman kerja. Tanggal sengaja dikosongkan (placeholder).
  // Isi "period" dengan teks bebas, misalnya { id: "Jan 2024 - Sekarang", en: "Jan 2024 - Present" }.
  experience: [
    {
      position: { id: "HR Trainer", en: "HR Trainer" },
      company: "RAJA GADAI",
      period: { id: "", en: "" },
      responsibilities: [
        {
          id: "Mendukung proses recruitment dan penilaian kandidat sesuai kebutuhan perusahaan.",
          en: "Supporting recruitment and candidate evaluation in line with the company's needs."
        },
        {
          id: "Melakukan assessment untuk mengukur kompetensi dan kesiapan individu.",
          en: "Conducting assessments to measure individual competence and readiness."
        },
        {
          id: "Melaksanakan training dan pengembangan kualitas SDM.",
          en: "Delivering training and developing the quality of human resources."
        },
        {
          id: "Melakukan monitoring dan controlling cabang untuk mengevaluasi penerapan standar dan kualitas SDM.",
          en: "Monitoring and controlling branches to evaluate how HR standards and quality are applied."
        },
        {
          id: "Mendukung evaluasi hasil assessment serta identifikasi area pengembangan.",
          en: "Supporting the evaluation of assessment results and identifying development areas."
        }
      ]
    }
  ],

  // Data skill. Tambah/hapus/ubah kategori atau item di sini.
  // Nama skill memakai dua bahasa agar ikut berganti saat switch bahasa.
  skills: [
    {
      title: { id: "Human Resources", en: "Human Resources" },
      items: [
        { id: "Dukungan Recruitment", en: "Recruitment Support" },
        { id: "Penilaian Kandidat", en: "Candidate Assessment" },
        { id: "Evaluasi Kompetensi", en: "Competency Evaluation" },
        { id: "Monitoring SDM", en: "Human Resources Monitoring" }
      ]
    },
    {
      title: { id: "Learning & Development", en: "Learning & Development" },
      items: [
        { id: "Penyampaian Training", en: "Training Delivery" },
        { id: "Pengembangan Karyawan", en: "Employee Development" },
        { id: "Evaluasi Training", en: "Training Evaluation" },
        { id: "Penyusunan Materi Pembelajaran", en: "Learning Materials Development" }
      ]
    },
    {
      title: { id: "Keahlian Profesional", en: "Professional Skills" },
      items: [
        { id: "Komunikasi", en: "Communication" },
        { id: "Berpikir Analitis", en: "Analytical Thinking" },
        { id: "Pelaporan & Dokumentasi", en: "Reporting & Documentation" },
        { id: "Pemecahan Masalah", en: "Problem Solving" }
      ]
    },
    {
      title: { id: "Keahlian Digital", en: "Digital Skills" },
      items: [
        { id: "Microsoft Office", en: "Microsoft Office" },
        { id: "Google Workspace", en: "Google Workspace" },
        { id: "Dasar-dasar Website", en: "Website Fundamentals" }
      ]
    }
  ]
};
