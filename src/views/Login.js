import React from 'react';
import axios from 'axios';

function Login(props) {
    const action = ()=> {

        console.log("action()")
        const id = "a"
        const pw = "a"
        const loginInfo ={
            member_id:"a",
            member_pw:"a"
        }
        axios.post('/login.do', loginInfo, {headers:{'Content-type': 'application/json'}
        }).then(res => {window.open("/")}) // 성공 시 알림 및 페이지 되돌아가기
        .catch(err => {alert(err.data)}) // 실패 시 알림;
  
        // axios({
        //     url: '/login.do',
        //     method: 'post',
        //     headers:{'content-type': 'application/json'},
        //     body: {
        //       member_id: id,
        //       memeber_pw:pw
        //     }
        //   })
        //   .then(res => {window.open("/")}) // 성공 시 알림 및 페이지 되돌아가기
        //   .catch(err => {alert("실패하였어요")}) // 실패 시 알림;
        // 추가한다.
        // axios.post('/login.do',form , { headers: { 'Content-Type': 'application/json; charset=utf-8;' }})
        // .then(res => {window.open("/")}) // 성공 시 알림 및 페이지 되돌아가기
        // .catch(err => {alert("실패하였어요")}) // 실패 시 알림
    }
    

    return (
        <div>
            <button onClick={action}>로그인</button>
            
        </div>
    );
}

export default Login;