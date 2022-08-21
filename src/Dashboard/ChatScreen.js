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
                        <Chat/>
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default ChatScreen;