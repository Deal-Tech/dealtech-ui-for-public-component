import { useEffect, useRef } from 'react';
import { AlertCircle } from 'lucide-react';

import './section-v2.css';

const eyebrow = 'Versi 2';
const title = 'Sederhanakan Operasional dalam';
const titleAccent = 'Satu Dashboard';
const description =
    'Data, transaksi, kehadiran, sampai laporan tercatat rapi dalam satu sistem. Tim berhenti merekap manual, dan pengguna bisa memantau sendiri dari HP.';

const primaryCta = { label: 'Daftar & Coba Gratis', href: '#harga' };
const secondaryCta = { label: 'Lihat Fitur', href: '#fitur' };
const dashboardImage = new URL('./assets/demo-dashboard.svg', import.meta.url).href;

export default function SectionV2() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('hero-v2__visible');
                        entry.target.classList.remove('hero-v2__hidden');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        section.querySelectorAll('.hero-v2__reveal').forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} id="home" className="hero-v2">
            <div className="hero-v2__shell">
                <div className="hero-v2__content">
                    <span className="hero-v2__eyebrow hero-v2__reveal hero-v2__hidden">
                        <AlertCircle size={16} strokeWidth={2.5} aria-hidden="true" /> {eyebrow}
                    </span>

                    <h1 className="hero-v2__title hero-v2__reveal hero-v2__hidden">
                        <span>{title}</span> <span className="hero-v2__title-accent">{titleAccent}</span>
                    </h1>

                    <p className="hero-v2__description hero-v2__reveal hero-v2__hidden">{description}</p>

                    <div className="hero-v2__actions hero-v2__reveal hero-v2__hidden">
                        <a className="hero-v2__button hero-v2__button--primary" href={primaryCta.href}>
                            <span>{primaryCta.label}</span>
                        </a>
                        <a className="hero-v2__button hero-v2__button--secondary" href={secondaryCta.href}>
                            <span>{secondaryCta.label}</span>
                        </a>
                    </div>
                </div>

                <div className="hero-v2__visual hero-v2__reveal hero-v2__hidden">
                    <img
                        src={dashboardImage}
                        alt="Dashboard aplikasi dengan ringkasan angka, grafik, dan transaksi terbaru."
                        width={1460}
                        height={1078}
                        decoding="async"
                    />
                </div>
            </div>
        </section>
    );
}
