import React from 'react';

function Main(props) {
    return (
        <main>
            <h2 className="sr-only">구독 중인 레시피, 추천 레시피 등을 소개하는 페이지</h2>
            <section>banners</section>
            <div className="contents">
                <section>feeds</section>
                <section>recommends</section>
            </div>
        </main>
    );
}

export default Main;