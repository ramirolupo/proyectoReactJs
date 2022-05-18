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

const CardItem = (props) => {
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                <div className="card-item">
                    <div>
                        {// eslint-disable-next-line jsx-a11y/alt-text
                        }<img src="F-Bullpadel Hack 03.jpg"/>
                    </div>
                    <p>Titulo</p>
                    <span>Precio</span>
                    <Button variant={'contained'} >Holiis</Button>
                </div>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CardItem