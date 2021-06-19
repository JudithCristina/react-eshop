import './CardProduct.css';
import {Card} from "react-bootstrap";
import { Link } from 'react-router-dom';
import ButtonAddToCart from './../../components/button/ButtonAddToCart'

const CardProduct = (props) => {

  return (

      <Card>
      <Link to={`/products/${props.id}`}>
        <Card.Img variant="top" src={props.image} />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>
            This card has supporting text below as a natural lead-in to additional
            content.{' '}
          </Card.Text>
        </Card.Body>
      </Link>
        <Card.Footer>
          <div className="product-card-footer">
            <p> S/. {props.price}</p>
          < ButtonAddToCart title={props.title} id={props.id} price={props.price} image={props.image} description={props.description} />
          </div>
        </Card.Footer>
      </Card>

  )
}

export default CardProduct
