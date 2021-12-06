import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Table } from 'reactstrap';

function MyChannelRecipe(props) {
    const member_id = sessionStorage.getItem('user_id')

    const [recipelist,setRecipelist] = useState([])
    useEffect(()=>{
        axios.get(`/readChannel.do?member_id=${member_id}`)
        .then((res)=>{
            console.log('레시피리스트')
            console.log(res.data)
            setRecipelist(res.data)
        })
        .catch((err)=>{console.log(err)})
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