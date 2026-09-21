import { useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';

import './section-v5.css';

const metrics = [
    { value: '10K+', label: 'Pengguna Aktif' },
    { value: '350+', label: 'Tim Berkembang' },
    { value: '99.9%', label: 'Waktu Aktif' },
];

const dashboardImage = new URL('./assets/demo-dashboard.svg', import.meta.url).href;

export default function SectionV5() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-v5__visible');
                        entry.target.classList.remove('hero-v5__hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        section.querySelectorAll('.hero-v5__reveal').forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home" className="hero-v5">
            <div className="hero-v5__shell">
                <div className="hero-v5__content">
                    <span className="hero-v5__eyebrow hero-v5__reveal hero-v5__hidden">
                        <AlertCircle size={16} strokeWidth={2.5} aria-hidden="true" /> Versi 5
                    </span>

                    <h1 className="hero-v5__title hero-v5__reveal hero-v5__hidden">
                        <span>Sederhanakan Operasional dalam</span>{' '}
                        <span className="hero-v5__title-accent">Satu Dashboard</span>
                    </h1>

                    <p className="hero-v5__description hero-v5__reveal hero-v5__hidden">
                        Data, transaksi, kehadiran, sampai laporan tercatat rapi dalam satu sistem. Tim berhenti
                        merekap manual, dan pengguna bisa memantau sendiri dari HP.
                    </p>

                    <div className="hero-v5__actions hero-v5__reveal hero-v5__hidden">
                        <a className="hero-v5__button hero-v5__button--primary" href="#harga">
                            Daftar &amp; Coba Gratis
                        </a>
                        <a className="hero-v5__button hero-v5__button--secondary" href="#fitur">
                            Lihat Fitur
                        </a>
                    </div>

                    <div className="hero-v5__metrics hero-v5__reveal hero-v5__hidden">
                        {metrics.map((metric) => (
                            <div className="hero-v5__metric" key={metric.label}>
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="hero-v5__visual hero-v5__reveal hero-v5__hidden">
                    <img
                        src={dashboardImage}
                        alt="Dashboard aplikasi dengan ringkasan angka, grafik, dan transaksi terbaru."
                        width={1460}
                        height={1078}
                        decoding="async"
                    />
                </div>
            </div>

            <svg
                className="hero-v5__shape"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
                aria-hidden="true"
            >
                <path
                    className="hero-v5__shape-shadow"
                    d="M0 3H530C620 3 625 65 720 65C815 65 820 3 910 3H1440V100H0Z"
                />
                <path d="M0 12H530C620 12 625 74 720 74C815 74 820 12 910 12H1440V100H0Z" />
            </svg>
        </section>
    );
}
