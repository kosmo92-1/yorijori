import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import { Button, Col, Container, Input, Row } from 'reactstrap';

// 종류 등록
function InsertRecipe(props) {
    const [member_id,setMember_id]= useState("hhhye");
    const [kind_id,setKind_id]= useState("음식종류");
    const [recipe_title,setRecipe_title]= useState("10. 마지막 요");
    const [recipe_ing,setRecipe_ing]= useState("재료는 오이당근어쩌구 ");
    const [recipe_content,setRecipe_content]= useState("자 이렇게 만들어보세");
    const [recipe_time,setRecipe_time]= useState("30분걸려욤");
    const [file,setFile]= useState(null);
    const [fileUrl,setFileUrl] =useState("")
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
        setFileUrl(URL.createObjectURL(e.target.files[0]))
        console.log(fileUrl)
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

    const [kindMap, setKindMap] = useState([{ kind_id: '', kind_name: '' }])
    const [ingMap, setIngMap] = useState([{ kind_id: '', kind_name: '' }])
    useLayoutEffect(() => {
        //해당 종류의 리스트를불러온다.
        axios.get('/getKindList.do?kind_id=food').then((res) => {
          console.log(res.data)
          setKindMap(res.data)
        })
        axios.get('/getKindList.do?kind_id=ingredient').then((res) => {
            console.log(res.data)
            setIngMap(res.data)
          })
      }, [])
    const listComponent = kindMap.map((item) => <MenuItem value={item.kind_id} key={item.kind_id}>{item.kind_name}</MenuItem>)

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
       <Container>
           <Row>
                <Col><h4>레시피 작성 페이지</h4><hr></hr></Col>
           </Row>
           <Row>
               <Col>
               <main>
                    <h2 className="sr-only">레시피 작성 페이지</h2>
                    <form class="writing">
                        <div className="form-row">
                            

                        </div>
                        <div className="form-row">
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">음식종류</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={kind_id}
                                label="음식종류"
                                onChange={handleKindId}
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 200,
                                  }}
                            >
                                {listComponent}
                            </Select>
                            </FormControl>
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">난이도</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={recipe_difficulty}
                                label="난이도"
                                onChange={handleRecipe_difficulty}
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 200,
                                  }}
                            >
                                <MenuItem value="0">쉬움</MenuItem>
                                <MenuItem value="30">보통</MenuItem>
                                <MenuItem value="60">어려움</MenuItem>
                            </Select>
                            </FormControl>
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">소요시간</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={recipe_time}
                                label="소요시간"
                                onChange={handleRecipe_time}
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 200,
                                  }}
                            >
                                <MenuItem value="0">30분 이하</MenuItem>
                                <MenuItem value="30">30분</MenuItem>
                                <MenuItem value="60">1시간</MenuItem>
                                <MenuItem value="90">1시간 30분</MenuItem>
                                <MenuItem value="120">2시간</MenuItem>
                                <MenuItem value="130">2시간 이상</MenuItem>
                            </Select>
                            </FormControl>
                            <FormControl>
                            <InputLabel id="demo-simple-select-label">몇인분?</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={recipe_quentity}
                                label="몇인분"
                                onChange={handleRecipe_quentity}
                                sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 200,
                                  }}
                            >
                                <MenuItem value="1">1인</MenuItem>
                                <MenuItem value="2">2인</MenuItem>
                                <MenuItem value="3">3인</MenuItem>
                                <MenuItem value="4">4인</MenuItem>
                                <MenuItem value="5">4인 이상</MenuItem>
                            </Select>
                            </FormControl>
                        </div>
                        <div className="form-row">
                        <FormControl>
                            <TextField id="outlined-basic" label="레시피 이름"margin="normal" variant="outlined" sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 800,
                                  }}/>
                        </FormControl>
                        </div>
                        <div className="form-row">
                            <TextField id="outlined-basic" label="재료상세설명"margin="normal" variant="outlined"sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 800,
                                  }} />
                        </div>
                        {file&&(<div className="form-row">
                            <FormControl >
                                <img src={fileUrl}></img>
                            </FormControl>
                        </div>)}
                        <div className="form-row">
                            <FormControl >
                                <Input type="file" className="input" onChange={handleFile}></Input>
                            </FormControl>
                        </div>
                        <div className="form-row">
                        <TextField id="outlined-basic" label="레시피설명" margin="normal" variant="outlined"sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 800,
                                  }} />
                        </div>
                        <Button color="primary" onClick={sendAction}>보내기</Button>
                    </form>
            </main>
               </Col>
           </Row>
        </Container>
    );
}
export default InsertRecipe;