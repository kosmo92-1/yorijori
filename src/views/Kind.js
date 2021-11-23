import axios from 'axios';
import React, { useState } from 'react';

// 종류 등록
function Kind(props) {
    const [kindId,setKindId]= useState("");
    const [kindName,setKindName]= useState("");

    const kindValue ={
        "kind_id": kindId,
        "kind_name": kindName
    }    
    const handleKindId = (e) => {
        console.log(e.target.value)
        setKindId(e.target.value);
    }
    const handleKindName = (e) => {
        console.log(e.target.value)
        setKindName(e.target.value);
    }

    const sendAction = () =>{
        axios.post('/insertKind.do', kindValue, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // post 보내고 나서 실행
        .then(res => {alert('성공')})
        .catch(err =>{alert('실패')})
    }
    return (
      <div>
          <input type="text" onChange={handleKindId} value={kindId} />
          <input type="text" onChange={handleKindName} value={kindName} />
          <button onClick={sendAction}>보내기</button>
      </div>
    );
}

export default Kind;