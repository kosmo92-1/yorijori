import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { Button, Col, Form, FormGroup, Input, Label } from 'reactstrap';

function ReadNotice(props) {
    const {notice_id} = useParams();
    
    const [readNotice, setReadNotice] = useState({
        "read":{"notice_id":2,"notice_head":"head","notice_title":"title","notice_content":"content","notice_regdate":1637632251000}
    })
    
    
    useEffect(()=>{
        axios.get('/readNotice.do?notice_id='+notice_id)
        // 값을가져와 넣어줍니다.
        .then(res => {
            console.log(res.data);
        setReadNotice(res.data)
        })
        .catch(err =>{alert(err)})
    },[])

    const navigate = useNavigate();
  
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
                        value={readNotice.read.notice_title}
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
                        type="text"
                        value={readNotice.read.notice_head}
                    >
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
                        value={readNotice.read.notice_content}
                    />
                    </Col>
                </FormGroup>
                <FormGroup>
                    <Button className="btn-round" color="danger" onClick={()=>navigate('/notice')}>취소</Button>
                </FormGroup>
            </Form>
        </div>
    );
}

export default ReadNotice;