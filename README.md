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
| [`elements/`](elements/) | Unit terkecil — satu tugas, satu tampilan. | Button, Badge, Input, Card, Avatar, Modal |
| [`components/`](components/) | Gabungan beberapa element jadi satu blok utuh. | Hero, Pricing, Navbar, Footer, Testimonial, FAQ |
| [`pages/`](pages/) | Halaman lengkap, hasil rangkaian beberapa komponen. | Landing page, Login, Dashboard, Pricing, 404 |

## Struktur Folder

```
dealtech-ui-for-public-component/
├── elements/      # unit terkecil (button, input, card, ...)
├── components/    # blok halaman (hero, pricing, footer, ...)
└── pages/         # halaman utuh
```

> Ketiga folder masih kosong. Isinya akan ditambahkan bertahap.

## Cara Pakai

1. Telusuri folder sesuai yang kamu cari — `elements`, `components`, atau `pages`.
2. Buka folder komponennya, baca `README.md` di dalamnya (kalau ada) untuk catatan singkat.
3. Salin file ke project kamu.
4. Sesuaikan warna, teks, dan spacing dengan kebutuhan.

Tidak perlu fork, tidak perlu kredit, tidak perlu lapor.

## Konvensi Penamaan

Supaya konsisten dan gampang dicari:

- Nama folder komponen: `kebab-case` — contoh `pricing-table`, `hero-split`.
- Satu komponen = satu folder, berisi file komponen + preview-nya.
- Kalau ada beberapa varian, pakai sufiks jelas: `hero-split`, `hero-centered`, `hero-video`.

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
