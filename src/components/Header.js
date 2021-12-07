// import React, { useEffect, useState } from 'react';
import Logo from './shared/Logo';


function Header(props) {
    let listener = null;
    // const [scrollState, setScrollState] = useState("top");
    
    // useEffect(() => {
    //     listener = document.addEventListener("scroll", e => {
    //         var scrolled = document.scrollingElement.scrollTop;
    //         if (scrolled >= 100) {
    //             if (scrollState !== "scrolling") {
    //                 setScrollState("scrolling")
    //             } else {
    //                 if (scrollState !== "top") {
    //                     setScrollState("top")
    //                 }
    //             }
    //         }
    //     })
    // }, [scrollState])

    return (
        <header id="header">
            <div className="inner-header">
                <h1 className="logo">
                    <a href="/"><Logo></Logo></a>
                </h1>
                <nav>
                    <ul className="clearfix">
                        <li><a href="/mypage">마이페이지</a></li>
                        <li><a href="/mart">주변마트보기</a></li>
                        <li><a href="#">공지사항</a></li>
                        <li><a href="/myChannel">내채널</a></li>
                        <li><a href="/channel">장바구니</a></li>
                        <li><a href="/subscribe">채널구독</a></li>
                        {/* TODO : 값에 따라 로그인 로그아웃 변경 */}
                        <li><a href="/login">로그인</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;