import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

function MyChannelRecipe(props) {
    const member_id = sessionStorage.getItem('user_id')

    const [recipelist,setRecipelist] = useState([])
    const memberJson = {
        member_id:member_id
    }

    const recipeComponent = recipelist.map((item)=>(
        <tr>
            <td>{item.recipe_difficulty}</td>
            <td>{item.kind_id}</td>
            <td><a href="#">{item.recipe_title}</a></td>
            <td>{item.recipe_quentity}</td>
            <td>{item.recipe_viewcount}</td>
        </tr>
    ))
    useEffect(()=>{
        axios.get('/readChannel.do?member_id=admin', memberJson, {
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

export default MyChannelRecipe;