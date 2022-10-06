import { Container, TextField, Paper, Button } from "@mui/material";
import { useRef, useState } from "react";
import { useReactToPrint } from 'react-to-print'
import Barcode from "../../components/Barcode";

export default function () {
    const barcodeRef = useRef()
    const [serialNumber, setSerialNumber] = useState('')

    const handleSerialNumber = (event) => setSerialNumber(event.target.value)
    const handlePrint = useReactToPrint({
        content: () => barcodeRef.current
    })

    return (
        <Container sx={{marginTop: 2}}>
            <TextField
                label='Enter Serial Number'
                variant="outlined"
                value={serialNumber}
                onChange={handleSerialNumber}
                fullWidth
            />
            <Paper sx={{marginY: 1, display: 'flex', justifyContent: 'center'}}>
                {serialNumber !== '' && <Barcode barcodeRef={barcodeRef} serialNumber={serialNumber} />}
            </Paper>
            <Button variant="contained" onClick={handlePrint}>Print!!</Button>
        </Container>
    )
}