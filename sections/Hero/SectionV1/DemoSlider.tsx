import { useEffect, useRef, useState } from 'react';

export type DemoImage = { src: string; alt: string; width: number; height: number };

const MOBILE_QUERY = '(max-width: 900px)';

export default function DemoSlider({ images, intervalMs = 7000 }: { images: DemoImage[]; intervalMs?: number }) {
    const trackRef = useRef<HTMLDivElement | null>(null);
    const ditahanRef = useRef(false);
    const [aktif, setAktif] = useState(0);
    const [mobile, setMobile] = useState(false);

    useEffect(() => {
        const mq = window.matchMedia(MOBILE_QUERY);
        const perbarui = () => setMobile(mq.matches);
        perbarui();
        mq.addEventListener('change', perbarui);
        return () => mq.removeEventListener('change', perbarui);
    }, []);

    // Titik penanda ikut posisi gulir
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const onScroll = () => {
            const lebar = track.clientWidth || 1;
            const indeks = Math.round(track.scrollLeft / lebar);
            setAktif(Math.min(images.length - 1, Math.max(0, indeks)));
        };

        track.addEventListener('scroll', onScroll, { passive: true });
        return () => track.removeEventListener('scroll', onScroll);
    }, [images.length]);

    // Geser otomatis hanya di mobile
    useEffect(() => {
        if (!mobile || images.length < 2) return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

        const timer = setInterval(() => {
            const track = trackRef.current;
            if (!track || ditahanRef.current) return;

            const lebar = track.clientWidth || 1;
            const berikut = (Math.round(track.scrollLeft / lebar) + 1) % images.length;
            track.scrollTo({ left: berikut * lebar, behavior: 'smooth' });
        }, intervalMs);

        return () => clearInterval(timer);
    }, [mobile, images.length, intervalMs]);

    const keSlide = (i: number) => {
        const track = trackRef.current;
        if (track) track.scrollTo({ left: i * track.clientWidth, behavior: 'smooth' });
    };

    return (
        <div className="demo-slider">
            <div
                className="demo-slider__track"
                ref={trackRef}
                onPointerDown={() => (ditahanRef.current = true)}
                onPointerUp={() => (ditahanRef.current = false)}
                onPointerCancel={() => (ditahanRef.current = false)}
            >
                {images.map((img) => (
                    <div key={img.src} className="demo-slider__item">
                        <img
                            src={img.src}
                            alt={img.alt}
                            width={img.width}
                            height={img.height}
                            loading="lazy"
                            decoding="async"
                        />
                    </div>
                ))}
            </div>

            <div className="demo-slider__dots">
                {images.map((img, i) => (
                    <button
                        key={img.src}
                        type="button"
                        className={`demo-slider__dot${i === aktif ? ' is-active' : ''}`}
                        onClick={() => keSlide(i)}
                        aria-label={`Tampilkan demo ${i + 1} dari ${images.length}`}
                        aria-current={i === aktif}
                    />
                ))}
            </div>
        </div>
    );
}
