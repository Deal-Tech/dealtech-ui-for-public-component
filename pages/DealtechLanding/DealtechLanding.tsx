import { useEffect, useRef } from 'react';
import { GitPullRequest, Github, Info, Layers3 } from 'lucide-react';

import SimpleFooterV2 from '../../elements/Footer/SimpleFooterV2/SimpleFooterV2';
import SimpleHeaderV2 from '../../elements/Header/SimpleHeaderV2/SimpleHeaderV2';
import AboutV6 from '../../sections/About/AboutV6/AboutV6';

import './dealtech-landing.css';
import './about-v1.css';

const dashboardImage = new URL('./assets/demo-dashboard.svg', import.meta.url).href;
const aboutImage = new URL('../../sections/About/AboutV1/assets/demo-dashboard.svg', import.meta.url).href;

const testedModels = [
    {
        title: 'Gemini',
        description: 'Berhasil memahami panduan dan menerapkan struktur komponen dengan baik.',
    },
    {
        title: 'Claude',
        description: 'Berhasil mengikuti pola desain dan menghasilkan section yang dapat digunakan.',
    },
    {
        title: 'Codex',
        description: 'Berhasil membaca aturan proyek dan menjaga implementasi tetap konsisten.',
    },
];

export default function DealtechLanding() {
    const heroRef = useRef<HTMLElement>(null);
    const aboutRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const prefix = entry.target.classList.contains('about-v1__reveal') ? 'about-v1' : 'hero-v6';
                        entry.target.classList.add(`${prefix}__visible`);
                        entry.target.classList.remove(`${prefix}__hidden`);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        [heroRef.current, aboutRef.current].forEach((section) => {
            section?.querySelectorAll('.hero-v6__reveal, .about-v1__reveal').forEach((element) => observer.observe(element));
        });
        return () => observer.disconnect();
    }, []);

    return (
        <div className="dealtech-landing-page">
            <SimpleHeaderV2 />
            <main className="dealtech-landing-page__main">
                <section ref={heroRef} id="home" className="hero-v6">
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
                                        <Github size={18} aria-hidden="true" /> UI Admin
                                    </a>
                                    <a className="hero-v6__button hero-v6__button--secondary" href="https://github.com/Deal-Tech/dealtech-ui-for-public-component" target="_blank" rel="noreferrer">
                                        <Github size={18} aria-hidden="true" /> UI For Public
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
                <AboutV6
                    id="pengujian-model"
                    badgeLabel="HASIL UJI MODEL"
                    badgeHref={null}
                    title="Sudah Kami Uji pada 3 Model dengan Kemampuan Paling Dasar dan"
                    titleAccent="Hasilnya Work!"
                    description="Gemini, Claude, dan Codex dapat mengikuti panduan komponen dengan baik. Artinya, struktur dan instruksi Dealtech UI tetap mudah dipahami tanpa menghabiskan banyak token hanya untuk urusan tampilan."
                    benefits={testedModels}
                />
                <section ref={aboutRef} id="tentang" className="about-v1">
                    <div className="about-v1__shell">
                        <div className="about-v1__content">
                            <span className="about-v1__eyebrow about-v1__reveal about-v1__hidden">
                                <Info size={16} strokeWidth={2.5} aria-hidden="true" /> Terbuka untuk Semua
                            </span>

                            <h2 className="about-v1__title about-v1__reveal about-v1__hidden">
                                Siapa Pun Bisa Memakai,{' '}
                                <span className="about-v1__title-accent">Bahkan Mengembangkan</span>
                            </h2>

                            <p className="about-v1__description about-v1__reveal about-v1__hidden">
                                Dealtech UI bebas dipakai dan disesuaikan oleh siapa saja. Punya ide, perbaikan, atau
                                komponen baru? Kembangkan bersama kami dengan mengirim pull request.
                            </p>

                            <div className="about-v1__action about-v1__reveal about-v1__hidden">
                                <a className="about-v1__button" href="https://github.com/Deal-Tech/dealtech-ui-for-public-component/pulls" target="_blank" rel="noreferrer">
                                    <GitPullRequest size={18} aria-hidden="true" /> Kirim Pull Request
                                </a>
                            </div>
                        </div>

                        <div className="about-v1__visual about-v1__reveal about-v1__hidden">
                            <img
                                src={aboutImage}
                                alt="Kumpulan komponen antarmuka Dealtech UI."
                                width={1460}
                                height={1078}
                                decoding="async"
                            />
                        </div>
                    </div>
                </section>
            </main>
            <SimpleFooterV2 description="Kumpulan komponen UI siap pakai untuk dashboard admin dan halaman publik yang responsif, konsisten, dan mudah disesuaikan." />
        </div>
    );
}
