import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Button, Card, CardText, CardTitle, Col, Container, ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText, Nav, NavItem, NavLink, Row, TabContent, Table, TabPane } from 'reactstrap';
import SubComponent from 'views/subscribe/SubComponent';
// 채널번호를 받아 채널정보 출력
function ChannelInfo(props) {
    //채널 아이디를
    // const {channel_id} = useParams();

    const [activeTab, setActiveTab] = useState('1');
    const member_id = sessionStorage.getItem('user_id')

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
                                    <ListGroup>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>채널제목</ListGroupItemHeading>
                                            <ListGroupItemText>
                                            채널 소개란입니다.
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>구독자수</ListGroupItemHeading>
                                            <ListGroupItemText>
                                            0명
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>보유레시피수</ListGroupItemHeading>
                                            <ListGroupItemText>
                                            0개
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                        <ListGroupItem>
                                            <ListGroupItemHeading>개설날짜</ListGroupItemHeading>
                                            <ListGroupItemText>
                                            2021년 12월 6일
                                            </ListGroupItemText>
                                        </ListGroupItem>
                                    </ListGroup>
                                </Col>
                                </Row>
                            </TabPane>
                            <TabPane tabId="2">
                                <Row>
                                    <Col>
                                       <Table>
                                           <tr>
                                               <td>테이블</td>
                                               <td>테이블</td>
                                               <td>테이블</td>
                                           </tr>
                                       </Table>
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