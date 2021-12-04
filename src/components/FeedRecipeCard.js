import React, {useState} from 'react';
import recipe from '../assets/images/recipes/recipe.png';
// import recipes from '../assets/images/recipes';

// const recipes = [
//     {id:1, src: '../assets/images/recipes/recipe.png', desc: '레시피 이미지'}
// ];

function RecipeCard(props) {
    const recipes = props.recipes;
    // const recipe = recipes.map(({id, src, desc}) =>
    //     <img key={id} src={src} alt={desc} />
    // );

    return (
        // TODO : data에 따른 img 생성 
        <a href="#" className="recipe-card">
            <img src={recipe} alt="레시피 이미지" />
            {/* {
                recipes.map(({id, src, desc}) => <img key={id} src={src} alt={desc} />)
            } */}
        </a>
    );
}

export default RecipeCard;