import React from 'react';
import { useHistory } from 'react-router';
import backgroundImage from "../../img/jez-timms-8muUTAmcWU4-unsplash.jpg"
const NotFound = () => {
    const styles = {    
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '93vh'
};
    const history = useHistory()
const goHome = () => {
       history.push("/home")
}
    return (
        <div className="banner-section" style={styles}>
             
             <div className="container">
                 <div className="row">
                     <div className="col-lg-1"></div>
                     <div className="col-lg-6">
                         <div className="banner-text">
                         <h1 className="banner-title">404</h1>
                         <p className="banner-para">The page you are looking <br /> for does not exist. <br /> It might have been moved or deleted.</p>
                         </div>
                     </div>
                     <div className="col-lg-5">
                         
                         <h1 className="offer-text">HOW DID <br /> YOU GET HERE?</h1>
                     </div>
                     <button onClick={goHome} className="btn my-btn d-block w-25 mx-auto">Go Home</button>
                 </div>
             </div>
             
        </div>
        
    );
};

export default NotFound;