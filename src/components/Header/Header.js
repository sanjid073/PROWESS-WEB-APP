import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'
import logo from "../../img/logo.png"
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {firebaseContext,selected} = useAuth()
    const {user,Logout} = firebaseContext;
    const {displayName, photoURL} = user
    return (
        <div className="sticky-top">
                <nav className="navbar header navbar-expand-lg navbar-dark  ">
                        <div className="container">
                            <NavLink className="navbar-brand" to="/home">
                                <img src={logo} alt="logo" className="logo" />
                            </NavLink>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                            <ul className="navbar-nav ms-auto align-items-center">
                                <li className="nav-item">
                                <NavLink activeStyle={{color: "#F34E3A"}}  className="nav-NavLink" aria-current="page" to="/home">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeStyle={{color: "#F34E3A"}} className="nav-NavLink" to="/shop">Shop</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeStyle={{color: "#F34E3A"}} className="nav-NavLink" to="/pricing">Pricing</NavLink>
                                </li>
                                <li className="nav-item">
                                <NavLink activeStyle={{color: "#F34E3A"}} className="nav-NavLink" to="/about">About</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/cart"><i className="fas fa-shopping-cart"></i>
                                    <span className="badge cart-count"><span className="fw-bold fs-6 cart-count-2">{selected.length}</span></span>
                                    </NavLink>
                                </li>
                                
                                
                            {!displayName ? 
                            
                            (<>
                            <li className="nav-item">
                            <NavLink activeStyle={{color: "#F34E3A"}} className="nav-NavLink" to="/login">Login</NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink activeStyle={{color: "#F34E3A"}} className="nav-NavLink" to="/signup">Sign up</NavLink>
                            </li>
                            </>)
                            :
                        (<>
                                <li className="nav-item">
                            <NavLink  className="nav-NavLink" to="/">
                                <img src={photoURL} width="30px" className="rounded-circle" alt="" />
                            </NavLink>
                            </li>
                            <li className="nav-item">
                            <NavLink className="nav-NavLink disabled" to="/">{displayName}</NavLink>
                            </li>
                            <li onClick={Logout}  className=" btn "> 
                                <i class="fas fa-sign-out-alt"></i>
                            </li>
                            </>)}     
                            </ul>
                            </div>
                        </div>
                </nav>
        </div>
    );
};

export default Header;