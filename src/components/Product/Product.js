import React from 'react';
import { NavLink,useHistory } from 'react-router-dom';
import "./Product.css"
const Product = ({product}) => {
    const {name, price , img , id} = product
    const history = useHistory()
    const viewProduct = () => {
        history.push(`/product/${id}`)
    }
    return (

           <div className="col-lg-3  mt-3">
                <div onClick={viewProduct} class=" product-card border-0 text-center text-white">
                    <img src={img} class="mx-auto" width="320px"  alt="..."/>
                    <NavLink to={`/product/${id}`} class="btn prduct-btn">
                        View Product
                    </NavLink>
                    <div class="card-body text-center">
                        <NavLink to={`/product/${id}`} class="product-title"><h3 className="fw-bold">{name}
                            </h3></NavLink>
                        <h6 class="card-text service-text fw-bolder">${price}</h6>
                    </div>
                    </div>
        </div>
    );
};

export default Product;