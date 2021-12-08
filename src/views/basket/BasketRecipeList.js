import { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { TableCell, TableRow } from '@mui/material';


function BasketRecipeList(props) {
    const member_id = sessionStorage.getItem('user_id')
    const [recipeList, setRecipeList] = useState([{
        basketList: [
            {
                "recipe_title": "",
                "recipe_thumbnail": "",
                "recipe_id": 0,
                "basket_id": 0,
                "recipe_time": "",
                "recipe_difficulty": "",
                "recipe_quentity": "",
                "basket_regdate": 0
            },
        ],
        basketIngredients: {
            ingredient: [
                {
                    "ing_icon": "",
                    "kind_id": "",
                    "ing_name": "",
                    "ing_id": 0
                },
            ],
        }
    }])
    const [basketList,setBasketList] = useState([])
    const [basketIngredients,setBasketIngredients] = useState([
        {
            ing_icon: "",
            ing_id: 0,
            ing_name: "",
            kind_id: "",
        }
    ])

    const listComponent = basketList.map((recipe)=> (
        <TableRow>
            <TableCell>{recipe.recipe_id}</TableCell>
            <TableCell><img src={recipe.recipe_thumbnail} alt="썸네일" width="100"/></TableCell>
            <TableCell>{recipe.recipe_title}</TableCell>
        </TableRow>
    ));


    const llistComponent = basketIngredients.map((recipe)=> (
        <TableRow>
            <TableCell>{recipe.ing_name}</TableCell>
            <TableCell><img src={recipe.ing_icon} alt="재료사진" width="100"/>{recipe.ing_icon}</TableCell>
        </TableRow>
    ));

    


    //request
    const member = { member_id : member_id }
    useEffect(()=>{

        axios.post('/getBasketList.do',member,  {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"application/json"
            }
        })
        // 값을가져와 넣어줍니다.
        .then(res => {
        setBasketList(res.data.basketList)
        setBasketIngredients(res.data.basketIngredients['ingredient'])
        
        })
        .catch(err =>{alert(err)})
    },[])

    
    return (
        <div>
            {llistComponent}
            {listComponent}
        </div>
    );
}

export default BasketRecipeList;