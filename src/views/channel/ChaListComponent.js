import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Row } from 'reactstrap';

function ChaListComponent(props) {

    useEffect(()=>{
        console.log(props.info)
    },[])

    //구독취소 버튼
    const subscribeBtn = () =>{

    }
    return (
            <Row>
                <Col xs="4">{props.info.channel_photo}</Col>
                <Col xs="4">{props.info.channel_name}</Col>
                <Col xs="4">
                    <Button onClick={subscribeBtn}>구독취소</Button>
                </Col>
            </Row>
    );
}

export default ChaListComponent;