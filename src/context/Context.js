/* Setting Up Context API to create a global state that 
will be available in every part of the application */
import { createContext, useState } from "react"
import { PRODUCTS } from '../data/data.js';

export const CartContext = createContext(null);

//set default cart value count for all items to 0
const getDefaultCart = () => {
    let cart = {}
    for (let i = 1; i < PRODUCTS.length + 1; i++) {
        cart[i] = 0;
    }
    return cart;  
}

export const Context = (props) => {
    const [cartItems, setCartItem] = useState(getDefaultCart());

    const addToCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]: prev[itemID] + 1}));
    }

    const removeFromCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]: prev[itemID] - 1}));
    }

    const deleteCart = (itemID) => {
        setCartItem((prev) => ({...prev, [itemID]: 0}));
    }

    const updateCartItemCount = (newAmount, itemID) => {
        setCartItem((prev) => ({...prev, [itemID]: newAmount}));
    }

    const gettotalPrice = (PRODUCTS, cartItems) => {
        let total = 0;
        let c = 1;
      
        for (const i in PRODUCTS) {
          let pricesum = 0;
          const item = PRODUCTS[i];
      
          if (cartItems[c] > 0) {
            pricesum = item.price * cartItems[c];
          }
          total += pricesum;
          c += 1;
        }
        return total;
      }

    // Create Context Value
    const contextValue = {cartItems, addToCart, removeFromCart, deleteCart, updateCartItemCount, gettotalPrice};

    console.log(cartItems);
    return (
      <CartContext.Provider value={contextValue}>
        {props.children}
    </CartContext.Provider>
    )
}