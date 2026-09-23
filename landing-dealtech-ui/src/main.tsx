import { lazy, StrictMode, Suspense } from 'react';
import { createRoot } from 'react-dom/client';

import LandingPage from './LandingPage';
import './app.css';

const Playground = lazy(() => import('./App'));
const isPlayground = window.location.pathname.replace(/\/+$/, '') === '/playground';

const pageMetadata = isPlayground
    ? {
        title: 'Playground Komponen — Dealtech UI',
        description: 'Jelajahi dan bandingkan variasi komponen UI React dari Dealtech UI.',
        url: 'https://ui.mudahdeal.com/playground',
    }
    : {
        title: 'Dealtech UI — Komponen UI React untuk Admin & Public',
        description: 'Koleksi komponen UI React siap pakai untuk dashboard admin dan halaman publik yang responsif, konsisten, dan mudah disesuaikan.',
        url: 'https://ui.mudahdeal.com/',
    };

const setMetaContent = (selector: string, content: string) => {
    document.querySelector<HTMLMetaElement>(selector)?.setAttribute('content', content);
};

document.title = pageMetadata.title;
document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute('href', pageMetadata.url);
setMetaContent('meta[name="description"]', pageMetadata.description);
setMetaContent('meta[property="og:title"]', pageMetadata.title);
setMetaContent('meta[property="og:description"]', pageMetadata.description);
setMetaContent('meta[property="og:url"]', pageMetadata.url);
setMetaContent('meta[name="twitter:title"]', pageMetadata.title);
setMetaContent('meta[name="twitter:description"]', pageMetadata.description);

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        {isPlayground ? (
            <Suspense fallback={<div className="dealtech-loading">Memuat playground...</div>}>
                <Playground />
            </Suspense>
        ) : (
            <LandingPage />
        )}
    </StrictMode>,
);
