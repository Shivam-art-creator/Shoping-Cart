import React,{createContext} from 'react'
import { PRODUCTS } from '../products';
import { useState } from 'react';

// I want to access & change the state because it helps to access and modify these scryRenderedComponentsWithType.

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for(let i=1;i<PRODUCTS.length+1;i++){
        cart[i]=0;
    }
    return cart;
}

export const ShopContextProvider = (props) => {
    const [cartItems,setCartItems] = useState(getDefaultCart());
 
    // setting to change the item which just outering that specific item id and value and adding +1;

    const addToCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]+1}))
    }


    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({...prev,[itemId]:prev[itemId]-1}))
    }

    const contextValue = {cartItems,addToCart,removeFromCart};

    // console.log(cartItems);
  return (
   <ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  )
}


