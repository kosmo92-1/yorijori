import axios from 'axios';
import React, { useState } from 'react';
import { Button, ButtonDropdown, Col, Container, DropdownItem, DropdownMenu, DropdownToggle, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from 'reactstrap';
// 공지사항 넣기
function InsertNotice(props) {

    const [title,setTitle] = useState("임시제목");
    const [head,setHead] = useState("FAQ");
    const [content,setContent] = useState("임시내용");

    const handleTitle = (e) =>{
        console.log(e.target.value);
        setTitle(e.target.value)
    }
    const handleHead = (e) =>{
        console.log(e.target.value);
        setHead(e.target.value)
    }
    const handleContent = (e) =>{
        console.log(e.target.value);
        setContent(e.target.value)
    }

    const noticeJson ={
        notice_title:title,
        notice_head:head,
        notice_content:content
    }

    const insertNotice = () =>{
        axios.post('/insertNotice.do', noticeJson, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            },
        })
        // post 보내고 나서 실행
        .then(res => {alert('성공')})
        .catch(err =>{alert('실패')})

    }

    
    return (
        <div>
            <Form>
                <FormGroup row>
                    <Label
                    for="noticeTitle"sm={2}>
                    제목
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="noticeTitle"
                        name="notice_title"
                        placeholder="제목을입력하세요"
                        type="text"
                        value={title}
                        onChange={handleTitle}
                    />
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="noticeHead"
                    sm={2}
                    >
                    유형선택
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="noticeHead"
                        name="notice_head"
                        type="select"
                        value={head}
                        onChange={handleHead}
                    >
                        <option key="notice">공지사항</option>
                        <option key="faq">FAQ</option>
                    </Input>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label
                    for="exampleText"
                    sm={2}
                    >
                    내용
                    </Label>
                    <Col sm={10}>
                    <Input
                        id="exampleText"
                        name="text"
                        placeholder="내용을입력하세요"
                        type="textarea"
                        value={content}
                        onChange={handleContent}
                    />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Button className="btn-round" color="warning" onClick={insertNotice}>제출</Button><Button className="btn-round" color="danger">취소</Button>
                </FormGroup>
            </Form>
          
      
            
        </div>
    );
}

export default InsertNotice;