import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

function MyChannelInfo(props) {
    const member_id = sessionStorage.getItem('user_id')
    const [sublist,setSublist] = useState()
    
    useEffect(()=>{
        axios.get('/listSub.do?member_id=admin')
        .then((res)=>{
            console.log(res.data.listSubChannel)
            setSublist(res.data.listSubChannel)
        })
        .catch((err)=>{console.log(err)})
    },[])
    
    return (
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
                0d명
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
    );
}

export default MyChannelInfo;