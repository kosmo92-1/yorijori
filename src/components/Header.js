import React, { useEffect, useState } from 'react';
import Logo from './shared/Logo';


function Header(props) {
    let listener = null;
    const [scrollState, setScrollState] = useState("top");
    
    useEffect(() => {
        listener = document.addEventListener("scroll", e => {
            var scrolled = document.scrollingElement.scrollTop;
            if (scrolled >= 100) {
                if (scrollState !== "scrolling") {
                    setScrollState("scrolling")
                } else {
                    if (scrollState !== "top") {
                        setScrollState("top")
                    }
                }
            }
        })
    }, [scrollState])

    return (
        <header id="header">
    <script src="https://developers.kakao.com/sdk/js/kakao.js"></script>
    <script>Kakao.init("e03625b4bd41a78b915468e4933296bc");</script>
            <div className="inner-header">
                <h1 className="logo">
                    <Logo></Logo>
                </h1>
                <nav>
                    <ul className="clearfix">
                        <li><a href="#">마이페이지</a></li>
                        <li><a href="#">장바구니</a></li>
                        <li><a href="#">로그인</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;