import React from 'react';
import './CardProduct.css';
import {Card, Button } from "react-bootstrap";
const CardProduct = () => {
  return (
    <Card>
      <Card.Img variant="top" src="holder.js/100px160" />
      <Card.Body>
        <Card.Title>Card title</Card.Title>
        <Card.Text>
          This card has supporting text below as a natural lead-in to additional
          content.{' '}
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="product-card-footer">
          <p> S/.17</p>
          <Button variant="primary">Go somewhere</Button>
        </div>
      </Card.Footer>
    </Card>
  )
}

export default CardProduct
