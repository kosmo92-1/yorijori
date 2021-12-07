import { Paper } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Button, Carousel, CarouselCaption, CarouselControl, CarouselIndicators, CarouselItem, FormGroup, Input, Label, Table } from 'reactstrap';
import Banner from '../../assets/images/banner-recipe.png';
import recipe from '../../assets/images/recipes/recipe.png';

function RecipeList(props) {

    const [recipeList,setRecipeList] = useState([])
    const [checkBoxSub,setCheckBoxSub] = useState('normal')
    const [checkBoxRec,setCheckBoxRec] = useState('normal')
    //드롭다운 메뉴에 따라 쿼리가 바뀜
    // 1 - 최근등록일순
    // 2 - 추천순
    // 3 - 최다 댓글순
    // 4 - 최근 등록일순
    const [dropdown,setDropdown] = useState(1)
    //레시피 리스트를 받아옵니다.
    useEffect(()=>{
        console.log('useeffect:dropdown :'+dropdown)
        let url = '/listRecipe.do'
        if(dropdown==='1')  url = '/listRecipe.do'
        if(dropdown==='2')  url = '/recommendRecipe.do'
      
        console.log('finalUrl'+url)
        axios.get(url)
        // post 보내고 나서 실행
        .then((res)=>{
        console.log('레시피리스트')
        console.log(res.data.getlist)
        setRecipeList(res.data.getlist)
        })
        .catch(err =>{alert('실패')})
    
        
    },[checkBoxSub,checkBoxRec,dropdown])

    const listComponent = recipeList.map((item) =>(
        <div>
            <figure>
                <img src={item.recipe_thumbnail} alt="레시피 이미지" />
            </figure>
            <div>
                <h4>{item.recipe_id}{item.recipe_title}</h4>
                {/* 별점 */}
                <p className="text-trunc">
                    {item.recipe_content}
                </p>
                <span><a>요리왕김다밍</a>님</span>
            </div>
        </div>
    ))

    // 체크인데 후순위
    const isChecked = (e) =>{
        //console.log(e.target.checked)
        //console.log(e.target.value)
        if(e.target.checked){
            if(e.target.value==='구독'){
                setCheckBoxSub('subscribe')
            }
            if(e.target.value==='관심'){
                setCheckBoxRec('recommend')
            }
        }else{
            if(e.target.value==='구독'){
                setCheckBoxSub('normal')
            }
            if(e.target.value==='관심'){
                setCheckBoxRec('normal')
            }
        }
    }
    //정렬 셀렉트 박스 
    const isSelected = (e) =>{
        console.log(e.target.value)
        setDropdown(e.target.value)
    }
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
                        <i className="arrow left">이전</i>
                        <ul>
                            <li className="cuisine-kr">
                                한식
                                <div></div>
                            </li>
                            <li className="cuisine-ch">중식</li>
                            <li className="cuisine-western">양식</li>
                            <li className="cuisine-jp">일식</li>
                            <li className="cuisine-snack">분식</li>
                            <li className="cuisine-veg">채식</li>
                            <li className="cuisine-bizzare">괴식</li>
                        </ul>
                        <i className="arrow right">다음</i>
                    </div>
                    
                </section>
                <section className="sec-recipes">
                    {/* 레시피 1 */}
                    <div>
                        {/* <div className="checkboxes">
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" className="checkbox" value="구독" onClick={isChecked}/>
                                    구독 레시피
                                    <span className="form-check-sign">
                                    <span className="check"></span>
                                    </span>
                                </Label>
                            </FormGroup>
                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" className="checkbox"  value="관심" onClick={isChecked}/>
                                    관심 레시피
                                    <span className="form-check-sign">
                                    <span className="check"></span>
                                    </span>
                                </Label>
                            </FormGroup>
                        </div> */}
                        <FormGroup className="selectbox">
                            <Input type="select" name="filter" id="filter" onChange={isSelected}>
                                <option value="1">최근 등록일 순</option>
                                <option value="2">추천 순</option>
                            </Input>
                        </FormGroup>
                    </div>
                    <div className="recipes">
                        <div className="recipe">
                            {listComponent}
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}
export default RecipeList;