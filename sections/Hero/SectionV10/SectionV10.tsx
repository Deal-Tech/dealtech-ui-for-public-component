import { useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';

import SearchV2 from '../../../elements/Search/SearchV2/SearchV2';
import './section-v10.css';

const metrics = [
    { value: '10K+', label: 'Pengguna Aktif' },
    { value: '350+', label: 'Tim Berkembang' },
    { value: '99.9%', label: 'Waktu Aktif' },
];

export default function SectionV10() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-v10__visible');
                        entry.target.classList.remove('hero-v10__hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        section.querySelectorAll('.hero-v10__reveal').forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home" className="hero-v10">
            <div className="hero-v10__surface">
                <div className="hero-v10__shell">
                    <span className="hero-v10__eyebrow hero-v10__reveal hero-v10__hidden">
                        <AlertCircle size={16} strokeWidth={2.5} aria-hidden="true" /> Versi 10
                    </span>

                    <h1 className="hero-v10__title hero-v10__reveal hero-v10__hidden">
                        <span>Sederhanakan Design UI, Pakai</span>{' '}
                        <span className="hero-v10__title-accent">Dealtech UI For Public Components</span>
                    </h1>

                    <p className="hero-v10__description hero-v10__reveal hero-v10__hidden">
                        Rancang halaman lebih cepat dengan komponen UI siap pakai yang responsif, konsisten, dan
                        mudah disesuaikan untuk berbagai kebutuhan proyek.
                    </p>

                    <div className="hero-v10__search hero-v10__reveal hero-v10__hidden">
                        <SearchV2 onSubmit={(event) => event.preventDefault()} />
                    </div>

                    <div className="hero-v10__metrics hero-v10__reveal hero-v10__hidden">
                        {metrics.map((metric) => (
                            <div className="hero-v10__metric" key={metric.label}>
                                <strong>{metric.value}</strong>
                                <span>{metric.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
