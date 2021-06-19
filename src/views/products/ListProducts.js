import React from 'react';
import { CardColumns, Card, Button } from "react-bootstrap";
import "./ListProducts.css"
const ListProducts = () => {
  return (
    <div className="container-list-products">
      <CardColumns>
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

      </CardColumns>
    </div>
  )
}

export default ListProducts
