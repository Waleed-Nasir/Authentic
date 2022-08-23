import React from 'react';
import { Row, Col, Card, Table, Tabs, Tab } from 'react-bootstrap';

import Aux from "../hoc/_Aux";
import Chat from './Chat';

class ChatScreen extends React.Component {
    render() {

        return (
            <Aux>
                <Row>
                    <Col md={12} xl={12}>
                        {/* <Chat/> */}
                        <Card  >
                            <img style={{ objectFit: 'contain', background: 'black' }} class="img-fluid rounded" src="https://www.creatisimo.net/wp-content/uploads/2021/11/coming-soon-pages-cover.jpg" alt="activity-user" />
                        </Card>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ChatScreen;