import { Box, Paper, Button, Typography, Link } from '@mui/material'
import { styled } from '@mui/material/styles'
import Grid from '@mui/material/Unstable_Grid2'
import { useRouter } from 'next/router'

import DeptButton from '../components/DeptButton'

export default function Home() {
    return (
        <Box sx={{ flexGrow: 1, paddingX: 4 }}>
            <Grid container spacing={6} marginTop={1}>
                <DeptButton label='Turbochargers' url='/test' />
                <DeptButton label='Pumps' url='/test' />
                <DeptButton label='Engines' url='/test' />
                <DeptButton label='Cylinder Heads' url='/test' />
            </Grid>
        </Box>
    )
}

// export default function Home() {
//     const router = useRouter()
//       return (
//           <Box sx={{ flexGrow: 1, paddingX: 4 }}>
//               <Grid container spacing={6} marginTop={1}>
//                   <Grid xs={12} md={6}>
//                       <Paper>
//                           <Button
//                               fullWidth
//                               sx={{ height: '25vh' }}
//                               onClick={() => router.push('/test')}
//                           >
//                               TEST
//                           </Button>
//                       </Paper>
//                   </Grid>
//                   <Grid xs={12} md={6}>
//                       <Paper>
//                           <Button fullWidth sx={{ height: '25vh' }}>
//                               Pump department
//                           </Button>
//                       </Paper>
//                   </Grid>
//                   <Grid xs={12} md={6}>
//                       <Paper>
//                           <Button fullWidth sx={{ height: '25vh' }}>
//                               freedom
//                           </Button>
//                       </Paper>
//                   </Grid>
//                   <Grid xs={12} md={6}>
//                       <Paper>
//                           <Button fullWidth sx={{ height: '25vh' }}>
//                               warehouse
//                           </Button>
//                       </Paper>
//                   </Grid>
//               </Grid>
//           </Box >
//       )
//   }
