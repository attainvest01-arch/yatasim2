# Role: Senior Lead Fullstack Engineer & UX/UI Specialist
# Project: Final Polish "Rumah Belajar Insan Mandiri" Landing Page

## 1. Global Vision & Islamic Context
Tujuan akhir adalah menciptakan landing page yang kredibel, interaktif, dan kental dengan nilai-nilai adab Islami. Minimalkan teks dummy, perbanyak dummy data Islami yang kredibel. Pastikan penggunaan aset visual sangat spesifik.

---

## 2. Technical Revisions (8 Critical Points)

### Poin 1: Penempatan Tombol di Hero Section (image_3.png)
- **Problem:** Tombol donasi dan "Pelajari Program" di bawah teks hero terlihat tidak simetris atau terlalu dekat.
- **Perbaikan:** Susun kedua tombol secara horizontal (flex-row), beri jarak (gap-x-6) yang rapi, dan pastikan terpusat (items-center) di bawah teks hero. Gunakan animasi `stagger children` dari Framer Motion agar tombol muncul berurutan dengan jeda 0.2s.

### Poin 2: Perubahan Stat Section 
- **Problem:** Tampilan angka statistik kaku dan kurang interaktif.
- **Perbaikan:**
    - Hapus background grid kaku. Berikan layout yang lebih lapang dengan tonal layering.
    - **CRITICAL:** Implementasikan Count-Up animation saat section masuk viewport (scroll trigger). Gunakan library `react-countup` atau logic JavaScript sendiri untuk membuat angka menghitung naik dengan delay berurutan (Delay 0.2s antar angka).
    - Beri ikon minimalist kecil Islami di atas setiap angka (contoh: ikon siluet orang untuk Siswa Terbantu, ikon kalender untuk Program Aktif).

### Poin 3: Card 'Tentang Kami' dengan Aset Spesifik 
- **Problem:** Struktur card tidak sesuai instruksi dan teks kaku.
- **Perbaikan:**
    - Cukup 2 card saja, diletakkan berdampingan (col-span-1).
    - **Card 1 (Yayasan):** Gunakan ikon minimalist yang terinspirasi dari **logo1.png** (geometric green/gold flower), nama card "Yayasan Rumah Belajar Insan Mandiri" (Dummy text).
    - **Card 2 (Lembaga Pendidikan):** Gunakan ikon minimalist yang terinspirasi dari **logo2.png** (magenta/blue soaring figures), nama card "Lembaga Pendidikan Islam (Diniyah)" (Dummy text).
    - Di atas kedua card ini, tambahkan heading teks "Visi & Misi Kami" (Dummy text minimalis).

### Poin 4: Program Page Interactive Tabs 
- **Problem:** Halaman program terlalu statis.
- **Perbaikan:**
    - Implementasikan system tabs dengan 3 tombol besar: "Program Mingguan", "Program Bulanan", "Program Tahunan".
    - Gunakan state React untuk tab aktif. Beri gaya khusus untuk tab aktif (contoh: magenta gradient underline & bold text).
    - Saat tab aktif diklik, tampilkan daftar card (minimal 2) untuk kategori tersebut.
    - **Card Structure:** Foto (Islami), Headline, Subheadline (Teks truncated/terbatas), tombol "Baca Selengkapnya".
    - **Logic:** Tombol tab yang tidak aktif tidak menampilkan data (hanya teks dummy terbatas). Tab *aktif* diklik akan menampilkan data card lengkap untuk kategori tersebut. Card di tab aktif *tetap* memiliki tombol "Baca Selengkapnya" (Dummy).

### Poin 5: Comment Section Avatars & Teks Islami 
- **Problem:** Avatar testimoni kaku dan tidak Islami.
- **Perbaikan:**
    - Ganti foto avatar dummy dengan foto orang yang berbusana Islami (berhijab, beradab, berpeci/koko), dengan ekspresi yang tulus dan kredibel.
    - Ganti nama dan teks testimoni dengan data Islami yang kredibel (dummy text). Contoh: "Ust. [Nama]" untuk relawan, "Bapak/Ibu [Nama]" untuk wali murid. Testimoni tentang perkembangan adab anak.

### Poin 6: Perbaikan Section FAQ 
- **Problem:** Section pertanyaan eror atau tidak berfungsi.
- **Perbaikan:**
    - Ubah layout dari halaman terpisah menjadi section FAQ dalam bentuk Accordion minimalis yang clean di halaman utama.
    - Fix logic JavaScript untuk accordion agar lancar (open/close satu per satu dengan ikon rotasi smooth). State management React.

### Poin 7: Peningkatan Donation Page 
- **Problem:** Donation page kurang interaktif.
- **Perbaikan:**
    - Ubah layout dari section besar kaku menjadi area ajakan donasi yang lebih dinamis.
    - **CRITICAL:** Ciptasikan area (contoh: Area CTA "Mulai Berdonasi") di mana saat area tersebut *diklik*, *langsung* menampilkan 2 tombol besar berdampingan: "Donasi via Bank" dan "Donasi via WhatsApp". Ajakan awal disembunyikan.

### Poin 8: Scrolling Tagline Sinergi 
- **Problem:** Section mitra Google/IBM kurang menarik.
- **Perbaikan:**
    - Hapus semua logo Google, IBM, Microsoft, EduFoundation.
    - Ganti total dengan satu baris teks tagline "Rumah Belajar Insan Mandiri" yang berjalan (scrolling marquee effect) horizontal secara terus menerus.
    - Beri gaya teks tersebut dengan gradient warna logo RBIM, buat agak transparan (opacity-70), dan buat sebagus mungkin (font elegant serif). Gunakan `text-gradient bg-clip-text text-transparent opacity-70`.

---
