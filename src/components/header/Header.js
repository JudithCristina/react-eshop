import React from 'react';
import './Header.css';
import imageCart from './../../assets/image/icon/cesta.svg';
import PopupCart from './../popup/PopupCart'
const Header = () => {
  return (
    <header className="header">
     <div className="header__wrapper">
        <img className="header__image-logo" src="https://dcassetcdn.com/design_img/979319/148592/148592_5443374_979319_image.jpg" alt="logo" />
        <p>Productos</p>
       <div className="header__shopping-cart">
          <img className="header__image-shopping-cart" src={imageCart} alt="cart" />
          <div className="header__counter-shopping-cart">
            <p>0</p>
          </div>
          <div className="hover-active">
            <PopupCart />
          </div>
       </div>
     </div>
    </header>
  )
}

export default Header
