import { useEffect, useRef } from 'react';
import { Check, CheckCircle2, X, XCircle } from 'lucide-react';

import './section-compare-v1.css';

const oldItems = [
    {
        title: 'Rekap manual:',
        description: 'Transaksi dicatat di buku dan spreadsheet, rawan salah hitung dan selisih.',
    },
    {
        title: 'Data terpencar:',
        description: 'Setiap anggota tim punya file sendiri dengan versi yang berbeda-beda.',
    },
    {
        title: 'Admin jadi call center:',
        description: 'Pelanggan bertanya satu per satu dan tim harus menjawab hal yang sama berulang kali.',
    },
    {
        title: 'Tagihan telat diketahui:',
        description: 'Masalah baru terlihat setelah pembayaran tertunda terlalu lama.',
    },
    {
        title: 'Laporan dadakan:',
        description: 'Setiap pimpinan meminta laporan, seluruh data harus dihitung ulang dari awal.',
    },
];

const newItems = [
    {
        title: 'Tagihan otomatis:',
        description: 'Tagihan dibuat sesuai jadwal dan status pembayaran langsung terlihat.',
    },
    {
        title: 'Satu sumber data:',
        description: 'Pelanggan, operasional, transaksi, dan laporan tersimpan dalam satu sistem.',
    },
    {
        title: 'Portal mandiri:',
        description: 'Pengguna memeriksa tagihan dan informasi sendiri tanpa selalu menghubungi admin.',
    },
    {
        title: 'Pembayaran terpantau:',
        description: 'Daftar pembayaran tertunda tampil setiap hari agar bisa segera ditindaklanjuti.',
    },
    {
        title: 'Laporan siap pakai:',
        description: 'Data keuangan dan operasional dapat dilihat atau dicetak kapan saja.',
    },
];

export default function SectionCompareV1() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('section-compare-v1--visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="section-compare-v1">
            <div className="section-compare-v1__shell">
                <h2 className="section-compare-v1__heading">
                    Mengapa Operasional Terasa{' '}
                    <span className="section-compare-v1__heading-accent">Selalu Kewalahan?</span>
                </h2>

                <p className="section-compare-v1__subtitle">
                    Bukan karena tim Anda kurang rajin, tetapi karena sistem kerjanya belum terhubung.
                </p>

                <div className="section-compare-v1__grid">
                    <div className="section-compare-v1__column section-compare-v1__column--old">
                        <h3 className="section-compare-v1__title section-compare-v1__title--old">
                            <XCircle size={20} strokeWidth={2.5} /> CARA LAMA (MELELAHKAN)
                        </h3>
                        <ul className="section-compare-v1__list">
                            {oldItems.map((item) => (
                                <li key={item.title}>
                                    <X size={16} strokeWidth={3} />
                                    <span>
                                        <strong>{item.title}</strong> {item.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="section-compare-v1__column section-compare-v1__column--new">
                        <span className="section-compare-v1__badge">DENGAN SISTEM TERPADU</span>
                        <h3 className="section-compare-v1__title section-compare-v1__title--new">
                            <CheckCircle2 size={20} strokeWidth={2.5} /> CARA BARU (TERKENDALI)
                        </h3>
                        <ul className="section-compare-v1__list">
                            {newItems.map((item) => (
                                <li key={item.title}>
                                    <Check size={16} strokeWidth={3} />
                                    <span>
                                        <strong>{item.title}</strong> {item.description}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
