import CardList from "../components/CardList/CardList"
import { useState, useEffect } from 'react'
// import productos from '../utils/productsMock'
import { useParams } from "react-router-dom"
import { collection, getDocs } from 'firebase/firestore'
import db from "../utils/firebaseConfig"


const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()


    useEffect( () => {
        getProducts()
        .then( (productos) => {
            category ?  filterByCategory(productos, category) : setProducts(productos)
        })
    }, [category])

    const getProducts = async () => {
        const productCollection = collection(db, "productos")
        const productSnapshot = await getDocs(productCollection);
        const productList = productSnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return productList
    }

    const filterByCategory = (array, category) => {
        return array.map( (item) => {
            if(item.category === category) {
                return setProducts(products => [...products, item])
            }
        })
    }

    return(
        <div>
            <CardList title={'LISTADO DE PRODUCTOS'} products={products}/>
        </div>
    )
}

export default ProductList