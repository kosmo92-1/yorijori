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
            },
        ],
        recipe:
            {
                "RECIPE_CONTENT": "",
                "RECIPE_TIME": "",
                "RECIPE_DIFFICULTY": "",
                "CHANNEL_ID": 0,
                "RECIPE_VIEWCOUNT": 0,
                "KIND_NAME": "",
                "CHANNEL_NAME": "",
                "RECIPE_THUMBNAIL": "",
                "RECIPE_ID": 0,
                "RECIPE_QUENTITY": "",
                "KIND_ID": "",
                "RECIPE_TITLE": "",
                "RECIPE_RECOMMEND": 0,
                "RECIPE_REGDATE": 0,
                "RECIPE_ING": ""
            }
        }
    )

    useEffect(() => {
        axios({
            method: "get",
            url: '/getRecipe.do?recipe_id=' + recipe_id,
        })
        .then((res) => {
            setRecipeDetail(res.data)
        })
        .catch((err) => {
            alert(err)
        })
    }, [recipe_id])

    const _date = new Date(recipeDetail.recipe.RECIPE_REGDATE);
    const date = _date.toLocaleDateString()
    console.log(recipeDetail.recipe.RECIPE_TITLE)


    return (
        <main>
            <div>
                <h3>{recipeDetail.recipe.RECIPE_TITLE}</h3>
                <p>
                    <span>{recipeDetail.recipe.CHANNEL_NAME}</span>
                    <span>{recipeDetail.recipe.KIND_NAME}</span>
                    {/* <span>{test}</span> */}
                    <span>{date}</span>
                </p>
                <img src={recipeDetail.recipe.RECIPE_THUMBNAIL} alt={recipeDetail.recipe.RECIPE_TITLE}></img>
                <p>
                    <span>{recipeDetail.recipe.RECIPE_QUENTITY},</span>
                    <span>{recipeDetail.recipe.RECIPE_VIEWCOUNT},</span>
                    <span>
                        {
                        recipeDetail.ingredient.map((data) => <span key={data.ing_id}>{data.ing_name},</span>)
                        }
                    </span>
                </p>
                <p>
                    {recipeDetail.recipe.RECIPE_CONTENT}
                </p>
            </div>
        </main>
    );
}

export default RecipeDetail;