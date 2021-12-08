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
// import React, { useEffect, useState } from 'react';
// import { DataGrid } from '@mui/x-data-grid';
// import axios from 'axios';
// import { Row } from 'reactstrap';


// export default function DataTable() {
//   const [rows,setRows] = useState([]);
//   const[memberList,setMemberList]=useState([]);

//   const columns = [
//     { field: 'member_name', headerName: 'member_name', width: 70 },
//     { field: 'member_id', headerName: 'member_id', width: 130 },
//   ];
//   useEffect(()=>{
//         axios.get("/listMember.do","0","3")
//         .then((res)=>{
//           console.log(res.data.list[0])
//           console.log(res.data.list[0].member_id)
//           setMemberList(res.data.list);

//         })
//         for (let i = 0; i < memberList.length; i++) {
//               console.log(memberList[i].member_id)
//               rows.push(memberList[i].member_id,memberList[i].member_name)
//               console.log(rows)
//             }
          
//     },[])
//   return (
//     <div style={{ height: 400, width: '100%' }}>
//       <DataGrid
//         rows={rows}
//         columns={columns}
//         pageSize={5}
//         rowsPerPageOptions={[5]}
//         checkboxSelection
//       />
//     </div>
//   );
// }
import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}