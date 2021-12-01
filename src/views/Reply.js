import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';

// 댓글
function Reply(props) {
    const [state, setState] = useState({
        "reple_id": 0,
        "recipe_id": 0,
        "member_id": "email",
        "reple_content": "contents",
        "reple_starrate": 0,
        "reple_regdate": 0,
        "rowStart": 0,
        "rowEnd": 0
    });
    // const [request,setRequest] = useState({
    //     "recipe_id": "1",
    //     "page": "2"
    // })
    const recipeQuery ={
        "recipe_id": "1",
        "page": "2"
    }    

    useEffect(() => {
        axios.post('/getRepleList.do', recipeQuery, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
           
        })
        // post 보내고 나서 실행
        .then(res => {
            setState({
                "reple_id": res.data.recipe_id,
                "recipe_id": res.data.recipe_id,
                "member_id": res.data.member_id,
                "reple_content": res.data.reple_content,
                "reple_starrate": res.data.reple_starrate,
                "reple_regdate": res.data.reple_regdate,
                "rowStart": res.data.rowStart,
                "rowEnd": res.data.rowEnd
            })
        })
        .catch(err =>{alert('실패')})

    });
  
    return (
      <div>
          <p>{state.recipe_id}</p>
      </div>
    );
}

export default Reply;


