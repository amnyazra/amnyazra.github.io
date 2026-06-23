# 🚀 Roushan Fikri El Amny Azra — Portfolio

Web portofolio futuristic berbasis HTML/CSS murni, dihosting gratis via **GitHub Pages**.

## 🌐 Live Site
> https://[username-github-kamu].github.io/portfolio

---

## 📁 Struktur File

```
portfolio/
├── index.html        ← File utama portofolio
└── README.md         ← Dokumentasi ini
```

---

## 🛠️ Cara Deploy ke GitHub Pages

### Langkah 1 — Buat Repository di GitHub
1. Buka [github.com](https://github.com) → login
2. Klik tombol **"New"** (pojok kiri atas)
3. Isi nama repository: `portfolio`
4. Pilih **Public**
5. Klik **"Create repository"**

### Langkah 2 — Upload File
**Cara A: Upload via browser (termudah)**
1. Di halaman repository yang baru dibuat, klik **"uploading an existing file"**
2. Drag & drop file `index.html` dan `README.md`
3. Klik **"Commit changes"**

**Cara B: Via Git (jika sudah install Git)**
```bash
git init
git add .
git commit -m "first commit: add portfolio"
git branch -M main
git remote add origin https://github.com/[username-kamu]/portfolio.git
git push -u origin main
```

### Langkah 3 — Aktifkan GitHub Pages
1. Di repository, klik tab **Settings**
2. Scroll ke bawah → section **"Pages"** (menu kiri)
3. Di **"Source"** → pilih **"Deploy from a branch"**
4. Branch: pilih **`main`**, folder: **`/ (root)`**
5. Klik **Save**
6. Tunggu ±1–2 menit → akan muncul link:
   `https://[username-kamu].github.io/portfolio`

---

## ✏️ Cara Edit Konten

Buka `index.html` dengan text editor (Notepad, VS Code, dll), lalu cari bagian yang ingin diubah:

| Bagian | Cari teks ini di HTML |
|--------|----------------------|
| Nama / NIM | `Roushan Fikri El Amny Azra` |
| Email | `amnyazra26@gmail.com` |
| WhatsApp | `62881022154103` |
| Tambah project | Duplikasi blok `<div class="proj-card">` |
| Tambah organisasi | Tambah baris `<tr>` di tabel organisasi |

Setelah edit → upload ulang file ke GitHub → otomatis update dalam beberapa menit.

---

## 🎨 Kustomisasi Warna

Ganti nilai warna di bagian `:root` di dalam `<style>`:

```css
:root {
  --cyan: #00D4FF;    /* warna aksen utama */
  --lime: #A8FF3E;    /* warna aksen sekunder */
  --violet: #7B4FFF;  /* warna badge */
  --bg: #080C18;      /* background utama */
}
```
