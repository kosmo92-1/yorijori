import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

function RecipeDetail(props) {
    const {recipe_id} = useParams();
    const [recipeDetail, setRecipeDetail] = useState({
        ingredient: [
            {
                "ing_id": 0,
                "kind_id": "",
                "ing_name": "",
                "ing_icon": "",
                "ing_regdate": 0
            }
        ],
        recipe: {
            "recipe_id": 0,
            "member_id": "",
            "kind_id": "",
            "recipe_title": "",
            "recipe_ing": "",
            "recipe_content": "",
            "recipe_time": "",
            "recipe_regdate": 0,
            "recipe_thumbnail": "",
            "recipe_viewcount": 0,
            "recipe_quentity": "",
            "recipe_difficulty": "",
            "recipe_recommend": 0
        }
    })

    const [kindList, setKindList] = useState(
        [
            {
                "kind_id": "",
                "kind_name": ""
            }
        ]
    )
    // var kindList = [
    //     {
    //         "kind_id": "",
    //         "kind_name": ""
    //     },
    // ]

    useEffect(() => {
        axios({
            method: "get",
            url: '/getRecipe.do?recipe_id=' + recipe_id,
        })
        .then((res) => {
            // console.log(res.data)
            setRecipeDetail(res.data)
        })
        .then(
            axios({
                method: "get",
                url: '/getKindList.do'
            })
            .then((res) => {
                setKindList(res.data)
                
                
                })
            )
            .catch((err) => {
                alert(err)
            })
        .catch((err) => {
            alert(err)
        })
    }, [recipe_id])

    const _date = new Date(recipeDetail.recipe.recipe_regdate);
    const date = _date.toLocaleDateString()
    
    const kindList2 = kindList.find(el => el = recipeDetail.recipe.kind_id);
    // console.log(kindList2.kind_name);
    // console.log(kindList2);
    
    return (
        <main>
            <div>
                <h3>{recipeDetail.recipe.recipe_title}</h3>
                <p>
                    <span>{recipeDetail.recipe.member_id}</span>
                    <span>{recipeDetail.recipe.kind_id}</span>
                    <span>{date}</span>
                </p>
                <img src={recipeDetail.recipe.recipe_thumbnail} alt={recipeDetail.recipe.recipe_title}></img>
                <p>
                    <span>{recipeDetail.recipe.recipe_quentity},</span>
                    <span>
                        {
                        recipeDetail.ingredient.map((data) => <span key={data.ing_id}>{data.ing_name},</span>)
                        }
                    </span>
                </p>
                <p>
                    {recipeDetail.recipe.recipe_content}
                </p>
                <p>
                    {/* {find_kind_name()} */}
                </p>
            </div>
            
            
        </main>
    );
}

export default RecipeDetail;