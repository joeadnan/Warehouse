import { Certification, Experience } from "../types/portfolio";

export const profile = {
  name: "Mohammad Hasim Adnan",
  role: "Warehouse Staff",
  location: "Serang, Indonesia",
  status: "Warehouse Staff | 4+ Pengalaman Kerja",
  email: "hasyimjoe@gmail.com",
  phone: "083821359370",
  whatsapp: "https://wa.me/6283821359370",
  linkedin: "https://www.linkedin.com/in/mohammad-hasim-adnan/",
  github: "https://github.com/joeadnan/warehouse-staff-portfolio",
  cv: "/documents/CV_Mohammad_Hasim_Adnan.pdf",
  summary: "",
};

export const skills = [
  {
    title: "Inventory Control",
    items: [
      "Mencatat stok masuk dan keluar",
      "Memantau stok akhir dan stok minimum",
      "Membantu pengecekan selisih stok",
      "Menjaga akurasi data barang",
      "Membuat rekap stok sederhana",
    ],
  },
  {
    title: "Inbound & Receiving",
    items: [
      "Mengecek barang sesuai PO atau surat jalan",
      "Memeriksa jumlah dan kondisi fisik barang",
      "Mencatat barang rusak atau tidak sesuai",
      "Memberi label atau identitas barang",
      "Mengarahkan barang ke lokasi penyimpanan",
    ],
  },
  {
    title: "Outbound & Dispatch",
    items: [
      "Menyiapkan barang sesuai order",
      "Picking barang berdasarkan daftar permintaan",
      "Packing dengan aman dan rapi",
      "Final check sebelum pengiriman",
      "Mencatat barang keluar dan dokumen pendukung",
    ],
  },
  {
    title: "Warehouse Discipline",
    items: [
      "Menjaga kerapihan area kerja",
      "Mengikuti SOP dan checklist",
      "Menerapkan prinsip 5S dasar",
      "Komunikasi dengan tim operasional",
      "Teliti terhadap detail barang dan dokumen",
    ],
  },
];

export const workflow = [
  {
    step: "01",
    title: "Cek Dokumen & Instruksi",
    description:
      "Memahami PO, surat jalan, order list, atau instruksi kerja sebelum menerima atau mengeluarkan barang.",
  },
  {
    step: "02",
    title: "Pemeriksaan Barang",
    description:
      "Mengecek jumlah, kondisi fisik, kode barang, label, dan kesesuaian dengan dokumen agar tidak terjadi salah catat.",
  },
  {
    step: "03",
    title: "Pencatatan Stok",
    description:
      "Mencatat stok masuk, stok keluar, lokasi penyimpanan, dan temuan selisih secara rapi di form atau spreadsheet.",
  },
  {
    step: "04",
    title: "Penyimpanan & Penataan",
    description:
      "Menempatkan barang sesuai lokasi, kategori, atau kode agar mudah dicari dan aman dari kerusakan.",
  },
  {
    step: "05",
    title: "Picking, Packing, Dispatch",
    description:
      "Menyiapkan barang sesuai order, melakukan pengecekan akhir, packing rapi, dan memastikan dokumen pengiriman sesuai.",
  },
  {
    step: "06",
    title: "Report & Follow Up",
    description:
      "Membuat laporan stok, laporan selisih, barang rusak, atau kebutuhan restock untuk ditindaklanjuti oleh atasan.",
  },
];

