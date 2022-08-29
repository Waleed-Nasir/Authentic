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
import KeepCard from './components/KeepCard';

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
    tiktok: 'Tiktok',
}
const KeepOnTrack = () => {
    const [open, setOpen] = React.useState(false);
    const [openUploadImage, setOpenUploadImage] = React.useState(false);
    const [isAllow, setAllow] = React.useState(false);
    const [state, setState] = useState([])
    const [cardState, setCardState] = useState({})
    const [O_type, setO_type] = useState('')
    const [files, setfiles] = useState(null)
    const [uploadedImages, setUploaded] = useState({})
    let TOKEN = localStorage.getItem('token')
    let userDetails = localStorage.getItem('userDetails')
    userDetails = JSON.parse(userDetails)

    useEffect(() => {
        getRC()
        GetImages()
    }, [])

    const handleOpen = (type) => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");
        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };
        fetch(`https://api.authentic-influencers.com/api/get_keep_on_tracks`, requestOptions)
            .then(response => response.text())
            .then(result => {
                setO_type(type)
                const { response } = JSON.parse(result)
                let NewSte = response.detail.filter((item) => item.type === type)
                setState(NewSte)
                setOpen(true)
                setAllow(true)
                handleDataVAL(type, NewSte)
            })
            .catch(error => console.log('error', error));
    }



    const handleOpenUpload = (type) => {
        setO_type(type)
        setOpenUploadImage(true)
    }


    const handlePost = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");
        var raw = JSON.stringify({
            "type": O_type,
            "influencer_id": userDetails.influencer_id,
            "tracks": state.map((item) => ({ keep_on_track_id: item.keep_on_track_id, value: item.value }))
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/add_keep_on_track_info", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                setOpenUploadImage(false)
                GetImages()
                toast(response.message)
                setOpen(false)
                getRC()
            })
            .catch(error => console.log('error', error));
    }
    const getPostImages = (e, files) => {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        let data = []

        for (let index = 0; index < files.length; index++) {

            var formdata = new FormData();
            formdata.append("file", files[index], files[index].name);
            // formdata.append("type", "image");

            var requestOptions = {
                method: 'POST',
                headers: myHeaders,
                body: formdata,
                redirect: 'follow'
            };
            data.push(requestOptions)
        }

        const promiseArray = data.map((header) => fetch("https://api.authentic-influencers.com/api/upload_media", header).then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                return { "image": response.detail }
            }));

        Promise.all(promiseArray)
            .then((data) => {
                SentImageUrlToAPi(e, data)
            })
            .catch((err) => {
                console.log(err, 'err')
            });


    }
    const handleFilesFirst = (e) => {
        e.preventDefault()
        getPostImages(e, files)
    }


    const SentImageUrlToAPi = (e, images) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "images": images,
            "type": O_type,
            "influencer_id": userDetails.influencer_id,
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://api.authentic-influencers.com/api/add_keep_on_track_image", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                handlePost(e)
                setfiles(null)
            })
            .catch(error => console.log('error', error));
    }




    const getRC = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        var raw = "";

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            // body: raw,
            redirect: 'follow'
        };

        fetch(`https://api.authentic-influencers.com/api/get_keep_on_track_info/${userDetails.influencer_id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                console.log(response.detail, 'response.detail')
                let Instagram = response.detail?.filter((item) => item?.keep_on_track_info?.type === 'instagram')
                let Tiktok = response.detail?.filter((item) => item?.keep_on_track_info?.type === 'tiktok')
                setCardState({ Instagram, Tiktok })
                handleDataVAL(O_type, state)
            })
            .catch(error => console.log('error', error));
    }


    const GetImages = () => {
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.authentic-influencers.com/api/get_keep_on_track_images/${userDetails.influencer_id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                let data = { instagram: [], tiktok: [] }
                response.detail.map((item) => {
                    if (item.type === 'instagram') {
                        data.instagram.push(item)
                    } else {
                        data.tiktok.push(item)
                    }
                })
                setUploaded(data)
            }
            )
            .catch(error => console.log('error', error));
    }


    const handleDataVAL = (O_type, state) => {
        setAllow(false)
        var data = {}
        let New = cardState[types[O_type]].map((item) => {
            data[item.keep_on_track_id] = item.keep_on_track_info.value
        })
        let NewState = state.map((item) => ({ ...item, value: data[item.keep_on_track_id || ''] }))
        console.log(NewState)
        setState(NewState)
    }

    const handleChangeDta = (e, index, keep_on_track_id) => {
        let newState = state.map((item) => (item.keep_on_track_id === keep_on_track_id ? { ...item, value: e.target.value } : item))
        console.log(newState, 'state')
        setState(newState)
    }

    console.log(uploadedImages, 'uploadedImages')

    return (
        <Aux>
            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <h5>Keep On Track</h5>

            </Row>
            <Row className='align-self-center'>
                {cardState?.Instagram ? <KeepCard data={cardState?.Instagram} type={'Instagram'}  onClickUpload={() => handleOpenUpload('instagram')} images={uploadedImages['instagram']} onClick={() => handleOpen('instagram')} /> : <Col md={6} xl={6} >
                    <Card style={{ height: 400 }} className='text-center justify-content-center'>
                        <div> <Button variant='primary' onClick={() => handleOpen('instagram')}  >Enter your Instagram Insights</Button></div>
                    </Card>
                </Col>}
                {cardState?.Tiktok ? <KeepCard data={cardState?.Tiktok} type={'Tiktok'} onClick={() => handleOpen('tiktok')}   onClickUpload={() => handleOpenUpload('tiktok')} images={uploadedImages['tiktok']} /> : <Col md={6} xl={6} >
                    <Card style={{ height: 400 }} className='text-center justify-content-center'>
                        <div> <Button variant='primary' onClick={() => handleOpen('tiktok')}  >Enter your Tiktok Insights</Button></div>
                    </Card>
                </Col>}

            </Row >

            <MODAL isOpen={open} handleModal={setOpen}>
                <Row className='pt-0 mt-0 justify-content-center pb-3' >
                    <h4>Enter {types[O_type]} Profile Details</h4>
                </Row>

                <Form className='pt-3' onSubmit={files?.length ? handleFilesFirst : handlePost}>
                    {state.map((item, index) => <Form.Group controlId="formBasicPassword">
                        <Form.Control required onChange={(e) => { handleChangeDta(e, index, item.keep_on_track_id) }} type="text" value={item?.value} placeholder={item?.field} />
                    </Form.Group>)}
                    {/* <DropZoneUploader getFile={setfiles} /> */}
                    {/* <DropZoneUploader /> */}
                    <Button type='submit' variant="primary" className='w-100 mt-3'>
                        Submit
                    </Button>
                </Form>
            </MODAL>
            <MODAL isOpen={openUploadImage} handleModal={setOpenUploadImage}>
                <Row className='pt-0 mt-0 justify-content-center pb-3' >
                    <h4>Upload {types[O_type]} Images</h4>
                </Row>

                <Form className='pt-3' onSubmit={files?.length ? handleFilesFirst : handlePost}>
                    <DropZoneUploader getFile={setfiles} />
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