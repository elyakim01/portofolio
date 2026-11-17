/* ==========================================================================
   DATA SURAT LAMARAN – dipakai oleh surat.html.
   Fakta harus sama dengan cvdata.js. Jangan menulis hal yang tidak benar-benar
   kamu miliki. Generator hanya merangkai kalimat dari data ini.
   ========================================================================== */
var LET = {
  person: {
    name: 'Elyakim Nahampun, S.Kom.',
    ttl: 'Patumbak, 24 Agustus 2004',
    phone: '0877-5020-6133',
    email: 'elyakim.01na@gmail.com',
    address: { id: 'Patumbak, Deli Serdang, Sumatera Utara', en: 'Patumbak, Deli Serdang, North Sumatra, Indonesia' },
    linkedin: 'linkedin.com/in/elyakim-nahampun-48015a429',
    linkedinUrl: 'https://www.linkedin.com/in/elyakim-nahampun-48015a429/',
    site: 'portofolio-one-omega-14.vercel.app',
    siteUrl: 'https://portofolio-one-omega-14.vercel.app',
    edu: { id: 'S1 Sistem Informasi, STMIK Triguna Dharma (IPK 3,53, Dengan Pujian)', en: 'Bachelor of Information Systems, STMIK Triguna Dharma (GPA 3.53, Cum Laude)' }
  },

  /* posisi bawaan per bidang (bisa diganti di form) */
  role: { umum: 'Staff', admin: 'Staff Administrasi', logistik: 'Staff Gudang / Inventory', it: 'Staff IT / Web Developer', frontliner: 'Teller / Customer Service' },
  roleEn: { umum: 'Staff', admin: 'Administrative Staff', logistik: 'Warehouse / Inventory Staff', it: 'IT Staff / Web Developer', frontliner: 'Teller / Customer Service' },

  /* paragraf inti per bidang: 2 paragraf pendek, berisi fakta terukur */
  fit: {
    umum: {
      id: [
        'Saya lulusan S1 Sistem Informasi STMIK Triguna Dharma (IPK 3,53, Dengan Pujian). Di Lazada Indonesia (Februari 2025 – Juni 2026), saya menangani inbound, putaway, cycle count bulanan, dan outbound dengan capaian rata-rata ±700 pcs/jam (target perusahaan 500 pcs/jam). Di KPU Kabupaten Deli Serdang (Juni 2024 – Januari 2025), saya mengelola dan memutakhirkan 15.927 data pemilih serta berkoordinasi dengan berbagai pihak.',
        'Saya terampil menggunakan Microsoft Office, khususnya Excel, memahami dasar pengembangan web (PHP, MySQL), dan memiliki skor TOEFL Prediction 627. Saya teliti, disiplin, dan dapat bekerja mandiri maupun dalam tim.'
      ],
      en: [
        'I hold a Bachelor of Information Systems from STMIK Triguna Dharma (GPA 3.53, Cum Laude). At Lazada Indonesia (February 2025 – June 2026), I handled inbound, putaway, monthly cycle counts, and outbound, averaging ±700 pcs/hour against a company target of 500 pcs/hour. At the KPU of Deli Serdang Regency (June 2024 – January 2025), I managed and updated 15,927 voter records and coordinated with various parties.',
        'I am proficient in Microsoft Office, especially Excel, understand the basics of web development (PHP, MySQL), and hold a TOEFL Prediction score of 627. I am detail-oriented, disciplined, and able to work both independently and in a team.'
      ]
    },
    admin: {
      id: [
        'Saya lulusan S1 Sistem Informasi STMIK Triguna Dharma (IPK 3,53, Dengan Pujian) yang terbiasa menangani data dan dokumen secara teliti. Di KPU Kabupaten Deli Serdang (Juni 2024 – Januari 2025), saya mengelola dan memutakhirkan 15.927 data pemilih, mengelola dokumen dan administrasi kegiatan, serta berkoordinasi dengan KPU, PPK, Panwas, KPPS, dan pemerintah setempat. Di Lazada Indonesia (Februari 2025 – Juni 2026), saya menjaga ketepatan data stok melalui cycle count bulanan.',
        'Saya terampil menggunakan Microsoft Office, khususnya Excel dan spreadsheet, serta terbiasa berkomunikasi dengan berbagai pihak. Skor TOEFL Prediction saya 627.'
      ],
      en: [
        'I hold a Bachelor of Information Systems from STMIK Triguna Dharma (GPA 3.53, Cum Laude) and am used to handling data and documents with care. At the KPU of Deli Serdang Regency (June 2024 – January 2025), I managed and updated 15,927 voter records, handled documents and administration for committee activities, and coordinated with the KPU, sub-district election committee, election supervisors, polling station officers, and local government. At Lazada Indonesia (February 2025 – June 2026), I kept stock data accurate through monthly cycle counts.',
        'I am proficient in Microsoft Office, especially Excel and spreadsheets, and comfortable communicating with many parties. My TOEFL Prediction score is 627.'
      ]
    },
    logistik: {
      id: [
        'Saya lulusan S1 Sistem Informasi STMIK Triguna Dharma (IPK 3,53) dengan pengalaman sekitar 1,5 tahun di operasional gudang Lazada Indonesia (Februari 2025 – Juni 2026): inbound, putaway, cycle count bulanan, dan outbound, dengan capaian rata-rata ±700 pcs/jam (target perusahaan 500 pcs/jam, tertinggi 800 pcs/jam). Saya pernah menggantikan peran pengawas dan terbiasa menjaga ketepatan data stok.',
        'Sebelumnya, di KPU Kabupaten Deli Serdang (Juni 2024 – Januari 2025), saya mengelola dan memutakhirkan 15.927 data pemilih. Saya terampil menggunakan Microsoft Office, khususnya Excel, dan terbiasa bekerja dengan target.'
      ],
      en: [
        'I hold a Bachelor of Information Systems from STMIK Triguna Dharma (GPA 3.53) and have about 1.5 years of warehouse operations experience at Lazada Indonesia (February 2025 – June 2026): inbound, putaway, monthly cycle counts, and outbound, averaging ±700 pcs/hour against a company target of 500 pcs/hour (peak 800 pcs/hour). I have stepped in as supervisor and am used to keeping stock data accurate.',
        'Previously, at the KPU of Deli Serdang Regency (June 2024 – January 2025), I managed and updated 15,927 voter records. I am proficient in Microsoft Office, especially Excel, and comfortable working to targets.'
      ]
    },
    it: {
      id: [
        'Saya lulusan S1 Sistem Informasi STMIK Triguna Dharma (IPK 3,53, Dengan Pujian) yang membangun sistem berbasis web dengan PHP, MySQL, JavaScript, dan Bootstrap. Proyek saya antara lain Website Administrasi Desa Patumbak Kampung dan sistem pakar diagnosis perlemakan hati dengan metode Fuzzy Tsukamoto (skripsi). Saya juga meraih Juara 2 Lomba Pengembangan Website HUT ke-80 RI (2025).',
        'Dari pengalaman kerja di Lazada Indonesia dan KPU Kabupaten Deli Serdang, saya memahami pengelolaan data dan proses operasional. Saya memiliki sertifikasi Google Analytics dan Google Ads, serta skor TOEFL Prediction 627.'
      ],
      en: [
        'I hold a Bachelor of Information Systems from STMIK Triguna Dharma (GPA 3.53, Cum Laude) and build web-based systems with PHP, MySQL, JavaScript, and Bootstrap. My projects include the Patumbak Kampung Village Administration Website and a fatty liver diagnosis expert system using the Tsukamoto fuzzy method (my thesis). I also won 2nd Place in the Website Development Competition for the 80th Indonesian Independence Day (2025).',
        'From my work at Lazada Indonesia and the KPU of Deli Serdang Regency, I understand data management and operational processes. I hold Google Analytics and Google Ads certifications and a TOEFL Prediction score of 627.'
      ]
    },
    frontliner: {
      id: [
        'Saya lulusan S1 Sistem Informasi STMIK Triguna Dharma (IPK 3,53, Dengan Pujian). Di KPU Kabupaten Deli Serdang (Juni 2024 – Januari 2025), saya berhubungan langsung dengan masyarakat melalui sosialisasi dan berkoordinasi dengan berbagai pihak. Di Lazada Indonesia (Februari 2025 – Juni 2026), saya terbiasa bekerja dengan target (rata-rata ±700 pcs/jam dari target 500 pcs/jam) dan menjaga ketepatan data.',
        'Saya pernah menjadi Kepala Bidang Pelayanan di Ikatan Mahasiswa Kristen STMIK Triguna Dharma, terampil menggunakan Microsoft Office, dan memiliki skor TOEFL Prediction 627. Saya teliti, ramah, dan terbiasa menangani data dengan hati-hati.'
      ],
      en: [
        'I hold a Bachelor of Information Systems from STMIK Triguna Dharma (GPA 3.53, Cum Laude). At the KPU of Deli Serdang Regency (June 2024 – January 2025), I dealt directly with the public through outreach and coordinated with many parties. At Lazada Indonesia (February 2025 – June 2026), I worked to targets (averaging ±700 pcs/hour against a target of 500) and kept data accurate.',
        'I served as Head of Service Division in a student organization, am proficient in Microsoft Office, and hold a TOEFL Prediction score of 627. I am detail-oriented, approachable, and careful with data.'
      ]
    }
  }
};
