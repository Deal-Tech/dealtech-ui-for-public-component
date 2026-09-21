import './heading-stroke-v1.css';

export interface HeadingStrokeV1Props {
    title?: string;
    accent?: string;
    className?: string;
}

export default function HeadingStrokeV1({
    title = 'Kelola Operasional Anda Lebih Mudah dengan',
    accent = 'Satu Dashboard',
    className = '',
}: HeadingStrokeV1Props) {
    return (
        <h1 className={`heading-stroke-v1${className ? ` ${className}` : ''}`}>
            <span>{title}</span>{' '}
            <span className="heading-stroke-v1__accent">{accent}</span>
        </h1>
    );
}
