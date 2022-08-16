import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../hoc/_Aux";

class Home extends React.Component {
    render() {

        return (
            <Aux>
                <Row>
                    <Col md={4} xl={3}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <i className=" bg-l-pink fa fa-bullhorn text-c-green f-20 p-3 mb-4 rounded" />
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> Campaigns</h3>
                                    </div>

                                    <div className=" text-right">
                                        <p className="f-w-600 m-b-0 f-18  text-c-green ">300</p>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={3}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <i className=" bg-l-pink fa fa-random text-c-green f-20 p-3 mb-4 rounded" />
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0">Keep on Track</h3>
                                    </div>

                                    <div className=" text-right">
                                        <p className="f-w-600 m-b-0 f-18  text-c-green ">300</p>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={3}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <i className=" bg-l-pink fa fa-bullhorn text-c-green f-20 p-3 mb-4 rounded" />
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> Campaigns Result</h3>
                                    </div>

                                    <div className=" text-right">
                                        <p className="f-w-600 m-b-0 f-18  text-c-green ">300</p>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4} xl={3}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <i className=" bg-l-pink fa fa-list text-c-green f-20 p-3 mb-4 rounded" />
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0">Survey Creators</h3>
                                    </div>

                                    <div className=" text-right">
                                        <p className="f-w-600 m-b-0 f-18  text-c-green ">300</p>
                                    </div>
                                </div>

                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Home;