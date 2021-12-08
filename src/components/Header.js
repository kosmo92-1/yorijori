// import React, { useEffect, useState } from 'react';
import { useEffect, useState } from 'react';
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from 'reactstrap';
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
    const [user_id, setUser_id] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen(prevState => !prevState);

    useEffect(() => {
        setUser_id(sessionStorage.getItem("user_id"))
        console.log(user_id);
    }, [user_id]) 

    const logout = (e) => {
        e.preventDefault();
        sessionStorage.clear();
        alert("로그아웃 성공")
        console.log(sessionStorage)
        window.location.reload() 
    }

    return (
        <header id="header">
            <div className="inner-header">
                <h1 className="logo">
                    <a href="/"><Logo></Logo></a>
                </h1>
                <nav>
                    <ul className="clearfix">
                        <li></li>
                        <li><a href="/mart">주변마트보기</a></li>
                        <li><a href="/notice">공지사항</a></li>
                        <li><a href="/recipes">레시피</a></li>
                        <li></li>
                        <li></li>
                        <li></li>
                        {/* TODO : 값에 따라 로그인 로그아웃 변경 */}
                        {/* <li><a href="/login">로그인</a></li> */}
                        {user_id === null ? <li><a href="/login">로그인</a></li> : <> <li>{user_id}님 환영합니다</li>
                        <li>
                        <Dropdown isOpen={dropdownOpen} toggle={toggle}>
                            <DropdownToggle caret>
                                회원 메뉴 
                            </DropdownToggle>
                            <DropdownMenu>
                                <DropdownItem header>회원정보</DropdownItem>
                                <DropdownItem><a href="/mypage">마이페이지</a></DropdownItem>
                                <DropdownItem><a href="/myChannel">내채널</a></DropdownItem>
                                <DropdownItem><a href="/basket">장바구니</a></DropdownItem>
                                <DropdownItem><a href="/subscribe">채널구독</a></DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem><a href="/logout" onClick={logout}>로그아웃</a></DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                        </li>
                        </>} 
                        
                        
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;