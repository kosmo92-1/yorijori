import React, { useState } from 'react';
import axios from 'axios';

const {Kakao} = window;
// const loginWithKakao = () =>{
  //     console.log("hello");
  //     Kakao.Auth.authorize({
    //     redirectUri: 'http://localhost:3000/login'
    //     })
    // }
    const loginWithKakao = () => {
      console.log("hello");
      const scope = "profile_nickname, profile_image, account_email";
      Kakao.Auth.login({
        scope,
        // success는 인증 정보를 응답(response)으로 받는다. 
        success: function (response) {
          //카카오 SDK에 사용자 토큰을 설정한다.
          window.Kakao.Auth.setAccessToken(response.access_token);
          console.log(`is set?: ${window.Kakao.Auth.getAccessToken()}`);
          
          var ACCESS_TOKEN = window.Kakao.Auth.getAccessToken();
          
          
          window.Kakao.API.request({
            url: "/v2/user/me",
            success: function ({ kakao_account }) {
              //어떤 정보 넘어오는지 확인
              console.log(kakao_account);
              const {  email,profile } = kakao_account;
              
              console.log(email);
              console.log(`responsed img: ${profile.profile_image_url}`);
              console.log(profile.nickname);
              console.log(ACCESS_TOKEN);
              
              axios({
                method: "post",
                url: "/kakaoLogin.do",
                data: {
                  "member_id": email,
                  "member_name": profile.nickname,
                  "member_photo" :profile.profile_image_url,
                  "member_idKey" : ACCESS_TOKEN,
                },
              })
              .then(res => {
                
                
            console.log(res)
            console.log('res.data.id :: ', res.data.id)
            console.log('res.data.name :: ', res.data.name)
            console.log('res.data.profile :: ', `${profile.profile_image_url}`)
            console.log('res.data.chk :: ', res.data.chk)
            if (res.data.chk === 0){
                console.log('======================',res.data.msg)
                sessionStorage.setItem('social_id', res.data.id)
                sessionStorage.setItem('social_name', res.data.name)
                sessionStorage.setItem('social_photo', `${profile.profile_image_url}`)
                sessionStorage.setItem('member_idKey', res.data.socialIdKey)
                sessionStorage.setItem('social_state',"1")

                alert('가입한 기록이 없습니다. 회원가입을 진행해주세요.')
                document.location.href = '/signup'
            } 
            else if(res.data.chk === 1) {
                console.log('======================','로그인 성공')
                sessionStorage.setItem('social_state',"1")
                sessionStorage.setItem("social_id", res.data.id);
                sessionStorage.setItem('member_idKey', res.data.socialIdKey)
                alert('로그인 성공')
                document.location.href = '/'
            }
        })
            .catch((error) => {
              // console.log(error);
              console.error(error);
              alert("카카오 로그인 에러");
              document.location.href = '/login'
            });
  
        },
        fail: function (error) {
          console.log(error);
        },
      });
  
  
      },
      fail: function (error) {
        console.log(error);
      },
    });
  
  };
  
const KakaoLogin = () => {
  
    return (
    <div>
        <a id="custom-login-btn" onClick={loginWithKakao}>
            <img src="//k.kakaocdn.net/14/dn/btqCn0WEmI3/nijroPfbpCa4at5EIsjyf0/o.jpg" width="222" />
        </a>
    </div>
    );
};


export default KakaoLogin;
