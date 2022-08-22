import React, { useEffect, useState } from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button, Form } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";

import image1 from '../assets/images/user/1.jpeg';
import image2 from '../assets/images/user/2.jpeg';
import image3 from '../assets/images/user/3.jpeg';
import image4 from '../assets/images/user/4.jpeg';
import image5 from '../assets/images/user/5.jpeg';
import image6 from '../assets/images/user/6.jpeg';
import image7 from '../assets/images/user/7.jpeg';
import image8 from '../assets/images/user/8.jpeg';
import { Box, Modal } from '@material-ui/core';
import MODAL from './Modal';
import DropZoneUploader from './DropZoneUploader';
import { toast } from 'react-toastify';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const types = {
    instagram: 'Instagram',
    tiktok: 'tiktok',
}
const KeepOnTrack = () => {
    const [open, setOpen] = React.useState(false);
    const [state, setState] = useState([])
    const [O_type, setO_type] = useState('')
    let TOKEN = localStorage.getItem('token')
    let userDetails = localStorage.getItem('userDetails')
    userDetails = JSON.parse(userDetails)
    const handleOpen = (type) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/get_keep_on_tracks`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                setState(response.detail.filter((item)=>item.type === type))
                setOpen(true)
            })
        setO_type(type)
            .catch(error => console.log('error', error));
    }


    const handlePost = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "type": O_type,
            "influencer_id": userDetails.influencer_id,
            "tracks": state.map((item) => ({ keep_on_track_id: item.keep_on_track_id, value: item.keep_on_track?.value }))
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/add_keep_on_track_info", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                setOpen(false)
            })
            .catch(error => console.log('error', error));
    }






    return (
        <Aux>
            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <h5>Keep On Track</h5>

            </Row>
            <Row className='align-self-center'>
                <Col md={6} xl={6} >
                    <Card style={{ height: 400 }} className='text-center justify-content-center'>
                        <div> <Button variant='primary' onClick={() => handleOpen('instagram')}  >Enter your Instagram Details</Button></div>
                    </Card>
                </Col>
                <Col md={6} xl={6} >
                    <Card style={{ height: 400 }} className='text-center justify-content-center'>
                        <div> <Button variant='primary' onClick={() => handleOpen('tiktok')}  >Enter your Tiktok Details</Button></div>
                    </Card>
                </Col>
            </Row >


            <MODAL isOpen={open} handleModal={setOpen}>
                <Row className='pt-0 mt-0 justify-content-center pb-3' >
                    <h4>Enter {types[O_type]} Profile Details</h4>
                </Row>

                <Form className='pt-3' onSubmit={handlePost}>
                    {state.map((item, index) => <Form.Group controlId="formBasicPassword">
                        <Form.Control required onChange={(e) => { state[index] = { ...state[index], keep_on_track: { ...state[index], value: e.target.value } } }} type="text" value={item?.value} placeholder={item?.field} />
                    </Form.Group>)}
                    {/* <DropZoneUploader /> */}
                    <Button type='submit' variant="primary" className='w-100 mt-3'>
                        Submit
                    </Button>
                </Form>
            </MODAL>
        </Aux>
    );
}

export default KeepOnTrack;