import { useState, useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Menu from '@mui/material/Menu';
import DeleteIcon from '@mui/icons-material/Delete';
import CartContext from '../../context/CartContext'
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

const CartWidget = () =>  {
    const { cartListItems, removeProductFromCart, clearCart } = useContext(CartContext)
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return(
        <div className='cart-container-icon'>
            <ShoppingCartIcon 
                color={'white'} 
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            />
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                'aria-labelledby': 'basic-button',
                }}
            >
                <div className='container-item-list-cart'>
                    {cartListItems.length === 0 && (
                        <>
                            <p>No hay productos agregados al carrito</p>
                            <Link style={{background: '#14323d'}} to="/products/paletas" >Empezar a comprar</Link>
                        </>
                    )}
                    {cartListItems.map( (item) => {
                        return(
                            <div className='item-cart-prod' key={item.id}>
                                <div className='cart-prod__image'>
                                    <img src={`/${item.image}`} alt="prod carrito" />
                                </div>
                                <div className='cart-prod__info'>
                                    <p>{item.title}</p>
                                    <span>$ {item.price}</span>
                                    <span>Cantidad: {item.cantidad}</span>
                                </div>
                                <div className='cart-prod__action'>
                                    <button>
                                        <DeleteIcon 
                                            style={{color: '#14323d'}}
                                            onClick={() => removeProductFromCart(item.id)} />
                                    </button>
                                </div>
                            </div>
                            ) 
                        })}
                            <Button
                                variant='outlined'
                                onClick={() => clearCart()}
                                className='clear-cart'
                                style={{margin: '10px'}}
                                >Vaciar carrito</Button>            
                </div>
                
            </Menu>
        </div>
    )
}

export default CartWidget