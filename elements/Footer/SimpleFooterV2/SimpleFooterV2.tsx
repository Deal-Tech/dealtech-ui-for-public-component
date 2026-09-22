import { ArrowRight, Github } from 'lucide-react';

import './simple-footer-v2.css';

const repositoryUrl = 'https://github.com/Deal-Tech/dealtech-ui-for-public-component';
const logoUrl = 'https://ik.imagekit.io/sja4kckbn/AsetDealTech/panel%20dealtechui.png';

const componentLinks = [
    { label: 'Playground', href: '/playground' },
    { label: 'Elements', href: `${repositoryUrl}/tree/main/elements` },
    { label: 'Sections', href: `${repositoryUrl}/tree/main/sections` },
    { label: 'Pages', href: `${repositoryUrl}/tree/main/pages` },
];

const resourceLinks = [
    { label: 'Dokumentasi', href: `${repositoryUrl}#readme` },
    { label: 'Lisensi MIT', href: `${repositoryUrl}/blob/main/LICENSE` },
    { label: 'Tentang DealTech', href: 'https://tech.mudahdeal.com/' },
];

const sectionLinks = [
    { label: 'Hero', href: `${repositoryUrl}/tree/main/sections/Hero` },
    { label: 'Features', href: `${repositoryUrl}/tree/main/sections/Features` },
    { label: 'Pricing', href: `${repositoryUrl}/tree/main/sections/PriceList` },
    { label: 'FAQ', href: `${repositoryUrl}/tree/main/sections/FAQ` },
    { label: 'Contact', href: `${repositoryUrl}/tree/main/sections/Contact` },
];

export interface SimpleFooterV2Props {
    brand?: string;
    description?: string;
    year?: number;
}

export default function SimpleFooterV2({
    brand = 'Dealtech UI',
    description = 'Kumpulan komponen UI publik siap pakai untuk membangun halaman yang responsif, konsisten, dan mudah disesuaikan.',
    year = new Date().getFullYear(),
}: SimpleFooterV2Props) {
    return (
        <footer className="simple-footer-v2">
            <div className="simple-footer-v2__inner">
                <div className="simple-footer-v2__grid">
                    <div className="simple-footer-v2__brand-column">
                        <a className="simple-footer-v2__brand" href="/" aria-label={brand}>
                            <img src={logoUrl} alt={brand} />
                        </a>
                        <p className="simple-footer-v2__description">{description}</p>
                        <a
                            className="simple-footer-v2__social"
                            href={repositoryUrl}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Dealtech UI di GitHub"
                        >
                            <Github size={18} aria-hidden="true" />
                        </a>
                    </div>

                    <div className="simple-footer-v2__links-column">
                        <div>
                            <h2>Jelajahi</h2>
                            <nav aria-label="Jelajahi komponen">
                                {componentLinks.map((link) => (
                                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noreferrer' : undefined}>
                                        {link.label}
                                    </a>
                                ))}
                            </nav>
                        </div>
                        <div>
                            <h2>Informasi</h2>
                            <nav aria-label="Informasi Dealtech UI">
                                {resourceLinks.map((link) => (
                                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                                ))}
                            </nav>
                        </div>
                    </div>

                    <div className="simple-footer-v2__action-column">
                        <h2>Mulai Bangun UI</h2>
                        <p>Temukan variasi elemen dan section yang dapat langsung kamu sesuaikan untuk proyekmu.</p>
                        <a className="simple-footer-v2__cta" href="/playground">
                            Buka Playground <ArrowRight size={17} aria-hidden="true" />
                        </a>
                        <p className="simple-footer-v2__credit">
                            Dikembangkan oleh <a href="https://tech.mudahdeal.com/" target="_blank" rel="noreferrer">tech.mudahdeal.com</a>
                        </p>
                    </div>
                </div>

                <nav className="simple-footer-v2__sections" aria-label="Kategori section">
                    {sectionLinks.map((link) => (
                        <a key={link.label} href={link.href} target="_blank" rel="noreferrer">{link.label}</a>
                    ))}
                </nav>

                <div className="simple-footer-v2__bottom">
                    <p>&copy; {year} {brand}. Lisensi MIT.</p>
                    <a href={repositoryUrl} target="_blank" rel="noreferrer">Lihat di GitHub</a>
                </div>
            </div>
        </footer>
    );
}
