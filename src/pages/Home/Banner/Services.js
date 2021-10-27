import React from 'react';
import "./Services.css"
import icon1 from "../../../img/custom-icon-1.png"
import icon2 from "../../../img/h3-custom-icon-img-2.png"
import icon3 from "../../../img/h3-custom-icon-img-3.png"
import icon4 from "../../../img/h3-custom-icon-img-4.png"
const Services = () => {
    return (
        <div className="service-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 mb-5">
                    <h1 className="text-center text-white service-title">PUSH YOUR LIMITS FORWARD</h1>
                    <p className="text-center text-white service-para w-75 mx-auto">Train with the best experts in bodybuilding field. Your results will speak to themselves. Try the latest exercising trends, innovative equipment and special nutrition plans.</p>
                    </div>
                    <div className="col-lg-3  mt-3">
                    <div class="card service-card border-0 text-center text-white">
                        <img src={icon1} class="mx-auto" width="85px" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">QUALITY EQUIPMENT</h4>
                            <p class="card-text service-text text-muted">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div class="card service-card border-0 text-center text-white">
                        <img src={icon2} class="mx-auto" width="85px" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">HEALTHY NUTRITION PLAN</h4>
                            <p class="card-text service-text text-muted">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div class="card service-card border-0 text-center text-white">
                        <img src={icon3} class="mx-auto" width="85px" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">SHOWER SERVICE</h4>
                            <p class="card-text service-text text-muted">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.</p>
                            
                        </div>
                        </div>
                    </div>
                    <div className="col-lg-3 mt-3">
                    <div class="card service-card border-0 text-center text-white">
                        <img src={icon4} class="mx-auto" width="85px" alt="..."/>
                        <div class="card-body">
                            <h4 class="card-title">UNIQUE TO YOUR NEEDS</h4>
                            <p class="card-text service-text text-muted">Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipisc.</p>
                            
                        </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Services;