import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {  Col, Container, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import SubComponent from 'views/subscribe/SubComponent';
import MyChannelInfo from './MyChannelInfo';
import MyChannelInsert from './MyChannelInsert';
import MyChannelRecipe from './MyChannelRecipe';
//마이페이지
function MyChannel(props) {
    const member_id = sessionStorage.getItem('user_id');
    const [activeTab, setActiveTab] = useState('1');
    // 채널 가입 유무체크
    const [channelChk,setChannelChk] = useState(null)

    useEffect(()=>{
        axios.get('channelCheck.do?member_id=' + member_id)
        // axios.get('readChannel.do')
        .then((res)=>{
            console.log(res)
            setChannelChk(res.data)
        })
    },[])

    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4>내 채널</h4>
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
                                    {channelChk === 1 ? <MyChannelInfo></MyChannelInfo> : <MyChannelInsert></MyChannelInsert>}
                                    {/* <MyChannelInsert/>
                                    <MyChannelInfo/> */}
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                        <MyChannelRecipe/>
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

export default MyChannel;