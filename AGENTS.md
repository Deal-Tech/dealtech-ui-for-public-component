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
- Selaraskan `README.md` dan `README.en.md`.
- Komentar hanya bila perlu.
- Komentar maksimal lima kata.
- Jangan menumpuk komentar.

## Commit

- Auto commit setelah perubahan selesai.
- Pesan commit singkat, jelas, dan terarah.
- Awali pesan dengan `add`, `improve`, atau `fix`.
- Jangan pakai nama Claude dalam pesan commit.

## Laporan

- Setelah selesai, cukup sampaikan `selesai`.
- Jangan jabarkan detail kecuali diminta.
