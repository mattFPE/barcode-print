import { Box, Paper, Button, Typography, Link } from '@mui/material'
import Grid from '@mui/material/Unstable_Grid2'
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
    return (
        <Box sx={{ flexGrow: 1, paddingX: 4 }}>
            <Grid container spacing={6} marginTop={1}>
                <Grid xs={12} md={6}>
                    <Paper>
                        <Button
                            fullWidth
                            sx={{ height: '25vh' }}
                            onClick={() => router.push('/test')}
                        >
                            TEST
                        </Button>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper>
                        <Button fullWidth sx={{ height: '25vh' }}>
                            Pump department
                        </Button>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper>
                        <Button fullWidth sx={{ height: '25vh' }}>
                            freedom
                        </Button>
                    </Paper>
                </Grid>
                <Grid xs={12} md={6}>
                    <Paper>
                        <Button fullWidth sx={{ height: '25vh' }}>
                            warehouse
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box >
    )
}
