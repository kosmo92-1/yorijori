import React, { useEffect } from 'react';
import NaverLogin from 'react-login-by-naver';


const { naver } = window



  const initializeNaverLogin = () => {
    const naverLogin = new naver.LoginWithNaverId({
      clientId: "KXolaFgogTY_yqxrrZFK",
      callbackUrl: "http://192.168.0.91:3000/",
      isPopup: false, 
      loginButton: { color: 'white', type: 1, height: '47' }, //버튼의 스타일, 타입, 크기를 지정
    });
    naverLogin.init();
  };
    
  useEffect(() => {
    initializeNaverLogin();
    
  }, []);
  
