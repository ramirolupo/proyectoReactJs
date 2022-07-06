import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from 'react-router-dom'
import { doc, getDoc } from "firebase/firestore"
import db from "../../utils/firebaseConfig"


const ItemDetailContainer = () =>{

    const { id } = useParams()
    const [product, setProduct] = useState({})

    useEffect(() =>{
        getProduct()
        .then( (prod) => {
            setProduct(prod)
        })
            
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])

    const getProduct = async() => {
        const docRef = doc(db, "productos", id)
        const docSnapshot = await getDoc(docRef)
        let product = docSnapshot.data()
        product.id = docSnapshot.id
        return product
    }
    
    return(

        <ItemDetail data={product} />
        

    )
}

export default ItemDetailContainer