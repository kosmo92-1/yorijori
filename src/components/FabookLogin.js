import axios from 'axios';
import React from 'react';
import FacebookLogin from 'react-facebook-login';



const FaceBookLogin = ({ oAuthLoginHandler }) => {
  
  const responseFacebook = (res) => {
    const { id, name } = res; //페이스북 응답객체에서 id와 email을 할당한 후 
    console.log(id,name)
    console.log(res)

    const loginInfo={
      "member_id":id,
      "member_name":name,
      "member_idKey":id,
  }
    sessionStorage.setItem('user_id', res.id+"@facebook.com")
    sessionStorage.setItem('social_name',res.name)
    sessionStorage.setItem('member_idKey',res.id)
    sessionStorage.setItem('social_state',"2")
     
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
  };
  
  return (
       <FacebookLogin
        appId="720679529335241"
        autoLoad={false}
        fields="email,name"
        scope="public_profile,user_friends"
        callback={responseFacebook}
        icon="fa-facebook"
        ></FacebookLogin>
   
  );
};

export default FaceBookLogin;