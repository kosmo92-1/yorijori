import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Card, CardBody, CardImg, CardSubtitle, CardText, CardTitle, Col, Row } from 'reactstrap';

function SubComponent(props) {

    const [sublist,setSublist] = useState([])
    useEffect(()=>{
        axios.get('/listSub.do?member_id=admin')
        .then((res)=>{
            console.log(res.data.listSubChannel)
            setSublist(res.data.listSubChannel)
        })
        .catch((err)=>{console.log(err)})
    },[])
    
    //구독취소 버튼
    const subscribeBtn = (ch,mem) =>{
        console.log(ch)
        console.log(mem)
        const deleteJson ={
            member_id:mem,
            channel_id:ch
        }
        axios.post('/deleteSubscribe.do', deleteJson, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // post 보내고 나서 실행
        .then(res => {alert('구독취소하였습니다.')
        window.location.reload()})
        .catch(err =>{alert('실패')})
    }

    const listComponent = sublist.map((item)=>(
        <Col xs="4">
        <Card key={item.channel_id}>
            <CardImg top width="100%" src={item.channel_photo} alt="Card image cap" />
            <CardBody>
            <CardTitle tag="h5">{item.channel_name}</CardTitle>
            {/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
            <CardText>{item.channel_content}</CardText>
            <Button onClick={()=>subscribeBtn(item.channel_id,sessionStorage.getItem('user_id'))}>구독취소</Button>
            </CardBody>
        </Card>
        </Col>
    ));



    return (
        <>
            {listComponent}
        </>
    );
}

export default SubComponent;