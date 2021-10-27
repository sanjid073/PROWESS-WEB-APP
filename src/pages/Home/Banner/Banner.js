import React from 'react';
import "./Banner.css"
import backgroundImage from "../../../img/Banner.jpg"
const Banner = () => {
    const styles = {    
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '93vh'
};
    return (
        <div className="banner-section" style={styles}>
             
             <div className="container">
                 <div className="row">
                     <div className="col-lg-1"></div>
                     <div className="col-lg-6">
                         <div className="banner-text">
                         <h1 className="banner-title">STRONG</h1>
                         <p className="banner-para">BEAT THE ROUTINE. TRAIN AT THE
                         <br /> CALIBER OF WORLD CHAMPIONS AND <br /> GET IN THE BEST SHAPE OF YOUER LIFE</p>
                         </div>
                     </div>
                     <div className="col-lg-5">
                         
                         <h1 className="offer-text">WHAT WE HAVE <br /> TO OFFER</h1>
                     </div>
                 </div>
             </div>
             
        </div>
        
    );
};

export default Banner;