import React from 'react';
import FacebookLogin from 'react-facebook-login';



const FaceBookLogin = ({ oAuthLoginHandler }) => {
  
  const responseFacebook = (response) => {
    const { id, email } = response; //페이스북 응답객체에서 id와 email을 할당한 후 
    oAuthLoginHandler(Number(id), email);  // props로 내려준 oAuthLoginHandler라는 함수에 인자로 넘겨준다.
  };
  
  return (
       <FacebookLogin
        appId="1824336457763272"
        autoLoad={false}
        fields="name,email"
        scope="public_profile,user_friends"
        callback={responseFacebook}
        icon="fa-facebook"
        ></FacebookLogin>
   
  );
};

export default FaceBookLogin;