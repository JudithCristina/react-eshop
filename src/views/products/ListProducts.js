import {useEffect, useState}from 'react';
import { CardColumns } from "react-bootstrap";
import CardProduct from './../../components/product/CardProduct'
import "./ListProducts.css";


const ListProducts = () => {
 const [arrayProducts, setArrayProducts] = useState([])
  useEffect( () => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setArrayProducts(json))
  }, []);
  console.log(arrayProducts)
  return (
    <div className="container-list-products">
      <CardColumns>
        {
          arrayProducts.map(item =>
            <CardProduct title={item.title} id={item.id} price={item.price} image={item.image} description={item.description} />
          )
        }
      </CardColumns>
    </div>
  )
}

export default ListProducts
