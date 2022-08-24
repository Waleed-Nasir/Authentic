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
import C_Card from './components/C-Card';
import ActiveCard from './components/C-Card/ActiveCard';

class Campaign extends React.Component {
    render() {
        return (
            <Aux>
                
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Campaigns </h5>
                    {/* <div class="btn-group" >
                        <Button variant={'primary'}>Gallery</Button>
                        <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button>
                        <Button variant={'primary'} className='ml-3'>Add New Photo</Button>
                    </div> */}
                </Row>
                <Row className=' pt-4 pr-2 pl-2' >
                    <Col md={4} xl={4} >
                        <ActiveCard isNew />
                    </Col>
                    <Col md={4} xl={4} >
                        <ActiveCard />
                    </Col> <Col md={4} xl={4} >
                        <ActiveCard />
                    </Col>

                </Row >
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Campaigns </h5>
                    {/* <div class="btn-group" >
                        <Button variant={'primary'}>Gallery</Button>
                        <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button>
                        <Button variant={'primary'} className='ml-3'>Add New Photo</Button>
                    </div> */}
                </Row>
                <Row className=' pt-4 pr-2 pl-2' >
                    <Col md={4} xl={4} >
                        <C_Card />
                    </Col>
                    <Col md={4} xl={4} >
                        <C_Card />
                    </Col> <Col md={4} xl={4} >
                        <C_Card />
                    </Col> <Col md={4} xl={4} >
                        <C_Card />
                    </Col> <Col md={4} xl={4} >
                        <C_Card />
                    </Col> <Col md={4} xl={4} >
                        <C_Card />
                    </Col> <Col md={4} xl={4} >
                        <C_Card />
                    </Col>
                </Row >
            </Aux>
        );
    }
}

export default Campaign;