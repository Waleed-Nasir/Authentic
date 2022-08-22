import React from 'react';
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
    const [price, setPrice] = React.useState(0);
    const handleOpen = () => setOpen(true);
    let TOKEN = localStorage.getItem('token')

    const fileUpload = (e) => {
        e.preventDefault()
        var myHeaders = new Headers();
        myHeaders.append("Authorization", `Bearer ${TOKEN}`);

        var formdata = new FormData();
        formdata.append("image", File, File.name);
        // formdata.append("price", price);

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: formdata,
            redirect: 'follow'
        };

        fetch("http://authenticinfluencersbackend-env.eba-auctmm2z.eu-west-2.elasticbeanstalk.com/api/upload_media", requestOptions)
            .then(response => response.text())
            .then(result => {
                const { response } = JSON.parse(result)
                toast('Image Uplaoded')
                setOpen(false)
            })
            .catch(error => console.log('error', error));
    }


    return (
        <Aux>
            <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                <h5>Gallery</h5>
                <div class="btn-group" >
                    <Button variant={'primary'}>Gallery</Button>
                    <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button>
                    <Button variant={'primary'} onClick={handleOpen} className='ml-3'>Add New Photo</Button>
                </div>
            </Row>
            <Row className='bg-white pt-4 pr-2 pl-2' >
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image1} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image2} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image3} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image4} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image5} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image6} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image7} alt="activity-user" />
                    </Card>
                </Col>
                <Col md={4} xl={4} >
                    <Card  >
                        <img style={{ height: 290 ,objectFit: 'contain',background:'black'}} class="img-fluid rounded" src={image8} alt="activity-user" />
                    </Card>
                </Col>

            </Row >
            <MODAL isOpen={open} handleModal={setOpen}>
                <Row className='pt-0 mt-0 justify-content-center pb-3' >
                    <h4>Add New Photo</h4>
                </Row>
                <Form className='pt-3' onSubmit={fileUpload}>
                    <DropZoneUploader getFile={getFile} />
                    {/* <Form.Group controlId="formBasicPassword" className='pt-3'>
                        <Form.Control onChange={(e) => setPrice(e.target.value)} value={price} required type="number" placeholder="Price" />
                    </Form.Group> */}
                    <Button type={'submit'} variant="primary" className='w-100 m-0 mt-4'>
                        Submit
                    </Button>
                </Form>
            </MODAL>
        </Aux>
    );
}

export default Gallery;