import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button, InputGroup, Dropdown, FormControl, DropdownButton } from 'react-bootstrap';
import BasicButton from '../Demo/UIElements/Basic/Button';

import Aux from "../hoc/_Aux";

class CampignResult extends React.Component {
    render() {

        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Compaigns Result </h5>
                    <div class="d-flex" >
                        <DropdownButton
                            title={'Campigns 01'}
                            variant={'light'}
                            id={`dropdown-variants-light`}
                            key={'light'}
                            size={'sm'}
                        >
                            <Dropdown.Item eventKey="1">Campigns 01</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Campigns 02</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Campigns 03</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Campigns 04</Dropdown.Item>
                        </DropdownButton>
                        <Button  size={'sm'} variant={'primary'} className='ml-3'>Add New Campaign Result</Button>
                    </div>
                </Row>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <div className="col text-left">
                        <h5>Compaign Result 01 </h5>
                        <h6 className='f-12' style={{position:'absolute'}}>Instagram (Feed)</h6>
                    </div>
                    <div class="d-flex" >
                    <DropdownButton
                     size={'sm'}
                            title={'Instagram (Feed) 1'}
                            variant={'light'}
                            id={`dropdown-variants-light`}
                            key={'Instagram (Feed) 1'}
                        >
                            <Dropdown.Item eventKey="1">Instagram (Feed) 1</Dropdown.Item>
                            <Dropdown.Item eventKey="2">Instagram (Feed) 2</Dropdown.Item>
                            <Dropdown.Item eventKey="3">Instagram (Feed) 3</Dropdown.Item>
                            <Dropdown.Item eventKey="4">Instagram (Feed) 4</Dropdown.Item>
                        </DropdownButton>
                        <Button  size={'sm'}  variant={'primary'} className='ml-3'>Edit</Button>
                    </div>
                </Row>
                <Row>
                    <Col md={3} xl={2}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <span className="text-muted bold f-w300   f-14">Following</span>
                                <h6 className="f-w300 f-10 d-flex align-items-center m-b-0 mt-3">Total</h6>
                                <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> 88,000</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xl={2}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <span className="text-muted bold f-w300   f-14">Likes</span>
                                <h6 className="f-w300 f-10 d-flex align-items-center m-b-0 mt-3">Total</h6>
                                <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> 88,000</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xl={2}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <span className="text-muted bold f-w300   f-14">Comments</span>
                                <h6 className="f-w300 f-10 d-flex align-items-center m-b-0 mt-3">Total</h6>
                                <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> 88,000</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xl={2}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <span className="text-muted bold f-w300   f-14">Reach</span>
                                <h6 className="f-w300 f-10 d-flex align-items-center m-b-0 mt-3">Total</h6>
                                <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> 88,000</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={3} xl={2}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <span className="text-muted bold f-w300   f-14">Impressions</span>
                                <h6 className="f-w300 f-10 d-flex align-items-center m-b-0 mt-3">Total</h6>
                                <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> 88,000</h3>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col md={3} xl={2}>
                        <Card className='rounded'>
                            <Card.Body className='p-3'>
                                <span className="text-muted bold f-w300   f-14">Influencer</span>
                                <h6 className="f-w300 f-10 d-flex align-items-center m-b-0 mt-3">Total</h6>
                                <h3 className="f-w-600 f-16 d-flex align-items-center m-b-0"> 88,000</h3>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default CampignResult;