import PriceCardV1 from '../../../elements/Card/PriceCardV1/PriceCardV1';

import './pricelist-v1.css';

export default function PricelistV1() {
    return (
        <section id="harga" className="pricelist-v1">
            <div className="pricelist-v1__shell">
                <span className="pricelist-v1__eyebrow">PriceList/PricelistV1</span>
                <h2 className="pricelist-v1__heading">
                    Pilih Akses Sesuai{' '}
                    <span className="pricelist-v1__accent">Kebutuhan Proyek Anda</span>
                </h2>
                <p className="pricelist-v1__subtitle">
                    Pilih koleksi Dealtech UI yang sesuai dan tingkatkan akses kapan saja saat proyek berkembang.
                </p>
                <PriceCardV1 />
            </div>
        </section>
    );
}
