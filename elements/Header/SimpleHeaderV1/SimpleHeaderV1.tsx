import './simple-header-v1.css';

export interface SimpleHeaderV1Props {
    highlight?: string;
    description?: string;
    ctaLabel?: string;
    ctaHref?: string;
}

export default function SimpleHeaderV1({
    highlight = 'Gratis untuk 25 pengguna.',
    description = 'Tanpa instalasi dan tanpa batas waktu.',
    ctaLabel = 'Coba Gratis',
    ctaHref = '#harga',
}: SimpleHeaderV1Props) {
    return (
        <header className="simple-header-v1">
            <div className="simple-header-v1__content">
                <div className="simple-header-v1__text">
                    <strong className="simple-header-v1__highlight">{highlight}</strong> {description}
                    <a className="simple-header-v1__cta" href={ctaHref}>
                        {ctaLabel}
                    </a>
                </div>
            </div>
        </header>
    );
}
