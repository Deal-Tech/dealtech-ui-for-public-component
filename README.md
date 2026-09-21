<div align="center">

<img src="https://ik.imagekit.io/sja4kckbn/AsetDealTech/panel%20dealtechui.png" alt="DealTech UI" width="100%" />

# DealTech UI — Public Components

**Kumpulan komponen UI siap pakai: Elements, Sections, dan Pages.**

Dikembangkan oleh [tech.mudahdeal.com](https://tech.mudahdeal.com)

🇮🇩 **Bahasa Indonesia** · [🇬🇧 English](README.en.md)

</div>

---

## Tentang Repo Ini

Repo ini berisi komponen antarmuka (UI) yang kami pilih dan rapikan sendiri, supaya bisa dipakai siapa saja — entah sebagai **referensi** saat membangun sesuatu, atau **langsung disalin** ke dalam project kamu.

Tidak ada instalasi wajib, tidak ada dependency yang mengikat. Ambil yang kamu butuhkan, ubah sesuka hati.

## Isi Repo

Isi repo dibagi jadi tiga folder di akar, supaya langsung ketemu:

| Folder | Isi | Contoh |
|---|---|---|
| [`elements/`](elements/) | Unit terkecil — satu tugas, satu tampilan, dikelompokkan per kategori. | Button, Badge, Input, Card, Avatar, Modal |
| [`sections/`](sections/) | Gabungan beberapa element jadi satu blok utuh, dikelompokkan per kategori. | Hero, Pricing, Navbar, Footer, Testimonial, FAQ |
| [`pages/`](pages/) | Halaman lengkap, hasil rangkaian beberapa komponen. | Landing page, Login, Dashboard, Pricing, 404 |

## Struktur Folder

```
dealtech-ui-for-public-component/
├── elements/            # unit terkecil, dikelompokkan per kategori
│   └── Button/
│       └── ButtonV1/
├── sections/            # blok halaman, dikelompokkan per kategori
│   └── Hero/
│       └── SectionV1/   # satu varian = satu folder
└── pages/               # halaman utuh
```

> Isinya masih sedikit dan akan ditambahkan bertahap.

## Cara Pakai

1. Telusuri folder sesuai yang kamu cari — `elements`, `sections`, atau `pages`.
2. Buka folder komponennya, baca `README.md` di dalamnya (kalau ada) untuk catatan singkat.
3. Salin file ke project kamu.
4. Sesuaikan warna, teks, dan spacing dengan kebutuhan.

Tidak perlu fork, tidak perlu kredit, tidak perlu lapor.

## Konvensi Penamaan

Supaya konsisten dan gampang dicari:

- `elements/` dan `sections/`: dua tingkat `PascalCase` — kategori lalu varian, contoh `Button/ButtonV1`, `Hero/SectionV1`.
- `pages/`: nama folder `kebab-case` — contoh `login-page`, `pricing-page`.
- Satu varian = satu folder, berisi file komponen + preview-nya.
- Varian baru dalam kategori yang sama tinggal menambah nomor: `ButtonV2`, `SectionV2`.

## Kontribusi

Punya komponen yang menurutmu layak dibagikan? Silakan buka Pull Request. Yang kami jaga cuma tiga hal:

- **Berdiri sendiri** — tidak bergantung pada kode internal project lain.
- **Rapi** — penamaan konsisten, tidak ada kode mati.
- **Responsif** — tampil wajar di layar kecil maupun besar.

## Disclaimer

> **Repo ini bebas digunakan tanpa perlu izin dari kami.**
>
> Boleh disalin, diubah, dipakai untuk keperluan pribadi maupun komersial, dengan atau tanpa mencantumkan sumber. Tidak perlu mengirim permintaan, tidak perlu menunggu persetujuan.
>
> Project ini murni dikembangkan atas dasar keinginan untuk menciptakan lingkungan yang mudah dan mendorong sosialisasi di dunia internet — supaya orang yang baru belajar punya titik awal, dan yang sudah terbiasa tidak perlu menulis ulang hal yang sama.
>
> Komponen disediakan **apa adanya (as is)**, tanpa jaminan dalam bentuk apa pun. Risiko penggunaan ada pada pemakai. Silakan uji sendiri sebelum dipakai di production.

## Lisensi

[MIT](LICENSE) — sebebas mungkin, sesuai semangat di atas.

---

<div align="center">

Dibuat dan dirawat oleh **[tech.mudahdeal.com](https://tech.mudahdeal.com)**

</div>
