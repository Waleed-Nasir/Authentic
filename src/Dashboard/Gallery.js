import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';

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

class Gallery extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Gallery</h5>
                    <div class="btn-group" >
                        <Button variant={'primary'}>Gallery</Button>
                        <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button>
                    <Button variant={'primary'} className='ml-3'>Add New Photo</Button>
                    </div>
                </Row>
                <Row className='bg-white pt-4 pr-2 pl-2' >
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image1} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image2} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image3} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image4} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image5} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image6} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image7} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ height: 240 }} class="img-fluid img-thumbnail" src={image8} alt="activity-user" />
                        </Card>
                    </Col>

                </Row >
            </Aux>
        );
    }
}

export default Gallery;