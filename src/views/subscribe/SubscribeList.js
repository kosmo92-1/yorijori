import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import SubComponent from './SubComponent';
import ChaListComponent from './SubComponent';

// 채널 구독 리스트를 보여줍니다.
function SubscribeList(props) {
    
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h5>구독중인 채널</h5>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                        <SubComponent/>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SubscribeList;