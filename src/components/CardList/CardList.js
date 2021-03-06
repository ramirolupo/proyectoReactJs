import './CardList.css'
import CardItem from '../Card/Card'
import { Grid, Container } from '@mui/material'



const CardList = ({title, products}) =>{

    return(
        <div className='card'>
            <h2>{title}</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map( ({title, price, image, image2, image3, id, stock}) => {
                        
                            return(
                                <Grid item md={3} key={`cardList-${id}`} >
                                        <CardItem 
                                            title={title} 
                                            price={price} 
                                            image={image} 
                                            image2={image2} 
                                            image3={image3} 
                                            stock={stock} 
                                            id={id}
                                        />
                                </Grid>
                            )
                        })
                    }
                </Grid>
            </Container>
        </div>
    )
}


export default CardList;