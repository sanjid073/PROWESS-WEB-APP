import React from 'react';
import client1 from "../../../img/client/full-client-1.png"
import client2 from "../../../img/client/full-client-2.png"
import client3 from "../../../img/client/full-client-3.png"
import client4 from "../../../img/client/full-client-4.png"
import "./Client.css"
const Client = () => {
    return (
        <div className="client-section">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <img src={client1} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={client2} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={client3} alt="" />
                    </div>
                    <div className="col-lg-3">
                        <img src={client4} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Client;