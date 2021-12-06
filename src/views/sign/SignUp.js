import React, { useRef, useState, useEffect } from "react";
import { Link, useNavigate, useLocation, useParams }from "react-router-dom";
import {
  FormGroup,
  Input,
  Container,
  Row,
  Col,
  Label,
  Button,
  Modal,
  Form,
} from "reactstrap";
import DaumPost from "components/DaumPost";
import axios,{ post } from "axios";

function SignUp(props) {
  const {member_email,member_name,member_idKey} = useParams();
  const [formData, setFormData] = useState({
    "member_photo": null,
    "member_id": member_email,
    "member_name": member_name,
    "member_pw": "",
    "confirmPw": "",
    "member_tel": "",
    "member_basic_address": "",
    "member_detail_address": "",
    "member_type":"0",
    "member_agree":"",
    "member_idKey":member_idKey,
    "member_agree":"0",
  });
  
  const [member_photo, setMember_photo] = useState(null);
  const [userCode, setUserCode] = useState("");
  const [adminCode] =useState("q1w2e3");
  const [addressModal, setAddressModal] = React.useState(false);
  const [adminModal, setAdminModal] = React.useState(false);
  const history = useNavigate();

  // 파일 저장
  const saveFileImage = (e) => {
    let profile=URL.createObjectURL(e.target.files[0])
    setMember_photo(profile);

    setFormData({
      ...formData,
      member_photo: e.target.files[0], // API에 요청을 날릴 Form State에 정보를 추가합니다.
    });
  };
//미리보기 스타일
  const imagestyle = {
    height: "150px",
    width: "150px",
    borderRadius: "50%",
  };
  const handleValueChange = (event) => {
    // API 요청에 날릴 Form state에 정보를 추가합니다.
    
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
    console.log(formData);
  };
 
  const registerSubmit = (event) => {
    // 회원가입버튼을 누르면 동작합니다.
    event.preventDefault();
    var checkID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    var checkPW = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
    var checkName = /^[가-힣a-zA-Z]{2,20}$/
    var checkTel = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
    var checkAddress= /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣|-]{2,20}$/
    //아이디 입력제한
    if(formData.member_id=== ""){
      alert("아이디를 입력해주세요")
      return;
    }
    if (!checkID.test(formData.member_id)) {
      alert("아이디로 올바른 메일을 입력해 주시기 바랍니다.")
      return;
    } 
    //비밀번호 입력제한
    if(formData.member_pw=== ""){
      alert("비밀번호를 입력해주세요")
      return;
    } 
    if(formData.confirmPw=== ""){
      alert("비밀번호확인을 입력해주세요")
      return;
    }
    if (!checkPW.test(formData.member_pw)) {
      alert("비밀번호는  8 ~ 10자 영문, 숫자 조합이여야 합니다.")
      return;
    } 
    if (formData.member_pw !== formData.confirmPw) {
      // 비밀번호가 서로 다른지 체크하는 validation 코드입니다.
      alert("비밀번호와 비밀번호 확인이 일치하지 않습니다.");
      return;
    }
    //이름 입력제한
    if(formData.member_name=== ""){
      alert("이름을 입력해주세요")
      return;
    }
    if (!checkName.test(formData.member_name)) {
      alert("이름을 확인해 주세요")
      return;
    } 
    //번호 입력제한
    if(formData.member_tel=== ""){
      alert("번호를 입력해주세요")
      return;
    }
    if (!checkTel.test(formData.member_tel)) {
      alert("번호를 확인해주세요")
      return;
    } 
    //주소 입력제한
    if(formData.member_basic_address=== ""){
      alert("주소를 입력해 주세요.")
      return;
    }
    
    if(formData.member_detail_address=== ""){
      alert("상세주소를 입력해 주세요.")
      return;
    }
    
    if (!checkAddress.test(formData.member_detail_address)) {
      alert("상세주소를 확인해주세요")
      return;
    } 

    const reqFormData = new FormData(); // 파일이 업로드되는 폼이기때문에, multipart/form-data로 전송해야합니다.
    reqFormData.append("file", formData.member_photo); // 입력한정보들을 폼데이터에 넣어줍니다.
    reqFormData.append("member_id", formData.member_id);
    reqFormData.append("member_email", formData.member_id);
    reqFormData.append("member_name", formData.member_name);
    reqFormData.append("member_pw", formData.member_pw);
    reqFormData.append("member_tel", formData.member_tel);
    reqFormData.append("member_basic_address", formData.member_basic_address);
    reqFormData.append("member_detail_address", formData.member_detail_address);
    reqFormData.append("member_type", formData.member_type);
    reqFormData.append("agreeEvent", formData.agreeEvent);
    
    axios.post('/insertMember.do', reqFormData,{
        headers:{
            // json으로 형식을 지정해줍니다.
            "Content-type":"multipart/form-data"
        },
      })
      // post 보내고 나서 실행
      .then(res => {
      if(res.data ==="overlap"){
        alert("이미 가입된 아이디입니다.")
        console.log(res)
        return;
      }else{
        alert('성공')
        console.log(res)
        document.location.href = '/signin'
      }
    })
      .catch(err =>{alert('실패')
      console.log(formData)
    })
  };

   
  const onMembertypeHandler = (event) => {
    formData.member_type="1";
  };
  const onUserCodeHandler = (event) => {
    setUserCode(event.currentTarget.value);
  };
  const onAgreeEventHandler = (event) => {
    formData.member_agree="1";
  };
