import React from 'react';
import { useNavigate } from "react-router" 

function RecommendRecipeCard(props) {
    const recipes = props;
    // console.log(props);
    // const noticeComponent = noticeList.list.map((item)=>(<tr><td>{item.notice_id}</td><td>{item.notice_head}</td><td onClick={()=>actionRead(item.notice_id)}>{item.notice_title}</td></tr>))

    const navigate = useNavigate();
    const actionRead = (e) =>{
        e.preventDefault();
        let path = url
        navigate(path)
    }
    
    const url = `/recipe-detail/${recipes.value.recipe_id}`

    return (
        <a href={url} className="recipe-card" onClick={actionRead}>
            <img src={recipes.value.recipe_thumbnail} alt={recipes.value.recipe_title} />
            {/* {
                recipes.map(({id, src, desc}) => <img key={id} src={src} alt={desc} />)
            } */}
        </a>
    );
}

export default RecommendRecipeCard;