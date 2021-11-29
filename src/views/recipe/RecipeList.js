import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router" 
import { Table } from 'reactstrap';

function RecipeList(props) {
    const [recipeList, setRecipeList] = useState({
        "getlist": [
            {
                "recipe_id": 7,
                "member_id": "hhhye",
                "kind_id": null,
                "recipe_title": "10. 마지막 요2",
                "recipe_ing": null,
                "recipe_content": null,
                "recipe_time": null,
                "recipe_regdate": 1637915911000,
                "recipe_thumbnail": null,
                "recipe_viewcount": 0,
                "recipe_quentity": null,
                "recipe_difficulty": null,
                "recipe_recommend": 0
            },
        ]
    })
    const recipeComponent = recipeList.getlist.map((item)=>(<tr><td>{item.recipe_id}</td><td>{item.member_id}</td><td onClick={()=>actionRead(item.recipe_id)}>{item.recipe_title}</td></tr>))

    const navigate = useNavigate();
    const actionRead =  (recipe_id) =>{
        let path = `/readrecipe/${recipe_id}`
        navigate(path)
    }
    useEffect(()=>{
        axios.get('/listRecipe.do')
        // 값을가져와 넣어줍니다.
        .then(res => {
        console.log(res.data);
        setRecipeList(res.data)
        })
        .catch(err =>{alert(err)})
    },[])
    return (
        <div>
            <Table>
                <thead>
                    <tr><th>#</th><th>유형</th><th>제목</th></tr>
                </thead>
                <tbody>
                    {recipeComponent}
                </tbody>
            </Table>
        </div>
    );
}
export default RecipeList;