import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

function MyChannelRecipe(props) {
    const member_id = sessionStorage.getItem('user_id')

    const [recipelist,setRecipelist] = useState([])
    const memberJson = {
        member_id:member_id
    }

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
            setRecipelist(res.data)
        })
        .catch(err =>{alert('실패')})
    },[])
    return (
        <Table>
            <tr>
                <td>테이블</td>
                <td>테이블</td>
                <td>테이블</td>
            </tr>
        </Table>
    );
}

export default MyChannelRecipe;