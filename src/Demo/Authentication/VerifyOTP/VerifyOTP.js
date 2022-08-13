import React from 'react';
import {NavLink} from 'react-router-dom';

import './../../../assets/scss/style.scss';
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

class VerifyOTP extends React.Component {
    render () {
        return(
                <div className="auth-wrapper">
                    <div className="auth-content">
                        <div >
                            <div className=" text-center">
                                <div className="mb-4">
                                    <i className="feather icon-mail auth-icon" />
                                </div>
                                <h3 className="mb-2">Verify OTP</h3>
                                <p className="mb-4 pb-4 text-muted">Email Sent At Johndoe@Mail.com</p>
                                <div className="input-group mb-3 mt-6">
                                    <input type="number"  className="form-control text-center mr-4" placeholder="0" />
                                    <input type="number"  className="form-control text-center mr-4" placeholder="0" />
                                    <input type="number"  className="form-control text-center mr-4" placeholder="0" />
                                    <input type="number"  className="form-control text-center" placeholder="0" />
                                </div>
                                <button className="btn btn-primary shadow-2 mb-4 w-100">Confirm</button>
                                <p className="mb-2 text-muted"><NavLink to="/auth/signin">Back to Login</NavLink></p>
                            </div>
                        </div>
                    </div>
                </div>
        );
    }
}

export default VerifyOTP;