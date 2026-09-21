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
        deskripsi: 'Untuk individu dan tim kecil yang baru mulai merapikan pekerjaan.',
        cta: 'Mulai Gratis',
        fiturTitle: 'Yang sudah termasuk:',
        fitur: [
            'Maksimal 25 pengguna',
            'Data pelanggan & anggota',
            'Manajemen tugas dasar',
            'Penyimpanan data utama',
            'Laporan ringkas',
            'Pengumuman tim',
            '1 akun admin',
        ],
    },
    {
        nama: 'Basic',
        hargaLabel: 'Mulai dari',
        harga: 'Rp149rb',
        satuan: '/bulan',
        deskripsi: 'Untuk tim yang ingin operasional dan transaksi tercatat lebih rapi.',
        cta: 'Pilih Basic',
        fiturTitle: 'Semua fitur Free, plus:',
        fitur: [
            'Maksimal 150 pengguna',
            'Tagihan otomatis',
            'Pembayaran & cicilan',
            'Saldo dan riwayat transaksi',
            'Kas & rekening keuangan',
            'Laporan tagihan & kas',
            'Import data via Excel',
            '5 akun admin',
        ],
    },
    {
        nama: 'Plus',
        badge: 'Paling populer',
        hargaLabel: 'Mulai dari',
        harga: 'Rp349rb',
        satuan: '/bulan',
        deskripsi: 'Untuk organisasi yang ingin seluruh kegiatan masuk dalam satu sistem.',
        cta: 'Pilih Plus',
        fiturTitle: 'Semua fitur Basic, plus:',
        fitur: [
            'Maksimal 500 pengguna',
            'Portal pelanggan & anggota',
            'Pembayaran Virtual Account',
            'Kehadiran & kegiatan',
            'Pengajuan & persetujuan',
            'Laporan & evaluasi kinerja',
            'Manajemen aset & katalog',
            'Struktur tim & organisasi',
            'Hak akses per pengguna',
            'Akun admin tanpa batas',
        ],
    },
    {
        nama: 'Pro',
        harga: 'Rp1,2jt',
        satuan: '/tahun',
        deskripsi: 'Untuk organisasi besar dengan banyak unit dan kebutuhan khusus.',
        cta: 'Pilih Pro',
        fiturTitle: 'Semua fitur Plus, plus:',
        fitur: [
            'Pengguna tanpa batas',
            'Multi unit dalam satu organisasi',
            'Domain sendiri',
            'Laporan konsolidasi organisasi',
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
