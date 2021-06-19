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
  return (
    <div className="container-list-products">
      <CardColumns>
        <CardProduct/>
      </CardColumns>
    </div>
  )
}

export default ListProducts
