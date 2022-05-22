import PermanentDrawerLeft from './PermanentDrawerLeft'
import useMediaQuery from '@mui/material/useMediaQuery';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import React from 'react';


export default function App() {
    const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode: prefersDarkMode ? 'dark' : 'light',
                },
            }),
        [prefersDarkMode],
    );

    return (
    <div className='App'>
            <ThemeProvider theme={theme}>
            <PermanentDrawerLeft />
            </ThemeProvider>
        </div>
        
   
    )
}
