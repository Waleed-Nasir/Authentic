import React, { useState } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { toast } from 'react-toastify';

import './../../../assets/scss/style.scss';
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

const Forgot = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const forgotPSW = () => {
        if (!email && !email.length) {
            toast('Please enter email ')
            return false
        }

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
        });
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/forgot_password_influencer", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response, status, error } = JSON.parse(result)
                // console.log(result, 'result')
                if (status) {
                    toast(response.message)
                    setTimeout(() => {
                        history.push('/signin')
                    }, 600);
                }
                else {
                    toast.error(error.message)
                }

            })
            .catch(error => toast.error(error));
    }
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
                        <p className="mb-4 pb-4 text-muted">Enter your Registered Email Address</p>

                        <div className="input-group mb-3 mt-6">
                            <input type="email" className="form-control" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
                        </div>
                        <button onClick={forgotPSW} className="btn btn-primary shadow-2 mb-4 w-100">Send</button>

                        <p className="mb-2 text-muted"><NavLink to="/signin">Back to Login</NavLink></p>
                    </div>
                </div>
            </div>
        </div>
    );

}

export default Forgot;