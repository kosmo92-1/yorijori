import React, { useState } from 'react';
import {  Col, Container, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import SubComponent from 'views/subscribe/SubComponent';
import MyChannelInfo from './MyChannelInfo';
import MyChannelRecipe from './MyChannelRecipe';
//마이페이지
function MyChannel(props) {

    const [activeTab, setActiveTab] = useState('1');

    const toggle = tab => {
    if(activeTab !== tab) setActiveTab(tab);
    }
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        <h4>마이페이지</h4>
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
                                    <MyChannelInfo/>
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