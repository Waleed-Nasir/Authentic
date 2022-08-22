import React from 'react';
import { NavLink } from 'react-router-dom';

import './../../../assets/scss/style.scss';
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class Forgot extends React.Component {
    render() {
        return (
            <div className="auth-wrapper">
                <div className="auth-content">
                    <div >
                        <div className=" text-center">
                            <div className="mb-4">
                                <img style={{ width: 280, objectFit: 'contain', marginBottom: 30 }} class="img-fluid" src={require('../../../assets/images/logo.png')}
                                    alt="Card image cap" />
                            </div>
                            <h3 className="mb-2">Forgot Password</h3>
                            <p className="mb-4 pb-4 text-muted">Entery your Registered Email Address</p>
                            <div className="input-group mb-3 mt-6">
                                <input type="email" className="form-control" placeholder="Email" />
                            </div>
                            <button className="btn btn-primary shadow-2 mb-4 w-100">Send</button>
                            <p className="mb-2 text-muted"><NavLink to="/signin">Back to Login</NavLink></p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Forgot;