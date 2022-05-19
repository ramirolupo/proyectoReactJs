import './Card.css'
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

const CardItem = ({ image, title, price }) => {
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
                    <Button variant={'contained'} >Ver Más</Button>
                </div>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CardItem