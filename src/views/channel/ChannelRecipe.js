import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Table } from 'reactstrap';

function ChannelRecipe(props) {
    const channel_id = useParams();
    console.log(channel_id)

    const [recipelist,setRecipelist] = useState([])
    const channelJson = {
        channel_id:channel_id.channel_id
    }
    const recipeComponent = recipelist.map((item)=>(
        <tr>
            <td>{item.RECIPE_DIFFICULTY}</td>
            <td>{item.KIND_NAME}</td>
            <td><a href="#">{item.RECIPE_TITLE}</a></td>
            <td>{item.RECIPE_QUENTITY}</td>
            <td>{item.RECIPE_VIEWCOUNT}</td>
        </tr>
    ))
    useEffect(()=>{
        axios.get(`/readChannelbyChanId.do?channel_id=${channel_id.channel_id}`, channelJson, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // post 보내고 나서 실행
        .then((res)=>{
            console.log('레시피리스트')
            console.log(res.data)
            setRecipelist(res.data.readMemberRecipe)
        })
        .catch(err =>{alert('실패')})
    },[])
    return (
        <Table>
            <thead>
                <th>난이도</th>
                <th>분류</th>
                <th>제목</th>
                <th>양</th>
                <th>조회수</th>
            </thead>
           {recipeComponent}
        </Table>
    );
}

export default ChannelRecipe;