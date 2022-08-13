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

class KeepOnTrack extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Keep On Track</h5>
                    
                </Row>
                <Row className='align-self-center'>
                    <Col md={6} xl={6} >
                        <Card style={{height:400}}  className='text-center justify-content-center'>
                               <div> <Button variant='primary'  >Enter your Instagram Details</Button></div>
                        </Card>
                    </Col>
                    <Col md={6} xl={6} >
                        <Card style={{height:400}}  className='text-center justify-content-center'>
                        <div> <Button variant='primary'  >Enter your Tiktok Details</Button></div>
                        </Card>
                    </Col>
                </Row >
            </Aux>
        );
    }
}

export default KeepOnTrack;