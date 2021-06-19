import React from 'react'
import './PopupCart.css'
const PopupCart = () => {
  return (
    <div className="box-cart">
      <p className="popup--title">Tu carrito - 4 productos</p>
      <div className="card--shopping-cart">
        <img
          src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
          alt=""
        />
        <div className="card--shopping-cart__text">
          <p className="card--shopping-cart__title">
            Coche de bebé + funda - blanca{" "}
          </p>
          <p className="card--shopping-cart__price">S/XX.XX</p>
        </div>
      </div>
      <div className="card--shopping-cart">
        <img
          src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
          alt=""
        />
        <div className="card--shopping-cart__text">
          <p className="card--shopping-cart__title">
            Coche de bebé + funda - blanca{" "}
          </p>
          <p className="card--shopping-cart__price">S/XX.XX</p>
        </div>
      </div>
      <div className="card--shopping-cart">
        <img
          src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
          alt=""
        />
        <div className="card--shopping-cart__text">
          <p className="card--shopping-cart__title">
            Coche de bebé + funda - blanca{" "}
          </p>
          <p className="card--shopping-cart__price">S/XX.XX</p>
        </div>
      </div>
      <div className="card--shopping-cart">
        <img
          src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
          alt=""
        />
        <div className="card--shopping-cart__text">
          <p className="card--shopping-cart__title">
            Coche de bebé + funda - blanca{" "}
          </p>
          <p className="card--shopping-cart__price">S/XX.XX</p>
        </div>
      </div>
      <div className="card--shopping-cart">
        <img
          src="https://i.blogs.es/ee0424/ropa-bebe-rosa/450_1000.jpeg"
          alt=""
        />
        <div className="card--shopping-cart__text">
          <p className="card--shopping-cart__title">
            Coche de bebé + funda - blanca{" "}
          </p>
          <p className="card--shopping-cart__price">S/XX.XX</p>
        </div>
      </div>

      <div className="popup--total-price">
        <p className="popup--total-price__letter">Total estimado</p>
        <p className="popup--total-price__number">S/ XX.XX</p>
      </div>
      <button className="btn-cart">Ver carrito</button>
    </div>
  )
}

export default PopupCart
