import React from 'react';
import bg from "../../../img/h3-single-img.jpg"
import "./Advice.css"
const Advice = () => {
    
    return (
        <div className="advice-section">
            <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="advice-text-box">
                <h1 className="service-title text-white">BUILT TO BRING <br /> BEST RESULTS</h1>
                <p className="text-white service-para text-muted">Tune up your shoulders, legs and lower back. Choose a workout <br /> that can improve your balance, strength and overall condition. <br /> Our team of experts will follow you through the whole workout <br /> process. Your body will thank you.</p>
                
                <button className="btn my-btn mb-3">READ MORE</button>
                    </div>
                </div>
                <div className="col-lg-6">
                    <img src={bg} className="img-fluid" alt="" />
                </div>
            </div>
        </div>
        </div>
    );
};

export default Advice;