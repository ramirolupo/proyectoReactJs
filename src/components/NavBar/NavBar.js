import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            light: '#435b63',
            main: '#14323d',
            dark: '#0e232a',
            contrastText: '#fff',
        },
    },
});


const NavBar = () => {
    return(
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static">
                    <Toolbar>
                        <div className='container-logo'>
                            {// eslint-disable-next-line jsx-a11y/alt-text
                            }<img src='./logo.jpg' /> 
                        </div>
                        <ul>
                            <li>
                                <button>Paletas</button>
                            </li>
                            <li>
                                <button>Accesorios</button>
                            </li>
                            <li>
                                <button>Indumentaria</button>
                            </li>
                            <li>
                                <button>Bolsos</button>
                            </li>
                        </ul>
                        <Button color="inherit">Iniciar Sesión</Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default NavBar