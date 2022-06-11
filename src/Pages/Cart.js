import { useContext } from "react"
import { Container, Button } from "@mui/material"
import { Delete } from "@mui/icons-material"
import CartContext from "../context/CartContext"
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartListItems, totalPrice, removeProductFromCart } = useContext(CartContext)

    return(
        <Container className='container-general'> 
        <h2>Checkout: </h2>
        <div className='cart-section'>
            <div className='col-cart-table__head'>
                <h2>Producto</h2>
                <h2>Descripcion</h2>
                <h2>Precio Unitario</h2>
                <h2>Cantidad</h2>
                <h2>Quitar</h2>
            </div>
            {cartListItems.map( (item) => {
                const {id, title, image, price, cantidad} = item
                return(
                    <div className='cart-table__content' key={id}>
                        <div className='cart-table__content-img'>
                            <img src={`/${image}`} alt='aloha'/>
                        </div>
                        <div className='cart-table__content-title'>
                            <p>{title}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <p>$ {price}</p>
                        </div>
                        <div className='cart-table__content-quantity'>
                            <p>{cantidad}</p>
                        </div>
                        <div className='cart-table__content-price'>
                            <button className='btn-delete'>
                                <Delete 
                                    onClick={() => removeProductFromCart(id)} />
                            </button>
                        </div>
                    </div>
                )
            })}
            <div className='cart-footer'>
                <Link to='/products/paletas' style={{ textDecoration: 'none'}}>
                    <Button 
                    className='btn-custom'
                    variant="outlined"
                    style={{marginTop:'10px'}}
                    >Continuar comprando</Button>
                </Link>
                <div className='cart-checkout-details'>
                    <div className='cart-checkout__subtotal'>
                        <p>Subtotal</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <div className='cart-checkout__total'>
                        <p>Total</p>
                        <span>$ {totalPrice}</span>
                    </div>
                    <Button 
                        className='btn-custom'
                        >Completar Compra</Button>
                </div>
            </div>
        </div>
    </Container>
    )
}

export default Cart