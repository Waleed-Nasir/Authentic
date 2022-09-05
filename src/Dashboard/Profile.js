import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button, Form } from 'react-bootstrap';

import Aux from "../hoc/_Aux";

import image1 from '../assets/images/user/1.jpeg';
import image2 from '../assets/images/user/2.jpeg';
import image3 from '../assets/images/user/3.jpeg';
import image4 from '../assets/images/user/4.jpeg';
import image5 from '../assets/images/user/5.jpeg';
import image6 from '../assets/images/user/6.jpeg';
import image7 from '../assets/images/user/7.jpeg';
import image8 from '../assets/images/user/8.jpeg';
import avatar1 from '../assets/images/user/avatar-1.jpg';
import MODAL from './Modal';
import { toast } from 'react-toastify';

const Profile = () => {
    const [open, setOpen] = React.useState(false);
    const [isLoading, setisLoading] = React.useState(false);
    const [wishlist, setWishlist] = useState([''])
    const [getUpdatedList, setUpdatedList] = useState([])
    let TOKEN = localStorage.getItem('token')
    let userDetails = localStorage.getItem('userDetails')
    userDetails = JSON.parse(userDetails)


    useEffect(() => {
        getWishList()
    }, [])


    const postWishList = (path) => {
        path.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");
        // "wishlist": name

        var raw = JSON.stringify({
            "wishlists": wishlist.map((name) => ({ wishlist: name })),
            influencer_id: userDetails.influencer_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/add_wishlists", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                setOpen(false)
                setisLoading(false)
                setWishlist([''])
                getWishList()
            })
            .catch(error => setisLoading(false));


    }


    const getWishList = () => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.authentic-influencers.com/api/get_wishlists/${userDetails.influencer_id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                setUpdatedList(response.detail)
            })
            .catch(error => console.log('error', error));
    }

    const getDeleteWishList = (wishlist_id) => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({ wishlist_id });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/delete_wishlist", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                getWishList()
            })
            .catch(error => console.log('error', error));
    }



    return (
        <Aux>
            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <div className="col text-left">
                    <h5>Profile </h5>
                </div>
                <div  >
                    <Button variant={'primary'}>Edit Profile</Button>

                    <Button variant={'primary'} className='ml-3'>Change Password</Button>
                </div>
            </Row>

            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <Col className=' bg-white align-items-center d-flex mb-4' style={{ borderRadius: 12 }}>
                    <img style={{ height: 80, width: 80, objectFit: 'contain', background: 'black', margin: '0px 0px 0px 14px', borderRadius: 12 }} src={image6} alt="activity-user" />
                    <Card className='card-social m-0 shadow-none flex-grow-1'>
                        <Card.Body className='p-1 m-0'>
                            <div className="row align-items-center  justify-content-between  pt-3 m-0">
                                <div className="col text-left">
                                    <h5 className=" f-w-900 f-w-900   f-14">{userDetails.influencer_name}</h5>
                                    <h6 className='f-12'>Push Notification</h6>
                                </div>
                                {/* <div className="col text-right p-0">
                                    <button type="button" class="btn btn-success bg-success" style={{ width: 100 }}>Accept</button>
                                </div> */}
                            </div>
                        </Card.Body>
                        <Card.Body className='p-1 m-0'>
                            <div className="row align-items-center d-flex justify-flex-start   m-0">
                                <div className="flex-1">
                                    <div className="col text-left">
                                        <span className="text-muted f-w-900   f-14">Phone number</span>
                                        <h6>{userDetails.phone || '-'}</h6>
                                    </div>
                                </div>
                                <div className="flex-1" style={{ borderLeft: ' 1px solid #eaeaea' }}>
                                    <div className="col text-left" >
                                        <span className="text-muted f-w-900  f-12">Email</span>
                                        <h6>{userDetails.email}</h6>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
                {/* <div className='col bg-white align-items-center d-flex row justify-content-between d-flex ml-0 ml-sm-0 ml-md-2 ml-lg-2 ml-xl-2  mb-4' style={{ borderRadius: 12, minHeight: 120 }}>
                    <div className="flex-1" >
                        <div className="col text-left">
                            <span className="text-muted bold  f-28 f-w-900">BUDGET</span>
                            <h6 className=" bold  f-20 f-w-900">10,000</h6>
                        </div>
                    </div>
                    <div className="flex-1">
                        <a href='#' className="label theme-bg text-white f-12 align-items-right" style={{ background: '#00BFA5', borderRadius: 3 }}>Add Budget</a>
                    </div>
                </div> */}
            </Row>

            <Row>

                <Col md={12} xl={12}>
                    <Card className='Recent-Users'>
                        <Card.Header>
                            <Card.Title as='h5'>Wishlist</Card.Title>
                        </Card.Header>
                        <Card.Body className='px-0 py-0'>
                            <Table responsive hover>
                                <tbody>
                                    {getUpdatedList?.map((item, index) => <tr className="unread">
                                        <td> <h6 className="text-left pl-3">{item.value}</h6></td>
                                        <td className="text-right pr-3"><a href='#' onClick={() => { getDeleteWishList(item.wishlist_id) }} className="label theme-bg text-white f-12 align-items-right" style={{ borderRadius: 3 }}>Remove</a></td>
                                    </tr>)}
                                </tbody>
                            </Table>
                        </Card.Body>
                        <Card.Footer>
                            <div className="text-center">
                                <Button variant={'primary'} onClick={() => setOpen(true)} className='ml-3'>Add Wishlist</Button>
                            </div>
                        </Card.Footer>
                    </Card>
                </Col>
            </Row>
            <MODAL isOpen={open} handleModal={(e) => { setOpen(e); setWishlist(['']) }} showLoader={isLoading}>
                <Row className='pt-0 mt-0 justify-content-center pb-3' >
                    <h4>Add New Wishlist</h4>

                </Row>
                <Form className='pt-3' onSubmit={postWishList}>
                    <Form.Group controlId="formBasicPassword" className='pt-3'>
                        {wishlist?.map((item, index) => <div style={{ display: 'flex', marginBottom: 10 }}> <Form.Control style={{ paddingRight: 30 }} onChange={(e) => {
                            let data = [...wishlist]
                            data[index] = e.target.value
                            setWishlist(data)
                        }} value={item} required type="text" placeholder="Enter name" /> {index !== 0 && <a href='#' onClick={() => setWishlist(wishlist.filter((e, i) => i !== index))} className="label theme-bg text-white f-12 align-items-right" style={{ borderRadius: 3, position: 'absolute', right: 35, marginTop: 7 }}>-</a>}</div>)}
                    </Form.Group>
                    <a href='#' onClick={() => setWishlist([...wishlist, ''])} className="label theme-bg text-white f-12 align-items-right" style={{ borderRadius: 3 }}>Add New Field +</a>
                    <Button type={'submit'} variant="primary" className='w-100 m-0 mt-4'>
                        Submit
                    </Button>
                </Form>

            </MODAL>
        </Aux>
    );
}

export default Profile;