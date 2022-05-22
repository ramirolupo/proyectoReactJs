import { useState, useEffect } from 'react'
import CardItem from '../Card/Card'
import { Grid, Container } from '@mui/material'

const CardList = () =>{
    const [products, setProducts] = useState([])
    const productos = [
        {
            title: 'BullPadel Hack 03',
            price: 95000,
            image: 'F-Bullpadel Hack 03.jpg',
            description: '',
            stock: 5,
            id: 1
        },
        {
            title: 'Adidas Metalbone 3.1',
            price: 110000,
            image: 'F-Adidas Metalbone 3.1.jpg',
            description: '',
            stock: 3,
            id: 2
        },
        {
            title: 'Head Delta Pro',
            price: 83000,
            image: 'F-Head Delta Pro.jpg',
            description: '',
            stock: 6,
            id: 3
        },
        {
            title: 'NOX AT10 Genius',
            price: 85000,
            image: 'F-NOX AT10 Genius.jpg',
            description: '',
            stock: 4,
            id: 4
        }
    ]

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
    }, [])

    
    return(
        <>
            <h2>Productos Recomendados</h2>
            {console.log('state products: ',products)}
            <Container>
                <Grid container spacing={2}>
                    {
                        products.map( (producto) => {
                            const { title, price, image, id } = producto
                            return(
                                <>
                                    <Grid item md={3} key={id} >
                                        <CardItem title={title} price={price} image={image} />
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

export default CardList