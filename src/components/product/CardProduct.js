import React from 'react';
import './CardProduct.css';
import {Card, Button } from "react-bootstrap";
const CardProduct = (props) => {
  const addToCart = ()=>{
    console.log('clickeame aqui')
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
