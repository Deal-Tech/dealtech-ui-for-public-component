# Hero — SectionV1

Hero tengah (centered) dengan eyebrow, judul ber-highlight, deskripsi, dua tombol, daftar trust, dan slider demo tampilan produk.

Di layar besar slider menampilkan dua gambar berdampingan; di bawah 900px berubah jadi carousel geser dengan titik penanda dan geser otomatis tiap 7 detik.

## Isi Folder

| File | Keterangan |
|---|---|
| `SectionV1.tsx` | Komponen section. Teks dan tombol diatur lewat konstanta di bagian atas file. |
| `DemoSlider.tsx` | Slider gambar demo yang dipakai di dalam hero. |
| `section-v1.css` | Seluruh style section, termasuk animasi reveal. |
| `preview.tsx` | Contoh pemakaian. |
| `assets/` | Dua mockup SVG untuk slider demo. |

## Dependency

- `react` (18+)
- `lucide-react` — ikon `AlertCircle` dan `CheckCircle2`
- Font `Inter` (opsional, ada fallback system-ui):

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap" rel="stylesheet">
```

## Cara Pakai

1. Salin folder ini ke project kamu.
2. Salin isi `assets/` ke folder publik, misalnya `public/images/hero-section-v1/`.
3. Pakai komponennya:

```tsx
import SectionV1 from './SectionV1';

export default function Page() {
    return <SectionV1 />;
}
```

Kalau path gambar berbeda, ubah `demoImages` di `SectionV1.tsx`.

## Kustomisasi

Warna diatur lewat CSS variable di `.home-hero-section`:

| Variable | Default | Dipakai untuk |
|---|---|---|
| `--lp-primary` | `#01498b` | Tombol utama, highlight judul, eyebrow |
| `--lp-primary-dark` | `#013a6f` | Hover tombol utama |
| `--lp-primary-soft` | `rgba(1, 73, 139, 0.08)` | Latar eyebrow, hover tombol kedua |
| `--lp-ink` | `#111111` | Warna judul |
| `--lp-muted` | `#4b5563` | Deskripsi dan teks trust |
| `--lp-line` | `#e5e7eb` | Border gambar demo dan titik slider |

## Catatan

- Animasi masuk memakai `IntersectionObserver`, otomatis nonaktif saat `prefers-reduced-motion: reduce`.
- Tanpa JavaScript aktif, elemen tetap `opacity: 0`. Hapus class `sl-opacity-0` bila ingin selalu tampil.
