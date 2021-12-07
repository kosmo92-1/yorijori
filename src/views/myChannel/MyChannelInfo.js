import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

function MyChannelInfo(props) {
    const member_id = sessionStorage.getItem('user_id')
    const memberJson = {
        member_id:member_id
    }
    const [channelInfo,setChannelInfo] = useState({
        channel_content: ".",
        channel_id: 2,
        channel_name: "d",
        channel_photo: "\\imgUpload\\2021\\12\\06\\c365832f-efa2-47b7-a148-354c13b1dee5_apple.jpg",
        channel_regdate: 1638759597000,
        member_id: "admin1"
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