export const projects = [
  {
    title: "Stock Opname & Inventory Accuracy Report",
    category: "Inventory Control",
    label: "Lab Practice",
    problem:
      "Gudang membutuhkan proses stock opname yang rapi agar selisih antara stok fisik dan catatan sistem dapat ditemukan dan ditindaklanjuti.",
    analysis: [
      "Membandingkan stok fisik dengan stok pada catatan atau spreadsheet.",
      "Mengelompokkan item yang cocok, selisih lebih, selisih kurang, dan barang tidak ditemukan.",
      "Mencatat kemungkinan penyebab selisih seperti salah input, salah lokasi, atau barang belum tercatat.",
    ],
    steps: [
      "Menyiapkan template stock opname berisi kode barang, nama barang, lokasi, stok sistem, stok fisik, dan selisih.",
      "Melakukan pengecekan fisik barang berdasarkan area atau rak.",
      "Mencatat hasil hitung fisik dan memberi catatan untuk item bermasalah.",
      "Membuat rekap item yang perlu koreksi, investigasi, atau adjustment.",
      "Menyusun summary untuk atasan agar prioritas follow-up terlihat jelas.",
    ],
    result:
      "Laporan stock opname menampilkan item yang sesuai dan item yang selisih sehingga proses koreksi stok bisa dilakukan lebih cepat.",
    impact: [
      "Membantu meningkatkan akurasi stok.",
      "Mengurangi risiko salah informasi saat barang dibutuhkan.",
      "Membuat proses audit stok lebih mudah ditelusuri.",
    ],
    tools: ["Excel", "Stock Opname Sheet", "Checklist", "Inventory Log"],
    // interviewPoint:
    //   "Saya memahami bahwa stock opname bukan hanya menghitung barang, tetapi memastikan data stok bisa dipercaya dan setiap selisih punya catatan yang jelas.",
  },
  {
    title: "Inbound Receiving Quality Check",
    category: "Inbound Process",
    label: "Lab Practice",
    problem:
      "Barang yang datang perlu dicek agar jumlah, kondisi, dan dokumennya sesuai sebelum masuk ke area penyimpanan.",
    analysis: [
      "Mengecek kesesuaian barang datang dengan PO atau surat jalan.",
      "Mencatat barang rusak, kurang, lebih, atau salah item.",
      "Membedakan barang yang bisa diterima, perlu hold, atau perlu dikonfirmasi ke supplier.",
    ],
    steps: [
      "Menerima barang dan dokumen dari vendor atau kurir.",
      "Mencocokkan kode barang, nama barang, quantity, dan satuan.",
      "Memeriksa kondisi packaging dan fisik barang.",
      "Membuat catatan penerimaan atau discrepancy report jika ada perbedaan.",
      "Memberi label dan mengarahkan barang ke lokasi putaway.",
    ],
    result:
      "Proses penerimaan barang menjadi lebih terkontrol karena setiap ketidaksesuaian dicatat sebelum barang masuk stok.",
    impact: [
      "Mengurangi risiko barang rusak masuk ke stok normal.",
      "Membantu pembelian atau atasan melakukan follow-up ke supplier.",
      "Meningkatkan ketertelusuran barang sejak barang diterima.",
    ],
    tools: ["Surat Jalan", "Goods Receipt Note", "Checklist", "Excel"],
    // interviewPoint:
    //   "Dalam inbound, saya fokus memastikan barang yang masuk sudah benar dari sisi jumlah, kondisi, dan dokumen sebelum dicatat sebagai stok.",
  },
  {
    title: "Picking, Packing & Dispatch Control",
    category: "Outbound Process",
    label: "Lab Practice",
    problem:
      "Tim gudang perlu mengurangi risiko salah barang, salah quantity, atau barang kurang aman saat pengiriman.",
    analysis: [
      "Membaca order list dan memetakan lokasi barang.",
      "Mengecek ulang barang hasil picking sebelum packing.",
      "Mencatat barang keluar dan memastikan dokumen pengiriman sesuai.",
    ],
    steps: [
      "Menerima daftar order atau request barang.",
      "Mengambil barang sesuai kode, nama, lokasi, dan quantity.",
      "Melakukan double check antara barang fisik dan order list.",
      "Packing barang sesuai karakter barang agar aman saat dikirim.",
      "Menyerahkan barang ke tim pengiriman dengan dokumen lengkap.",
    ],
    result:
      "Alur outbound menjadi lebih rapi karena ada proses double check sebelum barang dikirim.",
    impact: [
      "Mengurangi risiko salah kirim.",
      "Meningkatkan kerapihan proses dispatch.",
      "Membantu menjaga kepuasan user atau customer penerima barang.",
    ],
    tools: [
      "Picking List",
      "Packing Checklist",
      "Delivery Note",
      "Barcode Label",
    ],
    // interviewPoint:
    //   "Saya memahami pentingnya double check pada proses picking-packing karena kesalahan kecil bisa berdampak ke retur, komplain, dan biaya pengiriman ulang.",
  },
  {
    title: "Slow Moving & Minimum Stock Monitoring",
    category: "Stock Monitoring",
    label: "Lab Practice",
    problem:
      "Gudang perlu mengetahui item yang hampir habis dan item yang pergerakannya lambat agar penyimpanan dan pembelian lebih efisien.",
    analysis: [
      "Membandingkan stok akhir dengan minimum stock.",
      "Mengidentifikasi item yang jarang keluar dalam periode tertentu.",
      "Membuat prioritas item yang perlu restock dan item yang perlu dievaluasi.",
    ],
    steps: [
      "Mengumpulkan data stok akhir dan mutasi barang keluar.",
      "Menentukan batas minimum stok untuk item penting.",
      "Memberi flag low stock untuk item di bawah batas minimum.",
      "Membuat daftar slow moving berdasarkan minimnya transaksi keluar.",
      "Menyusun rekomendasi follow-up untuk atasan atau tim purchasing.",
    ],
    result:
      "Laporan monitoring stok membantu melihat barang yang perlu restock dan barang yang perlu dievaluasi karena terlalu lama tersimpan.",
    impact: [
      "Membantu mengurangi risiko kehabisan barang penting.",
      "Membantu efisiensi ruang penyimpanan.",
      "Membantu keputusan pembelian lebih terkontrol.",
    ],
    tools: ["Excel", "Inventory Log", "Minimum Stock", "Stock Movement Report"],
    // interviewPoint:
    //   "Saya melihat stok bukan hanya jumlah barang, tetapi informasi penting untuk menjaga operasional tetap lancar dan biaya penyimpanan tetap efisien.",
  },
];

