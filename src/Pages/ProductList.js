import CardList from "../components/CardList/CardList"
import { useState, useEffect } from 'react'
import { useParams } from "react-router-dom"
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from "../utils/firebaseConfig"


const ProductList = () => {
    const [products, setProducts] = useState([])
    const { category } = useParams()


    useEffect( () => {
        getProducts()
        .then( (productos) => {
            category ?  filterFirebase() : setProducts(productos)
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

    const filterFirebase = async () => {
        const productRef = collection(db, 'productos')
        const queryResult = query(productRef, where("category", "==", category));
        const querySnapshot = await getDocs(queryResult);
        const productList = querySnapshot.docs.map((doc) => {
            let product = doc.data()
            product.id = doc.id
            return product
        })
        return setProducts(productList)
    }

    return(
        <div>
            <CardList title={'LISTADO DE PRODUCTOS'} products={products}/>
        </div>
    )
}

export default ProductList