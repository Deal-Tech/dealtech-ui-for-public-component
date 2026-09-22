import { useEffect, useRef } from 'react';
import { Layers3 } from 'lucide-react';

import SimpleFooterV2 from '../../elements/Footer/SimpleFooterV2/SimpleFooterV2';
import SimpleHeaderV2 from '../../elements/Header/SimpleHeaderV2/SimpleHeaderV2';

import './dealtech-landing.css';

const dashboardImage = new URL('./assets/demo-dashboard.svg', import.meta.url).href;

export default function DealtechLanding() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-v6__visible');
                        entry.target.classList.remove('hero-v6__hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        section.querySelectorAll('.hero-v6__reveal').forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <div className="dealtech-landing-page">
            <SimpleHeaderV2 />
            <main className="dealtech-landing-page__main">
                <section ref={sectionRef} id="home" className="hero-v6">
                    <div className="hero-v6__surface">
                        <div className="hero-v6__shell">
                            <div className="hero-v6__content">
                                <span className="hero-v6__eyebrow hero-v6__reveal hero-v6__hidden">
                                    <Layers3 size={16} strokeWidth={2.5} aria-hidden="true" /> Komponen UI siap pakai
                                </span>

                                <h1 className="hero-v6__title hero-v6__reveal hero-v6__hidden">
                                    <span>Bangun lebih cepat dengan</span>{' '}
                                    <span className="hero-v6__title-accent">Dealtech UI</span>{' '}
                                    <span>untuk Admin dan Public</span>
                                </h1>

                                <p className="hero-v6__description hero-v6__reveal hero-v6__hidden">
                                    Koleksi komponen UI untuk dashboard admin dan halaman publik. Responsif, konsisten,
                                    dan mudah disesuaikan untuk kebutuhan proyekmu.
                                </p>

                                <div className="hero-v6__actions hero-v6__reveal hero-v6__hidden">
                                    <a className="hero-v6__button hero-v6__button--primary" href="https://github.com/Deal-Tech/dealtech-ui" target="_blank" rel="noreferrer">
                                        UI Admin
                                    </a>
                                    <a className="hero-v6__button hero-v6__button--secondary" href="https://github.com/Deal-Tech/dealtech-ui-for-public-component" target="_blank" rel="noreferrer">
                                        UI For Public
                                    </a>
                                </div>
                            </div>

                            <div className="hero-v6__visual hero-v6__reveal hero-v6__hidden">
                                <img
                                    src={dashboardImage}
                                    alt="Preview dashboard Dealtech UI."
                                    width={1460}
                                    height={1078}
                                    decoding="async"
                                />
                            </div>
                        </div>
                    </div>
                </section>
            </main>
            <SimpleFooterV2 description="Kumpulan komponen UI siap pakai untuk dashboard admin dan halaman publik yang responsif, konsisten, dan mudah disesuaikan." />
        </div>
    );
}
