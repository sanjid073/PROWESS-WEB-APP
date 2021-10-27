import React from 'react';

const CartDetails = ({product}) => {
    const {name, price , img} = product;
    return (

                <div className="card details-card mb-3 border-0">
                    <div className="row g-0 align-items-center">
                        <div className="col-md-2">
                        <img src={img} className="img-fluid rounded-start" alt="..."/>
                        </div>
                        <div className="col-md-8">
                        <div className="card-body ">
                        <h5 className="card-title mt-0 fw-bold mb-1">{name}</h5>
                        </div>
                        </div>
                        <div className="col-md-2">
                        
                        <h6 className=" fw-bold ">{price}$</h6>
                        
                        </div>
                    </div>
                    </div>
    );
};

export default CartDetails;