export const tools = [
  {
    title: "Inventory Tools",
    items: [
      "Stock Card",
      "Inventory Log",
      "Barcode Label",
      "Bin Location",
      "SKU Code",
    ],
  },
  {
    title: "Office & Report",
    items: [
      "Microsoft Excel",
      "Google Sheets",
      "Microsoft Word",
      "Google Docs",
      "Checklist",
    ],
  },
  {
    title: "Warehouse Process",
    items: ["Receiving", "Putaway", "Picking", "Packing", "Dispatch"],
  },
  {
    title: "Equipment",
    items: [
      "Hand Pallet",
      "Trolley",
      "Scanner Barcode",
      "Label Printer",
      "Safety Shoes",
    ],
  },
  {
    title: "Quality Control",
    items: [
      "Quantity Check",
      "Condition Check",
      "Batch Check",
      "Expiry Check",
      "Damage Report",
    ],
  },
  {
    title: "Documentation",
    items: [
      "Surat Jalan",
      "Delivery Note",
      "Stock Opname Sheet",
      "Goods Receipt Note",
    ],
  },
  {
    title: "Safety & 5S",
    items: ["Seiri", "Seiton", "Seiso", "Safety Briefing", "PPE"],
  },
];

export const learning = [
  "Warehouse Operations Fundamental",
  "Inventory Control & Stock Opname",
  "Inbound Outbound Process",
  "Picking Packing Accuracy",
  "Excel for Stock Report",
  "5S & Workplace Safety",
];

