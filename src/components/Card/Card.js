import './Card.css'
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Button }  from '@mui/material';
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

const CardItem = ({ image, title, price, stock }) => {
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <div className="card-item">
                    <div>
                        <img src={`./${image}`} alt='cardImg'/>
                    </div>
                    <p>{title}</p>
                    <span>$ {price}</span>
                    <ItemCount/> 
                    <Button variant={'contained'} >Ver Más</Button>
                    <Button variant={'contained'} className="card-item-button">Comprar</Button>
                </div>
                
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CardItem