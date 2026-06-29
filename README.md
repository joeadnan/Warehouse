# Warehouse Staff Portfolio React

Website portfolio pribadi untuk menampilkan kemampuan, project, studi kasus, dokumentasi, dan pembelajaran di bidang Warehouse Staff.

## Tentang Project

Project ini dibuat berdasarkan referensi portfolio sebelumnya, kemudian diubah menjadi portfolio Warehouse Staff menggunakan React, TypeScript, Vite, dan Tailwind CSS.

Portfolio ini cocok untuk menampilkan kesiapan sebagai Warehouse Staff, Inventory Staff, Stock Keeper, atau Logistics Assistant.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- HTML
- CSS

## Fitur Portfolio

- Hero section profesional untuk Warehouse Staff
- About section dengan positioning transisi dari pengalaman support/admin ke gudang
- Skill Warehouse Staff: inventory control, stock opname, inbound-outbound, picking-packing, dokumentasi, safety
- Tools section: Excel, stock card, checklist, barcode label, warehouse process, 5S
- Experience section yang ditulis ulang agar relevan dengan Warehouse Staff
- Documentation samples untuk operasional gudang
- Workflow gudang dari dokumen sampai report
- Project & case study Warehouse Staff
- Learning roadmap
- Certification cards dengan gambar
- Contact section
- Responsive layout
- SEO meta tags dasar

## Project Warehouse Staff yang Ditampilkan

### 1. Stock Opname & Inventory Accuracy Report

Studi kasus stock opname untuk membandingkan stok fisik dengan catatan stok, membuat laporan selisih, dan rekomendasi follow-up.

### 2. Inbound Receiving Quality Check

Studi kasus penerimaan barang agar quantity, kondisi fisik, kode barang, dan dokumen sesuai sebelum barang masuk stok.

### 3. Picking, Packing & Dispatch Control

Studi kasus outbound untuk mengurangi risiko salah barang, salah quantity, atau packing kurang aman saat pengiriman.

### 4. Slow Moving & Minimum Stock Monitoring

Studi kasus monitoring barang low stock dan slow moving agar restock dan penyimpanan lebih efisien.

## Struktur Penting

```txt
src/data/portfolio.ts              # Data utama portfolio
src/components/                    # Komponen React
public/documents/                  # Dokumentasi pendukung
public/certifications/             # Gambar sertifikasi / learning cards
```

## Cara Menjalankan Project

```bash
npm install
npm run dev
```

Build production:

```bash
npm run build
```

Preview hasil build:

```bash
npm run preview
```

## Catatan Penyesuaian

Silakan ubah bagian berikut sesuai data asli:

- `src/data/portfolio.ts` untuk nama, kontak, pengalaman, project, sertifikasi, dan link CV.
- `public/documents/CV_Mohammad_Hasim_Adnan.pdf` dengan CV terbaru sesuai role.
- `index.html` untuk URL domain saat sudah deploy.
- Link GitHub pada `profile.github` setelah repository dibuat.
