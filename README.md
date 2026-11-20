# Portfolio Vue

Aplikasi web portfolio dengan **Vue 3 (SPA)**, **Vue Router**, dan **Tailwind CSS**.
Halaman: Beranda, Tentang, Project, Kontak. Fitur tambahan: **dark mode**.

## Menjalankan

```bash
npm install
npm run dev        # buka http://localhost:5173
npm test           # jalankan test (Vitest)
npm run build      # hasil build ada di folder dist
```

## Mengganti data

- `src/data/profile.js`: nama, peran, email, skill, cerita, timeline
- `src/data/projects.js`: daftar project (judul, deskripsi, tag, link demo & repo)

## Struktur

```
src/
├── components/   NavBar, ThemeToggle, ProjectCard, AppFooter
├── views/        Home, About, Projects, Contact, NotFound
├── router/       routing + lazy load
├── composables/  useTheme (dark mode)
├── utils/        validate.js (validasi form)
└── data/         profile.js, projects.js
```

## Pemetaan ke kriteria

| Kriteria | Di mana |
| --- | --- |
| HTML semantik | `header`, `nav`, `main`, `section`, `article`, `footer` di semua halaman |
| CSS manual (About) | `<style scoped>` di `src/views/AboutView.vue` |
| JavaScript validasi form | `src/utils/validate.js` dipakai `ContactView.vue` |
| Tailwind (Project & Contact) | `ProjectsView.vue`, `ContactView.vue`, `ProjectCard.vue` |
| Routing | `src/router/index.js` |
| Komponen reusable | `ProjectCard`, `ThemeToggle`, `NavBar` |
| State | form (`reactive`), filter project, menu mobile, tema |
| Lazy load / code splitting | gambar `loading="lazy"`, halaman di-import dinamis |
| Test | `npm test` (validasi form + komponen ProjectCard) |
| Fitur tambahan | Dark mode, tersimpan di `localStorage` |

## Push ke GitHub

Buat repo kosong di GitHub, lalu:

```bash
git init
git add .
git commit -m "feat: setup project vue dengan router dan tailwind"
git branch -M main
git remote add origin https://github.com/USERNAME/portfolio-vue.git
git push -u origin main
```

Tips commit yang jelas: satu perubahan satu commit, misalnya
`feat: tambah halaman kontak`, `fix: perbaiki menu mobile`, `test: tambah test validasi`.

## Deploy

### Vercel (paling mudah)
1. Masuk ke vercel.com dan login dengan GitHub.
2. Klik **Add New > Project**, pilih repo `portfolio-vue`.
3. Framework otomatis terdeteksi Vite. Klik **Deploy**.

File `vercel.json` sudah mengatur agar alamat seperti `/about` tidak error saat di-refresh.

### Netlify
1. Masuk ke netlify.com, klik **Add new site > Import from Git**.
2. Build command: `npm run build`, publish directory: `dist`.

File `public/_redirects` sudah menangani routing SPA.

### GitHub Pages
Perlu pengaturan tambahan (`base` di `vite.config.js` dan fallback `404.html`).
Vercel atau Netlify lebih disarankan untuk SPA.

## Form kontak

Form saat ini hanya memvalidasi lalu menampilkan pesan sukses (belum mengirim email).
Agar pesan benar-benar terkirim, daftar gratis di Formspree atau Web3Forms, lalu
di `handleSubmit` pada `src/views/ContactView.vue` kirim data dengan `fetch` ke URL form Anda.
