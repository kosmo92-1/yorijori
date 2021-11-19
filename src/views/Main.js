import React from 'react';
import banner from '../assets/images/banner.png';

function Main() {
    return (
        <main id="main">
            <h2 className="sr-only">구독 중인 레시피, 추천 레시피 등을 소개하는 페이지</h2>
            <section class="banners">
                <img src={banner} alt="딸기 에끌레르, 제철인 딸기를 넣은 달콤한 디저트" />
            </section>
            <div className="">
                <section>feeds</section>
                <section>recommends</section>
            </div>
        </main>
    );
}

export default Main;