import { MenuItem } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';

function RecipeKind(props) {

    const [kindName, setKindName] = useState('')
    const [kind, setKind] = useState('food')
    const [kindMap, setKindMap] = useState([{ kind_id: '', kind_name: '' }])
    // 한식 중식 같은 음식 종류 선택
    useEffect(() => {
      //해당 종류의 리스트를불러온다.
      axios.get('/getKindList.do?kind_id=' + kind).then((res) => {
        console.log(res.data)
        setKindMap(res.data)
      })
    }, [])
  
    //종류 리스트를 컴포넌트로 만듬
     const listComponent = kindMap.map((item) => <MenuItem value={item.kind_id} key={item.kind_id}>{item.kind_name}</MenuItem>)

    return (
        <>
                {listComponent}
        </>
    );
}

export default RecipeKind;