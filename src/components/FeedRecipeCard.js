import React from 'react';
import { useNavigate } from "react-router" 

function FeedRecipeCard(props) {
    const recipes = props;

    const navigate = useNavigate();
    const actionRead = (e) =>{
        e.preventDefault();
        let path = url
        navigate(path)
    }

    const url = `/recipe-detail/${recipes.value.recipe_id}`
    // const imgUrl = `yorijori/${recipes.value.recipe_thumbnail}`
    console.log(recipes)
    return (
       <a href={url} className="recipe-card" onClick={actionRead}>
            <img src={recipes.value.recipe_thumbnail} alt={recipes.value.recipe_title} />
            {/* {
                recipes.map(({id, src, desc}) => <img key={id} src={src} alt={desc} />)
            } */}
        </a>
    );
}

export default FeedRecipeCard;