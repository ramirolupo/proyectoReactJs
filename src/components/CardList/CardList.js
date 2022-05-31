import { useState, useEffect } from 'react'
import CardItem from '../Card/Card'
import { Grid, Container } from '@mui/material'
import productos from '../../utils/productsMock'

const CardList = () =>{
    const [products, setProducts] = useState([])
    

    const getProducts = () =>{
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect( () => {
        getProducts()
        .then( (res) => {
            setProducts(res)
        })
        .catch( (err) => {
        })
        .finally( () => {
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    
    return(
        <>
            <h2>Productos Recomendados</h2>
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map( (producto) => {
                            const { title, price, image, image2, id, stock } = producto
                            return(
                                <>
                                    <Grid item md={3} key={id} >
                                        <CardItem title={title} price={price} image={image} image2={image2} stock={stock}/>
                                    </Grid>
                                </>
                            )
                        })
                    }
                </Grid>
            </Container>
        </>
    )
}


export default CardList;