import DaumPost from 'components/DaumPost';
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Form, FormGroup, Input, Label, Modal } from "reactstrap"
import { post } from 'request';
function Mypage() {
    const location = useLocation();
    const [tempFormData, setTempFormData] = useState({
        "member_photo": null,
        "member_id": "",
        "member_name": "",
        "member_pw": "",
        "confirmPw": "",
        "member_tel": "",
        "member_basic_address": "",
        "member_detail_address": "",
        "member_type":"",
        "member_agree":"",
      });
      const [formData, setFormData] = useState({
        "member_photo": null,
        "member_id": "",
        "member_name": "",
        "member_pw": "",
        "confirmPw": "",
        "member_tel": "",
        "member_basic_address": "",
        "member_detail_address": "",
        "member_type":"",
        "member_agree":"",
      });
      const [member_photo, setMember_photo] = useState(null);
      const [userCode, setUserCode] = useState("");
      const [adminCode] =useState("q1w2e3");
      const [addressModal, setAddressModal] = React.useState(false);
      const [adminModal, setAdminModal] = React.useState(false);
      const [dropModal, setDropModal] = React.useState(false);
      const history = useNavigate();
    
        // 프로필 로딩, 페이지 로드시 한번만 실행합니다.
  useEffect(() => {
    if (location.state) {
      // 회원수정페인지 확인하는 if문
      fetch(
        `http://localhost:3001/api/user/update/${location.state.idx}`,
        {
          method: "GET",
        }
      )
        .then((data) => data.json())
        .then((json) => {
          setTempFormData({
            profile: json[0][5],
            userId: json[0][6],
            userName: json[0][1],
            userPassword: json[0][2],
            userPassword2: json[0][2],
            userMail: json[0][3],
            userPhone: json[0][4],
          });
          setFormData({
            profile: json[0][5],
            userId: json[0][6],
            userName: json[0][1],
            userPassword: json[0][2],
            userPassword2: json[0][2],
            userMail: json[0][3],
            userPhone: json[0][4],
          });
        });

    }
  }, []);

      // 파일 저장
      const saveFileImage = (e) => {
        let profile=URL.createObjectURL(e.target.files[0])
        setMember_photo(profile);
    
        setTempFormData({
          ...tempFormData,
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
        
        setTempFormData({
          ...tempFormData,
          [event.target.name]: event.target.value,
        });
        console.log(tempFormData);
      };
     
      const updateSubmit = (event) => {
        // 회원가입버튼을 누르면 동작합니다.
        event.preventDefault();
        var checkID = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
        var checkPW = /^(?=.*[a-zA-Z])((?=.*\d)|(?=.*\W)).{6,20}$/
        var checkName = /^[가-힣a-zA-Z]{2,20}$/
        var checkTel = /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/
        var checkAddress= /^[\w\Wㄱ-ㅎㅏ-ㅣ가-힣|-]{2,20}$/
        //아이디 입력제한
        if(tempFormData.member_id=== ""){
          alert("아이디를 입력해주세요")
          return;
        }
        if (!checkID.test(tempFormData.member_id)) {
          alert("아이디로 올바른 메일을 입력해 주시기 바랍니다.")
          return;
        } 
        //비밀번호 입력제한
        if(tempFormData.member_pw=== ""){
          alert("비밀번호를 입력해주세요")
          return;
        } 
        if(tempFormData.confirmPw=== ""){
          alert("비밀번호확인을 입력해주세요")
          return;
        }
        if (!checkPW.test(tempFormData.member_pw)) {
          alert("비밀번호는  8 ~ 10자 영문, 숫자 조합이여야 합니다.")
          return;
        } 
        if (tempFormData.member_pw !== tempFormData.confirmPw) {
          // 비밀번호가 서로 다른지 체크하는 validation 코드입니다.
          alert("비밀번호를 다시 확인 해주세요");
          return;
        }
        //이름 입력제한
        if(tempFormData.member_name=== ""){
          alert("이름을 입력해주세요")
          return;
        }
        if (!checkName.test(tempFormData.member_name)) {
          alert("이름을 확인해 주세요")
          return;
        } 
        //번호 입력제한
        if(tempFormData.member_tel=== ""){
          alert("번호를 입력해주세요")
          return;
        }
        if (!checkTel.test(tempFormData.member_tel)) {
          alert("-과 공백을 제외한 휴대전화 번호를 입력해주세요")
          return;
        } 
        //주소 입력제한
        if(tempFormData.member_basic_address=== ""){
          alert("주소를 입력해 주세요.")
          return;
        }
        
        if(tempFormData.member_detail_address=== ""){
          alert("상세주소를 입력해 주세요.")
          return;
        }
        
        if (!checkAddress.test(tempFormData.member_detail_address)) {
          alert("상세주소를 확인해주세요")
          return;
        } 
    
        const reqFormData = new FormData(); // 파일이 업로드되는 폼이기때문에, multipart/form-data로 전송해야합니다.
        reqFormData.append("member_photo", tempFormData.member_photo); // 입력한정보들을 폼데이터에 넣어줍니다.
        reqFormData.append("member_id", tempFormData.member_id);
        reqFormData.append("member_name", tempFormData.member_name);
        reqFormData.append("member_pw", tempFormData.member_pw);
        reqFormData.append("member_tel", tempFormData.member_tel);
        reqFormData.append("member_basic_address", tempFormData.member_basic_address);
        reqFormData.append("member_detail_address", tempFormData.member_detail_address);
        reqFormData.append("member_type", tempFormData.member_type);
        reqFormData.append("agreeEvent", tempFormData.agreeEvent);
        
        const config = {
          headers: {
            "content-type": "application/json", // 헤더설정
          },
        };
    
        post(
            `http://localhost:3001/api/user/update/${location.state.idx}`,
            reqFormData,
            config
          ).then((res) => {
            if (res.data.success === true) {
              alert(res.data.msg);
              history.push("/mypage"); // 단 회원수정을했을때는 회원관리페이지로 이동합니다.
            }
          });
        };
    
       
      const onMembertypeHandler = (event) => {
        tempFormData.member_type="1";
      };
      const onUserCodeHandler = (event) => {
        setUserCode(event.currentTarget.value);
      };
      const onAgreeEventHandler = (event) => {
        tempFormData.member_agree="1";
      };
    //주소 API에서 주소 받아와서 저장
      const getData = (fullAddress) => {
        console.log(fullAddress);
        tempFormData.member_basic_address = fullAddress;
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
      
    
    return (
        <Container>
            <Col >
            <Button>회원정보수정</Button>
            <Button>
            {/* <Link> */}
            My Channel
            {/* </Link> */}
            </Button> 
            <Button >
                 {/* <Link> */}
                 공지사항
                 {/* </Link> */}
            </Button>
            <Button
                onClick={() => setDropModal(true)}
            >회원탈퇴</Button>
            </Col>
            <Col>
            <Modal isOpen={addressModal} toggle={() => setAddressModal(false)}
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
          <Form onSubmit= {updateSubmit}>
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
        <Button onClick={adminCheck}>코드 확인</Button>
        </div>
      </Modal>

      <Modal
        isOpen={dropModal}
        className="modal-sm"
        modalClassName="bd-dropModal-sm"
        toggle={() => setDropModal(false)}
      >
        <div className="modal-header">
          <h5 className="modal-title" id="dropModalLabel">
          요리조리를 탈퇴하시겠습니까?
          </h5>
        </div>
        <div className="modal-body">
        <Button >확인</Button>
        <Button onClick={() => setDropModal(false)}>취소</Button>
        </div>
      </Modal>

      <Form>
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
          <Button  
          color="primary"
          type="button">
            확인
          </Button>
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
                onClick={updateSubmit} 
                className="updateButton">
        정보 수정
        </Button>
      </div>
            </Col>
        </Container>
        );
}

export default Mypage;