import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col } from 'reactstrap';

function SubComponent(props) {

    const [sublist,setSublist] = useState([]);
    const member_id = sessionStorage.getItem('user_id');
    useEffect(()=>{
        axios.get('/listSub.do?member_id=' + member_id)
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

    const listComponent = sublist.map((item) => (
			<Col xs="4">
				<Card key={item.channel_id}>
					<CardImg
						top
						width="100%"
						src={item.channel_photo}
						alt="Card image cap"
					/>
					<CardBody>
						<Link to={`/channel/${item.channel_id}`}>
							<CardTitle tag="h5">{item.channel_name}</CardTitle>
						</Link>
							{/* <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle> */}
							<CardText>{item.channel_content}</CardText>
						<Button
							onClick={() =>
								subscribeBtn(item.channel_id, sessionStorage.getItem("user_id"))
							}
						>
							구독취소
						</Button>
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