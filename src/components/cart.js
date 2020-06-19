import React, {useContext} from 'react';
import ProductContext from "../productContext";
import {Link} from "react-router-dom";
import PayPalButton from "./payPalButton";

const Cart = () => {
  const context = useContext(ProductContext)
  // const history = this.props.history
  const {cart, cartTotal, clearCart} = context
  if (cart.length > 0) {
    return (
      <div className='text-center'>
        <h5>Your Cart</h5>
        <PayPalButton/>
      </div>
    )
  } else
    return (
      (
        <div className='text-center'>
          <p>Your cart is empty</p>
        </div>
      )
    );
};

export default Cart;