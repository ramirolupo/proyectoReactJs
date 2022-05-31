import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { producto } from '../../utils/productsMock'

const ItemDetailContainer = () =>{

    const [product, setProduct] = useState({})

    const getItem = () =>{
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                resolve(producto)
            }, 2000)
        })
    }

    useEffect(() =>{
        getItem()
        .then( (res) =>{
            setProduct(res)
        })
    }, [])

    return(

        <ItemDetail data={product} />
        

    )
}

export default ItemDetailContainer