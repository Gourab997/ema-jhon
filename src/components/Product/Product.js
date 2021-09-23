import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const element = <FontAwesomeIcon icon={faShoppingCart} />
const {name,img,price,seller,stock} = props.product

    return (
        <div className="product">
            <img src={img} alt="" />
            <div className="product-details">
            <h4 className="product-name">{name}</h4>
            <p><small>by: {seller}</small></p>
            <p>Price : $ {price}</p>
            <p> <small> only {stock} left in stock - order soon</small></p>

            <button onClick={()=>props.handleAddToCart(props.product)} className="btn-purchase"> {element} add to cart</button>
            </div>
          
        </div>
    );
};

export default Product;