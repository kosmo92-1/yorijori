import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Nav, NavItem, NavLink, Row, TabContent, TabPane } from 'reactstrap';
import MyChannelRecipe from 'views/myChannel/MyChannelRecipe';
import SubComponent from 'views/subscribe/SubComponent';
import ChannelInfo from './ChannelInfo';
import ChannelRecipe from './ChannelRecipe';
//마이페이지
function Channel() {
    // 임시로 channel_id로 설정
    const chan_id = useParams();
    // console.log(chan_id)

    const [activeTab, setActiveTab] = useState('1');
    
    // const [channelChk,setChannelChk] = useState(null)

    // useEffect(()=>{
    //     axios.get('channelCheck.do?member_id=' + member_id)
    //     // axios.get('readChannel.do')
    //     .then((res)=>{
    //         console.log(res)
    //         setChannelChk(res.data)
    //     })
    // },[])

    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4>채널 보기</h4>
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
                            {/* <NavItem>
                                <NavLink
                                onClick={() => { toggle('3'); }}
                                >
                                    구독
                                </NavLink>
                            </NavItem> */}
                            </Nav>
                            <TabContent activeTab={activeTab}>
                            <TabPane tabId="1">
                                <Row>
                                <Col sm="12">
                                    <ChannelInfo props={chan_id}></ChannelInfo>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                        <ChannelRecipe/>
                                    </Col>
                                </Row>
                            </TabPane>
                            {/* <TabPane tabId="3">
                                <Row>
                                    <SubComponent/>
                                </Row>
                            </TabPane> */}
                            </TabContent>
                    </Col>
                </Row>
            </Container>

        </>
    );
}

export default Channel;