import React,{useContext} from 'react'
import { CartContext } from './../../context/CartContext';
const ButtonAddToCart = (props) => {
  const [cart, setCart] = useContext(CartContext);

  const addToCart = () => {
    const product = { id: props.id, title: props.title, price: props.price, description: props.description, image: props.image }
    setCart(curr => [...curr, product])
  }

  return (
    <button onClick={addToCart} className="btn-cart">Agregar al Carrito</button>
  )
}

export default ButtonAddToCart