export const experiences: Experience[] = [
  {
    role: "Warehouse Staff",
    company: "PT. Indonesia Multi Colour Printing",
    period: "Juni 2019 - Mei 2021",
    location: "Jawilan, Serang",
    employmentType: "Full-time",
    imageUrl: "/certifications/IMCP.jpg",
    summary:
      "Berpengalaman sebagai Warehouse Staff dalam aktivitas operasional gudang, termasuk penerimaan barang, pengecekan stok, penyimpanan barang, pencatatan data inventory, stock opname, serta pembuatan laporan operasional harian. Terbiasa bekerja dengan teliti, mengikuti SOP, menggunakan checklist, dan berkoordinasi dengan tim internal untuk memastikan proses gudang berjalan rapi dan sesuai kebutuhan operasional.",
    responsibilities: [
      "Membantu proses penerimaan barang masuk dan memastikan barang sesuai dengan data atau dokumen pendukung.",
      "Melakukan pengecekan kondisi barang sebelum disimpan atau digunakan dalam kebutuhan operasional.",
      "Menata barang di area penyimpanan agar rapi, aman, dan mudah ditemukan.",
      "Membantu proses pengeluaran barang berdasarkan permintaan internal atau kebutuhan operasional.",
      "Melakukan pencatatan data barang, stok, aset, dan kebutuhan operasional harian.",
      "Membantu proses stock checking dan stock opname untuk memastikan data stok sesuai kondisi aktual.",
      "Membuat rekap data sederhana menggunakan Microsoft Excel atau Google Sheets untuk kebutuhan laporan gudang.",
      "Menjaga kerapihan dokumen, data inventory, dan area kerja sesuai prosedur warehouse.",
      "Berkoordinasi dengan tim internal untuk memastikan kebutuhan barang tercatat dan diproses dengan baik.",
      "Mengikuti SOP, checklist kerja, dan instruksi supervisor dalam aktivitas gudang harian.",
    ],
    achievements: [
      "Terbiasa bekerja teliti dalam pengecekan barang, pencatatan stok, dan validasi data inventory.",
      "Mampu menjaga kerapihan data barang dan dokumen pendukung operasional gudang.",
      "Memiliki pengalaman dalam proses penerimaan barang, penyimpanan, pengeluaran barang, dan stock opname.",
      "Terbiasa menggunakan spreadsheet untuk update data, rekap stok, dan laporan sederhana.",
      "Mampu bekerja mengikuti SOP, checklist, serta instruksi supervisor.",
      "Memiliki dasar kerja yang kuat untuk posisi Warehouse Staff, Inventory Staff, dan Stock Control.",
    ],
    tools: [
      "Microsoft Excel",
      "Google Sheets",
      "Inventory List",
      "Stock Card",
      "Stock Checklist",
      "Picking List",
      "Packing List",
      "Data Recap",
      "Warehouse Documentation",
      "Microsoft Office",
    ],
  },
  {
    role: "Warehouse Operator",
    company: "PT. Kabatama Raya",
    period: "Januari 2018 - September 2018",
    location: "Cikande, Serang",
    employmentType: "Full-time",
    imageUrl: "/certifications/KABATAMA.jpg",
    summary:
      "Berpengalaman sebagai Warehouse Operator dalam mendukung kegiatan operasional penyimpanan, pengecekan, pencatatan, dan distribusi barang atau perlengkapan kerja. Terbiasa menangani barang operasional, melakukan pendataan, menjaga kerapihan area penyimpanan, serta memastikan barang mudah ditemukan dan siap digunakan saat dibutuhkan.",
    responsibilities: [
      "Membantu proses pengecekan barang, perlengkapan, dan kebutuhan operasional harian.",
      "Menata barang di area penyimpanan agar rapi, aman, dan mudah dicari kembali.",
      "Membantu proses pengambilan dan distribusi barang sesuai kebutuhan internal.",
      "Melakukan pencatatan data barang, perlengkapan, dan aset menggunakan dokumen atau spreadsheet.",
      "Membantu memeriksa kesesuaian jumlah barang dengan catatan yang tersedia.",
      "Merapikan dokumen, file, dan arsip pendukung operasional agar mudah ditemukan saat dibutuhkan.",
      "Membantu membuat rekap data sederhana untuk kebutuhan laporan internal.",
      "Melakukan validasi data agar informasi barang atau perlengkapan sesuai dengan kondisi aktual.",
      "Menjaga kebersihan dan kerapihan area kerja atau area penyimpanan.",
      "Berkoordinasi dengan staff internal untuk memastikan kebutuhan barang atau perlengkapan tercatat dengan baik.",
    ],
    achievements: [
      "Terbiasa menangani pencatatan dan pengecekan barang operasional secara teliti.",
      "Mampu menjaga kerapihan area penyimpanan dan dokumen pendukung.",
      "Memiliki kebiasaan kerja yang sesuai dengan aktivitas warehouse seperti pengecekan barang, pencatatan stok, distribusi barang, dan pelaporan.",
      "Terbiasa bekerja menggunakan checklist, spreadsheet, dan laporan sederhana.",
      "Mampu bekerja mengikuti instruksi, prosedur, dan kebutuhan operasional harian.",
      "Siap mendukung aktivitas warehouse seperti receiving, storage, picking, packing, stock opname, dan update inventory.",
    ],
    tools: [
      "Microsoft Excel",
      "Google Sheets",
      "Stock Checklist",
      "Inventory List",
      "Data Recap",
      "Administrative Report",
      "Warehouse Documentation",
      "Microsoft Word",
      "Google Docs",
      "Basic Computer Operation",
    ],
  },
];

