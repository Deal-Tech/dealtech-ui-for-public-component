import { useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';

import './section-v6.css';

const dashboardImage = new URL('./assets/demo-dashboard.svg', import.meta.url).href;

export default function SectionV6() {
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
        <section ref={sectionRef} id="home" className="hero-v6">
            <div className="hero-v6__surface">
                <div className="hero-v6__shell">
                    <div className="hero-v6__content">
                        <span className="hero-v6__eyebrow hero-v6__reveal hero-v6__hidden">
                            <AlertCircle size={16} strokeWidth={2.5} aria-hidden="true" /> Versi 6
                        </span>

                        <h1 className="hero-v6__title hero-v6__reveal hero-v6__hidden">
                            <span>Sederhanakan Operasional dalam</span>{' '}
                            <span className="hero-v6__title-accent">Satu Dashboard</span>
                        </h1>

                        <p className="hero-v6__description hero-v6__reveal hero-v6__hidden">
                            Data, transaksi, kehadiran, sampai laporan tercatat rapi dalam satu sistem. Tim berhenti
                            merekap manual, dan pengguna bisa memantau sendiri dari HP.
                        </p>

                        <div className="hero-v6__actions hero-v6__reveal hero-v6__hidden">
                            <a className="hero-v6__button hero-v6__button--primary" href="#harga">
                                Daftar &amp; Coba Gratis
                            </a>
                            <a className="hero-v6__button hero-v6__button--secondary" href="#fitur">
                                Lihat Fitur
                            </a>
                        </div>
                    </div>

                    <div className="hero-v6__visual hero-v6__reveal hero-v6__hidden">
                        <img
                            src={dashboardImage}
                            alt="Dashboard aplikasi dengan ringkasan angka, grafik, dan transaksi terbaru."
                            width={1460}
                            height={1078}
                            decoding="async"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
