import React, {useContext} from 'react';
import './CardProduct.css';
import {Card, Button } from "react-bootstrap";
import { CartContext } from '../../context/CartContext';

const CardProduct = (props) => {
  const [cart, setCart] = useContext(CartContext)
  const addToCart = ()=>{
    const product={id:props.id, title:props.title, price: props.price, description: props.description, image:props.image}
    setCart( curr => [...curr, product])
  }
  return (
    <Card>
      <Card.Img variant="top" src={props.image} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="product-card-footer">
          <p> S/. {props.price}</p>
          <Button onClick={addToCart} variant="primary">Agregar al Carrito</Button>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default CardProduct
