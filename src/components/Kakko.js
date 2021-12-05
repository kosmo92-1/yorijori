import React, { useState, useEffect } from "react";
import KakaoLogin from "react-kakao-login";
import Header from "./Header";
function Kakao(){
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.Kakao.init("0973a1f086110ef1c7c7fd731fac2d3c");
    }
  }, []);
	return(
       
    	<KakaoLogin
        token={String("0973a1f086110ef1c7c7fd731fac2d3c")}
        onSuccess={(res) => {console.log("로그인성공", res);}} // 성공 시 실행할 함수
        onFail={(err) => {
          console.log("로그인실패", err);
        }}
        onLogout={() => {
          console.log("로그아웃");
        }}
        render={({ onClick }) => (
          <div
            onClick={(e) => {
              e.preventDefault();
              onClick();
            }}
          > 
            카카오로 로그인하기
          </div>
        )}
      ></KakaoLogin>
    )
};

export default Kakao;