import './Card.css'
import ItemCount from '../ItemCount/ItemCount';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createTheme, ThemeProvider } from '@mui/material/styles';
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

const CardItem = ({ image, image2, title, price, stock, id }) => {
    return(
        <ThemeProvider theme={theme}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>
                    <div className="card-item">
                            <div className='images'>
                                <img src={`./${image}`} alt='cardImgFront'/>
                                <Link to={`/product/${id}`}>
                                    <img src={`./${image2}`} alt='cardImgSide' className='img-top'/>
                                </Link>
                                
                            </div>
                        <p>{title}</p>
                        <span>$ {price}</span>
                        <ItemCount stock={stock} title={title} />
                    </div>
                </CardContent>
            </Card>
        </ThemeProvider>
    )
}

export default CardItem