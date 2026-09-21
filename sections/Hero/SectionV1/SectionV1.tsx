import { useEffect } from 'react';
import { AlertCircle, CheckCircle2 } from 'lucide-react';

import './section-v1.css';

// Ganti sesuai kebutuhan
const demoImages = [
    {
        src: '/images/hero-section-v1/demo-dashboard.svg',
        alt: 'Dashboard aplikasi: ringkasan angka utama, grafik tren bulanan, dan tabel transaksi terbaru.',
        width: 1460,
        height: 1078,
    },
    {
        src: '/images/hero-section-v1/demo-portal.svg',
        alt: 'Portal pengguna: kartu profil, ringkasan saldo, daftar tagihan beserta statusnya, dan riwayat aktivitas.',
        width: 1460,
        height: 1078,
    },
];

const eyebrow = 'Versi 1';
const title = 'Sederhanakan Design UI, Pakai';
const titleAccent = 'Dealtech UI';
const titleSuffix = 'For Public Components';
const description =
    'Rancang halaman lebih cepat dengan komponen UI siap pakai yang responsif, konsisten, dan mudah disesuaikan untuk berbagai kebutuhan proyek.';

const primaryCta = { label: 'Daftar & Coba Gratis', href: '#harga' };
const secondaryCta = { label: 'Lihat Fitur', href: '#fitur' };

const trust = [
    'Gratis untuk 25 pengguna pertama',
    'Tanpa instalasi, langsung dipakai',
    'Impor data dari Excel',
];

const demoTitle = 'Beginilah tampilan sistemnya:';

export default function SectionV1() {
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('sl-fade-in');
                        entry.target.classList.remove('sl-opacity-0');
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        document.querySelectorAll('.home-hero-section .sl-reveal').forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section id="home" className="home-hero-section">
            <div className="home-hero">
                <div className="home-hero__content">
                    <span className="lp-eyebrow sl-reveal sl-opacity-0">
                        <AlertCircle size={16} strokeWidth={2.5} aria-hidden="true" /> {eyebrow}
                    </span>

                    <h1 className="home-hero__title sl-reveal sl-opacity-0">
                        <span>{title}</span> <span className="home-hero__title-accent">{titleAccent}</span>{' '}
                        <span>{titleSuffix}</span>
                    </h1>

                    <p className="home-hero__description sl-reveal sl-opacity-0">{description}</p>

                    <div className="home-hero__actions sl-reveal sl-opacity-0">
                        <a className="home-hero__button home-hero__button--primary" href={primaryCta.href}>
                            <span>{primaryCta.label}</span>
                        </a>
                        <a className="home-hero__button home-hero__button--secondary" href={secondaryCta.href}>
                            <span>{secondaryCta.label}</span>
                        </a>
                    </div>

                    <ul className="home-hero__trust sl-reveal sl-opacity-0">
                        {trust.map((item) => (
                            <li key={item}>
                                <CheckCircle2 size={15} strokeWidth={2.5} /> {item}
                            </li>
                        ))}
                    </ul>

                    <div className="home-hero__demo sl-reveal sl-opacity-0">
                        <p className="home-hero__demo-title">{demoTitle}</p>
                        <div className="home-hero__demo-list">
                            {demoImages.map((img) => (
                                <img
                                    key={img.src}
                                    src={img.src}
                                    alt={img.alt}
                                    width={img.width}
                                    height={img.height}
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
