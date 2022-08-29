import React, { useEffect } from 'react';
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
import MODAL from './Modal';
import DropZoneUploader from './DropZoneUploader';
import { toast } from 'react-toastify';

const Gallery = () => {
    const [open, setOpen] = React.useState(false);
    const [File, getFile] = React.useState(null);
    const [imageList, setImageList] = React.useState([]);
    const [MediaType, setMediaType] = React.useState('image');
    const [Sources, setSources] = React.useState(null);
    const handleOpen = () => setOpen(true);
    let TOKEN = localStorage.getItem('token')
    let userDetails = localStorage.getItem('userDetails')
    userDetails = JSON.parse(userDetails)
    const fileUpload = (e) => {
        e.preventDefault()
        setOpen(false);

        if (MediaType === 'video') {
            getPostImages(Sources)
            return false
        }


        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        if (!File) {
            toast.error('Please add image first')
            return false
        }

        getPostAllImages(e, File)


    }




    const getPostAllImages = (e, files) => {

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
                return { image: response.detail }
            }));

        Promise.all(promiseArray)
            .then((data) => {
                getPostImages(data)
            })
            .catch((err) => {
                console.log(err, 'err')
            });


    }

    const getPostImages = (path) => {

        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "type": MediaType, // image or video
            "images": [{ "image": path }],
            "influencer_id": userDetails.influencer_id
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };
        fetch("https://api.authentic-influencers.com/api/add_gallery_info", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                setOpen(false)
                getImages()
            })
            .catch(error => console.log('error', error));
    }


    useEffect(() => { getImages() }, [])

    const getImages = () => {
        var myHeaders = new Headers();
        myHeaders.append("Accept", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        var requestOptions = {
            method: 'GET',
            headers: myHeaders,
            redirect: 'follow'
        };

        fetch(`https://api.authentic-influencers.com/api/get_gallery_info/${userDetails.influencer_id}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                setImageList(response.detail)
            })
            .catch(error => console.log('error', error));
    }


    const onPressDelete = (gallery_id) => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);
        var raw = JSON.stringify({
            "gallery_id": gallery_id,
            "influencer_id": userDetails.influencer_id
        });

        var requestOptions = {
            method: 'DELETE',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("https://api.authentic-influencers.com/api/delete_gallery_info", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast(response.message)
                getImages()
            })
            .catch(error => console.log('error', error));
    }

    return (
        <Aux>
            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <h5>Gallery</h5>
                <div class="btn-group" >
                    <Button variant={'primary'}>Gallery</Button>
                    {/* <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button> */}
                    <Button variant={'primary'} onClick={handleOpen} className='ml-3'>Add New Photo</Button>
                </div>
            </Row>
            <Row className='bg-white pt-4 pr-2 pl-2' >
                {imageList?.map((item) => {
                    return <HandleView item={item} onPressDelete={() => onPressDelete(item.gallery_id)} />
                })}

            </Row >
            <MODAL isOpen={open} handleModal={setOpen}>
                <Row className='pt-0 mt-0 justify-content-center pb-3' >
                    <h4>Add New Photo</h4>
                </Row>
                <Form className='pt-3' onSubmit={fileUpload}>

                    {/* <Form.Group controlId="formBasicPassword" className='pt-3'>
                        <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} required type="number" placeholder="Price" />
                    </Form.Group> */}
                    <span>Media Type</span>
                    <Form.Group onChange={(e) => setMediaType(e.target.value)} className={'d-flex justify-content-between'}>
                        <Form.Check
                            custom
                            style={{ flex: 1 }}
                            type="radio"
                            label="Upload Image"
                            name="supportedRadios"
                            id="For_1"
                            value={'image'}
                            checked={MediaType === 'image'}
                        />
                        <Form.Check
                            custom
                            style={{ flex: 1 }}
                            type="radio"
                            label="Add Video Link"
                            name="supportedRadios"
                            id="For_2"
                            value={'video'}
                            checked={MediaType === 'video'}
                        />
                    </Form.Group>
                    {/* <span>Sources</span>
                    <Form.Group onChange={(e) => setSources(e.target.value)} className={'d-flex justify-content-between'}>
                        <Form.Check
                            custom
                            type="radio"
                            label="Instagram"
                            checked={Sources === 'instagram'}
                            name="type_Media"
                            id="type_Media_1"
                            value={'instagram'}
                            style={{ flex: 1 }}
                        />
                        <Form.Check
                            custom
                            type="radio"
                            label="Tiktok"
                            name="type_Media"
                            id="type_Media_2"
                            value={'tiktok'}
                            checked={Sources === 'tiktok'}
                            style={{ flex: 1 }}
                        />
                    </Form.Group> */}

                    {MediaType === 'image' ? <DropZoneUploader getFile={getFile} /> : <Form.Group controlId="formBasicPassword">
                        <Form.Control required onChange={(e) => { setSources(e.target.value) }} type="text" placeholder={'Enter Video url here'} />
                    </Form.Group>}
                    <Button type={'submit'} variant="primary" className='w-100 m-0 mt-4'>
                        Submit
                    </Button>
                </Form>
            </MODAL>
        </Aux>
    );
}




const HandleView = ({ item, onPressDelete }) => {

    return (item?.type === 'image' ? <Col md={4} xl={4} >
        <Card  >
            <i
                onClick={onPressDelete}
                className='feather icon-trash    bg-l-pink text-c-green f-20 p-3 mb-4 rounded' style={{
                    position: 'absolute',
                    right: ' 10px',
                    top: ' 10px',
                    cursor: 'pointer',
                }} />
            <img style={{ height: 290, objectFit: 'contain' }} class="img-fluid rounded" src={item.path} alt="activity-user" />
        </Card>
    </Col> : <Col md={4} xl={4} >
        <Card  >
            {/* <img style={{ height: 290, objectFit: 'contain', background: 'black' }} class="img-fluid rounded" src={item.path} alt="activity-user" /> */}
            <div class="embed-responsive embed-responsive-1by1">
                <iframe class="embed-responsive-item" src={item.path} style={{ height: 290, objectFit: 'contain', background: 'black' }}></iframe>
            </div>
        </Card>
    </Col>)
}


export default Gallery;