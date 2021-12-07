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
            "channel_id": 0,
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

    const [kind, setKind] = useState(
            {
                "kind_id": "",
                "kind_name": ""
            }
    )

    const [chanInfo, setChanInfo] = useState(
        {
            "channel_id": 0,
            "channel_name": "",
            "member_id": "",
            "channel_content": "",
            "channel_photo": "",
            "channel_regdate": 0
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
        .then(
            axios({
                method: "get",
                url: '/getKindName.do?kind_id=' + recipeDetail.recipe.kind_id
            })
            .then((res) => {
                console.log(recipeDetail.recipe.kind_id)
                setKind(res.data)
                console.log(kind)
            })
        )
        .then(
            axios({
                method: "get",
                url: '/chanInfo.do?channel_id=' + recipeDetail.recipe.channel_id
            })
            .then((res) => {
                setChanInfo(res.data)
            })
        )
        .catch((err) => {
            alert(err)
        })
    }, [recipeDetail.recipe.channel_id, recipeDetail.recipe.kind_id, recipe_id])

    const _date = new Date(recipeDetail.recipe.recipe_regdate);
    const date = _date.toLocaleDateString()

    // console.log(recipeDetail.recipe.kind_id);
    // const test = kindList.list[1].kind_name;
    


    // const kindName = kindList.list.find(el  => el = recipeDetail.recipe.kind_id)

    
    return (
        <main>
            <div>
                <h3>{recipeDetail.recipe.recipe_title}</h3>
                <p>
                    <span>{chanInfo.channel_name}</span>
                    <span>{kind.kind_name}</span>
                    {/* <span>{test}</span> */}
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
                    
                </p>
            </div>
            
            
        </main>
    );
}

export default RecipeDetail;