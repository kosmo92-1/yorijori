import axios from 'axios';
import React, { useEffect, useLayoutEffect, useState } from 'react';
import { Col, Container, FormGroup, FormText, Input, Label, Row, } from 'reactstrap';
import SearchMap from './SearchMap'
function MartMap(props) {

    const [address,setAddress] = useState('')
    const memberId = sessionStorage.getItem('user_id')

    
    useLayoutEffect(()=>{
            axios.get('/getMember.do?member_id='+memberId)
            .then((res)=>{
                console.log(res.data)
                console.log(res.data.member_basic_address)
                setAddress(res.data.member_basic_address)
            })
            .catch((err)=>{
                console.log('실패')
            })
    },[])
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
                    <Col className="bg-light border" xs="12">  
                        <FormGroup>
                            <br/>
                            <Label for="address">내 주소</Label>
                            <br/>
                            <Input
                                type="text"
                                name="address"
                                id="address"
                                value={address}
                            />
                            <br/>
                            <br/>
                            <FormText color="muted">
                                프로필에 등록한 주소를 기반으로 보여집니다.
                            </FormText>
                            <SearchMap search={address}/>
                        </FormGroup>
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