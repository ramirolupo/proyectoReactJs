import './ItemCount.css'
import { Button }  from '@mui/material';


const ItemCount = ( { stock, cantidad, setCantidad } ) => {

    const addProduct = () => {
        setCantidad(cantidad + 1)
    }
    const removeProduct = () =>  {
        setCantidad(cantidad - 1)
    }


    return(
        <div className='count'>
            <p className='count-title'>Selecciona cantidad</p>
            <div className='count-item'>
                <Button  
                    onClick={removeProduct}
                    disabled={cantidad === 1} 
                >-</Button>
                <p>{cantidad}</p>
                <Button 
                    onClick={addProduct} 
                    disabled={cantidad === stock} 
                >+</Button>
            </div>
        </div>
    )
}

export default ItemCount