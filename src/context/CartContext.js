import { createContext, useState } from "react";


const CartContext = createContext()

const CartProvider = ({children}) => {
    const [cartListItems, setCartListItems] = useState([])
    const [totalPrice, setTotalPrice] = useState(0)
    
    const addProductToCart = (product) => {
        let isInCart = cartListItems.find(cartItem => cartItem.id === product.id)
        if(!isInCart) {
            setTotalPrice(totalPrice + (product.price * product.cantidad))
            return setCartListItems(cartListItems => [...cartListItems, product])
        }
        console.log("El producto ya se encuentra en el carrito")
    }

    const removeProductFromCart = (id) => {
        const auxCart = cartListItems.filter(product => product.id !== id)
        setCartListItems(auxCart)
        
    }

    const clearCart = () => setCartListItems([])



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
