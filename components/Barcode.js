import BarcodeTag from 'react-barcode'

export default function ({ barcodeRef, serialNumber }) {
    return (
        <BarcodeTag
            ref={barcodeRef}
            value={serialNumber}
        />
    )
}