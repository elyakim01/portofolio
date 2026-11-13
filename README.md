# Portofolio Elyakim Nahampun

Website statis (HTML + CSS + JS), tanpa build step.

## Struktur
- `index.html`   : kerangka halaman
- `css/style.css`: tampilan
- `js/data.js`   : SEMUA konten (edit di sini)
- `js/app.js`    : logika (render, modal, animasi)
- `img/`         : gambar; nama file lihat `img/DAFTAR-NAMA-FILE.txt`

## Cara edit gambar
Taruh file di `img/` sesuai nama id (mis. `img/lazada.webp`). Tidak perlu ubah kode.

## Jalankan lokal
VS Code → ekstensi Live Server → klik kanan `index.html` → Open with Live Server.

## Deploy ke Vercel
Opsi A (paling mudah): push folder ini ke GitHub → vercel.com → Add New Project → pilih repo.
  Framework Preset: "Other". Build Command & Output Directory: kosongkan. Deploy.
Opsi B: `npm i -g vercel`, lalu jalankan `vercel` di folder ini.

Catatan: Vercel membedakan huruf besar/kecil. `Lazada.webp` ≠ `lazada.webp`.
