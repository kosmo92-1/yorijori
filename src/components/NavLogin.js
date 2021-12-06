import React from 'react';
import NaverLogin from 'react-login-by-naver';

function NavLogin(props) {
    return (
        <NaverLogin
        clientId="N5dHewuN7tsjr0GEhoED"
        callbackUrl="http://192.168.56.1:3000/"
        render={(props) => 
            <div onClick={props.onClick}>Naver Login</div>}
        onSuccess={(result) => {
            console.log(result)}}
        onFailure={(result) => console.error(result)}>
        </NaverLogin>
    );
}

export default NavLogin;