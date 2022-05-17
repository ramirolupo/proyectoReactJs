import './NavBar.css'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';


const NavBar = () => {
    return(
        <>
            <Box sx={{ flexGrow: 1 }}>
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
            </Box>
        </>
    )
}

export default NavBar