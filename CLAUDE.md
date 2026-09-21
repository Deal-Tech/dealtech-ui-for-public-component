# CLAUDE.md

Repo komponen UI publik dari tech.mudahdeal.com.

## Struktur

- `elements/` — unit terkecil (button, input, card)
- `sections/` — blok halaman per kategori (`Hero/SectionV1`, `Pricing/SectionV2`)
- `pages/` — halaman utuh
- `skills/` — skill pendukung repo

## Aturan

- `elements/` dan `pages/`: satu komponen = satu folder, nama `kebab-case`.
- `sections/`: dua tingkat `PascalCase` — kategori lalu varian bernomor.
- Komponen harus berdiri sendiri, tanpa dependency internal project lain.
- Konten contoh harus generik, jangan memakai nama project asal.
- Wajib responsif.
- Komentar kode seperlunya saja, maksimal 5 kata, jangan menumpuk.
- Dua README (`README.md` ID, `README.en.md` EN) harus selalu selaras.

## Commit

- Auto commit setiap selesai perubahan.
- Pesan pendek dan jelas, diawali `add`, `improve`, atau `fix`.
