import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';
import avatar3 from '../assets/images/user/avatar-3.jpg';

class Metrics extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-4 pb-4 d-flex justify-content-between' >
                    <h5>Metrics</h5>
                </Row>
                <Row>

                    <Col md={6} xl={12}>
                        <Card className='Recent-Users'>
                            {/* <Card.Header>
                                <Card.Title as='h5'>Recent Users</Card.Title>
                            </Card.Header> */}
                            <Card.Body className='px-0 py-0'>
                                <Table responsive hover>
                                    <thead className=' theme-bg text-white'>
                                        <tr>
                                            <th>No</th>
                                            <th>Name</th>
                                            <th>Total Following</th>
                                            <th>Total Followers</th>
                                            <th>Total Reach</th>
                                            <th>Location</th>
                                            <th>Total No of post</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="unread">
                                            <td> <h6 className="text-center">1</h6></td>
                                            <td  className="d-flex row "><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /> <h6 className="mb-1">Isabella Christensen</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>

                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Gallery</a></td>
                                        </tr>

                                        <tr className="unread">
                                            <td> <h6 className="text-center">2</h6></td>
                                            <td  className="d-flex row "><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /> <h6 className="mb-1">Isabella Christensen</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>

                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Gallery</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td> <h6 className="text-center">3</h6></td>
                                            <td  className="d-flex row "><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /> <h6 className="mb-1">Isabella Christensen</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>

                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Gallery</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td> <h6 className="text-center">4</h6></td>
                                            <td  className="d-flex row "><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /> <h6 className="mb-1">Isabella Christensen</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>

                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Gallery</a></td>
                                        </tr>
                                        <tr className="unread">
                                            <td> <h6 className="text-center">5</h6></td>
                                            <td  className="d-flex row "><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /> <h6 className="mb-1">Isabella Christensen</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>
                                            <td> <h6 className="text-center">{Math.random(222).toFixed()}</h6></td>

                                            <td><a href={DEMO.BLANK_LINK} className="label theme-bg text-white f-12">Gallery</a></td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Metrics;