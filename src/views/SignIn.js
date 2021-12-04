import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button, Container, Form, FormGroup, Input, Modal } from "reactstrap";
import { useNavigate } from "react-router";
import Kakao from "components/Kakko";

function SignIn() {
  const [findPwModal, setFindPwModal] = React.useState(false);
  // 함수형 컴포넌트에서 state를 사용하기위해 useState 사용
  const [inputId, setInputId] = useState("");
  const [inputPw, setInputPw] = useState("");
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
  //로그인 함수
  const onClickLogin = () => {
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
          alert("로그인 성공");
        }
        // 작업 완료 되면 페이지 이동(새로고침)
        // document.location.href = '/mypage'
      })
      // 실패시 실행
      .catch();
      alert("실패");
  };
  const { Kakao } = window;
  const kakaoLoginClickHandler = () => {
    Kakao.Auth.login({
      success: function (authObj) {
        fetch("${KAKAO_LOGIN_API_URL}", {
          method: "POST",
          body: JSON.stringify({
            access_token: authObj.access_token,
          }),
        })
          .then((res) => res.json())
          .then((res) => {
            localStorage.setItem("Kakao_token", res.access_token);
            if (res.access_token) {
              alert("성공");
            }
          });
      },
      fail: function (err) {
        alert(JSON.stringify(err));
      },
    });
  };
  const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };
//아이디 비밀번호 찾기 탭
    const tabContArr=[
        {
            tabTitle:(
                <li className={activeIndex===0 ? "is-active" : ""} onClick={()=>tabClickHandler(0)}>  <Button>아이디 찾기</Button> </li>
            ),
            tabCont:(
                <Form name="idForm">
                <FormGroup>
                  <Input
                    type="text"
                    id="InputName"
                    name="InputName"
                    placeholder="이름을 입력해 주세요."
                    // onChange={}
                  />
                  </FormGroup>
                  <FormGroup>
                  <Input
                    type="text"
                    id="InputTel"
                    name="InputTel"
                    placeholder="전화번호를 입력해주세요."
                    // onChange={}
                  />
                </FormGroup>
                <Button>확인</Button>
              </Form>
            )
        },
        {
            tabTitle:(
                <li className={activeIndex===1 ? "is-active" : ""} onClick={()=>tabClickHandler(1)}>  <Button>비밀번호 찾기</Button> </li>
            ),
            tabCont:(
                <Form name="pwForm">
                <FormGroup>
                  <Input
                    type="text"
                    id="InputEmail"
                    name="InputEmail"
                    placeholder="가입한 메일 주소를 입력해 주세요."
                    // onChange={}
                  />
                  <Button>인증번호 발송</Button>
                </FormGroup>
                <FormGroup>
                  <Input
                    type="text"
                    id="cerNum"
                    name="cerNum"
                    placeholder="인증번호를 입력해주세요."
                    // onChange={}
                  />
                  <Button>인증번호 확인</Button>
                </FormGroup>
              </Form>
            )
        }
    ];

  
  return (
    <Container>
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

      <Form onSubmit={onClickLogin}>
        <FormGroup>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
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
          <Button type="submit" onClick={onClickLogin}>
            로그인
          </Button>
        </FormGroup>

        <FormGroup>
          <Button onClick={() => navigate("/signup")}>회원가입</Button>
        </FormGroup>

        <FormGroup>
          <Button onClick={() => setFindPwModal(true)}>
            아이디/비밀번호찾기
          </Button>
        </FormGroup>
        <FormGroup>
          <Button
            fill
            className="btn kakao"
            onClick={kakaoLoginClickHandler}
          ></Button>
        </FormGroup>
        <FormGroup></FormGroup>
        <FormGroup></FormGroup>
        <FormGroup></FormGroup>
      </Form>
    </Container>
  );
}

export default SignIn;
