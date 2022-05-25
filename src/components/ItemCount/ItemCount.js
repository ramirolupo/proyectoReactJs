import './ItemCount.css'
import { useState } from 'react'
import { Button }  from '@mui/material';

const ItemCount = ( { stock } ) => {
    const [count, setCount] = useState(1)
    
    const addCount = () => {
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    const addToCart = () =>{
        console.log('Compraste',count,'paletas');
    }
    return(
        <>
            <div className='count-item'>
                <Button onClick={removeCount} disabled={count === 1} >-</Button>
                <p>{count}</p>
                <Button onClick={addCount} disabled={count === stock} >+</Button>
            </div>
            <Button onClick={addToCart} variant={'contained'} className="card-item-button" >Comprar</Button>
        </>
    )
}

export default ItemCount