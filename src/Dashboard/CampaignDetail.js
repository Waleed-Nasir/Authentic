import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import DEMO from "../store/constant";

import avatar1 from '../assets/images/user/avatar-1.jpg';
import avatar2 from '../assets/images/user/avatar-2.jpg';
import avatar3 from '../assets/images/user/avatar-3.jpg';
import image6 from '../assets/images/user/6.jpeg';

class CampaignDetail extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <div className="col text-left">
                        <h5>Compaign Detail </h5>
                        <h6 className='f-12'>Approval 22 jan 2022</h6>
                    </div>
                    <div class="btn-group" >
                        <Button variant={'primary'}>Gallery</Button>
                        <Button variant={'secondary'} className='ml-2'>Start Compaign</Button>
                    </div>
                </Row>

                <Row className=' bg-white align-items-center' style={{ borderRadius: 12 }}>
                    <img style={{ height: 80, width: 80, margin: '0px 0px 0px 14px', borderRadius: 12 }} src={image6} alt="activity-user" />
                    <Card className='card-social m-0 shadow-none flex-grow-1'>
                        <Card.Body className='p-1 m-0'>
                            <div className="row align-items-center  justify-content-between  pt-3 m-0">
                                <div className="col text-left">
                                    <h5>Compaign Title</h5>
                                    <h6 className='f-12'>End Date 11 jan 2022</h6>
                                </div>
                                <div className="col text-right">
                                    <h6>BUDBET</h6>
                                    <span className="text-muted bold  f-12">19,999</span>
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
                    <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Recent Users</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Isabella Christensen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">     <i className="feather icon-x f-20 text-c-green" />  <i className="feather icon-check f-20 text-dark-green" /></h6>
                                            </td>
                                            <td>
                                                <Button variant={'secondary'} className='ml-2'>------</Button>
                                                <Button variant={'primary'}>Deatils</Button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Mathilde Andersen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">     <i className="feather icon-x f-20 text-c-green" />  <i className="feather icon-check f-20 text-dark-green" /></h6>
                                            </td>
                                            <td>
                                                <Button variant={'secondary'} className='ml-2'>------</Button>
                                                <Button variant={'primary'}>Deatils</Button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Karla Sorensen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">     <i className="feather icon-x f-20 text-c-green" />  <i className="feather icon-check f-20 text-dark-green" /></h6>
                                            </td>
                                            <td>
                                                <Button variant={'secondary'} className='ml-2'>------</Button>
                                                <Button variant={'primary'}>Deatils</Button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Ida Jorgensen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">     <i className="feather icon-x f-20 text-c-green" />  <i className="feather icon-check f-20 text-dark-green" /></h6>
                                            </td>
                                            <td>
                                                <Button variant={'secondary'} className='ml-2'>------</Button>
                                                <Button variant={'primary'}>Deatils</Button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Albert Andersen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <h6 className="text-muted">     <i className="feather icon-x f-20 text-c-green" />  <i className="feather icon-check f-20 text-dark-green" /></h6>
                                            </td>
                                            <td>
                                                <Button variant={'secondary'} className='ml-2'>------</Button>
                                                <Button variant={'primary'}>Deatils</Button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={6}>
                        <Card className='Recent-Users'>
                            <Card.Header>
                                <Card.Title as='h5'>Recent Users</Card.Title>
                            </Card.Header>
                            <Card.Body className='px-0 py-2'>
                                <Table responsive hover>
                                    <tbody>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Isabella Christensen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline-secondary">Approved</button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Mathilde Andersen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline-secondary">Approved</button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar3} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Karla Sorensen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline-secondary">Approved</button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar1} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Ida Jorgensen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline-danger" variant={'danger'}>Rejected</button>
                                            </td>
                                        </tr>
                                        <tr className="unread">
                                            <td><img className="rounded-circle" style={{ width: '40px' }} src={avatar2} alt="activity-user" /></td>
                                            <td>
                                                <p className="m-0">Albert Andersen</p>
                                                <h6 className="mb-1"> Yah000000</h6>
                                            </td>
                                            <td>
                                                <button class="btn btn-outline-danger" variant={'danger'}>Rejected</button>
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row >
                <Row className='pt-4 pr-2 pl-4 pb-4 d-flex justify-content-between' >
                    <h5>Tasks</h5>
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
                                            <th>Task</th>
                                            <th>Asign</th>
                                           
                                        </tr>
                                    </thead>
                                    <tbody>
                                      
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

export default CampaignDetail;