import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import companyLogo from '../public/FleeceFinalLogo_Brandsmith_Color.png'
import { AppBar, Box, Toolbar, Typography, Avatar } from "@mui/material"
import Image from 'next/image'

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ backgroundColor: '#2D2D2D' }}>
          <Box sx={{ width: '200px', marginY: 1}}>
            <Image alt='Company Logo' src={companyLogo} layout='responsive'/>
          </Box>
          <Typography variant="h6" component="div" sx={{ marginLeft: 'auto', color: '#c3c3c3'}}>Label Printing</Typography>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
