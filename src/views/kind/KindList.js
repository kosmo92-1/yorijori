import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import reactDom from 'react-dom';


function KindList(props) {
    const [kindList, setKindList] = useState([
        {kind_id:"", kind_name:""}
    ])
    const listComponent = kindList.map((kind)=>(<option key={kind.kind_id}>{kind.kind_name}</option>));

    useEffect(()=>{
        axios.get('/getKindList.do')
        // 값을가져와 넣어줍니다.
        .then(res => {
        console.log(res.data);
        setKindList(res.data)
        })
        .catch(err =>{alert(err)})
    },[])
    
    return (
        <div>
            <select>
              {listComponent}
            </select>
        </div>
    );
}

export default KindList;