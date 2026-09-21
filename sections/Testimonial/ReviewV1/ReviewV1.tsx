import { useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

import './review-v1.css';

const reviews = [
    {
        name: 'A**** M. — Finance Manager',
        text: 'Dulu rekap tagihan membutuhkan beberapa hari setiap awal bulan. Sekarang tim tinggal membuka laporan dan langsung mengetahui pembayaran yang belum selesai.',
    },
    {
        name: 'R**** H. — Customer Support',
        text: 'Pelanggan tidak lagi menghubungi admin hanya untuk menanyakan status transaksi. Mereka bisa memeriksanya sendiri, sehingga tim jauh lebih lega.',
    },
    {
        name: 'S**** F. — Operations Lead',
        text: 'Data pelanggan, transaksi, aktivitas, dan laporan kini berada dalam satu sistem. Saat audit, semua informasi siap digunakan.',
    },
];

export default function ReviewV1() {
    const sectionRef = useRef<HTMLElement>(null);
    const reviewTrackRef = useRef<HTMLDivElement>(null);

    const slideReview = (direction: -1 | 1) => {
        const track = reviewTrackRef.current;
        if (!track) return;

        const card = track.querySelector('.review-v1__card');
        const step = card ? card.getBoundingClientRect().width + 16 : track.clientWidth;
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        track.scrollBy({ left: direction * step, behavior: reduceMotion ? 'auto' : 'smooth' });
    };

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    section.classList.add('review-v1--visible');
                    observer.disconnect();
                }
            },
            { threshold: 0.12, rootMargin: '0px 0px -40px 0px' },
        );

        observer.observe(section);
        return () => observer.disconnect();
    }, []);

    return (
        <section ref={sectionRef} className="review-v1">
            <div className="review-v1__shell">
                <h2 className="review-v1__heading">
                    Sudah Dipakai Berbagai Tim untuk{' '}
                    <span className="review-v1__heading-accent">Berhenti Mencatat Manual</span>
                </h2>

                <p className="review-v1__subtitle">
                    Dibangun bersama pengguna agar sesuai dengan kebutuhan operasional sehari-hari.
                </p>

                <div className="review-v1__slider">
                    <div className="review-v1__track" ref={reviewTrackRef}>
                        {reviews.map((review) => (
                            <article key={review.name} className="review-v1__card">
                                <div className="review-v1__stars" aria-label="Nilai 5 dari 5">
                                    {Array.from({ length: 5 }).map((_, index) => (
                                        <Star
                                            key={index}
                                            size={14}
                                            strokeWidth={0}
                                            fill="currentColor"
                                            aria-hidden="true"
                                        />
                                    ))}
                                </div>
                                <p className="review-v1__text">{review.text}</p>
                                <span className="review-v1__name">{review.name}</span>
                            </article>
                        ))}
                    </div>

                    <div className="review-v1__nav">
                        <button
                            type="button"
                            className="review-v1__nav-button"
                            onClick={() => slideReview(-1)}
                            aria-label="Ulasan sebelumnya"
                        >
                            <ChevronLeft size={18} strokeWidth={2.2} aria-hidden="true" />
                        </button>
                        <button
                            type="button"
                            className="review-v1__nav-button"
                            onClick={() => slideReview(1)}
                            aria-label="Ulasan berikutnya"
                        >
                            <ChevronRight size={18} strokeWidth={2.2} aria-hidden="true" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
