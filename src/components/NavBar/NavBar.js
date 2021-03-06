import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Link } from 'react-router-dom';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useState } from 'react';
import CartWidget from '../CartWidget/CartWidget';


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
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <>
            <ThemeProvider theme={theme}>
                <AppBar position="static" className='header-primary'>
                    <Toolbar>
                        <div className='container-logo'>
                            <img src='/logo.jpg' alt='logo' /> 
                        </div>
                        <ul className='navbar'>
                            <li>
                                <Link to={'/'} style={{ textDecoration: 'none', color: 'black' }}> 
                                    <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Inicio</Button>
                                </Link>
                            </li>
                            <li>
                            <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}
                            disableRipple
                            style={{ backgroundColor: 'transparent' }} 
                            variant='text' 
                            className='navbar__btn'
                        >
                            Productos
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                            }}
                        >
                        <Link to={'/products/paletas'} style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleClose}>Paletas</MenuItem>
                        </Link>
                        <Link to={'/products/accesorios'} style={{ textDecoration: 'none', color: 'black' }}>
                            <MenuItem onClick={handleClose}>Accesorios</MenuItem>
                        </Link>
                        </Menu>
                            </li>
                            <li>
                                <Link to={'/contact'} style={{ textDecoration: 'none', color: 'black' }}>
                                <Button disableRipple style={{ backgroundColor: 'transparent' }} variant='text' className='navbar__btn'>Contacto</Button>
                                </Link>
                            </li>
                        </ul>
                        <CartWidget/>
                    </Toolbar>
                </AppBar>
            </ThemeProvider>
        </>
    )
}

export default NavBar