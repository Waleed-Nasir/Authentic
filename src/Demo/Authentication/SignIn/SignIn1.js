import React, { useState } from 'react';
import { NavLink, } from 'react-router-dom';
import { toast } from 'react-toastify';
import './../../../assets/scss/style.scss';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useHistory,
    useLocation,
    useParams
} from "react-router-dom";
// import Aux from "../../../hoc/_Aux";
// import Breadcrumb from "../../../App/layout/AdminLayout/Breadcrumb";

const SignIn = () => {
    const history = useHistory();
    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')
    const Sigin = () => {
        if (!email && !email.length) {
            toast('Please enter email ')
            return false
        }
        if (!password && !password.length) {
            toast('Please enter password ')
            return false
        }
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "email": email,
            "password": password
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw
        };
        fetch("http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/login_influencer", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response, status ,error} = JSON.parse(result)
                // console.log(result, 'result')
                if (status) {

                    toast(response.message)
                    localStorage.setItem('userDetails', JSON.stringify(response.detail.influencer))
                    localStorage.setItem('token', response.detail.token)
                    // localStorage.setItem('role', 'response.detail.type')
                    history.push('/Home')
                }
                else {
                    toast.error(error.message)
                }

            })
            .catch (error => toast.error(error));
    }

return (
    <div className="auth-wrapper">
        <div className="auth-content">
            {/* <div className="auth-bg">
                            <span className="r"/>
                            <span className="r s"/>
                            <span className="r s"/>
                            <span className="r"/>
                        </div> */}
            <div >
                <div className=" text-center">
                    
                    <div className="mb-4">
                    <img style={{width:280,objectFit:'contain',marginBottom:30}} class="img-fluid" src={require('../../../assets/images/logo.png')}
                        alt="Card image cap" />
                    </div>
                    <h3 className="mb-2">Welcome to admin</h3>
                    <p className="mb-4 pb-4 text-muted">Entery your details to continue</p>
                    <div className="input-group mb-3 mt-6">
                        <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email" />
                    </div>
                    <div className="input-group mb-4">
                        <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} className="form-control" placeholder="password" />
                    </div>
                    {/* <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div> */}
                    <button className="btn btn-primary shadow-2 mb-4 w-100" onClick={Sigin}>Login</button>
                    <p className="mb-2 text-muted"><NavLink to="/forgot">Forgot password?</NavLink></p>
                    <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/signup">Signup</NavLink></p>
                </div>
            </div>
        </div>
    </div>
);
}

export default SignIn;