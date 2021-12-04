import React, {useState} from 'react';
import { Button, Form, FormGroup, Input } from 'reactstrap';

export default function Orgchart() {
    const [activeIndex, setActiveIndex]=useState(0);

    const tabClickHandler=(index)=>{
        setActiveIndex(index);
    };

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
                  <Input
                    type="text"
                    id="InputTel"
                    name="InputTel"
                    placeholder="전화번호를 입력해주세요."
                    // onChange={}
                  />
                </FormGroup>
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
        <div>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>

          <ul className="tabs is-boxed">
            {tabContArr.map((section, index)=>{
                return section.tabTitle
            })}
          </ul>
          <div>
          	{tabContArr[activeIndex].tabCont}
          </div>
        </div>
    );
}