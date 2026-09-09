# Untuk Dewi 💌

Website kado ulang tahun, dibuat pakai Next.js + GSAP + Lenis (smooth scroll).

## Cara jalanin di komputer

```bash
npm install
npm run dev
```

Buka http://localhost:3000

## Bagian yang perlu kamu ganti sebelum dikirim

1. **Foto** — buka `components/Gallery.tsx`. Sekarang masih placeholder
   kotak gradasi pink. Taruh foto-foto kalian di folder `public/`
   (misal `public/foto-1.jpg`), lalu ganti kotak placeholder pakai
   `<Image src="/foto-1.jpg" ... />` dari `next/image`, atau tag
   `<img>` biasa kalau mau simpel.

2. **Cerita di Timeline** — buka `components/Timeline.tsx`, ada 4 momen
   (First Met, First Date, Favorite Place, Favorite Food) yang masih
   teks placeholder. Ganti bagian `text:` dengan cerita asli kalian.
   Kalau mau, isi juga `date:` biar muncul tanggalnya.

3. **Surat cinta** — buka `components/LoveLetter.tsx`, tulisan
   suratnya ada di situ, tinggal edit paragrafnya.

4. **Tanggal lahir Dewi** — sudah diisi 12 Januari 2001 di
   `components/LiveAge.tsx` (variabel `BIRTH_DATE`), dan tanggal
   jadian 23 Mei 2022 disebut di surat. Ganti kalau ada yang salah.

5. **Lagu** — `components/Playlist.tsx` sudah diisi "Mere Humsafar –
   Arijit Singh" dengan link pencarian Spotify. Ganti link-nya kalau
   mau langsung ke track Spotify aslinya (buka lagunya di Spotify,
   klik "..." → Share → Copy link).

## Cara deploy (biar bisa dibuka di HP dia lewat link)

Paling gampang pakai [Vercel](https://vercel.com):
1. Push folder ini ke GitHub (atau upload langsung ke Vercel).
2. Import project di vercel.com, biarkan setting default (Next.js
   otomatis terdeteksi).
3. Deploy — nanti dapat link seperti `untuk-dewi.vercel.app`.