//주소 API에서 주소 받아와서 저장
  const getData = (fullAddress) => {
    console.log(fullAddress);
    formData.member_basic_address = fullAddress;
    setAddressModal(false);
    
  };

  //관리자 유무 검사 
  const adminCheck = (e) => {
    if (userCode === adminCode) {
      onMembertypeHandler();
      setAdminModal(false);
    } else {
      return alert("관리자코드를 확인해주세요");
      
    }
  };
  

  const [idCheck, setIdCheck] = useState(false);
  const [checkError, setCheckError] = useState("");
  const [error, setError] = useState("");

  return (
    <Container>
      <Modal className="addressModal" isOpen={addressModal} toggle={() => setAddressModal(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLiveLabel">
            주소찾기
          </h5>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setAddressModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <DaumPost autoClose getData={getData} />
        </div>
      </Modal>

      <Modal
        isOpen={adminModal}
        className="modal-sm"
        modalClassName="bd-example-modal-sm"
        toggle={() => setAdminModal(false)}
      >
        <div className="modal-header">
          <h4 className="modal-title" id="mySmallModalLabel">
            관리자 전환
          </h4>
          <button
            aria-label="Close"
            className="close"
            data-dismiss="modal"
            type="button"
            onClick={() => setAdminModal(false)}
          >
            <span aria-hidden={true}>×</span>
          </button>
        </div>
        <div className="modal-body">
          <Form onSubmit= {registerSubmit}>
            <FormGroup>
              <Input
                type="text"
                id="userInputAdmincode"
                name="userCode"
                placeholder="관리자 코드를 입력해주세요"
                onChange={onUserCodeHandler}
              />
            </FormGroup>
          </Form>
        </div>
        <div className="modal-footer">
        <Button className="adminBtn" onClick={adminCheck}>코드 확인</Button>
        </div>
      </Modal>

      <Form>
        <FormGroup>
        </FormGroup>
        <FormGroup>
        <h3>프로필이미지</h3>
        <div>
          {member_photo && (
            <img
              alt="sample"
              className="img-rounded img-responsive"
              src={member_photo}
              style={imagestyle}
              onChange={handleValueChange}
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
        </FormGroup>
        <FormGroup>
          <Label for="emailInput">아이디*</Label>
          <Input
            name="member_id"
            type="email"
            placeholder="이메일 형식으로 공백 없이 입력해주세요"
            onChange={handleValueChange}
            value={formData.member_id}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pwInput">비밀번호*</Label>
          <Input
            className="member_pw registerInput"
            name="member_pw"
            type="password"
            placeholder="비밀번호는 8~20자 영문 숫자 특수문자의 조합으로 이루어져야 합니다."
            onChange={handleValueChange}
          />
        </FormGroup>
        <FormGroup>
          <Label for="pwInput2">비밀번호확인*</Label>
          <Input
            className="confirmPw registerInput"
            type="password"
            placeholder="비밀번호와 같게 입력해주세요"
            onChange={handleValueChange}
            name="confirmPw"
          />
        </FormGroup>
        <FormGroup>
          <Label for="nameInput">이름*</Label>
          <Input
          name="member_name"
           className="member_name registerInput"
            type="text"
            placeholder="이름을 입력해주세요"
            onChange={handleValueChange}
            value={formData.member_name}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="tellInput">휴대전화번호*</Label>
          <Input
            name="member_tel"
            className="member_tel registerInput"
            type="text"
            placeholder="-과 공백을 제외한 휴대전화번호를 입력해 주세요"
            value={formData.member_tel}
            onChange={handleValueChange}
          ></Input>
        </FormGroup>
        <FormGroup>
          <Label for="address_basic">주소*</Label>
          <Input
           className="member_basic_address registerInput"
            name="member_basic_address"
            type="text"
            value={formData.member_basic_address}
            placeholder="주소 찾기 버튼을 클릭해주세요"
            readOnly
            onChange={handleValueChange}
          ></Input>
          <Button
            color="primary"
            type="button"
            className="addressSearchBtn"
            onClick={() => setAddressModal(true)}
          >
            주소찾기
          </Button>
          <Input
           className="member_detail_address registerInput"
            type="text"
            placeholder="상세주소*"
            name="member_detail_address"
            value={formData.member_detail_address}
            onChange={handleValueChange}
          ></Input>
        </FormGroup>
        <FormGroup check inline>
          <Label check>
            <Input type="checkbox" onChange={onAgreeEventHandler} /> 이벤트,
            프로모션 메일 수신동의
            <span className="form-check-sign">
              <span className="check"></span>
            </span>
          </Label>
        </FormGroup>
        <br />
        <FormGroup>
          <Button
            className="btn-round"
            color="primary"
            onClick={() => setAdminModal(true)}
          >
            관리자 전환
          </Button>
        </FormGroup>
      </Form>
      <div>
        <Button active block type="button"
                onClick={registerSubmit} 
                className="registerButton">
        회원 가입
        </Button>
      </div>
    </Container>
    //
  );
}

export default SignUp;
