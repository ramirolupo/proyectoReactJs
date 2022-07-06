import CardList from '../components/CardList/CardList'
import { useState, useEffect } from 'react'
import { collection, getDocs, query, where } from 'firebase/firestore'
import db from "../utils/firebaseConfig"

const Home = () =>{
    const [products, setProducts] = useState([])


    useEffect( () => {
        getProducts()
        .then( (productos) => {
            setProducts(productos)
        })
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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


    
    return(
            <div>
                <h2>HOME</h2>
                { <CardList title={'Productos Recomendados'} products={products}/>}
            </div>
    )
}

export default Home