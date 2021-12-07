import { TextField } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

function Test(props) {
  const handleTitle = (e) => {
    e.preventDefault();
    console.log(JSON.parse(e.target.value)) // 원하는 객체 출력
};
  const[memberList,setMemberList]=useState([]);
  useEffect(()=>{
    axios.get("/listMember.do","0","3")
    .then((res)=>{
      console.log(res.data.list[0])
      console.log(res.data.list[0].member_id)
      setMemberList(res.data.list);
      
    })
  
},[])
const rendering = () => {
  
  let result = [];
  for (let i = 0; i < memberList.length; i++) {
    result.push(<div key={i}>{memberList[i].member_id+" "}</div>);
    console.log(memberList[i].member_id)
    console.log(result)
  }
  return result;
};
  return (
    <div>{rendering()}</div>
  );

}

export default Test;