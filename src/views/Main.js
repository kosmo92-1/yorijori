import RecommendRecipeCard from 'components/RecommendRecipeCard';
import React from 'react';
import { Link } from 'react-router-dom';
import banner from '../assets/images/banner.png';
import FeedRecipeCard from '../components/FeedRecipeCard';

var recipes = [...Array(6).keys()];

function Main() {
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
                            recipes.map(el => <FeedRecipeCard value={el} key={el}></FeedRecipeCard>)
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
                            recipes.map(el => <RecommendRecipeCard value={el} key={el}></RecommendRecipeCard>)
                        }
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;