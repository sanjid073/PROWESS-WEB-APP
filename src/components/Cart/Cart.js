import React from 'react';
import { NavLink ,useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import "./Cart.css"

import CartDetails from './CartDetails';

const Cart = () => {
  const {selected ,setSelected} = useAuth()
  const totalPrice = selected.reduce(
    (total, course) => total + course.price,
    0
  );
   const history = useHistory()

    return (
     <div className="cart-section">
      <div className="container">
      { selected?.length ?
      
       (<>
       <h3 className=" fw-bold mb-4">Shopping Cart</h3>
      <div className="row">
        <div className="col-lg-9">
        <div className="row g-0 align-items-center border-bottom">
            <div className="col-md-2">
            <h4 className="text-muted text-end">PRODUCT</h4>
            </div>
            <div className="col-md-8">
            <div className="card-body ">
            </div>
            </div>
            <div className="col-md-2">
            <h4 className="text-muted ">PRICE</h4> 
            </div>
        </div>
        
      
       {
         selected.map(product=> <CartDetails
         key={product.Id}
         product={product}
         ></CartDetails>)
       }
       </div>
     
       <div className="col-lg-3 ">
       <div class="card details-card mt-4" style={{width : "20rem"}}>
          <div class="card-body">
          <h3 className=" fw-bold mb-4">Cart Total</h3>
          </div>
          <ul class="list-group  list-group-flush">
            <li class="list-group-item mb-3 cart-item">
            <h6 className="fw-bold">SubTotal : {totalPrice}$</h6>

            </li>
            <li class="list-group-item cart-item">
            <h6 className="fw-bold mb-3 ">Shipping : Free Shipping</h6>            
            </li>
            <li class="list-group-item mb-5 cart-item">
            <h4 className="fw-bold">Total : {totalPrice}$</h4>

            </li>
          </ul>
          
            <button onClick={() => {
                  alert("Thanks for purchasing");
                  setSelected([]);
                  history.push("/home");
                }} to="/home" className="btn btn-lg my-btn2">
              CheckOut
            </button>
         
        </div>
       </div>
       
      </div>
      </>) 
      
      : (
        <div className="text-center mt-5">
      <h1 className="text-warning mt-5">Nothing is In Your Beg</h1>
        <NavLink className="btn btn-lg my-btn" to="/shop">
          Wanna Full Your Beg?
        </NavLink>
        </div>
        )
      }
      </div>
      </div>
    )
};

export default Cart;