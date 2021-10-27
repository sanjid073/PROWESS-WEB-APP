import React from 'react';
import { useHistory } from 'react-router';
import Product from '../../components/Product/Product';
import useAuth from '../../hooks/useAuth';
import Advice from './Advice/Advice';
import Banner from './Banner/Banner';
import Services from './Banner/Services';
import Client from './Client/Client';
import "./Home.css"

const Home = () => {
    const {products} = useAuth()
    const history = useHistory()
    const visitShop = () =>{
          history.push("/shop")
    }
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <Advice></Advice>
            <div className="home-product">
            <div className="container">
                <div className="row">
            
            <div className="col-lg-12">
                    <h1 className="text-center text-white service-title">PROTEIN PRODUCTS</h1>
                    <p className="text-center text-muted text-white service-para w-75 mx-auto">Protein powder may also aid weight loss and help people tone their muscles. There are many different types of protein powder, including dairy-based and plant-based powders.</p>
                    </div>
            {
                products.slice(0,4)?.map(product => <Product
                key={product.key}
                product={product}
                ></Product>)
            }
            <div className="text-center">
             <button onClick={visitShop} className="my-btn btn  mt-4">Visit Shop</button>

            </div>
            </div>
            </div>
            </div>
            <Client></Client>
        </div>
    );
};

export default Home;