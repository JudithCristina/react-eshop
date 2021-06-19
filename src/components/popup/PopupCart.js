import React,{useContext} from 'react';
import {CartContext} from './../../context/CartContext'
import './PopupCart.css'
const PopupCart = () => {
  const [cart] = useContext(CartContext)
  const totalPrice =  cart.reduce((acc, curr)=> acc + curr.price,0);
  return (
    <div className="box-cart">
      <p className="popup--title">Tu carrito - {cart.length} productos</p>
      {
         cart.map( product =>
           <div className="card--shopping-cart">
             <img
               src={product.image}
               alt=""
             />
             <div className="card--shopping-cart__text">
               <p className="card--shopping-cart__title">
                {product.title}
               </p>
               <p className="card--shopping-cart__price">S/.{product.price}</p>
             </div>
           </div>
         )
      }

      <div className="popup--total-price">
        <p className="popup--total-price__letter">Total estimado</p>
        <p className="popup--total-price__number">S/{totalPrice}</p>
      </div>
    </div>
  )
}

export default PopupCart
