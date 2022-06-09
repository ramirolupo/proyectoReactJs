import CardList from "../components/CardList/CardList"
import { useState, useEffect } from 'react'
import productos from '../utils/productsMock'
import { useParams } from "react-router-dom"


const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()

    const getProducts = () => {
        return new Promise( (resolve, reject) => {
            // setTimeout( () => {
                resolve(productos)
            // }, 2000)
        })
    }

    useEffect( () => {
        getProducts()
        .then( (res) => {
            // setProducts(res)
            filterByCategory(res)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [category])

    const filterByCategory = (array) => {
        const paletas = array.filter((el) => el.category === category);
        setProducts(paletas)
    }

    return(
        <div>
            <CardList title={'LISTADO DE PRODUCTOS'} products={products}/>
        </div>
    )
}

export default ProductList