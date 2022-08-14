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

class Campaign extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Compaign Title  <span className="text-muted bold  f-12">- (Waiting for Admin Approval)</span></h5>
                </Row>

                <Row className=' bg-white align-items-center' style={{ borderRadius: 12 }}>
                    <img style={{ height: 80, width: 80, margin: '0px 0px 0px 14px', borderRadius: 12 }} src={image6} alt="activity-user" />
                    <Card className='card-social m-0 shadow-none flex-grow-1'>
                        <Card.Body className='p-1 m-0'>
                            <div className="row align-items-center justify-content-center pt-3 m-0">
                                <div className="col text-left">
                                    <h5>Compaign Title</h5>
                                </div>
                            </div>
                        </Card.Body>
                        <Card.Body className='p-1 m-0'>
                            <div className="row align-items-center d-flex justify-content-between   m-0">
                                <div className="flex-1">
                                    <div className="col text-left">
                                        <span className="text-muted bold  f-12">Compaign Type</span>
                                        <h6>Paid</h6>
                                    </div>
                                </div>
                                <div className="flex-1" style={{ borderLeft: ' 1px solid #eaeaea' }}>
                                    <div className="col text-left" >
                                        <span className="text-muted bold  f-12">No of Followers</span>
                                        <h6>12,281</h6>
                                    </div>
                                </div>
                                <div className="flex-1" style={{ borderLeft: ' 1px solid #eaeaea' }}>
                                    <div className="col text-left">
                                        <span className="text-muted bold  f-12">Compaign Category</span>
                                        <h6>Beauty</h6>
                                    </div>
                                </div>
                                <div className="flex-1" style={{ borderLeft: ' 1px solid #eaeaea' }}>
                                    <div className="col text-left">
                                        <span className="text-muted bold  f-12">Interested pepoles	</span>
                                        <h6>12 Infulancer Interested</h6>
                                    </div>
                                </div>
                                <div className="flex-1" style={{ borderLeft: ' 1px solid #eaeaea' }}>
                                    <div className="col text-left">
                                        <span className="text-muted bold  f-12">Compaign Need a</span>
                                        <h6>Instagram</h6>
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Row>

                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Gallery</h5>
                    {/* <div class="btn-group" >
                        <Button variant={'primary'}>Gallery</Button>
                        <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button>
                        <Button variant={'primary'} className='ml-3'>Add New Photo</Button>
                    </div> */}
                </Row>
                <Row className='bg-white pt-4 pr-2 pl-2' >
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image1} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image2} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image3} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image4} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image5} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image6} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image7} alt="activity-user" />
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card  >
                            <img style={{ borderRadius: 12, height: 290 }} class="img-fluid img-thumbnail" src={image8} alt="activity-user" />
                        </Card>
                    </Col>

                </Row >
            </Aux>
        );
    }
}

export default Campaign;