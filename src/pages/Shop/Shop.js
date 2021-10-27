import React from 'react';
import Product from '../../components/Product/Product';
import useAuth from '../../hooks/useAuth';
import "./Shop.css"

const Shop = () => {
    const {products} = useAuth()
    return (
         <div className="shop-section">
             <div className="container">
                <div className="row">
            
            <div className="col-lg-12">
                    <h1 className="text-center text-white service-title mt-5">OUR PROTEIN PRODUCTS</h1>
                    <p className="text-center text-muted text-white service-para w-75 mx-auto">Whey protein is the protein fraction of whey, which is a liquid that separates from milk during cheese production.</p>
                    </div>
           
            {
                products.map(product => <Product
                key={product.key}
                product={product}
                ></Product>)
            }
            </div>
            </div>
         </div>
    );
};

export default Shop; 