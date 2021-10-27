
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import "./ProductDetails.css"

const ProductDetails = () => {
    const {id} = useParams()
    const {products,  addToCart } = useAuth()
    const product = products.find(pd =>Number(pd.id) === Number(id))
    const history = useHistory()
    const goShop = () =>{
        history.push("/shop")
    }
    return (
        <div className="prodcut-details-section">
        <div className="container">
        <div className="prodcut-details-card card text-white mb-3 border-0  py-5 py-5">
              <div className="row g-0">
                  <div className="col-md-5">
                  <img src={product?.img}  height="556px"  alt="..."/>
                  </div>
                  <div className="col-md-7">
                  <div className="px-4 py-5">
                      <h1 className="card-title mb-2">{product?.name}</h1>
                      <p className="m-3 fw-light text-muted ">{product?.reviews} Reviews</p>  
                      <p className="product-dec my-2">{product?.about}</p>
                      <h6 className="fw-bold text-muted text-uppercase mt-5 pt-5">price</h6>
                      <h3 className=" fw-bold price">{product?.price}$</h3>
                       <button onClick={() =>addToCart(product)} className="my-btn btn btn-lg mt-5">Add to Cart</button>               
                       <button onClick={goShop} className="my-btn2 mt-5 btn-lg btn ms-5">Go Shop</button>               
                  </div>
                  </div>
              </div>
      </div> 
      </div>
      </div>
    );
};

export default ProductDetails;