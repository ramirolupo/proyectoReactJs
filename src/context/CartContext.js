import { createContext, useState } from "react";
import swal from 'sweetalert';


const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + (product.price * product.cantidad))
            swal("Producto agregado correctamente", "Presiona OK para continuar", "success");
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        swal("El producto ya se encuentra en el carrito", "Presiona OK para continuar", "error");
    }

    const removeProductFromCart = (id) => {
        const auxCart = cartListItems.filter(product => product.id !== id)
        setCartListItems(auxCart)       
    }

    const clearCart = () => {
        setCartListItems([])
        setTotalPrice(0)
    }



    const data = {
        cartListItems,
        addProductToCart,
        totalPrice,
        removeProductFromCart,
        clearCart
    }


    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}


export default CartContext
export { CartProvider }
