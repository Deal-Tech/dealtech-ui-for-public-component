# Button — ButtonV1

Tombol pil tinggi 50px dengan dua varian: `primary` (terisi) dan `outline` (garis). Mengangkat sedikit saat hover.

Otomatis jadi `<a>` bila diberi `href`, selain itu jadi `<button>`.

## Isi Folder

| File | Keterangan |
|---|---|
| `ButtonV1.tsx` | Komponen tombol dan `ButtonV1Group`. |
| `button-v1.css` | Style tombol dan pembungkusnya. |
| `preview.tsx` | Contoh pemakaian. |

## Dependency

- `react` (18+)

## Cara Pakai

```tsx
import ButtonV1, { ButtonV1Group } from './ButtonV1';

<ButtonV1Group>
    <ButtonV1 href="#harga">Daftar & Coba Gratis</ButtonV1>
    <ButtonV1 variant="outline" href="#fitur">Lihat Fitur</ButtonV1>
</ButtonV1Group>
```

Sebagai tombol biasa:

```tsx
<ButtonV1 onClick={simpan}>Simpan</ButtonV1>
```

## Props

| Prop | Tipe | Default | Keterangan |
|---|---|---|---|
| `variant` | `'primary' \| 'outline'` | `'primary'` | Gaya tombol. |
| `href` | `string` | — | Bila diisi, dirender sebagai `<a>`. |
| `className` | `string` | — | Class tambahan. |
| `children` | `ReactNode` | — | Isi tombol. |

Prop lain diteruskan ke elemen aslinya (`onClick`, `target`, `disabled`, dan seterusnya).

## ButtonV1Group

Pembungkus opsional untuk tombol berjajar: rata tengah, jarak 10px, dan di bawah 640px berubah jadi tumpukan vertikal selebar penuh.

## Kustomisasi

| Variable | Default | Dipakai untuk |
|---|---|---|
| `--btn-primary` | `#01498b` | Latar varian primary, border dan teks outline |
| `--btn-primary-dark` | `#013a6f` | Hover primary |
| `--btn-primary-soft` | `rgba(1, 73, 139, 0.08)` | Hover outline |

Lebar minimum 240px diatur di `.btn-v1`. Ubah bila tombol dipakai di ruang sempit.
