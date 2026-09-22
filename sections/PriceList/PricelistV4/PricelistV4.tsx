import { Check } from 'lucide-react';

import './pricelist-v4.css';

const plans = [
    {
        name: 'Free',
        price: 'Gratis',
        period: '',
        description: 'Untuk developer yang ingin mencoba koleksi komponen publik Dealtech UI.',
        cta: 'Mulai Gratis',
    },
    {
        name: 'Basic',
        price: 'Rp149rb',
        period: '/bulan',
        description: 'Untuk developer yang membutuhkan lebih banyak variasi dalam proyek aktif.',
        cta: 'Pilih Basic',
    },
    {
        name: 'Plus',
        price: 'Rp349rb',
        period: '/bulan',
        description: 'Untuk studio dan tim produk yang membangun banyak halaman secara konsisten.',
        cta: 'Pilih Plus',
        featured: true,
    },
    {
        name: 'Pro',
        price: 'Rp1,2jt',
        period: '/tahun',
        description: 'Untuk agency dan perusahaan yang membutuhkan koleksi serta dukungan penuh.',
        cta: 'Pilih Pro',
    },
];

const includedFeatures = [
    '25 komponen pilihan',
    'Elemen UI dasar',
    'Section landing page',
    'Design responsif',
    'Preview komponen',
    'Aset SVG lokal',
    '1 proyek personal',
];

export default function PricelistV4() {
    return (
        <section id="harga" className="pricelist-v4">
            <div className="pricelist-v4__shell">
                <h2 className="pricelist-v4__heading">
                    Pilih Akses Sesuai <span>Kebutuhan Proyek Anda</span>
                </h2>
                <p className="pricelist-v4__subtitle">
                    Pilih koleksi Dealtech UI yang sesuai dan tingkatkan akses kapan saja saat proyek berkembang.
                </p>

                <div className="pricelist-v4__grid">
                    {plans.map((plan) => (
                        <article
                            key={plan.name}
                            className={`pricelist-v4__card${plan.featured ? ' pricelist-v4__card--featured' : ''}`}
                        >
                            {plan.featured && <span className="pricelist-v4__badge">Paling populer</span>}
                            <h3>{plan.name}</h3>
                            <p className="pricelist-v4__price">
                                {plan.price}
                                {plan.period && <span>{plan.period}</span>}
                            </p>
                            <p className="pricelist-v4__description">{plan.description}</p>
                            <a href="#kontak">{plan.cta}</a>
                        </article>
                    ))}
                </div>

                <div className="pricelist-v4__included">
                    <h3>Semua paket sudah termasuk:</h3>
                    <ul>
                        {includedFeatures.map((feature) => (
                            <li key={feature}>
                                <span aria-hidden="true"><Check size={15} strokeWidth={3} /></span>
                                {feature}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}
