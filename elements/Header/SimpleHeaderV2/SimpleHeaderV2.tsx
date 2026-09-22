import { useEffect, useId, useRef, useState } from 'react';
import { ArrowRight, BookOpen, ChevronDown, Github, Layers3, LayoutTemplate, Menu, PanelsTopLeft, X } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

import './simple-header-v2.css';

const repositoryUrl = 'https://github.com/Deal-Tech/dealtech-ui-for-public-component';

export interface SimpleHeaderV2MegaLink {
    label: string;
    description: string;
    href: string;
    icon?: LucideIcon;
}

export interface SimpleHeaderV2NavItem {
    label: string;
    href?: string;
    mega?: SimpleHeaderV2MegaLink[];
    megaFooter?: { label: string; href: string };
}

export interface SimpleHeaderV2Props {
    brand?: string;
    brandHref?: string;
    navItems?: SimpleHeaderV2NavItem[];
    ctaLabel?: string;
    ctaHref?: string;
}

const defaultNavItems: SimpleHeaderV2NavItem[] = [
    { label: 'Beranda', href: '/' },
    {
        label: 'Komponen',
        mega: [
            { label: 'Elements', description: 'Elemen UI dasar yang siap disalin.', href: `${repositoryUrl}/tree/main/elements`, icon: PanelsTopLeft },
            { label: 'Sections', description: 'Bagian halaman yang berdiri sendiri.', href: `${repositoryUrl}/tree/main/sections`, icon: Layers3 },
            { label: 'Pages', description: 'Contoh halaman lengkap.', href: `${repositoryUrl}/tree/main/pages`, icon: LayoutTemplate },
            { label: 'Playground', description: 'Lihat variasi komponen secara langsung.', href: '/playground', icon: BookOpen },
        ],
        megaFooter: { label: 'Lihat semua komponen', href: repositoryUrl },
    },
    { label: 'Playground', href: '/playground' },
    { label: 'Dokumentasi', href: `${repositoryUrl}#readme` },
];

const isExternal = (href: string) => /^https?:\/\//.test(href);

