import ButtonV1, { ButtonV1Group } from './ButtonV1';

export default function Preview() {
    return (
        <ButtonV1Group>
            <ButtonV1 href="#harga">Daftar &amp; Coba Gratis</ButtonV1>
            <ButtonV1 variant="outline" href="#fitur">
                Lihat Fitur
            </ButtonV1>
        </ButtonV1Group>
    );
}
