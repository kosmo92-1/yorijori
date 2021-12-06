import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Modal } from "reactstrap";
import { useNavigate } from "react-router";
import GoogleLogin from 'react-google-login';
import KakaoLogin from 'components/KakaoLogin';

function SignIn() {
  const [findPwModal, setFindPwModal] = React.useState(false);
  // 함수형 컴포넌트에서 state를 사용하기위해 useState 사용
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
  const [inputData, setInputData] = useState({
    "inputName": "",
    "inputTel": "",
    // "inputEmail":"",
    // "cerNum":"",
  });
  const handleValueChange = (event) => {
    // API 요청에 날릴 Form state에 정보를 추가합니다.
    
    setInputData({
      ...inputData,
      [event.target.name]: event.target.value,
    });
    console.log(inputData);
  };

  const navigate = useNavigate();
  // input 태그에 value={값} 선언하면 readonly같은 효과가 나타나므로
  // onChange로 변화가 있을때마다 id의 값을 변경해줍니다.
  const handleInputId = (e) => {
    setInputId(e.target.value);
  };
  // 마찬가지
  const handleInputPw = (e) => {
    setInputPw(e.target.value);
  };
  
  const loginGoogle = (res) =>{
    console.log(res)
    console.log(res.profileObj.email)
    console.log(res.profileObj.name)
    console.log(res.profileObj.googleId)
    sessionStorage.setItem('social_id', res.profileObj.email)
    sessionStorage.setItem('social_name',res.profileObj.name)
    sessionStorage.setItem('member_idKey',res.profileObj.googleId)
    sessionStorage.setItem('social_state',"2")
    // 메일 주소, DB 비교 컴포넌트 props 메일주소 
    const loginInfo={
        "member_email":res.profileObj.email,
        "member_name":res.profileObj.name,
        "member_idKey":res.profileObj.googleId,
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
            document.location.href = '/mypage'
        }
    })
    // 실패시 실행
    .catch()
}

  const loginkakao = (res) =>{
      console.log(res)
  }
  //로그인 함수
  const onClickLogin = (e) => {
    e.preventDefault();
    console.log("click login");
    console.log("ID : ", inputId);
    console.log("PW : ", inputPw);
    // json처럼 선언해줍니다.
    const loginInfo = {
      member_id: inputId,
      member_pw: inputPw,
    };
    // axio를 이용해 post로 전송하며
    axios
      .post("/login.do", loginInfo, {
        headers: {
          // json으로 형식을 지정해줍니다.
          "Content-type": "application/json",
        },
      })
      // post 보내고 나서 실행
      .then((res) => {
        console.log(res);
        console.log("res.data.member_id :: ", res.data.member_id);
        console.log("res.data.member_pw :: ", res.data.member_pw);
        // 아이디가 일치할경우는 res에서 값을 모두 받아오고
        // 아이디가 맞지않거나 비밀번호가 맞지않으면 둘다 undefined 나와요.
        if (res.data.member_id === undefined) {
          // id 일치하지 않는 경우 userId = undefined, msg = '입력하신 id 가 일치하지 않습니다.'
          console.log("======================", res.data.msg);
          alert("입력하신 id 가 일치하지 않습니다.");
        } else if (res.data.member_pw === undefined) {
          // id는 있지만, pw 는 다른 경우 userId = null , msg = undefined
          console.log(
            "======================",
            "입력하신 비밀번호 가 일치하지 않습니다."
          );
          alert("입력하신 비밀번호 가 일치하지 않습니다.");
        } else if (res.data.member_id === inputId) {
          // id, pw 모두 일치 userId = userId1, msg = undefined
          console.log("======================", "로그인 성공");
          sessionStorage.setItem("user_id", inputId);
          sessionStorage.setItem("user_pw", inputPw);

          alert("로그인 성공");
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        document.location.href = '/mypage'
      })
      // 실패시 실행
      .catch();
      // alert("실패")
  };

  const onFindId = (e) => {
    e.preventDefault();
    const idCheckJson ={
      member_name:inputData.inputName,
      member_tel:inputData.inputTel,
  }
    // json처럼 선언해줍니다.
    // axio를 이용해 post로 전송하며
    console.log(idCheckJson);
    console.log(inputData);
    axios.post("/findId.do", idCheckJson, {
        headers: {
          // json으로 형식을 지정해줍니다.
          "Content-type":"application/json"
        },
      })
      // post 보내고 나서 실행
      .then((res) => {
        console.log(res);
        if (res === "noSearch") {
          alert("입력하신 정보와 일치하는 아이디가 존재하지 않습니다.");
          return;
        }else {
          alert("고객님의 아이디는 = " + res.data +" 입니다.");
          setFindPwModal(false);
        }
      })
      // 실패시 실행
      .catch();
  };

  const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };
