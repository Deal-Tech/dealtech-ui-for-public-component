import { ArrowRight, Check } from 'lucide-react';

import './price-card-v1.css';

interface Paket {
    nama: string;
    badge?: string;
    hargaLabel?: string;
    harga: string;
    satuan?: string;
    deskripsi: string;
    cta: string;
    fiturTitle: string;
    fitur: string[];
    sorot?: boolean;
}

const paketList: Paket[] = [
    {
        nama: 'Free',
        harga: 'Gratis',
        deskripsi: 'Untuk pesantren kecil yang baru mulai merapikan administrasi santri.',
        cta: 'Mulai Gratis',
        fiturTitle: 'Yang sudah termasuk:',
        fitur: [
            'Maksimal 25 santri',
            'Data santri & wali',
            'Kelas, asrama, dan kamar',
            'Pengajar & pengurus',
            'Tahun ajaran & data master',
            'Pengumuman pondok',
            '1 akun pengurus',
        ],
    },
    {
        nama: 'Dasar',
        hargaLabel: 'Mulai dari',
        harga: 'Rp149rb',
        satuan: '/bulan',
        deskripsi: 'Untuk pesantren yang ingin syahriyah dan tabungan santri tercatat rapi.',
        cta: 'Pilih Dasar',
        fiturTitle: 'Semua fitur Free, plus:',
        fitur: [
            'Maksimal 150 santri',
            'Tagihan & syahriyah otomatis',
            'Pembayaran & cicilan',
            'Tabungan dan saldo santri',
            'Kas pondok & rekening keuangan',
            'Laporan tunggakan & kas',
            'Import data via Excel',
            '5 akun pengurus',
        ],
    },
    {
        nama: 'Plus',
        badge: 'Paling populer',
        hargaLabel: 'Mulai dari',
        harga: 'Rp349rb',
        satuan: '/bulan',
        deskripsi: 'Untuk pesantren yang ingin seluruh kegiatan pondok masuk satu sistem.',
        cta: 'Pilih Plus',
        fiturTitle: 'Semua fitur Dasar, plus:',
        fitur: [
            'Maksimal 500 santri',
            'Portal wali santri & santri',
            'Pembayaran Virtual Account',
            'Absensi umum & kegiatan',
            'Pelanggaran & perizinan',
            'Nilai rapor & kenaikan kelas',
            'Perpustakaan kitab',
            'Poskestren & organisasi santri',
            'Hak akses per pengurus',
            'Akun pengurus tanpa batas',
        ],
    },
    {
        nama: 'Pro',
        harga: 'Rp1,2jt',
        satuan: '/tahun',
        deskripsi: 'Untuk yayasan dengan banyak unit lembaga dan kebutuhan khusus.',
        cta: 'Pilih Pro',
        fiturTitle: 'Semua fitur Plus, plus:',
        fitur: [
            'Santri tanpa batas',
            'Multi lembaga dalam satu yayasan',
            'Domain sendiri',
            'Laporan konsolidasi yayasan',
            'Migrasi data penuh',
            'Pendampingan & pelatihan rutin',
            'Prioritas dukungan teknis',
        ],
    },
];

export default function PriceCardV1() {
    return (
        <div className="price-card-v1 pk-grid">
            {paketList.map((paket) => (
                <article
                    key={paket.nama}
                    className={`pk-card${paket.sorot || paket.badge ? ' pk-card--sorot' : ''}`}
                >
                    <div className="pk-card__head">
                        <h3 className="pk-card__name">{paket.nama}</h3>
                        {paket.badge && <span className="pk-card__badge">{paket.badge}</span>}
                    </div>

                    {paket.hargaLabel && <p className="pk-card__price-label">{paket.hargaLabel}</p>}

                    <p className="pk-card__price">
                        {paket.harga}
                        {paket.satuan && <span className="pk-card__price-unit">{paket.satuan}</span>}
                    </p>

                    <p className="pk-card__desc">{paket.deskripsi}</p>

                    <a className="pk-card__cta" href="#kontak">
                        <span>{paket.cta}</span>
                        <ArrowRight size={16} strokeWidth={2.4} aria-hidden="true" />
                    </a>

                    <p className="pk-card__fitur-title">{paket.fiturTitle}</p>

                    <ul className="pk-card__fitur">
                        {paket.fitur.map((fitur) => (
                            <li key={fitur}>
                                <span className="pk-card__check" aria-hidden="true">
                                    <Check size={11} strokeWidth={3.5} />
                                </span>
                                {fitur}
                            </li>
                        ))}
                    </ul>
                </article>
            ))}
        </div>
    );
}
