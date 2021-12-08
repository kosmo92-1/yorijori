import axios from 'axios';
import React from 'react';
import GoogleLogin from 'react-google-login';

// OAuth Web Client ID 입력
const clientId = "484081369858-1qnhfmimv79fju54msugicfmb4au07kp.apps.googleusercontent.com";
  //구글로그인 성공 시
 

export default function GoogleButton({ onSocial }){
    const onSuccess = async(response) => {
        // 로그인으로 보내기
    	console.log(response);
        const { googleId, profileObj : { email, name } } = response;
        
        await onSocial({
            socialId : googleId,
            socialType : 'google',
            // 수정하기 (원래 email, 만 있었음)
            email,
            nickname : name
            
        });
    }
    const onFailure = (error) => {
        console.log(error);
        alert('로그인 실패')
    }

    return(
        <div>
            <GoogleLogin
                //  OAuth Client ID
                clientId={clientId}
                buttonText="Login"
                // 구글 로그인을 성공할 때 어떤 response를 받아올지 결정
                responseType={"id_token"}
                // 성공시 호출되는 콜백
                onSuccess={onSuccess}
                // 실패시 호출되는 콜백
                onFailure={onFailure}
                />
        </div>
    );
};
