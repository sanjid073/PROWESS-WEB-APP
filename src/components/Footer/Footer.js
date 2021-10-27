import React from 'react';
import "./Footer.css"
import logo from "../../img/logo.png"
import { NavLink } from 'react-router-dom';
const Footer = () => {
    return (
        <footer className="footer-section">
              <div className="container">
            <div className="footer-title w-75 mx-auto">
                <div className="row">
                <div className="col-lg-6">
                    <h3 className="text-white mx-3 mt-3 mb-0">Ready for a healthy Life?</h3>
                    <p className="text-white mx-3 mt-0">Let get's Started!</p>
                </div>
                <div className="col-lg-6 footer-btn">
                    <button className="btn my-btn3 mx-3 mt-3">About us </button>
                </div>
                </div>
            </div>
                  <div className="row text-white footer-info">
                      <div className="col-lg-2">
                          <img src={logo} className="logo" alt="" />
                          <p className="m-0 text-muted">@2021</p>
                      </div>
                      <div className="col-lg-2">
                          <p className="fw-bold mb-1"><strong>Customers</strong></p>
                          <p className="m-0"> <small> Buyers </small></p>
                          <p className="m-0"> <small> Supplier </small></p>
                      </div>
                      <div className="col-lg-2">
                      <p className="fw-bold mb-1"><strong>Company</strong></p>
                      <NavLink className="text-decoration-none text-white" to="/about">About us</NavLink><br />
                      <NavLink className="text-decoration-none text-white" to="/shop">Shop</NavLink><br />
                      <NavLink className="text-decoration-none text-white" to="/pricing">Pricing</NavLink>
                      </div>
                      <div className="col-lg-3">
                      <p className="fw-bold mb-1"><strong>Further Information</strong></p>
                          <p className="m-0"> <small> Terms & condition </small></p>
                          <p className="m-0"> <small> Privacy policy </small></p>
                      </div>
                      <div className="col-lg-3">
                      <p className="fw-bold mb-1"><strong>Follow us</strong></p>
                      <a className="me-2" href="/"><i class="fab fa-facebook"></i></a>
                      <a className="me-2" href="/"><i class="fab fa-instagram"></i></a>
                      <a className="me-2" href="/"><i class="fab fa-twitter"></i></a>
                      <a className="me-2" href="/"><i class="fab fa-linkedin"></i></a>
                      </div>
                  </div>
             </div>
        </footer>
    );
};

export default Footer;