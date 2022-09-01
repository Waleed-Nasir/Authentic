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
import FormsElements from '../Demo/Forms/FormsElements';

class CreateSurvey extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Creators Survey</h5>
                </Row>
                <Row className=' p-4   d-flex justify-content-between bg-white' >
                    <h5>New Survey</h5>
                </Row>
                <Row className='bg-white pt-0 rounded' >
                    <Col md={4} xl={4} >
                        <Card className='p-4 rounded'  >
                            <span className='f-w-600 f-14 text-dark pb-5'>Which of the following life moments do you have comping up?</span>
                            <Form.Group>
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Engaaged
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio1"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Baby on the way
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio2"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Moving
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio3"
                                    />
                                </div>
                                <hr />

                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Other
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio4"
                                    />
                                </div>

                            </Form.Group>
                        </Card>
                    </Col>
                    {/* <Col md={4} xl={4} >
                        <Card className='p-4 rounded'  >
                            <span className='f-w-600 f-14 text-dark pb-5'>Which of the following life moments do you have comping up?</span>
                            <Form.Group>
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Engaaged
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio1"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Baby on the way
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio2"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Moving
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio3"
                                    />
                                </div>
                                <hr />

                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Other
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio4"
                                    />
                                </div>

                            </Form.Group>
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card className='p-4 rounded'  >
                            <span className='f-w-600 f-14 text-dark pb-5'>Which of the following life moments do you have comping up?</span>
                            <Form.Group>
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Engaaged
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio1"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Baby on the way
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio2"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Moving
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio3"
                                    />
                                </div>
                                <hr />

                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Other
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio4"
                                    />
                                </div>

                            </Form.Group>
                        </Card>
                    </Col> */}
                </Row >
                <Row className=' p-4 mt-5  d-flex justify-content-between bg-white' >
                    <h5>Submitted Survey</h5>
                </Row>
                <Row className='bg-white pt-0 orunded' >
                    <Col md={4} xl={4} >
                        <Card className='p-4 rounded' style={{backgroundColor:'#eeeeee'}}  >
                            <span className='f-w-600 f-14 text-dark pb-5'>Which of the following life moments do you have coming up?</span>
                            <Form.Group>
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Engaged
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio1"
                                        disabled
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Baby on the way
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio2"
                                        disabled
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Moving
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio3"
                                        disabled
                                    />
                                </div>
                                <hr />

                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Other
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio4"
                                    />
                                </div>

                            </Form.Group>
                        </Card>
                    </Col>
                    {/* <Col md={4} xl={4} >
                        <Card className='p-4 rounded' style={{backgroundColor:'#eeeeee'}}  >
                            <span className='f-w-600 f-14 text-dark pb-5'>Which of the following life moments do you have comping up?</span>
                            <Form.Group>
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Engaaged
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio1"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Baby on the way
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio2"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Moving
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio3"
                                    />
                                </div>
                                <hr />

                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Other
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio4"
                                    />
                                </div>

                            </Form.Group>
                        </Card>
                    </Col>
                    <Col md={4} xl={4} >
                        <Card className='p-4 rounded' style={{backgroundColor:'#eeeeee'}}  >
                            <span className='f-w-600 f-14 text-dark pb-5'>Which of the following life moments do you have comping up?</span>
                            <Form.Group>
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Engaaged
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio1"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Baby on the way
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio2"
                                    />
                                </div>
                                <hr />
                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Moving
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio3"
                                    />
                                </div>
                                <hr />

                                <div class="media align-item-center justify-contennt-between pt-0 pb-0 mb-0">
                                    <div class="media-body f-w-800 f-12">
                                        Other
                                    </div>
                                    <Form.Check
                                        custom
                                        // label="Or toggle this other custom radio"
                                        disabled
                                        type="radio"
                                        name="supportedRadios"
                                        id="supportedRadio4"
                                    />
                                </div>

                            </Form.Group>
                        </Card>
                    </Col> */}
                </Row >
            </Aux>
        );
    }
}

export default CreateSurvey;