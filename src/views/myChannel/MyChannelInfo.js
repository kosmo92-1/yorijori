import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

function MyChannelInfo(props) {
    const member_id = sessionStorage.getItem('user_id')
    const memberJson = {
        member_id:member_id
    }
    const [channelInfo,setChannelInfo] = useState({
        channel_content: "",
        channel_id: 0,
        channel_name: "",
        channel_photo: "",
        channel_regdate: 0,
        member_id: ""
    })
    const [count,setCount] = useState(0)
    const [countSubscribe,setCountSubscribe] = useState(0)
    useEffect(()=>{
        axios.get(`/readChannel.do?member_id=${member_id}`, memberJson, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // post 보내고 나서 실행
        .then((res)=>{
           // console.log('레시피리스트')
           // console.log(res.data.readChannel.channel_name)
            setChannelInfo(res.data.readChannel)
            setCount(res.data.readMemberRecipe.length)
            console.log('구독자수')
            console.log(res.data.countSubscribe)
            setCountSubscribe(res.data.countSubscribe)
        })
        .catch(err =>{alert('실패')})
    },[])
    
    return (
        <ListGroup>
            <ListGroupItem>
                <ListGroupItemHeading>{channelInfo.channel_name}</ListGroupItemHeading>
                <ListGroupItemText>{channelInfo.channel_content}</ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <img src={channelInfo.channel_photo} alt={channelInfo.channel_name}></img>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>구독자수</ListGroupItemHeading>
                <ListGroupItemText>
                {countSubscribe+'명'}
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>레시피수</ListGroupItemHeading>
                <ListGroupItemText>
                {count}개
                </ListGroupItemText>
            </ListGroupItem>
            <ListGroupItem>
                <ListGroupItemHeading>개설날짜</ListGroupItemHeading>
                <ListGroupItemText>
                {new Date(channelInfo.channel_regdate).toLocaleDateString()}
                </ListGroupItemText>
            </ListGroupItem>
        </ListGroup>
    );
}

export default MyChannelInfo;