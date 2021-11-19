import React from 'react';

function Header(props) {
    return (
        <header className="header">
            <h1>요리조리</h1>
            <nav>
                <ul>
                    <li>마이페이지</li>
                    <li>장바구니</li>
                    <li>로그인</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;