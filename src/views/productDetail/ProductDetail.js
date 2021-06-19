import {useEffect, useState} from 'react';
import {
  BrowserRouter as Router,
  useParams
} from "react-router-dom";
import ButtonAddToCart from './../../components/button/ButtonAddToCart'
import './ProductDetail.css';

const ProductDetail = () => {
const [product, setProduct] = useState('');
const params = useParams();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${params.id}`)
      .then(res => res.json())
      .then(json => setProduct(json))
  }, []);

  return (
    <div>
      <div className="container-product-details">
        <div className="container-product-details__image">
          <img className="container-product-details__image--size" src={product.image} alt="imagen del producto" />
        </div>
        <section className="container-product-details__details-text">
          <h1> {product.title}</h1>
          <p className="short-description">
           {product.description}
          </p>
          <p className="price-text">S/ {product.price}</p>

          <div className="box-btn">
            <ButtonAddToCart title={product.title} id={product.id} price={product.price} image={product.image} description={product.description}/>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ProductDetail
