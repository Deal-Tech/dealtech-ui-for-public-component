# CLAUDE.md

Repo komponen UI publik dari tech.mudahdeal.com.

## Struktur

- `elements/` — unit terkecil per kategori (`Button/ButtonV1`)
- `sections/` — blok halaman per kategori (`Hero/SectionV1`, `Pricing/SectionV2`)
- `pages/` — halaman utuh
- `skills/` — skill pendukung repo

## Aturan

- `elements/` dan `sections/`: dua tingkat `PascalCase` — kategori lalu varian bernomor.
- `pages/`: satu halaman = satu folder, nama `kebab-case`.
- Komponen harus berdiri sendiri, tanpa dependency internal project lain.
- Konten contoh harus generik, jangan memakai nama project asal.
- Wajib responsif.
- Komentar kode seperlunya saja, maksimal 5 kata, jangan menumpuk.
- Dua README (`README.md` ID, `README.en.md` EN) harus selalu selaras.

## Commit

- Auto commit setiap selesai perubahan.
- Pesan pendek dan jelas, diawali `add`, `improve`, atau `fix`.
