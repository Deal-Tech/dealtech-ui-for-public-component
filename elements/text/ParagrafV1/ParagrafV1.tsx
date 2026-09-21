import './paragraf-v1.css';

export interface ParagrafV1Props {
    children?: string;
    className?: string;
}

export default function ParagrafV1({
    children = 'Data, transaksi, kehadiran, sampai laporan tercatat rapi dalam satu sistem. Tim berhenti merekap manual, dan pengguna bisa memantau sendiri dari HP.',
    className = '',
}: ParagrafV1Props) {
    return <p className={`paragraf-v1${className ? ` ${className}` : ''}`}>{children}</p>;
}
