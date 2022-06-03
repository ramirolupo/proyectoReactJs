import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PrimarySearchAppBar from '../NavBar/Search'
import { Link } from 'react-router-dom';

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
                <AppBar position="static" className='header-primary'>
                    <Toolbar>
                        <div className='container-logo'>
                            <img src='./logo.jpg' alt='logo' /> 
                        </div>
                        <ul className='navbar'>
                            <li>
                                <Link to={'/'}> 
                                    <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Inicio</Button>
                                </Link>
                            </li>
                            <li>
                                <Link to={'/products/:category'}>
                                    <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Productos</Button>
                                </Link>
                            </li>
                            <li>
                                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Preguntas Frecuentes</Button>
                            </li>
                            <li>
                                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Contacto</Button>
                            </li>
                        </ul>
                        <PrimarySearchAppBar className='search'/>
                        <Button color="inherit">
                            <ShoppingCartIcon /> 
                        </Button>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default NavBar