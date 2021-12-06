import React from 'react';
import { Col, Container, FormGroup, FormText, Input, Label, Row, } from 'reactstrap';
import Map from './Map';

function MartMap(props) {
    const address = toString('경기도 시흥시 능곡서로 27')
    return (
        <div>
            <Container>
                <Row>
                    <Col>
                        <h4>우리집 주변 마트보기</h4>
                        <hr></hr>
                    </Col>
                </Row>
                <Row>
                    <Col className="bg-light border" xs="7">  
                        <FormGroup>
                            <br/>
                            <Label for="exampleEmail">내 주소</Label>
                            <br/>
                            <Input
                                type="text"
                                name="email"
                                id="exampleEmail"
                                value={address}
                            />
                            <br/>
                            <br/>
                            <FormText color="muted">
                                프로필에 등록한 주소를 기반으로 보여집니다.
                                <Map address={address}/>
                            </FormText>
                        </FormGroup>
                    </Col>
                    <Col className="bg-light border" xs="5">
                        .col-6
                    </Col>
                </Row>
                <Row>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
}

export default MartMap;