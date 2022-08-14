import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab, Button } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import PostCard from './Insta-card-main/PostCard';

class Infulancer extends React.Component {
    render() {
        return (
            <Aux>
                <Row className='pt-4 pr-2 pl-2 pb-4 d-flex justify-content-between' >
                    <h5>Infulancer</h5>
                    <div class="btn-group" >
                        <Button variant={'primary'}>Infulancer</Button>
                        <Button className='bg-white text-dark' variant={'secondary'}>Sell my content</Button>
                        <Button variant={'primary'} className='ml-3'>Add New Photo</Button>
                    </div>
                </Row>
                <Row className='bg-white pt-4 pr-2 pl-2' >
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>
                    <Col md={4} xl={4} >
                    <PostCard />
                    </Col>

                </Row >
            </Aux>
        );
    }
}

export default Infulancer;