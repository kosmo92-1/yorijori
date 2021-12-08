import { Checkbox, } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import {
  Button,
  Container,
  Input,
  Row,
  Table,
  Col,
  Form,
  FormGroup,
} from "reactstrap";
import BasketRecipeList from "./BasketRecipeList";
const imagestyle = {
  height: "100px",
  width: "100px",
  borderRadius: "50%",
};
const partslist = {
  color: "black",
  fontFamily: "Arial",
  width: "100%",
  height: "100%",
  backgroundColor: "lightgray",
};

//장바구니
function Basket(props) {
    
useEffect(()=>{

       
    axios.get("/getRecipe.do", "1")
    .then((res)=>{
      console.log(res.data)
      // console.log(res.data.member_basic_address)
  //     setUserData({
  //   "member_id": res.data.member_id,
  //   "member_name": res.data.member_name,
  //   "member_basic_address": res.data.member_basic_address,
  // })
  // setAddress(userData.member_basic_address);
    })
  
},[])

  const [basketData, setBasketData] = useState({
    recipe_thumbnail: null,
    recipe_ing: "",
    recipe_title: "",
  });

  const [recipe_thumbnail, setRecipe_thumbnail] = useState(null);

  useEffect(() => {
    if (`${sessionStorage.getItem("recipe_thumbnail")}` !== "null") {
      setRecipe_thumbnail(`${sessionStorage.getItem("recipe_thumbnail")}`);
    }
  }, []);
  return (
    <Container>
      <Row>
      
        <Col xs="1"/>
        <Col xs="10">
        <h3>장바구니</h3>
          <Row>
            <Table hover responsive size="" striped>
              <thead>
                <tr>
                  <th>#</th>
                  <th>레시피</th>
                  <th>상세정보</th>
                  <th>재료</th>
                </tr>
              </thead>
            </Table>
          </Row>
          <Row>
            <Col xs="4">
              <div>
                {recipe_thumbnail && (
                  <img
                    alt="sample"
                    className="img-rounded img-responsive"
                    name="recipe_thumbnail"
                    src={recipe_thumbnail}
                    style={imagestyle}
                  />
                )}
              </div>
            </Col>
            <Col xs="2">
              <div>레시피 이름</div>
              <div>레시피 정보</div>
            </Col>
            <Col xs="5">
             <BasketRecipeList/>
            </Col>
            <Col xs="1">
                <Button>삭제</Button>
            </Col>
          </Row>
        </Col>
        <Col xs="1"/>
      </Row>
    </Container>
  );
}

export default Basket;
