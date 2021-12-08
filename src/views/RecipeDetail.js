import axios from 'axios';
import RecommendUp from 'components/RecommendUp';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';


function RecipeDetail(props) {
    const member_id = sessionStorage.getItem('user_id');
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
        <main className="recipes-wrap board-wrap">
            <h2 className="sr-only">레시피 상세 페이지</h2>
            <div className="board">
                <div className="board-hd">
                    <h3>{recipeDetail.recipe.RECIPE_TITLE}</h3>
                    <div className="board-info">
                        <span>작성자 : {recipeDetail.recipe.CHANNEL_NAME}</span>
                        <span>작성일 : {date}</span>
                        <span>조회 수 : {recipeDetail.recipe.RECIPE_VIEWCOUNT}</span>
                        <span>추천 수 : {recipeDetail.recipe.RECIPE_RECOMMEND}</span>
                    </div>
                </div>
                <div className="board-contents">
                    <img src={recipeDetail.recipe.RECIPE_THUMBNAIL} alt={recipeDetail.recipe.RECIPE_TITLE} />
                    <div className="recipe-info">
                        <div>
                            분류<br />
                            <span>{recipeDetail.recipe.KIND_NAME}</span>
                        </div>
                        <div>
                            양<br />
                            <span>{recipeDetail.recipe.RECIPE_QUENTITY}</span>
                        </div>
                        <div>
                            재료<br />
                            <span>
                                {
                                recipeDetail.ingredient.map((data) => <span key={data.ing_id}>{data.ing_name}</span>)
                                }
                            </span>
                        </div>
                    </div>
                    <p>
                        {recipeDetail.recipe.RECIPE_CONTENT}
                    </p>
                </div>
                <div className="btn-wrap">
                    <RecommendUp member_id={member_id} recipe_id={recipeDetail.recipe.RECIPE_ID} />
                </div>
            </div>
        </main>
    );
}

export default RecipeDetail;