import axios from 'axios';
import RecommendRecipeCard from 'components/RecommendRecipeCard';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png';
import FeedRecipeCard from '../components/FeedRecipeCard';

var recipes = [...Array(6).keys()];

function Main() {
    const [recommendedRecipeList, setRecommendedrecipeList] = useState({
        getlist: [
            {
                "recipe_id": 0,
                "channel_id": "",
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
        ],
        pageMaker: {
            "totalCount": 0,
            "startPage": 0,
            "endPage": 0,
            "prev": false,
            "next": false,
            "displayPageNum": 0,
            "cri": {
                "page": 0,
                "pageNum": 0,
                "rowStart": 0,
                "rowEnd": 0,
                "searchType": "",
                "keyword": "",
                "pageStart": 0
            }
        }
    })

    const [feededRecipeList, setFeededRecipeList] = useState({
        listSubRecipe: [
            {
                "recipe_id": 0,
                "channel_id": "",
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
            },
        ]
    });

    
    useEffect(() => {
        var page = 1;
        var pageNum = 6;
        const user_id = sessionStorage.getItem("user_id")
        console.log(user_id);

        axios({
            method: "get",
            url: "/recommendRecipe.do?page="+ page +"&pageNum=" + pageNum,
        })
        .then((res) => {
            setRecommendedrecipeList(res.data)
        })
        .then(
            axios({
                method: "get",
                url: "/listSubRecipe.do?member_id=" + user_id,
            })
            .then((res) => {
                setFeededRecipeList(res.data)
            })
        )
        .catch((err) => {
            alert(err)
        })
    }, [])

    console.log(recommendedRecipeList)
    console.log(feededRecipeList)

    const modFeededRecipeList = feededRecipeList.listSubRecipe.slice(0, 6)

    return (
        <main id="main">
            <h2 className="sr-only">구독 중인 레시피, 추천 레시피 등을 소개하는 페이지</h2>
            <section className="banners">
                <img src={banner} alt="딸기 에끌레르, 제철인 딸기를 넣은 달콤한 디저트" />
            </section>
            <div className="recipes-wrap">
                <section>
                    <h3>
                        Feed
                        <Link to={`recipes`}>더 보기</Link>
                    </h3>
                    <div>
                        {
                            modFeededRecipeList.map((feedCard) => <FeedRecipeCard key={feedCard.recipe_id} value={feedCard}></FeedRecipeCard>)
                        }
                    </div>
                </section>
                <section>
                    <h3>
                        Recommendation
                        <Link to={`recipes`}>더 보기</Link>    
                    </h3>
                    <div>
                        {
                            recommendedRecipeList.getlist.map((rcCard) => <RecommendRecipeCard key={rcCard.recipe_id} value={rcCard}></RecommendRecipeCard>)
                        }
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;