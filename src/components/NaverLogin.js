import React, { Component } from 'react';

class NaverLogin extends Component {
    componentDidMount() {
        const naverScript =document.createElement("script");
        naverScript.src = 
        "http://https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
        naverScript.type = "text/javascript";
        document.head.appendChild(naverScript);

        naverScript.onload = () => {
            const naverLogin =new window.naver.LoginWithNaverId({
                clientId: "KXolaFgogTY_yqxrrZFK",
                callbackUrl: "http://192.168.0.91:3000",
                callbackHandle: true,
                isPopup: false,
                loginButton: {
                    color: "greed",
                    type: 3,
                    height: 60,
                },
            });
            naverLogin.init();
            naverLogin.logout();
            naverLogin.getLoginStatus((status) => {
                if(status){
                    console.log("Naver 로그인 상태", naverLogin.user);
                    const { }
                }
            })
        }
    }
    render() {
        return (
            <div>
                
            </div>
        );
    }
}
componentDidMount() {
    const naverScript =document.createElement("script");
    naverScript.src = 
    "http://https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    naverScript.onload = () => {
        const naverLogin =new window.naver.Lo
    }
}

export default NaverLogin;