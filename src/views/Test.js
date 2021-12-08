// import { TextField } from '@mui/material';
// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// function Test(props) {
//   const handleTitle = (e) => {
//     e.preventDefault();
//     console.log(JSON.parse(e.target.value)) // 원하는 객체 출력
// };
//   const[memberList,setMemberList]=useState([]);
//   useEffect(()=>{
//     axios.get("/listMember.do","0","3")
//     .then((res)=>{
//       console.log(res.data.list[0])
//       console.log(res.data.list[0].member_id)
//       setMemberList(res.data.list);
      
//     })
  
// },[])
// const rendering = () => {
  
//   let result = [];
//   for (let i = 0; i < memberList.length; i++) {
//     result.push(<div key={i}>{memberList[i].member_id+" "}</div>);
//     console.log(memberList[i].member_id)
//     console.log(result)
//   }
//   return result;
// };
//   return (
//     <div>{rendering()}</div>
    
//   );

// }

// export default Test;
import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';


export default function DataTable() {
  const [rows,setRows] = useState([]);
  const[memberList,setMemberList]=useState([]);

  const columns = [
    { field: 'member_name', headerName: 'member_name', width: 70 },
    { field: 'member_id', headerName: 'member_id', width: 130 },
  ];
  useEffect(()=>{
        axios.get("/listMember.do","0","3")
        .then((res)=>{
          console.log(res.data.list[0])
          console.log(res.data.list[0].member_id)
          setMemberList(res.data.list);

        })
        for (let i = 0; i < memberList.length; i++) {
              console.log(memberList[i].member_id)
            }
          
    },[])
  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
    </div>
  );
}
