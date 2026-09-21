import { useEffect, useRef } from 'react';
import { AlertCircle, Search } from 'lucide-react';

import './section-v9.css';

const filters = [
    { label: 'Kategori', options: ['Semua', 'Operasional', 'Keuangan', 'Laporan'] },
    { label: 'Periode', options: ['Semua', 'Hari Ini', 'Bulan Ini', 'Tahun Ini'] },
    { label: 'Status', options: ['Semua', 'Aktif', 'Proses', 'Selesai'] },
];

export default function SectionV9() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-v9__visible');
                        entry.target.classList.remove('hero-v9__hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        section.querySelectorAll('.hero-v9__reveal').forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home" className="hero-v9">
            <div className="hero-v9__shell">
                <div className="hero-v9__content">
                    <span className="hero-v9__eyebrow hero-v9__reveal hero-v9__hidden">
                        <AlertCircle size={16} strokeWidth={2.5} aria-hidden="true" /> Versi 9
                    </span>

                    <h1 className="hero-v9__title hero-v9__reveal hero-v9__hidden">
                        <span>Sederhanakan Operasional dalam</span>{' '}
                        <span className="hero-v9__title-accent">Satu Dashboard</span>
                    </h1>

                    <p className="hero-v9__description hero-v9__reveal hero-v9__hidden">
                        Data, transaksi, kehadiran, sampai laporan tercatat rapi dalam satu sistem. Tim berhenti
                        merekap manual, dan pengguna bisa memantau sendiri dari HP.
                    </p>
                </div>

                <div className="hero-v9__visual hero-v9__reveal hero-v9__hidden">
                    <form className="hero-v9__finder" onSubmit={(event) => event.preventDefault()}>
                        <h2>Cari Kebutuhan</h2>

                        <label className="hero-v9__query">
                            <Search size={17} strokeWidth={2} aria-hidden="true" />
                            <input type="search" placeholder="Nama layanan, kategori, atau kata kunci..." />
                        </label>

                        <div className="hero-v9__filters">
                            {filters.map((filter) => (
                                <label className="hero-v9__filter" key={filter.label}>
                                    <span>{filter.label}</span>
                                    <select defaultValue="Semua">
                                        {filter.options.map((option) => (
                                            <option key={option}>{option}</option>
                                        ))}
                                    </select>
                                </label>
                            ))}
                        </div>

                        <button type="submit">
                            Cari Sekarang <Search size={15} strokeWidth={2.5} aria-hidden="true" />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
