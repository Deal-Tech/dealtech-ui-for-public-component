import { useEffect } from 'react';
import { CheckCircle2 } from 'lucide-react';

import './cta-v1.css';

const dashboardImage = new URL('./assets/demo-dashboard.svg', import.meta.url).href;
const portalImage = new URL('./assets/demo-portal.svg', import.meta.url).href;

const demoImages = [
    {
        src: dashboardImage,
        alt: 'Preview dashboard dari koleksi Dealtech UI.',
        width: 1460,
        height: 1078,
    },
    {
        src: portalImage,
        alt: 'Preview portal dari koleksi Dealtech UI.',
        width: 1460,
        height: 1078,
    },
];

const trust = ['Komponen publik siap pakai', 'Responsif sejak awal', 'Mudah disesuaikan'];

export default function CTAV1() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('cta-v1__fade-in');
                        entry.target.classList.remove('cta-v1__opacity-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        document.querySelectorAll('.cta-v1 .cta-v1__reveal').forEach((element) => observer.observe(element));
        return () => observer.disconnect();
    }, []);

    return (
        <section className="cta-v1">
            <div className="cta-v1__inner">
                <div className="cta-v1__content">
                    <h2 className="cta-v1__title cta-v1__reveal cta-v1__opacity-0">
                        <span>Sederhanakan Design UI, Pakai</span>{' '}
                        <span className="cta-v1__title-accent">Dealtech UI</span>{' '}
                        <span>For Public Components</span>
                    </h2>

                    <p className="cta-v1__description cta-v1__reveal cta-v1__opacity-0">
                        Rancang halaman lebih cepat dengan komponen UI siap pakai yang responsif, konsisten, dan mudah
                        disesuaikan untuk berbagai kebutuhan proyek.
                    </p>

                    <div className="cta-v1__actions cta-v1__reveal cta-v1__opacity-0">
                        <a className="cta-v1__button" href="#fitur">
                            Jelajahi Komponen
                        </a>
                    </div>

                    <ul className="cta-v1__trust cta-v1__reveal cta-v1__opacity-0">
                        {trust.map((item) => (
                            <li key={item}>
                                <CheckCircle2 size={15} strokeWidth={2.5} aria-hidden="true" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <div className="cta-v1__demo cta-v1__reveal cta-v1__opacity-0">
                        <p className="cta-v1__demo-title">Preview komponen Dealtech UI:</p>
                        <div className="cta-v1__demo-list">
                            {demoImages.map((image) => (
                                <img
                                    key={image.src}
                                    src={image.src}
                                    alt={image.alt}
                                    width={image.width}
                                    height={image.height}
                                    loading="lazy"
                                    decoding="async"
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
