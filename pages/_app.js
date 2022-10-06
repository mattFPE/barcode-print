import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { AppBar, Box, Toolbar, Typography } from "@mui/material"

function MyApp({ Component, pageProps }) {
  // return <Component {...pageProps} />
  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1}}>FPE Label Printing</Typography>
        </Toolbar>
      </AppBar>
      <Component {...pageProps} />
    </Box>
  )
}

export default MyApp