export const certifications: Certification[] = [
  // {
  //   id: "warehouse-operations",
  //   title: "Warehouse Operations ",
  //   issuer: "Self Learning / Portfolio Project",
  //   year: "2018",
  //   status: "Completed",
  //   category: "Warehouse Operations",
  //   imageUrl: "/certifications/CV-2_page-0005.jpg",
  //   description:
  //     "Mempelajari alur operasional gudang dari receiving, putaway, storage, picking, packing, dispatch, dan dokumentasi pendukung.",
  //   skills: ["Receiving", "Putaway", "Picking", "Packing", "Dispatch"],
  // },

  // {
  //   id: "warehouse-staff",
  //   title: "Warehouse Staff & Inventory Operations",
  //   issuer: "Self Learning / Workplace Practice",
  //   year: "2026",
  //   status: "Completed",
  //   category: "Warehouse Staff",
  //   imageUrl: "/certifications/CV-2_page-0004.jpg",
  //   description:
  //     "Mempelajari dasar operasional gudang, pencatatan barang, penerimaan dan pengeluaran barang, stock opname, penyimpanan barang, serta laporan inventory sederhana.",
  //   skills: [
  //     "Warehouse Operations",
  //     "Receiving Goods",
  //     "Stock Opname",
  //     "Inventory Control",
  //     "Stock Movement",
  //     "Picking & Packing",
  //     "Stock Checklist",
  //     "Warehouse Documentation",
  //   ],
  // },

  {
    id: "forklift-operator",
    title: "Forklift Operator & Warehouse Handling",
    issuer: "Self Learning / Warehouse Practice",
    year: "2021",
    status: "Completed",
    category: "Forklift Operation",
    imageUrl: "/certifications/CV-2_page-0003.jpg",
    description:
      "Mempelajari dasar pengoperasian forklift, keselamatan kerja di area gudang, pengecekan forklift sebelum digunakan, handling pallet, loading dan unloading barang, serta penerapan SOP warehouse.",
    skills: [
      "Forklift Operation",
      "Material Handling",
      "Loading & Unloading",
      "Pallet Handling",
      "Daily Forklift Check",
      "Warehouse Safety",
      "PPE",
      "5S",
    ],
  },
  {
    id: "microsoft-office",
    title: "Microsoft Office & Productivity",
    issuer: "Self Learning / Workplace Practice",
    year: "2025",
    status: "Completed",
    category: "Productivity",
    imageUrl: "/certifications/Sertificat_Office.jpg",
    description:
      "Terbiasa menggunakan Microsoft Office untuk kebutuhan administrasi, spreadsheet, laporan, dan dokumen kerja harian.",
    skills: [
      "Microsoft Excel",
      "Microsoft Word",
      "Reporting",
      "Google Workspace",
    ],
  },
];

export const availability = {
  status: "Open to Work",
  targetRoles: [
    "Warehouse Staff",
    "Warehouse Operator",
    "Stock Keeper",
    "Logistics Assistant",
  ],
  workTypes: ["Onsite", "Shift", "Full-time"],
  location: "Indonesia",
};

export const educationBackground = {
  school: "Masukkan nama sekolah / kursus",
  major: "Warehouse Operations / Logistics / Administration",
  period: "2026",
  description:
    "Fokus pembelajaran pada stock opname, inventory control, inbound outbound, picking packing, dokumentasi gudang, safety, dan 5S.",
  focus: [
    "Stock Opname",
    "Inventory Control",
    "Inbound Outbound",
    "Warehouse Documentation",
    "5S & Safety",
  ],
};

export const documentationSamples = [
  {
    title: "Stock Opname Checklist",
    description:
      "Checklist pengecekan stok fisik, stok sistem, selisih, lokasi barang, dan catatan follow-up setelah opname.",
    fileUrl: "/documents/stock-opname-checklist.md",
    tags: ["Stock Opname", "Checklist", "Inventory"],
  },
  {
    title: "Warehouse Inbound & Outbound SOP",
    description:
      "Contoh SOP ringkas alur penerimaan barang, penyimpanan, picking, packing, dispatch, dan dokumentasi.",
    fileUrl: "/documents/warehouse-inbound-outbound-sop.md",
    tags: ["SOP", "Inbound", "Outbound"],
  },
  {
    title: "Inventory Reconciliation Report",
    description:
      "Contoh dokumentasi laporan rekonsiliasi stok untuk item cocok, selisih lebih, selisih kurang, dan rekomendasi follow-up.",
    fileUrl: "/documents/inventory-reconciliation-report.md",
    tags: ["Inventory", "Reconciliation", "Report"],
  },
  {
    title: "Picking Packing Quality Check",
    description:
      "Checklist final sebelum barang keluar: kode barang, quantity, kondisi, label, kemasan, dan dokumen pengiriman.",
    fileUrl: "/documents/picking-packing-quality-check.md",
    tags: ["Picking", "Packing", "QC"],
  },
];

export const whyHireMe = [
  {
    title: "Teliti dalam pencatatan dan pengecekan",
    description:
      "Saya terbiasa mengecek data, dokumen, dan kondisi barang atau aset secara rapi sehingga risiko salah catat dapat dikurangi.",
  },
  {
    title: "Memahami pentingnya akurasi stok",
    description:
      "Dalam pekerjaan gudang, stok yang akurat membantu operasional, pembelian, dan pengiriman berjalan lebih lancar.",
  },
  {
    title: "Disiplin mengikuti SOP dan checklist",
    description:
      "Saya nyaman bekerja dengan alur kerja, checklist, dan dokumentasi agar hasil kerja bisa ditelusuri kembali.",
  },
  {
    title: "Siap bekerja dalam tim operasional",
    description:
      "Saya terbiasa berkomunikasi dengan user internal dan tim kerja, sehingga siap beradaptasi dengan ritme operasional gudang.",
  },
];
