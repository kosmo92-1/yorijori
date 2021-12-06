import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'reactstrap';
import ChaListComponent from './ChaListComponent';

// 채널 구독 리스트를 보여줍니다.
function ChannelList(props) {
    const [chanlist,setChanlist] = useState([
        // {
        //     img :'초기값',
        //     name:'1분요리뚝딱이형',
        //     content:'1분안에 요리를 소개합니다.',
        //     subscribe: true
        // }
    ])
    const listComponent = chanlist.map((item)=>(<ChaListComponent info={item}/>));
    
    useEffect(()=>{
        axios.get('/readChannel.do')
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

export default ChannelList;