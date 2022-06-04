import CardList from "../components/CardList/CardList"
import { useState, useEffect } from 'react'
import productos from '../utils/productsMock'
// import { useParams } from "react-router-dom"


const ProductList = () => {
    const [products, setProducts] = useState([])
    //const { category } = useParams()

    const getProducts = () =>{
        return new Promise( (resolve, reject) => {
            //setTimeout( () => {
                resolve(productos)
            //}, 2000)
        })
    }

    useEffect( () => {
        //setProducts([])
        getProducts()
        .then( (res) => {
            setProducts(res)
            //filterByCategory(res)
        })
    }, [])

    // const filterByCategory = (array) => {
    //     return array.map( (item) => {
    //         if(item.category === category) {
    //             return setProducts(products => [...products, item])
    //         }
    //     })
        
    // }

    return(
        <div>
            <CardList title={'LISTADO DE PRODUCTOS'} products={products}/>
        </div>
    )
}

export default ProductList