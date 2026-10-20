/**
 * translations.js
 * ------------------------------------------------------------
 * Seluruh teks antarmuka dalam dua bahasa (ID dan EN).
 * Elemen HTML memakai atribut:
 *   data-i18n="kunci"              -> mengganti textContent
 *   data-i18n-attr="atribut:kunci" -> mengganti atribut (aria-label, title, alt, content)
 * Untuk mengubah teks, cukup edit nilai di bawah. Tidak perlu API eksternal.
 */
window.TRANSLATIONS = {
  id: {
    "meta.title": "Muhammad Syaifudin (SYFDN) | HR Trainer & Profesional Human Resources",
    "meta.description":
      "Portofolio Muhammad Syaifudin (SYFDN), HR Trainer dengan fokus pada Recruitment, Assessment, Training, dan pengendalian kualitas SDM di tingkat cabang.",

    "nav.about": "Tentang",
    "nav.experience": "Pengalaman",
    "nav.skills": "Keahlian",
    "nav.certificates": "Sertifikat",
    "nav.contact": "Kontak",
    "nav.menu": "Buka menu navigasi",
    "nav.menuClose": "Tutup menu navigasi",
    "nav.main": "Navigasi utama",
    "nav.language": "Pilih bahasa",
    "nav.theme": "Ganti tema terang atau gelap",
    "nav.skip": "Lewati ke konten utama",

    "hero.label": "HR TRAINER | HUMAN RESOURCES",
    "hero.title": "Muhammad Syaifudin",
    "hero.subtitle": "Developing People, Strengthening Performance.",
    "hero.description":
      "Profesional Human Resources dengan fokus pada recruitment, assessment, dan pengembangan SDM, serta monitoring kualitas sumber daya manusia di tingkat cabang.",
    "hero.ctaProfile": "Lihat Profil Saya",
    "hero.ctaCv": "Unduh CV",
    "hero.cvUnavailable": "CV akan segera tersedia",
    "hero.photoPlaceholder": "Foto profil belum ditambahkan",
    "hero.scroll": "Gulir ke bawah",

    "about.eyebrow": "Tentang Saya",
    "about.title": "Mengembangkan manusia, menjaga standar kualitas.",
    "about.p1":
      "Saya merupakan profesional di bidang Human Resources dengan fokus pada Recruitment, Assessment, Training, dan pengendalian kualitas sumber daya manusia di tingkat cabang.",
    "about.p2":
      "Dalam pekerjaan saya, saya terlibat dalam proses penilaian kompetensi, pengembangan kualitas SDM, serta monitoring dan controlling cabang untuk memastikan standar dan kualitas sumber daya manusia berjalan sesuai dengan kebutuhan perusahaan.",
    "about.focus": "Bidang Fokus",
    "about.hr.title": "Human Resources",
    "about.hr.text": "Mendukung pengelolaan SDM yang selaras dengan kebutuhan perusahaan.",
    "about.rec.title": "Recruitment",
    "about.rec.text": "Mendukung proses seleksi dan penilaian kandidat.",
    "about.ass.title": "Employee Assessment",
    "about.ass.text": "Mengukur kompetensi dan kesiapan individu secara terstruktur.",
    "about.ld.title": "Learning & Development",
    "about.ld.text": "Melaksanakan training dan pengembangan kualitas SDM.",
    "about.qc.title": "Branch Monitoring & HR Quality Control",
    "about.qc.text": "Mengevaluasi penerapan standar dan kualitas SDM di cabang.",

    "exp.eyebrow": "Pengalaman",
    "exp.title": "Pengalaman Kerja",
    "exp.current": "Posisi saat ini",
    "exp.periodPlaceholder": "Periode kerja belum diisi",
    "exp.responsibilities": "Tanggung jawab",

    "skills.eyebrow": "Keahlian",
    "skills.title": "Kompetensi & Keahlian",
    "skills.intro": "Area kompetensi yang saya gunakan dalam pekerjaan sehari-hari.",

    "cert.eyebrow": "Sertifikat & Dokumen",
    "cert.title": "Sertifikat dan Dokumen Pendukung",
    "cert.intro":
      "Sertifikat pelatihan dan dokumen profesional yang mendukung perjalanan karier saya.",
    "cert.filter.label": "Filter dokumen",
    "cert.filter.all": "Semua",
    "cert.filter.certificate": "Sertifikat",
    "cert.filter.training": "Pelatihan",
    "cert.filter.other": "Dokumen Lain",
    "cert.cat.certificate": "Sertifikat",
    "cert.cat.training": "Pelatihan",
    "cert.cat.other": "Dokumen Lain",
    "cert.view": "Lihat",
    "cert.download": "Unduh",
    "cert.openNewTab": "Buka di tab baru",
    "cert.openWord": "Buka dokumen",
    "cert.empty.title": "Belum ada dokumen",
    "cert.empty.text":
      "Sertifikat dan dokumen pendukung akan ditampilkan di sini setelah ditambahkan.",
    "cert.emptyFilter.title": "Tidak ada dokumen pada kategori ini",
    "cert.emptyFilter.text": "Pilih kategori lain untuk melihat dokumen yang tersedia.",
    "cert.preview": "Pratinjau",
    "cert.imageError": "Gambar tidak dapat dimuat",

    "cv.eyebrow": "Curriculum Vitae",
    "cv.title": "CV / Resume",
    "cv.text": "Lihat atau unduh CV terbaru saya untuk mengetahui ringkasan latar belakang profesional.",
    "cv.view": "Lihat CV",
    "cv.download": "Unduh CV",
    "cv.unavailable.title": "CV belum tersedia",
    "cv.unavailable.text":
      "CV sedang disiapkan. Silakan hubungi saya melalui bagian kontak untuk informasi lebih lanjut.",

    "social.eyebrow": "Media Sosial",
    "social.title": "Terhubung dengan Saya",
    "social.unavailable": "Segera tersedia",
    "social.openIn": "Buka {name} di tab baru",

    "contact.eyebrow": "Kontak",
    "contact.title": "Mari berdiskusi.",
    "contact.text":
      "Untuk kolaborasi, kebutuhan training, atau peluang profesional lainnya, silakan hubungi saya.",
    "contact.email": "Email",
    "contact.emailMissing": "Alamat email belum diatur",
    "contact.contactMe": "Hubungi Saya",
    "contact.sendEmail": "Kirim Email",
    "contact.gmail": "Buka di Gmail",
    "contact.note":
      "Tombol di atas akan membuka aplikasi email atau Gmail dengan draf pesan. Pengiriman dilakukan sendiri oleh Anda.",
    "contact.emailUnavailable":
      "Fitur email akan aktif setelah alamat email ditambahkan.",

    "footer.nav": "Navigasi footer",
    "footer.rights": "All Rights Reserved.",
    "footer.top": "Kembali ke atas",
    "nav.top": "Kembali ke atas"
  },

  en: {
    "meta.title": "Muhammad Syaifudin (SYFDN) | HR Trainer & Human Resources Professional",
    "meta.description":
      "Portfolio of Muhammad Syaifudin (SYFDN), an HR Trainer focused on Recruitment, Assessment, Training, and branch-level human resources quality control.",

    "nav.about": "About",
    "nav.experience": "Experience",
    "nav.skills": "Skills",
    "nav.certificates": "Certificates",
    "nav.contact": "Contact",
    "nav.menu": "Open navigation menu",
    "nav.menuClose": "Close navigation menu",
    "nav.main": "Main navigation",
    "nav.language": "Choose language",
    "nav.theme": "Toggle light or dark theme",
    "nav.skip": "Skip to main content",

    "hero.label": "HR TRAINER | HUMAN RESOURCES",
    "hero.title": "Muhammad Syaifudin",
    "hero.subtitle": "Developing People, Strengthening Performance.",
    "hero.description":
      "A Human Resources professional focused on recruitment, assessment, and people development, with a strong eye on the quality of human resources across branches.",
    "hero.ctaProfile": "View My Profile",
    "hero.ctaCv": "Download CV",
    "hero.cvUnavailable": "CV coming soon",
    "hero.photoPlaceholder": "Profile photo not added yet",
    "hero.scroll": "Scroll down",

    "about.eyebrow": "About Me",
    "about.title": "Developing people, upholding quality standards.",
    "about.p1":
      "I am a Human Resources professional focused on Recruitment, Assessment, Training, and quality control of human resources at the branch level.",
    "about.p2":
      "My work covers competency assessment, developing the quality of our people, and monitoring and controlling branches so that HR standards and quality consistently meet the company's needs.",
    "about.focus": "Areas of Focus",
    "about.hr.title": "Human Resources",
    "about.hr.text": "Supporting people management that fits the company's needs.",
    "about.rec.title": "Recruitment",
    "about.rec.text": "Supporting candidate selection and evaluation.",
    "about.ass.title": "Employee Assessment",
    "about.ass.text": "Measuring individual competence and readiness in a structured way.",
    "about.ld.title": "Learning & Development",
    "about.ld.text": "Delivering training and developing the quality of human resources.",
    "about.qc.title": "Branch Monitoring & HR Quality Control",
    "about.qc.text": "Evaluating how HR standards and quality are applied at branches.",

    "exp.eyebrow": "Experience",
    "exp.title": "Work Experience",
    "exp.current": "Current position",
    "exp.periodPlaceholder": "Employment period not set yet",
    "exp.responsibilities": "Responsibilities",

    "skills.eyebrow": "Skills",
    "skills.title": "Competencies & Skills",
    "skills.intro": "The areas of expertise I draw on in my day-to-day work.",

    "cert.eyebrow": "Certificates & Documents",
    "cert.title": "Certificates and Supporting Documents",
    "cert.intro":
      "Training certificates and professional documents that support my career journey.",
    "cert.filter.label": "Filter documents",
    "cert.filter.all": "All",
    "cert.filter.certificate": "Certificates",
    "cert.filter.training": "Training",
    "cert.filter.other": "Other Documents",
    "cert.cat.certificate": "Certificate",
    "cert.cat.training": "Training",
    "cert.cat.other": "Other Document",
    "cert.view": "View",
    "cert.download": "Download",
    "cert.openNewTab": "Open in new tab",
    "cert.openWord": "Open document",
    "cert.empty.title": "No documents yet",
    "cert.empty.text":
      "Certificates and supporting documents will appear here once they are added.",
    "cert.emptyFilter.title": "No documents in this category",
    "cert.emptyFilter.text": "Choose another category to see the available documents.",
    "cert.preview": "Preview",
    "cert.imageError": "Image could not be loaded",

    "cv.eyebrow": "Curriculum Vitae",
    "cv.title": "CV / Resume",
    "cv.text": "View or download my latest CV for a summary of my professional background.",
    "cv.view": "View CV",
    "cv.download": "Download CV",
    "cv.unavailable.title": "CV not available yet",
    "cv.unavailable.text":
      "My CV is being prepared. Please reach out through the contact section for more information.",

    "social.eyebrow": "Social Media",
    "social.title": "Connect with Me",
    "social.unavailable": "Coming soon",
    "social.openIn": "Open {name} in a new tab",

    "contact.eyebrow": "Contact",
    "contact.title": "Let's talk.",
    "contact.text":
      "For collaboration, training needs, or other professional opportunities, feel free to get in touch.",
    "contact.email": "Email",
    "contact.emailMissing": "Email address has not been set",
    "contact.contactMe": "Contact Me",
    "contact.sendEmail": "Send Email",
    "contact.gmail": "Open in Gmail",
    "contact.note":
      "The buttons above open your email app or Gmail with a draft message. You send the email yourself.",
    "contact.emailUnavailable":
      "Email features will be enabled once an email address is added.",

    "footer.nav": "Footer navigation",
    "footer.rights": "All Rights Reserved.",
    "footer.top": "Back to top",
    "nav.top": "Back to top"
  }
};
