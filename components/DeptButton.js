import { Paper, Button } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { styled } from '@mui/material/styles'
import { useRouter } from 'next/router'

export default function DeptButton({ label, url }) {
    const router = useRouter()

    return (
        <Grid xs={12} md={6}>
            <Paper sx={{ backgroundColor: '#F17130' }}>
                <Button
                    fullWidth
                    sx={{ height: '25vh', color: '#2D2D2D', fontWeight: 'bold' }}
                    onClick={() => router.push(url)}
                >
                    {label}
                </Button>
            </Paper>
        </Grid>
    )
}