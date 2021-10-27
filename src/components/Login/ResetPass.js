import React from 'react';
import useAuth from '../../hooks/useAuth';
import backgroundImage from "../../img/pexels-shawn-stutzman-1010496.jpg"

const ResetPass = () => {
    const styles = {    
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100%',
        height: '100%',
        paddingTop:"10%",
        paddingBottom:"35%"
    };
    const {firebaseContext} = useAuth()
    const {getEmail, error,passwordReset} = firebaseContext;
    return (
        <div className="reset-container" style={styles}>
        <div className="text-center   reset-div">
            <form onSubmit={passwordReset}>
                <h3>Reset Password!</h3>
            <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input onBlur={getEmail} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text text-danger">{error}</div>
            </div>
            <button type="submit" className="btn my-btn">Submit</button>
            </form>
      </div>
      </div>
    );
};

export default ResetPass;