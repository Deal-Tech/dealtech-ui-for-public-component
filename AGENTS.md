# AGENTS.md

Repo komponen UI publik dari tech.mudahdeal.com.

## Konteks proyek

- `elements/` berisi komponen UI terkecil.
- `sections/` berisi blok halaman siap pakai.
- `pages/` berisi halaman lengkap.
- Setiap komponen memakai React TSX, CSS mandiri, dan `preview.tsx`.
- `dealtech-ui/` adalah playground Vite lokal dan tidak dilacak Git.

## Aturan kode

- Satu komponen berada dalam satu folder.
- Komponen harus mandiri dan responsif.
- Section tidak boleh mengimpor element.
- Terapkan pola serupa secara mandiri.
- Gunakan ikon `lucide-react` bila diperlukan.
- Gunakan font `Inter` dan aksen biru.
- Background utama setiap section harus putih.
- Opasitas `box-shadow` dan `drop-shadow` pada elemen section maksimal 10% (`0.1`).
- Selaraskan `README.md` dan `README.en.md`.
- Komentar hanya bila perlu.
- Komentar maksimal lima kata.
- Jangan menumpuk komentar.

## Spacing section

- Ikuti spacing Hero untuk seluruh section.
- Padding dasar semua section: `36px 0 32px`.
- Pada mobile maksimal 640px, beri `padding-inline: 4px` jika masih `0`.
- Jangan tambah padding mobile jika padding horizontal sudah ada.
- Jangan gunakan `clamp` atau padding vertikal berbeda antar breakpoint.
- Container desktop: `min(1160px, calc(100% - 44px))`.
- Container mobile: `min(1160px, calc(100% - 36px))`.
- Gap dua kolom utama: `clamp(36px, 5vw, 72px)`.
- Gap ikon dan teks kecil: `7px`.
- Jarak eyebrow ke judul: `12px`.
- Jarak judul ke deskripsi: `16px`.
- Jarak deskripsi ke tombol: `26px`.
- Jarak header ke konten utama: `clamp(34px, 5vw, 50px)`; mobile `32px`.
- Gap antarkartu: `10px`; mobile `8px`.
- Padding kartu standar: `22px 20px 18px`; mobile `19px 16px`.
- Ubah ukuran hanya jika struktur referensi memang membutuhkan.

## Commit

- Auto commit setelah perubahan selesai.
- Pesan commit singkat, jelas, dan terarah.
- Awali pesan dengan `add`, `improve`, atau `fix`.
- Jangan pakai nama Claude dalam pesan commit.

## Laporan

- Setelah selesai, cukup sampaikan `selesai`.
- Jangan jabarkan detail kecuali diminta.
