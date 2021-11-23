import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';


function SelectKind(props) {
    const [kindList,setKindList] = useState({
        itemList:[]
    })
    

  
    const kindList = kindList.map



    useEffect(()=>{
        axios.post('/insertKind.do', kindValue, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // 값을가져와 넣어줍니다.
        .then(res => {
           setKindId(res.data.kind_id)
           setKindName(res.data.kind_name)
           console.log(kindId)
           console.log(kindName)
        })
        .catch(err =>{alert('실패')})
    })
    return (
        <div>
            <select>


            </select>
        </div>
    );
}

export default SelectKind;