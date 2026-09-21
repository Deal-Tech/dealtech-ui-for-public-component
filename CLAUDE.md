# CLAUDE.md

Repo komponen UI publik dari tech.mudahdeal.com.

## Struktur

- `elements/` — unit terkecil (button, input, card)
- `components/` — blok halaman (hero, pricing, footer)
- `pages/` — halaman utuh
- `skills/` — skill pendukung repo

## Aturan

- Satu komponen = satu folder, nama `kebab-case`.
- Komponen harus berdiri sendiri, tanpa dependency internal project lain.
- Wajib responsif.
- Komentar kode seperlunya saja, maksimal 5 kata, jangan menumpuk.
- Dua README (`README.md` ID, `README.en.md` EN) harus selalu selaras.

## Commit

- Auto commit setiap selesai perubahan.
- Pesan pendek dan jelas, diawali `add`, `improve`, atau `fix`.
