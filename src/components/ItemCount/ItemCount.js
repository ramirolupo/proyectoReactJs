import './ItemCount.css'
import { useState } from 'react'
import { Button }  from '@mui/material';

const ItemCount = ( {stock = 5} ) => {
    const [count, setCount] = useState(1)
    
    const addCount = () => {
        console.log("stock: ", stock)
        if(count < stock) {
            setCount(count + 1)
        }
    }
    const removeCount = () => {
        if(count > 1) {
            setCount(count - 1)
        }
    }
    return(
        <>
            <div className='count-item'>
                <Button onClick={removeCount}>-</Button>
                <p>{count}</p>
                <Button onClick={addCount}>+</Button>
            </div>
            
        </>
    )
}

export default ItemCount