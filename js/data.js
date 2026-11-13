/* ==========================================================================
   DATA PORTOFOLIO – satu-satunya file yang perlu kamu edit untuk isi konten.

   GAMBAR OTOMATIS:
   Tiap item punya `id`. Cukup taruh gambar di folder img/ dengan nama:
     img/<id>.webp        → gambar utama
     img/<id>-doc.webp    → gambar dokumentasi (khusus proyek yang doc:true)
   Format .webp / .jpg / .jpeg / .png sama-sama dikenali.
   Gunakan huruf kecil semua (Vercel membedakan huruf besar/kecil).
   Kalau gambar belum ada, placeholder tampil otomatis, tidak ada error.

   FIELD KOSONG:
   Field yang diisi '' (kosong) tidak akan ditampilkan di web.
   Jadi tidak ada teks "[isi ...]" yang tampil ke rekruter.
   ========================================================================== */

var PORTFOLIO = {

  /* ---------- PENGALAMAN ---------- */
  exp: [
    {
      id: 'lazada',
      k: 'Pengalaman kerja',
      t: 'Warehouse Operations Staff',
      s: 'Lazada Indonesia',
      d: 'Februari 2025 – Juni 2026',
      /* tampilan jendela detail */
      org: 'Lazada Indonesia',
      role: 'Warehouse Operations Staff',
      pill: 'Februari 2025 – Juni 2026',
      short: 'Operasional gudang: inbound, inventory, dan outbound.',
      chips: ['±700 pcs/jam', 'RF &amp; barcode'],
      desc: 'Menjalankan operasional gudang yang mencakup proses inbound, inventory, dan outbound dengan dukungan perangkat scan (RF dan barcode scanner), dengan fokus pada produktivitas, ketelitian data stok, dan koordinasi tim.',
      pts: [
        'Menerima (receive) barang inbound menggunakan laptop dan barcode scanner, memastikan barang fisik sesuai data penerimaan.',
        'Putaway barang ke inventory dengan perangkat RF: target perusahaan 500 pieces per jam, capaian umum sekitar 700, tertinggi 800 pieces per jam.',
        'Mencari dan memindahkan stok dengan pemindaian barcode untuk memastikan ketepatan lokasi dan jumlah.',
        'Cycle count bulanan setelah campaign berakhir untuk mencocokkan stok fisik dengan data sistem.',
        'Memproses outbound (Picking, Packing, Handover) barang sesuai pesanan.',
        'Penataan barang dan dukungan administrasi gudang.',
        'Berkoordinasi dengan tim untuk menjaga kelancaran operasional.'
      ]
    },
    {
      id: 'kpu',
      k: 'Pengalaman kerja',
      t: 'Anggota PPS',
      s: 'KPU Kabupaten Deli Serdang',
      d: 'Juni 2024 – Januari 2025',
      org: 'PPS KPU Kabupaten Deli Serdang',
      role: 'Anggota Panitia Pemungutan Suara (PPS)',
      pill: 'Juni 2024 – Januari 2025',
      short: 'Administrasi dan pendataan pemilih tingkat desa.',
      chips: ['±21.000 data', 'Verifikasi lapangan'],
      desc: 'Berperan dalam pelaksanaan tahapan administrasi dan pendataan pemilih serta mendukung koordinasi penyelenggaraan Pemilu di tingkat desa/kelurahan.',
      pts: [
        'Mengelola dan memutakhirkan sekitar 21.000 data pemilih di tingkat desa/kelurahan.',
        'Melakukan koordinasi dengan KPU, PPK, Panwas, KPPS, petugas keamanan, dan pemerintah setempat.',
        'Melaksanakan sosialisasi kepada masyarakat umum di wilayah tugas untuk membangun penerimaan dan kelancaran pelaksanaan tugas PPS.',
        'Melakukan verifikasi faktual melalui survei lapangan, lalu memilah data pemilih yang sesuai dan tidak sesuai, misalnya karena pemilih meninggal dunia, pindah domisili, atau perubahan susunan Kartu Keluarga.',
        'Mengelola dokumen dan administrasi kegiatan.',
        'Terlibat dalam rekrutmen, seleksi, penetapan, dan pelantikan anggota KPPS.',
        'Melaksanakan kegiatan pendataan dan pemutakhiran data pemilih.'
      ]
    },
    {
      id: 'organisasi',
      k: 'Organisasi',
      t: 'Kepala Bidang Pelayanan',
      s: 'Ikatan Mahasiswa Kristen',
      d: 'Organisasi kampus',
      org: 'Ikatan Mahasiswa Kristen',
      role: 'Kepala Bidang Pelayanan',
      pill: '',                        // tidak ada periode di detail
      short: 'Koordinasi kegiatan dan kolaborasi antar kampus.',
      chips: ['Koordinasi', 'Acara besar'],
      desc: 'Aktif dalam kegiatan organisasi mahasiswa serta membantu koordinasi dan pelaksanaan kegiatan bidang pelayanan, termasuk berkolaborasi dengan kampus lain dalam penyelenggaraan kegiatan ibadah dan acara besar seperti Paskah.',
      pts: [
        'Mengoordinasikan dan melaksanakan kegiatan bidang pelayanan.',
        'Berkolaborasi dengan kampus lain dalam penyelenggaraan kegiatan ibadah.',
        'Terlibat dalam penyelenggaraan acara besar seperti Paskah.'
      ]
    }
  ],

  /* ---------- PROYEK ---------- */
  proj: [
    {
      id: 'desa-patumbak',
      doc: true,                       // true = tampilkan 2 gambar: <id>.webp dan <id>-doc.webp
      cap2: 'Dokumentasi',
      k: 'Proyek 01 · Web-Based System',
      t: 'Website Administrasi Desa Patumbak Kampung',
      short: 'Sistem informasi administrasi dan layanan desa.',
      desc: 'Sistem informasi administrasi desa untuk mendukung pengelolaan data penduduk, layanan administrasi, dan informasi desa.',
      tags: ['PHP', 'MySQL', 'JavaScript', 'HTML', 'CSS', 'Bootstrap'],
      url: 'https://desapatumbakkampung.infinityfreeapp.com/?i=1',
      btn: 'Buka website'
    },
    {
      id: 'sistem-pakar',
      doc: true,
      cap2: 'Dokumentasi',
      k: 'Proyek 02 · Skripsi',
      t: 'Sistem Pakar Diagnosis Perlemakan Hati',
      short: 'Skripsi dengan metode Fuzzy Tsukamoto.',
      desc: 'Sistem pakar berbasis web untuk membantu diagnosis awal penyakit perlemakan hati menggunakan metode Fuzzy Tsukamoto.',
      tags: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript', 'Fuzzy Tsukamoto'],
      url: '',
      btn: ''
    }
  ],

  /* ---------- PRESTASI & PENGHARGAAN (lomba, award; BUKAN sertifikat) ---------- */
  /* TODO: lengkapi s (penyelenggara) dan desc (keterangan). Biarkan '' kalau belum ada. */
  ach: [
    {
      id: 'juara-web-hut80',
      k: 'Prestasi',
      t: 'Juara 2 Lomba Pembuatan Website HUT ke-80 Republik Indonesia',
      d: '2025',
      s: '',
      desc: ''
    },
    {
      id: 'penghargaan-kpu',
      k: 'Penghargaan',
      t: 'Penghargaan dari KPU Provinsi Sumatera Utara',
      d: '2025',
      s: 'KPU Provinsi Sumatera Utara',
      desc: ''
    }
  ],

  /* ---------- SERTIFIKASI ----------
     logo   = nama file logo penerbit di img/ (tanpa ekstensi)
     url    = link ke file/halaman sertifikat
     verify = link verifikasi (Credly, Google Skillshop, dll.)
     web    = situs penerbit                                              */
  cert: [
    {
      id: 'google-ads',
      logo: 'logo-google-ads',
      k: 'Sertifikasi',
      t: 'Google Ads Search Certification',
      d: 'September 2026',
      iss: 'Google',
      issd: 'Perusahaan teknologi global asal Amerika Serikat, pengembang Google Search, Google Ads, dan Google Analytics.',
      desc: 'Sertifikasi kemampuan dasar membuat dan mengelola kampanye iklan di jaringan pencarian Google. Diterbitkan 22 September 2026, berlaku hingga 22 September 2027. ID sertifikat: 194854274.',
      url: '', verify: 'https://skillshop.credential.net/b1efa7fa-d1c0-4816-a0c4-73bf32f4c4dc#acc.H4yLU8OW', web: 'https://www.google.com'
    },
    {
      id: 'google-analytics',
      logo: 'logo-google-analytics',
      k: 'Sertifikasi',
      t: 'Google Analytics Certification',
      d: 'November 2026',
      iss: 'Google',
      issd: 'Perusahaan teknologi global asal Amerika Serikat, pengembang Google Search, Google Ads, dan Google Analytics.',
      desc: 'Sertifikasi kemampuan menganalisis data pengunjung situs dan aplikasi menggunakan Google Analytics. Diterbitkan 11 November 2026, berlaku hingga 11 November 2027. ID sertifikat: 200075037.',
      url: '', verify: 'https://skillshop.credential.net/f631b471-e939-4346-9fac-e0f63d239434#acc.YBOnuNdV', web: 'https://www.google.com'
    },
    {
      id: 'kompetensi-web',
      k: 'Sertifikasi',
      t: 'Web Programming Competency Certificate',
      d: '2025',
      iss: '',
      issd: '',
      desc: '',
      url: '', verify: '', web: ''
    },
    {
      id: 'toefl',
      logo: 'logo-toefl-academy',
      k: 'Sertifikasi',
      t: 'TOEFL Prediction Test',
      d: 'Skor 627',
      iss: 'TOEFL Academy',
      issd: 'Lembaga pelatihan dan tes prediksi TOEFL di Kabupaten Bandung, Jawa Barat.',
      desc: 'Tes prediksi kemampuan bahasa Inggris. Skor total 627: Listening Comprehension 60, Structure and Written Expression 65, Reading Comprehension 63.',
      url: '', verify: 'https://app.toeflacademy.id/certificate/81c8b0568f4ef53a21462b102b2bbf9cd360', web: ''
    },
    {
      id: 'ibm-data',
      logo: 'logo-ibm',
      k: 'Sertifikasi',
      t: 'IBM Data Fundamentals',
      d: 'September 2026',
      iss: 'IBM SkillsBuild',
      issd: 'Program pembelajaran dan sertifikasi digital dari IBM.',
      desc: 'Dasar-dasar data: konsep, jenis data, dan pemanfaatannya. Diterbitkan 23 September 2026.',
      url: '', verify: 'https://www.credly.com/badges/a7704528-833b-4268-b650-a9fe582b192b', web: 'https://skillsbuild.org'
    },
    {
      id: 'ibm-pm',
      logo: 'logo-ibm',
      k: 'Sertifikasi',
      t: 'IBM Project Management Fundamentals',
      d: 'September 2026',
      iss: 'IBM SkillsBuild',
      issd: 'Program pembelajaran dan sertifikasi digital dari IBM.',
      desc: 'Dasar-dasar manajemen proyek: tahapan, peran, dan alat yang digunakan. Diterbitkan 23 September 2026.',
      url: '', verify: 'https://www.credly.com/go/CSlAc3dj', web: 'https://skillsbuild.org'
    },
    {
      id: 'ibm-genai',
      logo: 'logo-ibm',
      k: 'Sertifikasi',
      t: 'IBM Getting Started with Generative AI',
      d: 'September 2026',
      iss: 'IBM SkillsBuild',
      issd: 'Program pembelajaran dan sertifikasi digital dari IBM.',
      desc: 'Pengenalan dasar generative AI dan pemanfaatannya. Diterbitkan 22 September 2026.',
      url: '', verify: 'https://www.credly.com/go/Ym713Ure', web: 'https://skillsbuild.org'
    },
    {
      id: 'gnik-self-efficacy',
      logo: 'logo-gnik',
      k: 'Sertifikasi',
      t: 'Essential Skills: Self Efficacy',
      d: 'November 2026',
      iss: 'GNIK',
      issd: 'Gerakan Nasional Indonesia Kompeten (GNIK), penyelenggara Pembekalan 12+ Essential Skills Program Magang Nasional.',
      desc: 'Pembekalan 12+ Essential Skills Program Magang Nasional, topik Self Efficacy. Nilai 90.',
      url: '', verify: '', web: ''
    },
    {
      id: 'gnik-digital-literacy',
      logo: 'logo-gnik',
      k: 'Sertifikasi',
      t: 'Essential Skills: Digital Literacy',
      d: 'November 2026',
      iss: 'GNIK',
      issd: 'Gerakan Nasional Indonesia Kompeten (GNIK), penyelenggara Pembekalan 12+ Essential Skills Program Magang Nasional, berkolaborasi dengan Kementerian Ketenagakerjaan RI.',
      desc: 'Pembekalan 12+ Essential Skills Program Magang Nasional, topik Digital Literacy. Nilai 100.',
      url: '', verify: '', web: ''
    },
    {
      id: 'gnik-social-influence',
      logo: 'logo-gnik',
      k: 'Sertifikasi',
      t: 'Essential Skills: Social Influence',
      d: 'November 2026',
      iss: 'GNIK',
      issd: 'Gerakan Nasional Indonesia Kompeten (GNIK), penyelenggara Pembekalan 12+ Essential Skills Program Magang Nasional.',
      desc: 'Pembekalan 12+ Essential Skills Program Magang Nasional, topik Social Influence. Nilai 100.',
      url: '', verify: '', web: ''
    }
  ],

  /* ---------- KEAHLIAN ---------- */
  skills: {
    'Teknis': [['🐘','PHP'],['🗄️','MySQL'],['⚡','JavaScript'],['🧱','HTML'],['🎨','CSS'],['🌐','Web Development'],['🧩','Database Management'],['🧠','Fuzzy Tsukamoto']],
    'Administrasi & Data': [['📊','Microsoft Excel'],['📝','Microsoft Word'],['📑','Spreadsheet'],['⌨️','Data Entry'],['🗂️','Data Management'],['📁','Administrasi Dokumen'],['📦','Inventory']],
    'Profesional': [['💬','Komunikasi'],['🤝','Kerja Tim'],['⏱️','Manajemen Waktu'],['🧭','Problem Solving'],['🔄','Adaptif'],['🔍','Ketelitian'],['📌','Koordinasi']]
  }
};
