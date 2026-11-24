/* ==========================================================================
   DATA CV – dipakai oleh cv.html untuk membuat CV ATS otomatis.
   Fakta di sini harus selaras dengan data.js (PORTFOLIO). Kalau kamu mengubah
   pengalaman/proyek/sertifikat di data.js, sesuaikan juga kalimatnya di sini.
   File ini juga berisi kontak, ringkasan, dan PILIHAN apa yang ditonjolkan
   untuk tiap bidang lamaran.

   Aturan: jangan menulis hal yang tidak benar-benar kamu miliki.
   Generator hanya MEMILIH dan MENGURUTKAN dari data ini, tidak mengarang.
   ========================================================================== */

var CV = {

  person: {
    name: 'Elyakim Nahampun, S.Kom.',
    phone: '0877-5020-6133',
    email: 'elyakim.01na@gmail.com',
    linkedin: 'linkedin.com/in/elyakim-nahampun-48015a429',
    linkedinUrl: 'https://www.linkedin.com/in/elyakim-nahampun-48015a429/',
    location: 'Patumbak, Deli Serdang, Sumatera Utara',
    site: 'portofolio-one-omega-14.vercel.app',
    siteUrl: 'https://portofolio-one-omega-14.vercel.app'
  },

  edu: {
    school: 'STMIK Triguna Dharma',
    degree: 'S1 Sistem Informasi',
    period: 'Juli 2022 – Juli 2026',
    note: 'IPK 3,53 (Dengan Pujian)'
  },

  /* ---------- Pengalaman: semua butir yang tersedia (id → kalimat) ---------- */
  exp: {
    lazada: {
      role: 'Warehouse Operations Staff',
      org: 'Lazada Indonesia, Tanjung Morawa, Deli Serdang',
      period: 'Februari 2025 – Juni 2026',
      b: {
        inbound:  'Menerima barang inbound menggunakan laptop, memastikan barang fisik sesuai data penerimaan.',
        putaway:  'Melakukan putaway ke lokasi inventory; capaian rata-rata ±700 pcs/jam (target perusahaan 500 pcs/jam, tertinggi 800 pcs/jam).',
        stock:    'Mencari dan memindahkan stok untuk menjaga ketepatan lokasi dan jumlah barang.',
        cc:       'Melakukan cycle count bulanan untuk mencocokkan stok fisik dengan data sistem.',
        outbound: 'Memproses outbound (picking, packing, handover) sesuai pesanan.',
        admin:    'Menata barang dan mendukung administrasi gudang.',
        team:     'Berkoordinasi dengan tim untuk menjaga kelancaran operasional.',
        sup:      'Pernah menggantikan peran pengawas (RW) saat dibutuhkan.'
      }
    },
    kpu: {
      role: 'Anggota Panitia Pemungutan Suara (PPS)',
      org: 'KPU Kabupaten Deli Serdang (Desa Patumbak Kampung)',
      period: 'Juni 2024 – Januari 2025',
      b: {
        data:   'Mengelola dan memutakhirkan 15.927 data pemilih di tingkat desa/kelurahan.',
        verif:  'Melakukan verifikasi faktual melalui survei lapangan, memilah data yang sesuai dan tidak sesuai (pemilih meninggal dunia, pindah domisili, perubahan Kartu Keluarga).',
        koor:   'Berkoordinasi dengan KPU, PPK, Panwas, KPPS, petugas keamanan, dan pemerintah setempat.',
        sos:    'Melaksanakan sosialisasi kepada masyarakat umum di wilayah tugas.',
        doc:    'Mengelola dokumen dan administrasi kegiatan.',
        rekrut: 'Terlibat dalam rekrutmen, seleksi, penetapan, dan pelantikan anggota KPPS.'
      }
    },
    imk: {
      role: 'Kepala Bidang Pelayanan',
      org: 'Ikatan Mahasiswa Kristen, STMIK Triguna Dharma',
      period: '',
      b: {
        koor:  'Mengoordinasikan dan melaksanakan kegiatan bidang pelayanan.',
        kolab: 'Berkolaborasi dengan kampus lain dalam penyelenggaraan kegiatan ibadah.',
        acara: 'Terlibat dalam penyelenggaraan acara besar seperti Paskah.'
      }
    }
  },

  /* ---------- Proyek ---------- */
  projects: {
    desa: {
      name: 'Website Administrasi Desa Patumbak Kampung',
      stack: 'PHP, MySQL, JavaScript, HTML, CSS, Bootstrap',
      line: 'Sistem informasi administrasi desa: pengelolaan data penduduk, surat-menyurat, dokumen administrasi, dan pengaduan masyarakat. Dikerjakan bersama tim.',
      short: 'Sistem informasi administrasi dan layanan desa (data penduduk, surat-menyurat, pengaduan).',
      url: 'https://desapatumbakkampung.infinityfreeapp.com/?i=1'
    },
    pakar: {
      name: 'Sistem Pakar Diagnosis Perlemakan Hati (Skripsi)',
      stack: 'PHP, MySQL, HTML, CSS, JavaScript, Fuzzy Tsukamoto',
      line: 'Sistem pakar berbasis web untuk membantu diagnosis awal penyakit perlemakan hati menggunakan metode Fuzzy Tsukamoto.',
      short: 'Sistem pakar diagnosis perlemakan hati dengan metode Fuzzy Tsukamoto.',
      url: ''
    }
  },

  /* ---------- Sertifikasi (satu baris per kelompok) ---------- */
  certs: {
    gads:  'Google Ads Search Certification, Google (2026)',
    gana:  'Google Analytics Certification, Google (2026)',
    ibm:   'IBM SkillsBuild: Data Fundamentals; Project Management Fundamentals; Getting Started with Generative AI (2026)',
    web:   'Web Programming Competency Certificate, STMIK Triguna Dharma (2025)',
    toefl: 'TOEFL Prediction Test, TOEFL Academy, skor 627 (2026)',
    xlf:   'Microsoft Excel Fundamentals (With Distinction, skor 90%), Science of Apps (2026)',
    xld:   'Excel Dashboard for Beginners, Simplilearn SkillUP (2026)',
    gnik:  'GNIK Essential Skills, Program Magang Nasional: Digital Literacy (100), Social Influence (100), Self Efficacy (90) (2026)'
  },

  awards: {
    web:  'Juara 2 Lomba Pengembangan Website HUT ke-80 Republik Indonesia (2025)',
    kpu:  'Penghargaan dari KPU Provinsi Sumatera Utara (2025)'
  },

  /* ---------- Kumpulan keahlian + sinonim untuk pencocokan lowongan ---------- */
  skillGroups: ['Administrasi & Data', 'Operasional & Gudang', 'Teknologi', 'Pribadi & Interpersonal'],
  skills: [
    { n: 'Microsoft Office (Word, Excel)', g: 0, syn: ['microsoft office', 'ms office', 'ms excel', 'microsoft excel', 'excel', 'ms word', 'microsoft word', 'word', 'office'] },
    { n: 'Spreadsheet', g: 0, syn: ['spreadsheet', 'google sheets', 'google spreadsheet'] },
    { n: 'Data Entry', g: 0, syn: ['data entry', 'input data', 'entri data'] },
    { n: 'Pengelolaan Data', g: 0, syn: ['pengelolaan data', 'manajemen data', 'data management', 'pengolahan data', 'rekap data', 'pelaporan'] },
    { n: 'Administrasi Dokumen', g: 0, syn: ['administrasi', 'dokumen', 'arsip', 'pengarsipan', 'filing', 'surat-menyurat', 'korespondensi'] },
    { n: 'Verifikasi dan Validasi Data', g: 0, syn: ['verifikasi', 'validasi', 'rekonsiliasi', 'pencocokan data'] },

    { n: 'Inventory Management', g: 1, syn: ['inventory', 'inventori', 'persediaan', 'stok', 'stock', 'warehouse', 'gudang'] },
    { n: 'Inbound & Outbound', g: 1, syn: ['inbound', 'outbound', 'receiving', 'penerimaan barang', 'pengiriman', 'dispatch', 'handover'] },
    { n: 'Cycle Count / Stock Opname', g: 1, syn: ['cycle count', 'stock opname', 'stok opname', 'opname'] },
    { n: 'Picking & Packing', g: 1, syn: ['picking', 'packing', 'pick and pack', 'putaway', 'put away'] },
    { n: 'Logistik', g: 1, syn: ['logistik', 'logistics', 'supply chain', 'rantai pasok', 'operasional'] },

    { n: 'PHP', g: 2, syn: ['php', 'laravel', 'codeigniter'] },
    { n: 'MySQL', g: 2, syn: ['mysql', 'sql', 'database', 'basis data', 'mariadb'] },
    { n: 'JavaScript', g: 2, syn: ['javascript', 'js'] },
    { n: 'HTML & CSS', g: 2, syn: ['html', 'css', 'html5', 'css3', 'frontend', 'front-end', 'front end'] },
    { n: 'Bootstrap', g: 2, syn: ['bootstrap'] },
    { n: 'Web Development', g: 2, syn: ['web development', 'web developer', 'pengembangan web', 'website', 'web programming', 'full stack', 'fullstack', 'backend', 'back-end'] },
    { n: 'Sistem Informasi', g: 2, syn: ['sistem informasi', 'information system', 'information systems', 'it support', 'analis sistem', 'system analyst'] },
    { n: 'Fuzzy Logic (Tsukamoto)', g: 2, syn: ['fuzzy', 'sistem pakar', 'expert system', 'artificial intelligence', 'kecerdasan buatan'] },
    { n: 'Google Analytics & Google Ads', g: 2, syn: ['google analytics', 'google ads', 'digital marketing', 'sem', 'seo', 'analytics'] },
    { n: 'Dasar Manajemen Proyek (IBM)', g: 2, syn: ['manajemen proyek', 'project management', 'project'] },

    { n: 'Komunikasi', g: 3, syn: ['komunikasi', 'communication', 'komunikatif', 'customer service', 'pelayanan pelanggan', 'layanan pelanggan', 'pelayanan', 'frontliner', 'front liner', 'teller', 'nasabah', 'pelanggan'] },
    { n: 'Pelayanan dan Sosialisasi kepada Masyarakat', g: 3, syn: ['sosialisasi', 'pelayanan', 'layanan', 'masyarakat', 'customer service', 'pelanggan', 'nasabah', 'frontliner', 'teller'] },
    { n: 'Kerja Tim & Koordinasi', g: 3, syn: ['kerja tim', 'teamwork', 'team work', 'koordinasi', 'kolaborasi', 'kerjasama', 'kerja sama'] },
    { n: 'Ketelitian', g: 3, syn: ['teliti', 'ketelitian', 'detail', 'akurat', 'akurasi', 'cermat'] },
    { n: 'Manajemen Waktu', g: 3, syn: ['manajemen waktu', 'time management', 'target', 'deadline', 'tenggat'] },
    { n: 'Problem Solving', g: 3, syn: ['problem solving', 'pemecahan masalah', 'analitis', 'analytical'] },
    { n: 'Adaptif', g: 3, syn: ['adaptif', 'adaptable', 'adaptasi', 'fleksibel', 'belajar cepat', 'fast learner'] },
    { n: 'Bahasa Inggris (TOEFL 627)', g: 3, syn: ['bahasa inggris', 'english', 'toefl'] }
  ],

  /* Istilah yang sering diminta lowongan tetapi TIDAK ada di datamu.
     Kalau muncul di lowongan, generator hanya memberi peringatan (tidak menambahkannya). */
  watch: ['python', 'power bi', 'tableau', 'figma', 'autocad', 'accurate', 'zahir', 'sap', 'wms', 'forklift', 'kasir',
          'react', 'java', 'laravel', 'node.js', 'photoshop', 'canva', 'sim a', 'sim c', 'pengalaman kerja minimal',
          'cash handling', 'perbankan', 'banking', 'akuntansi', 'pajak', 'jaringan', 'networking', 'mikrotik'],

  /* ---------- Profil per bidang lamaran ---------- */
  profiles: {

    umum: {
      file: 'Umum',
      label: 'Umum (semua bidang)',
      title: 'Lulusan S1 Sistem Informasi',
      summary: 'Lulusan S1 Sistem Informasi (IPK 3,53, dengan pujian) dengan pengalaman operasional gudang dan inventory di Lazada Indonesia serta pendataan dan administrasi pemilih di KPU Kabupaten Deli Serdang. Terampil dalam Microsoft Office, pengelolaan data, dan pengembangan web (PHP, MySQL). Juara 2 Lomba Pengembangan Website HUT ke-80 RI (2025). Teliti, disiplin, dan mampu bekerja mandiri maupun dalam tim.',
      sections: ['exp', 'edu', 'proj', 'skill', 'cert', 'award', 'org'],
      bullets: {
        lazada: ['putaway', 'inbound', 'cc', 'outbound', 'team'],
        kpu: ['data', 'verif', 'koor', 'sos', 'doc'],
        imk: ['koor', 'kolab', 'acara']
      },
      projects: ['desa', 'pakar'],
      certs: ['xlf', 'gads', 'gana', 'web', 'ibm', 'toefl', 'xld', 'gnik'],
      awards: ['web', 'kpu'],
      skills: ['Microsoft Office (Word, Excel)', 'Spreadsheet', 'Data Entry', 'Pengelolaan Data', 'Administrasi Dokumen',
               'Inventory Management', 'Cycle Count / Stock Opname',
               'PHP', 'MySQL', 'JavaScript', 'HTML & CSS', 'Web Development',
               'Komunikasi', 'Kerja Tim & Koordinasi', 'Ketelitian', 'Manajemen Waktu', 'Problem Solving', 'Adaptif', 'Bahasa Inggris (TOEFL 627)']
    },

    admin: {
      file: 'Admin',
      label: 'Administrasi & Pengelolaan Data',
      title: 'Lulusan S1 Sistem Informasi',
      summary: 'Lulusan S1 Sistem Informasi (IPK 3,53, dengan pujian) dengan pengalaman mengelola dan memutakhirkan 15.927 data pemilih serta administrasi dokumen di KPU Kabupaten Deli Serdang, dan menjaga ketepatan data stok melalui cycle count di Lazada Indonesia. Terampil dalam Microsoft Office, spreadsheet, dan data entry. Teliti, disiplin, dan terbiasa berkoordinasi dengan banyak pihak.',
      sections: ['exp', 'edu', 'skill', 'cert', 'award', 'org', 'proj'],
      bullets: {
        kpu: ['data', 'verif', 'doc', 'koor', 'rekrut'],
        lazada: ['cc', 'inbound', 'admin', 'stock', 'team'],
        imk: ['koor', 'kolab']
      },
      projects: ['desa'],
      certs: ['xlf', 'gana', 'ibm', 'xld', 'gnik', 'web', 'toefl', 'gads'],
      awards: ['kpu', 'web'],
      skills: ['Microsoft Office (Word, Excel)', 'Spreadsheet', 'Data Entry', 'Pengelolaan Data', 'Administrasi Dokumen', 'Verifikasi dan Validasi Data',
               'Inventory Management', 'Cycle Count / Stock Opname', 'MySQL', 'Sistem Informasi',
               'Ketelitian', 'Kerja Tim & Koordinasi', 'Komunikasi', 'Manajemen Waktu', 'Adaptif', 'Bahasa Inggris (TOEFL 627)']
    },

    logistik: {
      file: 'Warehouse',
      label: 'Warehouse, Logistik & Inventory',
      title: 'Lulusan S1 Sistem Informasi',
      summary: 'Lulusan S1 Sistem Informasi (IPK 3,53) dengan sekitar 1,5 tahun pengalaman operasional gudang di Lazada Indonesia: inbound, putaway, cycle count, dan outbound, dengan capaian rata-rata ±700 pcs/jam (target 500 pcs/jam). Teliti pada data stok, terbiasa bekerja dengan target, dan pernah menggantikan peran pengawas.',
      sections: ['exp', 'skill', 'edu', 'cert', 'award', 'org', 'proj'],
      bullets: {
        lazada: ['putaway', 'inbound', 'stock', 'cc', 'outbound', 'sup', 'admin', 'team'],
        kpu: ['data', 'verif', 'koor'],
        imk: ['koor', 'acara']
      },
      projects: [],
      certs: ['xlf', 'ibm', 'xld', 'gnik', 'toefl', 'gana', 'web'],
      awards: ['kpu', 'web'],
      skills: ['Inventory Management', 'Inbound & Outbound', 'Cycle Count / Stock Opname', 'Picking & Packing', 'Logistik',
               'Microsoft Office (Word, Excel)', 'Spreadsheet', 'Data Entry', 'Administrasi Dokumen', 'Dasar Manajemen Proyek (IBM)',
               'Kerja Tim & Koordinasi', 'Ketelitian', 'Manajemen Waktu', 'Adaptif', 'Problem Solving']
    },

    it: {
      file: 'IT',
      label: 'IT, Web Developer & Sistem Informasi',
      title: 'Lulusan S1 Sistem Informasi',
      summary: 'Lulusan S1 Sistem Informasi (IPK 3,53, dengan pujian) yang membangun sistem berbasis web dengan PHP, MySQL, JavaScript, dan Bootstrap, termasuk website administrasi desa dan sistem pakar Fuzzy Tsukamoto (skripsi). Juara 2 Lomba Pengembangan Website HUT ke-80 RI (2025). Memahami pengelolaan data dan proses operasional dari pengalaman kerja, serta bersertifikat Google Analytics dan Google Ads.',
      sections: ['proj', 'edu', 'skill', 'exp', 'cert', 'award', 'org'],
      bullets: {
        lazada: ['putaway', 'cc', 'team'],
        kpu: ['data', 'verif', 'koor'],
        imk: ['koor']
      },
      projects: ['desa', 'pakar'],
      certs: ['web', 'gana', 'gads', 'ibm', 'toefl', 'xlf', 'xld', 'gnik'],
      awards: ['web', 'kpu'],
      skills: ['PHP', 'MySQL', 'JavaScript', 'HTML & CSS', 'Bootstrap', 'Web Development', 'Sistem Informasi', 'Fuzzy Logic (Tsukamoto)',
               'Google Analytics & Google Ads', 'Dasar Manajemen Proyek (IBM)',
               'Microsoft Office (Word, Excel)', 'Pengelolaan Data', 'Spreadsheet',
               'Problem Solving', 'Kerja Tim & Koordinasi', 'Adaptif', 'Ketelitian', 'Bahasa Inggris (TOEFL 627)']
    },

    frontliner: {
      file: 'Bank',
      label: 'Bank (Teller, CS)',
      title: 'Lulusan S1 Sistem Informasi',
      summary: 'Lulusan S1 Sistem Informasi (IPK 3,53, dengan pujian) dengan pengalaman berinteraksi langsung dengan masyarakat melalui sosialisasi dan koordinasi di KPU Kabupaten Deli Serdang, serta ketelitian dalam pencocokan data dan stok di Lazada Indonesia. Terbiasa bekerja dengan target (capaian rata-rata ±700 pcs/jam dari target 500), berkomunikasi dengan berbagai pihak, dan teliti dalam administrasi data. Pernah menjabat Kepala Bidang Pelayanan di organisasi mahasiswa.',
      sections: ['exp', 'org', 'edu', 'skill', 'cert', 'award'],
      bullets: {
        kpu: ['sos', 'koor', 'verif', 'data', 'doc'],
        lazada: ['cc', 'inbound', 'team', 'sup'],
        imk: ['koor', 'kolab', 'acara']
      },
      projects: [],
      certs: ['xlf', 'xld', 'gnik', 'toefl', 'gana', 'ibm', 'web'],
      awards: ['kpu', 'web'],
      skills: ['Komunikasi', 'Pelayanan dan Sosialisasi kepada Masyarakat', 'Kerja Tim & Koordinasi', 'Ketelitian', 'Adaptif', 'Manajemen Waktu', 'Bahasa Inggris (TOEFL 627)',
               'Verifikasi dan Validasi Data', 'Data Entry', 'Microsoft Office (Word, Excel)', 'Administrasi Dokumen', 'Pengelolaan Data', 'Cycle Count / Stock Opname']
    }
  }
};
