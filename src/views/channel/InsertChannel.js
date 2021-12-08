import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Form, FormGroup, Input, Row, Table } from 'reactstrap';
import axios from "axios";
import { useNavigate } from "react-router";

function InsertChannel(props) {
  
    useEffect(()=>{
        if(`${sessionStorage.getItem("social_id")}`!= null){

        }
    
      },[])
      const [activeIndex, setActiveIndex]=useState(0);

      const tabClickHandler=(index)=>{
          setActiveIndex(index);
      };
    //   channel_id NUMBER PRIMARY KEY,
	// channel_name varchar2(50) NOT NULL, -- 21.12.04 추가
	// member_id VARCHAR2(50) NOT NULL,
	// channel_content VARCHAR2(1000) NOT NULL,
	// channel_photo VARCHAR2(1000) NOT NULL,
	// channel_regdate DATE DEFAULT SYSDATE,
	// CONSTRAINTS fk5_member_id FOREIGN KEY(member_id) 
	// REFERENCES MEMBER(member_id) ON DELETE CASCADE
  //아이디 비밀번호 찾기 탭
      const tabContArr=[
          {
              tabTitle:(
                  <Button className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>홈</Button>
              ),
              tabCont:(
                  <Form>
                      <FormGroup>
                          <textarea>자기 소개칸</textarea>
                      </FormGroup>

                      <FormGroup>
                          <Input
                            placeholder="구독자수"
                          />
                           <Input
                            placeholder="보유 레시피수"
                          />
                           <Input
                            placeholder="공개/비공개 여부"
                          />
                           <Input
                            placeholder="페이지 관리"
                          />
                           <Input
                            placeholder="개설 날짜"
                          />
                      </FormGroup>
                  </Form>
                 
              )
          },  {
            tabTitle:(
                <Button className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>나의 레시피</Button>
            ),
            tabCont:(
                <Container>
            <Button>레시피 등록</Button>
            <div>
            <Table>
                <thead>
                    <tr><th>글번호</th><th>섬네일</th><th>제목</th><th>조회수</th><th>수정삭제</th></tr>
                </thead>
                <tbody> 
                </tbody>
            </Table>
        </div>
        </Container>
            )
        }, 
          {
              tabTitle:(
                    <Button className={activeIndex===2 ? "is-active" : ""} onClick={()=>tabClickHandler(2)}>구독</Button> 
              ),
              tabCont:(
                 <Container>
                     <Card>구독한 페이지1</Card>
                     <Card>구독한 페이지2</Card>
                     <Card>구독한 페이지3</Card>
                     <Card>구독한 페이지4</Card>
                 </Container>
              )
          }
      ];
  
    return (
        <Container>
            <Row>
                <img></img>
                <Input  
                type="text" 
                // name={member_name}
                readOnly
                />
                <Button
                //  onClick={}
                 >구독하기</Button>
            </Row>

            <Row className="default" hidden>
                <h4>앗!나만의 레시피 북이 없어요! 만들어 볼까요?</h4>
                <Button>내 채널 생성</Button>
            </Row>
            
            <Row>
            <ul className="tabs is-boxed">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </ul>
            </Row>

            <Row>
            <div>
          	{tabContArr[activeIndex].tabCont}
             </div>
            </Row>
    

        </Container>            
    );
}

export default InsertChannel;