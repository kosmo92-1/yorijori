import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import ChaListComponent from './SubComponent';

// 채널 구독 리스트를 보여줍니다.
function SubscribeList(props) {
    const [chanlist,setChanlist] = useState([
        
    
    ])
    const listComponent = chanlist.map((item)=>(<ChaListComponent info={item}/>));
    
    useEffect(()=>{
        console.log('나와라')
        axios.get('/listSub.do?member_id=admin')
        .then((res)=>{
            console.log(res.data)
            setChanlist(res.data)
        })
        .catch((err)=>{console.log(err)})
    },[])
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
                    <Col>
                    <br/>
                        {listComponent}
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default SubscribeList;