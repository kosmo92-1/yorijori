import axios from 'axios';
import React, { useState } from 'react';
import { Button, Form, FormGroup, Input, Label } from 'reactstrap';

// 종류 등록
function InsertRecipe(props) {
    const [member_id,setMember_id]= useState("hhhye");
    const [kind_id,setKind_id]= useState("food_6");
    const [recipe_title,setRecipe_title]= useState("10. 마지막 요");
    const [recipe_ing,setRecipe_ing]= useState("재료는 오이당근어쩌구 ");
    const [recipe_content,setRecipe_content]= useState("자 이렇게 만들어보세");
    const [recipe_time,setRecipe_time]= useState("30분걸려욤");
    const [file,setFile]= useState(null);
    const [recipe_quentity,setRecipe_quentity]= useState("4인분");
    const [recipe_difficulty,setRecipe_difficulty]= useState("high");
    
    
    const handleMember_id = (e) => {
        console.log(e.target.value)
        setMember_id(e.target.value);
    }
    const handleKindId = (e) => {
        console.log(e.target.value)
        setKind_id(e.target.value);
    }
    const handleRecipe_title = (e) => {
        console.log(e.target.value)
        setRecipe_title(e.target.value);
    }
    const handleRecipe_ing = (e) => {
        console.log(e.target.value)
        setRecipe_ing(e.target.value);
    }
    const handleRecipe_content = (e) => {
        console.log(e.target.value)
        setRecipe_content(e.target.value);
    }
    const handleRecipe_time = (e) => {
        console.log(e.target.value)
        setRecipe_time(e.target.value);
    }
    // 파일 등록
    const handleFile = (e) => {
        console.log(e.target.files[0])
        setFile(e.target.files[0]);
    }
    const handleRecipe_quentity = (e) => {
        console.log(e.target.value)
        setRecipe_quentity(e.target.value);
    }
    const handleRecipe_difficulty = (e) => {
        console.log(e.target.value)
        setRecipe_difficulty(e.target.value);
    }

    var frm = new FormData();
    frm.append("member_id",member_id)
    frm.append("kind_id",kind_id)
    frm.append("recipe_title",recipe_title)
    frm.append("recipe_ing",recipe_ing)
    frm.append("recipe_content",recipe_content)
    frm.append("recipe_time",recipe_time)
    frm.append("file",file)
    frm.append("recipe_quentity",recipe_quentity)
    frm.append("recipe_difficulty",recipe_difficulty)
    const sendAction = () =>{
        axios.post('/insertRecipe.do', frm, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"multipart/form-data"
            },
        })
        // post 보내고 나서 실행
        .then(res => {alert('성공')})
        .catch(err =>{alert('실패')})
    }
    return (
        <main>
            <h2 className="sr-only">레시피 작성 페이지</h2>
            <form class="writing">
                <div className="form-row">
                    <fieldset disabled>
                        <FormGroup className="col-md-6">
                            <Label>아이디</Label>
                            <Input type="text" className="input" onChange={handleMember_id} value={member_id} />
                        </FormGroup>
                    </fieldset>
                </div>
                <div className="form-row">
                    <FormGroup className="selectbox col-md-6">
                        <Label>분류</Label>
                        {/* <Input type="select" onChange={handleKindId} value={kind_id}>
                            <option>한식</option>
                            <option>양식</option>
                            <option>중식</option>
                            <option>일식</option>
                            <option>분식</option>
                            <option>채식</option>
                        </Input> */}
                        <Input type="text" className="input" onChange={handleKindId} value={kind_id}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>제목</Label>
                        <Input type="text" className="input" onChange={handleRecipe_title} value={recipe_title}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>재료</Label>
                        <Input type="text" className="input" onChange={handleRecipe_ing} value={recipe_ing}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>내용</Label>
                        <Input type="textarea" className="input" onChange={handleRecipe_content} value={recipe_content}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>소요시간</Label>
                        <Input type="text" className="input" onChange={handleRecipe_time} value={recipe_time}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        {/* VALUE 제거 */}
                        <Input type="file" className="input" onChange={handleFile}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>기준 양</Label>
                        <Input type="text" className="input" onChange={handleRecipe_quentity} value={recipe_quentity}></Input>
                    </FormGroup>
                </div>
                <div className="form-row">
                    <FormGroup className="col-md-6">
                        <Label>난이도</Label>
                        {/* TODO : change radiobtn */}
                        <Input type="text" className="input" onChange={handleRecipe_difficulty} value={recipe_difficulty}></Input>
                    </FormGroup>
                </div>
                <Button color="primary" onClick={sendAction}>보내기</Button>
            </form>
      </main>
    );
}
export default InsertRecipe;