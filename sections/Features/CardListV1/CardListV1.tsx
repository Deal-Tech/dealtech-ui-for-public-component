import { useEffect, useRef } from 'react';
import {
    BookOpen,
    ClipboardList,
    HeartPulse,
    Landmark,
    LayoutDashboard,
    Library,
    ShieldCheck,
    Smartphone,
    Users,
    Wallet,
} from 'lucide-react';

import './card-list-v1.css';

const features = [
    {
        icon: Users,
        title: 'Data pelanggan terpusat',
        text: 'Profil, kontak, kategori, dan riwayat aktivitas tersimpan dalam satu tempat.',
    },
    {
        icon: Wallet,
        title: 'Tagihan & pembayaran',
        text: 'Tagihan dibuat otomatis lengkap dengan status lunas, cicilan, dan pembayaran tertunda.',
    },
    {
        icon: Landmark,
        title: 'Saldo & transaksi',
        text: 'Catat pemasukan dan pengeluaran dengan saldo yang terhitung otomatis.',
    },
    {
        icon: ClipboardList,
        title: 'Kehadiran & aktivitas',
        text: 'Kehadiran, izin, dan aktivitas tim tercatat rapi dalam setiap periode.',
    },
    {
        icon: BookOpen,
        title: 'Tugas & alur kerja',
        text: 'Kelola tugas, jadwal, progres, dan evaluasi kerja dalam satu alur.',
    },
    {
        icon: Smartphone,
        title: 'Portal mandiri',
        text: 'Pengguna dapat memeriksa informasi dan transaksi sendiri melalui perangkat mereka.',
    },
    {
        icon: Library,
        title: 'Dokumen & arsip',
        text: 'Simpan dokumen penting dan temukan kembali informasi dengan lebih cepat.',
    },
    {
        icon: HeartPulse,
        title: 'Layanan & dukungan',
        text: 'Catat permintaan, tindak lanjut, dan status layanan secara terstruktur.',
    },
    {
        icon: LayoutDashboard,
        title: 'Laporan siap pakai',
        text: 'Laporan transaksi, aktivitas, dan data utama dapat dilihat kapan saja.',
    },
    {
        icon: ShieldCheck,
        title: 'Hak akses pengguna',
        text: 'Setiap anggota hanya melihat fitur dan data yang sesuai dengan tugasnya.',
    },
];

export default function CardListV1() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('card-list-v1--visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="card-list-v1">
            <div className="card-list-v1__shell">
                <h2 className="card-list-v1__heading">
                    Satu Sistem untuk{' '}
                    <span className="card-list-v1__heading-accent">Seluruh Kebutuhan Bisnis</span>
                </h2>

                <div className="card-list-v1__grid">
                    {features.map((feature) => (
                        <article key={feature.title} className="card-list-v1__card">
                            <span className="card-list-v1__icon" aria-hidden="true">
                                <feature.icon size={20} strokeWidth={2.2} />
                            </span>
                            <div>
                                <h3 className="card-list-v1__title">{feature.title}</h3>
                                <p className="card-list-v1__text">{feature.text}</p>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
