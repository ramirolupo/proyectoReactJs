import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import productos from '../../utils/productsMock'
import { useParams, useNavigate } from 'react-router-dom'

const ItemDetailContainer = () =>{

    const { id } = useParams()
    const navigate = useNavigate()
    const [product, setProduct] = useState({})

    
    const productFilter = productos.find( (product) =>{
        return product.id === Number(id)

    })
    useEffect(() =>{

        if(!productFilter){
            navigate('/notFound')            
        } else{
            setProduct(productFilter)     
        }
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [productFilter, id])


    return(

        <ItemDetail data={product} />
        

    )
}

export default ItemDetailContainer