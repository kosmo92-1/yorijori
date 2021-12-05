import React from 'react';
import recipe from '../assets/images/recipes/recipe2.png';

function RecommendRecipeCard(props) {
    return (
        <a href="#" className="recipe-card">
            <img src={recipe} alt="레시피 이미지" />
            {/* {
                recipes.map(({id, src, desc}) => <img key={id} src={src} alt={desc} />)
            } */}
        </a>
    );
}

export default RecommendRecipeCard;