//아이디 비밀번호 찾기 탭
    const tabContArr=[
        {
            tabTitle:(
                <Button className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>아이디 찾기</Button>
            ),
            tabCont:(
                <Form name="idForm">
                <FormGroup>
                  <Input
                    type="text"
                    id="inputName"
                    name="inputName"
                    placeholder="이름을 입력해 주세요."
                    onChange={handleValueChange}
                  />
                  </FormGroup>
                  <FormGroup>
                  <Input
                    type="text"
                    id="inputTel"
                    name="inputTel"
                    placeholder="전화번호를 입력해주세요."
                    onChange={handleValueChange}
                  />
                </FormGroup>
                <Button onClick={onFindId}>확인</Button>
              </Form>
            )
        },
        {
            tabTitle:(
                  <Button className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>비밀번호 찾기</Button> 
            ),
            tabCont:(
                <Form name="pwForm">
                <FormGroup>
                  <Input
                    type="text"
                    id="inputEmail"
                    name="inputEmail"
                    placeholder="가입한 메일 주소를 입력해 주세요."
                    onChange={handleValueChange}
                  />
                  <Button>인증번호 발송</Button>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    id="cerNum"
                    name="cerNum"
                    placeholder="인증번호를 입력해주세요."
                    onChange={handleValueChange}
                  />
                  <Button>인증번호 확인</Button>
                </FormGroup>
              </Form>
            )
        }
    ];

  
  return (
    <Container className="login">
      <Modal
        isOpen={findPwModal}
        className="modal-m"
        modalClassName="bd-findPw-modal-sm"
        toggle={() => setFindPwModal(false)}
      >
        <div className="modal-header">
        <ul className="tabs is-boxed">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </ul>
        
        </div>
        <div className="modal-body">
        
          <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
        </div>
          <div className="modal-footer">
            <Button onClick={() => setFindPwModal(false)}>닫기</Button>
        </div>
      </Modal>

      <Form >
        <FormGroup>
        </FormGroup>
        <FormGroup>
          <Input
            type="text"
            name="input_id"
            value={inputId}
            onChange={handleInputId}
            placeholder="아이디"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="input_pw"
            value={inputPw}
            onChange={handleInputPw}
            placeholder="비밀번호"
          ></Input>
        </FormGroup>
        <FormGroup>
          <Button block type="submit" onClick={onClickLogin}>
            로그인
          </Button>
        </FormGroup>

        <FormGroup>
          <Button block onClick={() => navigate("/signup")}>회원가입</Button>
        </FormGroup>

        <FormGroup>
          <Button block onClick={() => setFindPwModal(true)}>
            아이디/비밀번호찾기
          </Button>
        </FormGroup>
        <FormGroup>
        <GoogleLogin onSuccess={loginGoogle} />
        </FormGroup>
        <FormGroup>
        <KakaoLogin onSuccess={loginkakao} />
        </FormGroup>
        <FormGroup></FormGroup>
      </Form>
    </Container>
  );
}

export default SignIn;
