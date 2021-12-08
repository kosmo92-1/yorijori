import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useLayoutEffect, useState } from 'react';
import {Badge, Button, Col, Container, Input, Row } from 'reactstrap';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import IconComponent from './IconComponent';
import { useParams } from 'react-router';

// 종류 등록
function UpdateRecipe(props) {
    const {recipe_id} = useParams();

    const [channel_id,setChannel_id]= useState("");
    const [kind_id,setKind_id]= useState("");
    const [recipe_title,setRecipe_title]= useState("");
    const [recipe_ing,setRecipe_ing]= useState("");
    const [recipe_content,setRecipe_content]= useState("");
    const [recipe_time,setRecipe_time]= useState("");
    const [file,setFile]= useState(null);
    const [fileUrl,setFileUrl] =useState("")
    const [recipe_quentity,setRecipe_quentity]= useState("");
    const [recipe_difficulty,setRecipe_difficulty]= useState("");
    const checkNum = []
    
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
    function addCheckBox(e){
        console.log(e)
        if(e.target.checked){
            checkNum.push(e.target.value)
        }
    }

    useLayoutEffect(() => {
        setChannel_id(sessionStorage.getItem('channel_id'))
        //해당 종류의 리스트를불러온다.
        axios.get('/getKindList.do?kind_id=food').then((res) => {
          console.log(res.data)
          setKindMap(res.data)
        })
        axios.get('/listIngredient.do').then((res) => {
            console.log(res.data.list)
            setIngMap(res.data.list)
          })
        //해당레시피정보를 가져온다.
        axios.get('/getRecipe.do?recipe_id='+recipe_id).then((res) =>{
            console.log('해당레시피정보')
            console.log(res.data)
            setChannel_id(res.data.recipe.CHANNEL_ID)
            setKind_id(res.data.recipe.KIND_ID)
            setRecipe_title(res.data.recipe.RECIPE_TITLE)
            setRecipe_ing(res.data.recipe.RECIPE_ING)
            setRecipe_content(res.data.recipe.RECIPE_CONTENT)
            setRecipe_time(res.data.recipe.RECIPE_TIME)
            setFile(res.data.recipe.RECIPE_THUMBNAIL)
            setRecipe_quentity(res.data.recipe.RECIPE_QUENTITY)
            setRecipe_difficulty(res.data.recipe.RECIPE_DIFFICULTY)
        })
      }, [])
    const listComponent = kindMap.map((item) => <MenuItem value={item.kind_id} key={item.kind_id}>{item.kind_name}</MenuItem>)

    const accordionComponent = ingMap.map((item)=>(
        <><Checkbox {...item.ing_name} value={item.ing_id} onChange={addCheckBox}/><IconComponent ing_icon={item.ing_icon} ing_name={item.ing_name} /></>
    ))

    var frm = new FormData();
    frm.append("recipe_id",recipe_id)
    frm.append("channel_id",channel_id)
    frm.append("kind_id",kind_id)
    frm.append("recipe_title",recipe_title)
    frm.append("recipe_ing",recipe_ing)
    frm.append("recipe_content",recipe_content)
    frm.append("recipe_time",recipe_time)
    frm.append("file",file)
    frm.append("recipe_quentity",recipe_quentity)
    frm.append("recipe_difficulty",recipe_difficulty)
    const sendAction = () =>{
        console.log(checkNum)
        // 레시피 등록
        axios.post('/updateRecipe.do', frm, {
            headers:{
                // json으로 형식을 지정해줍니다.
                "Content-type":"multipart/form-data"
            },
        })
        // post 보내고 나서 실행
        .then(res => {
            //성공하면 recipe_id를 리턴받아서 재료등록을 실행한다.
             //레시피 재료 등록
            // 재료입력을 반복해서 실행한다.
            // checkNum.forEach(element => {
            //     console.log(res.data)
            //     console.log(element)
            //     let ingJson = {
            //         recipe_id:res.data.recipe_id,
            //         ing_id:element
            //     }
            //     axios.post('/insertRecipe_ing.do',ingJson , {
            //         headers:{
            //             // json으로 형식을 지정해줍니다.
            //             "Content-type":"application/json"
            //         },
            //     })
            //     // post 보내고 나서 실행
            //     .then(res => {alert('글등록성공')})
            //     .catch(err =>{console.log('실패')})
            // });
            window.location.href='/myChannel'

        })
        .catch(err =>{console.log('실패')})

       
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
                                <MenuItem value="쉬움">쉬움</MenuItem>
                                <MenuItem value="보통">보통</MenuItem>
                                <MenuItem value="어려움">어려움</MenuItem>
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
                                <MenuItem value="30분 이하">30분 이하</MenuItem>
                                <MenuItem value="30분">30분</MenuItem>
                                <MenuItem value="1시간">1시간</MenuItem>
                                <MenuItem value="1시간 30분">1시간 30분</MenuItem>
                                <MenuItem value="2시간">2시간</MenuItem>
                                <MenuItem value="2시간 이상">2시간 이상</MenuItem>
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
                                <MenuItem value="1인분">1인</MenuItem>
                                <MenuItem value="2인분">2인</MenuItem>
                                <MenuItem value="3인분">3인</MenuItem>
                                <MenuItem value="4인분">4인</MenuItem>
                                <MenuItem value="4인분이상">4인 이상</MenuItem>
                            </Select>
                            </FormControl>
                        </div>
                        <div className="form-row">
                        <FormControl>
                            <TextField id="outlined-basic" label="레시피 이름"margin="normal" variant="outlined" value={recipe_title} onChange={handleRecipe_title} sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 800,
                                  }}/>
                        </FormControl>
                        </div>
                        {/* 재료선택 아코디언 */}
                        <Accordion style={{width:800}}>
                            <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls="panel1a-content"
                            id="panel1a-header"
                            >
                            <Typography>대표재료넣기</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                            <Typography>
                                {accordionComponent}
                            </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <div className="form-row">
                            <TextField id="outlined-basic" label="재료상세설명"margin="normal" value={recipe_ing} onChange={handleRecipe_ing} variant="outlined"sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 800,
                                  }} />
                        </div>
                        {file&&(<div className="form-row">
                            <FormControl >
                                <img src={file}></img>
                            </FormControl>
                        </div>)}
                        <div className="form-row">
                            <FormControl >
                                <Input type="file" className="input"  onChange={handleFile}></Input>
                            </FormControl>
                        </div>
                        <div className="form-row">
                        {/* <TextField id="outlined-basic" label="레시피설명" margin="normal" variant="outlined"sx={{
                                    bgcolor: 'background.paper',
                                    boxShadow: 1,
                                    borderRadius: 1,
                                    minWidth: 800,
                                  }} /> */}
                            <FormControl>
                                <TextareaAutosize
                                aria-label="empty textarea"
                                placeholder="레시피 설명을적어주세요"
                                style={{ width: 800,height:300 }}
                                value={recipe_content}
                                onChange={handleRecipe_content}
                                />
                            </FormControl>
                        </div>
                    
                        <Button color="primary" onClick={sendAction}>보내기</Button>
                    </form>
            </main>
               </Col>
           </Row>
        </Container>
    );
}
export default UpdateRecipe;