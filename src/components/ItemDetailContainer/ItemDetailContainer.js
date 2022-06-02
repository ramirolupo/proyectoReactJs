import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useParams, useNavigate } from 'react-router-dom'

const ItemDetailContainer = () =>{

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})


    useEffect(() =>{

        if(productFilter === undefined){
            navigate('/notFound')            
        } else{
            setProduct(productFilter)     
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    const productFilter = productos.find( (product) =>{
        // eslint-disable-next-line eqeqeq
        return product.id == id

    })

    return(

        <ItemDetail data={product} />
        

    )
}

export default ItemDetailContainer