import CardItem from '../Card/Card'
import { Grid, Container } from '@mui/material'

const CardList = () =>{
    return(
        <>
            <h2>Productos Recomendados</h2>
            <Container>
                <Grid container>
                    <Grid item md={3}>
                    <CardItem title={"BullPadel Hack 03"} price={95000} image={"F-Bullpadel Hack 03.jpg"} />
                    </Grid>
                    <Grid item md={3}>
                    <CardItem title={"Adidas Metalbone 3.1"} price={110000} image={"F-Adidas Metalbone 3.1.jpg"} />
                    </Grid>
                    <Grid item md={3}>
                    <CardItem title={"Head Delta Pro"} price={83000} image={"F-Head Delta Pro.jpg"} />
                    </Grid>
                    <Grid item md={3}>
                    <CardItem title={"NOX AT10 Genius"} price={85000} image={"F-NOX AT10 Genius.jpg"} />
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default CardList