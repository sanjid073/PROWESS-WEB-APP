import React from 'react';
import "./Pricing.css"
const Pricing = () => {
    return (
        <div className="pricing-section">
            <div className="container">
                
                <h1 className="service-title text-white">CHOOSE YOUR <br /> BEST RESULTS</h1>
                <div className="row">
                <div className="col-lg-4">
                    <div class="pricing-card">
                        <div class="card-body text-center">
                        <small className="sign">$</small>
                            <h1 class="d-inline price">33 </h1>
                            <h6 class="title-sub card-subtitle mb-2 text-muted">SINGLE CLASS</h6>
                            <h3 className="title-main" >CLASS DROP-IN</h3>
                            <p className="info ">BODY & MIND </p>
                            <p className="info">AENEAN MASSA</p>
                            <p className="info1"> QUALITY EQUIPMENT</p>
                            <button className="btn my-btn">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="pricing-card">
                        <div class="card-body text-center">
                        <small className="sign">$</small>
                            <h1 class="d-inline price">49 </h1>
                            <h6 class="title-sub card-subtitle mb-2 text-muted">PER MONTH</h6>
                            <h3 className="title-main" >12 MONTH UNLIMITED</h3>
                            <p className="info ">HEALTHY LIFE & MIND  </p>
                            <p className="info">SHOWER SERVICE</p>
                            <p className="info1"> QUISQUE RUTRUM</p>
                            <button className="btn my-btn">READ MORE</button>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4">
                    <div class="pricing-card">
                        <div class="card-body text-center">
                        <small className="sign">$</small>
                            <h1 class="d-inline price">99 </h1>
                            <h6 class="title-sub card-subtitle mb-2 text-muted">SINGLE CLASS</h6>
                            <h3 className="title-main" >6 MONTH UNLIMITED</h3>
                            <p className="info ">UNIQUE TO YOUR NEEDS</p>
                            <p className="info">AENEAN MASSA</p>
                            <p className="info1"> HEALTHY NUTRITION PLAN</p>
                            <button className="btn my-btn">READ MORE</button>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;<h3>this is Pricing</h3>