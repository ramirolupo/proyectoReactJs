import './Card.css'
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Button } from '@mui/material'

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
                        <div className='card-item__img-box'>
                            <img src={`./${image}`} alt='cardImg'/>
                            <Button variant={'contained'} className="card-btn-details">Ver Más</Button>
                        </div>
                        <p>{title}</p>
                        <span>$ {price}</span>
                        <ItemCount stock={stock} /> 
                    </div>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CardItem