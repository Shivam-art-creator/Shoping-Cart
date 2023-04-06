import React,{useContext} from 'react'
import { PRODUCTS } from '../../products'
// import { Product } from '../shop/product'
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";

export const Cart = () => {
  const {cartItems } = useContext(ShopContext);
  return (
    <div className='cart'>
    <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}
      </div>
    </div>
  )
}

