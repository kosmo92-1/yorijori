import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router" 
import { Table } from 'reactstrap';
import Banner from '../../assets/images/banner-recipe.png';
import recipe from '../../assets/images/recipes/recipe.png';

function RecipeList(props) {
    const [recipeList, setRecipeList] = useState({
        "getlist": [
            {
                "recipe_id": 7,
                "member_id": "hhhye",
                "kind_id": null,
                "recipe_title": "10. 마지막 요2",
                "recipe_ing": null,
                "recipe_content": null,
                "recipe_time": null,
                "recipe_regdate": 1637915911000,
                "recipe_thumbnail": null,
                "recipe_viewcount": 0,
                "recipe_quentity": null,
                "recipe_difficulty": null,
                "recipe_recommend": 0
            },
        ]
    })
    const recipeComponent = recipeList.getlist.map((item)=>(<tr><td>{item.recipe_id}</td><td>{item.member_id}</td><td onClick={()=>actionRead(item.recipe_id)}>{item.recipe_title}</td></tr>))

    const navigate = useNavigate();
    const actionRead = (recipe_id) => {
        let path = `/readrecipe/${recipe_id}`
        navigate(path)
    }
    // useEffect(()=>{
    //     axios.get('/listRecipe.do')
    //     // 값을가져와 넣어줍니다.
    //     .then(res => {
    //     console.log(res.data);
    //     setRecipeList(res.data)
    //     })
    //     .catch(err =>{alert(err)})
    // },[])
    return (
        <main>
            <section className="sec-banner">
                <img src={Banner} alt="레시피 - 요리조리 회원들의 노하우가 담긴 레시피" />
            </section>
            <div className="recipes-wrap">
                <section className="sec-filter">
                    <div className="search-box">
                        <div>
                            <input type="search" placeholder="레시피 찾기" />
                            <label><i className="fa fa-search" aria-hidden="true"></i></label>
                        </div>
                    </div>
                    <div className="list-filter">
                        <ul>
                            <li>한식</li>
                            <li>양식</li>
                            <li>일식</li>
                        </ul>
                    </div>
                </section>
                <section className="sec-recipes">
                    {/* 레시피 1 */}
                    <div className="d-flex justify-content-xl-between">
                        <div className="checkboxes">
                            <label>
                                <input type="checkbox"/>
                                구독 레시피
                            </label>
                            <label>
                                <input type="checkbox"/>
                                관심 레시피
                            </label>
                        </div>
                        <div className="selectbox">
                            <select>
                                <option>추천 순</option>
                                <option>별점 순</option>
                                <option>최다 댓글 순</option>
                                <option>최근 등록일 순</option>
                            </select>
                        </div>
                    </div>
                    <div className="recipes">

                        <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>

                         {/* dummy datas */}

                            <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>
                            <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>
                            <div className="recipe">
                            {/* TODO : 페이지 내역에 따른 RecipeCard 노출 타입을 설정 후 전달 */}
                            <div>
                                <figure>
                                    <img src={recipe} alt="레시피 이미지" />
                                </figure>
                                <div>
                                    <h4>블루베리 요거트</h4>
                                    {/* 별점 */}
                                    <p className="text-trunc">
                                        맛이 없을 수 없는 싱싱한 블루베리에다
                                        요거트를 얹으면? 이것도 못 만들면 정말
                                        이상하죠. 그럼 요리 못하시는 거예요 완전 미친거 아니냐고요
                                    </p>
                                    <span><a>요리왕김다밍</a>님</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            {/* <Table>
                <thead>
                    <tr><th>#</th><th>유형</th><th>제목</th></tr>
                </thead>
                <tbody>
                    {recipeComponent}
                </tbody>
            </Table> */}
        </main>
    );
}
export default RecipeList;