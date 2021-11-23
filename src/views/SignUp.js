import React, { useState } from "react";
// import { Form } from "react-bootstrap";
import {
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Label,
  Checkboxes,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Form
} from "reactstrap";
import DaumPostcode from 'react-daum-postcode';
import DaumPost from "components/DaumPost";


function SignUp(props) {
  const [member_id, setMember_id] = useState("");
  const [member_pw, setMember_pw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [member_name, setMember_name] = useState("");
  const [member_tel, setMember_tel] = useState("");
  const [member_basic_address, setMember_basic_address] = useState("");
  const [member_detail_address, setMember_detail_address] = useState("");
  const [member_type, setMember_type] = useState("");
  const [userCode, setUserCode] = useState("");
  const [agreeEvent,setAgreeEvent] = useState("");
  const {adminCode} = "q1w2e3"; 
  const [liveDemo, setLiveDemo] = React.useState(false);
  


    const onIdHandler = (event) => {
    setMember_id(event.currentTarget.value);
  };
  const onNameHandler = (event) => {
    setMember_name(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setMember_pw(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPw(event.currentTarget.value);
  };

  const onTelHandler = (event) => {
    const { value } = event.target
    const onlyNumber = value.replace(/[^0-9]/g, '')
    if(onlyNumber>9&&onlyNumber<12){
        setMember_tel(onlyNumber);
    }else{
        alert("번호를 확인해주세요")
    }
  };

 

//   const onChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const { value } = e.target
//     // value의 값이 숫자가 아닐경우 빈문자열로 replace 해버림.
//     const onlyNumber = value.replace(/[^0-9]/g, '')
//     setInputs(onlyNumber)
//   }
  const onBasicaddressHandler = (event) => {
      
    setMember_basic_address(event.currentTarget.value);
    
  };
  const onDetailaddressHandler = (event) => {
    setMember_detail_address(event.currentTarget.value);
  };
  const onMembertypeHandler = (event) => {
    setMember_type(event.currentTarget.value);
  };
  const onUserCodeHandler = (event) => {
    setUserCode(event.currentTarget.value);
  };
  const onAgreeEventHandler = (event) => {
    setAgreeEvent("1");
  };

  const onSubmit = (event) => {
    event.preventDefault();
    if (member_pw !== confirmPw) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    }
  };
  const adminCheck = (e) =>{
    e.preventDefault();
    if (userCode === adminCode) {
        setMember_type("1");
        
      }else {
        return alert("관리자코드를 확인해주세요");
      }
  }
//   const modalClose = (e) =>{
        // setLiveDemo(false)
//   }
  
  //파일 미리볼 url을 저장해줄 state
  const [fileImage, setFileImage] = useState("");
  // 파일 저장
  const saveFileImage = (e) => {
    setFileImage(URL.createObjectURL(e.target.files[0]));
  };
  const imagestyle = {
    height: "150px",  
      width: "150px",
      borderRadius:"50%"
      };

  const [idCheck, setIdCheck] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [error, setError] = useState("");

  return (
      
    <Container>
      <Modal isOpen={liveDemo} toggle={() => setLiveDemo(false)}>
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
           주소찾기
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setLiveDemo(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <DaumPost  onComplete={(res)=>{alert(res)}} />
        </div>
       
        
      </Modal>
      <Form>
        <FormGroup>
          <Label for="emailInput">아이디*</Label>
          <Input
            id="emailInput"
            type="email"
            placeholder="이메일을 입력해 주세요"
            value={member_id}
            onChange={onIdHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pwInput">비밀번호*</Label>
          <Input
            id="pwInput"
            type="password"
            placeholder="6자리 이상 입력해 주세요"
            value={member_pw}
            onChange={onPasswordHandler}
          />
          <Label for="pwInput2">비밀번호확인*</Label>
          <Input
            id="pwInput2"
            type="password"
            placeholder="비밀번호와 같게 입력해주세요"
            value={confirmPw}
            onChange={onConfirmPasswordHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="nameInput">이름*</Label>
          <Input
            id="nameInput"
            type="text"
            placeholder="이름을 입력해주세요"
            value={member_name}
            onChange={onNameHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="tellInput">전화번호*</Label>
          <Input
            id="tellInput"
            type="text"
            placeholder="-를 제외한 번호를 입력해 주세요"
            value={member_tel}
            onChange={onTelHandler}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="address_basic">주소*</Label>
          <Input
            id="address_basic"
            type="text"
            value={member_basic_address}
            onChange={onBasicaddressHandler}
          ></Input>
          <Button color="primary" type="button" onClick={() => setLiveDemo(true)}>
       주소찾기
      </Button>
          <Input
            id="address_detail"
            type="text"
            placeholder="상세주소*"
            value={member_detail_address}
            onChange={onDetailaddressHandler}
          ></Input>
        </FormGroup>
          <FormGroup check inline>
            <Input type="checkbox" onChange={onAgreeEventHandler}/>
            <Label check>이벤트, 프로모션 메일 수신동의</Label>
          </FormGroup><br/>
          <FormGroup>
    
          </FormGroup>
      </Form>

      <Row>
        <h3>프로필이미지</h3>
        <div>
          {fileImage && (
            <img
              alt="sample"
              className="img-rounded img-responsive"
              src={fileImage}
              style={imagestyle}
            />
          )}
          <div style={{ alignItems: "center", justifyContent: "center" }}>
            <input
              name="imgUpload"
              type="file"
              accept="image/*"
              onChange={saveFileImage}
            />
          </div>
        </div>
      </Row>

      <div>
        <Button active block type="submit" onSubmit={onSubmit}>
          회원가입
        </Button>
      </div>


      
    </Container>
    //
  );
}

export default SignUp;
