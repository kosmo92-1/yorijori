import React from 'react';
import { Button } from 'reactstrap';
import banner from '../assets/images/banner.png';
import RecipeCard from '../components/RecipeCard';

var recipes = [...Array(6).keys()];

function Main() {
   
    
    return (
        <main id="main">
            <h2 className="sr-only">구독 중인 레시피, 추천 레시피 등을 소개하는 페이지</h2>
            <section class="banners">
                <img src={banner} alt="딸기 에끌레르, 제철인 딸기를 넣은 달콤한 디저트" />
            </section>
            <div className="recipes-wrap">
                <section>
                    <h3>
                        Feed
                        <a href="#">더 보기</a>    
                        <Button color="primary" size="lg" disabled>Primary button</Button>
                    </h3>
                    <div>
                        {
                            recipes.map(el => <RecipeCard value={el} key={el}></RecipeCard>)
                        }
                    </div>
                </section>
                <section>
                    <h3>
                        Recommendation
                        <a href="#">더 보기</a>    
                    </h3>
                    <div>
                        {
                            recipes.map(el => <RecipeCard value={el} key={el}></RecipeCard>)
                        }
                    </div>
                </section>
            </div>
        </main>
    );
}

export default Main;