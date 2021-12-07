import axios from 'axios';
import React, { useEffect } from 'react';
import NaverLogin from 'react-login-by-naver';
import { useLocation } from 'react-router-dom';

function NavLogin(props) {

  const location = useLocation();  

  const getNaverToken = () => {
    if (!location.hash) return;
    const token = location.hash.split('=')[1].split('&')[0];
    console.log(token);
  };


    const loginNaver = (res) =>{
        console.log("2"+res)
        console.log(res.email)
        console.log(res.name)
        console.log(res.id)
        sessionStorage.setItem('social_id', res.email)
        sessionStorage.setItem('social_name',res.name)
        sessionStorage.setItem('member_idKey',res.id)
        sessionStorage.setItem('social_state',"2")
        // 메일 주소, DB 비교 컴포넌트 props 메일주소 
        const loginInfo={
            "member_email":res.email,
            "member_name":res.name,
            "member_idKey":res.id,
        }
        
        // axios를 이용해 post로 전송하며
        axios.post('/socialLogin.do', loginInfo, {
            headers:{
                // json으로 형식을 지정함.
                "Content-type":"application/json"
            }
        })
         // post 보내고 나서 실행
        .then(res => {
            console.log(res)
            console.log('res.data.socialIdKey :: ', res.data.socialIdKey)
            console.log('res.data.chk :: ', res.data.chk)
            if (res.data.chk === 0){
                console.log('======================',res.data.msg)
                
                alert('가입한 기록이 없습니다. 회원가입을 진행해주세요.')
                document.location.href = '/signup'
            } else if(res.data.chk === 1) {
                console.log('======================','로그인 성공')
                sessionStorage.setItem('member_idKey', res.data.socialIdKey)
                alert('로그인 성공')
                document.location.href = '/'
            }
        })
        // 실패시 실행
        .catch()
    }
    return (
        <NaverLogin
        clientId="KXolaFgogTY_yqxrrZFK"
        callbackUrl="http://127.0.0.1:3000/login"
        render={(props) => 
            <div className="naverBtn" onClick={props.onClick}>Naver Login</div>}
            onSuccess={(result) => {
                console.log(result)
                loginNaver(result)
                }}
                onFailure={(result) => console.error(result)}>
        </NaverLogin>
      
    );
}
export default NavLogin;