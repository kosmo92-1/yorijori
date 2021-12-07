import { Button } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Col, Container, FormGroup, FormText, Input, Label, Row, } from 'reactstrap';
import Map from './Map';

function MartMap(props) {
    // const address = toString('경기도 시흥시 능곡서로 27')
    const [address, setAddress] = useState("");

    const [userData, setUserData] = useState({
        "member_id": "",
        "member_name": "",
        "member_basic_address": "",
      });
      console.log("dlrj")
    useEffect(()=>{

        if(`${sessionStorage.getItem("social_id")}`!== "null"
         ){
          axios.get(`/getMember.do?member_id=${sessionStorage.getItem("social_id")}`)
          .then((res)=>{
            console.log(res.data)
            // console.log(res.data.member_basic_address)
            setUserData({
          "member_id": res.data.member_id,
          "member_name": res.data.member_name,
          "member_basic_address": res.data.member_basic_address,
        })
        setAddress(userData.member_basic_address);
          })
          console.log(userData.member_basic_address);
        }else 
        if(
          `${sessionStorage.getItem("user_id")}` !== "null"
        ){
            axios.get(`/getMember.do?member_id=${sessionStorage.getItem("user_id")}`)
            .then((res)=>{
              console.log(res.data)
              setUserData({
            "member_id": res.data.member_id,
            "member_name": res.data.member_name,
            "member_basic_address": res.data.member_basic_address,
          })
          console.log("주소확인",userData.member_basic_address);
          setAddress(userData.member_basic_address);
            })
          }else{
        
        console.log("nothing")
      }
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
                         <Button variant="contained">찾기</Button>
                            <br/>
                            <br/>
                            <FormText color="muted">
                                프로필에 등록한 주소를 기반으로 보여집니다.
                                <Map address={address} />
                            </FormText>
                        </FormGroup>
                    </Col>
                    <Col className="bg-light border" xs="5">
                        <h4>마트 목록</h4>
                        
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