export default function SimpleHeaderV2({
    brand = 'Dealtech UI',
    brandHref = '/',
    navItems = defaultNavItems,
    ctaLabel = 'Jelajahi Komponen',
    ctaHref = '/playground',
}: SimpleHeaderV2Props) {
    const headerRef = useRef<HTMLElement>(null);
    const id = useId();
    const [openMenu, setOpenMenu] = useState<string | null>(null);
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [mobileMenu, setMobileMenu] = useState<string | null>(null);
    const currentPath = typeof window === 'undefined' ? '/' : window.location.pathname.replace(/\/+$/, '') || '/';

    useEffect(() => {
        const onPointerDown = (event: PointerEvent) => {
            if (!headerRef.current?.contains(event.target as Node)) setOpenMenu(null);
        };
        const onKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                setOpenMenu(null);
                setDrawerOpen(false);
            }
        };

        document.addEventListener('pointerdown', onPointerDown);
        document.addEventListener('keydown', onKeyDown);
        return () => {
            document.removeEventListener('pointerdown', onPointerDown);
            document.removeEventListener('keydown', onKeyDown);
        };
    }, []);

    useEffect(() => {
        if (!drawerOpen) return;
        const previousOverflow = document.body.style.overflow;
        document.body.style.overflow = 'hidden';
        return () => { document.body.style.overflow = previousOverflow; };
    }, [drawerOpen]);

    const closeDrawer = () => {
        setDrawerOpen(false);
        setMobileMenu(null);
    };

    return (
        <>
            <header ref={headerRef} className="simple-header-v2">
                <div className="simple-header-v2__inner">
                    <a className="simple-header-v2__brand" href={brandHref} aria-label={brand}>
                        <span>{brand}</span>
                        <small>For Public Components</small>
                    </a>

                    <nav className="simple-header-v2__nav" aria-label="Menu utama">
                        {navItems.map((item, index) => item.mega?.length ? (
                            <div
                                key={item.label}
                                className={`simple-header-v2__nav-group${openMenu === item.label ? ' is-open' : ''}`}
                                onMouseEnter={() => setOpenMenu(item.label)}
                                onMouseLeave={() => setOpenMenu(null)}
                                onBlur={(event) => {
                                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setOpenMenu(null);
                                }}
                            >
                                <button
                                    type="button"
                                    className="simple-header-v2__nav-link simple-header-v2__nav-toggle"
                                    aria-expanded={openMenu === item.label}
                                    aria-controls={`${id}-mega-${index}`}
                                    onFocus={() => setOpenMenu(item.label)}
                                    onClick={() => setOpenMenu(item.label)}
                                >
                                    {item.label}
                                    <ChevronDown size={15} aria-hidden="true" />
                                </button>
                                <div className="simple-header-v2__mega" id={`${id}-mega-${index}`}>
                                    <div className="simple-header-v2__mega-grid">
                                        {item.mega.map((link) => {
                                            const Icon = link.icon ?? Layers3;
                                            return (
                                                <a
                                                    key={link.label}
                                                    href={link.href}
                                                    target={isExternal(link.href) ? '_blank' : undefined}
                                                    rel={isExternal(link.href) ? 'noreferrer' : undefined}
                                                    onClick={() => setOpenMenu(null)}
                                                >
                                                    <span className="simple-header-v2__mega-icon"><Icon size={19} aria-hidden="true" /></span>
                                                    <span>
                                                        <strong>{link.label}</strong>
                                                        <small>{link.description}</small>
                                                    </span>
                                                </a>
                                            );
                                        })}
                                    </div>
                                    {item.megaFooter && (
                                        <a
                                            className="simple-header-v2__mega-all"
                                            href={item.megaFooter.href}
                                            target={isExternal(item.megaFooter.href) ? '_blank' : undefined}
                                            rel={isExternal(item.megaFooter.href) ? 'noreferrer' : undefined}
                                        >
                                            {item.megaFooter.label} <ArrowRight size={16} aria-hidden="true" />
                                        </a>
                                    )}
                                </div>
                            </div>
                        ) : item.href ? (
                            <a
                                key={item.label}
                                className="simple-header-v2__nav-link"
                                href={item.href}
                                target={isExternal(item.href) ? '_blank' : undefined}
                                rel={isExternal(item.href) ? 'noreferrer' : undefined}
                                aria-current={item.href === currentPath ? 'page' : undefined}
                            >
                                {item.label}
                            </a>
                        ) : null)}
                    </nav>

                    <div className="simple-header-v2__actions">
                        <a className="simple-header-v2__github" href={repositoryUrl} target="_blank" rel="noreferrer">
                            <Github size={17} aria-hidden="true" /> GitHub
                        </a>
                        <a className="simple-header-v2__cta" href={ctaHref}>
                            {ctaLabel} <ArrowRight size={17} aria-hidden="true" />
                        </a>
                    </div>

                    <button
                        className="simple-header-v2__menu-button"
                        type="button"
                        aria-label="Buka menu"
                        aria-expanded={drawerOpen}
                        aria-controls={`${id}-drawer`}
                        onClick={() => setDrawerOpen(true)}
                    >
                        <Menu size={22} aria-hidden="true" />
                    </button>
                </div>
            </header>

            <div className={`simple-header-v2__overlay${drawerOpen ? ' is-open' : ''}`} onClick={closeDrawer} aria-hidden="true" />
            <aside id={`${id}-drawer`} className={`simple-header-v2__drawer${drawerOpen ? ' is-open' : ''}`} aria-hidden={!drawerOpen}>
                <div className="simple-header-v2__drawer-head">
                    <strong>{brand}</strong>
                    <button type="button" onClick={closeDrawer} aria-label="Tutup menu"><X size={20} aria-hidden="true" /></button>
                </div>
                <nav aria-label="Menu seluler">
                    {navItems.map((item, index) => item.mega?.length ? (
                        <div className="simple-header-v2__drawer-group" key={item.label}>
                            <button
                                type="button"
                                aria-expanded={mobileMenu === item.label}
                                aria-controls={`${id}-mobile-mega-${index}`}
                                onClick={() => setMobileMenu(mobileMenu === item.label ? null : item.label)}
                            >
                                {item.label} <ChevronDown size={17} aria-hidden="true" />
                            </button>
                            {mobileMenu === item.label && (
                                <div className="simple-header-v2__drawer-mega" id={`${id}-mobile-mega-${index}`}>
                                    {item.mega.map((link) => (
                                        <a
                                            key={link.label}
                                            href={link.href}
                                            target={isExternal(link.href) ? '_blank' : undefined}
                                            rel={isExternal(link.href) ? 'noreferrer' : undefined}
                                            onClick={closeDrawer}
                                        >
                                            <strong>{link.label}</strong>
                                            <small>{link.description}</small>
                                        </a>
                                    ))}
                                    {item.megaFooter && (
                                        <a
                                            className="simple-header-v2__drawer-mega-all"
                                            href={item.megaFooter.href}
                                            target={isExternal(item.megaFooter.href) ? '_blank' : undefined}
                                            rel={isExternal(item.megaFooter.href) ? 'noreferrer' : undefined}
                                            onClick={closeDrawer}
                                        >
                                            {item.megaFooter.label}
                                        </a>
                                    )}
                                </div>
                            )}
                        </div>
                    ) : item.href ? (
                        <a
                            key={item.label}
                            href={item.href}
                            target={isExternal(item.href) ? '_blank' : undefined}
                            rel={isExternal(item.href) ? 'noreferrer' : undefined}
                            onClick={closeDrawer}
                        >
                            {item.label}
                        </a>
                    ) : null)}
                </nav>
                <a className="simple-header-v2__drawer-cta" href={ctaHref} onClick={closeDrawer}>
                    {ctaLabel} <ArrowRight size={17} aria-hidden="true" />
                </a>
            </aside>
        </>
    );
}
