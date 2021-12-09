import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

// 댓글
const Reply = (props) => {
    const recipe_id = props.props;
    console.log(recipe_id)
    const [state, setState] = useState({
        avgStarrate: 0,
        repleList: [
            {
                reple_id: 0,
                recipe_id: 0,
                member_id: "",
                reple_content: "",
                reple_starrate: 0,
                reple_regdate: 0
            }
        ],
        pageMaker: {
            totalCount: 0,
            startPage: 1,
            endPage: 1,
            prev: false,
            next: false,
            displayPageNum: 10,
            cri: {
                "page": 1,
                "pageNum": 10,
                "rowStart": 1,
                "rowEnd": 10,
                "searchType": "",
                "keyword": "",
                "pageStart": 0
            }
        }
    });
    // const [request,setRequest] = useState({
    //     "recipe_id": "1",
    //     "page": "2"
    // })
    const recipeQuery ={
        "recipe_id": recipe_id,
        "page": 1
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
            console.log(res.data)
            setState(res.data)
            // setState(res.data
                // "reple_id": res.data.recipe_id,
                // "recipe_id": res.data.recipe_id,
                // "member_id": res.data.member_id,
                // "reple_content": res.data.reple_content,
                // "reple_starrate": res.data.reple_starrate,
                // "reple_regdate": res.data.reple_regdate,
                // "rowStart": res.data.rowStart,
                // "rowEnd": res.data.rowEnd
            // )
        })
        .catch(err =>{alert('실패')})

    }, []);

    const repleDetail = state.repleList.map((el) => (
        <p>{el.reple_content}</p>
    ))

    return (
        <div>
            {repleDetail}
        </div>
    );
}

export default Reply;


