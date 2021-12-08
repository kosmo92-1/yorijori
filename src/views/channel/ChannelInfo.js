import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Col, Container, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import SubComponent from 'views/subscribe/SubComponent';
//마이페이지
function ChannelInfo(props) {

    const [activeTab, setActiveTab] = useState('1');
    // 채널 가입 유무체크
    const [channelChk,setChannelChk] = useState(0)

    useEffect(()=>{
        axios.get('readChannel.do')
        .then((res)=>console.log('readChannel: '+res))
    },[])

    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4></h4>
                        <hr/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Nav tabs>
                            <NavItem>
                                <NavLink onClick={() => { toggle('1'); }}>
                                    홈
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                onClick={() => { toggle('2'); }}>
                                    레시피목록
                                </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink
                                onClick={() => { toggle('3'); }}
                                >
                                    구독
                                </NavLink>
                            </NavItem>
                            </Nav>
                            <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                <Col sm="12">
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                    </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="3">
                                <Row>
                                    <SubComponent/>
                                </Row>
                            </TabPane>
                            </TabContent>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default ChannelInfo;