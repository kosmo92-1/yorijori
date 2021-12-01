import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import reactDom from 'react-dom';


function BasketRecipeList(props) {
    const [recipeList, setRecipeList] = useState({
        basketList: [
            {
                recipe_title: "레시피이름",
                recipe_thumbnail: "썸네일 없음",
                recipe_id: 2,
                basket_id: 2,
                recipe_time: "걸리는 시간",
                recipe_difficulty: "?",
                recipe_quentity: "많음",
                basket_regdate : 1637685356000
            },
        ],
        basketIngredients: {
            2: [
                {
                    ing_icon: "none",
                    kind_id: "ing_4",
                    ing_name: "설탕",
                    ing_id: 4
                },
            ],
        }
    })
    const listComponent = recipeList.basketList.map((recipe)=>(<h3>{recipe.recipe_title}</h3>));
    //request
    const query = 
        {
            member_id : "test1"
        }
    useEffect(()=>{
        axios.post('/getBasketList.do',query,{
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // 값을가져와 넣어줍니다.
        .then(res => {
        console.log(res.data);
        setRecipeList(res.data)
        })
        .catch(err =>{alert(err)})
    },[])
    
    return (
        <div>
              {listComponent}
        </div>
    );
}

export default BasketRecipeList;