import React, { useEffect, useState } from 'react';
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
import MultipleSelectChip from '../../../Dashboard/components/MultiSelect';
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
    const [URI, setURI] = useState(null)
    const [file, setFIle] = useState(null)
    const [CategoryList, setCategoryList] = useState([])
    const [Categoreis, setCategoreis] = useState([])


    useEffect(() => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/get_categories", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                setCategoryList(response.detail)
            })
            .catch(error => console.log('error', error));
    }, [])




    const displayUplaodFile = (e) => {
        setFIle(e.target.files[0])
        if (e.target.files && e.target.files[0]) {
            var reader = new FileReader();
            reader.onload = (E) => {
                setURI(E.target.result)
            };
            reader.readAsDataURL(e.target.files[0]);
        }

    }


    const getPostImages = (e) => {
        console.log(file, 'file')
        const files = file
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");

        var formdata = new FormData();
        formdata.append("file", files, files.name);
        // formdata.append("type", "image");

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/upload_media", requestOptions).then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                GetCreateProfile(response.detail)
            }).catch(() => {
            })

    }


    const GetCreateProfile = (image) => {
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
            image,
            categories: Categoreis.map((value) => ({ category_id: value }))
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/register_influencer", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response, status, error } = JSON.parse(result)
                // console.log(result, 'result')
                if (status) {

                    toast(response.message)
                    // localStorage.setItem('userDetails', JSON.stringify(response.detail.influencer))
                    // localStorage.setItem('token', response.detail.token)
                    // localStorage.setItem('role', 'response.detail.type')
                    history.push('/signin')
                }
                else {
                    toast.error(error.message)
                }

            })
            .catch(error => toast.error(error));
    }


    const SignUp = () => {
        if (!URI) {
            toast('Please chose profile image ')
            return false
        }
        if (!influencer_name && !influencer_name.length) {
            toast('Please enter Influencer name ')
            return false
        }
        if (!email && !email.length) {
            toast('Please enter email ')
            return false
        }
        if (!password && !password.length) {
            toast('Please enter password ')
            return false
        }
        if (!location && !location.length) {
            toast('Please enter location ')
            return false
        }
        if (!facebook && !facebook.length) {
            toast('Please enter facebook link ')
            return false
        }
        if (!instagram && !instagram.length) {
            toast('Please enter instagram  link')
            return false
        }
        if (!tiktok && !tiktok.length) {
            toast('Please enter tiktok link')
            return false
        }
        if (!Categoreis && !Categoreis.length) {
            toast('Please enter Categoreis')
            return false
        }
        getPostImages()
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
                        <p className="mb-4 pb-4 text-muted">Enter your details to continue</p>
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">

                                <label for="img"> {URI ? <img id="blah" src={URI} alt="your image" width={120} height={120} style={{ objectFit: 'contain' }} /> : 'Select profile image:'}</label>
                                <input type="file" id="img" name="img" accept="image/*" onChange={displayUplaodFile} />
                                {/* <label htmlFor="checkbox-fill-a1" className="cr"> Save credentials</label> */}

                            </div>
                        </div>
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
                        <div className="form-group text-left">
                            <div className="checkbox checkbox-fill d-inline">

                                <label > Select Categoreis:</label>
                                <MultipleSelectChip setCategoreis={setCategoreis} item={CategoryList} />

                            </div>
                        </div>


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