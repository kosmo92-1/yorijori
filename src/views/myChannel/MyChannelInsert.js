import React from 'react';
import { Col, Container, Input, Row,FormGroup, Label, FormText } from 'reactstrap';

function MyChannelInsert(props) {
    return (
       <Container>
           <Row>
               <Col>채널 등록</Col>
           </Row>
           <Row>
               <Col>
               {/* 채널이름
                   채널소개
                   채널사진 */}
                   <FormGroup>
                        <Label for="channelName">
                        채널이름
                        </Label>
                        <Input
                        id="channelName"
                        placeholder="채널이름을입력하세요"
                        type="text"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="channelContent">
                        채널소개
                        </Label>
                        <Input
                        id="channelContent"
                        type="textarea"
                        />
                    </FormGroup>
                    <FormGroup>
                        <Label for="file">
                        채널사진
                        </Label>
                        <Input
                        id="file"
                        name="file"
                        type="file"
                        />
                        <FormText>
                            채널 프로필 사진입니다.
                        </FormText>
                    </FormGroup>
               </Col>
           </Row>
           <Row>
               <Col>채널 등록</Col>
           </Row>
       </Container>
    );
}

export default MyChannelInsert;