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

const SignUp = () => {
    const history = useHistory();
    const [email, setEmail] = useState('inf@gmail.com')
    const [password, setpassword] = useState('12345')
    const [influencer_name, setInfluencer_name] = useState('')
    const [location, setLocation] = useState('')
    const [facebook, setFacebook] = useState('')
    const [instagram, setInstagram] = useState('')
    const [tiktok, setTiktok] = useState('')


    const SignUp = () => {
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
            influencer_name,
            email,
            password,
            location,
            facebook,
            instagram,
            tiktok,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/register_influencer",requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response, status, error } = JSON.parse(result)
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
            .catch(error => toast.error(error));
    }

    return (
        <div className="auth-wrapper">
            <div className="auth-content">
                <div >
                    <div className=" text-center">

                        <div className="mb-4">
                            <img style={{ width: 280, objectFit: 'contain', marginBottom: 10 }} class="img-fluid" src={require('../../../assets/images/logo.png')}
                                alt="Card image cap" />
                        </div>
                        <h3 className="mb-2">Welcome to admin</h3>
                        <p className="mb-4 pb-4 text-muted">Entery your details to continue</p>
                        <div className="input-group mb-4">
                            <input type="text" onChange={(e) => setInfluencer_name(e.target.value)} value={influencer_name} className="form-control" placeholder="Influencer Name" />
                        </div>
                        <div className="input-group mb-3 mt-6">
                            <input type="email" onChange={(e) => setEmail(e.target.value)} value={email} className="form-control" placeholder="Email" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} className="form-control" placeholder="password" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="text" onChange={(e) => setLocation(e.target.value)} value={location} className="form-control" placeholder="Location" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="text" onChange={(e) => setFacebook(e.target.value)} value={facebook} className="form-control" placeholder="Facebook Url" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="text" onChange={(e) => setInstagram(e.target.value)} value={instagram} className="form-control" placeholder="Instagram Url" />
                        </div>
                        <div className="input-group mb-4">
                            <input type="text" onChange={(e) => setTiktok(e.target.value)} value={tiktok} className="form-control" placeholder="Tiktok Url" />
                        </div>

                        {/* <div className="form-group text-left">
                                    <div className="checkbox checkbox-fill d-inline">
                                        <input type="checkbox" name="checkbox-fill-1" id="checkbox-fill-a1" />
                                            <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label>
                                    </div>
                                </div> */}
                        <button className="btn btn-primary shadow-2 mb-4 w-100" onClick={SignUp}>Sign Up</button>
                        <p className="mb-2 text-muted"><NavLink to="/signIn">Back to Sign In?</NavLink></p>
                        {/* <p className="mb-0 text-muted">Don’t have an account? <NavLink to="/signup-1">Signup</NavLink></p> */}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignUp;