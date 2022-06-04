import CardList from '../components/CardList/CardList'
import { useState, useEffect } from 'react'
import productos from '../utils/productsMock'

const Home = () =>{
    const [products, setProducts] = useState([])


    const getProducts = () =>{
        return new Promise( (resolve, reject) => {
        //setTimeout( () => {
                resolve(productos)
            //}, 3000)
        })
    }

    useEffect( () => {
        getProducts()
        .then( (res) => {
            setProducts(res)
        })
    }, [])

    
    return(
            <div>
                <h2>HOME</h2>
                { <CardList title={'Productos Recomendados'} products={products}/>}
            </div>
    )
}

export default Home